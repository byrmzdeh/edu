import express from 'express'
import mongoose, { Schema } from 'mongoose';
import cors from'cors'
const app = express()
const port = 7000

app.use(express.json())
app.use(cors())

const eduSchema = new Schema({
    name: String,
    icon: String,
    desc: String,
    price: String
});

const eduModel = mongoose.model('Educature', eduSchema);

app.get('/', async (req, res) => {
    try {
        const edu = await eduModel.find({})
        res.send(edu)     
    } catch (error) {
        console.log(error.message)  
    }
})

app.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const edu = await eduModel.findById(id)
        res.send(edu)     
    } catch (error) {
        console.log(error.message)  
    }
})

app.post('/', async (req, res) => {
    try {
        const {name ,icon , desc ,price } = req.body
        const edu = new eduModel( {name ,icon , desc ,price } )
        await edu.save()
        res.send(edu)     
    } catch (error) {
        console.log(error.message)  
    }
})

app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {name ,icon , desc ,price } = req.body
        const edu = await eduModel.findByIdAndUpdate(id , {name ,icon , desc ,price } )
        res.send(edu)     
    } catch (error) {
        console.log(error.message)  
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const edu = await eduModel.findByIdAndDelete(id)
        res.send(edu)     
    } catch (error) {
        console.log(error.message)  
    }
})

mongoose.connect('mongodb+srv://aydan:aydan@cluster0.ccton5y.mongodb.net/')
    .then(() => console.log('Connected !'))
    .catch(() => console.log('Not Connected !'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})