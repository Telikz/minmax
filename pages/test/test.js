import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '/components/layout';
import { useState } from 'react';
import Chat from '/components/chat';


export default function Testing() {
  const [buttonValues, setButtonValues] = useState([10, 20, 30])

  function addButton() {
    setButtonValues([...buttonValues, 0])
  }

  function updateButtonValue(index) {
    const newValue = prompt(`Enter a new value for button ${index + 1}:`)
    setButtonValues([
      ...buttonValues.slice(0, index),
      parseInt(newValue) || 0,
      ...buttonValues.slice(index + 1),
    ])
  }

  return (
    <Layout>
<Chat />
      <div className='flex justify-center flex-col'>
        <div id="buttons-container" className="flex flex-wrap gap-4 mx-52">
          {buttonValues.map((value, index) => (
            <button
              key={index}
              onClick={() => updateButtonValue(index)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {value}
            </button>
          ))}
        </div>
        <div className='flex justify-center p-4'><button
          onClick={addButton}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
        >
          Add Button
        </button></div>
      </div>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-12 gap-4">
            {/* Left sidebar */}
            <div className="col-span-12 sm:col-span-3">
              <div className="bg-white p-4 rounded-md shadow">
                <h2 className="text-xl font-semibold mb-4">Left Sidebar</h2>
                {
                  [...Array(100)].map((_, i) => (
                    <div key={i} className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Item {i}</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl aliquet nunc, eget aliquet nisl nisl sit amet lorem. Sed euismod, nisl nec ultricies ultricies, nunc nisl aliquet nunc, eget aliquet nisl nisl sit amet lorem.</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div className="bg-white p-4 rounded-md shadow">
                <h2 className="text-xl font-semibold mb-4">Main Content</h2>
                {[...Array(100)].map((_, i) => (
                  <div key={i} className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Item {i}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl aliquet nunc, eget aliquet nisl nisl sit amet lorem. Sed euismod, nisl nec ultricies ultricies, nunc nisl aliquet nunc, eget aliquet nisl nisl sit amet lorem.</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 sm:col-span-3">
              <div className="bg-white p-4 rounded-md shadow">
                <h2 className="text-xl font-semibold mb-4">Right Sidebar</h2>
                {[...Array(100)].map((_, i) => (
                  <div key={i} className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Item {i}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl aliquet nunc, eget aliquet nisl nisl sit amet lorem. Sed euismod, nisl nec ultricies ultricies, nunc nisl aliquet nunc, eget aliquet nisl nisl sit amet lorem.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
