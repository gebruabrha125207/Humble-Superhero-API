const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// In-memory database
const superheroes = [];

/**
 * @route   POST /superheroes
 * @desc    Add a new superhero
 * @access  Public
 */
app.post(
  "/superheroes",
  [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("superpower").not().isEmpty().withMessage("Superpower is required"),
    check("humilityScore")
      .isInt({ min: 1, max: 10 })
      .withMessage("Humility score must be between 1 and 10"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, superpower, humilityScore } = req.body;
    superheroes.push({ name, superpower, humilityScore });
    res.status(201).json({ message: "Superhero added successfully!" });
  }
);

/**
 * @route   GET /superheroes
 * @desc    Fetch all superheroes sorted by humility score (descending)
 * @access  Public
 */
app.get("/superheroes", (req, res) => {
  const sortedHeroes = [...superheroes].sort((a, b) => b.humilityScore - a.humilityScore);
  res.json(sortedHeroes);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;