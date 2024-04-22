import mongoose from 'mongoose';

const todo = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type:Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Scheme.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Scheme.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const todo = mongoose.model('todo', todo);
