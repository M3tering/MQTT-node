"use client";
import "nes.css/css/nes.min.css";
import Image from "next/image";
import { ethers } from "ethers";
import { useState } from "react";
import { Press_Start_2P } from "next/font/google";

let signer;
let provider;
const PS2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [isConnected, setConnection] = useState(false);
  const [isTable, setTable] = useState(false);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function toggleTable() {
    var scroll = document.getElementById("scroll");
    var table = document.getElementById("m3ter-table");
    if (!table || !scroll) return;
    if (isTable) {
      table.style.display = "none";
      scroll.style.display = "none";
      setTable(false);
    } else {
      table.style.display = "block";
      scroll.style.display = "block";
      setTable(true);
    }
  }
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const getProvider = async () => {
    if (window.ethereum == null) {
      provider = new ethers.JsonRpcProvider("https://rpc.gnosischain.com");
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      setConnection(true);
    }
  };

  return (
    <div className={PS2P.className} style={{ height: "100vh" }}>
      <div
        style={{
          paddingBlockEnd: 500,
          backgroundImage: `url("/8-bit-13.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100%",
        }}
      >
        <div
          className="nes-container is-centered"
          style={{
            borderColor: "#0000",
            paddingBlockStart: 40,
            paddingBlockEnd: 90,
          }}
        >
          <div className="message-list">
            <div className="message -left">
              <Image
                alt="Welcome"
                width={60}
                height={60}
                src="/twitter-avatar.png"
                className="nes-avatar"
                style={{ imageRendering: "pixelated", height: 300, width: 300 }}
              />
              <div className="nes-balloon from-left">
                <h2>Hello there</h2>
                <h3> 0x4f...319</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="nes-container"
          style={{ borderColor: "#0000", paddingBlockEnd: 120 }}
        >
          <div>
            <div>
              <div>
                {isTable ? (
                  <div style={{ float: "right" }}>
                    <button className="nes-btn is-error" onClick={toggleTable}>
                      <i className="nes-icon close is-small"></i>
                    </button>
                  </div>
                ) : (
                  <div style={{ float: "right" }}>
                    <button
                      className="nes-btn"
                      style={{ backgroundColor: "#eee" }}
                      onClick={toggleTable}
                    >
                      <div>
                        <Image
                          alt="Welcome"
                          width={60}
                          height={60}
                          src="/api/m3ter-head/pretty"
                          className="nes-avatar"
                        />
                        <Image
                          alt="Welcome"
                          width={60}
                          height={60}
                          src="/api/m3ter-head/new"
                          className="nes-avatar"
                        />
                      </div>
                      <div>
                        <Image
                          alt="Welcome"
                          width={60}
                          height={60}
                          src="/api/m3ter-head/blob"
                          className="nes-avatar"
                        />
                        <Image
                          alt="Welcome"
                          width={60}
                          height={60}
                          src="/api/m3ter-head/now"
                          className="nes-avatar"
                        />
                      </div>
                    </button>
                    <p>M3ters</p>
                  </div>
                )}
              </div>
            </div>

            <div
              className="nes-table-responsive"
              id="m3ter-table"
              style={{ padding: "auto", display: "none" }}
            >
              <div className="nes-container" style={{ borderColor: "#0000" }}>
                <div className="nes-field is-inline">
                  <input
                    type="text"
                    id="name_field"
                    className="nes-input"
                    placeholder="tokenId"
                  />
                  <button
                    type="button"
                    className="nes-btn is-warning"
                    onClick={getProvider}
                  >
                    + Add M3ter
                  </button>
                  <label style={{ textAlign: "center" }}>
                    <input
                      type="checkbox"
                      className="nes-checkbox"
                      defaultChecked={false}
                    />
                    <span>sudo</span>
                  </label>
                </div>
              </div>
              <table className="nes-table is-bordered">
                <thead className="nes-container is-centered">
                  <tr>
                    <th>M3ter</th>
                    <th>Public Key</th>
                    <th>Warp Contract</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/strange"
                      />
                      <span> #3</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/new"
                      />
                      <span> #4</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/world"
                      />
                      <span> #5</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/nice"
                      />
                      <span> #6</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/crazy"
                      />
                      <span> #7</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/moon"
                      />
                      <span> #8</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/odd"
                      />
                      <span> #9</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/old"
                      />
                      <span> #10</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/space"
                      />
                      <span> #11</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/fine"
                      />
                      <span> #12</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/man"
                      />
                      <span> #13</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/mars"
                      />
                      <span> #14</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/cool"
                      />
                      <span> #15</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/song"
                      />
                      <span> #16</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/earth"
                      />
                      <span> #17</span>
                    </td>
                    <td style={{ padding: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ padding: 15 }}>
                      <a
                        target="sonar"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="nes-container" style={{ borderColor: "#0000", paddingBlock: 120}}>
          <iframe
            src="https://sonar.warp.cc/#/app/contracts?network=mainnet&dre=dre1"
            height="800"
            width="1800"
            name="sonar"
            id="frame"
            style={{border:"none", display: "none"}}
            title="Sonar: Warp contract explorer"
          ></iframe>
        </div> */}
        <button
          type="button"
          id="scroll"
          className="nes-btn"
          onClick={scrollToTop}
          style={{
            display: "none",
            position: "fixed",
            bottom: 70,
            right: 70,
            zIndex: 99,
          }}
        >
          <span>&#x2191;</span>
        </button>
      </div>
    </div>
  );
}
