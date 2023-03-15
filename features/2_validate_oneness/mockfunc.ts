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

  public oneness_allocation(user: any, newuser: any): String {
    const result = [newuser].filter((u) =>
      u[0].user == user.User && u[0].activity == user.Activity &&
      u[0].workday == user.WorkDate
    ).map((r) => r[0].result);
    return result[0];
  }
}

export { MockFunc };
