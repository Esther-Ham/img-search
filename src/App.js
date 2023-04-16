import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import './App.css';

function App() {
    const [images, setImages] = useState([]);
    const [term, setTerm] = useState('');
    const [page, setPage] = useState(1);

    const handleSubmit = async (term) => {
        setPage(1);
        const result = await searchImages(term, 1);
        setImages(result);
        setTerm(term);
    };

    const handleLoadMore = async () => {
        const newPage = page + 1;
        const result = await searchImages(term, newPage);
        setImages((prevImages) => [...prevImages, ...result]);
        setPage(newPage);
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
