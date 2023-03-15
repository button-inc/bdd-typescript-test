import { Given, Then, When } from "@cucumber/cucumber";
import { equal } from "assert";
import { MockFunc } from "./mockfunc";

const field = new MockFunc();

Given(
  'a new Allocation with WorkDate "{string}" "{string}"',
  function (value: string, result: string) {
    this._date = value;
    this.result = result;
  },
);

When("I try to save the Allocation workdate", function () {
  const data = field.required_field(this._date, this.result);
  this.currentField = data;
});

Then("WorkDate {string}", function (result: string) {
  equal(result, this.currentField);
});
