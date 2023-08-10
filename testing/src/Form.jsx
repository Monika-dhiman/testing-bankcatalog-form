import axios from "axios";
import React, { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({});
  const [img, setimg] = useState();
  const submit = async (e) => {
    e.preventDefault();
    console.log(form);
    console.log(img);
    const formdata = new FormData();
    formdata.append("data",form);
    formdata.append("pic", img);
    console.log(formdata)
    // await axios
    //   .post("http://localhost:8000/image", formdata)
    //   .then((res) => setsource(res.data?.img))
    //   .catch((err) => console.log(err));
  };
  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form enctype="multipart/form-data">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handlechange} required />
        <br />
        <br />
        <label for="abbreviation">Abbreviation:</label>
        <input type="text" id="abbreviation" name="abbreviation" onChange={handlechange} required />
        <br />
        <br />
        <label for="description">Description:</label>
        <input type="text" id="description" name="description" onChange={handlechange} required />
        <br />
        <br />
        <label for="swiftCode">SWIFT Code:</label>
        <input type="text" id="swiftCode" name="swiftCode" onChange={handlechange} required />
        <br />
        <br />
        <label for="submittedBy">Submitted By:</label>
        <input type="text" id="submittedBy" name="submittedBy" onChange={handlechange} required />
        <br />
        <br />
        <label for="bankLogo">Bank Logo:</label>
        <input
          type="file"
          id="bankLogo"
          name="bankLogo"
          accept="image/*"
          onChange={e => setimg(e.target.files[0])}
          required
        />
        <br />
        <br />
      </form>
      <button type="submit" onClick={submit}>Submit</button>
    </>
  );
}
