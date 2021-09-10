const express = require('express')
const peopleRouter = require('./routes/people')
const storiesRouter = require('./routes/stories')
const authorsRouter = require('./routes/authors')

const app = express()


app.use(express.json())
app.use('/api/people',peopleRouter)
app.use('/api/stories',storiesRouter)
app.use('/api/authors',authorsRouter)



app.listen(3000,()=>{
    console.log('running on http://localhost:3000');
})