
import React from 'react';

const UserListing = ({ editRow, deleteRow, cloneRow,filteredTableData }) => {
  return (
    <div>
      <input type="text" id="searchInput" onInput={filteredTableData} placeholder="Search by email, first name, or last name"/>
      <table id="userTable">
        <thead>
          <tr>
            <th>Sr#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {/* Mapping through filteredTableData and render rows */}
      {filteredTableData.map((row) => (
      <tr key={row.id}>
      <td>{row.id}</td>
			<td>{row.firstName}</td>
			<td>{row.lastName}</td>
			<td>{row.email}</td>
			<td>{row.password}</td>
		<td>
    <button onClick={() =>editRow(row)}>Edit</button>
		<button onClick={() =>deleteRow(row)}>Delete</button>
		<button className="edit-btn" onClick={() =>cloneRow(row)}>Clone</button>
        </td>
        </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListing;
