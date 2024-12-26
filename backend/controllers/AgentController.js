const Agent = require('../models/Agent'); // Import the Agent model

const AgentController = {
  register: async (req, res) => {
    try {
      const { name, vehicleType, rating } = req.body;
      const newAgent = new Agent({ name, vehicleType, rating });
      await newAgent.save();
      res.status(201).send('Agent registered');
    } catch (error) {
      res.status(500).send('Error registering agent');
    }
  },
  getAgentById: async (req, res) => {
    try {
      const agent = await Agent.findById(req.params.id);
      if (!agent) {
        return res.status(404).send('Agent not found');
      }
      res.status(200).json(agent);
    } catch (error) {
      res.status(500).send('Error retrieving agent');
    }
  }
};

module.exports = AgentController;