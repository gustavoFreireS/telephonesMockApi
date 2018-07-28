import React from "react";
import {connect} from "react-redux";
const mapStateToProps = state => {
  if (state.telephones.data) {
    return {telephones: state.telephones.data};
  } else {
    return {telephones: []};
  }
};

const ConnectedList = ({telephones}) => (
  <div className="container">
    <div className="container-list">
      <dev className="listHeader">
        <div className="item">Number</div>
        <div className="item">Cost</div>
      </dev>
      <ul className="list-group list-group-flush">

        {
          telephones.map(el => (
            <li className="list-group-item">
              <div className="item">{el.number}</div>
              <div>${el.cost.toFixed(2)}</div>
            </li>
          ))
        }
      </ul>
    </div>

  </div>
);
const PhoneList = connect(mapStateToProps)(ConnectedList);
export default PhoneList;
