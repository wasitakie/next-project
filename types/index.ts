export interface CustomButtonProps {
  title: string;
  buttonStyle: string;
}

export interface Bakery {
  cake_id: number;
  cake_name: string;
  cake_description: string;
  cake_image: any;
  slices: number;
  quantity: number;
  category_name: string;
}

export interface fullBakery {
  cake_id: number;
  cake_name: string;
  cake_description: string;
  cake_image: any;
  slices: number;
}

export interface Product {
  cakeid: number;
  cake_name: string;
  cake_description: string;
  cake_image: any;
  slices: number;
  quantity: number;
}
