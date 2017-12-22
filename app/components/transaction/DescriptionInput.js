// @flow
import React from 'react';

type Props = {
  value: String,
  onInputChange: () => void
}

const DescriptionInput = ({ onInputChange, value } : Props) => {
    let input;

    return (
        <div>
            <label>Description</label>
            <textarea
                rows="10"
                cols="50"
                ref={(e) => { input = e; }}
                value={value}
                onChange={() =>
                    onInputChange({ description: input.value })
                }/>
        </div>
    );
};

export default DescriptionInput;
