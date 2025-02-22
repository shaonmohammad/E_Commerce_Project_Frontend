import shopping from '../../assets/images/shopping.png'


const Navbar = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center'>
            <div><img className='w-10 h-10' src={shopping} alt="" /></div>
            <div>
                <ul className='flex'>
                    <a><li className='text-gray p-2 mx-2 mx-1'>Home</li></a>
                    <a><li className='text-gray p-2 mx-2 mx-1'>All Category</li></a>
                    <a><li className='text-gray p-2 mx-2 mx-1'>New Arrival</li></a>
                    <a><li className='text-gray p-2 mx-2 mx-1'>Contact</li></a>
                   
                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;