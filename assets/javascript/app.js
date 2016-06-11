$( document ).ready(function() {
//Link to Firebase
	var employeeData = new Firebase("https://employee-data-ex.firebaseio.com/");

	// Initial data
	var employeeName = "";
	var employeeRole = "";
	var empStart = "";
	var monthsWorked = 0;
	var totalBilled = 0;

	//When page loads, get a snapshot of current data
	employeeData.on('value', function(snapshot) {

		//If Firebase has data stored ...
		if (snapshot.child('employeeName').exists() && snapshot.child('employeeRole').exists() && snapshot.child('empStart').exists() && snapshot.child('monthsWorked').exists() && snapshot.child('totalBilled').exists()) {

			// Set the initial variables equal to the stored data
			employeeName = snapshot.val().employeeName;
			employeeRole = snapshot.val().employeeRole;
			empStart = snapshot.val().empStart;
			monthsWorked = snapshot.val().monthsWorked;
			totalBilled = snapshot.val().totalBilled;

			$('#employeeDB').html("<td>" + snapshot.val().employeeName + "</td");
			$('#employeeDB').html("<td>" + snapshot.val().employeeRole + "</td");
			$('#employeeDB').html("<td>" + snapshot.val().empStart + "</td");
			$('#employeeDB').html("<td>" + snapshot.val().monthsWorked + "</td");
			$('#employeeDB').html("<td>" + snapshot.val().totalBilled + "</td");
		} else {
				$('#employeeDB').html(employeeName);
				$('#employeeDB').html(employeeRole);
				$('#employeeDB').html(empStart);
				$('#employeeDB').html(monthsWorked);
				$('#employeeDB').html(totalBilled);
			}
	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
	});

	//Whenever a user clicks the submit button
	$('#submitData').on('click', function(e) {

		//Get input values
		var employeeName = $('#nameInput').val().trim();
		var employeeRole = $('#roleInput').val().trim();
		var empStart = $('#dateInput').val().trim();
		var totalBilled = $('#rateInput').val().trim();

		console.log(employeeName);
		console.log(employeeRole);
		console.log(empStart);
		console.log(totalBilled);

		employeeData.push({
			employeeName: Employee Name,
			employeeRole: Role,
			empStart: Start Date,
			totalBilled: Total Billed
		});
	})

	return false;
});