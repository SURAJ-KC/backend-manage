const {constants} = require("../constants")
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
        res.json({tittle: "Validation Failed",messsage: err.massage, stackTrace: err.stack});
        break;
    case constants.NOT_FOUND:
        res.json({tittle: "Not Found",messsage: err.massage, stackTrace: err.stack});
        break;
    case constants.UNAUTHORIZED:
        res.json({tittle: "Unauthorized",messsage: err.massage, stackTrace: err.stack});
        break;
    case constants.FORBIDDEN:
        res.json({tittle: "Forbidden",messsage: err.massage, stackTrace: err.stack});
        break;
    case constants.SERVER_ERROR:
        res.json({tittle: "Server_Error",messsage: err.massage, stackTrace: err.stack});
        break;
    default:
        console.log("no Error all good.....");
        break;
  }
  
  
}
module.exports = errorHandler;