class MockFunc {
  public required_field(_hour: string): String {
    const parse = Number.parseInt(_hour);
    const result = Math.floor(parse);
    if (result >= 0 && result <= 24) {
      return "Allocation saved with success";
    } else {
      return "Fail: Hours must a number be between 0 and 24";
    }
  }
}

export { MockFunc };
