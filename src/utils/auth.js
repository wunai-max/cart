import Cookies from "js-cookie";

const Tokenkey = "token";


export function setToken(token){  //设置token
    return Cookies.set(Tokenkey,token)
}

export function getToken(){  //获取token
    return Cookies.get(Tokenkey)
}

export function removeToken(){  //删除token
    return Cookies.remove(Tokenkey)
}