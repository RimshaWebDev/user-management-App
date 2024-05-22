import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import UserForm from './UserForm';
import UserListing from './UserListing';
import './UserManagementForm.css';


const UserManagementForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	})

	const [tableData, setTableData] = useState([])
	const [searchTerm, setSearchTerm] = useState('')
	const [editingRow, setEditingRow] = useState(null)
	const [serialNumber, setSerialNumber] = useState(1)

	const addOrUpdateUser = () => {
		const { firstName, lastName, email, password } = formData

		if (editingRow) {
			const updatedTableData = tableData.map((row) => {
				if (row.id === editingRow.id) {
					return { ...row, firstName, lastName, email, password }
				}
				return row
			})

			setTableData(updatedTableData)
			setEditingRow(null)
		} else {
			setTableData((prevData) => [
				...prevData,
				{
					id: serialNumber,
					firstName,
					lastName,
					email,
					password
				}
			])
			setSerialNumber((prevSerial) => prevSerial + 1)
		}

		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		})
	}

	const editRow = (row) => {
		setEditingRow(row)
		setFormData({
			firstName: row.firstName,
			lastName: row.lastName,
			email: row.email,
			password: row.password
		})
	}

	const deleteRow = (row) => {
		const updatedTableData = tableData.filter((data) => data.id !== row.id)
		setTableData(updatedTableData)
	}

	const cloneRow = (row) => {
		const newRow = { ...row, id: serialNumber }
		setTableData((prevData) => [...prevData, newRow])
		setSerialNumber((prevSerial) => prevSerial + 1)
	}

	function filterTable(e) {
		setSearchTerm(e.target.value)
	}

	const filteredTableData = tableData.filter(
		(data) =>
			data.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
			data.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			data.lastName.toLowerCase().includes(searchTerm.toLowerCase())
	)
	
	return (
		<Router>
		  <div>
			<h1 id="formHeading">Add User Information</h1>
			<nav>
			  <ul>
				<li><Link to="/UserForm">Add User</Link></li>
				<li><Link to="/UserListing">Users List</Link></li>
			  </ul>
			</nav>
			<Switch>
			  <Route path="/UserForm" render={() => (
				<UserForm
				  formData={formData}
				  setFormData={setFormData}
				  addOrUpdateUser={addOrUpdateUser}
				  editingRow={editingRow}
				/>
			  )} />
			  <Route path="/editUser/:userId">
				<div>Edit User Information</div>
			  </Route>
			  <Route path="/UserListing">
				<UserListing
			tableData={filteredTableData}  
			filterTable={filterTable}
			editRow={editRow}
			deleteRow={deleteRow}
			cloneRow={cloneRow}
			/>
			</Route>
			</Switch>
		  </div>
		</Router>
	  );
	}

export default UserManagementForm;