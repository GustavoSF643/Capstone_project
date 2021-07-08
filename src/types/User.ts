export interface UserInfo {
  district: string;
  state: string;
  city: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  fullName: string;
  age: number;
  phone: number;
  info: UserInfo;
  id: number;
}
