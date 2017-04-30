import Test from '../src/test';

describe('desc', () => {
    it('it', () => {
        const t = new Test();
        expect(t.get()).toBe(42);
    });

    it('it2', () => {
        const t = new Test();
        expect(t.get()).toBe(42);
    });
});
