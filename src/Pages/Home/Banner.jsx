import { Button } from "flowbite-react";
import { FaHome } from "react-icons/fa";
const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-[#F8F7FC]">
            <div className="bg-[#F8F7FC] px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid items-center gap-12  lg:grid-cols-2 xl:gap-x-24">
                        <div className="mt-12 lg:mt-0">
                            <div className="flex items-center gap-4 text-rose-500">
                                <FaHome className="text-xl"/>
                                <p className="uppercase font-bold">Real estate agency</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="213" height="6" viewBox="0 0 213 6" fill="none">
                                <path d="M0.385449 5.06768C70.7978 3.06405 140.806 2.7456 211.168 5.99651C213.628 6.11593 213.594 3.1304 211.168 2.98444C141.261 -1.1555 70.1407 -1.27492 0.385449 4.44403C-0.120024 4.48384 -0.136873 5.08095 0.385449 5.06768Z" fill="#F23B3B" />
                            </svg>
                            <h1 className="mt-2 mb-12 text-5xl font-bold font-poppins tracking-tight md:text-6xl xl:text-7xl">
                                Find your Dream<br /><span>Home by us </span>
                                
                            </h1>
                            <div className="absolute -mt-24 ml-[500px] hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="120" viewBox="0 0 96 97" fill="none">
                                    <path d="M5.92966 24.5469C5.79668 38.5006 12.6897 54.6516 27.2858 56.9412C34.0707 58.017 41.3041 54.6745 44.3666 48.2033C46.7423 43.1801 44.6669 36.6768 38.7054 36.7083L38.7047 36.7085C34.5157 36.8992 30.7813 39.2544 28.683 43.0294C20.7037 57.1549 36.6362 70.1603 48.6007 72.2233C62.4787 74.634 76.2606 69.124 85.4723 58.6967C86.8103 57.1854 89.2378 59.3993 87.8997 60.9106C77.9093 72.2145 63.097 78.0976 48.0873 75.4689C35.8621 73.3426 22.9101 63.4822 23.7184 48.9122C23.8921 45.8074 24.8436 42.8531 26.473 40.3563C28.1024 37.8595 30.3514 35.9113 32.9863 34.7129C37.2553 32.7653 43.5419 32.6669 46.8754 37.1552C50.7218 42.2676 48.036 49.566 44.6482 53.6539C40.8075 58.2022 35.2458 60.6782 29.3559 60.4625C12.2069 59.7797 2.67261 40.9927 2.83817 24.6839C2.86117 22.5813 5.9497 22.4085 5.9287 24.5467L5.92966 24.5469Z" fill="#FA4A4A" />
                                    <path d="M80.8773 74.0098C83.401 69.0156 85.6401 63.8512 87.5834 58.5436L88.7517 60.9152C82.3831 59.7907 76.09 58.0736 69.9444 55.7837C68.0551 55.0735 68.5505 51.8105 70.4567 52.5386C76.5985 54.8323 82.8889 56.5504 89.2547 57.6733C89.7267 57.7901 90.1354 58.128 90.3641 58.5919C90.592 59.056 90.615 59.5944 90.4266 60.0551C88.4949 65.3569 86.2695 70.5166 83.7597 75.5076C82.8371 77.3346 79.9836 75.8259 80.9261 73.9927L80.8773 74.0098Z" fill="#FA4A4A" />
                                </svg>
                            </div>
                            
                            <div className="space-y-4">
                                <p className="">With over 1 million homes for sale available on the website, Renting
                                    can match you with a house.</p>

                                <Button className="bg-red-500 hover:bg-red-600">Make An Enquiry</Button>
                                
                            </div>
                            
                        </div>
                        <div className="mb-12 lg:mb-0">
                            <img src="https://i.ibb.co/7g66g9b/rsz-banner.jpg"
                                className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="Banner Image" />
                        </div>
                        
                        
                    </div>
                </div>
               
            </div>
            <div className="hidden absolute -mt-40 ml-3 lg:block">
                <img src="https://i.ibb.co/dmdY2Rr/Houseshape.png" alt="background Image" className="lg:w-8/12"/>
            </div>
            
        </section>
    );
};

export default Banner;