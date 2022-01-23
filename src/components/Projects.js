import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className='d-flex justify-content-center py-4'>
                <h1><b><u>Projects</u></b></h1>
            </div>
            <div className='container projects-wrapper'>
                <div className='projects-content mb-2'>
                    <h3><b>Travel Companion App (W.I.P) (React, MongoDB, JavaScript, Node.js)</b></h3>
                    <br></br>
                    <ul>
                        <li>Developing a web app that allows users connect with each other by searching through different travel plans posted by other users. The app supports account/profile creation and customization, travel postings, friends and chat functionalities.</li>
                        <li>Implemented various front-end components using React, CSS and Bootstrap that sends and fetches information through API calls.</li>
                        <li>Backend implementation using JavaScript and MongoDB and Node.js with various APIs that communicate with the database.</li>
                        <li>Continuous Deployment using GitHub actions to Heroku.</li>
                    </ul>
                </div>
                <div className='projects-content mb-2'>
                    <h3><b>Face Mask Detection App (Android Studio, Java, TensorFlow Lite)</b></h3>
                    <br></br>
                    <ul>
                        <li>Created an app for Android that uses camera to detect if people are wearing a face mask or not in real time. </li>
                        <li>Implemented in Android Studio utilizing TensorFlow Lite to use a pre-trained model with approximately 93% accuracy. Implemented by following OOP principles</li>
                    </ul>
                </div>
                <div className='projects-content'>
                    <h3><b>Various School Projects (C, C++, Angular)</b></h3>
                    <br></br>
                    <ul>
                        <li>Created a chat application in C++ with TCP and UDP protocols that allowed multiple users to connect to the server.</li>
                        <li>Created a virtual university library in Java with different account levels functionalities that managed the items borrowed by each account from the library. A user interface was implemented with JavaFX.</li>
                        <li>Deployed a weather web app using Angular for the front end that utilized 3rd party APIs to fetch location and weather data.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects
