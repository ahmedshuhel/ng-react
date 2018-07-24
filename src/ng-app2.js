import React from "react";
import ReactDOM from "react-dom";
import anguler from "angular";
import "@uirouter/angularjs";
import { NgReactComp } from './react-components/ng-react-comp.js';

const ngApp2 = angular.module("ngApp2", ['ui.router']);

ngApp2
  .controller("HomeController", function() {
    var vm = this;
    vm.title = "Home Page";
    vm.welcome = "Hello, Angular App2";
  })
  .controller("AboutController", function() {
    var vm = this;
    vm.title = "About Page";
    vm.message = "That's all about it!";
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
    $stateProvider
      .state({
        name: 'home',
        url: '',
        controller: 'HomeController',
        controllerAs: 'vm',
        templateUrl: 'home.tmpl.html'
      })
      .state({
        name: 'about',
        url: '/about',
        controller: 'AboutController',
        controllerAs: 'vm',
        templateUrl: 'about.tmpl.html'
      });
});

export default ngApp2
