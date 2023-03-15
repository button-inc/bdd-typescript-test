class MockFunc {
  constructor() {}

  public required_field(_date: string, value: string): String {
    const result = new Date(_date);
    if (result.toString() === "Invalid Date") {
      return "Fail: WorkDate must be a valid date";
    } else {
      return "Allocation saved with success";
    }
  }
}

export { MockFunc };
