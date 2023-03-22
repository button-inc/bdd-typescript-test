class MockFunc {
  private db!: number;

  public save_value(table: any, input: any): number {
    this.db = table.push(input);
    return this.db;
  }

  public check_result(): string {
    if (this.db > 2) {
      return "Information saved";
    }
    return "Not saved";
  }
}

export { MockFunc };
