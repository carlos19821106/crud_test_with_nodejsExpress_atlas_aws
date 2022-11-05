const $=require('jquery');
var jQuery=$;

(function($){
$.ajax = function(params){
  if(params.url === "/webapi_0"){
    var fakeResponse={dataBack:
    [{_id:"1",title:"jest", connect:"test4jest"},
    {_id:"2",title:"jest1", connect:"test4jest1"}],
    status:"sucecess"};
    // console.log(fakeResponse);
    params.success(fakeResponse.dataBack,fakeResponse.status); //return the data you need
    
  }
};})(jQuery);



test('test manipulate the dom', () => {
  // 設定 document body
  document.body.innerHTML = `
  <button id="button">forTest</button>
  <div align="center" valign="center">
    <table id="table_0" border="1pt">
      <thead>
        <tr>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              name
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              attribute&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              刪除&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              修改&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </th>
        </tr>
      </thead>
      <tbody id="tbody_0">

      </tbody>
    </table>
  </div>`;

  var successCallBack4getAll=(dataBack,status)=>
  {
    
      console.log(dataBack);
      console.log(status);
      
      var lineNo=0;

      dataBack.forEach(element => {
        
        id=element._id; name_1=element.title; attribute=element.connect;

        lineContent="<tr><td id="+id+">"+id+"</td><td><input type='text' value='"+name_1+"''>"+
          "</td><td><input type='text' value='"+attribute+"'></td>";
        var markup = lineContent + "<td>"+"<button id=b"+lineNo+"_del onclick=delRow($(this))>Delete</button>"+
        "</td><td>"+"<button id=b"+lineNo+"_update onclick=updateRow($(this))>Update</button></td></tr>";
        
        var tableBody = $("#tbody_0");
        tableBody.append(markup);
        lineNo++;
      });
    
  }

  

  const getalldata = require('../func_js_need_test/DbAndDom_manipulate');
  var elem = document.getElementById('button');
  elem.addEventListener("click",()=>
  {
    getalldata(true, successCallBack4getAll);  
    elem.textContent="button clicked";
  });
      
  console.log(document.body.innerHTML);

  elem.click();


  console.log(document.body.innerHTML);

  
//   expect(addRow).toBeCalled();
//   expect($('#name').text()).toEqual('Titan');
//   expect($('#attribute').text()).toEqual('att4test');

});




