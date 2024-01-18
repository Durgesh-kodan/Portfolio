import { useState } from "react";
import "./qualification.css";
const Qualifiaction = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualifiaction">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualifiaction__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="bx bxs-graduation qualification__icon"></i>Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualifiaction__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab-(2)}
          >
            <i className="bx bx-briefcase qualification__icon"></i> Experience
          </div>
        </div>
        <div className="qualifiaction__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">IIIT Bhopal</span>
                <div className="qualification__calender">
                  <i className="bx bxs-calendar"></i>2020-present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX designer</h3>
                <span className="qualification__subtitle">IIIT Bhopal</span>
                <div className="qualification__calender">
                  <i className="bx bxs-calendar"></i>2022-present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">IIIT Bhopal</span>
                <div className="qualification__calender">
                  <i className="bx bxs-calendar"></i>2020-present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">web design</h3>
                <span className="qualification__subtitle">IIIT Bhopal</span>
                <div className="qualification__calender">
                  <i className="bx bxs-calendar"></i>2020-present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Design</h3>
                <span className="qualification__subtitle">IIIT Bhopal</span>
                <div className="qualification__calender">
                  <i className="bx bxs-calendar"></i>2020-present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX designer</h3>
                <span className="qualification__subtitle">IIIT Bhopal</span>
                <div className="qualification__calender">
                  <i className="bx bxs-calendar"></i>2022-present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">IIIT Bhopal</span>
                <div className="qualification__calender">
                  <i className="bx bxs-calendar"></i>2020-present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifiaction;
