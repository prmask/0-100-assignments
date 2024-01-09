import React from "react";

export const Button = (props) => {
  const onButtonClick = () => {
    props.setCount(props.count + 1);
  };
  return <div>Button</div>;
};
