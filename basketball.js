let v = document.getElementById("value-1")
let m = document.getElementById("value-2")

let count1 = 0
let count2 = 0
function one() {
    count1 +=1
     v.textContent = count1
}



function two() {
    count1 +=2 
    v.textContent = count1
}


function three() {
    count1 +=3 
    v.textContent = count1


}

// 2nd 
function one1() {
 
    count2 +=1
    m.textContent= count2 
 
}



function two2() {
 
    count2 +=2
    m.textContent= count2 
 }


function three3() {
 
    count2 +=3
    m.textContent= count2 
 

}

let s = document.getElementById("saver")
let s1 = document.getElementById("saver1")
function save()
{
    s.textContent += count1 +  " - "
    s1.textContent += count2 + " - "
}


let r = document.getElementById("value-1")
let r1 = document.getElementById("value-2")

function reset(){
    count1 = 0
    count2 = 0
    r.textContent = count1
    r1.textContent = count2
}
