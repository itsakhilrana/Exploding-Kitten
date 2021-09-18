import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    gamesPlayed: {
      type: Number,
      default: 0,
    },
    win: {
      type: Number,
      default: 0,
    },
    loose: {
      type: Number,
      default: 0,
    },
    savedGame: {
      cards: {
        type: Array,
      },
      defusingCard: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true }
)

const User = mongoose.model('gameUsers', UserSchema)
export default User
