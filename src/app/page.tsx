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
    <div className={PS2P.className}>
      <div className="nes-container is-dark">
        <div
          className="nes-container is-centered is-dark"
          style={{ borderColor: "#0000", paddingBlockStart: 40, paddingBlockEnd: 90 }}
        >
              <Image
                alt="Welcome"
                width={200}
                height={200}
                src="/api/m3ter-head/0x28e020883fd539c56538b687b813fee3792911fa"
              />
          <h2>Welcome to the Protocol</h2>
        </div>
        <div
          className="nes-container is-dark"
          style={{ borderColor: "#0000", paddingBlockEnd: 120 }}
        >
          <div>
            <div className="nes-table-responsive">
              <table className="nes-table is-bordered is-dark">
                <thead className="nes-container is-centered">
                  <tr>
                    <th>M3ter</th>
                    <th>Public Key</th>
                    <th>Warp Contract</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/strange"
                      />
                      <span> ID: 3</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/new"
                      />
                      <span> ID: 4</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/world"
                      />
                      <span> ID: 5</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/nice"
                      />
                      <span> ID: 6</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/crazy"
                      />
                      <span> ID: 7</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/moon"
                      />
                      <span> ID: 8</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/odd"
                      />
                      <span> ID: 9</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/old"
                      />
                      <span> ID: 10</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/space"
                      />
                      <span> ID: 11</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/fine"
                      />
                      <span> ID: 12</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/man"
                      />
                      <span> ID: 13</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/mars"
                      />
                      <span> ID: 14</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/cool"
                      />
                      <span> ID: 15</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/song"
                      />
                      <span> ID: 16</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBlock: 15 }}>
                      <Image
                        className="nes-avatar is-medium "
                        alt="Gravatar image example"
                        width={100}
                        height={100}
                        src="/api/m3ter-head/earth"
                      />
                      <span> ID: 17</span>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <p style={{ color: "gray" }}>
                        tOD4Q4wmlAFBRLATgPk0TDCDfIkRduBwEE6MRsC51M0
                      </p>
                    </td>
                    <td style={{ paddingBlock: 15 }}>
                      <a href="https://sonar.warp.cc/#/app/contract/Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po?network=mainnet">
                        Jk_nQ5B8mfWmLoK71P1CAGvbWq9oKIlqKBJWSmUC4Po
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="nes-container is-dark"
              style={{ borderColor: "#0000", paddingBlockStart: 20 }}
            >
              <div className="nes-field is-inline">
                <input
                  type="text"
                  id="name_field"
                  className="nes-input is-dark"
                  placeholder="tokenID"
                />
                <button
                  type="button"
                  className="nes-btn is-warning"
                  onClick={getProvider}
                >
                  + Add M3ter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="nes-container with-title is-dark">
          <h1 className="title">Activity Log</h1>
          <div className="message-list">
            <div className="message -left">
              <Image
                className="nes-avatar is-large"
                alt="Gravatar image example"
                width={100}
                height={100}
                src="/api/m3ter-head/ichristwin"
              />
              <div className="nes-balloon from-left is-dark">
                <p style={{ color: "gray" }}>Hello M3tering protocol</p>
              </div>
            </div>

            <div className="message -left">
              <Image
                className="nes-avatar is-large"
                alt="Gravatar image example"
                width={100}
                height={100}
                src="/api/m3ter-head/_"
              />
              <div className="nes-balloon from-left is-dark">
                <p style={{ color: "gray" }}>Whatsup NES.css</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
