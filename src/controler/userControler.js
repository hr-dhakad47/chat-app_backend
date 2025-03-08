const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")

const addUser = async (req, res) => {
    try {
        // Hash the password
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        
        // Create new user instance
        let user = new UserModel({ ...req.body, password: hashPassword });
        
        // Save user to the database
        let savedUser = await user.save();

        if (savedUser) {
            return res.status(200).json({
                message: "User added successfully",
                status: 200,
                user: savedUser
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error adding user",
            status: 500,
            error: error.message
        });
    }
};

// module.exports = addUser;


const getUser =  async function (req, res) {
    const userId = req.params.userId;
    let user = await UserModel.findById(userId);
    res.json(user);
  };


const getUsers = async(req,res)=>{
    try{
         let users = await UserModel.find({})

         if(users.length != 0)
         {
            return res.status(200).json({
                mssg:"get Success",
                status:200,
                users
    
            })
         }

        
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).json({
            mssg:"server error",
            status:500,
            err:JSON.stringify(err)

        })
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                status: 400,
                mssg: "User not found"
            });
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                return res.status(200).json({
                    status: 200,
                    mssg: "User login success",
                    user: {
                        _id: user._id,
                        email: user.email,
                        fullName: user.fullName
                        // Add other user data if needed
                    }
                });
            } else {
                return res.status(400).json({
                    status: 400,
                    mssg: "Incorrect email or password"
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 500,
            mssg: "Server error",
            err: err.message
        });
    }
};


module.exports = {addUser,getUser,login,getUsers}