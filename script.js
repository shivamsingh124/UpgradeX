let ticketsContainer = document.querySelector(".sidebar");
ticketsContainer.addEventListener("mouseover" , function(e){
    console.log("half");
    let ticketModal = document.createElement("div");
    ticketModal.classList.add("card1");
    ticketModal.innerHTML = `<img src="./images/projectCovers/portfolio.png" alt="Portfolio" style="width:100%">
    <div class="containerport">
      <h4 class="margin"><b>Shivam Singh</b></h4> 
      <p class="margin">Portfolio Netlify Click Bell Icon..</p> 
    </div>
  `;
    document.querySelector("body").append(ticketModal);
});

ticketsContainer.addEventListener("mouseout" , function(e){
    console.log("full");
    document.querySelector(".card1").remove();

});



let stamp = document.querySelector(".stamp");
stamp.addEventListener("click" , function(e){
    // console.log(window.innerHeight);
    //  window.innerHeight += 100 ;
    //  document.body.scrollTop = 0; // For Safari
    //  document.documentElement.scrollTop = 0;
    // console.log(window.innerHeight);
    // let widths=window.innerHeight;
    window.scrollBy(0, 50);
});


function autoScrolling() {
    // window.scrollTo(0,document.body.scrollHeight);
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }