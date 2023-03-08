exports.getRestaurant = async (req, res) => {
  try {
    console.log(req.headers);

    res.status(200).send({ data: [] });
  } catch (error) {
    console.error(error);

    res.status(500).send(err);
  }
};
