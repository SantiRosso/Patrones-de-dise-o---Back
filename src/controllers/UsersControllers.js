class UsersController {
  constructor(userService) {
    this.userService = userService;
  }

  getUsers = (req, res) => {
    const users = this.userService.getUsers();
    res.status(200).json(users);
  };

  getUserById = (req, res) => {
    const { id } = req.params;
    const user = this.userService.getUserById(id);
    res.status(200).json(user);
  };

  createUser = (req, res) => {
    const { username, email, address } = req.body;

    this.userService.createUser({ username, email, address });
    res.status(200).json({ created: "OK" });
  };
}

module.exports = UsersController;
