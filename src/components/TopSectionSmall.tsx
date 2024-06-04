type TopBarSmallProps = {
    ratingButton: (rating: string) => void;
    activeButton: 'best' | 'worst';
};

const TopSectionSmall = ({ ratingButton, activeButton }: TopBarSmallProps) => {
    return (
        <div className="xl:hidden flex flex-col w-full xl:items-start lg:items-center">
            <div className="flex lg:flex-row flex-col w-full">
                <div className="flex flex-col lg:w-1/2 w-full xl:pt-[160px] lg:pt-[120px] pt-[48px] gap-[28px] items-center lg:items-start">
                    <p className="text-secondary-text font-bold text-[21px]">EYEBROW NADPIS</p>
                    <h1 className="text-tertiary-text font-bold text-[55px] xl:pb-[40px] pb-[48px]">Lorem Ipsum</h1>
                </div>
                <div className="flex lg:w-1/2 w:full h-auto justify-end lg:pb-[60px] pb-[48px] items-center lg:items-end">
                    <img
                        src="/images/furniture.png"
                        alt="furniture"
                        className="xl:pt-[120px] lg:pt-[60px] w-auto h-auto"
                    />
                </div>
            </div>
            <p className="text-tertiary-text xl:text-left text-center font-medium text-[21px] xl:pb-[120px] lg:pb-[60px] pb-[48px] lg:w-1/2 w-full">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
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