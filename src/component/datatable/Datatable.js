import React, {useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {columns} from './TableColumn'
import data from '../../db.json';

const useStyles = makeStyles((theme) => ({
  table_div: {
   height:400,
   width:"100%",
  },
}));

export default function DataTable(props) {
  const classes = useStyles();
  const [tableData, setTableData] =  useState(data.shipments);
  const [formValues, setFormValues] =  useState({field: '', value: ''});
  const [pageSize, setPageSize] = useState(5);
  const handleChange = (e, type) => {
    console.log('type>>', type,  e.target.value);
    setFormValues({...formValues, [type]: e.target.value});
  }

  const filterTableData = () => {
    console.log('formValues', formValues);
    const filterData = data.shipments.filter((item) => {return item[formValues.field].toLowerCase().includes(formValues.value)} )
    console.log('filter', filterData);
    setTableData(filterData);
  }
  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize);
  };
  return (
    <div className={classes.table_div}>
      <div>
      {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formValues.field}
          onChange={(e) => handleChange(e, "field")}
        >
          <MenuItem value=""> Select column</MenuItem>
          {
            columns.map((col) =>  <MenuItem value={col.field}>{col.headerName}</MenuItem> )
          }
         
        </Select> */}

      <TextField  label="Search"  placeholder="Search" value={formValues.value}  onChange={(e) => handleChange(e, "value")} />
      <Button variant="contained" color="primary" onClick={filterTableData}>
        Search
      </Button>
      </div>
      <DataGrid rows={tableData} columns={columns} pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        rowsPerPageOptions={[5, 10, 20]}/>
    </div>
  );
}