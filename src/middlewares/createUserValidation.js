const initValidation = (req, res, next) => {
  req.errors = [];
  next();
};

const validateUsername = (req, res, next) => {
  const { username } = req.body;
  if (!username) req.errors.push("Falta el username");
  if (username && username.length < 6)
    req.errors.push("El username es muy corto");
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) req.errors.push("Falta el email");
  if (email && !email.includes("@")) req.errors.push("No tiene formato email");
  next();
};

const validateAddress = (req, res, next) => {
  const { address } = req.body;
  if (!address) req.errors.push("Falta el address");
  next();
};

const validateErrors = (req, res, next) => {
  if (req.errors.length) {
    res.status(400).json(req.errors);
  } else {
    next();
  }
};

module.exports = [
  initValidation,
  validateUsername,
  validateEmail,
  validateAddress,
  validateErrors,
];
