import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { createClient } from "@supabase/supabase-js";

//Create a single supabase client for interacting with your database
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

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
  //console.log(import.meta.env.VITE_KEY_TEST);

  // let candidatesDummy = [
  //   {"John": ["Java", "Javascript", "AWS"]},
  //   {"Jane": ["Python", "Javascript", "React"]},
  //   {"Bob": ["Java", "AWS", "SQL"]}
  // ];

  // useEffect(() => {
  //   function showCandidates(){
  //     setCandidates(candidatesDummy)
  //   }

  //   showCandidates();
  // },[])

  // Function to handle contract form submission
  const handleContractSubmit = (event) => {
    event.preventDefault();
    getData(contractDetails);
    //console.log("contractSubmit", contractDetails);
    // Send contract details to back-end API
    // Add error handling and validation as needed
  };
  const getData = async () => {
    const { data, error } = await supabase
    .from("candidates")
    .select();
    setCandidates(data);
    console.log(candidates);
  };

  // Function to handle role form submission
  const handleRoleSubmit = (event) => {
    event.preventDefault();
    // console.log("roleSubmit", event)
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
          <input
            type="date"
            value={contractDetails.startDate}
            onChange={(event) =>
              setContractDetails({
                ...contractDetails,
                startDate: event.target.value,
              })
            }
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={contractDetails.endDate}
            onChange={(event) =>
              setContractDetails({
                ...contractDetails,
                endDate: event.target.value,
              })
            }
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={contractDetails.name}
            onChange={(event) =>
              setContractDetails({
                ...contractDetails,
                name: event.target.value,
              })
            }
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            value={contractDetails.contact}
            onChange={(event) =>
              setContractDetails({
                ...contractDetails,
                contact: event.target.value,
              })
            }
          />
        </label>

        {/* </form> */}
        {/* Role form */}
        {/* <form onSubmit={handleRoleSubmit}> */}
        <label>
          Role Name:
          <input type="text" />
        </label>
        <label>
          Required Skills:
          <input type="text" />
        </label>
        {/* <button type="submit">Add Role</button> */}
        {/* </form> */}
        {/* Candidate form */}
        {/* <form onSubmit={handleCandidateSubmit}> */}
        {/* <label>
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
        </label> */}
        {/* <button type="submit">Add Candidate</button> */}
        <button type="submit" value="-----dj---">
          Submit
        </button>
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

export default App;
