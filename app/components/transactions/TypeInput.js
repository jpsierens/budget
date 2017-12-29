// @flow
import React from 'react';

type Props = {
    value: String,
    type: String,
    onInputChange: () => void
}

const TypeInput = ({ onInputChange, type, value } : Props) =>
    <div>
        <label style={{ display: 'inline' }}>{ type }?</label>
        <input
            type="radio"
            name="type"
            value={ type }
            checked={value === type ? true : false}
            style={{ display: 'inline' }}
            onChange={() => onInputChange({
                type
            }) }/>
    </div>;

export default TypeInput;
