const Manager = require("../lib/manager");

describe("Manager", () => {
  test("should set office number via constructor", () => {
    const obj = new Manager("john doe", 3, "johndoe@email.com", "303-214-8914");
    expect(obj.officeNumber).toEqual("303-214-8914");
  });
  test("should return the Manager role", () => {
    const obj = new Manager("Sam", 2, "sam@email.com", "303-214-8914");
    const returnEmployee = () => obj.getRole();

    expect(returnEmployee()).toEqual("Manager");
  });

  test("should retrieve the officeNumber property", () => {
    const obj = new Manager("Sam", 2, "sam@email.com", "303-214-8914");
    const newONum = () => obj.getOffice();

    expect(newONum()).toBe("303-214-8914");
  });
});
