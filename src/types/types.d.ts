export type Maybe<T> = T | null;


export interface CreateUserInput {
  
  id?: Maybe<string>;
  
  userName: string;
  
  email: string;
  
  firstName: string;
  
  lastName: string;
  
  profilePictureURL?: Maybe<string>;
  
  dateOfBirth: string;
  
  createdDate: string;
}







// ====================================================
// Types
// ====================================================



export interface Query {
  
  users: User[];
  
  user?: Maybe<User>;
}


export interface User {
  
  id: string;
  
  email: string;
  
  userName: string;
  
  createdDate: string;
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  profilePictureURL?: Maybe<string>;
  
  dateOfBirth: string;
}


export interface Mutation {
  
  createUser: User;
  
  deleteUser: User;
}


export interface Response {
  
  success: boolean;
}



// ====================================================
// Arguments
// ====================================================

export interface UserQueryArgs {
  
  id: string;
}
export interface CreateUserMutationArgs {
  
  input: CreateUserInput;
}
export interface DeleteUserMutationArgs {
  
  id: string;
}


import { GraphQLResolveInfo } from 'graphql';





export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<Result, Parent = {}, TContext = {}, Args = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;


export namespace QueryResolvers {
  export interface Resolvers<TContext = ./src/types/types.ts:Context, TypeParent = {}> {
    
    users?: UsersResolver<User[], TypeParent, TContext>;
    
    user?: UserResolver<Maybe<User>, TypeParent, TContext>;
  }


  export type UsersResolver<R = User[], Parent = {}, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext>;
  export type UserResolver<R = Maybe<User>, Parent = {}, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext, UserArgs>;
  export interface UserArgs {
    
    id: string;
  }


}

export namespace UserResolvers {
  export interface Resolvers<TContext = ./src/types/types.ts:Context, TypeParent = User> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    email?: EmailResolver<string, TypeParent, TContext>;
    
    userName?: UserNameResolver<string, TypeParent, TContext>;
    
    createdDate?: CreatedDateResolver<string, TypeParent, TContext>;
    
    firstName?: FirstNameResolver<Maybe<string>, TypeParent, TContext>;
    
    lastName?: LastNameResolver<Maybe<string>, TypeParent, TContext>;
    
    profilePictureURL?: ProfilePictureUrlResolver<Maybe<string>, TypeParent, TContext>;
    
    dateOfBirth?: DateOfBirthResolver<string, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = User, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext>;
  export type EmailResolver<R = string, Parent = User, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext>;
  export type UserNameResolver<R = string, Parent = User, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext>;
  export type CreatedDateResolver<R = string, Parent = User, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext>;
  export type FirstNameResolver<R = Maybe<string>, Parent = User, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext>;
  export type LastNameResolver<R = Maybe<string>, Parent = User, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext>;
  export type ProfilePictureUrlResolver<R = Maybe<string>, Parent = User, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext>;
  export type DateOfBirthResolver<R = string, Parent = User, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext>;
}

export namespace MutationResolvers {
  export interface Resolvers<TContext = ./src/types/types.ts:Context, TypeParent = {}> {
    
    createUser?: CreateUserResolver<User, TypeParent, TContext>;
    
    deleteUser?: DeleteUserResolver<User, TypeParent, TContext>;
  }


  export type CreateUserResolver<R = User, Parent = {}, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext, CreateUserArgs>;
  export interface CreateUserArgs {
    
    input: CreateUserInput;
  }


  export type DeleteUserResolver<R = User, Parent = {}, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext, DeleteUserArgs>;
  export interface DeleteUserArgs {
    
    id: string;
  }


}

export namespace ResponseResolvers {
  export interface Resolvers<TContext = ./src/types/types.ts:Context, TypeParent = Response> {
    
    success?: SuccessResolver<boolean, TypeParent, TContext>;
  }


  export type SuccessResolver<R = boolean, Parent = Response, TContext = ./src/types/types.ts:Context> = Resolver<R, Parent, TContext>;
}



/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<Result, SkipDirectiveArgs, ./src/types/types.ts:Context>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<Result, IncludeDirectiveArgs, ./src/types/types.ts:Context>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<Result, DeprecatedDirectiveArgs, ./src/types/types.ts:Context>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}



export type IResolvers<TContext = ./src/types/types.ts:Context> = {
    Query?: QueryResolvers.Resolvers<TContext>;
    User?: UserResolvers.Resolvers<TContext>;
    Mutation?: MutationResolvers.Resolvers<TContext>;
    Response?: ResponseResolvers.Resolvers<TContext>;
} & { [typeName: string] : never };

export type IDirectiveResolvers<Result> = {
    skip?: SkipDirectiveResolver<Result>;
    include?: IncludeDirectiveResolver<Result>;
    deprecated?: DeprecatedDirectiveResolver<Result>;
} & { [directiveName: string] : never };
