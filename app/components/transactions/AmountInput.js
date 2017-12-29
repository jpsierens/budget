// @flow
import React from 'react';

type Props = {
  value: String,
  onInputChange: () => void
}

const AmountInput = ({ onInputChange, value } : Props) => {
    let input;

    return (
        <div>
            <label>Amount</label>
            <input
                type="text"
                ref={(e) => { input = e; }}
                value={value}
                onChange={() =>
                    onInputChange({ amount: input.value })
                }/>
        </div>
    );
};

export default AmountInput;
