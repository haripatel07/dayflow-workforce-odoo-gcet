const express = require('express');
const router = express.Router();
const { checkIn, checkOut, getMyAttendance, getAllAttendance, updateAttendance, deleteAttendance } = require('../controllers/attendanceController');
const { protect, admin } = require('../middleware/authMiddleware');

/**
 * @route   POST /api/attendance/checkin
 * @desc    Check in to work (creates new attendance record)
 * @access  Private
 * @body    { location?: { latitude, longitude } }
 * @returns Attendance record with checkIn timestamp
 */
router.post('/checkin', protect, checkIn);

/**
 * @route   POST /api/attendance/checkout
 * @desc    Check out from work (updates existing open attendance record)
 * @access  Private
 * @body    { location?: { latitude, longitude } }
 * @returns Updated attendance record with checkOut timestamp
 */
router.post('/checkout', protect, checkOut);

/**
 * @route   GET /api/attendance/my
 * @desc    Get logged-in user's attendance records
 * @access  Private
 * @query   ?month=1&year=2024 (optional filters)
 * @returns Array of attendance records
 */
router.get('/my', protect, getMyAttendance);

/**
 * @route   GET /api/attendance
 * @desc    Get all attendance records in company (Admin only)
 * @access  Private (Admin/HR)
 * @query   ?month=1&year=2024&userId=xxx (optional filters)
 * @returns Array of attendance records from company
 */
router.get('/', protect, admin, getAllAttendance);

/**
 * @route   PUT /api/attendance/:id
 * @desc    Update attendance record (Admin only)
 * @access  Private (Admin)
 * @body    { checkIn?, checkOut?, status? }
 * @returns Updated attendance record
 */

/**
 * @route   DELETE /api/attendance/:id
 * @desc    Delete attendance record (Admin only)
 * @access  Private (Admin)
 * @returns Success message
 */
router.route('/:id').put(protect, admin, updateAttendance).delete(protect, admin, deleteAttendance);

module.exports = router;
