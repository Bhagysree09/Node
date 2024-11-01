
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const User = require('./model/user');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Welcome');
});

// app.get('/chicken', (req,res)=>{
//     res.send('sure')
// });

// app.get ('/dosa', (req,res) => {
//     var customized_dosa = {
//         name: 'masala dosa',
//         size: '10 cm ',
//         is_sambar: true,
//         is_chutney: false
//     }
//     res.send(customized_dosa)
// });

const  userRouter = require('./router/userRouter');
const menuRouter = require('./router/menuRouter');
app.use('/api', userRouter)
app.use('/menu',menuRouter )
// app.use('/api' , menuRouter)

const mongoURL= 'mongodb+srv://bhagyasreesendh:manager@cluster0.8swlp.mongodb.net/'
//const mongoURL= 'mongodb://3.88.223.173:27017/test'

mongoose.connect(mongoURL,{
        //    useNewUrlParser:true,
        //   useUnifiedTopology: true
}).then(() => console.log('Connected!'))
.catch(err => console.error(err));

app.listen(3001, ()=>{
    console.log('Server is running on port 3001');
    
})