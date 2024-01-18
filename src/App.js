import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ImageList from './components/ImageList';

import './App.scss';
import config from './config';

// https://unsplash.com/developers

const App = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos',
          {
            params: {
              client_id: config.apiKey,
            },
          }
        );
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageList images={images} />
    </div>
  );
}

export default App;
