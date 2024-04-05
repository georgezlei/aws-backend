import { publishToTopic } from "@/lib/sns";

const { TopicArn: topicArn } = process.env;

export async function handler() {
  if (!topicArn) {
    throw new Error("TopicArn is undefined in environment variables");
  }

  const event = {
    name: "Example event name",
    content: "Example event content",
  };

  await publishToTopic(event, topicArn);
}
