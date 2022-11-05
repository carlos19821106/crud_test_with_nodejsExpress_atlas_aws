  const $=require('jquery'); 
  const getalldata=require('./DbAndDom_manipulate.js');
  
  // var successCallBack=reponse=>{
  //   $("#attribute").textContent=reponse.connect;
  //   $("#name").textContent=reponse.title;
  // };

  $("#button").click(()=>{
    getalldata(true,successCallBack4getAll);  
  });

  