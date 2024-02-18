const seatsElements = document.getElementsByClassName('seats');

let totalPrice = 0.00;
let selectedSeats = 0;
let discount=0;

for(const element of seatsElements){
    element.addEventListener("click",function(event){
        if(!event.target.disabled){
            if (selectedSeats === 4) {
                // Remove the event listener from all seats
                seatsElements.forEach(element => {
                    element.removeEventListener("click", seatClickHandler);
                });
                return;
            }
        //add highlighter
        element.classList.remove('bg-[#F7F8F8]');
        element.classList.add('bg-[#1DD100]');
        element.style.color= "#FFF";

        selectedSeats++;

        //seat name
        const seatTitle = element.innerText;

        const li=document.createElement("li");
        li.innerText=seatTitle;
        document.getElementById('seat-name').appendChild(li);

        //seat class type
        const classType = 'Economoy';
        const li2=document.createElement("li");
        li2.innerText= classType;
        document.getElementById('seat-class').appendChild(li2);

        //seat price
        const busFare=document.getElementById('bus-fare').innerText;
        console.log(busFare);
        const ticketPrice= parseInt(busFare);
        const li3=document.createElement("li");
        li3.innerText= busFare;
        document.getElementById('seat-price').appendChild(li3);
        totalPrice += ticketPrice;

        //total price shown
        document.getElementById('total-price').innerText=totalPrice;
        document.getElementById('grand-total').innerText=totalPrice;

        //seats left 
        const seatsLeft = document.getElementById('seats-left').innerText;
        const finalLeft= parseInt(seatsLeft);
        const newSeatLeft =finalLeft -1;
        document.getElementById('seats-left').innerText= newSeatLeft;

        //seat
        const yourSelectedSeat = document.getElementById('seat');
        yourSelectedSeat.innerText=selectedSeats;

        if( selectedSeats === 4){
            document.getElementById('coupon-btn').disabled = false;
            //coupon-1  coupon-2  discount-text discount-price input
            const couponOne = document.getElementById('coupon-1').innerText;
            const couponTwo = document.getElementById('coupon-2').innerText;

            const inputElement = document.getElementById('input');
            const buttonElement = document.getElementById('coupon-btn');

            buttonElement.addEventListener('click', function(event){
                const inputValue = inputElement.value;
                if(inputValue === couponOne)
                {
                    discount = totalPrice * 0.15;
                    let grandtotal= totalPrice-discount;
                    document.getElementById('discount-text').innerText="Discount";
                    document.getElementById('discount-price').innerText= discount;
                    document.getElementById('input-button-section').classList.add('hidden');
                    document.getElementById('grand-total').innerText=grandtotal;
                    numberVarify();
                }
                else if(inputValue === couponTwo){
                    discount = totalPrice * 0.2;
                    let grandtotal= totalPrice-discount;
                    document.getElementById('discount-text').innerText="Discount";
                    document.getElementById('discount-price').innerText= discount;
                    document.getElementById('input-button-section').classList.add('hidden');
                    document.getElementById('grand-total').innerText=grandtotal;
                    numberVarify();
                }
                else{
                    alert("please give the correct coupon code");
                }
            })
            
        }
        numberVarify();  
        event.target.disabled = true;
    }
 })}