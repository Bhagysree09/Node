
const express = require('express');
const router = express.Router();
const { createMenuItem, getMenuItems, getMenuItemById, updateMenuItem, deleteMenuItem } = require('../controller/menu');
const { verifyToken } = require('../middleware/auth');
const { manager } = require('../middleware/role');

// Create a new menu item
router.post('/menu-items',verifyToken,manager, createMenuItem);

// Get all menu items
router.get('/menu-items', getMenuItems);

// Get a single menu item by ID
router.get('/menu-items/:id', getMenuItemById);

// Update a menu item by ID
router.put('/menu-items/:id', verifyToken,manager,updateMenuItem);

// Delete a menu item by ID
router.delete('/menu-items/:id',verifyToken,manager,deleteMenuItem);

module.exports = router;
