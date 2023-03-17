class MockFunc {
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

  public oneness_allocation(user: any, newuser: any): void {}
}

export { MockFunc };
