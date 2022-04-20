import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const warnings = 
    [
      {id: 1, type: "Warning 1", date: "2022-04-30"},
      {id: 2, type: "Warning 2", date: "2022-05-30"},
      {id: 3, type: "Warning 3", date: "2022-06-30"}
    ];

const alerts = 
    [
      {id: 1, type: "Alerts 1", date: "2022-07-30"},
      {id: 2, type: "Alerts 2", date: "2022-08-30"},
      {id: 3, type: "Alerts 3", date: "2022-09-30"}
    ];


const messages = [
  { warnings: warnings },
  { alerts: alerts } 
];

function App(props) {

  const warnings = props.messages[0].warnings;
  const alerts = props.messages[1].alerts;
  
  const warningList = (
    <ul>
      {warnings.map((warning) => 
      <li key={warning.id}>
        <p>Date: {warning.date} <span>{warning.type}</span></p>
      </li>
      )}
    </ul>
  );

  const alertList = (
    <ul>
      {alerts.map((alert) => 
      <li key={alert.id}>
        <p>Date: {alert.date} <span> {alert.type} </span></p>
      </li>
      )}
    </ul>
  );

  return (
    <div>
      {warningList}
    <hr />
      {alertList}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App messages={ messages } />
);

reportWebVitals();
