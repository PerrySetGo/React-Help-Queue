var heading = React.createElement('h1', {}, 'Help Queue');
var ticketLocation = React.createElement('h3', {},'3a');
var ticketNames = React.createElement('h3', {}, 'Perry and Lena');
var ticketIssue = React.createElement('h3',{}, "anxious");

var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);

  console.log("update");
  ReactDOM.render(
    app,
    document.getElementById('react-app-root')
  );
