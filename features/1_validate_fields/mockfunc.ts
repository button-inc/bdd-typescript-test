class MockFunc {
  constructor() {}

  public required_field(field: string, value: string): String {
    if (value == "") {
      return `Fail: ${field} is required`;
    } else {
      return "Allocation saved with success";
    }
  }

  // public oneness_allocation(user: string): String {
  //   if (user == "") {
  //     return `Fail: ${user} is required`;
  //   } else {
  //     return "Allocation saved with success";
  //   }
  // }
  //

}

export { MockFunc };
