import anguler from "angular";
import "@uirouter/angularjs";
import React from "react";
import ReactDOM from "react-dom";

import ngApp1 from './ng-app1.js';
import ngApp2 from './ng-app2.js';


import {Autocomplete} from './react-components/autocomplete';

const App1 = () => {
  return <div>Hello React App1!</div>;
};

const App2 = () => (
 <div>
    Hello React App2!
    <Autocomplete />
  </div>
);



ReactDOM.render(<App1 />, document.getElementById("react-app1"));

ReactDOM.render(<App2 />, document.getElementById("react-app2"));

angular.element(function() {
  var ngAppEl = document.getElementById('ng-app1');
  angular.bootstrap(ngAppEl, ['ngApp1']);
});


angular.element(function() {
  var ngAppEl = document.getElementById('ng-app2');
  angular.bootstrap(ngAppEl, ['ngApp2']);
});
