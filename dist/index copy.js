"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs_1 = require("./typeDefs/typeDefs");
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const schema_1 = require("@graphql-tools/schema");
const apollo_server_express_1 = require("apollo-server-express");
const subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
const graphql_1 = require("graphql");
const graphql_2 = require("graphql");
const mongoose_1 = __importDefault(require("mongoose"));
(async () => {
    const PORT = 4000;
    try {
        const app = (0, express_1.default)();
        const httpServer = (0, http_1.createServer)(app);
        const schema = (0, schema_1.makeExecutableSchema)({ typeDefs: typeDefs_1.typeDefs, resolvers: [catResolvers, PostResolver, UserResolver] });
        const server = new apollo_server_express_1.ApolloServer({
            schema,
        });
        await server.start().catch(e => { console.log("error starting server===== "); });
        server.applyMiddleware({ app });
        var uri = "mongodb://localhost:27017/newmango";
        mongoose_1.default.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
            .then(e => console.log("connected to mongo db"));
        subscriptions_transport_ws_1.SubscriptionServer.create({ schema, execute: graphql_2.execute, subscribe: graphql_1.subscribe }, { server: httpServer, path: server.graphqlPath });
        httpServer.listen(PORT, () => {
            console.log(`🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`);
            console.log(`🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`);
        });
    }
    catch (e) {
        console.log("error starting server  ======", e);
    }
})();
//# sourceMappingURL=index%20copy.js.map