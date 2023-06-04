import asyncHandler from '../middleware/async-handler.js'
import User from '../models/User.js'
import generateToken from '../helpers/generate-token.js'
import VARS from '../helpers/vars/vars.js'

// @desc    Auth user & token
// @route   POST /api/v1/users/login
// @access  Public
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.validatePassword(password))) {
    generateToken(res, user._id)

    res.status(200).json({
      message: 'Successful',
      response: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    })
  } else {
    res.status(401)
    throw new Error('INVALID CREDENTIALS')
  }
})

// @desc    Logout user/ clear cookie
// @route   POST /api/v1/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res, next) => {
  res.cookie('jwt', '', {
    httpeOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({
    message: 'LOGGED OUT SUCCESSFULLY',
  })
})

// @desc    Register user
// @route   POST /api/v1/users
// @access  Public
const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('USER ALREADY EXISTS')
  }
  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    generateToken(res, user._id)

    res.status(201).json({
      message: 'USER REGISTERED',
      response: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    })
  } else {
    res.status(400)
    throw new Error('INVALID USER DATA')
  }
})

// @desc    GET User account
// @route   GET /api/v1/users/account
// @access  Private
const getUserAccount = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id)
  if (user) {
    res.status(200).json({
      message: 'USER FETCHED',
      response: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    })
  } else {
    res.status(404)
    throw new Error('USER NOT FOUND')
  }
})

// @desc    Update User account
// @route   PUT /api/v1/users/account
// @access  Private
const updateUserAccount = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    if (req.body.password) {
      user.password = req.body.password
    }
    const updatedUser = await user.save()
    const response = { _id: updatedUser._id, updatedField: req.body }

    res.status(200).json({
      message: 'USER UPDATED',
      response,
    })
  } else {
    res.status(404)
    throw new Error('USER NOT FOUND')
  }
})

// @desc    GET Users
// @route   GET /api/v1/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res, next) => {
  res.send('get users')
})

// @desc    GET User by ID
// @route   GET /api/v1/users/:id
// @access  Private/Admin
const getUser = asyncHandler(async (req, res, next) => {
  res.send('get user by id')
})

// @desc    Update User by ID
// @route   PUT /api/v1/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res, next) => {
  res.send('update user')
})

// @desc    Delete User
// @route   DELETE /api/v1/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res, next) => {
  res.send('delete user')
})

const userController = {
  authUser,
  logoutUser,
  registerUser,
  getUserAccount,
  updateUserAccount,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
}

export default userController
