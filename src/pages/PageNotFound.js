import pnf from "../assets/images/pnf.jpg"
import {Link} from "react-router-dom";
import {Button} from "../components";
import {useEffect} from "react";

export const PageNotFound = () => {

    useEffect(() => {
        document.title= `Page Not Found / Biblioteka Filmova`;
    });

    return (
        <main>
            <section className={"flex flex-col justify-center px-2"}>
                <div className={"flex flex-col items-center my-4"}>
                    <p className={"text-7xl text-gray-700 font-bold my-10 dark:text-slate-50"}>404, Ooops!</p>
                    <div className={"max-w-lg mt-20"}>
                        <img className={"rounded w-96"} src={pnf} alt={"404 Page Not Found"}/>
                    </div>
                </div>
                <div className={"flex justify-center my-10"}>
                    <Link to={"/"}>
                        <Button>Back to Home</Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}