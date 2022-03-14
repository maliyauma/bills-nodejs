"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const SampleResolver_1 = require("./resolvers/SampleResolver");
const BookResolver_1 = require("./resolvers/BookResolver");
(async () => {
    const PORT = 4000;
    try {
        const app = (0, express_1.default)();
        const httpServer = http_1.default.createServer(app);
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [SampleResolver_1.SampleResolver, BookResolver_1.BookResolver],
            validate: false
        });
        const server = new apollo_server_express_1.ApolloServer({
            schema,
        });
        await server.start();
        server.applyMiddleware({ app });
        await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    }
    catch (e) {
        console.log("error starting server  ======", e);
    }
})();
//# sourceMappingURL=index.js.map