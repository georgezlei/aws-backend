import { AppSyncResolverEvent } from "aws-lambda";

export async function handler(event: AppSyncResolverEvent<{}, {}>) {
  console.log("Received event:", JSON.stringify(event, null, 2));
}
