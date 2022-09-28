import React from 'react';
import './App.css';
  
export default function MyTeam() {
  return (
    <div className="MyTeam">
      <table>
        <tr>
          <th>Name</th>
          <th>Grade</th>
          <th>Gender</th>
          <th>Events</th>
        </tr>
        <tr>
          <td>{{ Name }}</td>
          <td>{{ Grade }}</td>
          <td>{{ Gender }}</td>
          <td>{{ Events }}</td>
        </tr>
      </table>
    </div>
  );
}
