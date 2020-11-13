const api_url = "http://covid19-india-adhikansh.herokuapp.com/summary";

async function getapi(url){

    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    show(data);
}
getapi(api_url);

function show(data){

    document.getElementById("total_case").innerHTML = data['Total Cases'];
    document.getElementById("active_case").innerHTML = data['Active cases'];
    document.getElementById("death_case").innerHTML = data.Death;

}