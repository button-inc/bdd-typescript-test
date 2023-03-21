import { Delete } from "./IDelete";

class MockFunc {
  public delete_value(table: any, allocation: Delete): void {
    const result = table.filter((t: any) => {
      if (!(allocation.user === t.user && allocation.workdate === t.workDate)) {
        return t;
      }
    });
    return result;
  }
}

export { MockFunc };
