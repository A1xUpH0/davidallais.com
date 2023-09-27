import "@/styles/globals.css";
import "@/styles/fonts.css";


export default function Header() {
    return (
        <header className="sticky mx-10 my-[-10px] py-10 bottom-5">
            <h1 className="border-y-[3px] border-y-gray-900 py-2 px-1 m-2 text-3xl text-center text-gray-900">David ALLAIS<span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-teal-600"></span></h1>
            <h2 className="mt-3 text-xl text-center text-gray-900">Web Developer</h2>
        </header>
    );
}