import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
// import Header from "./Components/Header";
import store from "./Redux-Utilis/Store";
// import Maincontainer from "./Components/Maincontainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watchpage from "./Components/Watchpage";
import Watchpagesearch from "./Components/Watchpagesearch";
import Header from "./Components/Header";
import Searchvideoplay from "./Components/Searchvideoplay";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/watch",
    element: <Watchpage />,
  },
  {
    path: "/watchsearch",
    element: <Watchpagesearch />,
  },
  {
    path: "/searchvideo/:id",
    element: <Searchvideoplay />,
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className=" no-scrollbar overflow-hidden">
        <Header />
        <RouterProvider router={approuter} />
      </div>
    </Provider>
  );
}

export default App;
