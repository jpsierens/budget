// @flow
import React from 'react';

type Props = {
    type: string,
    onInputChange: () => void
}

const TypeInput = ({ onInputChange, type } : Props) =>
    <div>
        <label style={{ display: 'inline' }}>{ type }?</label>
        <input
            type="radio"
            name="type"
            value={ type }
            style={{ display: 'inline' }}
            onChange={() => onInputChange({
                type
            }) }/>
    </div>;

export default TypeInput;
