import React, { useCallback } from 'react'

import {
  Button, Card, Icon, Loader,
} from 'semantic-ui-react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { Post } from '../../graphql/graphql'
import styles from './learnItem.module.css'

export type LearnItemOwnProps = {
  post: Post;
  deleteItem: () => void;
}

const DELETE_POST = gql`
  mutation deletePost($id: Int!) {
    delete(id: $id) {
      url
      description
    }
  }
`

export const LearnItem: React.FC<LearnItemOwnProps> = ({
  post: { id, description, url },
  deleteItem,
}) => {
  const [deletePost, { loading }] = useMutation(DELETE_POST, {
    variables: {
      id,
    },
  })
  const deleteHandler = useCallback(async () => {
    await deletePost()
    deleteItem()
  }, [deletePost])
  return (
    <Card>
      <Card.Content className={styles.description}>{description}</Card.Content>
      <Card.Content>
        {loading ? (
          <Loader />
        ) : (
          <Button icon onClick={deleteHandler}>
            <Icon name="delete" />
          </Button>
        )}
        <Button icon>
          <a target="_blank" href={url} rel="noopener noreferrer">
            <Icon name="linkify" />
          </a>
        </Button>
      </Card.Content>
    </Card>
  )
}
