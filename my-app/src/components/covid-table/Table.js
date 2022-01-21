import React from "react";
import ReactTable from 'react-table-6';
import LoadingBar from "../loader/Loadingbar";
import 'react-table-6/react-table.css';

const Table = ({ data }) => {
    if (!data || !data[0]) {
        return <LoadingBar />
    }
    
    const columns = Object.keys(data[0]).map(key => {
        return { Header: key, accessor: key }
    })

    return (
        <ReactTable
            className="-striped -highlight covid-table"
            data={data}
            columns={columns}
            defaultPageSize={100}
        />
    )
}

export default Table