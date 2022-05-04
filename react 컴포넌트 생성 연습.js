<div id="root"></div>

class Codelab extends React.Component {
    render() {
      return <div>ddd</div>;
    }
  }
  class App extends React.Component {
    render() {
      return <Codelab />;
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  // Codelab 컴포넌트를 만들어주는 코드임.
  // Codelab 클래스 컴포넌트 안에 render메소드를 선언
  // render 메소드를 실행하면 보여질 것.
  // 우리가 만든 컴포넌트를 렌더링 하는 방법
  // 실제 페이지에 jsx코드를 렌더리할 때 사용함.
  // 첫번째 인자에는 렌더링할 컴포넌트, 두번째 인자는 이 컴포넌트를 렌더링할 엘리먼트

  
  //props 연습해본 코드
  class Codelab extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello {this.props.name}</h1> 여기에는 어디에선가 보낸 name이라는 이름의 props를 render하는 위치.
          <div>{this.props.children}</div> 여기에는 children이라는 속성이 들어갔는데 이건 문자열을 읽을 때 사용하는 것 같음.
        </div>
      )
    }
  }
  class App extends React.Component {
    render() {
      return (
        //여기서 props로 hskim이라는 값을 codelab 컴포넌트로 전달하였고,
        //"이 사이에 있는거" 라는 문자열도 children에 전달하였음.
        <Codelab name="hskim">이 사이에 있는거</Codelab>
      )
    }
  }