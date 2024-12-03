import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./Redux-Utilis/Store";
// import Maincontainer from "./Components/Maincontainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watchpage from "./Components/Watchpage";
import Watchpagesearch from "./Components/Watchpagesearch";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/watch",
        element: <Watchpage />,
      },
      {
        path: "/watchpagesearch",
        element: <Watchpagesearch />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="overflow-y-hidden">
      <Provider store={store}>
        <div className="overflow-y-hidden">
          <Header />
          <RouterProvider router={approuter} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
