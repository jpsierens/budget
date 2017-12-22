// @flow
import React from 'react';

type Props = {
  value: String,
  onInputChange: () => void
}

const DateInput = ({ onInputChange, value } : Props) => {
    let input;

    return (
        <div>
            <label>Date</label>
            <input
                type="date"
                ref={(e) => { input = e; }}
                value={value}
                onChange={() =>
                    onInputChange({ date: input.value })
                }/>
        </div>
    );
};

export default DateInput;
