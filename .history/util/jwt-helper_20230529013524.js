const JWT = require('jsonwebtoken')
const cookieParser = require('cookie-parser')



createTokens = (user_id) => {
    const accessToken = JWT.sign(user_id, process.env.ACCESS_TOKEN_SECRET, {'expiresIn': "60s"})
    const refreshToken = JWT.sign(user_id, process.env.REFRESH_TOKEN_SECRET, {'expiresIn': "60s"})
    return {accessToken, refreshToken}
}

verifyTokens = (refreshToken) => {
    JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, res) => {
        if (error) throw error
        return res.user_id
    })
}

deleteTokens = async (req, res) => {
    res.clearCookies('jwt')
}

module.exports = {
    createTokens,
    verifyTokens,
    deleteTokens
}