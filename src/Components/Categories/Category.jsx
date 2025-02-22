const Category = ({ category }) => {
    const { name, image } = category;
    return (
        <div className="border flex justify-center items-center p-8 gap-2">
            <h2 className="text-3xl font-bold">{name}</h2>
            <img className="w-20 h-20"  src={image} alt="" />
        </div>
    );
};

export default Category;