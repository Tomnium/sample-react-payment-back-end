const User = require('../../Models/user/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config');

exports.login = (req,res)=>{
    User.findOne({ email: req.body.email }, function (err, user) {

        if (err) return res.status(500).send({error:'Error on the server.'});
        if (!user) return res.status(404).send({error:'No user found.'});

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({error:'Password incorrect.'});
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    });
};

exports.register = (req, res)=>{

    const hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create({
            name : req.body.username,
            email : req.body.email,
            password : hashedPassword
        },
        function (err) {
            if (err) return res.status(500).send({error:"Email or login already exist"});
            res.status(200).send();
        });
};