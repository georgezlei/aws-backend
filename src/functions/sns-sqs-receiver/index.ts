import { SNSMessage, SQSEvent } from "aws-lambda";

export function handler(event: SQSEvent) {
  console.log("Received event:", JSON.stringify(event, null, 2));

  event.Records.forEach((record) => {
    const snsMessage: SNSMessage = JSON.parse(record.body);
    const snsEvent = JSON.parse(snsMessage.Message);
    console.log("Parsed SNS message:", JSON.stringify(snsEvent, null, 2));
  });
}
