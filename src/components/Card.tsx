import { Card } from "../types/card";

type CardProps = {
    card: Card;
};

const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

const CardComponent = ({ card }: CardProps) => {
    return (
        <div className="flex flex-col w-[360px] min-h-min bg-primary-card rounded-[15px]">
            <div
                className="w-[360px] h-[218px] bg-cover bg-center rounded-tl-[15px] rounded-tr-[15px] flex justify-end items-start p-[32px] text-[13px] font-extrabold"
                style={{ backgroundImage: `url("/images/${card.category}.png")` }}
            >
                <p>{card.rating.rate}/5</p>
            </div>
            {/* <div className={`w-[360px] h-[218px] bg-cover bg-center rounded-tl-[15px] rounded-tr-[15px] bg-[image:var(--${card.category.replace(/\s+/g, '-')})]`} /> */}
            <div className="flex flex-col grow gap-[48px] w-[360px] h-full p-[32px] bg-primary-card rounded-bl-[15px] rounded-br-[15px]">
                <div className="flex flex-col grow gap-[32px]">
                    <h2 className="font-bold text-[32px] tracking-[-0.02em] leading-[35px] text-primary-text">{truncateText(card.title, 60)}</h2>
                    <p className="text-primary-text text-[16px]">{truncateText(card.description, 142)}</p>
                </div>
                <div className="flex grow justify-items-start items-end h-max">
                    <a href={card.image} target="_blank" rel="noreferrer">
                        <button className="w-[165px] h-[56px] bg-primary-button text-white font-bold rounded-[6px]">Detail produktu</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;