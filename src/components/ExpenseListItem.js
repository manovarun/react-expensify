import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ExpenseListItem = ({
  id,
  description,
  note,
  amount,
  createdAt,
  dispatch
}) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {amount} - {createdAt}
      </p>
      {note && <p>{note}</p>}
    </div>
  );
};

export default connect(null)(ExpenseListItem);
