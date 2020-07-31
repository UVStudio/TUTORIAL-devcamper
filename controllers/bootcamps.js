//desc    GET all bootcamps
//route   GET /api/v1/bootcamps
//access  public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

//desc    GET single bootcamp
//route   GET /api/v1/bootcamps/:id
//access  public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show bootcamp ${req.params.id}`,
  });
};

//desc    POST create new bootcamp
//route   POST /api/v1/bootcamps
//access  public
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' });
};

//desc    UPDATE update bootcamp
//route   UPDATE /api/v1/bootcamps/:id
//access  private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

//desc    DELETE delete bootcamp
//route   DELETE /api/v1/bootcamps/:id
//access  private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
