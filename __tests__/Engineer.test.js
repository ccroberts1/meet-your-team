const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  test("should set Github username via constructor", () => {
    const obj = new Engineer("john doe", 3, "johndoe@email.com", "username");
    expect(obj.github).toEqual("username");
  });
  test("should return the Engineer object", () => {
    const obj = new Engineer("Sam", 2, "sam@email.com", "samdoe");
    const returnEngineer = () => obj.getRole();

    expect(returnEngineer()).toEqual(obj);
  });

  test("should retrieve the github property", () => {
    const obj = new Engineer("Sam", 2, "sam@email.com", "samdoe");
    const newGithub = () => obj.getGithub();

    expect(newGithub()).toBe("https://www.github.com/samdoe");
  });
});
