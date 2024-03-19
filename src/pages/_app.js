import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC_Ebu1Tg4nWb6eUudi8c3QXTBsJVdpNC0",
//   authDomain: "staxrealty3040.firebaseapp.com",
//   projectId: "staxrealty3040",
//   storageBucket: "staxrealty3040.appspot.com",
//   messagingSenderId: "369649822263",
//   appId: "1:369649822263:web:4759dcd222ef4bc4cb2db2",
//   measurementId: "G-NE5JEHL3FY",
// };

export default function App({ Component, pageProps }) {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    Aos.init({
      // easing: "ease-out-cubic",
      duration: 1500,
      once: false,
    });

    // const analytics = getAnalytics(firebaseApp);
  }, []);



  useEffect(() => {
    Router.events.on("routeChangeStart", (...params) => {
      NProgress.start(params);
    });
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);
    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    };
  }, []);

  const isConstruction = false;

  return (
    // <SessionProvider session={pageProps.session}>
    <>
      {isConstruction ? (
        <div
          style={{
            backgroundColor: "#dbdffd",
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <Image src="/con2.png" width={"100%"} alt="under_construction" /> */}
        </div>
      ) : (
        <div>
          {/* <Layout admin={admin}> */}
            <Component {...pageProps} admin={admin} />
          {/* </Layout> */}
        </div>
      )}
    </>
    // </SessionProvider>
  );
}
