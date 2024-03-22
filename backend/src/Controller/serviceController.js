const serviceModels = require("../Models/servicesModels");

const service = async function (req, res) {
  try {
    const { name, email, phoneNumber, domain, resume } = req.body;
    const services = new serviceModels({
      name, email, phoneNumber, domain, resume

    });
    await services.save()
    res.status(200).json({ msg: "service apply" })

  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};
module.exports = { service }