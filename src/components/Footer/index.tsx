import "@/styles/globals.css";
import "@/styles/fonts.css";


export default function Footer() {
    return (
        <footer className="fixed my-5 mr-8 ml-9 bottom-5">
            <button type="button" className="mx-2.5 ring-1 ring-white text-white bg-gray-900 hover:bg-gray-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-md px-3.5 py-3.5 text-center">Homepage
            </button>

            <button type="button" className="mx-2.5 text-white bg-gray-900 hover:bg-gray-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-gray-500 ring-1 ring-white font-medium rounded-lg text-md px-3.5 py-3.5 text-center">Contact Me
            </button>

        </footer>
    );
}