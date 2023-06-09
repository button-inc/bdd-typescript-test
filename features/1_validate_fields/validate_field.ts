import { Given, Then, When } from "@cucumber/cucumber";
import { equal } from "assert";
import { MockFunc } from "./mockfunc";

const field = new MockFunc();

Given(
  'a new Allocation with {string} = "{string}"',
  function (field: string, value: string) {
    this.field = field;
    this.value = value;
  },
);

When("I try to save the Allocation required_field", function () {
  const data = field.required_field(this.field, this.value);
  this.currentField = data;
});

Then("{string}", function (result: string) {
  equal(this.currentField, result);
});
