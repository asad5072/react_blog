import PropTypes from 'prop-types';

const Blog = ({blog, handleAddtoBookmark}) => {
    const {title, cover_image, reading_time, author} = blog;
    return(
        <div className='py-12'>
            <div className='w-full max-h-[400px] overflow-hidden'>
                <img className='w-full' src={cover_image} alt={title} />
            </div>
            <div className="flex items-center justify-between py-4">
                <div>
                    <p>Author: {author}</p>
                </div>
                <div>
                    <p>{reading_time}</p>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <button onClick={() => handleAddtoBookmark(blog)} className='bg-slate-400 p-2 rounded'>add to Book mark</button>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddtoBookmark: PropTypes.func
}

export default Blog;