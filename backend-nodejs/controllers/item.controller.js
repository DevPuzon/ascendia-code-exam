
const itemService = require('../services/item.service');

exports.getItems = async (req, res) => {
    try {
        const items = await itemService.getAllItems();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const itemId = req.params.id;
        const item = await itemService.getItemById(itemId);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createItem = async (req, res) => {
    try {
        const newItem = await itemService.createItem(req.body);
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const itemId = req.params.id;
        const updatedItem = await itemService.updateItem(itemId, req.body);
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const itemId = req.params.id;
        const deletedItem = await itemService.deleteItem(itemId);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
