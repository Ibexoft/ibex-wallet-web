// TransactionCard.js
import React from "react";

const getCardStyles = (type) => {
    switch (type) {
      case "expense":
        return { bgColor: "bg-danger", iconColor: "text-white" };
      case "income":
        return { bgColor: "bg-success", iconColor: "text-white" };
      case "transfer":
        return { bgColor: "bg-info", iconColor: "text-white" };
      default:
        return { bgColor: "bg-light", iconColor: "text-dark" };
    }
  };

const TransactionCard = ({ account, category, note, amount, type }) => {
  const { bgColor, iconColor } = getCardStyles(type);

  return (
    <div className="card box-shadow my-3">
      <div className="card-body py-2 px-3">
        <div className="row d-flex align-items-center">
          <div className="col-md-5">
            <span
              className={` ${iconColor} rounded-circle ${bgColor} px-2 py-1 me-2`}
            >
              <i className={type === "expense" ? "bi bi-wallet2" : type === "income"
                ? " bi bi-currency-dollar"
                : "bi bi-arrow-left-right"}></i>
            </span>
            <span>{category}</span>
          </div>
          <div className="col-md-3">
            <div className="text-start">
              <span className="text-muted">
                <small>{note}</small>
              </span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-between">
              <span>{account.charAt(0).toUpperCase() + account.slice(1)}</span>
              <span>{amount}</span>
            </div>
          </div>
          <div className="col text-end">
            <i className="bi bi-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
