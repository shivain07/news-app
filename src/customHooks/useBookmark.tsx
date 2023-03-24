import { useEffect, useState } from 'react';
import NewsArticle from '../interfaces/NewsArticle';

/**
 * @desc custom hook to bookmark news articles 
 * @returns a boolean for is bookmark present and a setter for bookmark 
 */

function useBookmark({
    created_at,
    author,
    comment_text,
    story_id,
    story_title,
    story_url,
    objectID
}: NewsArticle) {
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

    useEffect(() => {
        const items = JSON.parse(localStorage?.getItem('bookmarks') as string);
        if (items) {
            let itemToFind = items.find((item: NewsArticle) => item?.objectID === objectID);
            if (itemToFind) {
                setIsBookmarked(true);
            }
        }
    }, [objectID]);

    const setIsBookmark = (makeBookmark: boolean) => {
        const items = JSON.parse(localStorage?.getItem('bookmarks') as string);
        if (makeBookmark) {
            if (items) {
                items.push({
                    created_at,
                    author,
                    comment_text,
                    story_id,
                    story_title,
                    story_url,
                    objectID
                });
                localStorage.setItem('bookmarks', JSON.stringify(items));
            } else {
                let itemToPush = [{
                    created_at,
                    author,
                    comment_text,
                    story_id,
                    story_title,
                    story_url,
                    objectID
                }];
                localStorage.setItem('bookmarks', JSON.stringify(itemToPush));
            }
            setIsBookmarked(true);
        } else {
            if (items) {
                let updatedItems = items.filter((item: NewsArticle) => item?.objectID !== objectID)
                localStorage.setItem('bookmarks', JSON.stringify(updatedItems));
            }
            setIsBookmarked(false);
        }
    }
    return [isBookmarked, setIsBookmark] as const
}

export default useBookmark;