import React from 'react';
import ReactDOM from 'react-dom';
import UserManagementForm from './UserManagementForm';

const App = () => {
  return (
    <div>
      <h1>User Management Form</h1>
      <UserManagementForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));