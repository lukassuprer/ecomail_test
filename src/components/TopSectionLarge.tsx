type TopSectionLargeProps = {
    ratingButton: (rating: 'best' | 'worst') => void;
    activeButton: 'best' | 'worst';
};

/**
 * Top section of the page for large screens
 * @param ratingButton Function to sort cards by rating
 * @param activeButton Active rating button
 *  
 * @returns Top section of the page for large screens
 */

const TopSectionLarge: React.FC<TopSectionLargeProps> = ({ ratingButton, activeButton }) => {
    return (
        <div className="hidden xl:flex flex-row w-full">
            <div className="flex flex-col w-1/2 pt-[160px]">
                <p className="text-secondary-text font-bold text-[21px] pb-[28px]">EYEBROW NADPIS</p>
                <h1 className="text-tertiary-text font-bold text-[55px] pb-[40px]">Lorem Ipsum</h1>
                <p className="text-tertiary-text font-medium text-[21px] pb-[120px] w-full">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                <div className="flex flex-row gap-[16px] pb-[60px]">
                    <button className={`font-extrabold rounded-[6px] ${activeButton === 'best' ? 'bg-secondary-text text-white' : 'bg-transparent text-secondary-text'}`}
                        onClick={() => ratingButton('best')}>Nejlepší</button>
                    <button className={`font-extrabold rounded-[6px] ${activeButton === 'worst' ? 'bg-secondary-text text-white' : 'bg-transparent text-secondary-text'}`}
                        onClick={() => ratingButton('worst')}>Nejhorší</button>
                </div>
            </div>
            <div className="flex w-1/2 justify-end">
                <div className="w-auto h-auto">
                    <img
                        src="/images/furniture.png"
                        alt="furniture"
                        className="pt-[120px] w-auto h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default TopSectionLarge;