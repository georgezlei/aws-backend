import { handler } from "../..";

describe("handler", () => {
  it("should create a new user", async () => {
    const event = {
      arguments: {
        name: "John Doe",
        email: "johndoe@example.com",
      },
    };

    const result = await handler(event as any);

    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
    expect(result.name).toBe(event.arguments.name);
    expect(result.email).toBe(event.arguments.email);
  });
});
