$(document).ready(function() {

    // --------------------------------------------------Home page--------------
    $(".timeline-content").hide();

    // It is used to animate the "..." on the titles' name
    $(".timeline-content-title").append('<span></span>')

    // Hidden object is used to save flags, for when a content is not hidden
    var hidden = {};
    $(".timeline-content-title").on("click",
    { value : hidden },
    function( event ) {
        $(this).toggleClass("selected");
        // Hide or Show content
        $(this).next().slideToggle(200);
        // textYear -> I want to change the attributes of the YearText and Graphic,
        // so the year is used as a name of property in the "hidden" object,
        // it is needed in order to be used as a flag,
        // for when the hidden content is not displayed.
        var textYear = $(this).parent($(".timeline-block")).parent($(".timeline-row"))
        .find($(".timeline-year .text-h2"));
        // Is the <>content</> taken from inside the html.
        var activedContentsInYear = textYear.html();
        // The "activeTitle" property -> It is a flag because,
        // I want to check if the hidden content remains hidden;
        // so if the titles are "active" or "inactive";
        // for that I need unique property names for each contents' title;
        // the only solution was to create the name combining the "Year" the content belongs
        // and the "index" of the title.
        var activeTitle = textYear.html() + $(this).index();
        // The "activedContentsInYear" is used to count how many timeline-content elements are not hidden;
        // when "activedContentsInYear" = 0 all the timeline-content elements of this year are hidden
        // it is created dynamically and has no number in the beginning;
        //to solve this the 'NaN' becomes '0'.
        isNaN(event.data.value[activedContentsInYear]) ? event.data.value[activedContentsInYear] = 0 : ""
        // Check the timeline-titles if it is actived (that means -> content is not hidden)
        // If it is actived from before -> change its property value to "inactive";
        // then subtract '-1' from the sum "activedContentsInYear";
        if ( event.data.value[activeTitle] === "active" ) {
            event.data.value[activedContentsInYear] -= 1;
            event.data.value[activeTitle] = "inactive";
        }
        // If it is inactive from before -> change its property value to "active";
        // then add '+1' to the sum "activedContentsInYear";
        else {
            event.data.value[activedContentsInYear] += 1;
            event.data.value[activeTitle] = "active";
        }

        // parent('row') -> all elements for a specific year, are inside a big 'row';
        // only the elements in this specific 'row' <-> Year, are modified
        parent = $(this).parent($(".timeline-block")).parent($(".timeline-row"))
        // If there are timeline-content elements activated, add the class "selected";
        // this means that a timeline-title in that Year has been clicked
        if ( event.data.value[activedContentsInYear] !== 0) {
            parent.find($(".timeline-year-graphic")).addClass("selected");
            parent.addClass("activated");
        }
        // else remove this class,
        // so that the "timeline-year-graphic" for this 'row' <-> Year, is at default
        else {
            parent.find($(".timeline-year-graphic")).removeClass("selected");
            parent.removeClass("activated");
        }
    });

    $(".icon-block").hover(
    function () {
        $(this).find($(".icon-title")).toggleClass("hovered");
        $(this).find($(".icon")).toggleClass("hovered");
    });
    // -------------------------------------------End of Home page--------------

});
