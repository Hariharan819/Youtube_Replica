import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./Redux-Utilis/Store";
import Maincontainer from "./Components/Maincontainer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watchpage from "./Components/Watchpage";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<Maincontainer/>
      },
      {
        path:"/watch",
        element:<Watchpage/>
      }
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <RouterProvider router={approuter} />
        
      </div>
    </Provider>
  );
}

export default App;
