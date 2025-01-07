import AnalyticsCard from "../components/analyticscard";
import Calendar from "../components/calendar";
import Timer from "../components/timer";
import BookingForm from "../components/bookingform";
import Categories from "../components/categories";
import Footer from "../components/footer";
import ListingImages from "../components/listingimages";
import Navbar from "../components/navbar";
import SearchBox from "../components/searchbox";
import SummaryCard from "../components/summarycard";

const imgs = [
    "https://via.placeholder.com/400x300.png?text=Sample+Image+1",
    "https://via.placeholder.com/400x300.png?text=Sample+Image+2",
    "https://via.placeholder.com/400x300.png?text=Sample+Image+3",
    "https://via.placeholder.com/400x300.png?text=Sample+Image+4",
    "https://via.placeholder.com/400x300.png?text=Sample+Image+5"
];

function Page() {
    return (
        <div>
            <AnalyticsCard />
            <Calendar />
            <Timer />
            <BookingForm />
            <Categories />
            <Footer />
            <ListingImages img={imgs} />
            <Navbar isFixed={false}/>
            <SearchBox isScrolledProp={false} />
            <SummaryCard />
        </div>
    );
}
export default Page;