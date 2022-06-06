import "./styles.css";

const Count = (props) => {
  return (
    <div className="count">
      <h3>{props.number}</h3>
    </div>
  );
};

export default Count;
