"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = exports.BookInput = void 0;
const type_graphql_1 = require("type-graphql");
const books = [
    { id: "B-01", title: "My little pony", author: "monet" },
    { id: "B-02", title: "My not little hamster", author: "monet" },
    { id: "B-03", title: "My very little pupper", author: "tonem" },
    { id: "B-04", title: "My buff pitbull", author: "motty" }
];
let Book = class Book {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Book.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Book.prototype, "author", void 0);
Book = __decorate([
    (0, type_graphql_1.ObjectType)()
], Book);
let BookInput = class BookInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], BookInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], BookInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], BookInput.prototype, "author", void 0);
BookInput = __decorate([
    (0, type_graphql_1.InputType)()
], BookInput);
exports.BookInput = BookInput;
let BookResolver = class BookResolver {
    listBooks() {
        return books;
    }
    async addBook(input) {
        books.push(input);
        return input;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Book]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "listBooks", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Book),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "addBook", null);
BookResolver = __decorate([
    (0, type_graphql_1.Resolver)(Book)
], BookResolver);
exports.BookResolver = BookResolver;
//# sourceMappingURL=BookResolver.js.map