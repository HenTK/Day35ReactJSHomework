import React, { Component } from "react";
import { connect } from "react-redux";

class Chair extends Component {
  mappingClass = () => {
    const { hang, dangChon, daDat } = this.props;
    if (dangChon) {
      return "selected";
    }

    if (!hang) {
      return "number";
    }

    if (daDat) {
      return "booked";
    }

    if (!daDat) {
      return "available";
    }
  };

  render() {
    return (
      <div className={`chair ${this.mappingClass()}`} onClick = {()=> this.props.changeStateList(this.props.listItem)}>{this.props.name}</div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    changeStateList(chairidx) {
      dispatch({
        type: "CHANGE_STATE_LIST",
        payload: chairidx,
      });
    },
  };
};


export default connect(null, mapDispatchToProps)(Chair);