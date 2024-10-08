/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tquery findAllTodos {\n\t\tfindAll {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t\tisCompleted\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.FindAllTodosDocument,
    "\n\tmutation createTodo {\n\t\tcraete {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t\tisCompleted\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.CreateTodoDocument,
    "\n\tmutation deleteTodo($id: String!) {\n\t\tdelete(id: $id) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t\tisCompleted\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.DeleteTodoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery findAllTodos {\n\t\tfindAll {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t\tisCompleted\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery findAllTodos {\n\t\tfindAll {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t\tisCompleted\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation createTodo {\n\t\tcraete {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t\tisCompleted\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation createTodo {\n\t\tcraete {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t\tisCompleted\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deleteTodo($id: String!) {\n\t\tdelete(id: $id) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t\tisCompleted\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation deleteTodo($id: String!) {\n\t\tdelete(id: $id) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t\tisCompleted\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;