const Foods = require("../models/Food");

// Filter, sorting and paginating
class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObject = { ...this.queryString }; //queryString = req.query

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObject[el]);

    let queryStr = JSON.stringify(queryObject);

    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );

    this.query.find(JSON.parse(queryStr));

    return this;
  }
  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }
  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

// Foods CRUD
const foodsControllers = {
  getFoods: async (req, res) => {
    try {
      const features = new APIfeatures(Foods.find(), req.query)
        .filtering()
        .sorting()
        .paginating();

      const foods = await features.query;

      res.json({
        status: "success",
        result: foods.length,
        products: foods,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createFood: async (req, res) => {
    try {
      const { name, price, description, images, } =
        req.body;
      // if (!images) return res.status(400).json({ msg: "No image upload" });

      const food = await Foods.findOne({ name });
      if (food)
        return res.status(400).json({ msg: "This food already exists" });

      const newFood = new Foods({
        name: name.toLowerCase(),
        price,
        description,
        images,
      });

      await newFood.save();

      res.json({ msg: "Food created" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteFood: async (req, res) => {
    try {
      await Foods.findByIdAndDelete(req.params.id);
      res.json({ msg: "Food deleted" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateFood: async (req, res) => {
    try {
      const { name, price, description, images, } =
        req.body;
      if (!images) return res.status(400).json({ msg: "No image upload" });

      await Foods.findByIdAndUpdate(
        { _id: req.params.id },
        {
          name: name.toLowerCase(),
          price,
          description,
          images,
        }
      );

      res.json({ msg: "Updated food" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = foodsControllers;