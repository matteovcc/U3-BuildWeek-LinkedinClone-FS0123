import { useSelector, useDispatch } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
// import Experience from "./Experience";
import { useEffect } from "react";
import Experience from "./Experience";

const ListExperience = () => {
  const experiences = useSelector((state) => state.allExp.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExperiencesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>esperienze</h1>
      <p>qui sotto ci sara il map</p>

      {experiences.map((experience) => (
        <Experience key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

export default ListExperience;
