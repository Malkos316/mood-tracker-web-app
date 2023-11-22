import Link from "next/link";


export function footer() {
    return (
        <>
            <div className=" bg-primary ">
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
                        <Link href="/trackMood"> Mood Tracker </Link>
                    </button>
                    <button className=" p-1 pr-2 pl-2 rounded-md bg-secondary-100 hover:bg-secondary-200 ">
                        <Link href="/about"> About </Link>
                    </button>
                </div>
            </div>
        </>
    );
}

// should have links to my linked in, github, and email.
// should stay at bottom of page, no matter how big the page is.
// should have the same colors as the header, including hover colors.