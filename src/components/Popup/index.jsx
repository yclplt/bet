import React from 'react';
import './popup.css';
import { useData } from '../../DataContext';

const Popup = () => {
    const { betData } = useData();

    if (!betData?.length) return null;

    const multipliedResult = betData.reduce(
        (accumulator, currentValue) => accumulator * currentValue.cellData,
        1
    );

    const formattedResult = multipliedResult.toFixed(2);

    return (
        <div className="popup">
            <div className="popup-content">
                {betData.map((bet, index) => (
                    <div className="popup-row" key={`${bet?.data?.C}${index}`}>
                        <div>
                            {bet?.data?.OCG?.[1]?.MBS} Kod: {bet?.data?.C}
                        </div>
                        <div className="content">Maç: {bet?.data?.N}</div>
                        <div>Oran: {bet?.cellData}</div>
                    </div>
                ))}
            </div>
            <div className="popup-total">Toplam: {formattedResult}</div>
        </div>
    );
};

export default Popup;