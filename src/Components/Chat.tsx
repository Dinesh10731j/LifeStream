import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react'; 
import { UseChatBot } from '../hooks/Usechat';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [loading, setLoading] = useState(false); 

  const botMutation = UseChatBot(); 

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: input,
        sender: 'user',
      };

      
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput('');
      setLoading(true); 

      try {
        botMutation.mutate(input, {
          onSuccess: (data) => {
            const botMessage: Message = {
              id: Date.now() + 1,
              text: data.message, 
              sender: 'bot',
            };

            setMessages((prevMessages) => [...prevMessages, botMessage]);
            setLoading(false); 
          },
          onError: (error) => {
            console.error("Error fetching bot response:", error);
            setLoading(false); 
          },
        });
      } catch (error) {
        console.error("Error sending message:", error);
        setLoading(false); 
      }
    }
  };

  return (
    <>
      {/* Chatbox container */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-96 max-w-full p-4 bg-white rounded-lg shadow-lg border border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Chat</h2>
            <button
              onClick={() => setIsChatOpen(false)} 
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <div className="h-80 overflow-y-auto mb-4 p-4 border-t border-gray-200">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white self-end ml-auto'
                    : 'bg-gray-300 text-black self-start mr-auto'
                }`}
              >
                {message.text}
              </div>
            ))}
            {loading && (
              <div className="p-3 text-gray-500 text-center">Bot is typing...</div>
            )}
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              className="flex-grow p-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating chat icon */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)} 
          className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </>
  );
};

export default Chat;
