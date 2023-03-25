import { Card } from 'react-bootstrap';
import useBookmark from "../customHooks/useBookmark";
import NewsArticle from "../interfaces/NewsArticle";

/**
 * @desc custom UI component for a single news article
 */

function NewsCard({
    created_at,
    author,
    comment_text,
    story_id,
    story_title,
    story_url,
    objectID
}: NewsArticle) {
    const [isBookmarked, setIsBookmarked] = useBookmark({
        objectID,
        created_at,
        author,
        comment_text,
        story_id,
        story_title,
        story_url,
    });

    const bookmarkHandler = (toggle: boolean) => {
        setIsBookmarked(toggle);
    }

    const navigateToSite = () => {
        window.open(story_url, '_blank');
    }
    return <Card className='cursor-pointer' style={{
        minHeight: "260px"
    }}>
        <Card.Body onClick={navigateToSite}>
            <Card.Title>{story_title?story_title:"N/A"}</Card.Title>
            <Card.Text>
                {comment_text?(comment_text?.slice(0, 300) + ' ...'):"N/A"}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <div className='d-flex justify-content-between align-items-center mb-0'>
                <i className={`fa ${isBookmarked ? "fa-bookmark" : "fa-bookmark-o"} cursor-pointer`} onClick={() => bookmarkHandler(!isBookmarked)}></i>
                <div title='author'>
                    <span className='text-muted'>Author :</span>  {author?author:"N/A"}
                </div>
            </div>
        </Card.Footer>
    </Card>

}

export default NewsCard;