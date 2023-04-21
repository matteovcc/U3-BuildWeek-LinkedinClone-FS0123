import { useState, useEffect } from "react";
import MyNavbar from "./MyNavbar";

import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MyNavbar />
      <Card className="bg-white rounded w-50 mx-auto mt-2 p-1">
        <h3 className="ms-1">Commenti:</h3>
        <div className="d-flex justify-content-start mt-1">
          <ol>
            {comments.map((comment) => (
              <li>
                <p className="fw-bold">{comment.author}</p>
                <p className="fw-semibold">{comment.comment}</p>
                <small>{comment.createdAt}</small>
              </li>
            ))}
          </ol>
        </div>
      </Card>
    </>
  );
};

export default Comments;
