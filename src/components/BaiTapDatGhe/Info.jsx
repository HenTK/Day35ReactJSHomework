import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    return (
            <>
                <div className='text-warning title'>
                    <h1>DANH SÁCH GHẾ ĐÃ CHỌN</h1>
                </div>
                <div>
                    <div className='color booked'></div>
                    <span className='text-warning'>GHẾ ĐÃ ĐẶT</span>
                </div>
                <div>
                    <div className='color selected'></div>
                    <span className='text-warning'>GHẾ ĐANG CHỌN</span>
                </div>
                <div>
                    <div className='color available'></div>
                    <span className='text-warning'>GHẾ CHƯA ĐẶT</span>
                </div>
            </>
    )
  }
}
