$(function(){
    $(".del").click(del);
    $(".add").click(add);
    $(".rese").click(rese);
    $(".update").click(update);
});



function del(){
        $('#mytable').on('click', ".del", function(){
        $(this).closest ('tr').remove ();
        });
}

function add(){
    var name=$("#name").val();
    var gender=$("input[name='val']:checked").val();
    var age=$("#age").val();
    var city=$("#city").val();


    if(name!=null && gender!=null && age!=null && city!=null)
    {
        $("#mytable").append("<tr>"+"<td class='name'>"+name+"</td>"+"<td class='gender'>"+gender+"</td>"+"<td class='age'>"+age+"</td>"+"<td class='city'>"+city+"</td>"+"<td>"+'<button type="button" class="btn btn-warning update">Update</button> <button type="button" class="btn btn-danger del">Delete</button>'+"</td>"+"</tr>");
        
        $("#mytable").on('click',".del", function(){
            
            $(this).closest ('tr').remove ();
        });

        $("#mytable").on("click",".update",function(){
            var name=$(this).closest ('tr').find(".name").text();
            var age=$(this).closest ('tr').find(".age").text();
            var city=$(this).closest ('tr').find(".city").text();
            var gender=$(this).closest ('tr').find(".gender").text();
                $(this).closest ('tr').remove ();
                $("#name").val(name);
                $("#age").val(age);
                $("#city").val(city);
                $("input[name=val][value=" + gender + "]").prop('checked', true); 

        });

        
    }
    else{
        alert("Please fill whole form to add data");
    }
}

function rese(){   
    $("#name").val("");
    $("input[name='val']").prop("checked",false);
    $("#age").val("");
    $("#city").val("");
}

function update(){
    var name=$(this).closest ('tr').find(".name").text();
    var age=$(this).closest ('tr').find(".age").text();
    var city=$(this).closest ('tr').find(".city").text();
    var gender=$(this).closest ('tr').find(".gender").text();

        $(this).closest ('tr').remove ();
        $("#name").val(name);
        $("#age").val(age);
        $("#city").val(city);
        $("input[name=val][value=" + gender + "]").prop('checked', true);  
}

