type TopSectionSmallProps = {
    ratingButton: (rating: 'best' | 'worst') => void;
    activeButton: 'best' | 'worst';
};

/**
 * Top section of the page for small screens
 * @param ratingButton Function to sort cards by rating
 * @param activeButton Active rating button
 *  
 * @returns Top section of the page for small screens
 */

const TopSectionSmall: React.FC<TopSectionSmallProps> = ({ ratingButton, activeButton }) => {
    return (
        <div className="xl:hidden flex flex-col w-full xl:items-start md:items-center">
            <div className="flex md:flex-row flex-col w-full">
                <div className="flex flex-col md:w-1/2 w-full xl:pt-[160px] md:pt-[120px] pt-[48px] gap-[28px] items-center md:items-start">
                    <p className="text-secondary-text font-bold text-[21px]">EYEBROW NADPIS</p>
                    <h1 className="text-tertiary-text font-bold text-[55px] xl:pb-[40px] pb-[48px]">Lorem Ipsum</h1>
                </div>
                <div className="flex md:w-1/2 w:full h-auto md:justify-end justify-center md:pb-[60px] pb-[48px] items-center md:items-end">
                    <img
                        src="/images/furniture.png"
                        alt="furniture"
                        className="xl:pt-[120px] md:pt-[60px] w-auto h-auto"
                    />
                </div>
            </div>
            <p className="text-tertiary-text xl:text-left text-center font-medium text-[21px] xl:pb-[120px] md:pb-[60px] pb-[48px] md:w-1/2 w-full">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            <div className="flex flex-row gap-[16px] pb-[60px] w-full">
                <button className={`font-extrabold rounded-[6px] ${activeButton === 'best' ? 'bg-secondary-text text-white' : 'bg-transparent text-secondary-text'}`}
                    onClick={() => ratingButton('best')}>Nejlepší</button>
                <button className={`font-extrabold rounded-[6px] ${activeButton === 'worst' ? 'bg-secondary-text text-white' : 'bg-transparent text-secondary-text'}`}
                    onClick={() => ratingButton('worst')}>Nejhorší</button>
            </div>
        </div>
    );
}

export default TopSectionSmall;