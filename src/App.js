import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { key } from "./config";

function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  // immitate componentDidMount
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo`
      );
      console.log(res.data.hits);
      setImages(res.data.hits);
    };

    fetchData();
  }, [search]);

  return (
    <div className="App">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {images.map((el) => (
        <div>
          <img height={500} width={600} src={el.largeImageURL} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
