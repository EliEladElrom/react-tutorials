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
      top: '400px',
      paddingLeft: '100px',
    },
    inline: {
      display: 'inline',
    },
    button: {
      margin: theme.spacing(0),
    },
  })
)

const profileImage = require('../../assets/EliEladElrom.jpg')

const ClientListDetail = (props: IClientListDetailProps) => {
  const classes = useStyles()
  const handleNext = () => {
    const index = props.clientsData.indexOf(props.selectedClient)
    let nextItem
    if (index < props.clientsData.length - 1) {
      nextItem = props.clientsData[index + 1]
    } else {
      // eslint-disable-next-line prefer-destructuring
      nextItem = props.clientsData[0]
    }
    props.setSelectedClient(nextItem)
  }
  const handlePrevious = () => {
    const index = props.clientsData.indexOf(props.selectedClient)
    let nextItem
    if (index > 0) {
      nextItem = props.clientsData[index - 1]
    } else {
      nextItem = props.clientsData[props.clientsData.length - 1]
    }
    props.setSelectedClient(nextItem)
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
          primary={props.selectedClient?.name}
          secondary={
            <>
              <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                {props.selectedClient?.city}, {props.selectedClient?.state} {props.selectedClient?.country}
              </Typography>
              <br />
              Eli helped {props.selectedClient?.name} with - {props.selectedClient?.description} - visit them on the web:{' '}
              <a href={props.selectedClient?.website} target="_blank" rel="noopener noreferrer">
                {props.selectedClient?.website}
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
  selectedClient: clientsObject
  clientsData: clientsObject[]
  setSelectedClient: Function
}

export default ClientListDetail
