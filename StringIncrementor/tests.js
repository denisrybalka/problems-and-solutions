describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(incrementString("foobar000"), "foobar001");
    assert.deepEqual(incrementString("foo"), "foo1");
    assert.deepEqual(incrementString("foobar001"), "foobar002");
    assert.deepEqual(incrementString("foobar99"), "foobar100");
    assert.deepEqual(incrementString("foobar099"), "foobar100");
    assert.deepEqual(incrementString(""), "1");
  });
});
