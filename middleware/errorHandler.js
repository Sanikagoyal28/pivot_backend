
class Errorhandler extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const errorHandler = (err, req, res, next) => {
    const errStatus = err.statusCode || 500
    const errMsg = err.message || "Something went wrong"

    console.log(err)

    res.status(errStatus).json({
        message: errMsg,
        success: false,
        statusCode: errStatus
    })
}

module.exports = {errorHandler, Errorhandler}