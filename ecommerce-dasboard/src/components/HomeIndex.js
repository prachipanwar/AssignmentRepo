import { useState } from "react";
import UserSidePanel from "./UserSidePanel";
import Dashboard from "./Dashboard";
import Product from "./Products";
import { useAdminContext } from "./context";
export default function HomeIndex() {
  const [openSidePanel, setopenSidePanel] = useState(false);
  const [openMobilePanel, setOpenMobilePanel] = useState(false);
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const { adminUsers, setAdminUsers } = useAdminContext();
  const [selectedUser, setSelectedUser] = useState({ ...adminUsers[0] });

  const openPanel = () => {
    setopenSidePanel(!openSidePanel);
  };

  const handleAdminChange = (id) => {
    let val = adminUsers.find((user) => user?.id === parseInt(id));
    let newAdminArray = [...adminUsers];
    //to Rearrange admin array
    newAdminArray.sort((a, b) => {
      if (a.id === val.id) return -1;
      if (b.id === val.id) return 1;
      return 0;
    });
    setAdminUsers(newAdminArray);
    setSelectedUser(val);
  };
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-start relative">
      {openSidePanel && (
        <div
          className={`w-[15%] h-screen flex justify-start bg-indigo-500 p-5`}
        >
          <UserSidePanel
            selectedUser={selectedUser}
            handleAdminChange={handleAdminChange}
            adminUsers={adminUsers}
            setSelectedTab={setSelectedTab}
          />
        </div>
      )}
      <div className="w-full block lg:hidden bg-violet-500 p-2">
        <UserSidePanel
          selectedUser={selectedUser}
          handleAdminChange={handleAdminChange}
          adminUsers={adminUsers}
          setSelectedTab={setSelectedTab}
          setOpenMobilePanel={setOpenMobilePanel}
          openMobilePanel={openMobilePanel}
        />
      </div>
      {openMobilePanel && (
        <div className="w-1/2 md:w-1/4 h-20 p-3 rounded-xl absolute right-10 top-10 bg-white  border border-indigo-500">
          <div className="flex flex-col gap-2 items-center text-indigo-500 text-base font-semibold">
            <div
              onClick={() => {
                setSelectedTab("dashboard");
              }}
              className="cursor-pointer"
            >
              Dashboard
            </div>
            <div
              onClick={() => {
                setSelectedTab("product");
              }}
              className="cursor-pointer"
            >
              Products
            </div>
          </div>
        </div>
      )}
      {selectedTab === "product" ? (
        <Product
          openSidePanel={openSidePanel}
          openPanel={openPanel}
          selectedUser={selectedUser}
        />
      ) : (
        <Dashboard
          openSidePanel={openSidePanel}
          openPanel={openPanel}
          selectedUser={selectedUser}
        />
      )}
    </div>
  );
}
