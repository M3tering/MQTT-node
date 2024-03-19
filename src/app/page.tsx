"use client";
import "./global.css";
import "nes.css/css/nes.min.css";
import Image from "next/image";
import { ethers } from "ethers";
import { useState } from "react";

let signer;
let provider;
let meterData: string[] = new Array(10);
meterData.fill("");

export default function Home() {
  const [isConnected, setConnection] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  function toggleApp(appId: string) {
    var app = document.getElementById(appId);
    var scroll = document.getElementById("scroll");
    if (!app || !scroll) return;
    if (isOpen) {
      app.style.display = "none";
      scroll.style.display = "none";
      setOpen(false);
    } else {
      app.style.display = "block";
      scroll.style.display = "block";
      setOpen(true);
    }
  }
  function generateDummyData() {
    const timestamp = Date.now();
    const tokenId = Math.round(Math.random() * 10);
    const energy = (Math.random() * 10).toFixed(3) + "kwh";
    return JSON.stringify({ timestamp, tokenId, energy });
  }

  function updateDisplay(data: string) {
    meterData.shift();
    meterData.push(data);
    const displayedList = document.getElementById("m3ter-data");
    if (displayedList) displayedList.innerHTML = ""; // Clear previous list items

    // Loop through meterData and create list items
    meterData.forEach((dataPoint) => {
      const listItem = document.createElement("li");
      listItem.textContent = dataPoint;
      if (displayedList) displayedList.appendChild(listItem);
    });
  }

  function startDataStream() {
    setInterval(() => {
      const data = generateDummyData();
      updateDisplay(data);
    }, 3000);
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
    <div>
      <div>
        {/* M3ter-head Greeting */}
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

        {/* Apps */}
        <div className="nes-container" style={{ borderColor: "#0000" }}>
          <div>
            {/* Terminal Icon */}
            <div>
              {isOpen ? (
                ""
              ) : (
                <div>
                  <button
                    className="nes-btn is-success"
                    style={{ backgroundColor: "black" }}
                    onClick={(x) => {
                      toggleApp("stdout");
                      startDataStream();
                    }}
                  >
                    <h1 style={{ fontSize: 36 }}>&gt;_</h1>
                  </button>
                  <p>stdout</p>
                </div>
              )}
            </div>

            {/* Browser Icon */}

            <div>
              {isOpen ? (
                ""
              ) : (
                <div style={{ float: "right" }}>
                  <button
                    className="nes-btn"
                    onClick={(x) => {
                      toggleApp("google");
                    }}
                  >
                    <i className="nes-icon google is-large"></i>{" "}
                  </button>
                  <p>browse</p>
                </div>
              )}
            </div>

            {/* M3ters Icon */}
            <div>
              <div>
                {isOpen ? (
                  ""
                ) : (
                  <div>
                    <button
                      className="nes-btn"
                      style={{ backgroundColor: "#eee" }}
                      onClick={(x) => toggleApp("m3ter-table")}
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

            {/* M3ters Table */}
            <div
              className="nes-table-responsive nes-container"
              id="m3ter-table"
              style={{
                display: "none",
                backgroundColor: "white",
                float: "left",
              }}
            >
              <div>
                <button
                  className="nes-btn is-error"
                  onClick={(x) => toggleApp("m3ter-table")}
                >
                  <i className="nes-icon close is-small"></i>
                </button>
                <button
                  className="nes-btn"
                  onClick={(x) => toggleApp("m3ter-table")}
                >
                  _
                </button>
              </div>
              <div className="nes-field is-inline">
                <input
                  type="text"
                  id="tokenId_input"
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
                <label>
                  <input
                    type="checkbox"
                    className="nes-checkbox"
                    defaultChecked={false}
                  />
                  <span>sudo</span>
                </label>
              </div>
              <table className="nes-table is-bordered">
                <thead className="nes-container is-centered">
                  <tr>
                    <th>TokenId</th>
                    <th>Warp Contract</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/strange"
                      />
                      <span> #3</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/new"
                      />
                      <span> #4</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/world"
                      />
                      <span> #5</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/nice"
                      />
                      <span> #6</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/crazy"
                      />
                      <span> #7</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/moon"
                      />
                      <span> #8</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/odd"
                      />
                      <span> #9</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/old"
                      />
                      <span> #10</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/space"
                      />
                      <span> #11</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/fine"
                      />
                      <span> #12</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/man"
                      />
                      <span> #13</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/mars"
                      />
                      <span> #14</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/cool"
                      />
                      <span> #15</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/song"
                      />
                      <span> #16</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        className="nes-avatar is-medium "
                        alt="m3ter-head avatar"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/earth"
                      />
                      <span> #17</span>
                    </td>
                    <td>
                      <a
                        target="google"
                        href="https://sonar.warp.cc/#/app/contract/bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec?network=mainnet&dre=dre1"
                      >
                        bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Stdout Terminal */}
            <div
              className="nes-container is-dark"
              id="stdout"
              style={{ display: "none" }}
            >
              <button
                className="nes-btn is-error"
                onClick={(x) => toggleApp("stdout")}
              >
                <i className="nes-icon close is-small"></i>
              </button>
              <button className="nes-btn" onClick={(x) => toggleApp("stdout")}>
                _
              </button>
              <div className="nes-container is-dark" id="m3ter-data">
                <div
                  className="nes-container is-dark is-centered"
                  style={{ borderColor: "#0000" }}
                >
                  <h3 className="empty">Loading M3ter data...</h3>
                </div>
              </div>
              <span></span>
            </div>
          </div>
        </div>

        {/* google app */}
        <div
          className="nes-container"
          id="google"
          style={{ display: "none", borderColor: "#0000" }}
        >
          <button
            className="nes-btn is-error"
            onClick={(x) => toggleApp("google")}
          >
            <i className="nes-icon close is-small"></i>
          </button>
          <button className="nes-btn" onClick={(x) => toggleApp("google")}>
            _
          </button>
          <div className="nes-container is-dark">
            <iframe
              src="https://sonar.warp.cc"
              height="700"
              width="100%"
              name="google"
              title="Google search"
            ></iframe>
          </div>
        </div>
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
