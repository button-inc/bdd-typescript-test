import { Then, When } from "@cucumber/cucumber";
import { equal } from "assert";
import { Greeter } from "./index";

When("the greeter says hello", function () {
  const greet = new Greeter();
  this.whatIHeard = greet.sayHello();
});

Then("I should have heard {string}", function (expectedResponse: String) {
  equal(this.whatIHeard, expectedResponse);
});
