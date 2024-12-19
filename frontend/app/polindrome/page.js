import React from "react";
import VerificationPolidrome from "../components/verificationPolidrome";
import Historial from "../components/historial";

export default function page() {
  return (
    <div className="bg-[#001226] w-full h-screen flex items-center justify-center">
      <div className="flex justify-bwetween items-center w-full h-full">
        <VerificationPolidrome />

        <Historial />
      </div>
    </div>
  );
}
