import { AppSyncResolverEvent } from "aws-lambda";
import { User } from "@/schemas/user";

type Arguments = {
  id: string;
};

// Handle getUser query
export async function handler(
  event: AppSyncResolverEvent<Arguments>
): Promise<User> {
  console.log("Received event:", JSON.stringify(event, null, 2));

  return {
    id: "123456789",
    name: "John Doe",
    email: "example@email.com",
  };
}
