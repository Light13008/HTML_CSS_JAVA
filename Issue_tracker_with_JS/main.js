
function fetchIssues( ) 
{
    var issues = JSON.parse(localStorage.getItem('issues'));  // localStorage.getItem('issues') GETS issues from LOCAL STORAGE, and parse the string result into a JSON object.
    
    var issuesList = document.getElementById('issuesListe');  // <div> with id 'issuesLists' is called. this is accessed by property innetHTML ( next line of this code). 

    issuesList.innerHTML='';  // empty string is passed as input to issueList using innerHTML. 

    for(var i=0; i < issues.length ; i++)  // html output is added for that elements to [issuesList.innerHTML]
    {
        var id = issues[i],id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assognedTo;
        var status = issues[i].status;
        
        issuesList.innerHTML += 'div class="well">'+ '<h6>Issue ID:' + id +'</h6>' + 
                                '<p> <span class ="label label-info">' + status + '</span></p>' +
                                '<h3> ' + desc + '</h3>' + '<p><span class="glyphicon glyphicon-time"></span> ' + severity + ' '+
                                '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
                                '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')">Close</a> '+
                                '<a href="#" class="btn btn-danger" onclick="deleteIssue(\''+id+'\')">Delete</a>'+
                                '</div>';
    }  


    document.getElementById(issueInputForm).addEventListener('submit', saveIssue); // this line is used to submet event of the form.
    //  A reference to the form element is retrieved by using getElementById
    // here issueInputForm  is ID to FORM element
    // addEventListener method is called to attach 'SUBMIT' action to form to [saveIssue ] event handler function.

    function saveIssue(e){
        
        var issueId = chance.guide();                                                      // this is set by calling function CHANCE.GUIDE(). 
        var issueDesc = document.getElementById('issueDescInput').value;
        var issueSeverity = document.getElementById('issueAssignedToInput').value;
        var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
        var issueStatus = 'open';                                                          // this is set as OPEN 

        var issue = {                                                                     
            // this object 'issues' is placed int localStorage.

            id : issueId,                                     
            description : issueSeverity,
            severity : issueSeverity ,
            assignedTo : issueAssignedTo,
            status : issueStatus                              
        }                                                       

            // after inserting issues object in LocalStorage, we empty the form manually bu using  reset() method.
        if(localStorage.getItem('issues') === null){

            var issues = [];
            issue.push(issue);
            localStorage.setItem('issue', JSON.stringify(issues));
            
        }

        else{
            var issues = JSON.parse(locatStorage.getItem('issues'));
            issue.push(issue);
            localStorage.setItem('issues', JSON.stringify(issues));
        }

        document.getElementById('issueInputForm').requestFullscreen();

        fetchIssues();                      // * we use this method to list the re-generated output 
                                            //    and to make sure new issue item is visible 


        e.preventDefault();               //execute e.preventDefault() to avoid that the default submission of the form is taking place.

    }

    function setStatusClosed (id)           // The id of the current issue item is passed in as a parameter
                                            // we’re using the splice method to delete the current item from the array issues. 
    {
        var issues = JSON.parse(localStorage.getItem('issues'));  // to get the data from localStorage we neet to get issue
                                                                  // item in JSON format.  thats why we use JSON>parse method

        for( var i=0; i<issues.length ; i++ )
        {
            if (issues[i].id == id )
            {
                issues[i].status = "closed";

            }
        }

        localStorage.setItem('issues' , JSON.stringify(issues));       // having removed the current issue item from the array we’re 
        fetchIssues();                                                 //writing it back to Local Storage and execute function fetchIssues again to update the list output
    }
    
    

}