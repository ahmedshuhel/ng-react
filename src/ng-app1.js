import React from "react";
import ReactDOM from "react-dom";
import anguler from "angular";
import "@uirouter/angularjs";
import { NgReactComp } from './react-components/ng-react-comp.js';

const ngApp1 = angular.module("ngApp1", ['ui.router']);

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

export default ngApp1
