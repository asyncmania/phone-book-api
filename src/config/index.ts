import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

export const envFound = dotenv.config()


if(envFound.error){
  throw new Error("⚠️ Couldn't find .env file ⚠️")
}

export default {
  
  port: parseInt(process.env.PORT, 10),

  databaseURL: process.env.MONGODB_URI,

  api: {
    prefix: '/api'
  }

}