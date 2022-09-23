const loginService = require('../service/LoginService');

const loginController = {
  login: async (req, res) => {
    loginService.validateBody(req.body);

    const token = await loginService.login(req.body);

    res.status(200).json({ token });
  },
};

module.exports = loginController;