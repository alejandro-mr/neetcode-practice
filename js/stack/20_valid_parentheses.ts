function isValid(s: string): boolean {
  if (s.length <= 1) return false;

  const stack: string[] = [];

  for (let char of s) {
    if (["(", "[", "{"].includes(char)) stack.push(char);

    if (["}", "]", ")"].includes(char)) {
      let last: string = stack.pop() || "";
      if (last === "") return false;
      if (last === "{" && char !== "}") return false;
      if (last === "[" && char !== "]") return false;
      if (last === "(" && char !== ")") return false;
    }
  }

  if (stack.length > 0) return false;

  return true;
}

(() => {
  // Test cases

  // result: false
  console.log(isValid("("));

  // result: true
  console.log(isValid("()"));

  // result: true
  console.log(isValid("()[]{}"));

  // result: false
  console.log(isValid("(])"));

  // result: false
  console.log(isValid(")(){}"));
})();
