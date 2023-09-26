import "@/styles/globals.css";
import "@/styles/fonts.css";


export default function Footer() {
    return (
        <footer className="fixed my-5 mx-7 bottom-5">
            <button data-popover-target="popover-description" type="button" className="mx-2.5 text-white bg-gray-900 hover:bg-gray-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-md px-3.5 py-3.5 text-center">Homepage</button>
            <button data-popover-target="popover-description" type="button" className="mx-2.5 text-white bg-gray-900 hover:bg-gray-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-md px-3.5 py-3.5 text-center">Contact Me</button>
        </footer>
    );
}