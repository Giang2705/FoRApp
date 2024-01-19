const functions = {
    setJwtCookie: (res, token) => {
        res.cookie("jwt-cookie", token, {
          httpOnly: true,
          sameSite: "strict",
          maxAge: 24 * 60 * 60 * 1000,
        });
      },
      
    handleServerError: (res, error) => {
        console.log(error);
        res.status(500).json({ message: "Interval Server Error" });
    }
}

module.exports = functions;