
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="my-8 text-center">
            <hp className="text-yellow-500">---------- {subHeading} ----------</hp>
            <h2 className="text-5xl uppercase mt-4 font-bold">{heading}</h2>
        </div>
    );
};

export default SectionTitle;