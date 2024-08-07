// ========================================  Start JavaScript Code  =================================================


// ----------------------------------------  For Generate a Random Number  ----------------------------------------

function per(){
    let a = "";
    a = Math.floor(Math.random()*100);
    return a;
}
const num = per();  // Only one time call random no.


// ----------------------------------------  For sent our random no. to html page  ----------------------------------------

document.getElementById('perBox').innerText = `💞 Love : ${num} % 💞`;


// ----------------------------------------  For create a message on random no.  ----------------------------------------

function sp(){
    if(num >= 0 && num <= 12){
        return document.getElementById('randomNo').innerText = 'Good';
    }else{
        if(num >= 13 && num <= 29){
            return document.getElementById('randomNo').innerText = 'Nice';
        } else{
            if(num >= 30 && num <= 46){
                return document.getElementById('randomNo').innerText = 'Wow a good Connection';
            } else{
                if(num >= 47 && num <= 73){
                    return document.getElementById('randomNo').innerText = 'Best Forewer';
                } else{
                    if(num >= 74 && num <= 91){
                        return document.getElementById('randomNo').innerText = 'Wonderfull Mach';
                    } else{
                        if(num >= 92 && num <= 100){
                            return document.getElementById('randomNo').innerText = '💞❣️❤️ You Both are like a Soulmet ❤️❣️💞';
                        }
                    }
                }
            }
        }
    }
}

document.getElementById('randomNo').innerText = `💞 ${sp()} 💞`;


// ----------------------------------------  For change photo on every message on random no.  ----------------------------------------

let img = document.createElement('img');

function changeImg(){
    if(num >= 0 && num <= 12){
        return img.src = '../Assets/image/GIF/1.gif';
    }else{
        if(num >= 13 && num <= 29){
            return img.src = '../Assets/image/gif/2.gif';
        } else{
            if(num >= 30 && num <= 46){
                return img.src = '../Assets/image/gif/7.gif';        // 3
            } else{
                if(num >= 47 && num <= 73){
                    return img.src = '../Assets/image/gif/4.gif';
                } else{
                    if(num >= 74 && num <= 91){
                        return img.src = '../Assets/image/gif/2.gif';    // 5, 8
                    } else{
                        if(num >= 92 && num <= 100){
                            return img.src = '../Assets/image/gif/6.gif';
                        }
                    }
                }
            }
        }
    }
}

img.src = changeImg();
img.height = 350;

const div = document.getElementById('image')
div.appendChild(img)


// ========================================  End JavaScript Code  =================================================