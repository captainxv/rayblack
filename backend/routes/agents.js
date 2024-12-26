const express = require('express');
const router = express.Router();
const AgentController = require('../controllers/AgentController');

// Define routes for agent operations
router.post('/register', AgentController.register);
router.get('/:id', AgentController.getAgentById);

module.exports = router;