import { Given, Then, When } from "@cucumber/cucumber";
import { equal } from "assert";
import { MockFunc } from "./mockfunc";

const field = new MockFunc();

Given(
  'a new Allocation with Hours "{string}"',
  function (_hour: string) {
    this._hour = _hour;
  },
);

When("I try to save the Allocation Hours", function () {
  const data = field.required_field(this._hour);
  this.currentField = data;
});

Then('Hours {string}', function (result: string) {
  equal(result, this.currentField);
});
