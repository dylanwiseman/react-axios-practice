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
  editUser: (req, res) => {
    console.log(req.body);
    data[req.body.index].name.first = req.body.firstName;
    data[req.body.index].name.last = req.body.lastName;
    data[req.body.index].city = req.body.city;
    data[req.body.index].country = req.body.country;
    data[req.body.index].title = req.body.title;
    data[req.body.index].employer = req.body.employer;
    data[req.body.index].favoriteMovies = req.body.movies.split(",");
    res.status(200).send(data);
  },
};
