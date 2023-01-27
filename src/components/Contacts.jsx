import React from 'react'

export default function Contacts({contactList}) {
  return (
    <div>
        {contactList?.map((item,index)=><div key={index}>
            <b>{item?.id }.</b>  {item?.phone}
        </div>)}
    </div>
  )
}
