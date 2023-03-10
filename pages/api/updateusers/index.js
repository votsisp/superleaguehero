const { connectToDatabase } = require('../../../config/mongodb');


export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'PUT': {
            return updateUser(req, res);
        }
    }
}

async function updateUser(req,res){


    const person  = req.body;
    
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        
        let user = await db
            .collection('users')
            .findOneAndUpdate({
                
                username: person.username
                
            },{ $set: { lastScore: person.addScore }, $inc: { score: +person.addScore}})
            
        
        return res.json({
            data: user,
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            data: JSON.parse(JSON.stringify(user)),
            message: new Error(error).message,
            success: false,
        });
    }
}


