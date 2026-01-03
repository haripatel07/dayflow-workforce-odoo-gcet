const express = require('express');
const router = express.Router();
const { authUser, registerUser, createEmployee, getUsers, getUserProfile, updateUserProfile, getUserById, updateUser, deleteUser, getDashboardStats
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

/**
 * @route   POST /api/users/login
 * @desc    Authenticate user and get token
 * @access  Public
 * @body    { email: String, password: String }
 * @returns { _id, name, email, role, companyName, token }
 */
router.post('/login', authUser);

/**
 * @route   POST /api/users
 * @desc    Register new company admin (self-registration)
 * @access  Public
 * @body    { name, email, password, companyName }
 * @returns { _id, name, email, role: "Admin", companyName, token }
 */

/**
 * @route   GET /api/users
 * @desc    Get all users in company (Admin/HR only)
 * @access  Private (Admin/HR)
 * @returns Array of user objects from same company
 */
router.route('/').post(registerUser).get(protect, admin, getUsers);

/**
 * @route   GET /api/users/profile
 * @desc    Get logged-in user's profile
 * @access  Private
 * @returns User object (own profile)
 */

/**
 * @route   PUT /api/users/profile
 * @desc    Update logged-in user's profile
 * @access  Private
 * @body    { name?, phone?, department?, jobTitle?, etc. }
 * @returns Updated user object
 */
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

/**
 * @route   POST /api/users/create
 * @desc    Create new employee (Admin only)
 * @access  Private (Admin)
 * @body    { name, email, password, role, department?, jobTitle?, etc. }
 * @returns Newly created employee object
 */
router.route('/create').post(protect, admin, createEmployee);

/**
 * @route   GET /api/users/dashboard/stats
 * @desc    Get dashboard statistics
 * @access  Private
 * @returns { totalEmployees, presentToday, onLeave, pendingLeaves, tasks, recentActivity, announcements }
 */
router.get('/dashboard/stats', protect, getDashboardStats);

/**
 * @route   GET /api/users/:id
 * @desc    Get user by ID (Admin only)
 * @access  Private (Admin)
 * @returns User object
 */

/**
 * @route   PUT /api/users/:id
 * @desc    Update user by ID (Admin only)
 * @access  Private (Admin)
 * @body    { name?, role?, department?, jobTitle?, etc. }
 * @returns Updated user object
 */

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete user by ID (Admin only)
 * @access  Private (Admin)
 * @returns Success message
 */
router.route('/:id').get(protect, admin, getUserById).put(protect, admin, updateUser).delete(protect, admin, deleteUser);

module.exports = router;
