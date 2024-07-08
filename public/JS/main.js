let a = document.querySelector("#a")
let b = document.querySelector("#b")
let c = document.querySelector("#c")
let d = document.querySelector("#d")
let e = document.querySelector("#e")
let f = document.querySelector("#f")
let g = document.querySelector("#g")
let h = document.querySelector("#h")
let i = document.querySelector("#i")
let j = document.querySelector("#j")
let k = document.querySelector("#k")
let l = document.querySelector("#l")
let form1 = document.querySelector("#checkform1")
let form2 = document.querySelector("#checkform2")
let form3 = document.querySelector("#checkform3")
let form4 = document.querySelector("#checkform4")
let form5 = document.querySelector("#checkform5")
let form6 = document.querySelector("#checkform6")
let form7 = document.querySelector("#checkform7")
let form8 = document.querySelector("#checkform8")
let form9 = document.querySelector("#checkform9")
let form10 = document.querySelector("#checkform10")
let form11 = document.querySelector("#checkform11")
let form12 = document.querySelector("#checkform12")
let id = document.querySelector("#id").innerText
if(!a){
    console.log("null")
}else{
    a.addEventListener("click", ()=>{
        
        if(a.checked == true){
            a.value = 'true'
        }
        if(a.checked == false){
            a.value = 'false'
        }
        let av = a.value
        form1.action = '/check/0/'+id+'/'+av
        form1.submit()
        console.log(a.value)
    })
}
if(!b){
    console.log("null")
}else{
    b.addEventListener("click", ()=>{
        if(b.checked == true){
            b.value = 'true'
        }
        if(b.checked == false){
            b.value = 'false'
        }
        let av = b.value
        form2.action = '/check/1/'+id+'/'+av
        form2.submit()
        console.log(b.value)
    })
}
if(!c){
    console.log("null")
}else{
    c.addEventListener("click", ()=>{
        if(c.checked == true){
            c.value = 'true'
        }
        if(c.checked == false){
            c.value = 'false'
        }let av = c.value
        form3.action = '/check/2/'+id+'/'+av
        form3.submit()
        console.log(c.value)
    })
}
if(!d){
    console.log("null")
}else{
    d.addEventListener("click", ()=>{
        if(d.checked == true){
            d.value = 'true'
        }
        if(d.checked == false){
            d.value = 'false'
        }let av = d.value
        form4.action = '/check/3/'+id+'/'+av
        form4.submit()
        console.log(d.value)
    })
}
if(!e){
    console.log("null")
}else{
    e.addEventListener("click", ()=>{
        if(e.checked == true){
            e.value = 'true'
        }
        if(e.checked == false){
            e.value = 'false'
        }
        form5.action = '/check/4/'+id+'/'+e.value
        form5.submit()
        console.log(e.value)
    })
}
if(!f){
    console.log("null")
}else{
    f.addEventListener("click", ()=>{
        if(f.checked == true){
            f.value = 'true'
        }
        if(f.checked == false){
            f.value = 'false'
        }
        form6.action = '/check/5/'+id+'/'+f.value
        form6.submit()
        console.log(f.value)
    })
}
if(!g){
    console.log("null")
}else{
    g.addEventListener("click", ()=>{
        if(g.checked == true){
            g.value = 'true'
        }
        if(g.checked == false){
            g.value = 'false'
        }
        form7.action = '/check/6/'+id+'/'+g.value
        form7.submit()
        console.log(g.value)
    })
}
if(!h){
    console.log("null")
}else{
    h.addEventListener("click", ()=>{
        if(h.checked == true){
            h.value = 'true'
        }
        if(h.checked == false){
            h.value = 'false'
        }
        form8.action = '/check/7/'+id+'/'+h.value
        form8.submit()
        console.log(h.value)
    })
    
}
if(!i){
    console.log("null")
}else{
    i.addEventListener("click", ()=>{
        if(i.checked == true){
            i.value = 'true'
        }
        if(i.checked == false){
            i.value = 'false'
        }
        form9.action = '/check/8/'+id+'/'+i.value
        form9.submit()
        console.log(i.value)
    })
    
}
if(!j){
    console.log("null")
}else{
    j.addEventListener("click", ()=>{
        if(j.checked == true){
            j.value = 'true'
        }
        if(j.checked == false){
            j.value = 'false'
        }
        form10.action = '/check/9/'+id+'/'+j.value
        form10.submit()
        console.log(j.value)
    })
}
if(!k){
    console.log("null")
}else{
    
k.addEventListener("click", ()=>{
    if(k.checked == true){
        k.value = 'true'
    }
    if(k.checked == false){
        k.value = 'false'
    }
    form11.action = '/check/10/'+id+'/'+k.value
    form11.submit()
    console.log(k.value)
})
}
if(!l){
    console.log("null")
}else{
    l.addEventListener("click", ()=>{
        if(l.checked == true){
            l.value = 'true'
        }
        if(l.checked == false){
            l.value = 'false'
        }
        form12.action = '/check/11/'+id+'/'+l.value
        form12.submit()
        console.log(l.value)
    })
}

