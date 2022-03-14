
import {
  Resolver,
  Query,
  
} from "type-graphql";

@Resolver()
export class SampleResolver {

  @Query(()=> String)
  sayHello() {
    return "hello there";
  }


  

}
