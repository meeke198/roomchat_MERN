// const mongoose = require("mongoose");
// const db_url = "mongodb://localhost:27017/roomchat_kha_hien";
// mongoose.connect(db_url, {useNewUrlParser: true})
// const UserSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       require: true,
//       min: 3,
//       max: 20,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       max: 50,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       min: 6,
//     },
//     // profilePicture: {
//     //   type: String,
//     //   default: "",
//     // }
//   },
//   { timestamps: true },
//   { collection: "users" }
// );

// module.exports = mongoose.model("User", UserSchema);


// const MessageSchema = new mongoose.Schema(
//   {
//     conversationId: {
//       type: String,
//     },
//     sender: {
//       type: String,
//     },
//     text: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Message", MessageSchema);


// const ConversationSchema = new mongoose.Schema(
//   {
//     members: {
//       type: Array,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Conversation", ConversationSchema);
