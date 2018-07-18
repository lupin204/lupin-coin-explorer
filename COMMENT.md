# ReactJS로 암호화폐 탐색기 만들기 (Clone Coding)

- 준비물
  - node.js
  - npm
  - editor - vscode
- 셋팅
  - create-react-app 모듈 설치
  ```sh
  >npm install -g create-react-app      <- npm
  >yarn global add create-react-app     <- yarn
  ```
  - react-app 프로젝트 생성
  ```sh
  >create-react-app lupin-coin-explorer
  ```
  - 서버 구동
  ```sh
  >cd lupin-coin-explorer
  >npm start        <- npm
  >yarn start       <- yarn
  ```
  - <http://localhost:3000> 에서 "React App" 확인




- 용어정리 in Nomad
  >**`react`**<br>
  UI 라이브러리 x 프레임워크)

  >**`JSX`**<br>
  자바스크립트 안의 HTML소스. <br>리액트 컴포넌트를 만들때 사용하는 언어
  
  >**`Component`**<br>
  모든 Component는 render function을 가진다

  >**`render()`**<br>
  뭔가를 보여주는. 출력하는 기능

  >**`index.js`**<br>
  react, reactDOM, css, 'app' Component 을 불러온다<br>
  ReactDOM 이 그린다(render). js파일의 'app'이라는 Component를 HTML파일의 id='root' 인곳에.

  >**`ReactDOM`**<br>
  리액트 라이브러리를 `웹사이트`에 올려주도록, 출력(render)하도록 해주는 모델 --> App.js의

  >**`ReactNative`**<br>
  리액트 라이브러리를 `모바일앱`에 올려주도록, 출력(render)하도록 해주는 모델

- Component 기본 양식
    ```jsx
    // Movie.js
    import React, { Component } from 'react';
    import './Movie.css'

    class Movie extends Component{
        render(){
            return(
                <h1>hello this is a movie.</h1>
            )
        }
    }

    export default Movie
    ```
- App.js 에서 import 'Component'
    ```jsx
    // App.js
    import Movie from './Movie'

    class App extends Component {
    render() {
        return (
            <div className="App">
                hello!!
                <Movie />
            </div>
            );
        }
    }
    ```

- 기본 동작 원리
    - Component 생성 -> render() -> return -> JSX

    - Component의 Life-Cycle
        1. render<br>
        componentWillMount() -> render() -> componentDidMount()
            >**`componentWillMount()`**<br>
            외부에서 API 등올 호출할때
            
            >**`render()`**<br>
            view에 render

            >**`componentDidMount()`**<br>
            다 그렸을때
        2. update<br>
        componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()
            >**`componentWillReceiveProps()`**<br>
            

            >**`shouldComponentUpdate()`**<br>
            old-props 와 new-props를 비교해서 다르면, update = "TRUE"

            >**`componentWillUpdate()`**<br>
            로딩중 텍스트를 표시하거나 SPINNER(뱅글뱅글)를 표시

            >**`render()`**<br>
            view에 render

            >**`componentDidMount()`**<br>
            다 그렸을때. SPINNER 등을 숨김.


- React의 2가지 주요 컨셉
    - state
        - Whenever your 'state' is changed in side of 'Component',
        that function will 'render' again.

        setState() 할때마다 새로 그려준다.

        >**`Smart Component`**<br>
        state와 props 둘 다 있는 component<br>
        class로 시작하는 component
        ```JSX
        class MoviePoster extends Component({
            static propTypes = {
                poster: propTypes.string.isRequired
            }
            render(){
                return(
                    <img src={this.props.poster} alt="Movie Poster" />
                )
            }
        })
        ```

        >**`Dumb Component`**<br>
        --> Stateless Functional Component<br>
        state는 없고 props만 있는 component<br>
        function로 시작하는 component<br>
        그냥 return을 하기위해 존재하는 component<br>
        --> render도 없고, 라이프사이클도 없음
        ```JSX
        function MoviePoster({poster}){
            return {
                <img src={poster} alt="Movie Poster" />
            }
        }
        MoviePoster.propTypes = {
            poster: PropTypes.string.isRequired
        }
        ```

    - props
        - data 전달 : 부모 Component -> 자식 Component 

        - 모든 data는 메인 Component(App.js) 에 모두 들어있고, 그 data를 자식 Component에게 전파함

        - 부모 Component에서 받는 data(props)를 체크할 수 있음.<br>
        props를 Validation 체크함
        ```JSX
        /* Movie.js */
        import PropTypes from 'prop-types'; /* npm 설치 불필요 */
        ...
        class Movie extends Component{
            static propTypes = {
                /* string타입이며, 필수값임 */
                title: PropTypes.string.isRequired,
                poster: PropTypes.string.isRequired
            }
            render() { ... }
        }

        ```
        - 부모 Component - App.js
        ```JSX
        const movies = [ "Matrix", "Full Metal Jacket", "Oldboy", "Star Wars"];
        <ChildComponent aaa={movies[0]} />
        ```

        - 자식 Component - ChildComponent.js
            - typeof props = "object" 
            - props = {"title" : "Matrix"}
        ```JSX
        class ChildComponent extends Component{
            render(){
                return(
                    <div>
                        <MoviePoster />
                        <h1>{this.props.title}</h1>
                        <h1>hello this is a movie.</h1>
                    </div>
                )
            }
        }
        ```
        - Arrays.map()을 사용하여 리스트 전달
        ```JSX
        class App extends Component {
            render() {
                return (
                <div className="App">
                    {movies.map(movie => {
                    return <Movie title={movie.title} poster={movie.poster} />
                    })}
                </div>
                );
            }
        }
        ```
- AJAX
    >**`Asynchronous Javascript and XML`**<br>
    --> JSON (Javascript Object Notation)
    --> Object를 Javascript로 표현하는 기법
    - React의 AJAX : fetch request 이용함
    - promise






