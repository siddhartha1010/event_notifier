import { kafka } from "./client";

export async function run() {
    const admin = kafka.admin();
    console.log("admin connecting .....");
    await admin.connect();
    console.log("admin connected");

    console.log("Creating topic.......");
    try {
        const created = await admin.createTopics({
            topics: [
                {
                    topic: "test",
                    numPartitions: 1,
                    replicationFactor: 1
                }
            ],
            waitForLeaders: true
        });

        if (created) {
            console.log("Topic was newly created.");
        } else {
            console.log("Topic already exists.");
        }
    } catch (err) {
        console.error("Error creating topic", err);
    } finally {
        console.log("Disconnecting admin.....");
        await admin.disconnect();
    }
}

