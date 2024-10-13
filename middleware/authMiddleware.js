const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  console.log('Authorization Header:', authHeader);

  if (!authHeader) return res.status(401).json({ message: 'No token, authorization denied' });
  const token = authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token is missing' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
