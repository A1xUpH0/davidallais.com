import "@/styles/globals.css";
import "@/styles/fonts.css";


export default function Header() {
    return (
        <section className="mx-10 mb-20 bg-gray-300 bg-opacity-25 border-2 border-gray-900 rounded-lg">
            <a href="#">
                <div className="p-5">

                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Project #1</h3>

                    <img className="mx-auto border-2 border-gray-900 rounded-lg" src="https://picsum.photos/300/200?random=1" alt="Main Picture" />

                    <p className="mb-3 font-normal text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate eaque architecto fugit ad facilis sequi odit temporibus voluptatum aliquam?</p>

                </div>
            </a>
        </section >
    );
}
