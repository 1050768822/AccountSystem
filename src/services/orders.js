import request from '../utils/request';
import qs from 'qs';
import HTTP_SERVER from './serviceConfig';

const ORDER_API = `${HTTP_SERVER}/api/orders`;

export async function query(params) {
    console.log(params);
    console.log(qs.stringify(params));
    return request(`${ORDER_API}?${qs.stringify(params)}`);
}

export async function create(params) {
    return request(ORDER_API, {
        method: 'post',
        body: JSON.stringify(params)
    });
}

export async function modify(params) {
    return request(`${ORDER_API}/${params['id']}`, {
        method: 'put',
        body: JSON.stringify(params)
    });
}

export async function del(params) {
    return request(`${ORDER_API}/${params['id']}`, {
        method: 'delete'
    });
}

export async function getOrderNumber() {
    return request(`${ORDER_API}/getOrderNumber`);
}

export async function queryOrderById(orderId) {
    console.log(orderId);
    return request(`${ORDER_API}/${orderId}`);
}
