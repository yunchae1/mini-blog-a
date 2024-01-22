import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 1000;
`;

const WriterText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

function PostListItem(props) {
  const { post, onClick } = props;
  const [posts, setPosts] = useState([]);

  const { singlePost } = useParams();
  const [title] = useState("");
  const [writer] = useState("");
  const [content] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.post(
        `http://localhost:4000/${singlePost.id}`,
        {
          title: title,
          writer: writer,
          content: content,
        }
      );
      setPosts(response.data);
    };
  }, []);

  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post?.title}</TitleText>
      <WriterText>{post?.content}</WriterText>
      <WriterText>{post?.writer}</WriterText>
    </Wrapper>
  );
}

export default PostListItem;
