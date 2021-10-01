import { PrismaClient } from '@prisma/client'
import express from 'express'


const prisma = new PrismaClient()
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded());


app.get('/allbooths', async (req,res) => {
  const allBooths = await prisma.booth.findMany()
  res.json(allBooths)
})

app.get('/allspeakers', async (req,res) => {
  const allSpeakers = await prisma.speaker.findMany()
  res.json(allSpeakers)
})

app.get('/getschedule', async (req,res) => {
  const fullSchedule = await prisma.schedule.findMany()
  res.json(fullSchedule)
})

// app.post('/addbook', async (req,res) => {
//     const {title, genre, publisher, year, imageURL} = req.body;

//     const addBook = await prisma.book.create({
//         data: {
//            title,
//            genre,
//            publisher,
//            year,
//            imageURL
//         }
//     })
//     res.json(addBook)
// })

// async function main() {
//   await prisma.$connect()

//   await prisma.user.create({
//     data: {
//       firstname: 'Zac',
//       lastName: 'Kellogg',
//       email: 'zac@zkellogg.com',
//       password: 'test123',
//       avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
      
//     },
//   })

//   const allUsers = await prisma.user.findMany()
//   console.dir(allUsers, { depth: null })
// }
// main()
//   .catch((e) => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

  const server = app.listen(8080, () =>
  console.log(`
🚀 Server ready at: http://localhost:8080`),
)