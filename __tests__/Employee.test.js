const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    test("should create an instance of Employee", () => {
      const obj = new Employee();

      expect(obj instanceof Employee).toEqual(true);
    });

    test("should set name from the constructor argument", () => {
      const obj = new Employee("Sarah", 1, "sarah@email.com");

      expect(obj.name).toEqual("Sarah");
    });

    test("should set id from the constructor argument", () => {
      const obj = new Employee("Sarah", 1, "sarah@email.com");

      expect(obj.id).toEqual(1);
    });

    test("should set email from the constructor argument", () => {
      const obj = new Employee("Sarah", 1, "sarah@email.com");
      expect(obj.email).toEqual("sarah@email.com");
    });
  });

  describe("Methods testing", () => {
    test("should retrieve the name property", () => {
      const obj = new Employee("Sam", 2, "sam@email.com");
      const newName = () => obj.getName();

      expect(newName()).toBe("Sam");
    });

    test("should retrieve the id property", () => {
      const obj = new Employee("Sam", 2, "sam@email.com");
      const newId = () => obj.getId();

      expect(newId()).toBe(2);
    });

    test("should retrieve the email property", () => {
      const obj = new Employee("Sam", 2, "sam@email.com");
      const newEmail = () => obj.getEmail();

      expect(newEmail()).toBe("sam@email.com");
    });

    test("should return the Employee object", () => {
      const obj = new Employee("Sam", 2, "sam@email.com");
      const returnEmployee = () => obj.getRole();

      expect(returnEmployee()).toEqual(obj);
    });
  });
});
