// @ts-nocheck
import 'reflect-metadata'
import { typeDefs } from './typeDefs/typeDefs';
import http from 'http';
import express  from 'express';
import { ApolloServer } from 'apollo-server-express';

import {buildSchema} from 'type-graphql'
import { TestResolver } from './resolvers/testResolver';
import { SampleResolver } from './resolvers/SampleResolver';
import { BookResolver } from './resolvers/BookResolver';




(async () => {
  const PORT = 4000;
  try{
    const app = express();
    const httpServer = http.createServer(app);

    const schema=await buildSchema({
      resolvers:[SampleResolver,BookResolver],
      validate:false
  })
  
   const server = new ApolloServer({
      schema,
    })


  
    await server.start();
    server.applyMiddleware({ app });

    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
catch(e){
 console.log("error starting server  ======",e) 
}


})();
