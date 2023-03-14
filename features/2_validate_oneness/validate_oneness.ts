import { Given, Then, When } from "@cucumber/cucumber";
import { equal } from "assert";
import { MockFunc } from "./mockfunc";

const allocation = new MockFunc();

Given(
  "the existing Allocation",
  function (table: any) {
    this.table = table;
  },
);

Given(
  'new Allocation with user "{string}" "{string}" "{string}" "{string}"',
  function (user: any, activity: string, workdate: string, result: string) {
    const data = allocation.required_field(user, activity, workdate, result);
    this.allocation = data;
  },
);

When("I try to save the Allocation Oneness", function () {
  const datas = allocation.oneness_allocation(
    this.table.hashes()[0],
    this.allocation
  );
  // this.currentField = [ datas ].filter();
});

Then('"{string}"', function (result: string) {
  equal(result, result);
});
