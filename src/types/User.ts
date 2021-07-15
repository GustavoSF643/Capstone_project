export interface UserInfo {
  district: string;
  state: string;
  city: string;
}

export interface User {
  fullname: string;
  email: string;
  password: string;
  fullName: string;
  age: number;
  contact: number;
  info: UserInfo;
  id: number;
  img: string;
  favorites: {
    name: string;
    img: string;
    breed: string;
    gender: string;
    age: number;
    color: string;
    id: number;
  }[];
}
