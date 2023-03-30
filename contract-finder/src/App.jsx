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


function App() {
  const [contractDetails, setContractDetails] = useState({});
  const [roles, setRoles] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [filterCandidate, setFilterCandidate] = useState([])
  //console.log(import.meta.env.VITE_KEY_TEST);


  // Function to handle contract form submission
  const handleContractSubmit = (event) => {
    event.preventDefault();
    getData(contractDetails);
   console.log("filter", filters)
    console.log(contractDetails)
    console.log(candidates)
    //console.log("contractSubmit", contractDetails);
    // Send contract details to back-end API
    // Add error handling and validation as needed
  };

  const getData = async (contractDetails) => {
    const { data, error } = await supabase
    .from("candidates")
    .select()
    .like("skills", `%${contractDetails.skills}%`)
    .lt ("availability", contractDetails.startDate);
    setCandidates(data);
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
        <label>
          Role Name:
          <input
            type="text"
            value={contractDetails.role}
            onChange={(event) =>
              setContractDetails({
                ...contractDetails,
                role: event.target.value,
              })
            }
          />
        </label>
        <label>
          Required Skills:
          <input
            type="text"
            value={contractDetails.skills}
            onChange={(event) =>
              setContractDetails({
                ...contractDetails,
                skills: event.target.value,
              })
            }
          />
        </label>
        
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
        {candidates.map((candidates) => (
          <li key={candidates.id}>
            <strong>{candidates.name}</strong>
            <br />
            Contact: {candidates.contact}
            <br />
            Skills: {candidates.skills}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
