import anguler from "angular";
import "@uirouter/angularjs";
import React from "react";
import ReactDOM from "react-dom";

const ngApp1 = angular.module("ngApp1", ['ui.router']);

const App1 = () => {
  return <div>Hello React App1!</div>;
};

const App2 = () => {
  return <div>Hello React App2!</div>;
};


const NgReactComp = () => {
  return <div>Hello Ng React!</div>;
};


ngApp1
  .controller("myCtrl", function() {
    var vm = this;
    vm.hello = "Hello, ";
    vm.ngApp = "NG App1";
  })
  .component("myComp", {
    templateUrl: 'comp.tmpl.html',
    controller: class {
      constructor () {
        this.hello = 'Hello Component'
      }

      clickMe () {
        console.log('Clicked!');
      }
    }
  })
  .component("myChildComponent", {
    templateUrl: 'child.tmpl.html',
    controller: class {
      constructor () {
        this.msg = 'Hello Child Component!'
      }
    }
  })
  .component("myNgReactComp", {
    template: '<div></div>',
    controller: class {
      constructor ($scope, $element, $attrs) {
        this.msg = 'Hello Ng Component!'
        this.$element = $element;
      }

      $postLink() {
        ReactDOM.render(<NgReactComp/>, this.$element[0]);
      }
    }
  })
  .config(($stateProvider) => {
    $stateProvider.state({
      name: 'app',
      url: '',
      controller: 'myCtrl',
      controllerAs: 'vm',
      templateUrl: 'app.tmpl.html'
    });
});


ReactDOM.render(<App1 />, document.getElementById("react-app1"));
ReactDOM.render(<App2 />, document.getElementById("react-app2"));

angular.element(function() {
  var ngAppEl = document.getElementById('ng-app1');
  angular.bootstrap(ngAppEl, ['ngApp1']);
});
