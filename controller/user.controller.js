const Users = require('../model/user.model');
module.exports = {
    saveUser:(req,res)=>{
        console.log("requestssssssss",req)
        let errors = [];
		if(!req.body.name){
			errors.push({text:'Please add a name'});
		}
		

		if(errors.length > 0){
			res.send(errors)
		} else {

            Users.create({...req.body})
         .then(user => {
					console.log(user)
         })
         .catch(error =>{
             console.log("TODO Error: ", error.code);
             if(error.code === 11000)
                 res.send({"msg":"Cannot accept duplicate entry"});
             else
                 res.send({data:error});
         })
		}
    }
}