// @flow
import React from 'react';
import { transCatType } from '../../types';

type Props = {
    type: string,
    transCats: transCatType[],
    onInputChange: () => void
}

const CategoryInput = ({ onInputChange, transCats, type }: Props) => {
    let category;

    return (
        <div>
            <label>Category</label>
            <select
                ref={(e) => { category = e; }}
                onChange={() =>
                    onInputChange({ category: category.value })
                }>

                {transCats.map((t) => {
                    if (t.type !== type) return null;

                    return <option key={t._id} value={t.name}>{t.name}</option>;
                })}
            </select>
        </div>
    );
};

export default CategoryInput;
