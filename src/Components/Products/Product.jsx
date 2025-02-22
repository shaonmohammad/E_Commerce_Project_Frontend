const Product = ({ product }) => {
    const { name, category_name, description, price, image, stock_quantity } = product;
    
    return (
        <div className="relative border rounded-lg shadow-lg p-6 bg-white flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300">
           
            <p className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {category_name}
            </p>  

            <img className="w-32 h-32 object-cover rounded-lg shadow-md" src={image} alt={name} />

            
            <h2 className="text-xl font-bold mt-4 text-gray-800">{name}</h2>

           
            <p className="text-gray-500 text-sm mt-2 px-4 line-clamp-2 overflow-hidden text-ellipsis">
                {description}
            </p>

           
            <div className="flex justify-between items-center w-full mt-4 px-3">
                <p className="text-lg font-bold text-gray-700">${price}</p>

                
                {stock_quantity > 0 ? (
                    <p className="px-4 py-1 text-sm font-bold rounded-md bg-green-500 text-white shadow-md">
                        Stock: {stock_quantity}
                    </p>
                ) : (
                    <p className="px-4 py-1 text-sm font-bold rounded-md bg-red-500 text-white shadow-md animate-pulse">
                        Out of Stock
                    </p>
                )}
            </div>

           
            <button 
                className={`mt-4 w-full font-semibold py-2 rounded-lg shadow-lg transition-all duration-300 
                ${stock_quantity > 0 
                    ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                disabled={stock_quantity === 0}
            >
                {stock_quantity > 0 ? 'Buy Now' : 'Unavailable'}
            </button>
        </div>
    );
};

export default Product;
