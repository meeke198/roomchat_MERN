const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Bcrypt = require("bcryptjs")
const db_url = "mongodb://localhost:27017/roomchat_kha_hien";
const SECRET_JWT_CODE = process.env.SECRET_JWT_CODE
//connect to MongoDB using Mongoose
mongoose
  .connect(db_url, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const users = require("./routes/api/users");
// const users = require("./routes/api/messages");
// const users = require("./routes/api/conversations");
//“CORS” stands for Cross-Origin Resource Sharing. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).
const cors = require('cors') //enable cors
app.use(cors());
// const http = require('http')
// const socketio = require('socket.io')
// const server = http.createServer(app);

require("dotenv").config(); //de doc duoc file env bang cach process.env.abc

const auth = require("./routes/api/auth");
//body request tu front end gui xuong se chay qua cai code nay de parse ve dang json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/auth", auth); 
app.use("/api/users", users);

// const io = socketio(server)
// oninput.on('connection', socket => {
//     console.log('New WS connection....')
// })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// function fetchUserByToken(req) {
//   return new Promise((resolve, reject => {
//     if(req.headers && req.headers.authorization){
//       let authorization = req.headers.authorization
//       let decoded
//      try{
//        decoded = jwt.JsonWebToken.verify(authorization, SECRET_JWT_CODE)
//      }catch(e){
//        reject("Token not valid")
//        return
//      }
//      let userId = decoded.id
//      Database.User.findOne({_id: userId})
//      .then((user) => {
//        resolve(user)
//      })
//      .catch((err) => {
//        reject("Token Error")
//      })
//     } else {
//       reject("No token found")
//     }
//   }))
// }