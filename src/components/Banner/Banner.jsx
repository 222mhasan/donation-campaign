
const Banner = () => {
    return (
        <div>
            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/qrMzmsf/donation-bg.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex flex-col place-items-center justify-items-center">
                        <h1 className="mb-5 text-4xl text-black font-bold">I Grow By Helping People In Need</h1>
                        <div className="flex relative items-center justify-between">
                            <input type="text" className="w-[450px] h-16 rounded-md p-4 text-lg border-none" placeholder="Search here...."
                            />
                            <button className="absolute bg-[#FF444A] text-lg font-semibold top left-[360px] p-[18px] text-white rounded-r-md">Search</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;