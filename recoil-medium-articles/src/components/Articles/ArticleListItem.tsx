// src/components/Articles/ArticleListItem.tsx

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '150ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}))

const ArticleListItem = (props: IArticleListItemProps) => {
  const classes = useStyles()
  const shortenText = (text: string, startingPoint: number, maxLength: number) => {
    return text.length > maxLength ? text.slice(startingPoint, maxLength) : text
  }
  const ListItemLink = (props: any) => {
    return <ListItem button component="a" {...props} target="_blank" />
  }
  return (
    <List className={classes.root}>
      <ListItemLink href={props.article.link}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={props.article.title} src={props.article.thumbnail} />
          </ListItemAvatar>
          <ListItemText
            style={{ color: '#000000' }}
            primary={shortenText(props.article.title, 0, 200) + '...'}
            secondary={
              <React.Fragment>
                {props.article.author} - {shortenText(props.article.pubDate, 0, 10)}
              </React.Fragment>
            }
          />
        </ListItem>
      </ListItemLink>
      <Divider variant="inset" component="li" />
    </List>
  )
}

interface IArticleListItemProps {
  article: any
}

export default ArticleListItem
