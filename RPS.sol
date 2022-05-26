//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract RPS {
	constructor () payable {}

	// enum으로 아래 가위 바위 보 외에는 예외가 발생하지 않도록 선언
	enum Hand {  // 가위/바위/보 값에 대한 enum
		rock, paper, scissors
	}

	// 플레이어의 상태 또한 대기, 이김, 패배, 비김, 4가지 있으므로 enum 으로 선언하여 예외가 없도록
	enum PlayerStatus {  // 플레이어의 상태
		STATUS_WIN, STATUS_LOSE, STATUS_TIE, STATUS_PENDING
  }

	// 구조체를 이용하여 지불 가능한 주소 변수와 256비트 까지의 베팅 금액이 들어갈 변수 선언
	struct Player {
		address payable addr;  // 주소
		uint256 playerBetAmount;  // 베팅 금액
	}

	// 방의 개념을 가지는 구조체를 생성
	// 해당 구조체에는 방장 정보와 참여자 정보, 모두가 베팅한 금액이 들어감.
	struct Game {
		Player originator;  // 방장 정보
		Player taker;  // 참여자 정보
		uint256 betAmount;  // 총 베팅 금액
	}

	// 생성한 게임의 상태 또한 enum으로 예외가 없도록 한다. 게임의 상태로는 방을 만들어둔 상태, 결과가 나온 상태, 결과에 따른 금액이 분배된 상태
	// 마지막으로 게임 중간에 에러가 발생한 상태인 4가지로 나누어볼 수 있겠다.
	enum GameStatus { // 게임의 상태
		STATUS_NOT_STARTED, STATUS_STARTED, STATUS_COMPLETE, STATUS_ERROR
	}

	// 매핑 메소드를 이용하여 rooms라는 배열에 uint 타입으로 생성할 수 있음.
	mapping(uint => Game) rooms; // rooms[0], rooms[1] 형식으로 접근할 수 있으며, 각 요소는 Game 구조체 형식입니다.
	uint roomLen = 0; // rooms의 키 값입니다. 방이 생성될 때마다 1씩 올라갑니다.

	// 방이 생성됬을 때, 방장이 가위,바위,보가 아닌 다른 값이 지정될 수 있으므로, createRoom 실행 전, 확인이 필요.
	// require를 이용하여 확인을 할 수 있음.
	modifier isValidHand (Hand _hand) {
    require((_hand  == Hand.rock) || (_hand  == Hand.paper) || (_hand == Hand.scissors));
    _;
	}

	// 게임을 생성하는 함수 앞서 enum으로 가위,바위,보 외에는 예외가 없도록하는 별도의 타입을 생성하였고
	// 이에 부합하는 인수만 들어오도록 설정. 또한 public으로 공개, 베팅 금액을 설정하는 방이니까 payable.
	// 그리고 해당 함수의 리턴 값은 방번호
	function createRoom (Hand _hand) public payable returns (uint roomNum) { 
    	rooms[roomLen] = Game({
        betAmount: msg.value,
        gameStatus: GameStatus.STATUS_NOT_STARTED,
        originator: Player({
            hand: _hand,
            addr: payable(msg.sender),
            playerStatus: PlayerStatus.STATUS_PENDING,
            playerBetAmount: msg.value
        }),
        taker: Player({
            hand: Hand.rock,
            addr: payable(msg.sender),  
            playerStatus: PlayerStatus.STATUS_PENDING,
            playerBetAmount: 0
        })
		roomNum = roomLen; // 현재 방 번호를 roomNum에 할당시켜 반환
    	roomLen = roomLen+1;  // 다음 방 번호를 설정
    });
	}

	// 참가자가 방에 참가를 할 때 사용하는 함수. 참가할 방 번호, 가위,바위,보 중 무엇을 낼지랑, 베팅 금액을 인자로 넣게 됨.
	// 참가자 또한 가위,바위,보 외에 다른 것을 낼 수 있으므로 isValidHand 함수 제어자를 이용하여 확인한다.
	function joinRoom(uint roomNum, Hand _hand) public payable isValidHand( _hand) { 
		// 방을 만들 때랑 다르게 참가하는 경우이므로, 아래와 같은 인스턴스를 설정한다.
		rooms[roomNum].taker = Player({
			hand: _hand,
			addr: payable(msg.sender),
			playerStatus: PlayerStatus.STATUS_PENDING,
			playerBetAmount: msg.value
    });
		// 참가자가 방에 참가하게되면서 입력한 게임의 베팅 금액이 바뀌게되므로 betAmount을 변경해주는 코드.
		rooms[roomNum].betAmount = rooms[roomNum].betAmount + msg.value;
		// joinRoom 함수가 끝난다는 말은 방장과 참가자가 모두 가위,바위,보를 냇다는 뜻이므로
		// 게임의 결과를 확인할 수 있어야함.
		// 그래서 마지막에 compareHands 함수를 호출하도록 함.
		compareHands(); // 게임 결과 업데이트 함수 호출
	}
	// 게임의 결과를 산출해낼 함수
	function compareHands(uint roomNum) private{
		// 가위바위보 값이 enum 타입이기 때문에, 정수형으로 바꾸어주는 코드
		uint8 originator = uint8(rooms[roomNum].originator.hand);
		uint8 taker = uint8(rooms[roomNum].taker.hand);
		
		rooms[roomNum].gameStatus = GameStatus.STATUS_STARTED;
	
		// 가위바위보 값에 따라 방장과 참가자의 상태(승패)를 설정함.
		if (taker == originator){ // 비긴 경우
			rooms[roomNum].originator.playerStatus = PlayerStatus.STATUS_TIE;
			rooms[roomNum].taker.playerStatus = PlayerStatus.STATUS_TIE;
		}
		else if ((taker +1) % 3 == originator) { // 방장이 이긴 경우
			rooms[roomNum].originator.playerStatus = PlayerStatus.STATUS_WIN;
			rooms[roomNum].taker.playerStatus = PlayerStatus.STATUS_LOSE;
		}
		else if ((originator + 1)%3 == taker){  // 참가자가 이긴 경우
			rooms[roomNum].originator.playerStatus = PlayerStatus.STATUS_LOSE;
			rooms[roomNum].taker.playerStatus = PlayerStatus.STATUS_WIN;
		} else {  // 그 외의 상황에는 게임 상태를 에러로 업데이트한다
			rooms[roomNum].gameStatus = GameStatus.STATUS_ERROR;
		}
	}
	// 승패에 따른 이더를 송금하는 함수를 실행할 수있는 주체가 방장 또는 참가자인지 확인하는 함수 제어자를 선언.
	modifier isPlayer (uint roomNum, address sender) {
  		require(sender == rooms[roomNum].originator.addr || sender == rooms[roomNum].taker.addr);
  		_;
	}
	// 승패에 따른 베팅 금액을 송금하는 함수.
	// 방 번호를 인자로 받는다.
	// transfer(value) 함수를 이용해서 송금을 한다.
	function payout(uint roomNum) public payable {
		if (rooms[roomNum].originator.playerStatus == PlayerStatus.STATUS_TIE && rooms[roomNum].taker.playerStatus == PlayerStatus.STATUS_TIE) {
			rooms[roomNum].originator.addr.transfer(rooms[roomNum].originator.playerBetAmount);
			rooms[roomNum].taker.addr.transfer(rooms[roomNum].taker.playerBetAmount);
		} else {
			if (rooms[roomNum].originator.playerStatus == PlayerStatus.STATUS_WIN) {
				rooms[roomNum].originator.addr.transfer(rooms[roomNum].betAmount);
			} else if (rooms[roomNum].taker.playerStatus == PlayerStatus.STATUS_WIN) {
				rooms[roomNum].taker.addr.transfer(rooms[roomNum].betAmount);
			} else {
				rooms[roomNum].originator.addr.transfer(rooms[roomNum].originator.playerBetAmount);
				rooms[roomNum].taker.addr.transfer(rooms[roomNum].taker.playerBetAmount);
			}
		}
		rooms[roomNum].gameStatus = GameStatus.STATUS_COMPLETE; // 게임이 종료되었으므로 게임 상태 변경
}
}

