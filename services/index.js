function setSecureCookies(res, token) {
  res.cookie("access_token", token, {
    httpOnly: true,
    maxAge: 60 * 1000,
  });

  return res;
}

module.exports = { setSecureCookies };
