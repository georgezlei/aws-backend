import { handler } from "../..";

describe("handler", () => {
  it("should log the event", () => {
    console.log = jest.fn();
    handler({ arguments: {}, source: { some: "event" } } as any);
    expect(console.log).toHaveBeenCalled();
  });
});
