import React, { Component } from 'react'
import { connect } from 'react-redux'

class RenderChairList extends Component {
    renderCharList = () => {
      console.log(this.props.chairList);
      console.log(this.props.totalMoney);
      return this.props.chairList.map((ele) => {
        return (
          <div key={ele.soGhe} className = "row text-dark bg-warning">
            <div className='col-4'>
              {ele.soGhe}
            </div>
            <div className='col-6'>
              {ele.gia}
            </div>
            <div className='col-2'>
            <i className = "fa-solid fa-trash-can" onClick={()=> this.props.deleteItem(ele.soGhe)}></i>
            </div>
          </div>
        );
      });

    }

  render() {
    return (
      <div>
        <div className='row text-dark bg-warning'>
          <div className='col-4'>
            Số ghế
          </div>
          <div className='col-6'>
            Giá
          </div>
          <div className='col-2'>
            Hủy
          </div>
        </div>
        {this.renderCharList()}
        <div className='row text-dark bg-warning'>
          <div className='col-4'>Tổng tiền</div>
          <div className='col-6'>{this.props.totalMoney}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      chairList: state.movieReducer.chairList,
      totalMoney: state.movieReducer.totalMoney,
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {
      deleteItem(soGhe) {
        dispatch({
          type: "DELETE_ITEM",
          payload: soGhe,
        });
      },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RenderChairList);
