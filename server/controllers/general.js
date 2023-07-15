import User from "../models/User.js";

//called in /routes/general.js
// sets express router: sends getUser function whenever getRequest on ""/user/:id", getUser"

// id: string
//user: json object of that id

export const getUser = async (req, res) => {
    try {
        const { id } = req.params; //front end passes url : /user/:id
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};