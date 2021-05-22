function convertStringToHTML(selector, element) {
  $(document).ready(function () {
    //Need to check if the element is there
    var el = $(selector);
    el.html(element);
  });
}
