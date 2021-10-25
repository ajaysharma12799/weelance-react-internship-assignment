import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Card from './components/Card';
import "./App.css"

const App = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random/3");
    setImages(response.data.message);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="container">
      {
        images.map((dog, idx) => (
          <Card dog={dog} key={idx} />
        ))
      }
    </div>
  )
}

export default App
