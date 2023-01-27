import React, { useEffect, useState } from 'react';
import callApi from '../utils/callApi';
import Contacts from './Contacts';
import Modal from './Modal';

const Problem2 = () => {
    const [loading,setloading] = useState(false);
    const [allContactList,setAllContactList] = useState([]);
    const [usContactList,setUSContactList] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            await handleLoadAllContacts();
            await handleUSContacts();
        }
        fetchData();
    },[])

    const handleUSContacts = async () => {
        // console.log({loginData});

        setloading(true);
        try {
          const response = await callApi('country-contacts/United%20States/');
          console.log('response: ', response);
          if (response?.errors) {
            let errorMesssage =
              response?.message || response?.errors || 'Something went wrong';
          }
          if (response?.count) {
            setUSContactList(response.results)
            // signIn(response?.userData);
            // navigation.navigate('Seller Center');
          }
        } catch (err) {
          console.log(err);
        }
        setloading(false);
    };
    const handleLoadAllContacts = async () => {
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
            setAllContactList(response.results)
            // signIn(response?.userData);
            // navigation.navigate('Seller Center');
          }
        } catch (err) {
          console.log(err);
        }
        setloading(false);
    };

    const renderActions = () =>{
        return (
            <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" data-bs-target="#modalA" data-bs-toggle="modal">All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" data-bs-target="#modalB" data-bs-toggle="modal">US Contacts</button>
                </div>
        )
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" data-bs-target="#modalA" data-bs-toggle="modal">All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" data-bs-target="#modalB" data-bs-toggle="modal">US Contacts</button>
                </div>

                {/* MOdal A  */}
                <div class="modal fade" id="modalA" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal A - All Contacts</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {/* <ul>
                            {allContactList?.map((item,index)=><li key={index}>
                                {item?.phone}
                            </li>)}
                            </ul> */}
                            <Contacts contactList={allContactList}/>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#modalB" data-bs-toggle="modal">US Contacts</button>
                            <button class="btn btn-primary"  data-bs-dismiss="modal" aria-label="Close">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

                {/* MOdal B  */}
                <div class="modal fade" id="modalB" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal B - US Contacts</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    {/* <ul>
                            {usContactList?.map((item,index)=><li key={index}>
                                {item?.phone}
                            </li>)}
                            </ul> */}
                            <Contacts contactList={usContactList}/>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#modalA" data-bs-toggle="modal">All Contacts</button>
                        <button class="btn btn-primary"  data-bs-dismiss="modal" aria-label="Close">Close</button>
                    </div>
                    </div>
                </div>
                </div>

                {/* <Modal id="modalA"/>
                <Modal id="modalB"/> */}
            </div>
        </div>
    );
};

export default Problem2;