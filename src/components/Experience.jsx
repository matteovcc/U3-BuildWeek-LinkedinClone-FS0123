const Experience = ({ experience }) => {
  return (
    <div className="d-flex flex-column mb-2 px-2 py-1">
      <div className="d-flex">
        <div>
          <img
            src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188434?e=1689811200&v=beta&t=oArOJOYE7ZD473jCAUzajl3JIXLkxiTvDx61tGEjeAk"
            alt="logo"
            width={48}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="d-flex flex-column">
          <div>
            <h5 className="mb-0">{experience.role}</h5>
            <p className=" mb-0 fw-semibold">{experience.company}</p>
            <p className="subtitles mb-0">
              Data di inizio :{experience.startDate}
            </p>
            <p className="subtitles mb-0">Data di fine: {experience.endDate}</p>
            <p className="subtitles mb-0">{experience.area}</p>
            <p className="mb-0">{experience.description}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Experience;
