import React from "react";
import totalAmountIcon from "../assets/icons/amountBar/totalAmountIcon.svg";
import manualTotalAmountIcon from "../assets/icons/amountBar/manualTotalAmountIcon.svg";
import benefitAmountIcon from "../assets/icons/amountBar/benefitAmountIcon.svg";
import refundAmountIcon from "../assets/icons/amountBar/refundAmountIcon.svg";

export const AmountMoney = () => {
  return (
    <div className="flex flex-wrap gap-4 my-6 justify-center">
      <div className="p-4 flex items-start max-w-xs min-w-[200px] w-full sm:w-1/2 lg:w-1/4 gap-5 border rounded-lg">
        <img src={totalAmountIcon} alt="Total Amount" className="w-10 h-10" />
        <div className="flex flex-col items-start justify-between h-full">
          <span className="font-serif text-base font-normal leading-5 text-left text-slate-800">
            Monto total de <br /> transacciones
          </span>
          <span className="font-semibold text-2xl">$700.000</span>
        </div>
      </div>
      <div className="p-4 flex items-start max-w-xs min-w-[200px] w-full sm:w-1/2 lg:w-1/4 gap-5 border rounded-lg">
        <img
          src={manualTotalAmountIcon}
          alt="Manual Total Amount"
          className="w-10 h-10"
        />
        <div className="flex flex-col items-start justify-between h-full">
          <span className="font-serif text-base font-normal leading-5 text-left text-slate-800">
            Monto total de <br /> cargado manual
          </span>
          <span className="font-semibold text-2xl">$50.000</span>
        </div>
      </div>
      <div className="p-4 flex items-start max-w-xs min-w-[200px] w-full sm:w-1/2 lg:w-1/4 gap-5 border rounded-lg">
        <img
          src={benefitAmountIcon}
          alt="Benefit Amount"
          className="w-10 h-10"
        />
        <div className="flex flex-col items-start justify-between h-full">
          <span className="font-serif text-base font-normal leading-5 text-left text-slate-800">
            Monto total de <br /> cargado por beneficio
          </span>
          <span className="font-semibold text-2xl">$50.000</span>
        </div>
      </div>
      <div className="p-4 flex items-start max-w-xs min-w-[200px] w-full sm:w-1/2 lg:w-1/4 gap-5 border rounded-lg">
        <img src={refundAmountIcon} alt="Refund Amount" className="w-10 h-10" />
        <div className="flex flex-col items-start justify-between h-full">
          <span className="font-serif text-base font-normal leading-5 text-left text-slate-800">
            Monto total de <br /> devolución
          </span>
          <span className="font-semibold text-2xl">$50.000</span>
        </div>
      </div>
    </div>
  );
};