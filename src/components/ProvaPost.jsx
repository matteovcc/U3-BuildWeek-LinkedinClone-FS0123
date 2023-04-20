import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions";

const CreatePost = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleCreatePost = (e) => {
    e.preventDefault();
    dispatch(createPost(content));
  };

  return (
    <div>
      <form onSubmit={handleCreatePost}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
      <div>
        <h1>{content.text}</h1>
      </div>
    </div>
  );
};

export default CreatePost;
