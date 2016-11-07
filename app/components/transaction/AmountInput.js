// @flow
import React from 'react';

const AmountInput = ({ onInputChange } : { onInputChange: () => void }) => {
    let input;

    return (
        <div>
            <label>Amount</label>
            <input
                type="text"
                ref={(e) => { input = e; }}
                onChange={() =>
                    onInputChange({ amount: input.value })
                }/>
        </div>
    );
};

export default AmountInput;
