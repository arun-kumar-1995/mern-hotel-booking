export const testController = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Test successful",
  });
};
