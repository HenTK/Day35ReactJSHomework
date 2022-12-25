import React, { Component } from "react";

import chairList from "../../data/danhSachGhe.json";
import Chair from "./Chair";
import Title from "./Title"
import "./style.scss";
import Info from "./Info";
import { connect } from "react-redux";
import RenderChairList from "./RenderChairList";

class BaiTapDatGhe extends Component {
  renderContent = () => {
    return this.props.chair.map((ele) => {
      return (
        <div key={ele.hang}>
          <div className="seat">{ele.hang}</div>
          {ele.danhSachGhe.map((chair, idx) => {
            return (
              <Chair
                key={chair.soGhe}
                hang={ele.hang}
                name={idx + 1}
                dangChon={chair.dangChon}
                daDat={chair.daDat}
                listItem = {chair}
              />
            );
          })}
        </div>
      );
    });
  };

  render() {
    return  <div className="row">
              <div className="col-6 text-center">
                <Title/>
                {this.renderContent()}
              </div>
              <div className="col-6">
                <Info/>
                <RenderChairList/>
              </div>
            </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    chair: state.movieReducer.chair,
  };
};

export default connect(mapStateToProps)(BaiTapDatGhe);
