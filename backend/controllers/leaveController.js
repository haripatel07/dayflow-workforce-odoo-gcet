const Leave = require('../models/Leave');

// @desc Apply for leave
// @route POST /api/leaves
const applyLeave = async (req, res) => {
    const { type, startDate, endDate, reason } = req.body;
    const leave = await Leave.create({
        user: req.user._id,
        type,
        startDate,
        endDate,
        reason
    });
    res.status(201).json(leave);
};

// @desc Get my leaves
// @route GET /api/leaves/my
const getMyLeaves = async (req, res) => {
    const leaves = await Leave.find({ user: req.user._id });
    res.json(leaves);
};

// @desc Get all leaves (Admin)
// @route GET /api/leaves
const getAllLeaves = async (req, res) => {
    const leaves = await Leave.find({}).populate('user', 'name email');
    res.json(leaves);
};

// @desc Update leave status
// @route PUT /api/leaves/:id
const updateLeaveStatus = async (req, res) => {
    const leave = await Leave.findById(req.params.id);
    if (leave) {
        leave.status = req.body.status;
        const updatedLeave = await leave.save();
        res.json(updatedLeave);
    } else {
        res.status(404).json({ message: 'Leave not found' });
    }
};

module.exports = { applyLeave, getMyLeaves, getAllLeaves, updateLeaveStatus };
