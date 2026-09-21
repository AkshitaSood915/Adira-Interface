import React from "react";

export default function ContactUs() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white">

      <div className="text-center text-gray-300 mb-8 max-w-2xl">
        <p className="text-lg leading-relaxed">
          {`Thrilled to introduce Adira, an advanced AI chatbot dedicated
          to women's safety. With Adira, I've crafted a trustworthy companion
          that's always ready to lend a helping hand. Whether you need expert
          advice, emergency support, or simply a friendly ear, Adira is here for
          you.`}
        </p>

        <p className="text-lg leading-relaxed mt-4">
          {`Stay empowered and secure with Adira!`}
        </p>

        <p className="text-lg leading-relaxed mt-4">
          {`Warm regards,`}
          <br />
          {`AKSHITA SOOD ❤️`}
        </p>
      </div>

      <div className="text-center text-gray-300">
        <p className="text-lg">
          {`Contact :`}{" "}
          <a
            href="mailto:adira05@gmail.com"
            className="text-blue-500 hover:underline"
          >
            {`adira05@gmail.com`}
          </a>
        </p>
      </div>

      <footer className="text-center text-gray-500 text-sm mt-4">
        {`© 2026 Adira. All rights reserved.`}
      </footer>

    </div>
  );
}