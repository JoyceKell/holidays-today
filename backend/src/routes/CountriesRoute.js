const CountriesController = require('../controllers/CountriesController');
module.exports = (app) => {
   app.get('/countries', CountriesController.get);
   app.put('/countries/:id', CountriesController.put);
   app.get('/countries/:id', CountriesController.getById);
}