import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '../store/thunks';
import Post from '../components/Post'
import '../styles/CSS/main.css';
import Loading from "../components/Loading";


function SearchResults() {
    const { term } = useParams();

    const navigate = useNavigate();

    const handleLinkClick = (post) => {
        // Use navigate to add the new route to existing URL
        navigate(`../comments/${post.title.replace(/\s/g, '_')}`, { state: { post: post } });
    };


    const dispatch = useDispatch();
    // const { data, loading, error } = useSelector((state) => state.subredditPosts);
    const { data, loading, error } = useSelector((state) => state.search)


    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                // Dispatch actions to fetch data from both APIs
                dispatch(fetchSearch(term));
                //   dispatch(fetchSubredditPosts(subreddit));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [dispatch, term]);

   

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (loading) {
        return <div>Search Loading...</div>;
    }
    if (error) {
        return <div> Search Error: {error}</div>;
    }


    return (
        <div className="searchResults-page-container">
        

            <ul style={{ listStyle: 'none' }}>
                {data.map((post) => (
                    <div onClick={() => handleLinkClick(post)} key={post.id}>
                        <Post post={post} />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;




