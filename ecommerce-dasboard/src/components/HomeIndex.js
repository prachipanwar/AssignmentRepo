import { useEffect, useState } from "react";
import CartLogo from "../Images/e-commerceMain.png";
import Analytics from "./Analytics";
import LineCharts from "./LineCharts";
import CardMoney from "../Images/card_money.png";
import CountUp from "react-countup";
import PieCharts from "./PieCharts";
import UserSidePanel from "./UserSidePanel";
import { useAdminContext } from "./context";
export default function HomeIndex() {
  const [openSidePanel, setopenSidePanel] = useState(false);
  const { adminUsers, setAdminUsers } = useAdminContext();
  const [selectedUser, setSelectedUser] = useState({ ...adminUsers[0] });

  const openPanel = () => {
    setopenSidePanel(!openSidePanel);
  };

  const handleAdminChange = (id) => {
    let val = adminUsers.find((user) => user?.id === parseInt(id));
    setSelectedUser(val);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-start">
      {openSidePanel && (
        <div
          className={`w-[15%] h-screen flex justify-start bg-indigo-500 p-5`}
        >
          <UserSidePanel
            selectedUser={selectedUser}
            handleAdminChange={handleAdminChange}
            adminUsers={adminUsers}
            setSelectedUser
          />
        </div>
      )}
      <div className="w-full block lg:hidden bg-violet-500 p-2">
        <UserSidePanel
          selectedUser={selectedUser}
          handleAdminChange={handleAdminChange}
          adminUsers={adminUsers}
          setSelectedUser
        />
      </div>
      <div
        className={`p-2 lg:p-5 ${
          openSidePanel ? "pl-2 w-[60%]" : "w-full lg:w-3/4"
        }`}
      >
        <div
          className={`hidden lg:flex w-full justify-start items-center cursor-pointer`}
          onClick={openPanel}
        >
          {!openSidePanel && (
            <div className="w-10 h-10">
              <img src={CartLogo} alt="cart_logo" />
            </div>
          )}
          <div
            className={`flex text-xl font-bold px-4 hover:text-rose-500 ${
              openSidePanel ? "text-rose-500" : "text-slate-900"
            }`}
          >
            Dashboard
          </div>
        </div>
        <div className="w-full">
          <Analytics selectedUser={selectedUser} />
        </div>
        <div className="w-full">
          <LineCharts />
        </div>
        <div>
            Table
        </div>
      </div>
      <div className="hidden lg:block h-screen border border-slate-300"></div>
      <div className={`hidden lg:block w-1/4 flex flex-col gap-2 p-5`}>
        <div className={`flex text-xl font-bold px-4 text-rose-500`}>
          Hello {selectedUser?.name.split(" ")[0]}!
        </div>
        <div
          className={`w-11/12 flex flex-row justify-evenly items-center p-2.5 rounded-2xl bg-rose-500 m-4`}
        >
          <div className="w-16 h-16 rounded-full">
            <img src={CardMoney} alt="card_img" />
          </div>
          <div className="flex flex-col gap-1 text-white text-base">
            <div>Total Profits</div>
            <div className="text-2xl">{selectedUser?.card_count}</div>
            <div>
              <CountUp
                start={0}
                end={selectedUser?.count_up}
                duration={8}
                prefix="+"
                suffix="%"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <PieCharts />
        </div>
      </div>
       <div className="block lg:hidden w-full">
          <PieCharts />
      </div> 
    </div>
  );
}
