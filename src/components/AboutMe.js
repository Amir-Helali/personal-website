import React from 'react';
import pic from "../aboutMe.jpg";

const AboutMe = () => {
    return (
        <div className='container-bg'>
            <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5 mt-1'>
                        <img className='profile-img' src={pic} alt='Amirreza...'/>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <div className='about-block'>
                        <h2 className='about mb-2'><b>About Me</b></h2>
                        <p className='aboutme-par mt-3'>
                            I am a 3rd year Software Development student at Seneca currently looking for exciting employment opportunities for my upcoming summer co-op term.
                            I have gained a vast amount of hands on and theoretical experiences during my studies and I am very much looking forward to apply what I've learned in the work environment.
                            I am competent in OOP and SOLID fundamentals, Agile/Scrum mythodology, testing, debugging, Full-Stack development, data structures and algorithms, UML design principles, and much more.
                            I've had a full-time job during my studies which was made possible only through hard work and efficeint time management. I love watching movies and tv shows, experimenting with different game engines, playing video games, and reading sci-fi and fantasy books during my free time. 
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutMe
