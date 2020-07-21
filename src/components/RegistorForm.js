import React, { useState } from 'react';

function RegistorForm() {
    const [form, setForm] = useState({firstname: '', secondname: ''});
    const [items, setItems] = useState([]);
  const  updateForm = e => {
        setForm({ ...form, [e.target.name] : e.target.value }) 
    }
  const submitForm = e => {
      e.preventDefault();
      setItems([ ...items,{ id : items.length, name : form.firstname + form.secondname  }])    }
    return (
        <div>
            <form onSubmit ={submitForm}>
                <div> <input value={form.firstname} name="firstname" onChange={updateForm} /></div>
                <div><input value={form.secondname} name="secondname" onChange={updateForm} /></div>
                <button>Submit</button>
            </form>
            <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
        </div>
    );
}

export default RegistorForm;