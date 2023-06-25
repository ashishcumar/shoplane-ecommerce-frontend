import { AlertColor } from "@mui/material";

export interface ALERT_STATE {
  isShow: boolean;
  message: string;
}
export interface MODAL_STATE {
  isShow: boolean;
  position?: "bottom" | "center" | "top";
  title?: string;
  children?: JSX.Element;
  closeDisable?: boolean;
}
export interface BOTTOM_MODAL_STATE {
  isShow: boolean;
  position?: "bottom";
  title?: string;
  children?: JSX.Element;
  closeDisable?: boolean;
}

export interface ALERT_PROPS_TYPE {
  type: AlertColor;
  message: string;
}

export interface PRODUCT_OBJ {
  id: string;
  name: string;
  preview: string;
  numOfProducts: number;
  isAccessory: number;
  brand: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface PRODUCT_DETAIL_OBJ {
  id: string;
  name: string;
  preview: string;
  numOfProducts: number;
  isAccessory: number;
  brand: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  pics:string[];
  cartCount?:number
}


