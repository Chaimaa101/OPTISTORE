import { RouterProvider } from "react-router-dom";
import { router } from "/src/router/Routers";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
