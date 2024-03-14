import React from "react";

import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="container py-10">
      <div>
        <div className="flex items-center justify-center gap-4 text-white">
          <a href="https://t.me/sendor_sol ">
            {" "}
            <FaTelegramPlane className="text-2xl" />
          </a>
          <a href=" https://twitter.com/sendor_sol">
            <FaXTwitter className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
