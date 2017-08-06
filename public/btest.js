const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))


const compiledJSON = require('../build/contracts/MultiSig.json')

const multisigContract = web3.eth.contract(compiledJSON.abi)
const multisigInstance = multisigContract.new({
	data: compiledJSON.unlinked_binary
})