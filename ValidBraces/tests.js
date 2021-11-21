describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(validBraces("()"), true);
    assert.strictEqual(validBraces("[(])"), false);
    assert.strictEqual(validBraces("([{}])"), true);
    assert.strictEqual(validBraces("(}"), false);
    assert.strictEqual(validBraces("[(])"), false);
    assert.strictEqual(validBraces("[({})](]"), false);
    assert.strictEqual(validBraces("[[{()(){}}]{}]"), true);
  });
});
