// @flow
const handleUpdateItem = (update: () => void, _id: string, changes: Object) => {
    const now = new Date();
    const updatedAt = now.toISOString();

    update(_id, {
        updatedAt,
        ...changes
    });

    return;
};

export default handleUpdateItem;
