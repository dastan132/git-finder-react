import React,{useState,useEffect} from "react";


const DisplayTable = (data, repositories) => {

    
    return (
        <>
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Bio</th>
                    <th>Repositories</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{ data.data.avatar_url && <img className="ui small circular image" src={data.data.avatar_url} alt={data.data.avatar_url}></img> }</td>
                    <td>{data.data.name}</td>
                    <td>{data.data.location}</td>
                    <td>{data.data.bio}</td>
                    <td>
                    {console.log(data)}
                    {data.repositories?.map((d) => (
                        <div className="ui relaxed divided list" 
                        key={d.name}>
                          <div className="item">
                            <i className="large github middle aligned icon"></i>
                            <div className="container">
                            <a href={d.html_url} 
                                key={d.name} 
                                className="header" 
                                target="_blank">
                                {d.name}</a>
                            </div>
                          </div>   
                        </div>

                    ))}

                    
                    </td>

                </tr>
            </tbody>
        </table>
       
        </>
    )  
}

export default DisplayTable;