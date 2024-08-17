const { getLoginMock } = require("../mocks/loginMock");

const login = (req, res) => {
  const token = getLoginMock();
  res.status(200).json({ token });
};

module.exports = { login };
