import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input !== "") {
      setMessages([...messages, { text: input, user: "You" }]);
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input: input,
        })
      });

      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setMessages(oldMessages => [...oldMessages, { text: data.result, user: 'GPT-4' }]);
      setInput("");
    }
  };

  return (
    <Layout>
      <Head>
        <title>Chat - MINMAX</title>
      </Head>
      <section className="flex flex-col h-screen">
        <div className="flex-grow overflow-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={` my-2 p-3 rounded ${message.user === 'You' ? ' bg-base-200 shadow-xl ml-auto' : ' bg-base-200 shadow-xl mr-auto'}`} style={{ maxWidth: '80%' }}>
              <strong>{message.user}: </strong> {message.text}
            </div>
          ))}
          <div ref={endOfMessagesRef}></div>
        </div>
        <form onSubmit={handleSubmit} className="m-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input border w-full px-4"
            placeholder="Type your message here..."
          />
        </form>
      </section>
    </Layout>
  );
}
