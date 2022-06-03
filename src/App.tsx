import Avatar from "./images/image-jeremy.png";
import Ellipsis from "./images/icon-ellipsis.svg"
import { data } from "./data";
import "./App.scss";

function App() {
  return (
    <div className="main__container">
      <div className="grid__wrapper">
        <div className="grid__left">
          <div className="grid__left-container__absolute"></div>
          <div className="grid__left-img__container">
            <img src={Avatar} alt="Avatar" className="grid__left-img" />
          </div>
          <h2 className="grid__left-header">Report for</h2>
          <h1 className="grid__left-subtitle">Jeremy Robson</h1>
          <div className="grid__left-button__container">
            <button className="grid__left-button active">Daily</button>
            <button className="grid__left-button">Weekly</button>
            <button className="grid__left-button">Monthly</button>
          </div>
        </div>
        {data.map((item) => (
          <div className="grid__item">
            <div className="grid__item-container-bottom">
              <div className="grid__item-top">
                <h2 className="grid__item-top__header">Exercise</h2>
                <img src={Ellipsis} alt="Ellipsis" className="grid__item-top__img" />
              </div>
              <h1 className="grid__item-header">
                {item.timeframes.daily.current}hrs
              </h1>
              <span className="grid__item-bottom">
                Last Week - {item.timeframes.daily.previous}hrs
              </span>
            </div>
            <div className={`grid__item-container ${item.color}`}>
              <img src={item.icon} alt="" className="grid__item-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
