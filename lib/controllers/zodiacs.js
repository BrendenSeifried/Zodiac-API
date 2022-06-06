const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router().get('/', (req, res) => {
  const listZodiacs = zodiacs.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  res.json(listZodiacs);
});
