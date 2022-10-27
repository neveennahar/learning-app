import React from 'react';

const Blog = () => {
    return (
        <div className='w-[90%] md:w-[50%] mx-auto my-8'>
            <h1 className='font-bold mb-5'>Questions and Answers</h1>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    1.What is cors?
                </div>
                <div className="collapse-content">
                    <p>Cross-Origin Resource Sharing cors is an HTTP-based security mechanism controlled and enforced by the client web browser.</p>
                </div>
            </div>

            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    2.Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p> Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.Firebase was originally developed to be a realtime database, and today that is still one of its key featuresMost apps have some form of authentication feature that is necessary to identify the user. Thanks to Firebase’s easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts.


                    Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </p>
                </div>
            </div>

            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    3.How does the private route work?
                </div>
                <div className="collapse-content">
                    <p> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
                    </p>
                </div>
            </div>

            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    4.What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p> Node is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                    Working of Node accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                    Node basically works on two concept

                    Asynchronous
                    Non-blocking I/O
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;