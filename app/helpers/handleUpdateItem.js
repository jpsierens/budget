const handleUpdateItem = (e, update, _id, changes) => {
    e.preventDefault();
    const now = new Date();
    const updatedAt = now.toISOString();

    update(_id, {
        updatedAt,
        ...changes
    });

    return;
};

export default handleUpdateItem;
