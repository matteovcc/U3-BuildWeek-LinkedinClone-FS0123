import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions";

const AddPost = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleCreatePost = e => {
    e.preventDefault();
    dispatch(createPost(content));
  };

  return (
    <>
      <div className="bg-white">
        <form onSubmit={handleCreatePost}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="user-img"
            width={48}
            height={48}
            className="me-3 align-baseline"
          />

          <textarea
            className="w-75"
            placeholder="Avvia un post"
            value={content}
            onChange={e => setContent(e.target.value)}
          />

          <button type="submit" className="ms-2">
            ➕
          </button>
          <div className="my-1 d-flex" style={{ justifyContent: "space-around" }}>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "small",
                fontWeight: "bold"
              }}
              className="text-secondary py-2 mb-1 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="blue"
                className="bi bi-image me-2"
                viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
              </svg>{" "}
              Foto
            </button>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "small",
                fontWeight: "bold"
              }}
              className="text-secondary py-2 mb-1 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="green"
                className="bi bi-play-btn-fill me-2"
                viewBox="0 0 16 16">
                <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
              Video
            </button>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "small",
                fontWeight: "bold"
              }}
              className="text-secondary py-2 mb-1 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="orange"
                className="mercado-match me-2"
                width="24"
                height="24"
                focusable="false">
                <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
              </svg>
              Evento
            </button>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "small",
                fontWeight: "bold"
              }}
              className="text-secondary py-2 mb-1 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="red"
                className="mercado-match me-2"
                width="24"
                height="24"
                focusable="false">
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
              Scrivi un articolo
            </button>
          </div>
        </form>
        <div>
          <h1>{content.text}</h1>
        </div>
      </div>
    </>
  );
};

export default AddPost;
