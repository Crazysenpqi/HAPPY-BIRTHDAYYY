$(document).ready(function() {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");
        var birthdayButton = $('<a class="itlog" id="link" href="https://crazysenpqi.github.io/Birthday-mo-/">CLICK ME TASHY</a>'); 

        flame.on({
            click: function () {
                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();
                txt.hide().html("It will come true🤗");

                // Style the link
                birthdayButton.css({
                    "color": "white", 
                    "font-size": "14px", 
                    "display": "block", 
                    "text-align": "center", 
                    "font-weight": "100", 
                    "font-family": "Cursive", 
                    "letter-spacing": "0.1em", 
                    "text-shadow": "0 0 20 px black", 
                    "opacity": "0.8"
                });

                // Append the link at the bottom of the h1
                txt.append(birthdayButton); 

                // Fade in the text and the link together
                txt.delay(750).fadeIn(300);
                birthdayButton.delay(750).fadeIn(300); 

                $("#candle").animate(
                    {
                        opacity: ".5"
                    },
                    100
                );
            }
        });
    });
});
