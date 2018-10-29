var { expect } = require('chai');

function add(x, y){
    return x + y;
}

function Book(book){
    return `<h1>${book.title}</h1>`;
}

describe('addition', () => {
    it('adds two numbers together', () => {
        var result = add(2,4);

        expect(result).to.equal(6);
    });
});

describe('Book', () => {
    it('wraps a title in an h1', () => {
        var book = { 'title': 'Hello' };
        var result = Book(book);

        expect(result).to.include('h1');
        expect(result).to.include('Hello');
    });
});
