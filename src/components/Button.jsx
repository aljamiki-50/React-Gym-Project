import React from "react";

function Button({ path, children, type, onClick, btnSize, btnStyle }) {
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
    <div>
      <button onClick={onClick} className={`btn   ${checkBtn} `}>
        {children}
      </button>
    </div>
  );
}

export default Button;
