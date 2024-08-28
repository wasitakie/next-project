import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  buttonStyle?: string;
  //   handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface Bakery {
  cakeid: string;
  cake_name: string;
  cake_image: any;
  slices: number;
  slug: string;
}

export interface fullBakery {
  cakeid: string;
  cake_name: string;
  cake_image: any;
  slices: number;
  slug: string;
}
