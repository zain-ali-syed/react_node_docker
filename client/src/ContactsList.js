import React, { Component } from 'react';
import Contact from './Contact';


class ContactsList extends Component {
    state = {
        contacts:[]
    }

    componentDidMount(){
        fetch("http://localhost:4000")
        .then(res => res.json())
        .then(contacts => this.setState(() => ({contacts})));
    }

    render() {
        const {contacts} = this.state;
        console.log(contacts)
        if(!contacts.length) return <div>Loading </div>
       
        return (
            <div>
                {contacts.map(contact => <><Contact {...contact} key={contact.email}/><hr /></>)}
            </div>
        );
    }
}

export default ContactsList;