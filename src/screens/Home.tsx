import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import commonAPIService from '../axios-services/common-api-services';
import { API_URL } from '../apis/BasicUrl';
import NewsArticle from '../interfaces/NewsArticle';
import NewsCard from '../components/NewsCard';

/**
 * @desc Home screen featuring a list of news articles
 */

function Home() {
    const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
    const [postNum, setPostNum] = useState({
        initial: 0,
        last: 5
    });

    const [showArrow, setShowArrow] = useState({
        left: false,
        right: true
    });

    useEffect(() => {
        if (postNum.initial <= 0) {
            setShowArrow({
                left: false,
                right: true
            });
        } else if (postNum.last >= newsArticles.length) {
            setShowArrow({
                left: true,
                right: false
            });
        } else {
            setShowArrow({
                left: true,
                right: true
            });
        }
    }, [postNum, newsArticles.length]);

    useEffect(() => {
        getuserPosts();
    }, []);

    const getuserPosts = () => {
        commonAPIService.get(API_URL.posts).then((res) => {
            let articleDataObj = res.data.hits;
            if (articleDataObj) {
                setNewsArticles(articleDataObj);
            }
        });
    }
    const paginateHandler = (type: number) => {
        let temp = {
            initial: postNum?.initial,
            last: postNum?.last
        }
        if (type === -1) {
            setPostNum({
                initial: temp.initial - 5,
                last: temp.initial
            });
        } else {
            setPostNum({
                initial: temp.last,
                last: temp.last + 5
            });
        }
    }
    return (
        <Row>
            <Col>
                <Row className='d-flex justify-content-around align-items-center'>
                    {
                        newsArticles && newsArticles?.slice(postNum.initial, postNum.last)?.map((article) => <Col xs={12} sm={8} md={5} className="p-2 m-2" key={article?.objectID}><NewsCard
                            key={article.story_id}
                            created_at={article.created_at}
                            author={article.author}
                            comment_text={article.comment_text}
                            story_id={article.story_id}
                            story_title={article.story_title}
                            story_url={article.story_url}
                            objectID={article.objectID}
                        /></Col>)
                    }
                </Row>
                {newsArticles.length > 0 && <Row>
                    <Col>
                        <div className='d-flex justify-content-between mb-5 py-4'>
                            <div>
                                {showArrow.left && <i className="fa fa-arrow-left cursor-pointer font-size-lg" title="Back"
                                    onClick={() => paginateHandler(-1)}></i>}
                            </div>
                            <div>
                                {showArrow.right && <i className="fa fa-arrow-right cursor-pointer font-size-lg" title="Forward"
                                    onClick={() => paginateHandler(1)}></i>}
                            </div>
                        </div></Col>
                </Row>}
            </Col>
        </Row >
    );
}

export default Home;



