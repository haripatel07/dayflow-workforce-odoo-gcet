const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
    createTask,
    getAllTasks,
    getMyTasks,
    getTaskById,
    updateTask,
    deleteTask,
    addComment
} = require('../controllers/taskController');

/**
 * @route   GET /api/tasks
 * @desc    Get all tasks (Admin: all tasks, Employee: assigned tasks)
 * @access  Private
 * @query   ?status=pending&priority=high (optional filters)
 * @returns Array of task objects
 */

/**
 * @route   POST /api/tasks
 * @desc    Create new task and assign to employee (Admin only)
 * @access  Private (Admin)
 * @body    { title, description, assignedTo, priority: 'Low'|'Medium'|'High'|'Urgent', dueDate? }
 * @returns Newly created task
 */
router.route('/')
    .get(protect, getAllTasks)
    .post(protect, adminOnly, createTask);

/**
 * @route   GET /api/tasks/my
 * @desc    Get tasks assigned to logged-in user
 * @access  Private
 * @returns Array of assigned tasks
 */
router.get('/my', protect, getMyTasks);

/**
 * @route   GET /api/tasks/:id
 * @desc    Get task by ID
 * @access  Private (must be assigned or Admin)
 * @returns Task object with full details
 */

/**
 * @route   PUT /api/tasks/:id
 * @desc    Update task (Admin: all fields, Employee: status only)
 * @access  Private
 * @body    Admin: { title?, description?, status?, priority?, etc. } | Employee: { status }
 * @returns Updated task object
 */

/**
 * @route   DELETE /api/tasks/:id
 * @desc    Delete task (Admin only)
 * @access  Private (Admin)
 * @returns Success message
 */
router.route('/:id')
    .get(protect, getTaskById)
    .put(protect, updateTask)
    .delete(protect, adminOnly, deleteTask);

/**
 * @route   POST /api/tasks/:id/comment
 * @desc    Add comment to task
 * @access  Private
 * @body    { text: String }
 * @returns Updated task with new comment
 */
router.post('/:id/comment', protect, addComment);

module.exports = router;
