import React from "react";
import { FaArrowCirculeLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackButton = ({ url }) => {
  return (
    <Link to={url} className="btn btn-reverse btn-back">
      <FaArrowCirculeLeft /> Back
    </Link>
  );
};

export default BackButton;
