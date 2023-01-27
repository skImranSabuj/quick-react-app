import React from 'react'

function Modal({id,}) {
  return (
    <div class="modal fade" id="modalB" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">US Contacts</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Hide this modal and show the first with the button below.
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#modalA" data-bs-toggle="modal">Back to first</button>
                    </div>
                    </div>
                </div>
                </div>
  )
}

export default Modal