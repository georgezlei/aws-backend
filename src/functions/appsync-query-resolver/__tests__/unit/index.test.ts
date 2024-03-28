import { handler } from "../..";

describe("handler", () => {
  it("should log the event", async () => {
    const event = { arguments: { id: "123456789" } };
    const user = await handler(event as any);
    expect(user).toEqual({
      id: "123456789",
      name: "John Doe",
      email: "example@email.com",
    });
  });
});
