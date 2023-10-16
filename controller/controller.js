const Leads = require("../models/leads")

// getAll leads
const getAllLeads = async (req, res) => {
    try {
        const leads = await Leads.find({}).sort({ updatedAt: -1 }).exec()
        res.status(200).json(leads)
    } catch (error) {
        res.status(400).json({ message: "Error getting leads" })
    }
}

// add lead
const addLead = async (req, res) => {
    const { startDate, endDate, excludedDates, leads } = req.body
    try {
        await Leads.create({
            startDate,
            endDate,
            excludedDates,
            leads
        })
        const allLeads = await Leads.find({}).sort({ updatedAt: -1 }).exec()
        res.status(200).json(allLeads)
    } catch (error) {
        res.status(400).json({ message: "Error adding lead" })
        console.log(error);
    }
}

// update lead
const updateLead = async (req, res) => {
    const { id } = req.params
    const { startDate, endDate, excludedDates, leads } = req.body
    try {
        await Leads.findByIdAndUpdate(id, { startDate, endDate, excludedDates, leads })
        const allLeads = await Leads.find({}).sort({ updatedAt: -1 }).exec()
        res.status(200).json(allLeads)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error updating lead" })
    }
}

// delete a lead
const deleteLead = async (req, res) => {
    const { id } = req.params
    try {
        await Leads.findByIdAndDelete(id)
        const allLeads = await Leads.find({}).sort({ updatedAt: -1 }).exec()
        res.status(200).json(allLeads)
    } catch (error) {
        res.status(400).json({ message: "Error deleting lead" })
    }
}

module.exports = {
    getAllLeads,
    addLead,
    updateLead,
    deleteLead
}