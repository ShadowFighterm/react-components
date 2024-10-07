import analyticscard from "./analyticscard.module.css";


const analyticsCardData = [
    {
        title: "Sales",
        value: "2.382",
        analytics: "-3.65%",
        since: "Since last week",
        img: "https://cdn-icons-png.flaticon.com/512/3104/3104819.png"
    },
    {
        title: "Earnings",
        value: "$21.300",
        analytics: "6.65%",
        since: "Since last week",
        img: "https://cdn-icons-png.flaticon.com/512/891/891462.png"
    },
    {
        title: "Visitors",
        value: "14.212",
        analytics: "5.25%",
        since: "Since last week",
        img: "https://cdn-icons-png.flaticon.com/512/681/681494.png"
        
    },
    {
        title: "Orders",
        value: "64",
        analytics: "-2.25%",
        since: "Since last week",
        img: "https://cdn-icons-png.flaticon.com/512/263/263142.png"
    },
]
function AnalyticsCard() {
    return (
        <div>
            {analyticsCardData.map((card, index) => {
                return (
                    <div class={analyticscard.card}>
                        <h1>{card.title}</h1>
                        <h2>{card.value}</h2>
                        <p>{card.analytics} {card.since}</p>
                        <img src={card.img}></img>
                    </div>
                )
            })}
        </div>
    );
}
export default AnalyticsCard;