const express = require('express');
const { renderHome, renderTestimonials, renderReport } = require('../controllers/controllers');
const router = express.Router();

router.route('/')
    .get(renderHome)


router.route('/testimonials')
    .get(renderTestimonials)

router.route('/report')
    .get(renderReport)


module.exports = router;     