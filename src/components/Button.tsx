import type {ReactElement } from "react";

export interface ButtonProps {
        variant: "primary" | "secondary";
        size: "sm" | "md" | "lg";
        text?: string;
        startIcon?: ReactElement;
        endIcon?: ReactElement;
        onClick: () => void;
        full?:boolean;
        load?:boolean;
}
const sizeStyle = {
        sm: "text-xs px-3 py-1.5",
        md: "text-xm px-4 py-1",
        lg: " px-5 py-1",
};

const variantStyles = {
        primary: "bg-violet-600 text-slate-100",
        secondary: "bg-violet-200 text-violet-900",
};
const defaultStyles = "rounded-lg flex font-light w-fit flex justify-center mt-2 hover:cursor-pointer ";

export const Button = (props: ButtonProps) => {
        //@ts-ignore
        return (
                <button onClick={props.onClick}
                        className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyle[props.size]
                                } ` + `${props.full && 'w-full'} ${ props.load && 'opacity-20'  }` }
                >
                        <span className="self-center ">{props.startIcon}</span>
                        {props.text}
                        <span className="self-center ">{props.endIcon}</span>
                </button>
        );
};
