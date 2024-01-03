import React, { useEffect, useState } from "react";
import BarCharts from "./BarCharts";
import CartLogo from "../Images/e-commerceMain.png";
export default function Product({ openPanel, openSidePanel }) {
  return (
    <>
      <div className={`p-2 lg:p-5 ${openSidePanel ? "pl-2 w-4/5" : "w-full"}`}>
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
            Products
          </div>
        </div>
        <div className="w-full">
          <BarCharts />
        </div>
      </div>
    </>
  );
}
