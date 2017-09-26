import React from 'react';
const host='http://localhost:8000';
const urls = {
    activities:{
        getAll:'/activities/getAll'
    }
};
const http = (module,name,params,method)=>{
    let _url =  urls[module]?host+urls[module][name]:"";
    let _params =Object.assign(params||{},{method:method});
    return fetch(_url,_params).then(res=>{
        return res.json();
    });
};
export default http;
