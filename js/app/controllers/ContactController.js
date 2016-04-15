function ContactController() {
  var vm = this;

  this.changeName = function() {
    vm.name = 'Something else!';
  }

  this.name = "Zach";
  this.email = "zach@ivy.com";
  this.phone = "555-555-5555";
}

angular
  .module('app')
  .controller('ContactController', ContactController);