const CountriesRoute = require('./CountriesRoute');
const HolidaysRoute = require('./HolidaysRoute');
module.exports = (app) => {
   CountriesRoute(app)
   HolidaysRoute(app)
}