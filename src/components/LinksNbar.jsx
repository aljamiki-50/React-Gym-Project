import React from "react";
import { Link } from "react-router-dom";

function LinksNbar({key, path, children, type, onClick, btnSize, btnStyle }) {
  const styles = [
    "btn-primary",
    "btn-danger",
    "btn-Warning",
    "btn-success",
    "btn-info",
    "btn-light",
    "btn-dark",
    "btn-light",
    btnStyle,
  ];
  const checkBtn = styles.includes(btnStyle) ? btnStyle : styles[1];

  return (
    <Link key={key} to={path} className={` ${checkBtn}`} onClick={onClick}>
      {children}
    </Link>
  );
}

export default LinksNbar;
