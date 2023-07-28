import React, { useEffect, useRef, useState } from 'react';
import Layout from '/components/layout';
import Head from 'next/head';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input !== "") {
      setMessages([...messages, { text: input, user: "You" }]);
      const response = await fetch('/api/GeneralChat', {
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
      <section className="flex flex-col p-2" style={{ height: 'calc(100vh - 85px)' }}>
        <div className="flex-grow overflow-auto bg-base-200 mb-2 rounded-md p-4">
          {messages.map((message, index) => (
            <div key={index} className={`my-3 p-2 md:p-3 rounded ${message.user === 'You' ? ' bg-base-100 shadow-xl ml-auto' : 'bg-base-100 shadow-xl mr-auto'}`} style={{ maxWidth: '90%' }}>
              <strong>{message.user}: </strong> {message.text}
            </div>
          ))}
          <div ref={endOfMessagesRef}></div>
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow input border bg-base-200 px-2 py-1 text-md"
            placeholder="Type your message here..."
            autoComplete="off"
            ref={inputRef}
          />
          <button type="submit" className="btn btn-md w-1/5 bg-primary hover:bg-primary-focus text-primary-content px-4 rounded-md ml-2">Send</button>
        </form>
      </section>
    </Layout>
  );
}
