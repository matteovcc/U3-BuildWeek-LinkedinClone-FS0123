import { useSelector, useDispatch } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
// import Experience from "./Experience";
import { useEffect } from "react";
import Experience from "./Experience";
import ModalExperience from "./ModalExperience";
import { BsPencil } from "react-icons/bs";

const ListExperience = () => {
  const experiences = useSelector((state) => state.allExp.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExperiencesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white rounded mb-3 border">
      <div className="d-flex justify-content-between mt-2">
        <h2 className="ms-3">Experience</h2>
        <div>
          <ModalExperience className="me-3" />
          <BsPencil className="me-3" style={{ width: 25, height: 25 }} />
        </div>
      </div>

      {experiences.map((experience) => (
        <Experience key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

export default ListExperience;
