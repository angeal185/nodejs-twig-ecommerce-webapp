var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', {
    title: 'HOME'
  });
});

router.get('/about', function(req, res, next) {
  res.render('pages/about', {
    title: 'ABOUT'
  });
});

router.get('/blog-singlepost', function(req, res, next) {
  res.render('pages/blog-singlepost', {
    title: 'BLOG SINGLE POST'
  });
});

router.get('/blog', function(req, res, next) {
  res.render('pages/blog', {
    title: 'BLOG'
  });
});

router.get('/cart', function(req, res, next) {
  res.render('pages/cart', {
    title: 'CART'
  });
});

router.get('/checkout', function(req, res, next) {
  res.render('pages/checkout', {
    title: 'CHECKOUT'
  });
});

router.get('/columns', function(req, res, next) {
  res.render('pages/columns', {
    title: 'COLUMNS'
  });
});

router.get('/contact', function(req, res, next) {
  res.render('pages/contact', {
    title: 'CONTACT'
  });
});

router.get('/error', function(req, res, next) {
  res.render('pages/error', {
    title: 'ERROR'
  });
});

router.get('/faq', function(req, res, next) {
  res.render('pages/faq', {
    title: 'FAQ'
  });
});

router.get('/icons', function(req, res, next) {
  res.render('pages/icons', {
    title: 'ICONS'
  });
});

router.get('/overlay', function(req, res, next) {
  res.render('pages/overlay', {
    title: 'OVERLAY'
  });
});

router.get('/portfolio', function(req, res, next) {
  res.render('pages/portfolio', {
    title: 'PORTFOLIO'
  });
});

router.get('/positions', function(req, res, next) {
  res.render('pages/positions', {
    title: 'POSITIONS'
  });
});

router.get('/service', function(req, res, next) {
  res.render('pages/service', {
    title: 'SERVICE'
  });
});

router.get('/shop', function(req, res, next) {
  res.render('pages/shop', {
    title: 'SHOP'
  });
});

router.get('/singleproduct', function(req, res, next) {
  res.render('pages/singleproduct', {
    title: 'SINGLE PRODUCT'
  });
});

router.get('/team', function(req, res, next) {
  res.render('pages/team', {
    title: 'TEAM'
  });
});

router.get('/theme-elements', function(req, res, next) {
  res.render('pages/theme-elements', {
    title: 'THEME ELEMENTS'
  });
});

router.get('/typography', function(req, res, next) {
  res.render('pages/typography', {
    title: 'TYPOGRAPHY'
  });
});

router.get('/uikit-elements', function(req, res, next) {
  res.render('pages/uikit-elements', {
    title: 'UIKIT ELEMENTS'
  });
});

router.get('/wishlist', function(req, res, next) {
  res.render('pages/wishlist', {
    title: 'WISHLIST'
  });
});
module.exports = router;
