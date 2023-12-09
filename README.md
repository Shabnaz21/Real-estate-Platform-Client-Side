# NewVilla

NewVilla is a Real estate Platform (an online platform where people can add and buy real estate properties) using the MERN stack.

[Client Code](https://github.com/Shabnaz21/Real-estate-Platform-Client-Side) | [sever Code](https://github.com/Shabnaz21/Real-estate-Platform-Server-Side)

[Live Link-1(Firebase)](https://newvilla-c8d31.firebaseapp.com) | [Live Link -2(Surge) ](https://newvilla.surge.sh)

## Project Features

### Home Page:
- Navbar with logo, Home, All Properties, Dashboard, and Login.
- About us section.
- Tending Featured Properties.
- Advertisement section showcasing properties.
- Latest User Review section.
- contact us section.

### All Properties Page:

- Displays all admin-verified properties.
- Property cards with essential details.
- Private route.

### Details Page:
- In-depth information about specific properties.
- Review section.
- `Add to Wishlist` and `Add Review` buttons.
- Private route.

### User Dashboard:

- My Profile, Wishlist, Property Bought, My Reviews.

 - **My Profile**: 
   - Displays the name of the user.
   - Shows the profile picture of the user.
   - Shows the user's role; excluded for regular users to maintain simplicity.

 - **Wishlist**:
   - Displays user-wishlist properties.
   - Each card includes property image, title, location, agent name, agent image, verification status, and price range
   - Features `Make an Offer` and  `Remove` buttons.

 - **Make an Offer**:
   - Redirects to a new page with a form.
   - Readonly fields for property title, location, and agent name.
   - User inputs offered amount, buyer email, buyer name, and buying date.
   - Upon successful offer, adds the property to the user's "Property Bought" page with a "pending" status.

### Agent Dashboard:

- Agent Profile, Add Property, My Added Properties, My Sold Properties, Requested Properties.

- **Agent Profile**: 
  - Displays the name of the agent.
  - Shows the profile picture of the agent.
  - Shows the agent's role.

- **Add Property**:
  - Agents can use the `Add Property` page to input details for a new listing.

- **My Added Properties**: 
  - Displays properties added by agents.
  - Includes property image, title, location, agent name, image, verification status, and price range.
  - Admin modifies verification status to `verified` or `rejected`
  - Clicking the update button redirects to a form with pre-filled fields for modification.
  - Delete button removes the property from the list and the database.
  - Update Properties:
    - Fields include property image, title, location, agent name (readonly), agent email (readonly), and price range
    - Submitting updates saves data to the database.

### Admin Dashboard:

- Admin Profile, Manage Properties, Manage Users, Manage Reviews.
- **Admin Profile:**
  - Displays the name of the admin.
  - Shows the profile picture of the admin.
  - Shows the admin's role.

- **Manage Properties:**
  - Displays properties added by agents in a tabular format.
  - Includes Property Title, Location, Agent Name, Agent Email, and Price Range.
  - Admin has the authority to verify or reject a property.
  - Clicking "Verify" adds the property to the "All Properties" page with a "Verified" status.
  - Clicking "Reject" prevents the property from being added, showing a "Rejected" status instead.

- **Manage Users:**
  - Display all users in tabular form with username and email.
  - Admin controls include `Make Admin` , `Make Agent` & `Mark as Fraud` buttons.
  - `Mark as Fraud` flags agents, displaying a "Fraud" status.

- **Manage Reviews:**
  - Displays all user reviews for properties.
  - Includes reviewer image, email, name, review text, and a delete button.
  - The admin can delete a review by clicking the delete button.
  - Deletion removes the review from the Manage Reviews page and the respective user's page who submitted the review.

## Additional Features:
- Navbar displays user information and logout button post-login.
- Custom 404 (not found) page.
- Responsive design for desktop and mobile.
- JWT implementation on login (but disabling because of some issues on the live side).
- Google & GitHub login option.

## Tech Stack
- React Router DOM
- React Helmet Async
- React Icon
- SweetAlert2
- Swiper
- Axios
- TanStack Query
- React hook Form

## UI Design
- Tailwind CSS
 - Flowbite

## Authentication
- Firebase

## Backend
- Express 
- MongoDB

Happy coding! 👩‍💻
