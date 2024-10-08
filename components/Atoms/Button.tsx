import {FC} from "react";

export interface ButtonProps {
    buttonName?: string;
    iconName?: string;
}

const Button: FC<ButtonProps> = ({buttonName, iconName}) => {

    return (
        <button className="uam_button">
            <span className={iconName}>{buttonName}</span>
        </button>
    );
};

export default Button;
