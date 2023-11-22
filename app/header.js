import Link from "next/link";

export function header() {
    return (
        <>
            <div className=" flex justify-center">
                <h1 className=" text-5xl text">
                    Mood Tracker
                </h1>
            </div>
            <div className="flex justify-around">
                <h2>
                    <Link href="/"> Home </Link>
                </h2>
                <h2>
                    <Link href="/trackMood"> Mood Tracker </Link>
                </h2>
                <h2>
                    <Link href="/about"> About </Link>
                </h2>
            </div>
        </>
    );
}