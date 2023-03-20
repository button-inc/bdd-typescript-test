import { Given, Then, When } from "@cucumber/cucumber";
<<<<<<< HEAD
import { deepEqual, equal } from "assert";
=======
import { equal } from "assert";
>>>>>>> 6b770a3... Added table handler.
import { Delete } from "./IDelete";
import { MockFunc } from "./mockfunc";

const allocation = new MockFunc();

Given(
<<<<<<< HEAD
  "the delete existing Allocations",
=======
  "the existing Allocations",
>>>>>>> 6b770a3... Added table handler.
  function (table: Delete): void {
    this.table = table;
  },
);

Given(
<<<<<<< HEAD
  "the delete validated new Allocation",
  function (table: any): void {
    this.allocation = table;
=======
  "the validated new Allocation",
  function (table: any): void {
    const data: Delete = table.hashes();
    const field = allocation.required_field(
      data.User,
      data.Activity,
      data.Workday,
    );
    this.allocation = field;
>>>>>>> 6b770a3... Added table handler.
  },
);

When("I delete the Allocation", function () {
<<<<<<< HEAD
  const result = allocation.delete_value(
    this.table.hashes(),
    this.allocation.rowsHash(),
  );
  this.deleted = result;
});

Then(
  "the existent values store is deleted",
  function (data: any ) {
    deepEqual(this.deleted, data.hashes());
  },
);
=======

});

Then("the existent values store is deleted {string}", function (user: string) {
});
>>>>>>> 6b770a3... Added table handler.
