const { connectToDatabase } = require('../../../config/mongodb');


export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'POST': {
            return addUser(req, res);
        }
    }
}


async function addUser(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        const user = await db.collection('users').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Post added successfully',
            success: true,
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


