const User = require('../model/userModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


//for password hsahing
const securerPassword = async (password) => {
    try {
        const passwordHash = await bcryptjs.hash(password, 10)
        return passwordHash

    } catch (error) {
        console.log(error.message);
    }

}

//for create token
const createToken = async (id) => {
    try {
        const token = await jwt.sign({ _id: id }, "nodejsweekend12345678", { expiresIn: "1d" })
        return token

    } catch (error) {
        console.log(error.message);
    }

}

const register = async (req, res) => {

    try {
        const setPassword = await securerPassword(req.body.password)
        const userData = new User({
            name: req.body.name,
            email: req.body.email,
            password: setPassword,
            mobile: req.body.mobile,
        })

        const duplocateData = await User.findOne({ email: req.body.email })
        if (duplocateData) {
            return res.status(500).json({
                status: 500,
                message: "This email already exist"
            })
        } else {
            const result = await userData.save()
            const token = await createToken(result._id)
            return res.status(200).json({
                status: 200,
                message: "User Register Successfully",
                data: result,
                token: token
            })


        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error: error.message
        })
    }

}

//for login

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            return res.status(500).json({
                status: 500,
                message: "All input is required",
            })

        }
        const users = await User.findOne({ email });
        if (users && (await bcryptjs.compare(password, users.password))) {
            const TokenData = await createToken(
                {
                    id: users?._id,
                    name: users?.name,
                    email: users.email,
                    mobile: users?.mobile,
                    photo: users?.photo,

                }
            )
            return res.status(200).json({
                status: 200,
                message: "login SuccessFully",
                data: users,
                token: TokenData
            })

        }

        return res.status(500).json({
            status: 500,
            message: "invalid credentials"
        })
    }

    catch (error) {
        return res.status(500).json({
            status: 500,
            error: error.message
        })

    }
}


const dashboard=(req,res)=>{
    return res.status(201).json({
        status: 201,
        message: "Welcome to User Dashboard"
    })
}
module.exports = {
    register, login,dashboard
}