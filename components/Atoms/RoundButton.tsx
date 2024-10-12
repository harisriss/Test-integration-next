import React, {FC} from 'react';

export interface RoundButtonProps {
    label: string,
    alertText: string
    classNameLabel: string
}

const RoundButton: FC<RoundButtonProps> = ({label, alertText, classNameLabel}) => {

    return (
        <button className={"roundButton roundButton" + "_" + classNameLabel} onClick={() => {
            alert(alertText)
        }}>
            {label}
        </button>
    );
};

export default RoundButton;
