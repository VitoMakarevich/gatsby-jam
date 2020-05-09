import React, { useCallback, useState } from 'react'

import LinkIcon from '@material-ui/icons/Link'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DeleteIcon from '@material-ui/icons/Delete'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Dialog, DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  LinearProgress,
  Typography,
} from '@material-ui/core'
import cx from 'classnames'
import { Post } from '../../graphql/graphql'
import styles from './learnItem.module.css'

export type LearnItemOwnProps = {
  post: Post;
  deleteItem: () => void;
}

const DELETE_POST = gql`
  mutation deletePost($id: Int!) {
    deletePost(id: $id) {
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
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = useCallback(() => {
    setExpanded(!expanded)
  }, [expanded, setExpanded])
  const [deleteConfirmationOpened, setDeleteConfirmationOpen] = useState(false)
  const handleCloseDeleteConfirmation = useCallback(() => {
    setDeleteConfirmationOpen(false)
  }, [setDeleteConfirmationOpen])

  const handleDeleteClick = useCallback(async () => {
    setDeleteConfirmationOpen(true)
  }, [setDeleteConfirmationOpen])

  const handleConfirmDelete = useCallback(async () => {
    await deletePost()
    setDeleteConfirmationOpen(false)
    deleteItem()
  }, [deletePost, setDeleteConfirmationOpen, deleteItem])
  return (
    <>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        aria-labelledby="confirmation-dialog-title"
        open={deleteConfirmationOpened}
      >
        <DialogTitle id="confirmation-dialog-title">Confirmation</DialogTitle>
        <DialogContent dividers>
          <Typography>
            Are you sure want to delete this item?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDeleteConfirmation} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Card className={styles.card}>
        <CardContent>
          <Typography className={styles.description}>
            {description || 'No description'}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="goto">
            <a target="_blank" href={url} rel="noopener noreferrer" role="button" className={styles.linkToSite}>
              <LinkIcon />
            </a>
          </IconButton>
          {loading ? (
            <LinearProgress />
          ) : (
            <IconButton aria-label="delete" onClick={handleDeleteClick}>
              <DeleteIcon />
            </IconButton>
          )}
          {description && (
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            className={cx(expanded && styles.expandRotated)}
          >
            <ExpandMoreIcon />
          </IconButton>
          )}
        </CardActions>
        {description && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className={styles.extendedDescription}>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
        )}
      </Card>
    </>
  )
}
