import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 60000,            // 30 sec hunxa auto default
    timeoutErrorMessage: "Server Timed Out"  ,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"

    },
    //security  
    withCredentials: true,               //cross side ma cookie sent
    //CSRF Token  if we have
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN"                            
});





//client side caching -> axios-cache Intercepter

//interceptors
  //request
  // axiosInstance.interceptors.request.use((config)=>{

  // });
    
//   });



  //response


export default axiosInstance