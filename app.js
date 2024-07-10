const express = require("express");
const port = process.env.PORT || 5050;
const db = require(`./config/database`);
const app = express();

// app.get(`/getActors`, db.getActors);

app.get(`/getFilmById/:id`, db.getFilmById);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`server is up, port ${port}`);
});
