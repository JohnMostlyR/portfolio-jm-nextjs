const nextRoutes = require('next-routes');
const routes = nextRoutes();

routes
  .add('index', '/', 'index')
  .add('about', '/about', 'about')
  .add('skills', '/skills', 'skills')
  .add('projects', '/projects', 'projects')
  .add('contact', '/contact', 'contact');

module.exports = routes;
