// employee management
var employee= ["James","Tom","Ridwan","Henry","Siti"]
alert("Welcome to the Employee Data System")
var conf = confirm("Would you like to Proceed?")
var select = ""
if(conf == true){
  
while(select !== "5"){

     select = prompt("List of available function\n\n" + "1 Add Employee\n2. View Employee\n3. Modify Employee\n4. Delete employee\n5. Quit\nSelect your choice by entering available function number")
    if (select == "1"){
     emName = prompt("Enter the name of Employee");
     this.employee.push(emName);
     alert("Employee added successfully"+ employee);
     
    }
    else if (select == "2"){
        alert("List of Employee:\n " + employee)
    }
    else if (select == "3"){
       var no =  prompt(employee + "Employee's position to update")
      var data = prompt("Enter new employee's name")
      employee.splice(no-1,data)
      alert("Updated List\n"+ employee)
    }
    else if (select =="4" ){
        var no =  prompt(employee + "Employee's position to delete")
        employee.splice(no-1,1)
        alert("List after deletion: \n"+ employee)
    }
    
    else if(select == "5"){
    alert("List of employee: \n"+ employee)
    }
    else{
        document.write("Invalid option")
    }
}
}else{
    alert("You are about to leave the system")
}