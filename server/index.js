const express = require("express");
const ctrl = require("./controller");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.get("/api", ctrl.getUsers);
app.post("/api", ctrl.addUsers);
app.put("/api", ctrl.editUser);
app.delete(`/api/`);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
