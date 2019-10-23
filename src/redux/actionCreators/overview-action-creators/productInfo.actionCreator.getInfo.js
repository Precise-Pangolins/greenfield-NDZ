import prodInfoSuccess from '../../actions/overview-actions/productInfo.actions.getInfo.js';
import axios from 'axios';

const apiUrl = 'http://18.223.1.30';

export const getProdInfo = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/products/${id}`)
      .then(res => {
        dispatch(prodInfoSuccess(res.data));
      })
      .catch(err => {
        console.log('error getting product info', err);
        throw err;
      });
  };
};

export default getProdInfo;
