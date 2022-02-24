// Config

const mssqlconfig  = require('../../mssqlconfig');

// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
    console.log('Connected to SQL server successfully!');
}); 


// METHOD ...
exports.getProjectList = function(callback) {

	var FUNCTIONNAME = "getProjectList";

		var sqlStatement = `
		SELECT [ProjectID]
    ,[ProjectName]
    ,[CityID]
    ,[ProjectStatusID]
    ,[CreationDate]
FROM [dbo].[Project]
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
							ProjectTable:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.getFlatStatusList = function(callback) {

	var FUNCTIONNAME = "getFlatStatusList";

		var sqlStatement = `
		SELECT FlatStatusID, FlatStatusName FROM FlatStatus ORDER BY FlatStatusName DESC
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
							FlatStatus:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.getEmployeeList = function(callback) {

	var FUNCTIONNAME = "getEmployeeList";

		var sqlStatement = `
		SELECT EmployeeID, EmployeeName, EmployeeSurname, CONVERT(varchar,CreationDate,103) AS CreationDate FROM Employee
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
							EmployeeTable:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.postProject = function(callback) {

	var FUNCTIONNAME = "postProject";
	var serviceParameters = arguments[1];
	var sqlStatement =`INSERT INTO Project (ProjectName,CityID,ProjectStatusID) VALUES ('${serviceParameters.ProjectName}',${serviceParameters.CityID},${serviceParameters.ProjectStatusID})`;			 

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
exports.postFlat = function(callback) {

	var FUNCTIONNAME = "postFlat";
	var serviceParameters = arguments[1];
	var sqlStatement =`INSERT INTO Flat (FlatNo,ProjectID,FlatTypeID,FlatStatusID,Price) VALUES ('${serviceParameters.FlatNo}','${serviceParameters.ProjectID}','${serviceParameters.FlatTypeID}','${serviceParameters.FlatStatusID}','${serviceParameters.Price}')`;			 

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
exports.postEmployee = function(callback) {

	var FUNCTIONNAME = "postEmployee";
	var serviceParameters = arguments[1];
	var sqlStatement =`INSERT INTO Employee (EmployeeName,EmployeeSurname,Username,Password) VALUES ('${serviceParameters.EmployeeName}','${serviceParameters.EmployeeSurname}','${serviceParameters.Username}','${serviceParameters.Password}')`;			 

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
exports.putProject = function(callback) {

	var FUNCTIONNAME = "putProject";
	var serviceParameters = arguments[1];
	var sqlStatement =`UPDATE Project SET ProjectName='${serviceParameters.ProjectName}' , CityID =${serviceParameters.CityID} , ProjectStatusID=${serviceParameters.ProjectStatusID} WHERE ProjectID = ${serviceParameters.ProjectID}`;			 

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
exports.putFlat = function(callback) {

	var FUNCTIONNAME = "putFlat";
	var serviceParameters = arguments[1];
	var sqlStatement =`UPDATE  Flat SET FlatNo='${serviceParameters.FlatNo}', ProjectID=${serviceParameters.ProjectID},FlatTypeID=${serviceParameters.FlatTypeID},FlatStatusID=${serviceParameters.FlatStatusID},Price=${serviceParameters.Price} WHERE FlatID=${serviceParameters.FlatID}`;			 

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
exports.putEmployee = function(callback) {

	var FUNCTIONNAME = "putEmployee";
	var serviceParameters = arguments[1];
	var sqlStatement =`INSERT INTO Employee (EmployeeName,EmployeeSurname,Username,Password) VALUES ('${serviceParameters.EmployeeName}','${serviceParameters.EmployeeSurname}','${serviceParameters.Username}','${serviceParameters.Password}')`;			 

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
exports.deleteProject = function(callback) {

	var FUNCTIONNAME = "deleteProject";
	var serviceParameters = arguments[1];
	var sqlStatement =`DELETE FROM Project WHERE ProjectID=${serviceParameters.ProjectID}`;			 

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
exports.deleteFlat = function(callback) {

	var FUNCTIONNAME = "deleteFlat";
	var serviceParameters = arguments[1];
	var sqlStatement =`DELETE From Flat  WHERE FlatID = ${serviceParameters.FlatID}`;			 

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
exports.deleteEmployee = function(callback) {

	var FUNCTIONNAME = "deleteEmployee";
	var serviceParameters = arguments[1];
	var sqlStatement =`DELETE FROM Employee WHERE EmployeeID = ${serviceParameters.EmployeeID}`;			 

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