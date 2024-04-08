import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

export function handler(
  event: APIGatewayProxyEventV2
): APIGatewayProxyResultV2 {
  console.log("Received event:", JSON.stringify(event, null, 2));
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "John Doe",
      email: "john@email.com",
    }),
  };
}
