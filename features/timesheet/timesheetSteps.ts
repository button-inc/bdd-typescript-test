import { Given, Then, When } from "@cucumber/cucumber";
import { equal } from "assert";
import { MockFunc } from "./mockfunc";

function required_fieldd(field: string, value: string) {
  if (value == "") {
    return `Fail: ${field} is required`;
  } else {
    return "Allocation saved with success";
  }
}

const field = new MockFunc();

function validateValue(value: string) {
  if (value !== "") {
    return "Fail:  User is required ";
  } else {
    return "Allocation saved with success";
  }
}

Given(
  'a new Allocation with {string} = "{string}"',
  function (field: string, value: string) {
    this.field = field;
    this.value = value;
  },
);

When("I try to save the Allocation", function () {
  const data = field.required_field(this.field, this.value);
  this.currentField = data;
});

Then("{string}", function (result: string) {
  equal(this.currentField, result);
});
