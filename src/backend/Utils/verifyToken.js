const jwt = require('jsonwebtoken')

const verifyToken = (token) => {
    return jwt.verify(token, process.env.REACT_APP_JWT_SECRET)
}

module.exports = {
    verifyToken
}