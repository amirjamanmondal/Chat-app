import { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    // console.log(selectedConversations);
    useEffect(() => {
        const getMessages = async () => {
            if (!selectedConversation?._id) {
                console.log('No conversation selected.');
                setLoading(false);
                return;
            }

            setLoading(true)
            try {
                const res = await fetch(`/api/message/${selectedConversation._id}`);

                const data = await res.json();
                if (data.error) {
                    throw new Error(toast.error("no conversation found with the user"))
                }

                setMessages(data);
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false);
            }
        }

        if (selectedConversation?._id) getMessages();

    }, [selectedConversation?._id, setMessages])

    return { messages, loading }
}
export default useGetMessages;