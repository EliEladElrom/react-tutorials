/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/components/Toast/ToastNotification.tsx
*/

import React, { useState } from 'react'
import './ToastNotification.scss'
import { ToastComponent, toastObject } from './ToastComponent'
import checkIcon from '../../assets/toast/check.svg'
import errorIcon from '../../assets/toast/error.svg'
import infoIcon from '../../assets/toast/info.svg'
import warningIcon from '../../assets/toast/warning.svg'
import store from '../../redux/store'
import {
  backgroundColorEnums,
  notificationTypesEnums,
} from '../../features/Notification/notificationEnums'
import { setNotification } from '../../features/Notification/notificationSlice'

export const ToastNotification: React.FunctionComponent<IToastNotificationProps> = (
  props: IToastNotificationProps
) => {
  store.subscribe(() => {
    let notification = store.getState().notification.notification
    if (notification.id !== -1) {
      showToast(notification.id, notification.type, notification.description)

      // show only one message at a time
      store.dispatch(
        setNotification({
          id: -1,
        })
      )
    }
  })
  const [toastList, setToastList] = useState<Array<toastObject>>([])
  const showToast = (id: number, type: string, description: string) => {
    let toast_object: toastObject = {
      id,
      title: type,
      description: description,
    }
    switch (type) {
      case notificationTypesEnums.Success:
        toast_object.backgroundColor = backgroundColorEnums.Success
        toast_object.icon = checkIcon
        break
      case notificationTypesEnums.Fail:
        toast_object.backgroundColor = backgroundColorEnums.Fail
        toast_object.icon = errorIcon
        break
      case notificationTypesEnums.Info:
        toast_object.backgroundColor = backgroundColorEnums.Info
        toast_object.icon = infoIcon
        break
      case notificationTypesEnums.Warning:
        toast_object.backgroundColor = backgroundColorEnums.Warning
        toast_object.icon = warningIcon
        break

      default:
        setToastList([])
    }
    setToastList([...toastList, toast_object])
  }
  return (
    <div className="app">
      <ToastComponent
        toastList={toastList}
        position={'top-right'}
        dismissTime={2500}
        autoDelete={true}
      />
    </div>
  )
}

interface IToastNotificationProps {
  // TODO
}
