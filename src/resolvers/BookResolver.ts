
import {
    Resolver,
    Query,
    Field,
    ObjectType,
    ID,
    InputType,
    Mutation,
    Arg
    
  } from "type-graphql";

  const books=[
      {id:"B-01",title:"My little pony",author:"monet"},
      {id:"B-02",title:"My not little hamster",author:"monet"},
      {id:"B-03",title:"My very little pupper",author:"tonem"},
      {id:"B-04",title:"My buff pitbull",author:"motty"} 
    ]



@ObjectType()
class Book {
  @Field(()=> ID)
  id: string;

  @Field(()=> String)
  title: string;

  @Field(()=> String)
  author: string;
}


@InputType()
export class BookInput{

    @Field(()=> ID)
    id: string;
  
    @Field(()=> String)
    title: string;
  
    @Field(()=> String)
    author: string;
   }
  @Resolver(Book)
  
  export class BookResolver {
   @Query(()=> [Book])
    listBooks() {
      return books;
    }
   @Mutation(()=>Book) 
   async addBook(
    @Arg("input") input: BookInput,

  ):Promise<Book> {
  books.push(input)
    return input;
  }
  
  
    
  
  }
  