import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

export async function publishToTopic(message: any, topicArn: string) {
  const snsClient = new SNSClient();
  const params = {
    Message: JSON.stringify(message),
    TopicArn: topicArn,
  };

  try {
    const data = await snsClient.send(new PublishCommand(params));
    console.log("Message sent to the topic", data);
  } catch (err) {
    console.error(err);
  }
}
