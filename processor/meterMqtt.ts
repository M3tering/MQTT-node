import "dotenv/config";
import { connect } from "mqtt";
import { interact } from "@/interact";
import { credentials, Metadata } from "@grpc/grpc-js";
import { DeviceServiceClient } from "@chirpstack/chirpstack-api/api/device_grpc_pb";
import {
  DeviceQueueItem,
  EnqueueDeviceQueueItemRequest,
} from "@chirpstack/chirpstack-api/api/device_pb";

// Create the client for the DeviceService.
const deviceService = new DeviceServiceClient(
  `${process.env.CHIRPSTACK_HOST}:8080`,
  credentials.createInsecure()
);

const metadata = new Metadata();
metadata.set("authorization", "Bearer " + process.env.API_TOKEN);

function enqueue(devEui: string, data: number[]) {
  const item = new DeviceQueueItem();
  const enqueueReq = new EnqueueDeviceQueueItemRequest();

  item.setDevEui(devEui);
  item.setFPort(2);
  item.setConfirmed(true);
  item.setData(new Uint8Array(data));

  enqueueReq.setQueueItem(item);
  deviceService.enqueue(enqueueReq, metadata, (err: any, resp: any) => {
    if (err !== null) return console.log(err);
    console.log("Downlink has been enqueued with id: " + resp.getId());
  });
}

const client = connect({
  host: process.env.CHIRPSTACK_HOST,
  port: 1883,
  clean: true,
  connectTimeout: 4000,
  reconnectPeriod: 1000,
});

client.on("connect", () => {
  client.subscribe([
    `application/${process.env.APPLICATION_ID}/device/+/event/up`,
  ]);
  console.log("\nConnected & Subscribed\n");
});

client.on("message", async (topic, payload) => {
  const payloadData = JSON.parse(payload.toString());
  const devEui = payloadData["deviceInfo"]["devEui"];
  const rawData = payloadData["data"];

  if (rawData && devEui) {
    const data = Buffer.from(rawData, "base64").toString();
    try {
      const result = await interact(
        "hiRzb5bqHuS7xH2gULudlREuq6P_uARjo6bGM2pHMek",
        data
      );
      // enqueue(devEui, result);
    } catch (error) {
      console.log("\nDecoded data:\n", data);
    }
  }
});
