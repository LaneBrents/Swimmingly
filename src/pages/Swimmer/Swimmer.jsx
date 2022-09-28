import React from 'react';
import './App.css';
  
function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Grade</th>
          <th>Gender</th>
          <th>Events</th>
        </tr>
        <tr>
          <td>{{Name}}</td>
          <td>{{Grade}}</td>
          <td>{{Gender}}</td>
          <td>{{Events}}</td>
        </tr>
      </table>
    </div>
  );
}
function App() {
    return (
    <div className="Notes">
        <table>
            <tr>
                <th>Notes</th>
            </tr>
            <tr>
                <td>{{Note}}</td>
            </tr>
        </table>
    </div>
  );
}
  
export default App;