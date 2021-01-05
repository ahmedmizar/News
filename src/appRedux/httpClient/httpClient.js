import * as axios from "axios";
import Configs from "../../config/config";

import { getlang } from "../../globals/globals";

let token= localStorage.getItem("token")

const httpClient = axios.create();
httpClient.defaults.baseURL = Configs.getEndpoint;
httpClient.defaults.timeout = Configs.getTimeout;
var accessToken = "";
var refreshToken = "";
var spinnerCounter = 0;

httpClient.interceptors.response.use(
  function (response) {
    hideSpinner();
    return response.data;
  },
  function (error) {
    hideSpinner();
    if (error.response) {
      errorHandler(error.response.status, error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.message) {
      //error.message
      return Promise.reject(error.message);
    }
  }
);

// function changeLangs  {
  
  
//   var lang = getlang();
//   console.log(lang);
//   localStorage.setItem("flag", false);
//   if (lang === "en") {
//     changeLang("ar");
//     if (this.props.changeLan) {
//       this.props.changeLan("ar");
//     }
//     var flag = localStorage.getItem("flag") === "true";
//     this.setState({ flag });
//   } else {
//     changeLang("en");
//     if (this.props.changeLan) {
//       this.props.changeLan("en");
//     }
//     var flag = localStorage.getItem("flag") === "false";
//     this.setState({ flag });
//   }
 
// };

function errorHandler(err, data) {
  // handle global error
  var errMsg = "";

  if (data.error_description) {
    if (data.error_description === "Bad credentials") {
     
    } else errMsg = data.error_description;
  } else {
    if (err === 404) {
      
    } else if (err === 401) {
     
    } else {
      if (typeof data == "string") {
        errMsg = data;
      } else {
        
      }
    }
  }
  if (err === 401) {
    window.location.href = "/quacck";
  }
//   displayToast(errMsg);
}

export function setAccessToken(token) {
  accessToken = token;
}

export function getAccessToken() {
  return accessToken;
}

export function setRefreshToken(token) {

  refreshToken = token;
}

export function getRefreshToken() {
  return refreshToken;
}


export function setRequestHeader() {
  if ((token == "") ) {
    httpClient.defaults.headers.common["Auth"] =
      "Basic " + btoa("web:test");
    httpClient.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
      httpClient.defaults.headers.post["Accept-Language"] = getlang();
  }
  else {
    httpClient.defaults.headers.common["Auth"] = `Bearer ${token}`;
    httpClient.defaults.headers.post["Content-Type"] = "application/json";
    httpClient.defaults.headers.post["Accept-Language"] = getlang();

  }
}




export function HtttpGetDefult(
  url,
  serviceKey,
  showSpinner = true,
  isLogin = false,
  isRefresh = false
) {

  if (showSpinner) {
    addSpinner();
  }

  setRequestHeader(isRefresh, isLogin, url);
  return new Promise((resolve, reject) => {
    httpClient
      .get(Configs.getEndpoint + url)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  }
  );
}

export function HtttpPostDefult(
  url,
  data,
  serviceKey,
  showSpinner = true,
  isLogin = false,
  isRefresh = false

) {
  if (showSpinner) {
    addSpinner();
  }
  setRequestHeader();
  return new Promise((resolve, reject) => {
    httpClient
      .post(Configs.getEndpoint + url, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  }
  );
  
}

export function HtttpDeleteDefult(
  url,
  data,
  serviceKey,
  showSpinner = true,
  isLogin = false,
  isRefresh = false

) {
  if (showSpinner) {
    addSpinner();
  }
  setRequestHeader();
  return new Promise((resolve, reject) => {
    httpClient
      .delete(Configs.getEndpoint + url, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  }
  );
}

export function HtttpPutDefult(
  url,
  data,
  serviceKey,
  showSpinner = true,
  isLogin = false,
  isRefresh = false

) {
  if (showSpinner) {
    addSpinner();
  }
  setRequestHeader();
  return new Promise((resolve, reject) => {
    httpClient
      .put(Configs.getEndpoint + url, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  }
  );
}

function addSpinner() {
  if (document.getElementById("spinner")) {
    spinnerCounter++;
    document.getElementById("spinner").style.display = "block";
    document.getElementById("root").classList.add("spinnerDisplayed");
  }
}

function hideSpinner() {
  spinnerCounter--;
  if (spinnerCounter <= 0 && document.getElementById("spinner")) {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("root").classList.remove("spinnerDisplayed");
  }
}

export default httpClient;
