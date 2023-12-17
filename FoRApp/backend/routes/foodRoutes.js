const Foods = require("../models/Food");
const router = require("express").Router()

router.get("/foods", async (req, res) => {
    try {
      const foods = await req.body;

      res.json({
        status: "success",
        result: foods.length,
        foods: foods,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
})

router.post("/foods", async (req, res) => {
    try {
      const { name, price, description } =
        req.body;
      // if (!images) return res.status(400).json({ msg: "No image upload" });

      const food = await Foods.findOne({name});
      if (food)
        return res.status(400).json({ msg: "This food already exists" });

      const newFood = new Foods({
        name: name.toLowerCase(),
        price,
        description,
      });

      await newFood.save();

      res.json({ msg: "Food created" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
})

router.delete("/foods/:id", async (req, res) => {
    try {
      await Foods.findByIdAndDelete(req.params.id);
      res.json({ msg: "Food deleted" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
})

router.put("/foods/:id", async (req, res) => {
    try {
      const { name, price, description } =
        req.body;
      // if (!images) return res.status(400).json({ msg: "No image upload" });

      await Foods.findByIdAndUpdate(
        { _id: req.params.id },
        {
          name,
          price,
          description,
          // images,
        }
      );

      res.json({ msg: "Updated food" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
})

module.exports = router