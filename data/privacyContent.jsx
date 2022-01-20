import React from "react";
import Layout from "../components/MyLayout";
import Link from "next/link";
import { withTranslation } from "../server/i18n";

export default withTranslation("common")(function privacyData(props) {
  return (
    <Layout {...props}>
      <div
        style={{
          margin: "50px auto",
          width: "100vw",
          backgroundColor: "#323232",
          color: "white",
        }}
      >
        <div
          style={{
            padding: "50px",
            margin: "50px auto",
            width: "800px",
            backgroundColor: "#323232",
            color: "white",
          }}
        >
          <Link href="/">
            <div
              style={{
                paddingBottom: "50px",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >{`< vissza`}</div>
          </Link>
          <p>
            <h1>ADATVÉDELMI NYILATKOZAT</h1>
          </p>
        </div>{" "}
      </div>
    </Layout>
  );
});
