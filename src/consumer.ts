import {kafka} from "./client"

export async function getMessage () {
    const consumer = kafka.consumer({ groupId: "test-group" })
    console.log("consumer connecting .....")
    await consumer.connect()
    console.log("consumer connected")

    console.log("Subscribing to topic.......")
    await consumer.subscribe({ topic: "test", fromBeginning: true })

    console.log("Running consumer.......")
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`This is the message: ${message.value?.toString()} and the topic is:${topic}`);
        },
    });
}

getMessage()