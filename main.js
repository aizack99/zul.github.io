const api = {
    key: "ebcc12395de340b58909b72d0397194c",
    base:"https://timezone.abstractapi.com/v1/current_time/?api_key="
}
getResults2();
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function getResults2(){
    fetch(`${api.base}${api.key}&location=${"pekan"}`)
    .then(mytimezone => {
        return mytimezone.json();
    }).then(displayResults);
}

function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.base}${api.key}&location=${query}`)
    .then(mytimezone => {
        return mytimezone.json();
    }).then(displayResults);
}

function displayResults(mytimezone){
    let get_datetime = mytimezone.datetime;
    const array_datetime = get_datetime.split(" ");
    let mydate = document.querySelector('#mydate');
    let mytime = document.querySelector('#mytime');
    mytime.innerText = `Time: ${array_datetime[1]}`;
    mydate.innerText = `Date: ${array_datetime[0]}`;

    let timezonename = document.querySelector('#timezone-name');
    timezonename.innerText = `Timezone Name: ${mytimezone.timezone_name}`;

    let timezonelocation = document.querySelector('#timezone-location');
    timezonelocation.innerText = `Timezone Location: ${mytimezone.timezone_location}`;

    let timezoneabbreviation = document.querySelector('#timezone-abbreviation');
    timezoneabbreviation.innerText = `Timezone Abbreviation: ${mytimezone.timezone_abbreviation}`;

    let gmtoffset = document.querySelector('#gmt-offset');
    gmtoffset.innerText = `GMT Offset: ${mytimezone.gmt_offset}`;

    let latitude = document.querySelector('#latitude');
    latitude.innerText = `Latitude: ${mytimezone.latitude}`;

    let longitude = document.querySelector('#longitude');
    longitude.innerText = `Longitude: ${mytimezone.longitude}`;
}