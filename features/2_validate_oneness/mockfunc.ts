class MockFunc {
  constructor() {}

  public required_field(
    user: string,
    activity: string,
    workday: string,
    result: string,
  ): object {
    const data = [{
      user,
      activity,
      workday,
      result,
    }];
    return data;
  }

  public oneness_allocation(user: any, newuser: object): String {
    if (user == newuser) {
      return `Fail: ${user} is required`;
    } else {
      return user.result;
    }
  }
}

export { MockFunc };
