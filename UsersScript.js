$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        var in1=$("#first_name").val();
        var in2=$("#last_name").val();
        var in3=$("#email").val();
        var in4=$("#contact").val();
        console.log(in1,in2,in3,in4);
        $("table").append("<tr><td>"+in1+"</td><td>"+in2+"</td><td>"+in3+"</td><td>"+in4+"</td></tr>");
        // return false;
    });
});