import React from "react";

import dynamic from "next/dynamic";
const AszfContent = dynamic(() => import("../data/aszfContent"));

export default function aszf(props) {
  return <AszfContent />;
}
