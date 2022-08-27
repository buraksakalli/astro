import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <a href={props.href}>
      <button
        className="p-20 bg-slate-400 dark:bg-slate-900 rounded-lg hover:scale-90 transition-all duration-200 dark:text-white"
        {...props}
      >
        {props.children}
      </button>
    </a>
  );
};
