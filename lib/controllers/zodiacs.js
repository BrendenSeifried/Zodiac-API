const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const oneZodiac = zodiacs.find((item) => item.id === id);
    res.json(oneZodiac);
  })
  .get('/', (req, res) => {
    const listZodiacs = zodiacs.map((item) => {
      return {
        id: item.id,
        name: item.name,
      };
    });
    res.json(listZodiacs);
  });
