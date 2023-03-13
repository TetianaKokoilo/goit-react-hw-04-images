import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import PixabeyAPI from './images-api';


export const App = () => {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!name) {
      return;
    }
    setLoading(true);
    PixabeyAPI.fetchImages(name, page)
      .then(({ hits, totalHits }) => {
        setImages(prevState => [...prevState, ...hits]);
        setShowBtn(page < Math.ceil(totalHits / 12));
      })
      .catch(error => setError(error.message))
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 500)
      );
  }, [name, page]);

  const getSearchSubmit = value => {
    if (value === name) return;

    setName(value);
    setImages([]);
    setShowBtn(false);
    setPage(1);
  };

  const clickBtn = () => {
    setPage(prevState => prevState + 1);
  };
  if (isLoading) {
    return (
      <div>
        <Searchbar onSubmit={getSearchSubmit} />
        <Loader />
      </div>
    );
  } else {
    return (
      <div>
        <Searchbar onSubmit={getSearchSubmit} />
        {error && <div>{error}</div>}
        {isLoading && <Loader />}
        <ImageGallery images={images} />
        {showBtn && <Button clickBtn={clickBtn} />}
      </div>
    );
  }
};
