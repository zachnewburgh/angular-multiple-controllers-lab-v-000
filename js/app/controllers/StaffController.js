function StaffController() {
  this.name = "Jonny";
  this.email = "jonny@ivy.com";
  this.phone = "777-777-7777";
}

angular
  .module('app')
  .controller('StaffController', StaffController);