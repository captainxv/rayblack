const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  vehicleType: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Agent', AgentSchema);