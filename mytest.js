var outsideclick = function (e) {
    var contianer=document.querySelector(".customDrp");
    if(!contianer.contains(e.target) && !contianer.classList.contains("active")){
        contianer.classList.remove("active");
        document.removeEventListener('click',outsideclick); 
    }
}
document.addEventListener( 'DOMContentLoaded',function(){
  document.querySelectorAll( '.custmonDropDwon' ).forEach( function( element ) {
    document.addEventListener("click", function (e){
        if(e.classList.contains("crossString") || e.classList.contains("bowiro")){
            return false;
        }
        if (e.target.tagName==="a") {
            return true;
            
        }
        e.preventDefault();
        console.log(e.target);
        if (e.target.classList.contains("language") || e.target.parentElement.classList.contains("language")) {
            languageFunc();
        }

        if (window.matchMedia('(max-width: 1170px)').matches) {
            document.body.style.overflow = 'hidden';
        }
        if (e.target.classList.containes("searchCoinDrp")) {
            document.getElementById('tokensearch1').focus();
        }

        // 
        var customDrp=this.querySelector(".customDrp");
        if (customDrp) {
            customDrp.classList.add("active");
            
        }else{
            customDrp.children.classList.add("active")
        }
        e.stopPropagation();
        document.addEventListener('click',outsideclick);
    });    
    let basic_banner_read_btn=false;
      document.querySelector(".basic_banner_read_btn");
      let basic_banner_text=document.querySelector(".basic_banner_text");
    basic_banner_read_btn.addEventListener("click",function(){
        if (basic_banner_read_btn == false) {
            this.text="Read Less";
            basic_banner_text.classList.Toggle(500);
            basic_banner_read_btn=true;
        }else{
            basic_banner_text.classList.Toggle(500);
            this.text="Read More";
            basic_banner_read_btn=false;
        }
    });
     let filterToggelBtn=document.querySelectorAll(".filterToggelBtn");
     filterToggelBtn.addEventListener("click", function(){
        filterToggelBtn.classList.Toggle("active");
     });
     let hideCustomDrp=document.querySelector(".hideCustomDrp");
     hideCustomDrp.addEventListener("click", function(){
        document.querySelector(".customDrp").classList.remove("active");
     });
     document.querySelector(".closeIcon").addEventListener("click" , function(){
        document.querySelector(".customPopup").classList.remove("active");
        document.querySelector(".commonPopup").classList.remove("active");
         if (!document.querySelector(".headerMain").classList.contains("active")) {
             document.body.style.overflow = 'auto';
         }
     });
     document.querySelector(".mainTable").addEventListener("scroll", function(e){
        let isScroll=e.currentTarget.scrollLeft;
        if(isScroll){
            document.querySelector(".ListingTable th:nth-child(3), td:nth-child(3)").classList.add("before");

        }else{
            document.querySelector(".ListingTable th:nth-child(3), td:nth-child(3)").classList.remove("before");   
        }

     })
     
  })
})
