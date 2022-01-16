import Axios from "../Utils/Axios";

export const getAllIndices = (callback) => (dispatch) => {
  Axios.get("all_indices")
    .then((res) => {
      dispatch({
        type: "ALL_INDICES",
        payload: res.data.body.data,
      });
      callback(res.data.body.data);
    })
    .catch((err) => {
      console.log("err", err);
    });

  // let sample = [
  //   {
  //     index: "NIFT 50",
  //     category: "NIFTY",
  //     last: 18251,
  //   },
  //   {
  //     index: "BANK NIFTY",
  //     category: "NIFTY",
  //     last: 30265,
  //   },
  //   {
  //     index: "SENSEX",
  //     category: "NIFTY",
  //     last: 50458,
  //   },
  //   {
  //     index: "NIFT 50",
  //     category: "NIFTY",
  //     last: 18251,
  //   },
  //   {
  //     index: "BANK NIFTY",
  //     category: "NIFTY",
  //     last: 30265,
  //   },
  //   {
  //     index: "SENSEX",
  //     category: "NIFTY",
  //     last: 50458,
  //   },
  //   {
  //     index: "NIFT 50",
  //     category: "NIFTY",
  //     last: 18251,
  //   },
  //   {
  //     index: "BANK NIFTY",
  //     last: 30265,
  //   },
  //   {
  //     index: "SENSEX",
  //     last: 50458,
  //   },
  //   {
  //     index: "NIFT 50",
  //     last: 18251,
  //   },
  //   {
  //     index: "BANK NIFTY",
  //     last: 30265,
  //   },
  //   {
  //     index: "SENSEX",
  //     last: 50458,
  //   },
  //   {
  //     index: "NIFT 50",
  //     last: 18251,
  //   },
  //   {
  //     index: "BANK NIFTY",
  //     last: 30265,
  //   },
  //   {
  //     index: "SENSEX",
  //     last: 50458,
  //   },
  //   {
  //     index: "NIFT 50",
  //     last: 18251,
  //   },
  //   {
  //     index: "BANK NIFTY",
  //     last: 30265,
  //   },
  //   {
  //     index: "SENSEX",
  //     category: "SENSEX",
  //     last: 50458,
  //   },
  //   {
  //     index: "NIFT 50",
  //     last: 18251,
  //   },
  //   {
  //     index: "BANK NIFTY",
  //     last: 30265,
  //   },
  //   {
  //     index: "SENSEX",
  //     category: "SENSEX",
  //     last: 50458,
  //   },
  //   {
  //     index: "NIFT 50",
  //     last: 18251,
  //   },
  //   {
  //     index: "BANK NIFTY",
  //     last: 30265,
  //   },
  //   {
  //     index: "SENSEX",
  //     last: 50458,
  //   },
  // ];
  // dispatch({
  //   type: "ALL_INDICES",
  //   payload: sample, //res.data.body.data,
  // });
  // callback(sample);
};
