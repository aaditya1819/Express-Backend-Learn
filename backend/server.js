import express from "express";



const app = express();


// app.get('/',(req, res) => {
//     res.send("Sever is ready")
// });


//get a list of 5 kokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "joke 1",
            content: "joke 1"
        },
        {
            id: 2,
            title: "joke 2",
            content: "joke 2"
        },
        {
            id: 3,
            title: "joke 3",
            content: "joke 3"
        },
        {
            id: 4,
            title: "joke 4",
            content: "joke 4"
        },
        {
            id: 5,
            title: "joke 5",
            content: "joke 5"
        }
    ]
    res.send(jokes)
})


const port =  process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})