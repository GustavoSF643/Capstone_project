export interface DecodedProps {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

export interface InterestedPeople {
  city: string;
  contact: string;
  district: string;
  state: string;
  email: string;
  id: number;
  img: string;
}

export interface PetProps {
  name: string;
  type: string;
  breed: string;
  gender: string;
  age: number;
  size: string;
  color: string;
  coat: string;
  health: string;
  currentState: number;
  img: string;
  interestedPeople: InterestedPeople[];
  about: {
    description: string;
    behavior: string;
    history: string;
  };
  userInfo: {
    fullName: string;
    state: string;
    city: string;
    img: string;
    contact: string;
    email: string;
  };
  userId: number;
  id: number;
}
