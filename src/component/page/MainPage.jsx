import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

function MainPage(props) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Button
          title="글쓰기"
          onClick={() => {
            navigate("/post-write");
          }}
        />

        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
