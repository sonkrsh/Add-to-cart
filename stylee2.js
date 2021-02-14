function getcart(){
    var k = event.target
    var j = k.parentElement
    var y = j.getElementsByClassName("otitle")[0].innerHTML
    var ya = j.getElementsByClassName("otitle")[0].innerText
    var y2 = j.getElementsByClassName("odescription")[0].innerHTML
    var y3 = parseFloat( j.getElementsByClassName("price")[0].innerHTML.replace('Rs.',' '))
    
    setcart(y,y2,y3,ya)   
}
function setcart(y,y2,y3,ya){
    var creatediv = document.createElement("div")
   
    creatediv.className="dydiv"
    var append = document.getElementsByClassName("Removetocart")[0]
    var cartItems = document.getElementsByClassName('Removetocart')[0]
    var cartItemNames = cartItems.getElementsByClassName('dtitle')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == ya) {
            alert('This item is already added to the cart')
            return
        }
    }

    var cartrowc = `<div class="Removetocart">
    

    <div class="col-sm-8">
        <div class="cart_row_remove">
                <div class="title">
                  <h2 class="dtitle">${y} </h2>
                </div>

                <div class="description">
                    <p class="ddescription" >${y2}  </p>
                </div>
                <div class="dprice">Rs.${y3}</div>
            </div>
        </div>
            <div class="col-sm-4">
                <button onclick="getcart2()" class="button_danger" style="margin-top:31%" >Remove</button>
                
                
                <div class="result">
    <h2 class="resulto"></h2>
</div>
            
            </div>
            

    </div>`
    

    creatediv.innerHTML=cartrowc
    append.append(creatediv)
     var ko =  event.target
      var kl = ko.parentElement 
      var time = kl.getElementsByClassName("otitle")[0].innerHTML
     
    total(y3)
}

function total(y3,dydiv)
{
    kiu=0
    tolt=document.getElementsByClassName("cart_row_remove")
for(i=0 ;i <tolt.length  ;i++ )
{
    var tu = parseFloat( document.getElementsByClassName("dprice")[i].innerHTML.replace("Rs."," "))
    var kiu = kiu+tu
    var kites = document.getElementsByClassName("resulto")[i].innerHTML=tu
    
}

var kites = document.getElementsByClassName("resulyes")[0].innerHTML="Total: "+kiu
}

function getcart2(){

   var kite =  event.target
   kite.parentElement.parentElement.remove()
    kiu=0
    tolt=document.getElementsByClassName("cart_row_remove")
for(i=0 ;i <tolt.length  ;i++ )
{
    var tu = parseFloat( document.getElementsByClassName("dprice")[i].innerHTML.replace("Rs."," "))
    var kiu = kiu+tu
    var kites = document.getElementsByClassName("resulto")[i].innerHTML=tu
    
}

var kites = document.getElementsByClassName("resulyes")[0].innerHTML="Total: "+kiu
}
