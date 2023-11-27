
const PropertyReview = () => {
    return (
        <>
            <div className="p-8">
                <div className="flex gap-4">
                    <input type="Name" name="name" className="mt-1 block w-1/2 rounded-md border border-slate-300
                     bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500sm:text-sm" placeholder="Full Name *" required />
                    <input type="email" name="email" className="mt-1 block w-1/2 rounded-md border
                     border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm
                     placeholder:font-semibold placeholder:text-gray-500 sm:text-sm" placeholder="Email *" required/>
                </div>
                <div className="my-6 flex gap-4">
                    <input type="Name" name="name" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 
                    py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold
                     placeholder:text-gray-500 sm:text-sm" placeholder="Contact Number *" required/>
                    <input type="email" name="email" className="mt-1 block w-1/2 rounded-md border border-slate-300
                     bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold
                     placeholder:text-gray-500 sm:text-sm" placeholder="Website" />
                </div>
                <div>
                    <textarea name="textarea" id="text" cols="30" rows="10" className="mb-10 h-40 w-full 
                    resize-none rounded-md border
                     border-slate-300 p-5 font-semibold text-gray-300" placeholder="Write Your Review"></textarea>
                </div>
                <div className="text-center">
                    <button className="cursor-pointer rounded-lg bg-red-500 px-8 py-5 text-sm font-semibold
                     text-white">Post Review</button>
                </div>
            </div>
        </>
    );
};

export default PropertyReview;