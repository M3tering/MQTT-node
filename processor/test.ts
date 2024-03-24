import { interact } from "./interact";

// const contractId = "FqYq9EnbMfKCKz6s54xusNQ7RylsmTLB_o8u6xYXPU8";
// const contractId = "nOUT-A6s1N-YEGd-sdQet2G_QWHJPuC16PAI0w1vIUI";

const contractId = "bI0xZfhTbn6Na4UFARhHFKbbHVZ4FJlKqqaPD8cQRec";
const data =
  '["XUO7gdG9av1XZt3wqMLb8+FUlkgnpZstvYi9g4NAUhk=","BESz9DprHAtUqiPwiYio/ZNr2f4Q5ZQXzLIK8V/QqfeE/iQ3ThR5tAg2bUIKq6eTGPqA0YucmsABX6tFO5TuAQ==",[1, 7.23, 15.7]]';

const status = interact(contractId, data);

