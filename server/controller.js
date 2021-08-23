const data = require("./db.json");

module.exports = {
  getUsers: (req, res) => {
    res.status(200).send(data);
  },
  addUsers: (req, res) => {
    console.log(req.body);
    let newUser = {
      id: data.length + 1,
      name: {
        first: req.body.firstName,
        last: req.body.lastName,
      },
      city: req.body.city,
      country: req.body.country,
      title: req.body.title,
      employer: req.body.employer,
      favoriteMovies: req.body.movies.split(","),
    };
    data.push(newUser);
    res.status(200).send(data);
  },
};
