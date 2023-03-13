import { Given, Then, When } from "@cucumber/cucumber";
import { MockFunc } from "./mockfunc";

const allocation = new MockFunc();

Given(
  "the existing Allocation",
  function (user: string) {
    this.user = user;
  },
);

Given('new Allocation with User = "{string}"', function (user: string) {
  this.user = user;
});

When("I try to save the Allocation", function () {
  // const data = field.required_field(this.field, this.value);
  // this.currentField = data;
  console.log(this.user);
});

Then("{string}", function (result: string) {
  console.log(result);
  // equal(this.currentField, result);
});
