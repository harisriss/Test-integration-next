import React, {FC} from 'react';

export interface SquareButtonProps {
    label: string,
    alertText: string
}

const SquareButton: FC<SquareButtonProps> = ({label, alertText}) => {

    return (
        <button className="squareButton" onClick={() => {
            alert(alertText)
        }}>
            <div className="squareButton_cart">
                <span className="icon"/>
            </div>
            <span>{label}</span>
        </button>
    );
};

export default SquareButton;
