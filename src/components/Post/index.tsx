import "@/styles/globals.css";
import "@/styles/fonts.css";


type PostProps = {
    title: string;
    desc: string;
    srcPic: string;
    altPic: string;
    link:string;
};


export default function Header(props: PostProps) {
    return (
        <div className="mx-10 mb-20 bg-gray-300 bg-opacity-25 border-2 border-gray-900 rounded-lg snap-center">
            <a href={props.link}>
                <div className="p-5">

                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.title}</h3>

                    <img className="mx-auto border-2 border-gray-900 rounded-lg" src={props.srcPic} alt={props.altPic} />

                    <p className="mb-3 font-normal text-gray-900">{props.desc}</p>

                </div>
            </a>
        </div >
    );
}