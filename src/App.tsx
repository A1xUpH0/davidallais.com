import "@/styles/globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Post from "@/components/Post";


export default function App() {
    return (
        <div className="h-full overflow-auto bg-fixed bg-center bg-cover bg-hero-pattern snap-y snap-mandatory">

            <Header />
            <div className="pb-[80vh]"></div>

            <Post title="Project #1" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda inventore repellat, facilis delectus voluptatibus officiis ducimus ab libero esse." srcPic="https://picsum.photos/300/200?random=1" altPic="Project #1" link="" />

            <Post title="Project #2" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda inventore repellat, facilis delectus voluptatibus officiis ducimus ab libero esse." srcPic="https://picsum.photos/300/200?random=2" altPic="Project #2" link="" />

            <Post title="Project #3" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda inventore repellat, facilis delectus voluptatibus officiis ducimus ab libero esse." srcPic="https://picsum.photos/300/200?random=3" altPic="Project #3" link="" />

            <div className="pb-20"></div>
            <Footer />

        </div >
    );
}