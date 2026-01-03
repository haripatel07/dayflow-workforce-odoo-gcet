const express = require('express');
const router = express.Router();
const { chatWithBot } = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware');

/**
 * @route   POST /api/chat
 * @desc    Send message to AI chatbot (Groq LLaMA 3.3 70B with RAG)
 * @access  Private
 * @body    { message: String, conversationHistory?: Array }
 * @returns { response: String, model: String }
 * @note    Powered by Groq LLaMA 3.3 70B Versatile model
 *          Context-aware RAG system with company policies and HR knowledge
 */
router.post('/', protect, chatWithBot);

module.exports = router;
