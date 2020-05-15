import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@material-ui/core'
import CachedIcon from '@material-ui/icons/Cached'
import { makeStyles } from '@material-ui/core/styles'
import cx from 'classnames'
import * as yup from 'yup'
import commonFormStyles from '../../../components/form/common.module.css'
import styles from './form.module.css'
import { CreatePostIn } from '../../../graphql/graphql'

export type AddPostFormProps = {
  onSubmit: (post: CreatePostIn) => Promise<void>;
  submitting: boolean;
}

export const maxUrlLength = 100
export const maxDescriptionLength = 1000

const schema = yup.object().shape({
  url: yup.string().url('Field should be in url format').max(maxUrlLength, 'Url too long'),
  description: yup.string().max(maxDescriptionLength, 'Description too long'),
})

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}))

// TODO: hardcoded labels
export const AddPostForm: React.FC<AddPostFormProps> = ({ onSubmit, submitting }) => {
  const {
    register, handleSubmit, formState, errors,
  } = useForm({
    mode: 'onChange',
    validationSchema: schema,
  })
  const { isValid, dirty } = formState
  const classes = useStyles()

  return (
    <div className={cx(styles.wrapper, classes.root)}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.addForm}>
        <TextField
          fullWidth
          error={!!errors?.url?.message}
          helperText={errors?.url?.message}
          id="url"
          name="url"
          inputRef={register}
          label="Url"
          variant="outlined"
          className={commonFormStyles.input}
          inputProps={{ maxLength: maxUrlLength }}
        />
        <TextField
          id="description"
          fullWidth
          error={!!errors?.description?.message}
          helperText={errors?.description?.message}
          name="description"
          label="Description"
          inputRef={register}
          variant="outlined"
          className={commonFormStyles.input}
          multiline
          inputProps={{ maxLength: maxDescriptionLength }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          disabled={!isValid || !dirty}
          startIcon={submitting ? <CachedIcon /> : undefined}
        >
          Save
        </Button>
      </form>
    </div>
  )
}
