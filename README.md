Live link:https://youtube-replica-xzh8.onrender.com/

## Demo Video
- Check out the demo video of the project:
[YouTube Demo](https://drive.google.com/drive/folders/1ERldHsqRhciGUacxJIitbncXvll1lnJI?usp=sharing)


**Note on API Limitations:**

This project uses the free version of the YouTube Data API, which has a limited number of requests that can be made per day. As a result, users may occasionally encounter a "Failed to Fetch" message when the API limit is exceeded. This is due to the daily quota limitations imposed by the free API key. This limitation does not affect the core functionality of the project, but it may temporarily prevent fetching new video data until the quota is reset.

### **YouTube Replica Project**

**Description:**  
This project allows users to search for videos, view related video cards, and navigate to the video page. It incorporates features like **debounced search**, **mobile responsiveness**, and **API integration** to create an interactive and user-friendly experience.

**Key Features:**

- **Real-time Search Suggestions**:  
  Implemented a search bar that provides real-time suggestions as the user types. Used the **debouncing technique** to reduce unnecessary API calls and improve performance.

- **Video Results**:  
  After a search query is submitted, the app fetches relevant video data from the YouTube API and displays it in **interactive video cards**. Each card shows the **video title** and **channel name**, providing a clear view of search results.

- **Redirect to YouTube**:  
  Clicking on a video card redirects the user to the YouTube page of the corresponding video, enabling seamless browsing between the replica and the original platform.

- **Mobile Responsive**:  
  The design is fully responsive, ensuring the layout adapts seamlessly to different screen sizes (desktop, tablet, mobile). The application is styled using **Tailwind CSS** to ensure fluid and adaptive components across devices.

**Technologies Used:**

- **React.js**: To build the user interface, handle state management, and enable dynamic rendering of components.
- **YouTube Data API**: For fetching video data based on search queries, allowing the app to display relevant results.
- **Tailwind CSS**: For styling the components and ensuring a responsive layout that works across all devices.
- **Debouncing Technique**: Implemented to optimize the search process by delaying the API calls until the user has stopped typing, thus reducing unnecessary fetch requests.

**Project Highlights:**

- **Performance Optimization**:  
  Used **debouncing** to handle search queries efficiently and minimize API calls, providing faster search results with minimal lag.

- **Smooth User Experience**:  
  The project features smooth navigation and interactive components, providing a seamless user experience for both desktop and mobile users.

- **Responsive Design**:  
  The application adjusts automatically to different screen sizes using Tailwind CSS, ensuring an optimal browsing experience on mobile devices.

- **Interactive UI**:  
  Incorporated interactive elements like video cards that redirect to the video page when clicked, and a dynamic search bar that instantly shows suggestions while typing.

- **How It Works**

- **initial Page:**

The homepage displays a search bar at the top, and below it, a grid of suggested videos is shown once a query is entered.

- **Search Process:**

As the user types a search query, video suggestions are fetched from the YouTube API using the debouncing technique. This delays the API call until the user has stopped typing, reducing unnecessary requests.

- **Displaying Search Results:**

Once the user submits the search, the application fetches related video data and displays it in the form of cards containing the video title and channel name.

- **Navigation to Video Page**:

When a user clicks on a video card, they are redirected to the corresponding video page on YouTube.