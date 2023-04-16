import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import './App.css';

function App() {
    const [images, setImages] = useState([]);
    const [term, setTerm] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        // do nothing
      }, [page])

    const imageAPI = async () => {
        console.log('page =', page);
        const result = await searchImages(term, page);
        return result;
    };

    const handleSubmit = async (term) => {
        setPage(1);
        setTerm(term);
        const returnedValue = await imageAPI();
        setImages(returnedValue);
    };

    const handleLoadMore = async () => {
        const newPage = page + 1;
        console.log('newPage =', newPage);
        setPage(newPage);
        const returnedValue = await imageAPI();
        console.log(returnedValue);
        setImages((prevImages) => [...prevImages, ...returnedValue]);
        console.log('after API call, page =', page);
    };

    return (
        <div>
            <Header />
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
            {images.length > 0 && (
                <div className="load-more-container">
                    <button className="load-more" onClick={handleLoadMore}>Load More</button>
                </div>
            )} 
        </div>
    );
}

export default App;