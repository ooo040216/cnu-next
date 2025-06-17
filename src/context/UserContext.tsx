@@ -1,13 +1,16 @@
"use client";
import { createContext, ReactNode, useContext, useState } from "react";
// 과제 1.1 UserContext 구현
// User
interface User {
  name: string;
  // age: number
  // 추가하고 싶은 속성들 ...
  userId: string;
  age: number;
  phoneNumber: string;
}
// UserContextType
interface UserContextType {
@@ -22,7 +25,12 @@ export const UserContext = createContext<UserContextType | undefined>(

// 2. Provider 생성
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ name: "" });
  const [user, setUser] = useState<User>({
    name: "이예원", 
    userId: "yewonlee",
    age: 22,
    phoneNumber: "010-1234=5678"
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
// 3. user 정보를 사용하기 위한 custom hook
export const useUser = () => {
  const context = useContext(UserContext);
  // 에러처리
  if (!context) {
    throw new Error("error");
  }
  return context;
};
