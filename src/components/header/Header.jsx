import images from '../../assets/images/images.jfif'
const Header = () => {
  return (
    <div className='flex items-center justify-between p-4 border-b-2'>
      <h1 className="text-4xl text-red-300">Knowledge Caffee</h1>
      <img className='max-h-12' src={images} alt="" />
    </div>
  );
};
export default Header;
