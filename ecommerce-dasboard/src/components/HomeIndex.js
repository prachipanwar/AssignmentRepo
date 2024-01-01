import { useState } from "react";
import CartLogo from "../Images/e-commerceMain.png";
import Analytics from "./Analytics";
export default function HomeIndex() {
  const [openSidePanel, setopenSidePanel] = useState(false);

  const openPanel = () => {
    setopenSidePanel(!openSidePanel);
  };
  console.log("open Panel--", openSidePanel);
  return (
    <div className="w-full flex flex-row items-start">
      {openSidePanel && (
        <div className={`w-1/6 h-screen flex justify-start bg-blue-800 p-5`}>
          <div className="w-10 h-10">
            <img src={CartLogo} alt="cart_logo" />
          </div>
        </div>
      )}
      <div className={`p-5 ${
            openSidePanel ? "pl-2 w-5/6" : "w-full"
          }`}>
        <div
          className={`flex justify-start items-center cursor-pointer`}
          onClick={openPanel}
        >
          {!openSidePanel && (
            <div className="w-10 h-10">
              <img src={CartLogo} alt="cart_logo" />
            </div>
          )}
          <div
            className={`flex text-xl font-bold px-4 hover:text-pink-500 ${
              openSidePanel ? "text-pink-500" : "text-slate-900"
            }`}
          >
            Dashboard
          </div>
        </div>
        <div className="w-full">
            <Analytics />
        </div>
      </div>
    </div>
  );
}
