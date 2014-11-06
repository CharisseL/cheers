var q = QUnit;
//what is your name?
q.test('nameCheck(Risse)', function(assert) {
	assert.equal(nameCheck('Risse'), 'Your name is Risse!');
});

q.test('nameCheer(name)', function(assert) {
	expectedCheer = 'Give me a...R!\nGive me a...I!\nGive me a...S!\nGive me a...S!\nGive me a...E!'
	assert.equal(nameCheer('RISSE'), expectedCheer);
});

q.test('postCheer(Risse)', function(assert) {
	assert.equal(postCheer('Risse'), 'Risse is GREAT!');
});
