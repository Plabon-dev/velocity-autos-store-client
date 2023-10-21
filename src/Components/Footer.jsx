

const Footer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-b from-[#3f4d5b] via-[#6f7f91] to-[#7a96a7] dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <button className="btn flex justify-center hover:bg-white items-center bg-white  rounded-r-full rounded-l-full  text-white">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img className="" src="https://i.ibb.co/6ZFCvYH/logo2.jpg" />
                                </div>
                            </div>
                            <h2 className=" hover:bg-white btn-ghost p-0 normal-case sm:text-lg md:text-xl text-[#845EC2]">Velocity Autos</h2>
                        </button>

                        <p className="max-w-md font-bold mx-auto mt-4 text-[#cecdc9] dark:text-[#cecdc9]">Driven by Excellence, Defined by Velocity.</p>


                    </div>

                    <hr className="my-10 border-gray-200 dark:border-gray-700" />

                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p className="text-sm text-[#cecdc9]">© Copyright 2021. All Rights Reserved.</p>

                        <div className="flex mt-3 -mx-2 sm:mt-0">
                            <a href="#" className="mx-2 text-sm  transition-colors duration-300  text-[#cecdc9]" aria-label="Reddit"> Teams </a>

                            <a href="#" className="mx-2 text-sm text-[#cecdc9] transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                            <a href="#" className="mx-2 text-sm text-[#cecdc9] transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;