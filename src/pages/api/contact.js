import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const {email, name, message} = req.body;

    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid Input' })
      return;
    }

    const newMessage = {
      email, 
      name,
      message
    };

    let client;

    try {
      const client = await MongoClient.connect(
        'mongodb+srv://rituljain0708:a7oVjiBINQYfKbI1@events.jcxvrzj.mongodb.net/blog-app?retryWrites=true&w=majority'
      );
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }

    const db = client.db();

    try {

    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing Message Failed' });
      return;
    }


    res.status(201).jsom({ message: 'Successfully Stored Message', message: newMessage});
  }
}