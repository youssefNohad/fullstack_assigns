

var q=["Be yourself; everyone else is already taken.","So many books, so little time.","You know you're in love when you can't fall asleep because reality is finally better than your dreams.”","You only live once, but if you do it right, once is enough"]

function display(){
   
var index=Math.floor(Math.random()*q.length)    

document.getElementById("qoute").innerHTML=q[index]
}

