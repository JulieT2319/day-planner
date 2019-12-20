var schedule = JSON.parse(localStorage.getItem(schedule));

if (schedule === null) {
  schedule = [];
}

$(".lock").on("click", function() {
  var lock = $(this).attr("data-lock");

  if (lock === "locked") {
    $(this).html("<i class='fas fa-unlock    '></i>");
    $(this).attr("data-lock", "unlocked");
  } else {
    $(this).html("<i class='fas fa-lock    '></i>");
    $(this).attr("data-lock", "locked");
  }
});
