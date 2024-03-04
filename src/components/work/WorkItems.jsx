const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a
        href={item.gitlink}
        className="work__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-github work__button-git "></i>
      </a>
      <a
        href={item.link}
        className="work__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="work__button-word"> Demo </span>{" "}
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
