import { AppSyncResolverEvent } from "aws-lambda";
import { User } from "@/schemas/user";

type Arguments = {
  name: string;
  email: string;
};

// Simulate a function to generate a unique ID for the user
function generateUserId(): string {
  // This is a simplistic implementation. Consider using a more robust approach or library for production use.
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

// Handle createUser mutation
export async function handler(
  event: AppSyncResolverEvent<Arguments>
): Promise<User> {
  console.log("Received event:", JSON.stringify(event, null, 2));

  // In a real application, you would validate the input and then save the user to your database.
  // For demonstration purposes, we're just simulating user creation by generating an ID and returning the input.

  const newUser: User = {
    id: generateUserId(), // Generate a unique ID for the user
    name: event.arguments.name,
    email: event.arguments.email,
  };

  // Assuming the creation was successful, return the new user object.
  return newUser;
}
