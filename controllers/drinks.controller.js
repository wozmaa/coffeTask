const Drinks = require("../models/drinks.model");

module.exports.drinksController = {
  getDrinks: (req, res) => {
    //ВЫВОДИТ СПИСОК ВСЕХ НАПИТКОВ
    Drinks.find({})
      .select("_id name price")
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getDrinksInStock: (req, res) => {
    //ВЫВЫОДИТ СПИСОК ВСЕХ НАПИТКОВ, КОТОРЫЕ ЕСТЬ В НАЛИЧИИ
    Drinks.find({ stock: true })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getDrinksById: (req, res) => {
    //ВЫВОДИТ ИНФОРМАЦИЮ О КОНКРЕТНОМ НАПИТКЕ
    Drinks.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  postDrinks: (req, res) => {
    //ДОБАВЛЯЕТ НОВЫЙ НАПИТОК
    Drinks.create({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      caffeine: req.body.caffeine,
      volume: req.body.volume,
      description: req.body.description,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteDrinksById: (req, res) => {
    //УДАЛЯЕТ КОНКРЕТНЫЙ НАПИТОК
    Drinks.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("напиток удален");
      })
      .catch((e) => {
        res.json(e);
      });
  },
  patchDrinksById: (req, res) => {
    //ИЗМЕНЯЕТ КОНКРЕТНЫЙ НАПИТОК
    Drinks.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      caffeine: req.body.caffeine,
      volume: req.body.volume,
      description: req.body.description,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
};
