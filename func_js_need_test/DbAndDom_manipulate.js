  
  const $= require('jquery');

  var successCallBack4getAll=(dataBack,status)=>
    {
      // (dataBack, status){
        console.log(dataBack);
        console.log(status);
        
        var lineNo=0;
        console.log(dataBack.prototype);
        
        dataBack.forEach(element => {
          
          id=element._id; name=element.title; attribute=element.connect;

          lineContent="<tr><td id="+id+">"+id+"</td><td><input type='text' value='"+name+"''>"+
            "</td><td><input type='text' value='"+attribute+"'></td>";
          var markup = lineContent + "<td>"+"<button id=b"+lineNo+"_del onclick=delRow($(this))>Delete</button>"+
          "</td><td>"+"<button id=b"+lineNo+"_update onclick=updateRow($(this))>Update</button></td></tr>";
          // console.log(lineNo);
          var tableBody = $("#tbody_0");
          tableBody.append(markup);
          lineNo++;
        });
      
    }

  
  function getalldata(empty, callback){
    if(empty==true){
      $("#tbody_0").empty();
    }
    

    var dataBack, status, id, name, attribute;
    var lineContent;
    $.ajax({
      type: 'GET',
      url: '/webapi_0',
      success: (x,y)=>callback(x,y),
      dataType: 'json'
    })
  }

  var successCallBack=(x=>
    {console.log(x);
      getalldata(true,successCallBack4getAll);
    }
  );

  function addRow(callback)
  {
    // var result;
    var addname=$("#addRowName").val(), addattribute=$("#addRowAttribute").val();
    var dataInput={
      "title":addname, 
      "connect":addattribute
    };

    $.ajax(
      {
        type: 'POST',
        url: '/webapi_0',
        data:dataInput,
        
        success:response=>callback(response),


        fail: function(result){
          console.log(result);
        }
        // ,
        // dataType:"application/json"
      });  
  }  

  function delRow(btnObj){

    // $("#tbody_0").empty();

    var id="#"+btnObj.attr('id');   
    var value=$(id).closest('tr').children('td:first').text();
    console.log("going to del document with _id is: "+value);
    
    $.ajax({
      url: '/webapi_0/'+value,
      type: 'DELETE',
      success: function(result) {
        console.log("del document success!");
        getalldata(true);
      }

    });


  }

  

  

  function updateRow(btnObj){
    var dataBack, status;
    // console.log(btnObj.attr('id'));
    var id="#"+btnObj.attr('id');
    var IDvalue=$(id).closest('tr').children('td:first').text();
    // console.log(IDvalue);
    SharpIDvalue='#'+IDvalue;
    var titleValue=$(SharpIDvalue).closest('td').next().find('input').val();
    var connectValue=$(SharpIDvalue).closest('td').next().next().find('input').val();
    
    //for debug use only
    // console.log(IDvalue);
    // console.log(titleValue);
    // console.log(connectValue);

    let PatchRequest = () => {
      // sending PUT request with fetch API in javascript
      fetch("/webapi_0/"+IDvalue, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "PATCH",    

        // Fields that to be updated are passed
        body: JSON.stringify({
          title: titleValue,
          connect: connectValue
        })
      })
      .then(function (response) {
        getalldata(true,);  
        console.log(response);
        // return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    };

    PatchRequest();
    
  }

  module.exports=getalldata;
  // module.exports=successCallBack4getAll;