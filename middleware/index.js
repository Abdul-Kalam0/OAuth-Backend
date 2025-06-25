function verifyAccessToken(req, res, next) {
  if (!req.cookies.access_token) {
    return res.status(403).json({ error: "Access denied." });
  }

  next();
}

module.exports = { verifyAccessToken };
