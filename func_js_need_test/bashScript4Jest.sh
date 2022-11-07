#!/bin/bash
filename='Target0.js'
filename_0='Target1.js'


if [ -f "$filename" ]
then
    rm $filename
    touch $filename
else
    touch $filename
fi

echo '  const $ = require('jquery');'>>$filename
cat ../public/javascripts/DbAndDom_manipulate.js >>$filename
echo $'\n\n\n' >>$filename
echo '  module.exports=DbAndDom_Manipulation;'>>$filename

if [ -f "$filename" ]
then
    rm $filename_0
    touch $filename_0
    
else
    touch $filename_0
fi

# echo "const $ = require('jquery');" >> $filename_0
echo "  const $=require('jquery'); const Obj=require('./$filename');" >> $filename_0

echo '  $("#button_addData").click();' >> $filename_0

# add a document to db
#curl -X PATCH http://localhost:3000/webapi_0/635262893b48af04c1dc1a97  -H 'Content-Type: application/json'  -H 'Accept: application/json'  -d '{"title": "curl_test", "connect": "curl_test"}'

exit 0
