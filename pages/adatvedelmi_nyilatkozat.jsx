import React from "react";

import dynamic from "next/dynamic";
const PrivacyContent = dynamic(() => import("../data/privacyContent"));

export default function Privacy(props) {
  return <PrivacyContent />;
}
