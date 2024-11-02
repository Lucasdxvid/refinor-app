import React from "react";
import RefundAmountIcon from "../assets/icons/amountBar/RefundAmountIcon.svg";
export const AmountMoney = () => {
  return (
    <div className="flex gap-4">
      <div className="p-4 flex flex-col items-center max-w-60">
        <div className="flex items-center gap-2">
          <img
            src={RefundAmountIcon}
            alt="Refund Amount"
            className="w-10 h-10"
          />
          <span className="text-lg font-normal">
            Monto total de transacciones
          </span>
        </div>
        <span className="font-semibold text-2xl">$700.000</span>
      </div>
    </div>
  );
};
