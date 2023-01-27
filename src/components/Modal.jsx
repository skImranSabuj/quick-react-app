import React from 'react'
import AppButton from './AppButton'
import Contacts from './Contacts'

function Modal(props) {
  return (
    <div {...props}>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal A - All Contacts</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <Contacts contactList={allContactList}/>
        </div>
        <div class="modal-footer">
            <AppButton name="buttonB" class="btn"  data-bs-target="#modalB" data-bs-toggle="modal">US Contacts</AppButton>
            <AppButton name="buttonC" class="btn"  data-bs-dismiss="modal" aria-label="Close">Close</AppButton>
        </div>
        </div>
    </div>
</div>
  )
}

export default Modal