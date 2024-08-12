import React from 'react'
import AccountItem from './AccountsListItem'

export default function AccountsList() {
  return (
    <>
        <AccountItem type="Cash Account" color="#ec407a" name="Cash" balance={3200}/>
        <AccountItem type="Current Account" color="#1565c0" name="Meezan Bank" balance={59000}/>
    </>
  )
}
