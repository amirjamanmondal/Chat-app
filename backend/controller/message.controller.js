import Conversation from '../models/conversation.model.js'
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessages = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessages) {
            conversation.messages.push(newMessages._id);
        }

        // this will run separately
        // await conversation.save();
        // await newMessages.save();

        // this will run parallely
        await Promise.all([conversation.save(), newMessages.save()])

        return res.status(201).json({ newMessages })

    } catch (error) {
        console.log("Error in send message Controller", error.message);
        return res.status(500).json({ error: "internal server error during sending message" })
    }
}

export const getMessages = async (req, res) => {
    try {
        const { receiverId } = req.params;
        const loogedUser = req.user._id;

        var conversation = [];
        conversation = await Conversation.findOne({
            participants: { $all: [loogedUser, receiverId] },
        }).populate("messages"); // mot refference but actual messages

        if (!conversation) {
            res.status(404).json({ message: "no conversation found" })
        }

        const msgs = conversation.messages;
        // console.log(conversation.messages);

        return res.status(200).json(msgs.length);

    } catch (error) {
        console.log("Error in get message Controller", error.message);
        return res.status(500).json({ error: "internal server error during getting message" })
    }
}

