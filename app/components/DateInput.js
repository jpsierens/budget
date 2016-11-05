// @flow
import React from 'react';

const DateInput = ({ onInputChange } : { onInputChange: () => void }) => {
    let input;

    return (
        <div>
            <label>Date</label>
            <input
                type="date"
                ref={(e) => { input = e; }}
                onChange={() =>
                    onInputChange({ date: input.value })
                }/>
        </div>
    );
};

export default DateInput;
