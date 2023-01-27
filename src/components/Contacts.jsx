import React, { useState } from 'react'

export default function Contacts({contactList}) {
  const [showEvenOnly, setShowEvenOnly] = useState(false)
  const [data, setData] = useState(contactList)
  const handleCheck = (e) =>{
      let isEven = e.target.checked
      setShowEvenOnly(isEven);
      filterEvenItems(isEven);
  }
  const filterEvenItems = (isEven) =>{
    if(!isEven) return setData(contactList);
    let filteredList = contactList.filter(item=>Number(item.id)%2==0);
    setData(filteredList);
  }

  return (
    <div>
      <div>
        {data?.map((item,index)=><div key={index}>
            <b>{item?.id }.</b>  {item?.phone}
        </div>)}
      </div>
      <div class="form-check mt-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={showEvenOnly} onChange={handleCheck}/>
        <label class="form-check-label" for="flexCheckChecked">
          Only Even
        </label>
      </div>
    </div>
  )
}
