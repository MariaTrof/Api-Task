import { ClassAttributes, InputHTMLAttributes, LegacyRef } from "react";
import { JSX } from "react/jsx-runtime";

export function CustomInput (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>, ref: LegacyRef<HTMLInputElement> | undefined) {
  return <input ref={ref} {...props} />;
};


