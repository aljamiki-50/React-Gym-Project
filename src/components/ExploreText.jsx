import React from "react";

function ExploreText({ p1Style, h1Style, text1, text2, title }) {
  const styles = [
    "btn-primary",
    "btn-danger",
    "btn-Warning",
    "btn-success",
    "btn-info",
    "btn-light",
    "btn-dark",
    "btn-light",
    h1Style,
    p1Style,
  ];

  const checkBtn = styles.includes(h1Style) ? h1Style : styles[1];

  return (
    <div>
      <div className=" mt-[100px] flex flex-col gap-y-4 Poppins">
        <h1
          className={`  ${h1Style} `}
          // className="  "
        >
          {title}
        </h1>
        <div>
          <p className={`  ${p1Style} `}>{text1}</p>
          <p className={`  ${p1Style}`}> {text2}</p>
        </div>
      </div>
    </div>
  );
}

export default ExploreText;
