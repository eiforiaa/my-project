const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /hotels/sync': 'HotelController.sync',
  'GET /hotels': 'HotelController.getAll',
};

module.exports = publicRoutes;
