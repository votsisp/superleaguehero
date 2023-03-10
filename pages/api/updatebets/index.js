const { connectToDatabase } = require('../../../config/mongodb');


export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'PUT': {
            return updateBets(req, res);
        }
    }
}

async function updateBets(req,res){


    const person  = req.body;
    
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        
        let user = await db
            .collection('users')
            .findOneAndUpdate({
                
                username: person.username
                
            },{ $set: { bet: person.bet, createdAt: person.createdAt }})
            
        
        return res.json({
            data: user,
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


