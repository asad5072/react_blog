import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const BookMarks = ({bookmarks})=> {

    return (
        <div className="md:w-1/3">
            <h2>Books : {bookmarks.length}</h2>

            {
                bookmarks.map(bookmark => <Bookmark 
                    bookmark={bookmark}
                    key= {bookmark.id}
                    ></Bookmark>)
            }
        </div>
    );
}
BookMarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}
export default BookMarks;