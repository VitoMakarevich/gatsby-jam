import React, { useEffect } from 'react'
import gql from 'graphql-tag'

import AddIcon from '@material-ui/icons/Add'
import { useQuery } from '@apollo/react-hooks'
import { graphql, Link, StaticQuery } from 'gatsby'
import { toast } from 'react-toastify'
import { CircularProgress, Fab, Grid } from '@material-ui/core'
import { withGQL } from '../../graphql/client'
import { LearnItem } from '../../shared/learnItem/learnItem'
import styles from './posts.module.css'
import { withLayout } from '../../components/layout/withLayout'
import { SEO } from '../../components/seo'
import { PaginatedPost } from '../../graphql/graphql'

type PostsData = {
  getPosts: PaginatedPost;
}

const GET_POSTS = gql`
  query posts {
    getPosts(pagination: {limit: 100, page: 1}) {
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
    data, loading, error, refetch,
  } = useQuery<PostsData>(GET_POSTS, {
    onError: () => toast.error('Error occured'),
    fetchPolicy: 'network-only',
  })
  if (loading) return <CircularProgress />
  console.log(data)
  if (error) {
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
      <div className={styles.page}>
        <Grid
          container
          direction="row"
          justify="center"
          spacing={2}
        >
          {
            data!.getPosts.items.length > 0
              ? data!.getPosts.items.map((post) => (
                <Grid item key={post.id}>
                  <LearnItem post={post} deleteItem={refetch} />
                </Grid>
              ))
              : (<p>No content</p>)
          }
        </Grid>
        <Fab className={styles.addButton} color="primary" aria-label="add"><Link to="posts/add"><AddIcon /></Link></Fab>
      </div>
    </>
  )
}

export default withLayout(withGQL(PostsList))
