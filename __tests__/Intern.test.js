const Intern = require("../lib/intern");

describe("Intern", () => {
  test("should set school via constructor", () => {
    const obj = new Intern("john doe", 3, "johndoe@email.com", "DU");
    expect(obj.school).toEqual("DU");
  });
  test("should return the Intern role", () => {
    const obj = new Intern("Sam", 2, "sam@email.com", "OSU");
    const returnIntern = () => obj.getRole();

    expect(returnIntern()).toEqual("Intern");
  });

  test("should retrieve the school property", () => {
    const obj = new Intern("Sam", 2, "sam@email.com", "OSU");
    const newSchool = () => obj.getSchool();

    expect(newSchool()).toBe("OSU");
  });
});
