import app from './app';
import { dbConnect } from './config/mongo'

dbConnect()

app.listen(3000)


console.log('Server On Port: ', 3000)