$('#denglu').click(function(){

        if($('#Phone').val()==""){
            alert("请输入手机号");
        }else if($('#psw').val()==""){
            alert("请输入密码");
        }else{
            $.ajax({
                "url":"LoginPhoPsw",
                "mothed":"GET",
                "data":{"Phone":$('#Phone').val(),"Psw":$('#psw').val()},
                "dataType":"json",
                "success":function (result) {
                    $('#msg').html(result.content);
                    if($('#msg').text()!="手机号或密码输入错误!"){
                        location.href="ShowPhone?Phone="+$('#Phone').val();
                    }
                }
            })

        }
    })