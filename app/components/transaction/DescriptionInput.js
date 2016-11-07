// @flow
import React from 'react';

const DescriptionInput = ({ onInputChange } : { onInputChange: () => void }) => {
    let input;

    return (
        <div>
            <label>Description</label>
            <textarea
                rows="10"
                cols="50"
                ref={(e) => { input = e; }}
                onChange={() =>
                    onInputChange({ description: input.value })
                }/>
        </div>
    );
};

export default DescriptionInput;
