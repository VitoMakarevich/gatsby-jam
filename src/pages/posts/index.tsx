import React, {
  useCallback, useMemo,
} from 'react'
import gql from 'graphql-tag'

import AddIcon from '@material-ui/icons/Add'
import { useQuery } from '@apollo/react-hooks'
import { graphql, Link, StaticQuery } from 'gatsby'
import { CircularProgress, Fab } from '@material-ui/core'
import produce from 'immer'
import InfiniteScroll from 'react-infinite-scroller'
import { LearnItem } from '../../features/itemList/learnItem/learnItem'
import styles from './posts.module.css'
import { withLayout } from '../../components/layout/withLayout'
import { SEO } from '../../components/seo'
import { PaginatedPost } from '../../graphql/graphql'

type PostsData = {
  getPosts: PaginatedPost;
}

const pageSize = 25

const GET_POSTS = gql`
  query posts($limit: Int!, $page: Int!) {
    getPosts(pagination: {limit: $limit, page: $page}) {
      items {
          description
          url
          id
      }
      meta {
          currentPage
          totalPages
      }
    }
  }
`

const PostsList: React.FC = () => {
  const {
    data, error, fetchMore, refetch,
  } = useQuery<PostsData>(GET_POSTS, {
    fetchPolicy: 'cache-and-network',
    variables: {
      limit: pageSize,
      page: 1,
    },
  })

  const loadMore = useCallback((page) => fetchMore({
    variables: {
      page: page + 1,
    },
    updateQuery: (prev, { fetchMoreResult }) => produce(prev, (draft) => {
      // eslint-disable-next-line no-param-reassign
      draft.getPosts.items = draft.getPosts.items.concat(fetchMoreResult?.getPosts.items!)
      // eslint-disable-next-line no-param-reassign
      draft.getPosts.meta = fetchMoreResult?.getPosts.meta!
    }),
  }), [data?.getPosts.meta.currentPage, fetchMore])
  const hasNextPage = useMemo(
    () => data?.getPosts.meta.currentPage! < data?.getPosts.meta.totalPages!,
    [data?.getPosts.meta],
  )
  if (error || !data) {
    return null
  }

  return (
    <>
      <StaticQuery
        query={graphql`
          {
            contentfulPostsPage {
              title
              description {
                description
              }
            }
          }
        `}
        render={({
          contentfulPostsPage: {
            title,
            description: { description },
          },
        }) => <SEO title={title} description={description} />}
      />

      <InfiniteScroll
        loadMore={loadMore}
        pageStart={2}
        useWindow={false}
        initialLoad={false}
        hasMore={hasNextPage}
        loader={<div className={styles.loader}><CircularProgress /></div>}
      >
        <div className={styles.list}>
          {
            data!.getPosts.items.length > 0
              ? data!.getPosts.items.map((post) => (
                <LearnItem post={post} key={post.id} deleteItem={refetch} />
              ))
              : (<p>No content</p>)
          }
        </div>
      </InfiniteScroll>
      <Fab className={styles.addButton} color="primary" aria-label="add"><Link to="posts/add"><AddIcon /></Link></Fab>
    </>
  )
}

export default withLayout(PostsList)
