import React from 'react'
import gql from 'graphql-tag'

import { useQuery } from '@apollo/react-hooks'
import { Loader } from 'semantic-ui-react'
import Layout from '../components/layout'
import { ErrorPage } from '../components/error'
import { withGQL } from '../graphql/client'
import { Post } from '../graphql/graphql'
import { LearnItem } from '../shared/learnItem/learnItem'
import { Button } from '../shared/button'
import styles from './posts.module.css'

type PostsData = {
  getPosts: Post[];
}

const GET_POSTS = gql`
  query posts {
    getPosts {
      description
      url
      id
    }
  }
`

const PostsList: React.FC = () => {
  const {
    data, loading, error, refetch,
  } = useQuery<PostsData>(GET_POSTS)
  if (loading) return <Loader />
  if (error) return <ErrorPage />

  return (
    <Layout>
      <div className={styles.page}>
        <div>
          {data!.getPosts.map((post) => (
            <LearnItem post={post} key={post.id} deleteItem={refetch} />
          ))}
        </div>
        <Button icon="add" floating circular color="blue" />
      </div>
    </Layout>
  )
}

export default withGQL(PostsList)
