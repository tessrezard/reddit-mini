import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch, fetchAboutMultipleSubreddits } from '../store/thunks';
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
    const { data, loading, error } = useSelector((state) => state.search)
    const { dataAboutMultiple } = useSelector((state) => state.aboutMultipleSubreddits);


    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                dispatch(fetchSearch(term));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [dispatch, term]);



    let subredditsArr = [];
    for (let n in data) {
        subredditsArr.push(data[n].subreddit)
    }


    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            if (data) {
                try {
                    dispatch(fetchAboutMultipleSubreddits(subredditsArr));
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };
        fetchData();
    }, [dispatch, data]);


    const noResults = data.length < 1;


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
            <div className="searchResults-header-container">

                <div className="searchResults-header">
                    <p>Search Results for:</p>
                    <p>{term}</p>

                </div>
            </div>

            {noResults ?
                (
                    <>
                        <div className="searchResults-no-results-container">
                            <p>No results</p>
                        </div>
                    </>
                ) : (
                    <>
                        <ul style={{ listStyle: 'none', position: 'relative', bottom: 16 }}>
                            {data.map((post, index) => (
                                <li key={post.id}>
                                    <div onClick={() => handleLinkClick(post)} >
                                        {post.locked?
                                        (<></>)
                                    :(
                                        <Post post={post} aboutSubreddit={dataAboutMultiple[index]} />
                                    )}
                                    </div>
                                </li>

                            ))}
                        </ul>
                    </>
                )}

        </div>
    );
};

export default SearchResults;







