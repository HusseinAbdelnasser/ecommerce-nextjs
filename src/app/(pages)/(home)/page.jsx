// @ts-nocheck
"use client";
import Footer from "../../../components/footer/footer.jsx";
import Header from "../../../components/header/header.jsx";
import Products from "./products.jsx";
import "./home.css";
import { Suspense } from "react";
import Loading from "./loading.jsx";
import {  useSession } from "next-auth/react";


export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="top-img">
        <Header />
        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <p className="free-shipping">
            Get Free Shipping on orders over $99.00
          </p>
          <button>Shop Now</button>
        </section>
      </div>

      <main>
        <h1 className="recommended">
          <i className="fa-solid fa-check" />
          Recommended for you

          {status === "loading" && <Loading />}

          {status == "unauthenticated" && (
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                marginBlock: "4rem",
              }}
            >
              You must be signed in to view the protected content on this page.
            </h3>
          )}

          {status === "authenticated" && (
            <Suspense fallback={<Loading />}>
              <Products />
            </Suspense>
          )}
        </h1>

      </main>

      <Footer />
    </>
  );
}