const TransactionContract = artifacts.require("TransactionContract"); // Importing the contract file assigned to the variable TransactionContract

module.exports = function(deployer) {
  deployer.deploy(TransactionContract); // Deploying the contract
};