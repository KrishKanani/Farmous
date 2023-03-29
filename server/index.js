const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

//Jatin url working const URL = 'mongodb://jatin:jatin@ac-amxf4ow-shard-00-00.ay1e1ui.mongodb.net:27017,ac-amxf4ow-shard-00-01.ay1e1ui.mongodb.net:27017,ac-amxf4ow-shard-00-02.ay1e1ui.mongodb.net:27017/newusers?ssl=true&replicaSet=atlas-g7jz6a-shard-0&authSource=admin&retryWrites=true&w=majority';
// completely fine working login sign up database const URL = 'mongodb://admin:admin@ac-omhpcwq-shard-00-00.crrifkt.mongodb.net:27017,ac-omhpcwq-shard-00-01.crrifkt.mongodb.net:27017,ac-omhpcwq-shard-00-02.crrifkt.mongodb.net:27017/newUsers?ssl=true&replicaSet=atlas-12miqo-shard-0&authSource=admin&retryWrites=true&w=majority';
const URL = 'mongodb://admin:admin@ac-ptzeryd-shard-00-00.ohh8mv1.mongodb.net:27017,ac-ptzeryd-shard-00-01.ohh8mv1.mongodb.net:27017,ac-ptzeryd-shard-00-02.ohh8mv1.mongodb.net:27017/newUsers?ssl=true&replicaSet=atlas-um81k6-shard-0&authSource=admin&retryWrites=true&w=majority';
app.use(cors())
app.use(express.json())

mongoose.connect(URL, () => {
    console.log("Database connected.")
})

app.post('/api/register', async(req, res) => {
    console.log(req.body)

    // try {
    //     // const salt = await bcrypt.genSalt();
    //     // const hashedPassword = await bcrypt.hash(request.body.password, salt);
    //     const hashedPassword = await bcrypt.hash(request.body.password, 10);

    //     const user = { username: request.body.username, email: request.body.email, password: hashedPassword }

    //     const newUser = new User(user);
    //     await newUser.save();

    //     return response.status(200).json({ msg: 'Signup successfull' });
    // } catch (error) {
    //     return response.status(500).json({ msg: 'Error while signing up user' });
    // }

    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            name: req.body.username,
            contact: req.body.contact,
            email: req.body.email,
            password: newPassword,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        console.log(err);
        res.json({ status: 'error', error: 'Duplicate email, error while registering' })
    }
})

app.post('/api/login', async(req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })

    if (!user) {
        return { status: 'error', error: 'Invalid login' }
    } else {
        const isPasswordValid = await bcrypt.compare(
            req.body.password,
            user.password
        )
        console.log(req.body)

        if (isPasswordValid) {
            const token = jwt.sign({
                    name: user.username,
                    email: user.email,
                },
                'secret123'
            )

            return res.json({ status: 'ok', user: token })
        } else {
            return res.json({ status: 'error', user: false })
        }
    }
})

app.get('/api/quote', async(req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, 'secret123')
        const email = decoded.email
        const user = await User.findOne({ email: email })

        return res.json({ status: 'ok', quote: user.quote })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'invalid token' })
    }
})

app.post('/api/quote', async(req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, 'secret123')
        const email = decoded.email
        await User.updateOne({ email: email }, { $set: { quote: req.body.quote } })

        return res.json({ status: 'ok' })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'invalid token' })
    }
})

app.listen(1337, () => {
    console.log('Server started on 1337')
})