//global var for loop
var dayEl = [
    {
        id: "0",
        hour: "09",
        time: "am",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
]
// - Display current time using Moment.js
currentTime();

function currentTime() {
    var currentTime = moment().format("dddd MMMM Do");
    $("#currentDay").text(currentTime);
}
// - Click event to save text area content to Local Storage

//save data to localStorage
function saveInfo(){
    localStorage.setItem("dayEl", JSON.stringify(dayEl));
}

//sets data in the store to the text box
function displayInfo(){
    dayEl.forEach(function (currentHour) {
        $("#currentHour").val(currentHour.reminder);
    })
}

//set local storage to view
function init(){
    var stored = JSON.parse(localStorage.getItem("dayEl"));

    if (stored) {
        dayEl = stored;
    }
    saveInfo();
    displayInfo();
}
// - Change time block background color depending in the current hour (past, present and future).
dayEl.forEach(function(currentHour){
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);
     // creates time field
     var hourField = $("<div>")
     .text(`${currentHour.hour}${currentHour.meridiem}`)
     .attr({
         "class": "col-md-1 hour"
 });

 // creates plan data
 var hourPlan = $("<textarea>")
     .attr({
         "class": "col-md-10 description p-0"
     });
 var planData = $("<textarea>");
 hourPlan.append(planData);
 planData.attr("id", currentHour.id);
 if (currentHour.time < moment().format("HH")) {
     planData.attr ({
         "class": "past", 
     })
 } else if (currentHour.time === moment().format("HH")) {
     planData.attr({
         "class": "present"
     })
 } else if (currentHour.time > moment().format("HH")) {
     planData.attr({
         "class": "future"
     })
 }

 // creates the save button
 var saveButton = $("<i class='far fa-save fa-lg'></i>")
 var savePlan = $("<button>")
     .attr({
         "class": "col-md-1 saveBtn"
 });
 savePlan.append(saveButton);
 hourRow.append(hourField, hourPlan, savePlan);
})

// loads any existing localstorage data after components created
init();


// saves data to be used in localStorage
$(".saveBtn").on("click", function(event) {
 event.preventDefault();
 var saveIndex = $(this).siblings(".description").children(".future").attr("id");
 dayEl[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
 console.log(saveIndex);
 saveInfo();
 displayInfo();
})