const { getTokensMock } = require("../mocks/tokensMock");

const tokens = (req, res) => {
  const token = getTokensMock();
  res.status(200).json({ token });
};

module.exports = { tokens };
