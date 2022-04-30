const HolidaysController = require('../controllers/HolidaysController');
module.exports = (app) => {
   app.get('/holidays/:code/:year', HolidaysController.get);
   app.put('/holidays/:id', HolidaysController.put);
}