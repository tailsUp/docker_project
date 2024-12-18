const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
//const bcrypt   = require('bcryptjs')
const loginRouter = require('express').Router()
const User = require('../models/users')
const logger = require('../utils/logger')

/**
 * Funktio hyväksyy käyttäjän sisään kirjautumisen jos username on uniikki.
 */
loginRouter.post('/', async (request, response) => {
  logger.info('LOGIN.JS SISÄLLÄ')
  const { username, password } = request.body

  const user = await User.findOne({ username })
  logger.info('BACKEND LOGIN ROUTER SISÄLLÄ')
  let passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  //passwordCorrect = passwordCorrect.length > 3

  console.log('body:', request.body)
  console.log(user.password, ' ', user.passwordHash)
  console.log('')

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  }

  // token expires in 60*60 seconds, that is, in one hour
  const token = jwt.sign(
    userForToken,
    process.env.SECRET,
    { expiresIn: 60 * 60 }
  )

  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter