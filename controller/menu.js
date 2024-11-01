
const MenuItem = require('../model/menu');

// Create a new menu item
exports.createMenuItem = async (req, res) => {
    try {
        const { name, description, price } = req.body;
 
        // Create a new MenuItem instance
        const newMenuItem = new MenuItem({
            name,
            description,
            price,
        });

        // Save to database
        const savedItem = await newMenuItem.save();

        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: 'Error creating menu item', error: error.message });
    }
};

// Get all menu items
exports.getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching menu items', error: error.message });
    }
};

// Get a single menu item by ID
exports.getMenuItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const menuItem = await MenuItem.findById(id);

        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.status(200).json(menuItem);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching the menu item', error: error.message });
    }
};

// Update a menu item by ID
exports.updateMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedMenuItem = await MenuItem.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

        if (!updatedMenuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.status(200).json(updatedMenuItem);
    } catch (error) {
        res.status(500).json({ message: 'Error updating the menu item', error: error.message });
    }
};

// Delete a menu item by ID
exports.deleteMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMenuItem = await MenuItem.findByIdAndDelete(id);

        if (!deletedMenuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.status(200).json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting the menu item', error: error.message });
    }
};
