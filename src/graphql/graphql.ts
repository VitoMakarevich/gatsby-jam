export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreatePostIn = {
  url: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Mutation = {
  createPost: Post;
  deletePost: Post;
};


export type MutationCreatePostArgs = {
  post: CreatePostIn;
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};

export type PaginatedPost = {
  meta?: Maybe<PostMeta>;
  items?: Maybe<Array<Post>>;
};

export type PaginationIn = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export type Post = {
  id: Scalars['Int'];
  url: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type PostMeta = {
  currentPage: Scalars['Int'];
  itemCount: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Query = {
  getPosts: PaginatedPost;
};


export type QueryGetPostsArgs = {
  pagination: PaginationIn;
};
