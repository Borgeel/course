import "../styles.css";

const Box = (props) => {
  const styles = {
    backgroundColor: props.on ? "#000000" : "#FFFFFF",
  };

  return <div className="box" style={styles} onClick={props.toggle}></div>;
};

export default Box;
