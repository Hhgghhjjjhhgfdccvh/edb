import { useState } from "react";
import ArticleIcon from '@mui/icons-material/Article';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import axios from 'axios'
import Slider from'./Slider'

export default function Form() {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote={
      name:formData.name,
      email:formData.email,
      message:formData.message
    }
    axios.post('http://localhost:3001/create',newNote)
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
};

  return (
   <div className="form">
    <Slider/>
    <div className="content">
        <h1 className="contribute">SEND US YOUR ENTRY </h1>
    </div>
     <div className="formss">
     <div className='poto'><img src="images/download.jpg" className="mo"/></div>
     <form onSubmit={handleSubmit}>
    <div className="div1">
    <label className="label1" htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
    </div>

    <div className="div2">
    <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
    </div>

     <div className="div3">
     <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
     </div>

      <button className="btn" type="submit"><FileUploadIcon/></button>
    </form>
     </div>
   </div>
  );
}