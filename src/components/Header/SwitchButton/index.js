import "./styles.css";

const SwitchButton = () => {
  return (
    <div className="container">
      <div className="switch-holder">
        <div className="switch-label">
          <i className="fa fa-bluetooth-b"></i>
          <span>Dark Mode</span>
        </div>
        <div className="switch-toggle">
          <input type="checkbox" id="bluetooth" />
          <label for="bluetooth"></label>
        </div>
      </div>
    </div>
  );
};

export default SwitchButton;
