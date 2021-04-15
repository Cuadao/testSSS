const { generateText} = require('./util');

/*Test Success*/
test('should output the name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
    const text2 = generateText('Max', 29);
    expect(text2).toBe('Max (29 years old)');
    const text3 = generateText('andreujkx', 11111111);
    expect(text3).toBe('andreujkx (11111111 years old)');
});

test('should output Number in age', () => {
    const text3 = generateText('', 'abc');
    expect(text3).toBe(' (abc years old)'); //remove null
});

/*Test when is Null*/
test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)'); //remove null
});