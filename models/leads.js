const mongoose = require('mongoose')

const leadsSchema = new mongoose.Schema({
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    excludedDates: {
        type: [String],
        required: true,
        default: []
    },
    leads: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Leads = mongoose.model('Leads', leadsSchema)

module.exports = Leads