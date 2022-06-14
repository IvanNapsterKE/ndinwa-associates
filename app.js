function renderTime(){
    
        //DATE

    var mydate = new Date();
    var year = mydate.getYear();
        if(year < 1000){
            year+=1900
        }
    var date = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var montharray = new Array("Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec");

        // DATE END
 
        // TIME
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h==24){
            h = 0;
        } else if(h > 12){
            h = h - 0;
        }if(h < 10){
            h = "0" + h;
        }

        
        
        
        
        
        // TIME END

}