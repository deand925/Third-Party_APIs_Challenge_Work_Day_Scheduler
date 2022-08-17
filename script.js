const dateTime = $('#currentDay').text(moment().format('dddd, MMMM Do YYYY, h:mm a'));

// add time and date to top of the page with moment.js
const localStorageKey = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
let valueArr = [];
let keyArr = [];
let currentTime = moment().format('HH'); 
let currentDate = moment().format('DD');


if(localStorage.getItem('current-date')){
    let temp = localStorage.getItem('current-date');
    if(currentDate > temp){
        localStorage.clear();
    }
}


localStorage.setItem('current-date', currentDate);

// save text to local storage
$('.saveBtn').on('click', function(event){
    let textInput = $(this).siblings('textarea').val();
    // retrieving the id of the button clicked
    let inputId = $(this).attr('id')
    //  saving key and value to local storage
    localStorage.setItem(inputId, textInput);
    })

    // start of getStored function to retrieve past events saved to local storage 
function getStored(){
    // creating a for loop 
    for(let i = 0; i < localStorageKey.length; i++){
        // checking if there is anything saved to local storage
        if(localStorage.getItem(localStorageKey[i])){
            // if something is saved to local storage push the key to the keyArr
            keyArr.push(localStorageKey[i]);
            // if something is saved to local storage push the value to the valueArr
            valueArr.push(localStorage.getItem(localStorageKey[i]));
            console.log((localStorage.getItem(localStorageKey[i])))
        }
    }

    // start of getStored function to retrieve past events saved to local storage 
function getStored(){
    // creating a for loop 
    for(let i = 0; i < localStorageKey.length; i++){
        // checking if there is anything saved to local storage
        if(localStorage.getItem(localStorageKey[i])){
            // if something is saved to local storage push the key to the keyArr
            keyArr.push(localStorageKey[i]);
            // if something is saved to local storage push the value to the valueArr
            valueArr.push(localStorage.getItem(localStorageKey[i]));
            console.log((localStorage.getItem(localStorageKey[i])))
        }
    }