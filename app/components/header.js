import Link from "next/link";


export default function Header() {
    return (
        <>
            <header className=" bg-primary ">
                <div className=" flex justify-center">
                    <h1 className=" p-6 text-5xl text">
                        Mood Tracker
                    </h1>
                </div>
                <div className="flex justify-around">
                    <button className=" p-1 pr-2 pl-2 rounded-md bg-secondary-100 hover:bg-secondary-200 ">
                        <Link href="/"> Home </Link>
                    </button>
                    <button className=" p-1 pr-2 pl-2 rounded-md bg-secondary-100 hover:bg-secondary-200 ">
                        <Link href="/moodData"> Mood Data </Link>
                    </button>
                    <button className=" p-1 pr-2 pl-2 rounded-md bg-secondary-100 hover:bg-secondary-200 ">
                        <Link href="/about"> About </Link>
                    </button>
                </div>
            </header>
        </>
    );
}