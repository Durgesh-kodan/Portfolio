const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-nodejs"></i>
            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
          <i className='bx bxl-go-lang' ></i>
            <div>
              <h3 className="skills__name">Golang</h3>
              <span className="skills__level">basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-mongodb"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxs-edit-alt"></i>
            <div>
              <h3 className="skills__name">Express</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-django"></i>
            <div>
              <h3 className="skills__name">Django</h3>
              <span className="skills__level">basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-firebase"></i>
            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
