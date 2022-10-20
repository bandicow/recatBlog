/*islint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  /**대충 서버에서 가져왔다고 치기 */
  let logo = "나만의 작은 블로그✨";
  let [title, chtitle] = useState([
    "남자 코트 추천",
    "가을 코트 추천",
    "농구 코트 추천",
  ]);
  let [like, pluslike] = useState(0);

  return (
    <div className="App">
      <div className="nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <button>가나다순 정렬</button>
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              pluslike(like + 1);
            }}
          >
            👍
          </span>{" "}
          {like}
          <button
            onClick={() => {
              let titlecopy = [...title];
              titlecopy[0] = "여자 코트 추천";
              chtitle(titlecopy);
            }}
          >
            제목 수정
          </button>
        </h4>
        <p>10월 15일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>10월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>10월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
