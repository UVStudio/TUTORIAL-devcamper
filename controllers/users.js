const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

//desc    GET all users
//route   GET /api/v1/users
//access  private
exports.getUsers = asyncHandler(async (req, res, ext) => {
  res.status(200).json(res.advancedResults);
});

//desc    GET single user
//route   GET /api/v1/auth/:id
//access  private/admin
exports.getUser = asyncHandler(async (req, res, ext) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

//desc    CREATE user
//route   POST /api/v1/users
//access  private/admin
exports.createUser = asyncHandler(async (req, res, ext) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

//desc    UPDATE user
//route   PUT /api/v1/users/:id
//access  private/admin
exports.updateUser = asyncHandler(async (req, res, ext) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

//desc    DELETE user
//route   DELETE /api/v1/users/:id
//access  private/admin
exports.deleteUser = asyncHandler(async (req, res, ext) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
