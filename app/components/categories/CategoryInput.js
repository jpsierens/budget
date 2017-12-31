// @flow
import React from 'react';

type Props = {
    categories: String[],
    onInputChange: () => void
}

const CategoryInput = ({ categories, onInputChange }: Props) => {
    let input;

    return (
        <div>
            <label>Category</label>
            <select
                ref={(e) => { input = e; }}
                onChange={() => {
                    console.log(input.value);
                    onInputChange({ category: input.value });
                }}>

                <option value="other">other</option>;
                { categories.map((t) => {
                    return <option key={t._id} value={t.name}>{t.name}</option>;
                })}
            </select>
        </div>
    );
};

export default CategoryInput;
