import { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/api/gpt', { input: input });
      setResponse(data.result);
    } catch (error) {
      setResponse('Error processing request');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-base-100 p-2">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-center text-2xl mb-4 text-primary">Chat with GPT</h1>
          <div className="mb-4">
            <label htmlFor="message" className="block text-primary-content text-sm font-bold mb-2"></label>
            <textarea
              id="message"
              placeholder="Message to send to GPT"
              className="textarea textarea-bordered textarea-lg w-full  textarea-primary"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={4}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="btn btn-wide bg-primary hover:bg-primary-focus text-primary-content font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
      <div className="w-full max-w-md mt-2">
        <div className="bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-xl mb-4 text-primary">Response</h2>
          <p className=" text-primary-content text-center">{response}</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
