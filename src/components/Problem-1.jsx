import React, {useEffect, useState} from 'react';

const Problem1 = () => {


    const [show, setShow] = useState('all');
    const [refresh, setRefresh] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const [singleData, setSingleData] = useState({
        name:"",
        status:""
    });

    const handleClick = (val) =>{
        setShow(val);
    }

    useEffect(()=>{
        handleFilterData(show,data)
    },[show])

    const handleFilterData= (val = show, data = data) =>{
        if(val==='all') setFilteredData(data);
        else{
            let newData = data.filter(item=>item.status===val)
            setFilteredData(newData);
        }
        setRefresh(!refresh)
    }

    const handleAddData = (e) =>{
        let tempData = [...data];
        tempData.push(singleData);
        setData(tempData)
        handleFilterData(show,tempData)
        e.preventDefault();
    }

    
    const handleInput = (field,val) =>{
        let values = {...singleData}
        values[field] = val;
        setSingleData(values)
    }


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleAddData}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" onChange={(e)=>handleInput("name",e.target.value)}/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" onChange={(e)=>handleInput("status",e.target.value)}/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
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
                            {filteredData?.map((item,index)=><tr key={index}>
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