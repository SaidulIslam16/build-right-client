
import { Link } from 'react-router-dom';
import NotFoundimg from '../../assets/notfound.png'

const NotFound = () => {
    return (
        <div className='text-center'>
            <div className='flex justify-center items-center'>
                <img className='md:w-[600px]' src={NotFoundimg} alt="" />
            </div>
            <div className='mt-10'>
                <p className='text-xl'>Go Back to: <span className='font-bold text-orange-500'><Link to='/'>Home</Link></span></p>
            </div>
        </div>
    );
};

export default NotFound;