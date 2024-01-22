import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import axios from "axios";
import MainPage from "./MainPage";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.form`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostWritePage = () => {
  const [TitleValue, setTitleValue] = useState("");
  const [ContentValue, setContentValue] = useState("");
  const [IsForUpdate, setIsForUpdate] = useState(false);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onContentChange = (event) => {
    setContentValue(event.currentTarget.value);
  };

  const onSubmitArticle = (event) => {
    event.preventDefault();

    const article = { title: TitleValue, content: ContentValue };

    // axios.post로 변경
    axios
      .get("http://localhost:3001/", article)
      .then((response) => {
        console.log("글이 성공적으로 제출되었습니다", response.data);
        alert("글이 작성되었습니다.");
      })
      .catch((error) => {
        console.error("글 추가 중 오류 발생:", error);
        alert(
          "글 추가 중 오류가 발생했습니다. 자세한 내용은 콘솔을 확인하세요."
        );
      });
  };

  return (
    <div>
      {/* 상태를 관리하는 함수를 전달 */}
      <MainPage
        handleTitleChange={onTitleChange}
        handleContentChange={onContentChange}
        handleSubmit={onSubmitArticle}
      />

      <form>
        <br />
        <label>Title: </label>
        <input
          onChange={onTitleChange}
          value={TitleValue}
          type="text"
          name="title"
        />
        <hr></hr>
        <div>
          <textarea
            onChange={onContentChange}
            value={ContentValue}
            name="content"
          />
        </div>
        <button onClick={onSubmitArticle}>
          {IsForUpdate ? "수정" : "등록"}
        </button>
      </form>
    </div>
  );
};

export default PostWritePage;
