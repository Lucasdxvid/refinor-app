import React from "react";
import totalAmountIcon from "../assets/icons/amountBar/totalAmountIcon.svg";
import manualTotalAmountIcon from "../assets/icons/amountBar/manualTotalAmountIcon.svg";
import benefitAmountIcon from "../assets/icons/amountBar/benefitAmountIcon.svg";
import refundAmountIcon from "../assets/icons/amountBar/refundAmountIcon.svg";

export const AmountMoney = () => {
  return (
    <div className="flex gap-4 my-6 justify-center">
      <div className="p-4 flex items-start max-w-60 gap-5">
        <img src={totalAmountIcon} alt="Refund Amount" className="w-10 h-10" />
        <div className="flex flex-col items-start">
          <span className="font-serif text-base font-normal leading-5 text-left text-slate-800 max-w-48">
            Monto total de transacciones
          </span>
          <span className="font-semibold text-2xl">$700.000</span>
        </div>
      </div>
      <div className="p-4 flex items-start max-w-60 gap-5">
        <img
          src={manualTotalAmountIcon}
          alt="Refund Amount"
          className="w-10 h-10"
        />
        <div className="flex flex-col items-start">
          <span className="font-serif text-base font-normal leading-5 text-left text-slate-800 max-w-48">
            Monto total cargado manual
          </span>
          <span className="font-semibold text-2xl">$50.000</span>
        </div>
      </div>
      <div className="p-4 flex items-start max-w-60 gap-5">
        <img
          src={benefitAmountIcon}
          alt="Refund Amount"
          className="w-10 h-10"
        />
        <div className="flex flex-col items-start">
          <span className="font-serif text-base font-normal leading-5 text-left text-slate-800 max-w-48">
            Monto total cargado por beneficio
          </span>
          <span className="font-semibold text-2xl">$50.000</span>
        </div>
      </div>
      <div className="p-4 flex items-start max-w-60 gap-5">
        <img src={refundAmountIcon} alt="Refund Amount" className="w-10 h-10" />
        <div className="flex flex-col items-start">
          <span className="font-serif text-base font-normal leading-5 text-left text-slate-800 max-w-48">
            Monto total devolución
          </span>
          <span className="font-semibold text-2xl">$50.000</span>
        </div>
      </div>
    </div>
  );
};
