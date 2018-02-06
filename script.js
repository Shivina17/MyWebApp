/**
 * Created by shivinasethia on 30/01/2018.
 */
const d3 = require('d3');

//d3.csv("https://gist.githubusercontent.com/GerardoFurtado/2e9f269f7a0f56cf7e23b480afcf280a/raw/5e361753a695534915e81786013976aa94685695/csvfile.csv", function(error, data) {
//    console.log(data)
//});


//d3.csv("data.csv",function(data){
//    console.log(data);
//},function(error, rows){
//    console.log(rows);
//});
var jsdom;
try {
    jsdom = require("jsdom/lib/old-api.js"); // jsdom >= 10.x
} catch (e) {
    jsdom = require("jsdom"); // jsdom <= 9.x
}



jsdom.env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);
    $(function() {
        $('button').click(function() {
            var user = $('#txtUsername').val();
            var pass = $('#txtPassword').val();
            $.ajax({
                url: '/signUpUser',
                data: $('form').serialize(),
                type: 'POST',
                success: function(response) {
                    console.log(response);
                },
                error: function(error) {
                    console.log(error);
                }
            });
        });
    });
});


//function do_some_ajax(){
//    $.ajax({
//        url     : 'ajax_view',
//        type    : 'POST',
//        dataType: 'json',
//        success : function(data){
//            alert("Success. Got the message:\n "+ data.message)
//        }
//    });
//}

//do_some_ajax();
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var xhr = new XMLHttpRequest();
//console.log("open")
//xhr.open("GET", "./python.py", true);
//console.log("open")
//xhr.onload = function(e) {
//    console.log(e)
//}
//xhr.send();