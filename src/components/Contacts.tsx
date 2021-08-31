import React, { useState } from 'react';
import Contact from './Contact';

interface IContact {
    name: string,
    email: string
}

const Contacts = () => {
    const [contact, setContact] = useState<IContact>({} as IContact);
    const [contactList, setContactList] = useState<IContact[]>([])

    const onclick = () => {
        setContactList([...contactList, contact])
        console.log("contyact= ", contact);
        setContact({
            name:"",
            email:""
        });
        console.log("list=",contactList)
    }
   

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setContact({...contact, [e.target.name] : e.target.value})
        console.log("con",contact)
    }

    const handleRemove = (email:string) =>{
        const newContactList = contactList.filter(c => c.email !== email);
        setContactList(newContactList)
    }

    return (
        <div>
            <h1>Contact List</h1>

            <div className="form">
                <input
                    value={contact.name}
                    onChange={ handleChange}
                    type="text"
                     name='name'
                      placeholder="contact-name" />

                <input
                   value={contact.email}
                    onChange={handleChange}
                    type="text"
                     name='email'
                      placeholder="email-address" />

                <button onClick={onclick}>Add</button>
            </div>
           

            {
                contactList.map(con => <Contact 
                    name={con.name} 
                    key ={con.name} 
                    email={con.email}
                    handleRemove = {handleRemove}></Contact>)
            }
            {/* <Contact name='Omar shakil' email='ofs65@gmail.com'></Contact>
            <Contact name='sadaf hossain' email='osadaam@gmail.com'></Contact>
            <Contact name='Sahiba Bidgute' email='mamuni@gmail.com'></Contact> */}
        </div>
    );
};

export default Contacts;
