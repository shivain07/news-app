import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import NewsCard from '../components/NewsCard';
import NewsArticle from '../interfaces/NewsArticle';

/**
 * @desc bookmark screen featuring bookmarked news articles
 */

function Bookmarks() {
    const [bookmarkedItems, setBookmarkedItems] = useState<NewsArticle[]>([]);

    useEffect(() => {
        const items = JSON.parse(localStorage?.getItem('bookmarks') as string);
        if (items) {
            setBookmarkedItems(items);
        }
    }, []);

    return (
        <Row className='d-flex justify-content-around align-items-center'>
            {
                bookmarkedItems?.length > 0 ? bookmarkedItems?.map((article) => <Col xs={12} sm={8} md={5} className="p-2 m-2" key={article?.objectID}><NewsCard
                    key={article.story_id}
                    created_at={article.created_at}
                    author={article.author}
                    comment_text={article.comment_text}
                    story_id={article.story_id}
                    story_title={article.story_title}
                    story_url={article.story_url}
                    objectID={article.objectID}
                /></Col>) : <Col>
                    <h3>No bookmarked articles </h3>
                </Col>
            }
        </Row>
    );
}

export default Bookmarks;