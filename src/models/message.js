import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  passphrase: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
