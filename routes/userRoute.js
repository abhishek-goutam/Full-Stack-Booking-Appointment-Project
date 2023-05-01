const express = require("express");
const router = express.Router();
const Users = require("../model/user.model");

router.get("/user", async (req, res) => {
  try {
    const usersData = await Users.findAll();
    res.send(usersData);
  } catch (error) {
    console.log(error);
  }
});

router.get('/user/:id',async(req,res)=>{
  try {
    const usersData = await Users.findByPk(req.params.id);
    console.log(usersData)
    res.send(usersData);
  } catch (error) {
    console.log(error);
  }
})

router.post("/user",  (req, res) => {
  console.log("bodyyyyyyyy",req.body);
     Users.build(req.body)
     .save()
    .then(data=>{
      console.log("dataaaaaaaa",data)
      res.send(data)
    })
    .catch(err=>res.send(err));
});

router.put("/user/:id", async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    };
    Users.update(user, { where: { id: req.params.id } });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    // const deleteId = await Users.findByPk(req.params.id);
    // console.log("deleteeeeeeeee",deleteId);
    const data = await Users.destroy({ where: { id: req.params.id }});
    res.send("Deleted")
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
