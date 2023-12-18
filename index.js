const express = require('express')

const port = 3005
const app = express() 
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('pages/home')
})

app.get("/news", (req, res) => {
    res.render('pages/news')
})

app.get("/services", (req, res) => {
    res.render('pages/services')
})

app.get("/service/2", (req, res) => {
    data = [
        {'title': 'Healthcare', 'content': 'We provide 3 clincis for the citizens and one for the visitors'},
        {'title': 'Garbage', 'content': 'We have a fleet of 25 garbage collction vehicles, oprating 24/7'},
        {'title': 'Parking', 'content': 'There are two parking areas in the center of the city with a capacity of 500 vehicles'},
        {'title': 'Kindergarden', 'content': 'All babies can attend a kindergarden close to their house'}
    ]
    res.render('pages/services2', {data: data})
})

app.get("/gallery", (req, res) => {
    res.render('pages/gallery')
})


app.listen(port, () => {
    console.log("Server strated on port " + port)
})