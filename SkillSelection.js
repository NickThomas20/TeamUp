/**
 * This function allows select multiples to show and hide when user has selected front or backend
 */
function showHide(){
var select_value = document.getElementById("choose_type").value;
var frontend_select = document.getElementById("frontend_selection");
var backend_select = document.getElementById("backend_selection");

    if(select_value === "Frontend"){
        frontend_select.style.display = "block";
        backend_select.style.display = "none";
        console.log("were in the front end");//testing purpose
    }else if( select_value === "Backend"){
        console.log("were in the back end");//testing purpose
        frontend_select.style.display = "none";
        backend_select.style.display = "block";
    }
}