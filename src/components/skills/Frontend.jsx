const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-html5"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
          <i className='bx bxl-bootstrap' ></i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-javascript"></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-react"></i>
            <div>
              <h3 className="skills__name">ReactJS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
          <i className='bx bxl-typescript' ></i>
            <div>
              <h3 className="skills__name">Typescript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
          <i className='bx bxl-tailwind-css'></i>
            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
