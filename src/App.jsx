import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import SettingsLayout from "./ui/SettingsLayout";
import Experience from "./components/settings/settings-body/experience";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/settings",
        element: <SettingsLayout />,
        children: [
          {
            path: "profile",
            element: <h1>profile</h1>,
          },
          {
            path: "experience",
            element: <Experience />,
          },
          {
            path: "education",
            element: <h1>education</h1>,
          },
          {
            path: "preferences",
            element: <h1>preferences</h1>,
          },
          {
            path: "notifications",
            element: <h1>notifications</h1>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
