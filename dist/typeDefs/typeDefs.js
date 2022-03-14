"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
//# sourceMappingURL=typeDefs.js.map