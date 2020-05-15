import React, { useCallback } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { navigate } from '@reach/router'
import { withLayout } from '../../../components/layout/withLayout'
import { SEO } from '../../../components/seo'
import { AddPostForm } from '../../../features/addItem/form/form'
import { CreatePostIn } from '../../../graphql/graphql'

const ADD_POST = gql`
    mutation createPost($post: CreatePostIn!) {
        createPost(post: $post) {
            description
            url
            id
        }
    }
`

export const AddPost: React.FC = () => {
  const [createPost, { loading }] = useMutation(ADD_POST)
  const handleSubmit = useCallback(async (data: CreatePostIn) => {
    await createPost({
      variables: {
        post: data,
      },
    })
    await navigate('/posts')
  },
  [createPost])

  return (
    <>
      <SEO title="Add post" />
      <AddPostForm onSubmit={handleSubmit} submitting={loading} />
    </>
  )
}

export default withLayout(AddPost)
