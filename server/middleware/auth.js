import jwt from "jsonwebtoken";

//* wants to like a post
//* click the like button => auth middleware (next) => like controller

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; // there will be 2 tokens, our custom one and the google one, google one will be longer than 500

    let decodedData;

    if (token && isCustomAuth) {
      // custom case
      decodedData = jwt.verify(token, "test"); // the secret string
      req.userId = decodedData?.id;
    } else {
      // google case
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth
