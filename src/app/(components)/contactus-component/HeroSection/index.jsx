
export default function Hero() {
    return (
        <section
            className="relative bg-cover bg-center h-[90vh] flex items-center justify-start"
            style={{ backgroundImage: "url('/aboutbg.png')" }}
        >
            <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0" />
            <div className=" w-full h-full absolute top-0 left-0 z-0" />
            <div className="max-w-full mx-auto text-center text-white">
                <div className="flex flex-col items-center justify-center h-full px-6 md:px-12 lg:px-20 z-10">
                    <h1 className="text-center text-3xl md:text-5xl lg:text-6xl text-[#CDDC94] font-bold z-10">
                        CONTACT ECOGENICA<span className="align-super text-sm">®</span>
                    </h1>
                </div>
            </div>

        </section>
    );
}