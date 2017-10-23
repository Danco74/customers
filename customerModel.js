var mongoose = require('mongoose');

var vmSchema = new mongoose.Schema({
  name: String,
  cpus: Number,
  memory: String,
  nics: Number,
  disks: Number,
  network_1: String,
  provisioned_size_mb: String,
  in_use_mb: String,
  host: String,
  os: String

});

vmSchema.virtual('CPUs').
set(function(v) {
  this.cpus = v;
});
vmSchema.virtual('Memory').
set(function(v) {
    this.memory = v;
});
vmSchema.virtual('Nics').
set(function(v) {
    this.nics = v;
});
vmSchema.virtual('Disks').
set(function(v) {
    this.disks = v;
});
vmSchema.virtual('Network #1').
set(function(v) {
    this.network = v;
});
vmSchema.virtual('Provisioned MB').
set(function(v) {
    this.provisioned_size_mb = v;
});
vmSchema.virtual('In Use MB').
set(function(v) {
    this.in_use_mb = v;
});
vmSchema.virtual('Host').
set(function(v) {
    this.host = v;
});
vmSchema.virtual('OS').
set(function(v) {
    this.os = v;
});

var customerSchema = new mongoose.Schema({
    name: String,
    description: String,
    address: String,
    logo_url: String,
    vms: [vmSchema]
  });

 



  var Customer = mongoose.model("Customer", customerSchema);
  
  module.exports = Customer;