const express = require('express');
const { renderHome, renderTestimonials, renderReport, renderDestroy } = require('../controllers/controllers');
const router = express.Router();

router.route('/')
    .get(renderHome)


router.route('/testimonials')
    .get(renderTestimonials)

router.route('/report')
    .get(renderReport)

router.route('/destroy')
    .get(renderDestroy)

module.exports = router;     