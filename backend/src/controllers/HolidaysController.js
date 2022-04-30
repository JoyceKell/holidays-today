const api = require('../services/holiday');
  
 exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com ID! --> ${id}`);
 };
  
 exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com ID! --> ${id}`);
 };
  
 exports.get = async (req, res, next) => {
   const dataHolidays = await api.holidays({
      country: req.params.code,
      year: req.params.year,
      date: req.params.date
   });

   const formattedHolidays = dataHolidays.holidays.map(holiday => {
      return {
         name: holiday.name,
         date: holiday.date,
         weekday: holiday.weekday.date.name
      }
   })

    res.status(200).json({
      message: 'Rota GET!', dataHolidays: formattedHolidays
    });
 };
  
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
 };