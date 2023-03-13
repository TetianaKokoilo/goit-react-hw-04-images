import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import PixabeyAPI from './images-api';
// import PropTypes from 'prop-types';

export const App = () => {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    if (!name) {
      return;
    }
    setLoading(true);
    PixabeyAPI.fetchImages(name, page)
      .then(images => {
        if (page === 1) {
          setImages([...images.hits]);
          return;
        }
        setImages(prevState => [...prevState, ...images.hits]);
      })
      .catch(error => setError(error))
      .finally(
        () => setLoading(false),
        setPage(prevState => prevState.page + 1)
      );
  }, [name, page]);

  const getSearchSubmit = name => {
    setName(name);
    setPage(1);
  };
    const getIndex = index => {
    setIndex(index);
  };

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <div>
      <Searchbar onSubmit={getSearchSubmit} />
      {error && <div>{error.message}</div>}
      {isLoading && <Loader />}
      <ImageGallery>
        {images.map((image, index) => {
          return (
            <ImageGalleryItem
              onClick={toggleModal}
              getIndex={getIndex}
              key={image.id}
              // index={index}
              image={image.webformatURL}
              tags={image.tags}
            />
          );
        })}
      </ImageGallery>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={images[index].largeImageURL} alt={images[index].tags} />
        </Modal>
      )}
      {images.length >= 12 && (
        <Button onLoadMore={() => {
          setPage(prevState => prevState + 1);
        }} />
      )}
    </div>
  );
};
// export class App extends Component {
//   state = {
//     name: '',
//     page: 1,
//     isLoading: false,
//     error: null,
//     images: [],
//     showModal: false,
//     index: null,
//   };
//   static propTypes = {
//     images: PropTypes.array,
//   }

//   componentDidUpdate = (prevProps, prevState) => {
//     if (prevState.name !== this.state.name) {
//       this.setState({ isLoading: true, images: [] });

//       PixabeyAPI.fetchImages(this.state.name, this.state.page)
//         .then(images => this.setState({ images: images.hits }))
//         .catch(error => this.setState({ error }))
//         .finally(() => {
//           this.setState({ isLoading: false });
//           this.setState(prevState => ({ page: prevState.page + 1 }));
//         });
//     }
//   };

//   loadMore = () => {
//     this.setState({ isLoading: true });

//     PixabeyAPI.fetchImages(this.state.name, this.state.page)
//       .then(images =>
//         this.setState(prevState => ({
//           images: [...prevState.images, ...images.hits],
//           page: prevState.page + 1,
//         }))
//       )
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   getIndex = index => {
//     this.setState({ index });
//   };

//   getSearchSubmit = name => {
//     this.setState({ name });
//     this.setState({ page: 1 });
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { error, images, showModal, index, isLoading, page } = this.state;

//     return (
//       <div>
//         <Searchbar onSubmit={this.getSearchSubmit} />
//         {error && <div>{error.message}</div>}
//         {isLoading && <Loader />}
//         <ImageGallery>
//           {images.map((image, index) => {
//             return (
//               <ImageGalleryItem
//                 onClick={this.toggleModal}
//                 getIndex={this.getIndex}
//                 key={image.id}
//                 index={index}
//                 image={image.webformatURL}
//                 tags={image.tags}
//               />
//             );
//           })}
//         </ImageGallery>
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={images[index].largeImageURL} alt={images[index].tags} />
//           </Modal>
//         )}
//         {images.length >= 12 && (
//           <Button onLoadMore={this.loadMore} pageNumber={page} />
//         )}
//       </div>
//     );
//   }
// }
