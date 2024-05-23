// font
import { Roboto } from "next/font/google";
import "../globals.css";
import AuthProvider from "app/providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Home Page",
  description: "eCommerce Website",
  icons: {
    icon: "./images/bag-shopping-solid.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
