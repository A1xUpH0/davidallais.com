import "@/styles/globals.css";
import "@/styles/fonts.css";


export default function Header() {
    return (
        <header className="fixed mx-10 border-y-2 top-5 ">
            <h1 className="p-1 m-2 text-3xl text-center text-white md:text-5xl lg:text-6xl">David <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-teal-300">ALLAIS</span></h1>
        </header>
    );
}