import axios from "axios";


export default ({
    login: async ( email, password) => {
        return await Promise.resolve("Sucess")
        .then((data) => console.log(data))
    }
})
