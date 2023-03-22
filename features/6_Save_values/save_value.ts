import { Given, Then, When } from "@cucumber/cucumber";
import { equal } from "assert";
import { MockFunc } from "./mockfunc";

const allocation = new MockFunc();

Given("a valid save new Allocation", function (data: any) {
  this.table = data;
});

Given(
  "input save new Allocation",
  function (input: any): void {
    this.allocation = input;
  },
);

When("I save the Allocation", function () {
  allocation.save_value(
    this.table.hashes(),
    this.allocation.rowsHash(),
  );
});

Then("the information is stored", function () {
  this.saved = allocation.check_result();
});

Then("it shows the success message Information saved", function (data: string) {
  equal(this.saved, data);
});
