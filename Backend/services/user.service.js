const userModel = require('../models/user.model');

// Function to create a new user
module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    // Check if all required fields are provided
    if (!firstname || !lastname || !email || !password) {
        throw new Error('All fields are required');
    }

    // Create a new user instance and save it to the database
    const user = new userModel({
        fullname: { firstname, lastname },
        email,
        password
    });

    // Save the user and return the created user
    await user.save();

    return user;
};
