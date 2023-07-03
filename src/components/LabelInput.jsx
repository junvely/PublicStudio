import React from "react";
import { StMessage } from "styles/Components";
function LabelInput({
  children,
  type = "text",
  name,
  value,
  message,
  onChange,
}) {
  return (
    <>
      <div>
        <label htmlFor={name}>{children}</label>
        <input type={type} name={name} value={value} onChange={onChange} />
      </div>
      {message && <StMessage>{message}</StMessage>}
    </>
  );
}

export default LabelInput;
