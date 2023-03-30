import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

function App() {
  const [contractDetails, setContractDetails] = useState({});
  const [roles, setRoles] = useState([]);
  const [candidates, setCandidates] = useState([]);
  // Function to handle contract form submission
  const handleContractSubmit = (event) => {
    event.preventDefault();
    // Send contract details to back-end API
    // Add error handling and validation as needed
  };
  // Function to handle role form submission
  const handleRoleSubmit = (event) => {
    event.preventDefault();
    // Add role to list of roles
    // Clear role form fields
  };
  // Function to handle candidate form submission
  const handleCandidateSubmit = (event) => {
    event.preventDefault();
    // Add candidate to list of candidates
    // Clear candidate form fields
  };
  return (
    <div>
      <h1>Contract Matching System</h1>
      {/* Contract form */}
      <form onSubmit={handleContractSubmit}>
        <label>
          Start Date:
          <input type="date" value={contractDetails.startDate} onChange={(event) => setContractDetails({ ...contractDetails, startDate: event.target.value })} />
        </label>
        <label>
          End Date:
          <input type="date" value={contractDetails.endDate} onChange={(event) => setContractDetails({ ...contractDetails, endDate: event.target.value })} />
        </label>
        <label>
          Name:
          <input type="text" value={contractDetails.name} onChange={(event) => setContractDetails({ ...contractDetails, name: event.target.value })} />
        </label>
        <label>
          Contact:
          <input type="text" value={contractDetails.contact} onChange={(event) => setContractDetails({ ...contractDetails, contact: event.target.value })} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* Role form */}
      <form onSubmit={handleRoleSubmit}>
        <label>
          Role Name:
          <input type="text" />
        </label>
        <label>
          Required Skills:
          <input type="text" />
        </label>
        <button type="submit">Add Role</button>
      </form>
      {/* Candidate form */}
      <form onSubmit={handleCandidateSubmit}>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Contact:
          <input type="text" />
        </label>
        <label>
          Skills:
          <input type="text" />
        </label>
        <button type="submit">Add Candidate</button>
      </form>
      {/* Display list of roles and candidates */}
      <h2>Roles</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            <strong>{role.name}</strong>
            <br />
            Required Skills: {role.skills}
          </li>
        ))}
      </ul>
      <h2>Candidates</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            <strong>{candidate.name}</strong>
            <br />
            Contact: {candidate.contact}
            <br />
            Skills: {candidate.skills}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
