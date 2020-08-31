/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: ToastComponent.tsx
*/

import React, { useState, useEffect } from 'react'
import './ToastComponent.scss'

export const ToastComponent: React.FunctionComponent<IToastProps> = (props: IToastProps) => {
  const { toastList, position, autoDelete, dismissTime } = props
  const [list, setList] = useState(toastList)

  const deleteToast = (id: number) => {
    const listItemIndex = list.findIndex((e) => e.id === id)
    const toastListItem = toastList.findIndex((e) => e.id === id)
    list.splice(listItemIndex, 1)
    toastList.splice(toastListItem, 1)
    setList([...list])
  }

  useEffect(() => {
    setList([...toastList])
  }, [toastList])

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id)
      }
    }, dismissTime)
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <>
      <div className={`notification-container ${position}`}>
        {list.map((toast, i) => (
          <div
            key={i}
            className={`notification toast ${position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>
            <div className="notification-image">
              <img src={toast.icon} alt="" />
            </div>
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export interface toastObject {
  id: number
  title: string
  description: string
  backgroundColor?: string
  icon?: any
}

interface IToastProps {
  toastList: Array<toastObject>
  position: string
  autoDelete: Boolean
  dismissTime: Number
}
