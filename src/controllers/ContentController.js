
var Content 		= require('../dao/Content');

const jwt = require("jsonwebtoken");
let mySecretKey="2t82u5b"

 /* exports.getCityList = function(req, res) {
     
    Content.getCityList(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };*/
  exports.getCityList = function (req, res) {

    const myJwt = req.header['myJwt'] || req.body.myJwt || req.query.myJwt;
    
    Content.getCityList(function (err, data) {
    jwt.verify(myJwt, mySecretKey, (error, decoded) => {
        if (error) {
            var returnVal = {
                result: "Failed",
                message: "Authentication Failed",
            }
            res.send(returnVal);                
        } else {
            console.log(decoded)
            res.send(data);
        }
    });
    }, req.body);

};
exports.getFlatTypeList = function (req, res) {

  const myJwt = req.header['myJwt'] || req.body.myJwt || req.query.myJwt;
  
  Content.getFlatTypeList(function (err, data) {
  jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
          var returnVal = {
              result: "Failed",
              message: "Authentication Failed",
          }
          res.send(returnVal);                
      } else {
          console.log(decoded)
          res.send(data);
      }
  });
  }, req.body);

};
exports.getIncomeTypeList = function (req, res) {

  const myJwt = req.header['myJwt'] || req.body.myJwt || req.query.myJwt;
  
  Content.getIncomeTypeList(function (err, data) {
  jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
          var returnVal = {
              result: "Failed",
              message: "Authentication Failed",
          }
          res.send(returnVal);                
      } else {
          console.log(decoded)
          res.send(data);
      }
  });
  }, req.body);

};
exports.getProjectStatusList = function (req, res) {

  const myJwt = req.header['myJwt'] || req.body.myJwt || req.query.myJwt;
  
  Content.getProjectStatusList(function (err, data) {
  jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
          var returnVal = {
              result: "Failed",
              message: "Authentication Failed",
          }
          res.send(returnVal);                
      } else {
          console.log(decoded)
          res.send(data);
      }
  });
  }, req.body);

};
exports.getGenderList = function (req, res) {

  const myJwt = req.header['myJwt'] || req.body.myJwt || req.query.myJwt;
  
  Content.getGenderList(function (err, data) {
  jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
          var returnVal = {
              result: "Failed",
              message: "Authentication Failed",
          }
          res.send(returnVal);                
      } else {
          console.log(decoded)
          res.send(data);
      }
  });
  }, req.body);

};
exports.postCity = function (req, res) {

  const myJwt = req.header['myJwt'] || req.body.myJwt || req.query.myJwt;
  
  Content.postCity(function (err, data) {
  jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
          var returnVal = {
              result: "Failed",
              message: "Authentication Failed",
          }
          res.send(returnVal);                
      } else {
          console.log(decoded)
          res.send(data);
      }
  });
  }, req.body);

};
exports.postGender = function (req, res) {

  const myJwt = req.header['myJwt'] || req.body.myJwt || req.query.myJwt;
  
  Content.postGender(function (err, data) {
  jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
          var returnVal = {
              result: "Failed",
              message: "Authentication Failed",
          }
          res.send(returnVal);                
      } else {
          console.log(decoded)
          res.send(data);
      }
  });
  }, req.body);

};
exports.postFlatType = function (req, res) {

  const myJwt = req.header['myJwt'] || req.body.myJwt || req.query.myJwt;
  
  Content.postFlatType(function (err, data) {
  jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
          var returnVal = {
              result: "Failed",
              message: "Authentication Failed",
          }
          res.send(returnVal);                
      } else {
          console.log(decoded)
          res.send(data);
      }
  });
  }, req.body);

};
exports.postIncomeType = function (req, res) {

  const myJwt = req.header['myJwt'] || req.body.myJwt || req.query.myJwt;
  
  Content.postIncomeType(function (err, data) {
  jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
          var returnVal = {
              result: "Failed",
              message: "Authentication Failed",
          }
          res.send(returnVal);                
      } else {
          console.log(decoded)
          res.send(data);
      }
  });
  }, req.body);

};
exports.postProjectStatus = function (req, res) {

  const myJwt = req.header['myJwt'] || req.body.myJwt || req.query.myJwt;
  
  Content.postProjectStatus(function (err, data) {
  jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
          var returnVal = {
              result: "Failed",
              message: "Authentication Failed",
          }
          res.send(returnVal);                
      } else {
          console.log(decoded)
          res.send(data);
      }
  });
  }, req.body);

};
  exports.putCity = function(req, res) {
     
    Content.putCity(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.putGender = function(req, res) {
     
    Content.putGender(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.putFlatType = function(req, res) {
     
    Content.putFlatType(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.putIncomeType = function(req, res) {
     
    Content.putIncomeType(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.putProjectStatus = function(req, res) {
     
    Content.putProjectStatus(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.deleteCity = function(req, res) {
     
    Content.deleteCity(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.deleteGender = function(req, res) {
     
    Content.deleteGender(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.deleteFlatType = function(req, res) {
     
    Content.deleteFlatType(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.deleteIncomeType = function(req, res) {
     
    Content.deleteIncomeType(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.deleteProjectStatus = function(req, res) {
     
    Content.deleteProjectStatus(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.postLogin = function(req, res) {
     
    Content.postLogin(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };


 