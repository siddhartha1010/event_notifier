import { kafka } from "./client";

export async function sendMessage() {
    const producer = kafka.producer();
    console.log("Producer connecting...");

    try {
        await producer.connect();
        console.log("Producer connected");

        console.log("Sending message...");
        await producer.send({
            topic: "test",
            messages: [
                {
                    partition: 0,
                    key: "key1",
                    value: "Hello from the producer. This message should be received by the consumer.",
                },
            ],
        });

        console.log("Message sent");
    } catch (err) {
        console.error("Error sending message", err);
    } finally {
        console.log("Disconnecting producer...");
        await producer.disconnect(); 
        console.log("Producer disconnected");
    }
}


sendMessage()