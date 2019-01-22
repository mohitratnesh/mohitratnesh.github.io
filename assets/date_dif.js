today = new Date()
                    past = new Date(2017,11,16) // remember this is equivalent to 16 12 2017
                    //dates in js are counted from 0, so 11 is December
                    
                    function calcDate(date1,date2) {
                        var diff = Math.floor(date1.getTime() - date2.getTime());
                        var day = 1000 * 60 * 60 * 24;
                    
                        var days = Math.floor(diff/day);
                        var months = Math.floor(days/30);
                        var years = Math.abs(months/12);
                    
                        var message = "Joined on "+date2.toDateString() +" to Present ";
                        message += " is "
                        //message += days + " days " 
                        message += months + " months or "
                        message += Math.round(years*100)/100 + " years \n"
                    
                        return message
                        }
                    
                    
                    a = calcDate(today,past)
                    console.log(a)
                    document.getElementById("exp").innerHTML = a;