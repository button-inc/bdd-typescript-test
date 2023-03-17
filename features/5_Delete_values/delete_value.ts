import { Given, Then, When } from "@cucumber/cucumber";
import { equal } from "assert";
import { MockFunc } from "./mockfunc";

const field = new MockFunc();

Given(
  "the existing Allocations",
  function (table: Object): void {
  },
);

Given(
  "the validated new Allocation",
  function (table: Object): void {
  },
);

When("I delete the Allocation", function () {
});

Then('the existent values store is deleted "{string}"', function (result: string) {
});
