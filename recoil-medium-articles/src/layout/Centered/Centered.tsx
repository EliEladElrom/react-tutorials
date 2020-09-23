/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Centered.tsx
*/

import * as React from 'react'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import styles from './Centered.styles'

const CenteredViewInner: React.FunctionComponent<Props> = (props) => (
  <div className={props.classes.container}>{props.children}</div>
)

interface Props extends WithStyles<typeof styles> {}

export const Centered = withStyles(styles)(CenteredViewInner)
