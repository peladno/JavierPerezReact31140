import React, { useState } from 'react';

function CheckOut() {

  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  });
  
  const handleOnChange = (e) => {
    setBuyer({
      ...buyer, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='name' type="text" onChange={handleOnChange} />
        <input name='phone' type="text" onChange={handleOnChange} />
        <input name='email' type="text" onChange={handleOnChange} />
        <button>Guardar</button>
      </form>
    </div>
  );

}

export default CheckOut