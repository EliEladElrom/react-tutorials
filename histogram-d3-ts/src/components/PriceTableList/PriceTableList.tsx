/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/components/PriceTableList/PriceTableList.tsx
*/
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Types } from './types'
import './PriceTableList.scss'

const useStyles = makeStyles({
  root: {
    maxHeight: 400,
  },
  table: {
    minWidth: 650
  },
})

const PriceTableList = (props: IPriceTableListProps) => {
  const classes = useStyles()
  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="priceTableListTableCellHead" style={{ color: props.textColor }}>
              Day
            </TableCell>
            <TableCell className="priceTableListTableCellHead" style={{ color: props.textColor }}>
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((d: Types.Data, index: number) => (
            <TableRow key={d.price}>
              <TableCell className="priceTableListTableCell" style={{ color: props.textColor }} component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell className="priceTableListTableCell" style={{ color: props.textColor }} component="th" scope="row">
                ${parseFloat((d.price as unknown) as string).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PriceTableList

interface IPriceTableListProps {
  data: Types.Data[]
  textColor: string
}
