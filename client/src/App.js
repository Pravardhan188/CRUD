import React, { useState } from "react";
import Axios from 'axios';
import "./App.css";

function App() {
  const [mname, setMovieName] = useState("");
  const [rdate, setReleaseDate] = useState("");
  const [dyw, setDidYouWatch] = useState("");
  const [rate, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const submitReview = () => {
    Axios.post('http://localhost:9000/controller', {
      Moviename: mname,
      releasedate: rdate,
      DidyouWatch: dyw,
      rating: rate,
      genre: genre
    }).then(() => {
      alert("Success");
    }).catch(error => {
      alert("Error: " + error);
    });
  };

  const retrieveData = () => {
    Axios.get('http://localhost:9000/controller')
      .then((response) => {
        setData(response.data);
      });
  };

  const updateData = () => {
    Axios.patch(`http://localhost:9000/controller/${id}`, {
      rating: rate
    }).then(() => {
      alert("Update success");
    });
  };

  const deleteData = () => {
    Axios.delete(`http://localhost:9000/controller/${id}`)
      .then(() => {
        alert("Delete success");
      });
  };

  return (
    <div className="App">
      <h1>CRUD Application Demo</h1>
      <div className="information">
        <label><b>Movie Name</b></label>
        <input
          type="text"
          name="mname"
          onChange={(e) => setMovieName(e.target.value)}
          required
        />
        <label><b>Release Date</b></label>
        <input
          type="date"
          name="rdate"
          onChange={(e) => setReleaseDate(e.target.value)}
          required
        />
        <label><b>Did You Watch</b></label>
        <input
          type="text"
          name="dyw"
          onChange={(e) => setDidYouWatch(e.target.value)}
          required
        />
        <label><b>Rating</b></label>
        <input
          type="number"
          name="rate"
          onChange={(e) => setRating(e.target.value)}
          required
          min="0"
          max="10"
          step="0.1"
        />
        <label><b>Genre</b></label>
        <input
          type="text"
          name="genre"
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <button onClick={submitReview}><b>Submit</b></button>
      </div>
      <div className="actions">
        <label><b>ID (for update/delete)</b></label>
        <input
          type="text"
          name="id"
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button onClick={retrieveData}><b>Retrieve</b></button>
        <button onClick={updateData}><b>Update</b></button>
        <button onClick={deleteData}><b>Delete</b></button>
      </div>
      <div className="data-display">
        {data && data.map((item, index) => (
          <div key={index}>
            <p>Name: {item.Moviename}</p>
            <p>Release Date: {item.releasedate}</p>
            <p>Did You Watch: {item.DidyouWatch}</p>
            <p>Rating: {item.rating}</p>
            <p>Genre: {item.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
