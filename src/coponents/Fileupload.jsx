import { useState } from "react";
import ArticleIcon from '@mui/icons-material/Article';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function FileUpload() {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
};

  return (
   <div className="form">
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
     <label htmlFor="message">File Upload:</label>
      <input type="file"  name="message" value={formData.message} onChange={handleChange}/>
     </div>

      <button className="btn" type="submit"><FileUploadIcon/></button>
    </form>
     </div>
   </div>
  );
}