import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

router.get('/',(req,res)=>{
    res.send(users);
    console.log(users);
});

router.post('/',(req,res)=>{
    const user = req.body ;
    users.push({...user , id: uuidv4()});
    res.send(`the new user with the name ${user.firstName} was added `); 
})

export default router;