import { createContext, useContext, useState } from "react";
import { ADMIN_USERS } from "../utils/common";
const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [adminUsers, setAdminUsers] = useState([...ADMIN_USERS]); // array of admin users

  return (
    <AdminContext.Provider value={{ adminUsers, setAdminUsers }}>
      {children}
    </AdminContext.Provider>
  );
};
export const useAdminContext = () => {
    return useContext(AdminContext);
  };
