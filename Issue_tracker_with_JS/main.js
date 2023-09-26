
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
        
        var issueId = chance.guide();
        var issueDesc = document.getElementById('issueDescInput').value;
        var issueSeverity = document.getElementById('issueAssignedToInput').value;
        var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
        var issueStatus = 'open';

        var issue = {
            id : issueId,
            description : issueSeverity,
            severity : issueSeverity ,
            assignedTo : issueAssignedTo,
            status : issueStatus 
        }

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

        fetchIssues();

        e.preventDefault();

    }

}