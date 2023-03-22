import { Given, Then, When } from "@cucumber/cucumber";
import { deepEqual, equal } from "assert";
import { Delete } from "./IDelete";
import { MockFunc } from "./mockfunc";

const allocation = new MockFunc();

Given(
  "the delete existing Allocations",
  function (table: Delete): void {
    this.table = table;
  },
);

Given(
  "the delete validated new Allocation",
  function (table: any): void {
    this.allocation = table;
  },
);

When("I delete the Allocation", function () {
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
