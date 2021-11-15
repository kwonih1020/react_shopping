import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [blogName, blogNameChange] = useState([
    "Sisters Thai",
    "Pho Sate",
    "Subway",
  ]);
  let [liked, likedChange] = useState([0, 0, 0]);

  let [modal, modalChange] = useState(false);
  // 모달찰을 켜고 닫는 스위치

  // function 반복된UI() {
  //   var 어레이 = [];
  //   for (var i = 0; i < 3; i++) {
  //     어레이.push(<div>안녕</div>);
  //   }
  //   return 어레이
  // }
  // 반복된UI();
  // for 반복문을 쓰고 싶다면?
  // 보통 함수안에서 사용함 / array에 HTML 추가하는 방식 / 그리고 array를 return으로 뱉어냄

  function nameChange() {
    var newArray = [...blogName]; // deep copy 필요, 서로 독집적인 값늘 저장하는 방식 reference data type
    newArray[1] = "Pho So 1";
    blogNameChange(newArray);
  }

  function sortName() {
    var newSort = [...blogName];
    var sortChange = newSort.sort();
    blogNameChange(sortChange);
  }

  function likeCount(i) {
    let newLike = [...liked];
    newLike[i]++;
    likedChange(newLike);
  }

  // let posts = "Famous Resturant Blog";

  return (
    <div className="App">
      <div className="black-nav">
        <div>Resturant Blog</div>
        <button id="sort" onClick={sortName}>
          sort
        </button>
      </div>

      {/* 반복되는 div map함수로 만드는 방법 */}
      {blogName.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h3>
              {a}
              <span
                onClick={() => {
                  likeCount(i);
                }}>
                👍
              </span>
              {liked[i]}
            </h3>
            <p>Date: Feb. 19th</p>
            <hr />
          </div>
        );
      })}

      <button
        onClick={() => {
          modalChange(!modal);
        }}>
        Open
      </button>
      {modal === true ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>Title</h2>
      <p>Date</p>
      <p>Details</p>
    </div>
  );
}

export default App;

// 리액트는 데이퍼 바인딩이 쉬움
// { 변수명 } { 함수 } { 이미지 } 등
// src, id, href 등의 속성에도 { 변수명, 함수 등 } 가능
// JSX에서 style 속성 집어 넣을때 style = { object자료형으로 만듬 }, camelCase 작명습관에 속성명을 바꿔주세요.
// style 또한 변수에 넣어서 { styel변수 이름 } 넣어서 간단하게 만들수 있습니다.

// 데이터는 1. 변수에  넣거나 , 2. state에 넣거나
// state 는 1. 변수 대신 쓰는 데이터 저장 공간 / 2. useState() 을 이용해 만들어야함 / 3. 문자, 숫자, array, object 다 저장 가능합니다.
// state 에 데이터 저장 해놓는 이유: 웹이 app 처럼 동작하게 만들고 싶어서
//      state는 변경되면 HTML이 자동으로 재렌더링 됩니다. (새로고침 없이도 스므수하게 렌더링 됨)

// React Component
//  유의사항  1. 이름은 대괄호 2. return()안에 태그 하나로 묶어야함
// 반복적으로 출현하는건 component로 만들면 좋음, 자주 변경되는 HTML UI들도 좋음, 다른 페이지 만들 떄도 components로 만들면 좋음
// 단점: state 쓸 때 복잡해짐 - props 문법 이용해서 state를 사용해야함.

// if 대신 삼항연산자

// 반복문으로 HTML 반복 시킬수 있음
// .map() => {반복할데이터.map(function() { return <HTML> })}
