import React from "react";
import { Link } from "react-router-dom";

const FormContainer = (props: {
  children: React.ReactNode;
  height: string;
  linkTo: string;
  linkText: string;
}) => {
  const flexCenterClasses = "flex flex-col items-center justify-center";
  return (
    <div className={flexCenterClasses}>
      <div
        className={`${flexCenterClasses} + bg-slate-200 w-72 h-${props.height} + rounded-md drop-shadow-md`}
      >
        {props.children}
        <Link className="hover:text-slate-500" to={props.linkTo}>
          {props.linkText}
        </Link>
      </div>
    </div>
  );
};
export default FormContainer;
