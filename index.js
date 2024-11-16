const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./src/routes/index.routes");
const dosenRoutes = require("./src/routes/dosen.routes");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");
const liveReload = require("connect-livereload");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 8080;

const corsOptions = {
  origin: process.env.WEB_URL || "http://localhost:3000",  // Pastikan variabel WEB_URL ada di .env
  httpOnly: false,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Sesuaikan secret key dan cookie sesuai dengan environment
app.use(
  session({
    secret: process.env.SECRET_KEY || "defaultSecretKey",  // Menggunakan nilai default jika SECRET_KEY tidak ada
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "strict",
    },
  })
);

// Hanya menggunakan liveReload di lingkungan pengembangan
if (process.env.NODE_ENV === 'development') {
  app.use(liveReload());
}

app.use("/api", routes);
app.use("/api/dosen", dosenRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
