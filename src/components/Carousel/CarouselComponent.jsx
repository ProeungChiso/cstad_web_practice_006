"use client";

import { Carousel } from "flowbite-react";
function CarouselComponent() {
  return (
    <div className="relative h-[500px]">
      <Carousel className="p-2">
        <div
          className="flex h-full items-center justify-center"
          style={{
            backgroundImage:
              'url("https://image-assets.eu-2.volcanic.cloud/api/v1/assets/images/74e7589915f24cc42c79d0ec3f8e5137?t=1708509479&size=2000x500%253E&webp_fallback=png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "1",
            backgroundBlendMode: "darken"
          }}
        >
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to CSTAD</h1>
            <p className="text-lg md:text-xl mt-4">
              Explore our innovative courses and stay updated with the latest
              technology trends.
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-800 text-white rounded-md text-lg font-semibold hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
        <div
          className="flex h-full items-center justify-center"
          style={{
            backgroundImage:
              'url("https://www.retailbiz.com.au/wp-content/uploads/2020/01/Digital-disruption.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "1",
            backgroundBlendMode: "darken"
          }}
        >
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Learn Anywhere, Anytime
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Our courses are designed to fit your schedule. Start learning
              today!
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-800 text-white rounded-md text-lg font-semibold hover:bg-blue-600">
              Explore Courses
            </button>
          </div>
        </div>
        <div
          className="flex h-full items-center justify-center"
          style={{
            backgroundImage:
              'url("https://cdn.cundall.com/uploads/images/Blog/_large_image/187633/security-design-contribute-to-reduced-carbon-footprint.webp?v=1669388537,0.5,0.5")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "1",
            backgroundBlendMode: "darken"
          }}
        >
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Join Our Community
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Connect with professionals, share insights, and grow together.
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-800 text-white rounded-md text-lg font-semibold hover:bg-blue-600">
              Join Now
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
