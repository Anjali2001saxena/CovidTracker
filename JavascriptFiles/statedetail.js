var state;
function add(){
    state = document.getElementById("input").value;
    const api_url = `https://covid19-india-adhikansh.herokuapp.com/state/${state}`;
    getapi(api_url);
}

    async function getapi(url){

    const response = await fetch(url);
    var info = await response.json();
    console.log(info);
    show(info);
    }

    function show(info){

        document.getElementById("total_case").innerHTML = info.data[0].total;
        document.getElementById("active_case").innerHTML = info.data[0].active;
        document.getElementById("death_case").innerHTML = info.data[0].death;
    
    }


