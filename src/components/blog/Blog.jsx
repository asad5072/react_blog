import PropTypes from 'prop-types';

const Blog = ({blog}) => {
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
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;