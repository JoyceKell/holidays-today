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
   const dataCountry = await api.countries();
   const formattedCountry = dataCountry.countries.map(country => {
      return {
         country: country.name,
         flag: country.flag,
         code: country.code,
      }
   })
    res.status(200).json({
      message: 'Rota GET!', dataCountry: formattedCountry
    });
 };
  
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
 };