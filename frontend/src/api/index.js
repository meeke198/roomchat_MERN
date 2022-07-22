import axios from "axios";


export default ({
    login: async ( email, password) => {
        return await Promise.resolve("Sucess")
        .then((data) => console.log(data))
        // const result = await axios.post("")
//         const result = await fetch("http://localhost5001/api/auth/signup", {
//            method: "POST",
//            headers: {
//              "Content-Type": "application/json",
//            },
//            body: JSON.stringify({
//              username,
//              email,
//              password,
//            }),
//          })
//            .then((res) => res.json())
//            .then((data) => {
//             //  let newUser = data;
//              console.log(data);
//            })
//            .catch((err) => {
//              console.log(err);
        //    });
    }
})
