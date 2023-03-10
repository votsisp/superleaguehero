const { connectToDatabase } = require('../../../config/mongodb');


export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'POST': {
            return getUser(req, res);
        }
        case 'GET': {
            return getUsers(req, res);
        }
    }
}

async function getUser(req, res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();

        const { username, password } = req.body;
       
        let user = await db
            .collection('users')
            .findOne({
                username: username,
                password: password
            })
            
        
        return res.json({
            data: JSON.parse(JSON.stringify(user)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function getUsers(req, res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the users
        let users = await db
            .collection('users')
            .find({})
            .sort({ published: -1 })
            .toArray();
        // return the users
        return res.json({
            data: JSON.parse(JSON.stringify(users)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


