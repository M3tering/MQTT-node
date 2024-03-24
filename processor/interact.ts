import { WarpFactory, Tag } from "warp-contracts";
import { EthersExtension } from "m3tering-ethers";
import { Ed25519Extension } from "m3tering-ed25519";

export interface State {
  is_on: boolean;
  kwh_balance: number;
  last_block: number;
  nonce: number;
  public_key: string;
  token_id: number;
}

const warp = WarpFactory.forMainnet()
  .use(new Ed25519Extension())
  .use(new EthersExtension());

export async function interact(contractId: string, data: string) {
  const tags = [
    { name: "App-User", value: "M3ters" } as Tag,
    { name: "App-Label", value: "M3tering Protocol" } as Tag,
  ];

  const contract = warp
    .contract(contractId)
    .connect(await warp.arweave.wallets.generate());

  const result = await contract.dryWrite(
    { data: JSON.parse(data), function: "meter" },
    undefined,
    tags
  );

  // await contract.writeInteraction(
  //   { data: JSON.parse(data), function: "meter" },
  //   { tags }
  // );

  const state = result.state as State;
  if (result.type !== "ok") return [state.nonce, 0];
  else return [state.nonce + 1, state.is_on === true ? 1 : 0];
}
