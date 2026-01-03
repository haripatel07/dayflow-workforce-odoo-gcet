const Attendance = require('../models/Attendance');

// @desc Check in
// @route POST /api/attendance/checkin
const checkIn = async (req, res) => {
    // Check if user already has an OPEN session (checked in but not checked out)
    const openSession = await Attendance.findOne({ user: req.user._id, checkOut: null });

    if (openSession) {
        return res.status(400).json({ message: 'You are already checked in.' });
    }

    const today = new Date().toISOString().split('T')[0];

    const attendance = await Attendance.create({
        user: req.user._id,
        date: today,
        checkIn: new Date(),
        status: 'Present'
    });

    res.status(201).json(attendance);
};

// @desc Check out
// @route POST /api/attendance/checkout
const checkOut = async (req, res) => {
    // Find the latest open session
    const attendance = await Attendance.findOne({ user: req.user._id, checkOut: null }).sort({ createdAt: -1 });

    if (!attendance) {
        return res.status(400).json({ message: 'You are not checked in.' });
    }

    attendance.checkOut = new Date();
    await attendance.save();

    res.json(attendance);
};

// @desc Get my attendance
// @route GET /api/attendance/my
const getMyAttendance = async (req, res) => {
    const attendance = await Attendance.find({ user: req.user._id });
    res.json(attendance);
};

// @desc Get all attendance (Admin)
// @route GET /api/attendance
const getAllAttendance = async (req, res) => {
    const attendance = await Attendance.find({}).populate('user', 'name email');
    res.json(attendance);
};

module.exports = { checkIn, checkOut, getMyAttendance, getAllAttendance };
