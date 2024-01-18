const Info = () => {
  return (
    <div className="about__info grid ">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Level</h3>
        <span className="about__subtitle">Intermediate</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">Completed 10+</span>
      </div>

      <div className="about__box">
        <i className="bx bx-chevron-right-circle about__icon"></i>
        <h3 className="about__title">Currently</h3>
        <span className="about__subtitle">Pursuing Degree</span>
      </div>
    </div>
  );
};

export default Info;
