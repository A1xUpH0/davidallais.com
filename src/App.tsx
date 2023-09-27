import "@/styles/globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Post from "@/components/Post";


export default function App() {
    return (
        <div className="h-auto bg-fixed bg-center bg-cover bg-hero-pattern">

            <Header />
            <div className=" pb-[100vh] "></div>
            <Post />
            <Post />
            <Post />
            <div className="pb-20"></div>
            <Footer />

        </div>
    );
}