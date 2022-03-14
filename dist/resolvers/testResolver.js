"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aBookResolver = void 0;
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];
exports.aBookResolver = {
    Query: {
        books: () => books,
    },
};
//# sourceMappingURL=testResolver.js.map