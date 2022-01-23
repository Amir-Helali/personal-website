import React from 'react';
import { LinkedinIcon, EmailIcon } from 'react-share';
const Contacts = () => {

    return (
        <div id='contacts' className='contacts cotainer py-5'>
            <div className='text-center'>
                <h1>Contacts</h1>
                <a href='https://www.linkedin.com/in/amirreza-helaliesfahani/' target="_blank"><LinkedinIcon size={50} round={true}></LinkedinIcon></a>
                <a href='mailto:amr.hes@gmail.com' target="_blank"><EmailIcon size={50} round={true}></EmailIcon></a>                
            </div>
        </div>
    )
}

export default Contacts
