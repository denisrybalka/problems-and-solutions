describe('Example Tests', () => {
  it("test", () => {
    assert.deepEqual(scramble('rkqodlw','world'),true);
    assert.deepEqual(scramble('cedewaraaossoqqyt','codewars'),true);
    assert.deepEqual(scramble('katas','steak'),false);
    assert.deepEqual(scramble('scriptjava','javascript'),true);
    assert.deepEqual(scramble('scriptingjava','javascript'),true);
    assert.deepEqual(scramble('scriptsjava','javascripts'),true);
    assert.deepEqual(scramble('jscripts','javascript'),false);
    assert.deepEqual(scramble('aabbcamaomsccdd','commas'),true);
  })
});