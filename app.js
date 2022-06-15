function renderTime(){


        //DATE

        var mydate = new Date();
        var year = mydate.getYear();
            if(year < 1000){
                year+=1900
            }
        var day = mydate.getDay();
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
            if(m < 10){
                m = "0" + m;
            }
            if(s < 10){
                s = "0" + s;
            }
        var myClock = document.getElementById("clockDisplay");
    
        myClock.textContent = "" +dayarray[day]+ " , " + daym + " "+montharray[month] + " " +year+ " | " +h+ ":" +m+ ":" +s;
        myClock.innerText = "" +dayarray[day]+ " , " + daym + " "+montharray[month] + " " +year+ " | " +h+ ":" +m+ ":" +s;
        setTimeout("renderTime()", 1000)


}
renderTime();

       // TIME END

// menu toggle event listener

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener ('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    })

// menu toggle event listener end


// Search bar section
const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchInput = document.querySelector(".search-input input");
const searchIcon = document.querySelector(".search-icon i");

const closeIcon = document.querySelector(".search-input i");

searchIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.add("change");
  searchInputWrapper.classList.add("change");

  setTimeout(() => {
    searchInput.focus();
  }, 1000);
});

closeIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.remove("change");
  searchInputWrapper.classList.remove("change");
});
