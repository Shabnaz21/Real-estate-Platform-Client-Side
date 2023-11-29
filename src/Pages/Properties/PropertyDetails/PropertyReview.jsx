import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";

const PropertyReview = ({ propertyName }) => {
    console.log(propertyName);
    const { user } = useAuth();
    const useEmail = user?.email;
    const axios = useAxios();

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewerName = form.name.value;
        const reviewerImage = form.photo.value;
        const reviewerDesignation = form.designation.value;
        const reviewDate = form.date.value;
        const reviewDescription = form.textarea.value;
        form.reset();

        const reviewCollection = {
            reviewerName, reviewerEmail: useEmail,
            reviewerDesignation,
            reviewDate, reviewDescription,
            propertyTitle: propertyName, reviewerImage
        }
        //send Data with axios
        axios.post('/reviews', reviewCollection)
            .then(data => {
                console.log(data.data);
                if (data?.data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: `Thanks! Your review successfully Counted!`,
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            }).catch(error => {
                console.log(error);
            })

    }
    return (
        <>
            <form onSubmit={handleReview} className="p-8">
                <div className="flex gap-4">
                    <input type="Name" name="name" className="mt-1 block w-1/2 
                    rounded-md border border-slate-300
                     bg-white px-3 py-4 placeholder-slate-400 shadow-sm
                     placeholder:font-semibold placeholder:text-gray-500sm:text-sm"
                        placeholder="Full Name *" required />
                    <input type="email" name="email"
                        className="mt-1 block w-1/2 rounded-md border
                     border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm
                     placeholder:font-semibold placeholder:text-gray-500 sm:text-sm"
                        defaultValue={useEmail} disabled />
                </div>
                <div className="my-6 flex gap-4">
                    <input type="text" name="designation" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 
                    py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold
                     placeholder:text-gray-500 sm:text-sm" placeholder="Designation *" required/>
                    <input type="text" name="photo" className="mt-1 block w-1/2 rounded-md border border-slate-300
                     bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold
                     placeholder:text-gray-500 sm:text-sm" placeholder="Give your PhotoURL *" required />
                </div>
                <div className="my-6 flex gap-4">
                    <input type="text" name="contact" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 
                    py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold
                     placeholder:text-gray-500 sm:text-sm" placeholder="Contact Number *" required />
                    <input type="date" name="date" className="mt-1 block w-1/2 rounded-md border border-slate-300
                     bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold
                     placeholder:text-gray-500 sm:text-sm" required />
                </div>
                <div>
                    <textarea name="textarea" id="text" cols="30" rows="10" className="mb-10 h-40 w-full 
                    resize-none rounded-md border
                     border-slate-300 p-5 font-semibold " placeholder="Write Your Review" required></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="cursor-pointer rounded-lg bg-red-500 px-8 py-5 text-sm font-semibold
                     text-white">Post Review</button>
                </div>

            </form>
        </>
    );
};

export default PropertyReview;