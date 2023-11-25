import { Button, Label, Select, TextInput } from "flowbite-react";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
const Banner = () => {
    return (
        <section>
            <div className="relative overflow-hidden bg-[#F8F7FC]">
                <div className="bg-[#F8F7FC] px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
                    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                        <div className="grid items-center gap-12 lg:grid-cols-2 xl:gap-x-24">
                            <div className="mt-12 lg:mt-0">
                                <div className="flex items-center gap-4 text-red-500">
                                    <FaHome className="text-xl" />
                                    <p className="uppercase font-bold">Real estate agency</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="213" height="6" viewBox="0 0 213 6" fill="none">
                                    <path d="M0.385449 5.06768C70.7978 3.06405 140.806 2.7456 211.168 5.99651C213.628 6.11593 213.594 3.1304 211.168 2.98444C141.261 -1.1555 70.1407 -1.27492 0.385449 4.44403C-0.120024 4.48384 -0.136873 5.08095 0.385449 5.06768Z" fill="#F23B3B" />
                                </svg>
                                <h1 className="mt-2 mb-12 text-5xl font-bold font-poppins tracking-tight md:text-6xl ">
                                    Find your Dream Home by us</h1>
                                <div className="absolute -mt-32 xl:ml-[450px] ml-[350px] hidden lg:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="120" viewBox="0 0 96 97" fill="none">
                                        <path d="M5.92966 24.5469C5.79668 38.5006 12.6897 54.6516 27.2858 56.9412C34.0707 58.017 41.3041 54.6745 44.3666 48.2033C46.7423 43.1801 44.6669 36.6768 38.7054 36.7083L38.7047 36.7085C34.5157 36.8992 30.7813 39.2544 28.683 43.0294C20.7037 57.1549 36.6362 70.1603 48.6007 72.2233C62.4787 74.634 76.2606 69.124 85.4723 58.6967C86.8103 57.1854 89.2378 59.3993 87.8997 60.9106C77.9093 72.2145 63.097 78.0976 48.0873 75.4689C35.8621 73.3426 22.9101 63.4822 23.7184 48.9122C23.8921 45.8074 24.8436 42.8531 26.473 40.3563C28.1024 37.8595 30.3514 35.9113 32.9863 34.7129C37.2553 32.7653 43.5419 32.6669 46.8754 37.1552C50.7218 42.2676 48.036 49.566 44.6482 53.6539C40.8075 58.2022 35.2458 60.6782 29.3559 60.4625C12.2069 59.7797 2.67261 40.9927 2.83817 24.6839C2.86117 22.5813 5.9497 22.4085 5.9287 24.5467L5.92966 24.5469Z" fill="#FA4A4A" />
                                        <path d="M80.8773 74.0098C83.401 69.0156 85.6401 63.8512 87.5834 58.5436L88.7517 60.9152C82.3831 59.7907 76.09 58.0736 69.9444 55.7837C68.0551 55.0735 68.5505 51.8105 70.4567 52.5386C76.5985 54.8323 82.8889 56.5504 89.2547 57.6733C89.7267 57.7901 90.1354 58.128 90.3641 58.5919C90.592 59.056 90.615 59.5944 90.4266 60.0551C88.4949 65.3569 86.2695 70.5166 83.7597 75.5076C82.8371 77.3346 79.9836 75.8259 80.9261 73.9927L80.8773 74.0098Z" fill="#FA4A4A" />
                                    </svg>
                                </div>

                                <div className="space-y-4">
                                    <p>With over 1 million homes for sale available on the website, Renting
                                        can match you with a house.</p>

                                    <div className="flex place-content-center lg:block">
                                        <Button className="bg-red-500 hover:bg-red-600">Make An Enquiry</Button>
                                    </div>

                                </div>

                            </div>
                            <div className="mb-12 lg:mb-28">
                                <div className="bottom-0 z-40 mt-18 mb-14 lg:absolute lg:-ml-24 lg:mt-0 ">
                                    <div
                                        className=" w-full p-8 border shadow-sm hidden lg:block
                                    dark:border-gray-700 bg-gray-50 space-y-2
                                     dark:bg-gray-700
                                     rounded-2xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                            <g clip-path="url(#clip0_1_380)">
                                                <path d="M12.2251 11.9105C12.684 5.25586 18.2275 0 24.9987 0C31.7699 0 37.3135 5.25586 37.7724 11.9105C37.7927 12.2059 37.7724 24.5063 24.9987 24.5063C12.225 24.5062 12.2047 12.2059 12.2251 11.9105Z" fill="#FFBA57" />
                                                <path d="M12.3707 33.7565L17.4193 39.1238C17.6626 39.3824 17.6944 39.7841 17.4716 40.0831C17.3283 40.2752 17.0949 40.3789 16.8553 40.3789H15.4146L15.4146 49.255C15.4146 49.6664 15.0811 49.9999 14.6698 49.9999H8.96541C8.55408 49.9999 8.22058 49.6664 8.22058 49.255L8.22061 40.3789H6.7583C6.40332 40.3789 6.08897 40.1269 6.02383 39.7599C5.98194 39.5239 6.06631 39.2828 6.23057 39.1081L11.2751 33.7453C11.4821 33.5251 11.8092 33.4453 12.1089 33.5692C12.2089 33.6106 12.2965 33.6776 12.3707 33.7565Z" fill="#F23B3B" />
                                                <path d="M25.5412 28.6212L30.5861 33.9845C30.7503 34.1591 30.8345 34.4002 30.7925 34.6361C30.7272 35.003 30.4129 35.2549 30.058 35.2549H28.5957L28.5958 49.255C28.5958 49.6663 28.2623 49.9998 27.851 49.9998H22.1466C21.7353 49.9998 21.4018 49.6663 21.4018 49.255L21.4018 35.2549H19.9395C19.5845 35.2549 19.2701 35.0028 19.205 34.6358C19.1631 34.3998 19.2475 34.1587 19.4117 33.9841L24.4506 28.6272C24.517 28.5565 24.5946 28.4961 24.6828 28.456C24.9888 28.3169 25.3285 28.395 25.5412 28.6212Z" fill="#F23B3B" />
                                                <path d="M38.722 23.88L43.7669 29.2433C43.931 29.4178 44.0153 29.659 43.9731 29.8949C43.9078 30.2618 43.5935 30.5137 43.2386 30.5137H41.7764L41.7766 49.2548C41.7766 49.6661 41.4431 49.9996 41.0317 49.9996H35.3273C34.9159 49.9996 34.5825 49.6661 34.5825 49.2548L34.5825 30.5137H33.1202C32.7653 30.5137 32.451 30.2618 32.3857 29.8949C32.3437 29.659 32.428 29.4179 32.5921 29.2433L37.6371 23.88C37.7778 23.7304 37.9742 23.6455 38.1796 23.6455C38.3849 23.6455 38.5813 23.7304 38.722 23.88Z" fill="#F23B3B" />
                                                <path d="M15.9881 11.9103C16.437 7.32939 20.2998 3.75 24.9986 3.75C29.6865 3.75 33.5422 7.3127 34.0058 11.8783C34.0367 12.1827 34.006 20.9792 24.9986 20.9792C15.9879 20.9791 15.9593 12.2043 15.9881 11.9103Z" fill="#FFE27A" />
                                                <path d="M24.7149 16.2973C23.5429 16.2259 23.2209 15.5205 23.1611 15.3548C23.0758 15.0358 22.7855 14.8007 22.4397 14.8007C22.0267 14.8007 21.6919 15.1354 21.6919 15.5484C21.6919 15.6084 21.6997 15.6665 21.7131 15.7224L21.7128 15.7225C21.7135 15.7251 21.7149 15.7303 21.7168 15.7367C21.726 15.772 21.7368 15.8065 21.7508 15.8396C21.8888 16.2203 22.4419 17.4016 24.0716 17.7171V18.7101C24.0716 19.1222 24.4057 19.4562 24.8179 19.4562C25.2301 19.4562 25.5642 19.1222 25.5642 18.7101V17.7395C26.2784 17.6152 26.7583 17.303 27.0583 17.0207C27.6165 16.4954 27.9498 15.7014 27.9498 14.8965C27.9498 14.1403 27.6532 12.3488 24.9062 12.0457C24.362 11.9856 23.9737 11.8125 23.7523 11.531C23.5567 11.2824 23.5356 11.0078 23.5356 10.9013C23.5356 10.77 23.5716 9.61895 24.8179 9.61895C25.6356 9.61895 25.9657 10.139 26.0278 10.2521C26.1385 10.5267 26.4069 10.7208 26.7212 10.7208C27.1342 10.7208 27.469 10.386 27.469 9.97305C27.469 9.85029 27.4388 9.73477 27.3863 9.63252L27.3867 9.63232C27.1764 9.1751 26.5824 8.45986 25.5642 8.21357V7.21211C25.5642 6.8 25.2301 6.46582 24.8179 6.46582C24.4058 6.46582 24.0716 6.7999 24.0716 7.21211V8.21055C22.5986 8.56025 22.0431 9.93457 22.0431 10.9012C22.0431 11.976 22.75 13.3091 24.7424 13.529C26.4572 13.7183 26.4572 14.605 26.4572 14.8964C26.4572 15.206 26.3465 15.641 26.0355 15.9336C25.7415 16.2104 25.2975 16.3328 24.7149 16.2973Z" fill="#FF5A3C" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_380">
                                                    <rect width="50" height="50" fill="white" transform="translate(-0.00146484)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h2 className="text-3xl font-bold text-gray-600
                                     dark:text-gray-300">$7454.21</h2>
                                        <p className=" mb-4 text-gray-600 dark:text-gray-400 ">
                                            Revenue</p>
                                    </div>
                                </div>
                                <div className="md:h-[80vh] rounded-lg overflow-hidden">
                                    <img src="https://i.ibb.co/7g66g9b/rsz-banner.jpg"
                                        className="w-full rounded-lg shadow-lg object-cover
                                 dark:shadow-black/20 " alt="Banner Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden absolute -mt-40 ml-3 lg:block">
                    <img src="https://i.ibb.co/dmdY2Rr/Houseshape.png" alt="background Image" className="lg:w-8/12" />
                </div>
            </div>
            {/* search Box */}
            <div className="container mx-auto relative bg-slate-100 p-8 rounded-md -mt-10   
            ">
                <div className="grid md:grid-cols-5  gap-x-5 items-center lg:mx-20">
                    <div className="max-w-md ">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Select your country" />
                        </div>
                        <Select id="countries" required>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </Select>
                    </div>
                    {/* Properties Types */}
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Property Type" />
                        </div>
                        <Select id="countries" required>
                            <option>Commercial</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </Select>
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 ">
                            <Label htmlFor="input-gray" color="gray" value="Location" />
                        </div>
                        <TextInput id="input-gray" icon={IoLocationOutline} placeholder="Which Place?" required color="gray" />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 ">
                            <Label htmlFor="input-gray" color="gray" value="Price" />
                        </div>
                        <TextInput id="input-gray" rightIcon={FaDollarSign} placeholder="Price" required color="gray" className=" border-red-500 pr-5 border-dotted border-r-2"
                        />
                    </div>

                    <div className="gap-x-2 flex items-center
                     bg-red-500 p-3 mt-5 
                     text-white rounded-lg sm:place-content-center w-1/2 md:w-full lg:w-9/12">
                        <p>Find Now</p>
                        <FaSearch />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;