import React from "react";
import Layout from "../components/MyLayout";
import { withTranslation } from "../server/i18n";
import Link from "next/link";

export default withTranslation("common")(function aszf(props) {
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
            <h1>ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK (ÁSZF)</h1>
          </p>
          <p>
            <a href="http://www.safepalwallet.hu">www.electronicbeats.hu</a> -
            hatályos ettől a naptól: 2021-12-06
          </p>
          <p>
            <strong>Preambulum</strong>
          </p>
        </div>
      </div>
    </Layout>
  );
});
