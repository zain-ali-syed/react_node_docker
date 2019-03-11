import React from 'react';

const Contact = ({first_name, last_name, email}) => {
    return (
        <div>
            <h1>{`${first_name} ${last_name}`}</h1>
            <p>{email}</p>
        </div>
    );
};

export default Contact;