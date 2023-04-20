import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPosts } from "../redux/actions";

const ProvaHome = () => {
  const listaPosts = useSelector((state) => state.allPosts.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {listaPosts
        .slice(0)
        .reverse()
        .map((post) => (
          <div key={post._id}>
            <p>{post.text}</p>
          </div>
        ))}
    </div>
  );
};

export default ProvaHome;
