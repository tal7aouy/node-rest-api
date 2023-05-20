import mongoose from 'mongoose'

export default function connect(){
const mongoUrl = 'mongodb://mongodb:27017/rest'

try{
  
mongoose.Promise = Promise
mongoose.connect(mongoUrl)
mongoose.connection.on('open', () => console.log('Connected successfully'))
mongoose.connection.on('error', (error: Error) => console.log(error))
} catch(err){
  console.log(err);
  
}
}