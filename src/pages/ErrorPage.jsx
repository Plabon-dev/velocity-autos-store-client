import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <section className="bg-gray-950 ">
                <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div className="wf-ull lg:w-1/2">
                        <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
                        <h1 className="mt-3 text-2xl font-semibold text-[#DE3452] md:text-3xl">Page not found</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

                        <div className="flex items-center mt-6 gap-x-3">
                          

                            <Link className="/"><button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                Take me home
                            </button></Link>
                        </div>
                    </div>

                    <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                        {/* <img className="w-full max-w-lg lg:mx-auto" src="/images/components/illustration.svg" alt=""> */}
                        <img className="w-full max-w-lg lg:mx-auto" src="https://c4.wallpaperflare.com/wallpaper/384/942/541/dark-smile-smiling-large-eyes-crying-hd-wallpaper-preview.jpg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;