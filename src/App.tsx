import "@/styles/globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function App() {
    return (
    // <div className="relative z-0 h-full">

    //     <header className="m-5 bg-gray-900 rounded-lg">
    //         <h1 className="p-2 mb-16 text-3xl text-center text-white md:text-5xl lg:text-6xl">David <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-teal-300">ALLAIS</span> </h1>
    //     </header>

    //     <main className="m-5 bg-gray-900 rounded-lg">
    //         <section className="px-2.5 py-5">
    //             <h2 className="text-2xl text-center">Title</h2>
    //             <p className="m-5 text-xs text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta iste tenetur nemo debitis quisquam dolor, error quas dicta ad qui!</p>
    //             <img className="mx-auto" src="https://picsum.photos/300/200?random=1" alt="Main Picture" />
    //         </section>
    //     </main>

    //     <footer className="my-5 mx-7">
    //         <button data-popover-target="popover-description" type="button" className="mx-2.5 text-white bg-gray-900 hover:bg-gray-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-md px-3.5 py-3.5 text-center">Homepage</button>
    //         <button data-popover-target="popover-description" type="button" className="mx-2.5 text-white bg-gray-900 hover:bg-gray-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-md px-3.5 py-3.5 text-center">Contact Me</button>
    //     </footer>

        // </div>
        <div className="h-full bg-center bg-cover bg-hero-pattern">

            <Header />

            <Footer />

        </div>
    );
}