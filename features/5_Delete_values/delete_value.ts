import { Given, Then, When } from "@cucumber/cucumber";
import { equal } from "assert";
import { Delete } from "./IDelete";
import { MockFunc } from "./mockfunc";

const allocation = new MockFunc();

Given(
  "the existing Allocations",
  function (table: Delete): void {
    this.table = table;
  },
);

Given(
  "the validated new Allocation",
  function (table: any): void {
    const data: Delete = table.hashes();
    const field = allocation.required_field(
      data.User,
      data.Activity,
      data.Workday,
    );
    this.allocation = field;
  },
);

When("I delete the Allocation", function () {

});

Then("the existent values store is deleted {string}", function (user: string) {
});
