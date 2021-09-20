<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
function display_message(i){
    switch (i){
    case 0:
        $(".message").html("Tourisme interne");
        break;
    case 1:
        $(".message").html("VISA d'études");
        break;
    case 2:
        $(".message").html("Hadj & Omrah");
        break;
    case 3:
        $(".message").html("Réservation d'hotel");
        break;
    case 4:
        $(".message").html("Visa touristique");
        break;
    case 5:
        $(".message").html("Renouvlement VISA");
        break;
    case 6:
        $(".message").html("Voyages organisés");
        break;
}
}

function showslides(){

    if (i>=images_list.length-1){
    i=0;
    }else{
        i+=1;
    }
    if (j>=images_list.length-1){
        j=0;
    }else{
        j+=1;
    }
    if (k>=images_list.length-1){
        k=0;
    }else{
        k+=1; 
    }  
    display_message();
    $("#prev-img").attr("src",images_list[j]);
    $("#current-img").attr("src",images_list[i]);
    $("#next-img").attr("src",images_list[k]);

    $("#sd-before").removeClass("slide-prev");
    $("#current").removeClass("slide-current");
    $("#sd-next").removeClass("slide-next");
    setTimeout(function(){
        $("#sd-before").addClass("slide-prev");
        $("#current").addClass("slide-current");
        $("#sd-next").addClass("slide-next");
    }, 10);
  
    setTimeout(showslides, 5000);
}