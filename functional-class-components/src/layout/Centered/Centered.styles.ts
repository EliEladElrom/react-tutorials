import { createStyles, Theme } from '@material-ui/core/styles'

export default (theme: Theme) =>
  createStyles({
    '@global': {
      'body, html, #root': {
        paddingTop: 40,
        width: '100%',
      },
    },
    container: {
      maxWidth: '400px',
      margin: '0 auto',
    },
  })
