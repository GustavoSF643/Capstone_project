import { ReactNode } from "react";
import { UserInfoProvider } from "./UserInfo";

interface ProvidersProps {
  children: ReactNode
}

const Providers = ({children}: ProvidersProps) => {
  return(
    <>
      <UserInfoProvider>
        {children}
      </UserInfoProvider>
    </>
  )
}

export default Providers;