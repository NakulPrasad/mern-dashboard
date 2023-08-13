import User from "../models/User.js";


//adding user
export const addUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json(error.message)
    }
}

export const getUsers = async (req, res) => {
    try {
        const customers = await User.find({ role: "admin" }).select("-password").select('-occupation').select('-country');
        res.status(200).json(customers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//delete user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(201).json(id);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//updating user:
export const editUser = async (reqt, res) => {
    let user = reqt.body;
    const { id } = reqt.params;

    // Log incoming data for troubleshooting
    // console.log(`Editing user with ID ${id} with data`, user);

    try {
        // Try to update the user
        const updatedUser = await User.findOneAndUpdate({ _id: id }, user, { new: true });

        // If successful, return updated user
        res.status(201).json(updatedUser);
    } catch (error) {
        // Log the error details
        console.log('Error details:', error);
        res.status(409).json({ message: error.message });
    }
};