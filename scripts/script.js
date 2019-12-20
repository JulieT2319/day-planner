var schedule = JSON.parse(localStorage.getItem(schedule));

if (schedule === null) {
  schedule = {
    lockState: [
      "open",
      "open",
      "open",
      "open",
      "open",
      "open",
      "open",
      "open",
      "open"
    ],
    scheduleTask: [, , , , , , , , ,]
  };
}
console.log(schedule);
$(".lock").on("click", function() {
  var lock = $(this).attr("data-lock");
  var index = $(this).attr("data-index");

  if (lock === "locked") {
    $(this).html("<i class='fas fa-unlock    '></i>");
    $(this).attr("data-lock", "unlocked");
  } else {
    $(this).html("<i class='fas fa-lock    '></i>");
    $(this).attr("data-lock", "locked");
  }
});
