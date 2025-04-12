const { Users } = require("../models/user")

const createUserController = async (req, res) => {
    const { name, age, email, password, description } = req.body;
    try {
        const user = new Users({
            name: name,
            age: age,
            email: email,
            password: password,
            description: description ? description : "",
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        await Users.create(user);
        res.status(201).json({
            message: "Tao thanh cong",
            user
        })
    } catch (error) {
        console.log("Error from server!", error);
        res.status(500).json({ message: "error from server!" });
    }
}

const getAllUserController = async (req, res) => {
    try {
        const users = await Users.find();
        //find là tìm theo toàn bộ trong điều kiện nếu có , trường hợp () là không có điều kiện

        console.log("list users", users);
        res.status(200).json({
            message: "lay thanh cong!",
            users
        })
    } catch (error) {
        console.log("Error from server", error);
        res.status(500).json({ message: "Error from server!" })
    }
}
const getUserByIDController = async (req, res) => { //req: request : hiểu tạm là nhận vào hoặc cần xử lí, res: response: phía trả rara
    const _id = req.params.id;
    //param là tham số (cụ thể là tham số trên đường dẫndẫn trình duyệt) vd : localhost:3000/users/012912893812 -> param chính là phần 012912893812
    try {
        const user = await Users.findById({ _id }); //điều kiện đặt trong dấu ngoặc nhọnnhọn
        //findbyidbyid là tìm theo người dùng có id giốnggiống trong điều kiện nếu có , 
        console.log("user by id: ", user);
        res.status(200).json({
            message: "da thanh cong!",
            user
        })
    } catch (error) {
        console.log("Error from server", error);
        res.status(500).json({ message: "Error from server!" })
    }
}
module.exports = {
    createUserController,
    getAllUserController,
    getUserByIDController,
}