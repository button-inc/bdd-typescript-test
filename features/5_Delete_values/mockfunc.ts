class MockFunc {
  public required_field(
    user: string,
    activity: string,
    workday: string,
  ): object {
    const data = [{
      user,
      activity,
      workday,
    }];
    return data;
  }

  public delete_value(user: string, activity: string, workday: string): void {

  }
}

export { MockFunc };
