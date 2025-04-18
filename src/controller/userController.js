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

//cap nhat user

// const updateUserController = async (req, res) => {
//     const id = req.params.id;
//     const { name, age, email, password, description } = req.body;
//     try {
//         const user = {
//             name: name,
//             age: age,
//             email: email,
//             password: password,
//             description: description ? description : "",
//             createdAt: new Date(),
//             updatedAt: new Date(),
//         }
//         await Users.findByIdAndUpdate(id,user);
//         res.status(201).json({
//             message: "Update thanh cong",
//             user
//         })
//     } catch (error) {
//         console.log("Error from server!", error);
//         res.status(500).json({ message: "error from server!" });
//     }
// }

const updateUserController = (req, res) => {    //async dùng trong bất đồng bộbộ
    const id = req.params.id; // gán biến id bằng req.params.id
    
    const { name, age, email, password, description } = req.body;  //nhập dữ liệu vào req.body
    console.log(req.body); //hiển thị dữ liệu được khai báo trong terminal
    
    // const name = req.body.name;
    try {     // try catch sử dụng để phân luồng dữ liệu, dữ liệu đi qua try ko lỗi sẽ hiển thị dữ liệu ngược lại sẽ bắt đc lỗi, tạo ra ngoại lệ giúp chương trình ko bị dừng
        const user = {
            name: name,
            email: email,
            age: age,
            password: password,
            description: description ? description : "",
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        Users.findByIdAndUpdate(id, user); 
        res.status(201).json({
            message: "Update thanh cong",
            user
        })
        
    } catch (error) { 
        console.log("Error from server ! thuong code loi roi kia", );
        res.status(500).json({message:"error from server!"});
    }
}



module.exports = {
    createUserController,
    getAllUserController,
    getUserByIDController,
    updateUserController,
}