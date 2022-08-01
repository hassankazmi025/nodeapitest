const users = [
  {
    id: 1,
    username: "Ali",
    email: "ali@gmail.com",
    isActive: true,
  },
];

exports.getAllUsers = (req, res, next) => {
  res.send(users);
};

exports.creatUser = (req, res, next) => {
  users.push(req.body);

  res.send(req.body);
};

exports.getUserById = (req, res, next) => {
  const id = req.params.id;
  let user = users.find((el) => el.id == id);
  res.send(user);
};

exports.updateUser = (req, res, next) => {
  res.send(users);
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  let newUsers = users.filter((el) => el.id != id);
  res.send(newUsers);
};
