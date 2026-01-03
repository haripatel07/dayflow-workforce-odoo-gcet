const express = require('express');
const router = express.Router();
const { applyLeave, getMyLeaves, getAllLeaves, updateLeaveStatus, deleteLeave } = require('../controllers/leaveController');
const { protect, admin } = require('../middleware/authMiddleware');

/**
 * @route   POST /api/leaves
 * @desc    Apply for leave
 * @access  Private
 * @body    { type: 'sick'|'casual'|'annual', startDate, endDate, reason }
 * @returns Newly created leave record with status: 'pending'
 */

/**
 * @route   GET /api/leaves
 * @desc    Get all leave requests in company (Admin/HR only)
 * @access  Private (Admin/HR)
 * @query   ?status=pending&userId=xxx (optional filters)
 * @returns Array of leave records from company
 */
router.route('/').post(protect, applyLeave).get(protect, admin, getAllLeaves);

/**
 * @route   GET /api/leaves/my
 * @desc    Get logged-in user's leave requests
 * @access  Private
 * @returns Array of user's leave records
 */
router.get('/my', protect, getMyLeaves);

/**
 * @route   PUT /api/leaves/:id
 * @desc    Update leave status (Admin/HR only: approve/reject)
 * @access  Private (Admin/HR)
 * @body    { status: 'approved'|'rejected', remarks? }
 * @returns Updated leave record
 */

/**
 * @route   DELETE /api/leaves/:id
 * @desc    Delete leave request
 * @access  Private (own leaves) or Admin
 * @returns Success message
 */
router.route('/:id').put(protect, admin, updateLeaveStatus).delete(protect, deleteLeave);

module.exports = router;
