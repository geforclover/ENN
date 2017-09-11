$(window).load(function() {
    setTimeout(function() {
        // container is the DOM element;
        // userText is the textbox
        var container1 = $(".swiper-pagination span:nth-child(1)")
        var container2 = $(".swiper-pagination span:nth-child(2)")
        var container3 = $(".swiper-pagination span:nth-child(3)")
        var container4 = $(".swiper-pagination span:nth-child(4)")
        userText = $('#pageNumber');
        // Shuffle the contents of container
        container1.shuffleLetters();
        container2.shuffleLetters();
        container3.shuffleLetters();
        container4.shuffleLetters();
        // Bind events
        userText.click(function() {
            userText.val("");
        }).bind('keypress', function(e) {
            if (e.keyCode == 13) {
                // The return key was pressed
                container1.shuffleLetters({
                    "text": userText.val()
                });
                userText.val("");
            }
        }).hide();

        // Leave a 4 second pause
        // Shuffle the container with custom text
        $(".swiper-pagination span:nth-child(1)").mouseenter(function() {
            container1.shuffleLetters({
                "text": "新奥能源"
            });
            userText.val("新奥能源").fadeIn();
        });

        $(".swiper-pagination span:nth-child(2)").mouseenter(function() {
            container2.shuffleLetters({
                "text": "LNG交易"
            });
            userText.val("LNG交易").fadeIn();
        });

        $(".swiper-pagination span:nth-child(3)").mouseenter(function() {
            container3.shuffleLetters({
                "text": "新奥股份"
            });
            userText.val("新奥股份").fadeIn();
        });

        $(".swiper-pagination span:nth-child(4)").mouseenter(function() {
            container4.shuffleLetters({
                "text": "新奥环保"
            });
            userText.val("新奥环保").fadeIn();
        });
    }, 3800);
});