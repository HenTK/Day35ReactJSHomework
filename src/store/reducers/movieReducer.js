import chairList from "../../data/danhSachGhe.json";

const DEFAULT_STATE = {
  chair: [...chairList],
  chairList: [],
  totalMoney: 0,
};

export const movieReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_STATE_LIST": {
      let totalMoney = state.totalMoney;
      const data = [...state.chair];
      const dataprice = [...state.chairList];
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].danhSachGhe.length; j++) {
          if (data[0].danhSachGhe[j].soGhe === payload.soGhe) {
            alert("Invalid position");
            return;
          }
          if (data[i].danhSachGhe[j].soGhe === payload.soGhe) {
            if (data[i].danhSachGhe[j].daDat === true) {
              alert("ghế đã được chọn, chọn ghế khác");
              break;
            }
            data[i].danhSachGhe[j].dangChon = true;
            dataprice.push(data[i].danhSachGhe[j]);
            totalMoney += data[i].danhSachGhe[j].gia;
          }
        }
      }
      state.chair = data;
      state.chairList = dataprice;
      state.totalMoney = totalMoney;
      break;
    }

    case "DELETE_ITEM": {
      let totalMoney = state.totalMoney;
      const data = [...state.chair];
      const dataprice = [...state.chairList];

      dataprice.forEach((element) => {
        if (element.soGhe == payload) {
          totalMoney -= element.gia;
          dataprice.splice(element.i, 1);
          console.log(element.soGhe);
        }
      });

      // data.forEach((element) => {
      //   element.forEach((ele) => {
      //     if (element.ele.soGhe == payload) element.ele.dangChon = false;
      //   });
      // });
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].danhSachGhe.length; j++) {
          if (data[i].danhSachGhe[j].soGhe == payload)
            data[i].danhSachGhe[j].dangChon = false;
        }
      }
      state.chair = data;
      state.chairList = dataprice;
      state.totalMoney = totalMoney;
      break;
    }

    default:
      break;
  }

  return { ...state };
};
