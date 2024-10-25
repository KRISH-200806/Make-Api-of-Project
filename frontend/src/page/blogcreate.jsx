import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
function Blogpost() {
  const [AddDtata, setAddData] = useState({
    title: "",
    author: ""
  });

  const { title,content } = AddDtata;

  const handlechange = (e) => {
    const { name, value } = e.target;
    setAddData({ ...AddDtata, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASEURL}/post/create`, AddDtata, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form className="form-update">
        <h1 className="mt-5">Post Create</h1>
        <Form.Group className="mb-3 mt-5">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            className="w-25 m-auto"
            name="title"
            value={title}
            onChange={handlechange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>content</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            className="w-25 m-auto"
            name="content"
            value={content}
            onChange={handlechange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handlesubmit} className="w-25">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Blogpost;
