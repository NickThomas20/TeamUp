window.onload = function () {
    //start at the bottom "slide" on window load
    var height = $("#vf").height();

    var totalHeight = $(".view .frame").length * height;

    //set to last slide position
    $(".view > div").animate({ top: -(totalHeight - height) }, 0);
}

function scrollFrame() {
    //get current position in the "slides"
    var height = $("#vf").height();

    var y = parseFloat($(".view > div").css("top"));

    var totalHeight = $(".view .frame").length * height;

    //if at the top, go back to the bottom
    if (y == 0) {
        $(".view > div").animate({ top: -(totalHeight - height) });
    } else {
        //otherwise go to the next frame
        $(".view > div").animate({ top: y + height }, 300);
    }
}

function reverseScrollFrame() {
    //get current position in the "slides"
    var height = $("#vf").height();

    var y = parseFloat($(".view > div").css("top"));

    var totalHeight = $(".view .frame").length * height;

    //if at the bottom, go back to the top
    if (y == -(totalHeight - height)) {
        $(".view > div").animate({ top: 0 });
    } else {
        //otherwise go to the next frame
        $(".view > div").animate({ top: y - height }, 300);
    }
}