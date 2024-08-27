import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    return (
        <div>
            <p>{bookmark.title}</p>
        </div>
    );
}
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;