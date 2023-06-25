import { alertShow } from "@/components/globalComponents/AppAlert";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ALERT_PROPS_TYPE } from "../interface/Interface";
import { hideLoading, showLoading } from "@/components/globalComponents/AppLoader";

class NW {
  static getBaseUrl = () => {
    // return Utils.isProdENV() ? API_URL_PROD : API_URL_STG;
    return process.env.Base_Url as string;
  }; 

  static async Get(
    baseUrl: string,
    EndPoint: string,
    other?: {
      params?: any;
      customToken?: {
        gpId?: string;
        productCode?: string;
      };
      requestId?: string;
      sessionId?: string;
      captcha?: string;
      token?: string;
      userid?: string;
      formData?: any;
    }
  ): Promise<any> {
    let headers: any = {
      "Content-Type": "application/json",
    };
    if (other?.requestId) {
      headers.requestId = other.requestId;
    }
    if (other?.sessionId) {
      headers.sessionId = other.sessionId;
    }
    if (other?.token) {
      headers.Authorization = other.token;
    }
    if (other?.captcha) {
      headers.Authorization = other.captcha;
    }
    let config: AxiosRequestConfig = {
      headers,
      method: "GET",
    };
    if (other && other.params && Object.keys(other.params).length > 0) {
      config.params = other.params;
    }
    try {
      const response = await axios.get(baseUrl + EndPoint, config);
      return response.data;
    } catch (error: any) {
      this.handleErrors(error);
      return error;
    }
  }

  static async Post(
    baseUrl: string,
    EndPoint: string,
    other?: {
      body?: any;
      customToken?: {
        gpId?: string;
      };
      requestId?: string;
      sessionId?: string;
      token?: string;
      authorizationToken?: string;
      userid?: string;
      formDataBody?: any;
    }
  ): Promise<any> {
    let data = other?.formDataBody
      ? other.formDataBody
      : JSON.stringify(other?.body || {});
    try {
      let headers: any = {
        "Content-Type": other?.formDataBody
          ? "multipart/form-data"
          : "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": `${baseUrl}`,
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      };
      if (other?.requestId) {
        headers.requestId = other.requestId;
      }
      if (other?.sessionId) {
        headers.sessionId = other.sessionId;
      }
      if (other?.token) {
        headers.Authorization = other.token;
      }
      if (other?.authorizationToken) {
        headers.authorizationToken = other.authorizationToken;
      }
      showLoading()
      const response = await axios({
        url: baseUrl + EndPoint,
        headers,
        method: "POST",
        data: data,
      });
      hideLoading()
      return response.data;
    } catch (error: any) {
      hideLoading()
      this.handleErrors(error);
    }
  }

  static handleErrors = (error: any) => {
    if (!error) {
      return;
    }
    let message = "";
    if (error.message) {
      message = error.message;
    }
    if (error.response) {
      if (
        error.response.data &&
        error.response.data.msg &&
        typeof error.response.data.msg === "string"
      ) {
        message = error.response.data.msg || error.response.statusText;
      }
      if (
        error.response.data.message ||
        typeof error.response.data.message === "string"
      ) {
        message = error.response.data.message;
      }
      if (error.response.status === 401 || error.response.status === 403) {
        // logout user
      }
    }
    if (!message) {
      return;
    }
    let alert: ALERT_PROPS_TYPE = {
      type: "error",
      message: message,
    };
    alertShow({ type: alert.type, message: alert.message });
  };
  static getEndPoint = () => {
    let obj = {
      //USER APIS
      USER_LOGIN: "/user/login",
      USER_REGISTER: "/user/register",
      ADD_USER_ADDRESS: "/user/update-address",

      //PRODUCTS APIS
      GET_ALL_PRODUCTS: "/product",
      GET_ONE_PRODUCT: "/product" /* need to apend product id at the end  */,

      //CART APIS
      GET_USER_CART: "/cart" /* need to apend user id at the end  */,
      ADD_TO_CART: "/cart",

      //PAYMENT
      INITIATE_PAYMENT: "/payment",
    };
    return obj;
  };
}
export default NW;
export const BaseUrl = NW.getBaseUrl();
export const EndPoint = NW.getEndPoint();
