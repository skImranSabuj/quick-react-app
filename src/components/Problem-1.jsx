import React, {useState} from 'react';

const Problem1 = () => {

    const [singleData, setSingleData] = useState({
        name:"",
        status:""
    });
    const [show, setShow] = useState('all');
    const [data, setData] = useState([]);

    const handleClick = (val) =>{
        setShow(val);
    }
    const handleAddData = (e) =>{
        // setShow(val);
        e.preventDefault();
        let tempData = [...data];
        tempData.push(singleData);
        setData(tempData)
        console.log("singleData",singleData)
        console.log("data",data)
        // setSingleData()
    }

    const handleInput = (field,val) =>{
        // console.log("tempData",field,val)
        singleData[field] = val;
        setSingleData(singleData)
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" onChange={(e)=>handleInput("name",e.target.value)}/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" onChange={(e)=>handleInput("status",e.target.value)}/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary" onClick={handleAddData}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {/* {data?.map((item,index)=>console.log({item}))} */}
                            {data?.map((item,index)=><tr key={index}>
                                <td>{item?.name}</td>
                                <td>{item?.status}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;