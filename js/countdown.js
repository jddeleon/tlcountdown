$(function() {

    $('#toggle').on('click', function(e) {
        e.preventDefault();

        if ($('#main').is(":hidden")) {
            $(this).html("Hide &times;");
        } else {
            $(this).html("Show &times;");
        }

        $('#main').fadeToggle('slow');



    });

    var youtubeId = selectVideo();

    function selectVideo() {
        var video_list = ['hyjqDdUeK70', // Benny Benassi
                          'WdvJakBzK3E', // Carnage
                          'eBZjZ6eAzMw', // Hardwell
                          'xg7sptEx0Ms', // Dimitri Vegas & Like Mike
                          'H2fkge3qrmY', // Armin van Buuren
                          '05DSMz1Tyrk', // NERVO
                          'Pz0lZWLFoZM', // Nicky Romero
                          'Pz5b_qoQ51g', // Tiesto
                          'BJOiK7FOtLM', // Dyro
                          '7KygxwFJYZo'];// Steve Aoki

        var i = Math.floor(Math.random() * video_list.length);

        return video_list[i];         

    }

    $("#TLcountdown").TimeCircles({
        count_past_zero: false,
        total_duration: "Months",
        animation: "Ticks",
        bg_width: .5,
        fg_width: 0.04,

        time: {
            Days: { color: "#BB4478" },
            Hours: { color: "#BB4478" },
            Minutes: { color: "#BB4478" },
            Seconds: { color: "#BB4478" }

        }});

    $('#wrapper').tubular({
        videoId: youtubeId,
        mute: false,
        playButtonClass: 'tubular-play',
        pauseButtonClass: 'tubular-pause',
        muteButtonClass: 'tubular-mute',
        volumeUpClass: 'tubular-vol-up',
        volumeDownClass: 'tubular-vol-down'

    });
});