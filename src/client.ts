import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId: "admin",
    brokers: ["192.168.101.10:9092"],

})
