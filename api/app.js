

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var router = express.Router();
app.use('/api', router);

app.use(express.static(__dirname + '/public'))

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// POST { pkey: 'blbalbalba' }

var web3 = require('./web3Init.js')
var abi = {"abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "sign",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "kill",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "sigOne",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_releaseAddress",
          "type": "address"
        }
      ],
      "name": "setRelease",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "releaseFunds",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_trustOne",
          "type": "address"
        },
        {
          "name": "_trustTwo",
          "type": "address"
        }
      ],
      "name": "setTrustees",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "sigTwo",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "trustOne",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "releaseAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "trustTwo",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    },
    {
      "payable": true,
      "type": "fallback"
    }
  ]};
var bytecode = "0x6060604052341561000c57fe5b5b5b60008054600160a060020a03191633600160a060020a03161790555b5b5b6104498061003b6000396000f3006060604052361561009e5763ffffffff60e060020a6000350416632ca1512281146100a757806341c0e1b5146100b95780634c5bf4a0146100cb57806353e96c4e146100ed57806369d895751461010b57806370f0e3f91461011d57806386ea0dc3146101415780638da5cb5b14610163578063a9059cbb1461018f578063c105b5b5146101b0578063da2a4d2b146101dc578063eb2e526514610208575b6100a55b5b565b005b34156100af57fe5b6100a5610234565b005b34156100c157fe5b6100a5610276565b005b34156100d357fe5b6100db6102a3565b60408051918252519081900360200190f35b34156100f557fe5b6100a5600160a060020a03600435166102a9565b005b341561011357fe5b6100a56102e5565b005b341561012557fe5b6100a5600160a060020a036004358116906024351661033a565b005b341561014957fe5b6100db61038c565b60408051918252519081900360200190f35b341561016b57fe5b610173610392565b60408051600160a060020a039092168252519081900360200190f35b341561019757fe5b6100a5600160a060020a03600435166024356103a1565b005b34156101b857fe5b6101736103f0565b60408051600160a060020a039092168252519081900360200190f35b34156101e457fe5b6101736103ff565b60408051600160a060020a039092168252519081900360200190f35b341561021057fe5b61017361040e565b60408051600160a060020a039092168252519081900360200190f35b60015433600160a060020a03908116911614156102555760016003556100a2565b60025433600160a060020a03908116911614156100a25760016004555b5b5b565b60005433600160a060020a039081169116146102925760006000fd5b600054600160a060020a0316ff5b5b565b60035481565b60005433600160a060020a039081169116146102c55760006000fd5b60058054600160a060020a031916600160a060020a0383161790555b5b50565b60035460011480156102f957506004546001145b15156103055760006000fd5b600554604051600160a060020a039182169130163180156108fc02916000818181858888f1935050505015156100a257fe5b5b565b60005433600160a060020a039081169116146103565760006000fd5b60018054600160a060020a03808516600160a060020a03199283161790925560028054928416929091169190911790555b5b5050565b60045481565b600054600160a060020a031681565b60005433600160a060020a039081169116146103bd5760006000fd5b604051600160a060020a0383169082156108fc029083906000818181858888f19350505050151561038757fe5b5b5b5050565b600154600160a060020a031681565b600554600160a060020a031681565b600254600160a060020a0316815600a165627a7a72305820a5b7aa0be932dc5f79494cd6d4110adf25a3192aa17720ac572fc39e298bf01e0029";
var gasEstimate = web3.eth.estimateGas({data: bytecode});
var contract = web3.eth.contract(abi);
var instance;

app.get('/', function(req, res, next) {
  //console.log("asdsadas")
  res.send();
})

app.post('/api/private_key', function(req, res, next) {
  var p_key = req.body.private_key;
  try {
    var hdkey = require('ethereumjs-wallet/hdkey');
    var private_key = hdkey.fromMasterSeed('random')._hdkey._privateKey;
  var Wallet = require('ethereumjs-wallet');
  var wallet = Wallet.fromPrivateKey(private_key);
  // var address = wallet.getAddress();
  }
  //instance = contract.new({data: bytecode, from: address, gas: gasEstimate});
  catch (e) {
    res.send("not ok");
  }
  res.send(result);
  // res = console.log("asd");
})

app.post('/api/action2', function(req, res, next) {

})

// if /blablabla
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({ error: err })
});

module.exports = app;
