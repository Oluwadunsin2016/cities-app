import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { ToastProvider } from "@heroui/react";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastProvider
        placement="top-right"
        toastProps={{
          classNames: {
            title: "text-white",
            description: "text-white",
            icon: "text-white",
          },
        }}
      />

<Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options for all toasts
          style: {
            background: "#1f2937", // dark gray (Tailwind's gray-800)
            color: "#f9fafb",      // near-white text (gray-50)
            border: "1px solid #374151", // subtle border
          },
          // Customize success, error, and loading types if you want
          success: {
            iconTheme: {
              primary: "#10b981", // emerald-500
              secondary: "#1f2937", // same as background
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444", // red-500
              secondary: "#1f2937",
            },
          },
        }}
      />
    </div>
  );
}

export default App;


