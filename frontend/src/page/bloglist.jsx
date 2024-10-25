import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css"; // Import the CSS file
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Bloglist() {
  const [data, setdata] = useState([]);

  const getdata = () => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/post`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleDelete = (id, userId) => {
    console.log(id);
    console.log(userId);
    axios
      .delete(`${process.env.REACT_APP_BASEURL}/post/dalete/${id}/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        getdata();
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="blog-container">
      {data.map((e) => (
        <div className="blog-item" key={e.id}>
          <img
            src="https://media.giphy.com/media/l0Hly6Ica3xE1Xlva/giphy.gif"
            alt="Gif"
          />
          <h1>{e.title}</h1>
          <p>{e.content}</p>
          <div>
            <button>
              <Link
                to={`/update/${e._id}/${e.userId}`}
                style={{ textDecoration: "none",color:"white" }}
              >
                Update
              </Link>
            </button>
            <button
              style={{ marginTop: "10px" }}
              onClick={() => handleDelete(e._id, e.userId)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bloglist;
