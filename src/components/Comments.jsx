import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
const Comments = () => {
  const params = useParams();
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/` + params.post_id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyM2Q1YjU4ZTA2MjAwMTRhNGVmZmYiLCJpYXQiOjE2ODIwNjI2ODMsImV4cCI6MTY4MzI3MjI4M30.fv3GtLyD760SkVc57ZOwMfiHMZkqkbgVO-hRXN_LAVw",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setComments(data);
        // dispatch({ type: GET_COMMENTS, payload: allComments });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  });

  return (
    <div className="mx-auto">
      <ol>
        {comments.map((comment) => (
          <li>
            <p className="fw-semibold">{comment.comment}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Comments;
