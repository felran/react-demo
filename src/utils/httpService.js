import React from 'react';
const host='http://localhost:8000';
const urls = {
    activities:{
        getAll:'/activities/getAll'
    }
};
const http = (module,name,params,method)=>{
    let _methodArray = ['GET','POST','PUT','DELETE'];
    let _url =  urls[module]?host+urls[module][name]:"";
    let _method = method||"GET";
    if(typeof params==='string' && _methodArray.includes(params.toUpperCase())){
        _method = params;
        params = {};
    }
    let _params =Object.assign(params,{method:_method});
    return fetch(_url,_params).then(res=>{
        if(res.ok) {
            return res.json();
        }else{
            console.log(res.statusText);
        }
    });
};
export default http;
