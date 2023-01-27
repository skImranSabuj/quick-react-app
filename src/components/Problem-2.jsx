import React, { useEffect, useState } from 'react';
import callApi from '../utils/callApi';

const Problem2 = () => {
    const [loading,setloading] = useState(false);
    const [contactList,setContactList] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            await handleLoadCountries()
        }
        fetchData();
    },[])

    const handleLoadCountries = async () => {
        // console.log({loginData});

        setloading(true);
        try {
          const response = await callApi('contacts/');
          console.log('response: ', response);
          if (response?.errors) {
            let errorMesssage =
              response?.message || response?.errors || 'Something went wrong';
          }
          if (response?.count) {
            setContactList(response.results)
            // signIn(response?.userData);
            // navigation.navigate('Seller Center');
          }
        } catch (err) {
          console.log(err);
        }
        setloading(false);
      };

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" data-bs-target="#modalA" data-bs-toggle="modal">All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>

                {/* MOdal A  */}
                <div class="modal fade" id="modalA" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">All Contacts</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Show a second modal and hide this one with the button below.
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#modalB" data-bs-toggle="modal">Open second modal</button>
                        </div>
                        </div>
                    </div>
                </div>

                {/* MOdal B  */}
                <div class="modal fade" id="modalB" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
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
            </div>
        </div>
    );
};

export default Problem2;