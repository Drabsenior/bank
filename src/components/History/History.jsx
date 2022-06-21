import React from "react";
import "./History.css";
const History = () => {
  return (
    <div className="historywrapper">
      <div className="historyheading">
        <span>WHO WE ARE</span>
      </div>
      <div className="historycontents">
        <div className="historyitems">
          <img
            src="https://media.istockphoto.com/photos/dictionary-series-history-picture-id487145924?b=1&k=20&m=487145924&s=170667a&w=0&h=SoVcwbQ1ExSOPz4LPC_TTVOMIM2E_8yzXNbOHN6u5tk="
            alt=""
          />
          <span className="historytext">History of Tale</span>
          <span className="historydesc">
            {" "}
            returning for a second season on Netflix, expected to arrive in
            2022. Here's everything we know so far about Fate
          </span>
        </div>
        <div className="historyitems">
          <img
            src="https://www.state.gov/wp-content/uploads/2019/02/IRM.jpg"
            alt=""
          />
          <span className="historytext">Information</span>
          <span className="historydesc">
            {" "}
            returning for a second season on Netflix, expected to arrive in
            2022. Here's everything we know so far about Fate
          </span>
        </div>
        <div className="historyitems">
          <img
            src="https://media.istockphoto.com/photos/friends-linking-arms-in-unity-picture-id1199706305?k=20&m=1199706305&s=612x612&w=0&h=uJShYZ2DBU6M_F1_oztFeocH0GVq2g94p6cak_I3z_M="
            alt=""
          />
          <span className="historytext">Community</span>
          <span className="historydesc">
            {" "}
            returning for a second season on Netflix, expected to arrive in
            2022. Here's everything we know so far about Fate
          </span>
        </div>
      </div>
    </div>
  );
};

export default History;
