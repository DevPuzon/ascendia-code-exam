const Item = require('../models/item.model');

exports.getAllItems = async () => {
    try {
        return await Item.find();
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.getItemById = async (itemId) => {
    try {
        return await Item.findById(itemId);
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.createItem = async (itemData) => {
    try {
        const newItem = new Item(itemData);
        return await newItem.save();
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.updateItem = async (itemId, newData) => {
    try {
        return await Item.findByIdAndUpdate(itemId, newData, { new: true });
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.deleteItem = async (itemId) => {
    try {
        return await Item.findByIdAndDelete(itemId);
    } catch (err) {
        throw new Error(err.message);
    }
};
