const consultModels = require("../Models/consultationModels");

const consultation = async function (req, res) {
  try {
    const { name, email, organization, phoneNumber, projectDetail } = req.body;
    const consultant = new consultModels({
      name,
      email,
      organization,
      phoneNumber,
      projectDetail,
    });
    await consultant.save();

    res.status(200).json({ msg: "data save" })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" + error })
  }
};

module.exports = { consultation }