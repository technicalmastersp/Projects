// ========================================  Start JavaScript Code  =================================================


// ----------------------------------------  For Generate a Random Number  ----------------------------------------

function per(){
    let a = "";
    a = Math.floor(Math.random()*100);
    return a;
}


// ----------------------------------------  For create a message on random no. ----------------------------------------

function sp(){
    const num = per()
    if(num >= 0 && num <= 12){
        document.write("Good ", num , " (num >= 0 && num <= 12)")
    }else{
        if(num >= 13 && num <= 29){
            document.write("Nice ", num , " (num >= 13 && num <= 29")
        } else{
            if(num >= 30 && num <= 46){
                document.write("Wow a good Connection ", num , " (num >= 30 && num <= 46)")
            } else{
                if(num >= 47 && num <= 73){
                    document.write("Best Forewer ", num , " (num >= 47 && num <= 73)")
                } else{
                    if(num >= 74 && num <= 91){
                        document.write("Wonderfull Mach ", num , " (num >= 74 && num <= 91)")
                    } else{
                        if(num >= 92 && num <= 100){
                            document.write("💞❣️❤️ You Both are like a Soulmet ❤️❣️💞 ", num , " (num >= 92 && num <= 100)")
                        }
                    }
                }
            }
        }
    }



    // if(num >= 0 && num <= 12){
    //     document.getElementById('randomNo').value = '("Good ", num , " (num >= 0 && num <= 12)")'
    // }else{
    //     if(num >= 13 && num <= 29){
    //         document.getElementById('randomNo').value = '("Nice ", num , " (num >= 13 && num <= 29")'
    //     } else{
    //         if(num >= 30 && num <= 46){
    //             document.getElementById('randomNo').value = '("Wow a good Connection ", num , " (num >= 30 && num <= 46)")'
    //         } else{
    //             if(num >= 47 && num <= 73){
    //                 document.getElementById('randomNo').value = '("Best Forewer ", num , " (num >= 47 && num <= 73)")'
    //             } else{
    //                 if(num >= 74 && num <= 91){
    //                     document.getElementById('randomNo').value = '("Wonderfull Mach ", num , " (num >= 74 && num <= 91)")'
    //                 } else{
    //                     if(num >= 92 && num <= 100){
    //                         document.getElementById('randomNo').value = '("💞❣️❤️ You Both are like a Soulmet ❤️❣️💞 ", num , " (num >= 92 && num <= 100)")'
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
}