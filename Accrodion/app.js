const openIcon = document.getElementsByClassName("open-icon");
const closeIcon = document.getElementsByClassName("close");
const accordion = document.getElementsByClassName("accordion");

openIcon[0].addEventListener("click", () => {
  accordion[0].style.height = "auto";
  openIcon[0].style.display = "none";
  closeIcon[0].style.display = "inline-block";
});
closeIcon[0].addEventListener("click", () => {
  accordion[0].style.height = "100px";
  openIcon[0].style.display = "block";
  closeIcon[0].style.display = "none";
});

var headers = ["H1", "H2", "H3", "H4", "H5", "H6"];

$(".accordion-5").click(function (e) {
  var target = e.target,
    name = target.nodeName.toUpperCase();

  if ($.inArray(name, headers) > -1) {
    var subItem = $(target).next();

    //slideUp all elements (except target) at current depth or greater
    var depth = $(subItem).parents().length;
    var allAtDepth = $(".accordion-5 p, .accordion-5 div").filter(function () {
      if ($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true;
      }
    });
    $(allAtDepth).slideUp("fast");

    //slideToggle target content and adjust bottom border if necessary
    subItem.slideToggle("fast", function () {
      $(".accordion-5 :visible:last").css("border-radius", "0 0 10px 10px");
    });
    $(target).css({
      "border-bottom-right-radius": "0",
      "border-bottom-left-radius": "0",
    });
  }
});
