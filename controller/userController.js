const User = require("../model/userModel");


//Create User
const createUser = async (req, res) => {
    const { name, email, age } = req.body;
    try {
      const userData = await User.create({
        name: name,
        email: email,
        age: age,
      });
      res.json(userData);
    } catch(err) {
      res.status(500).json({err : err.message})
      console.log(err)
    }
  };


  //Get All User
  const getAllUser = async (req, res) => {
    try {
    const showAllUsers =  await User.find();
    res.status(200).json(showAllUsers);
    } catch(err) {
      res.status(500).json({err : err.message})
      console.log(err)
    }
    
  }

  //Get Sigle User
  const getUser = async (req, res) => {
    try {
    const userId = req.params.id;
    const showUserbyId = await User.findOne({ _id: userId });
    res.status(200).json(showUserbyId);
    }  catch(err) {
      res.status(500).json({err : err.message})
      console.log(err)
    } 
  }

  //Delete user
  const deleteUser = async (req, res) => {
    
    try {
      const userId = req.params.id;
      const deleteUserbyId = await User.deleteOne({ _id: userId });
      res.status(200).json(deleteUserbyId);
    } catch(err) {
      res.status(500).json({err : err.message})
      console.log(err)
    } 
  }

  //update user 
  const updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const updateUserbyId = await User.findByIdAndUpdate(userId, req.body, {new: true});
      res.status(200).json(updateUserbyId);
    } catch(err) {
      res.status(500).json({err : err.message})
      console.log(err)
    } 
  }
   
module.exports = {createUser, getAllUser, getUser, deleteUser, updateUser};