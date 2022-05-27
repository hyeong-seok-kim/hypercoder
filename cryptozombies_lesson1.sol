pragma solidity ^0.4.19;

contract ZombieFactory {
    // 여기에 이벤트 선언

    uint256 dnaDigits = 16;
    uint256 dnaModulus = 10**dnaDigits;

    // Zombie 구조체 선ㅓ
    // 문자열 타입의 name과 uint256 정수 타입에 256비트 자릿수를 가는 dna를 선언.
    struct Zombie {
        string name;
        uint256 dna;
    }

    // Zombie 구조체의 배열을 생성하고 이름을 zombies이라고 지정.
    // public 이라고 적어주었기 때문에 다른 컨트랙드들이 읽을 수 있는 배열이 됨.
    Zombie[] public zombies;

    // 좀비를 생성하는 함수.
    // 좀비의 이름과 좀비의 dna를 입력하면 Zombie 구조체의 형태로 zombies 배열에 push.
    // 함수의 인자명은 _ 언더스코어로 시작하여 전역변수와 구분해주는 것이 약속임.
    function _createZombie(string _name, uint256 _dna) private {
        zombies.push(Zombie(_name, _dna));
        // 여기서 이벤트 실행
    }

    // 랜덤한 dna 값을 생성하기 위한 함수
    // 여기서는 returns를 작성해주어서 함수의 리턴 값이 uint256타입이도록
    // unit256 타입의 변수 rand를 선언해주는데, 인자로 전달된 값을 keccak256 해시함수로 변환하여 저장
    // 함수 제어자 view를 사용하면 해당 함수가 데이터를 보기만 하고 변경하지 않는 다는 것을 의미함.
    // 추가로 pure 함수는 함수의 인자로 전달된 요소 외에 함수 외부의 값을 가져와서 사용하지 않도록 해줌.
    // 마지막 리턴하는 값은 변환된 해시 값을 16진수로 매핑하기 위해 dnaModulus, 즉 10의 16승 값으로 나누어줌.
    // 이렇게 하면 결과적으로 리턴되는 값은 16자리의 dna값이 됨.
    function _generateRandomDna(string _str) private view returns (uint256) {
        uint256 rand = uint256(keccak256(_str));
        return rand % dnaModulus;
    }

    // 좀비의 이름을 넣으면 새로운 dna를 가지는 좀비를 만드는 함수 생성, 종합 버전이라고 볼 수 있음.
    // 좀비의 이름을 입력 받으면, 해당 이름을 _generateRandomDna함수에 넣어서 16자리의 랜덤한 해시 결과 값을 반환하게 되고 그 값을 randDna에 넣어줌.
    // 그리고 그 값을, dna를 _createZombie 함수에 인자로 전달해주면서 새로운 좀비의 탄생을 알림.
    function createRandomZombie(string _name) public {
        uint256 randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }
}
