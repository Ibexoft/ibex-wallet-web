// TransactionList.js
import React from "react";
import TransactionCard from "./TransactionCard";

const TransactionList = ({ transactions }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        {transactions.map((txn, index) => (
          <TransactionCard
            key={index}
            type={txn.type}
            category={txn.category}
            note={txn.note}
            amount={txn.amount}
            account={txn.account}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
