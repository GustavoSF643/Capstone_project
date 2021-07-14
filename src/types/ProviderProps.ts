import { User } from "./User";

export interface ProviderProps {
  user: User;
  tokenParse: string;
  isLogin: boolean;
}
