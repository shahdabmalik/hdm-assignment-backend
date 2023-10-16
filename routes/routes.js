const { getAllLeads, addLead, updateLead, deleteLead } = require('../controller/controller')

const router = require('express').Router()

// get all leads
router.get("/leads", getAllLeads)
// add a lead
router.post("/leads", addLead)
// update lead
router.put("/leads/:id", updateLead)
// delete lead
router.delete("/leads/:id", deleteLead)

module.exports = router