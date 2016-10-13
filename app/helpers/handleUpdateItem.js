// @flow
const handleUpdateItem = (update: () => void, _id: string, changes: Object, e: Object) => {
    if (e) e.preventDefault();

    const now = new Date();
    const updatedAt = now.toISOString();

    update(_id, {
        updatedAt,
        ...changes
    });

    return;
};

export default handleUpdateItem;
