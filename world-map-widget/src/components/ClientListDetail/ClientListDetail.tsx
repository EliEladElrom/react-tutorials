/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/ClientListDetail/ClientListDetail.tsx
*/

import React from 'react'
import './ClientListDetail.scss'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Button, Typography } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { clientsObject } from '../../model'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '500px',
      backgroundColor: theme.palette.background.paper,
      position: 'absolute',
      top: (props) => `${(props as IClientListDetailProps).paddingTop}px`,
      paddingLeft: '0px',
    },
    inline: {
      display: 'inline',
    },
    button: {
      margin: theme.spacing(0),
    },
  })
)

const profileImage = require('../../assets/about/EliEladElrom.jpg')

const ClientListDetail = (props: IClientListDetailProps) => {
  const classes = useStyles(props)
  const handleNext = () => {
    const index = props.data.indexOf(props.selectedItem)
    let nextItem
    if (index < props.data.length - 1) {
      nextItem = props.data[index + 1]
    } else {
      // eslint-disable-next-line prefer-destructuring
      nextItem = props.data[0]
    }
    props.setSelectedItem(nextItem)
  }
  const handlePrevious = () => {
    const index = props.data.indexOf(props.selectedItem)
    let nextItem
    if (index > 0) {
      nextItem = props.data[index - 1]
    } else {
      nextItem = props.data[props.data.length - 1]
    }
    props.setSelectedItem(nextItem)
  }
  return (
    <div className={classes.root}>
      <ListItem>
        <Button
          size="medium"
          color="primary"
          className={classes.button}
          startIcon={<ChevronLeftIcon />}
          onClick={() => {
            handlePrevious()
          }}
        />
        <img className="about-image" src={profileImage} alt="Eli Elad Elrom" />
        <ListItemText
          primary={props.selectedItem?.name}
          secondary={
            <>
              <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                {props.selectedItem?.city}, {props.selectedItem?.state} {props.selectedItem?.country}
              </Typography>
              <br />
              Eli helped {props.selectedItem?.name} with - {props.selectedItem?.description} - visit them on the web:{' '}
              <a href={props.selectedItem?.website} target="_blank" rel="noopener noreferrer">
                {props.selectedItem?.website}
              </a>
            </>
          }
        />
        <Button
          size="medium"
          color="primary"
          className={classes.button}
          startIcon={<ChevronRightIcon />}
          onClick={() => {
            handleNext()
          }}
        />
      </ListItem>
    </div>
  )
}

interface IClientListDetailProps {
  selectedItem: clientsObject
  setSelectedItem: Function
  data: clientsObject[]
  // eslint-disable-next-line react/no-unused-prop-types
  paddingTop: number
}

export default ClientListDetail
