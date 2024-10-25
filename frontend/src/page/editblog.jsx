import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const initalvalue = {
  title: "",
  content: "",
};
function Editblog() {
  const [formdata, setformdata] = useState(initalvalue);

  const { title, content } = formdata;

  const { id, userId } = useParams();

  const handlchange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handlsubmit = (e) => {
    e.preventDefault();

    axios
      .patch(
        `${process.env.REACT_APP_BASEURL}/post/update/${id}/${userId}`,
        formdata,
        { withCredentials: true }
      )
        .then((res) => {
            toast.success(
              res.data.message ? res.data.message  : res.data.msg
            );
        console.log(res);
        setformdata(res);
        })
        
        .catch((err) => {
            
            console.log(err)
        });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1>EditProduct Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-4 m-auto mt-5">
            <Form className="form-update m-auto" onSubmit={handlsubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  className="w-50 m-auto"
                  name="title"
                  value={title}
                  onChange={handlchange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>content</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter content"
                  className="w-50 m-auto"
                  name="content"
                  value={content}
                  onChange={handlchange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-50">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editblog;
