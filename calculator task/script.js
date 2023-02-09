
        let screen = document.getElementById("output");
        

        function display(num){
            screen.value += num;
        }


       function calculate(){
        try{
            screen.value =eval(screen.value);
        }
        catch(err){
            alert("invalid calucaltion")
        }
       }

       function del(){
        screen.value = screen.value.slice(0,-1);
       }

        