var schedule = JSON.parse(localStorage.getItem("schedule"));
console.log(schedule);
if (schedule === null) {
  schedule = {
    lockState: [
      "unlocked",
      "unlocked",
      "unlocked",
      "unlocked",
      "unlocked",
      "unlocked",
      "unlocked",
      "unlocked",
      "unlocked"
    ],
    scheduleTask: [, , , , , , , , , ],
    timeSlot: ["am9", "am10", "am11", "pm12", "pm1", "pm2", "pm3", "pm4", "pm5"]
  };
}

function setDate() {
  $("#date").text(moment().format('dddd, MMMM Do YYYY'));
}
setDate();
for (i = 0; i < schedule.timeSlot.length; i++) {
  var id = "#" + schedule.timeSlot[i];
  var id2 = "#lock-" + i;
  var task = schedule.scheduleTask[i];
  var lock = schedule.lockState[i];
  $(id).text(task);
  $(id2).attr("data-lock", lock);
  if (lock === "locked") {
    $(id).attr("disabled", "disabled");
    $(id2).html("<i class='fas fa-lock    '></i>");
  }
}
$(".lock").on("click", function () {
  var lock = $(this).attr("data-lock");
  var index = $(this).attr("data-index");
  var id = "#" + schedule.timeSlot[index];
  var text = $(id).val();

  if (lock === "locked") {
    $(this).html("<i class='fas fa-unlock    '></i>");
    $(this).attr("data-lock", "unlocked");
    schedule.lockState[index] = "unlocked";
    $(id).removeAttr("disabled");
    schedule.scheduleTask[index] = null;
  } else {
    $(this).html("<i class='fas fa-lock    '></i>");
    $(this).attr("data-lock", "locked");
    schedule.lockState[index] = "locked";
    $(id).attr("disabled", "disabled");
    schedule.scheduleTask[index] = text;
  }

  localStorage.setItem("schedule", JSON.stringify(schedule));
});

function setBackground() {
  var hourNow = parseInt(moment().format('HH'));
  for (i = 0; i < schedule.timeSlot.length; i++) {
    var id = "#" + schedule.timeSlot[i];
    var id2 = "#input-" + i;
    if (hourNow === i + 9) {
      $(id).attr("class", "bg-danger");
      $(id2).attr("class", "bg-danger");
    } else if (hourNow > i + 9) {
      $(id).attr("class", "bg-secondary");
      $(id2).attr("class", "bg-secondary");
    } else {
      $(id).attr("class", "bg-success");
      $(id2).attr("class", "bg-success");
    }
  }
}

setBackground();
setInterval(setDate(), 60000);
setInterval(setBackground(), 1000)