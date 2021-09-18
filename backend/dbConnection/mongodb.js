import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://mernecommerce:mernecommerce13@cluster0.2vuwg.mongodb.net/SoundBeeDb?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )

    console.log(`Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
