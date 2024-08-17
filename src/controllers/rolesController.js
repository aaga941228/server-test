const { getRolesMock } = require("../mocks/rolesMock");

const roles = (req, res) => {
  const data = getRolesMock();
  res.status(200).json({ data });
};

module.exports = { roles };
