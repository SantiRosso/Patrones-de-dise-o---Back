const data = [
  {
    id: "1",
    username: "santi123",
    email: "santi@mail.com",
    address: "calle falsa 123",
  },
  {
    id: "2",
    username: "mati123",
    email: "mati@mail.com",
    address: "calle falsa 124",
  },
  {
    id: "3",
    username: "roman123",
    email: "roman@mail.com",
    address: "calle falsa 125",
  },
];

const getUsers = () => {
  return data;
};

const getUserById = (id) => data.filter((e) => e.id == id);

const createUser = (user) => {
  const newUser = { id: data.length + 1, ...user };
  data.push(newUser);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
