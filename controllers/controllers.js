const { fetchEmbedHtml, mediaIds } = require('../public/js/instaVideos');

const Instagram = require('instagram-node');

module.exports.renderHome = (req, res) => {
  res.render('home')
}

module.exports.renderTestimonials = (req, res) => {
  res.render('testimonials')
}

module.exports.renderReport = (req, res) => {
  res.render('report')
}

module.exports.renderDestroy = (req, res) => {

  res.render('destroy');
};


