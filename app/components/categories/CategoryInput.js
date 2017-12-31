// @flow
import React from 'react';

type Props = {
    categories: String[]
}

const CategoryInput = ({ categories }: Props) => {
    let category;

    return (
        <div>
            <label>Category</label>
            <select
                ref={(e) => { category = e; }}
                onChange={() =>
                    console.log(category + ' add me to the transaction!')
                }>

                <option value="other">other</option>;
                {categories.map((t) => {
                    return <option key={t._id} value={t.name}>{t.name}</option>;
                })}
            </select>
        </div>
    );
};

export default CategoryInput;
