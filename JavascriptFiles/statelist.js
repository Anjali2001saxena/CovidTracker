const api_url = "http://covid19-india-adhikansh.herokuapp.com/states";

async function getapi(url){

    const response = await fetch(url);
    var data = await response.json();
    console.log(data.state[0].name);
    show(data);

}

getapi(api_url);

function show(data){
    let tab = 
            `<tr>
               <th>STATE</th>
               <th>TOTAL CASES</th>
               <th>ACTIVE CASES</th>
               <th>RECOVERED CASES</th>
               <th>DEATH CASES</th>
            </tr>`;


    var k=0;        
    for(let i of data.state){
        tab += `<tr>
        <th>${data.state[k].name}</th>
        <th>${data.state[k].total}</th>
        <th>${data.state[k].active}</th>
        <th>${data.state[k].cured}</th>
        <th>${data.state[k].death}</th>
        </tr>`;
        k++;
    }
    
    document.getElementById("covid_states").innerHTML = tab;
}