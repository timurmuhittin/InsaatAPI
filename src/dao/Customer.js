// Config

const mssqlconfig  = require('../../mssqlconfig');

// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
    console.log('Connected to SQL server successfully!');
}); 


// METHOD ...
exports.getCustomerList = function(callback) {

	var FUNCTIONNAME = "getCustomerList";

		var sqlStatement = `
		SELECT CustomerID, CustomerName , CustomerSurname , GSM, TC, EMail, Address, G.GenderName, CT.CityName, CustomerNo, IT.IncomeTypeName, C.CreationDate 
            FROM Customer AS C
            LEFT JOIN Gender AS G ON G.GenderID=C.GenderID
            LEFT JOIN City AS CT ON CT.CityID=C.CityID
            LEFT JOIN IncomeType AS IT ON IT.IncomeTypeID=C.IncomeTypeID
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin." +err,
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							message:"",
							Customers:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.getVisitList = function(callback) {

	var FUNCTIONNAME = "getVisitList";

		var sqlStatement = `
		SELECT V.VisitID , V.VisitDate,V.Notes, C.CustomerName,  C.CustomerSurname , P.ProjectName ,V.CreationDate FROM Visit AS V
        LEFT JOIN Customer AS C ON C.CustomerID = V.CustomerID
        LEFT JOIN Project AS P ON V.ProjectID = P.ProjectID
        ORDER BY V.CreationDate
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin." +err,
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							message:"",
							VisitTable:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.getSalesList = function(callback) {

	var FUNCTIONNAME = "getSalesList";

		var sqlStatement = `
		SELECT [SalesID] ,[SalesDate] ,[CustomerID] ,[FlatID] ,[Price] ,[EmployeeID] ,[Notes],[UpdateDate],[CreationDate] FROM [dbo].[Sales]
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin." +err,
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							message:"",
							SalesTable:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.postCustomer = function(callback) {

	var FUNCTIONNAME = "postCustomer";
	var serviceParameters = arguments[1];
	var sqlStatement =`INSERT INTO Customer (
		[CustomerName],
		  [CustomerSurname],
		  [GSM],
		  [BirthDate],
		  [TC],
		  [EMail],
		  [Address],
		  [GenderID],
		  [CityID],
		  [CustomerNo],
		  [IncomeTypeID]
		)
	VALUES (
		'${serviceParameters.CustomerName}',
		'${serviceParameters.CustomerSurname}',		
		'${serviceParameters.GSM}',
		'${serviceParameters.BirthDate}',
		'${serviceParameters.TC}',
		'${serviceParameters.EMail}',
		'${serviceParameters.Address}',
		${serviceParameters.GenderID},		
		${serviceParameters.CityID},
		'${serviceParameters.CustomerNo}', 
		${serviceParameters.IncomeTypeID}
		)`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.postVisit = function(callback) {

	var FUNCTIONNAME = "postVisit";
	var serviceParameters = arguments[1];
	var sqlStatement =`INSERT INTO Visit (VisitDate, CustomerID, ProjectID, Notes) VALUES ('${serviceParameters.VisitDate}',${serviceParameters.CustomerID},${serviceParameters.ProjectID},'${serviceParameters.Notes}')`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.postSales = function(callback) {

	var FUNCTIONNAME = "postSales";
	var serviceParameters = arguments[1];
	var sqlStatement =`INSERT INTO Sales(SalesDate,CustomerID,FlatID,Price,EmployeeID,Notes) VALUES ('${serviceParameters.SalesDate}',${serviceParameters.CustomerID},${serviceParameters.FlatID},${serviceParameters.Price},${serviceParameters.EmployeeID},'${serviceParameters.Notes}')`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.putCustomer = function(callback) {

	var FUNCTIONNAME = "putCustomer";
	var serviceParameters = arguments[1];
	var sqlStatement =`UPDATE Customer SET
	[CustomerName] = '${serviceParameters.CustomerName}',
	[CustomerSurname] ='${serviceParameters.CustomerSurname}',
	[GSM] = '${serviceParameters.GSM}',
	[BirthDate]='${serviceParameters.BirthDate}',
	[TC]='${serviceParameters.TC}',
	[EMail]='${serviceParameters.EMail}',
	[Address]='${serviceParameters.Address}',
	[GenderID]=${serviceParameters.GenderID},
	[CityID]=${serviceParameters.CityID},
	[CustomerNo]='${serviceParameters.CustomerNo}',
	[IncomeTypeID]=${serviceParameters.IncomeTypeID},
	UpdateDate = '${serviceParameters.today}'
	WHERE CustomerID = ${serviceParameters.CustomerID}`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.putVisit = function(callback) {

	var FUNCTIONNAME = "putVisit";
	var serviceParameters = arguments[1];
	var sqlStatement =`UPDATE Visit SET VisitDate = '${serviceParameters.VisitDate}', CustomerID = ${serviceParameters.CustomerID}, ProjectID = ${serviceParameters.ProjectID}, Notes = '${serviceParameters.Notes}' WHERE VisitID = ${serviceParameters.VisitID}`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.putSales = function(callback) {

	var FUNCTIONNAME = "putSales";
	var serviceParameters = arguments[1];
	var sqlStatement =`UPDATE Sales SET Price = '${serviceParameters.Price}', UpdateDate = '${serviceParameters.today}' WHERE SalesID= ${serviceParameters.SalesID}`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.deleteVisit = function(callback) {

	var FUNCTIONNAME = "deleteVisit";
	var serviceParameters = arguments[1];
	var sqlStatement =`DELETE FROM Visit WHERE VisitID = ${serviceParameters.VisitID}`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.deleteSales = function(callback) {

	var FUNCTIONNAME = "deleteSales";
	var serviceParameters = arguments[1];
	var sqlStatement =`DELETE From Sales  WHERE SalesID = ${serviceParameters.SalesID}`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
