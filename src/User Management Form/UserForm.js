
import React from 'react';

const UserForm = ({ formData, setFormData, addOrUpdateUser, editingRow }) => {
  return (
    <form id="userFormInformation">
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" placeholder="Your First Name" required minlength="5" maxlength="10"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}/>

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" placeholder="Your Last Name" required minlength="5" maxlength="10"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}/>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Your Email Address" required valid
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" placeholder="********" required minlength ="8"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
/>

      <button type="button" onClick={addOrUpdateUser}>
        {editingRow ? 'Update User' : 'Add User'}
      </button>
    </form>
  )
};

export default UserForm;
