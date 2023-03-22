import { Delete } from "./IDelete";

class MockFunc {
<<<<<<< HEAD
  public delete_value(table: any, allocation: Delete): void {
    const result = table.filter((t: any) => {
      if (!(allocation.user === t.user && allocation.workdate === t.workDate)) {
        return t;
      }
    });
    return result;
  }
=======
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
>>>>>>> 6b770a3... Added table handler.
}

export { MockFunc };
