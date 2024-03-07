$(window).resize(function() {
    if ($("body").width() <= 767) {
        let hei = 35;
        for (let i = 0; i < Math.min(5, $("main .bestpp div .data-mobile").length); i++) {
            hei += $("main .bestpp div .data-mobile").eq(i).height() + 5;
        }
        hei = Math.max(452, hei);
        $("main .bestpp").css("max-height", `${hei}px`);
        hei = 35;
        for (let i = 0; i < Math.min(5, $("main .recentplays div .data-mobile-passed").length); i++) {
            hei += $("main .recentplays div .data-mobile-passed").eq(i).height() + 5;
        }
        hei = Math.max(452, hei);
        $("main .recentplays").css("max-height", `${hei}px`);
        $("main .recentplays .data-mobile").hide();
        $("main .recentplays .data-mobile-passed").show();
    }
    else {
        $("main .bestpp, main .mostplays, main .recentplays").css({
            "min-height": "",
            "max-height": ""
        });
    }
    $("main .show-more.bp").each(function(i) {
        if (i === 0) {
            $(this).show();
        }
        else {
            $(this).hide();
        }
    });
    $("main .show-more.mp").each(function(i) {
        if (i === 0) {
            $(this).show();
        }
        else {
            $(this).hide();
        }
    });
    $("main .show-more.rp").each(function(i) {
        if (i === 0) {
            $(this).show();
        }
        else {
            $(this).hide();
        }
    });
});

$(function() {
    let rs = "passed";
    if ($("body").width() <= 767) {
        let hei = 35;
        for (let i = 0; i < Math.min(5, $("main .bestpp div .data-mobile").length); i++) {
            hei += $("main .bestpp div .data-mobile").eq(i).height() + 5;
        }
        hei = Math.max(452, hei);
        $("main .bestpp").css({
            "min-height": `${hei}px`,
            "max-height": `${hei}px`
        });
        hei = 35;
        for (let i = 0; i < Math.min(5, $("main .recentplays div .data-mobile-passed").length); i++) {
            hei += $("main .recentplays div .data-mobile-passed").eq(i).height() + 5;
        }
        hei = Math.max(452, hei);
        $("main .recentplays").css({
            "min-height": `${hei}px`,
            "max-height": `${hei}px`
        });
    }

    // relationshipクリック
    $("body").click(function(e) {
        var $button = $("main .player-banner .relationship span");
        var $list = $("main .player-banner .relationship .list");
        var $wrap = $("main .player-banner .relationship .list .wrap");
        var $close = $("main .player-banner .relationship .list .wrap h1 .fa-xmark");
        var $relationshipList;

        //ユーザーボタンクリック時
        if (!$(e.target).closest($button).length && !$(e.target).closest($wrap).length) {
            $list.removeClass("show");
        }
        else if ($(e.target).closest($wrap).length) {
            if ($(e.target).closest($close).length) {
                $list.removeClass("show");
            }
        }
        else {
            if ($(e.target).closest("main .player-banner .relationship .mutual").length) {
                $relationshipList = $("main .player-banner .relationship .mutual-list");
            }
            else if ($(e.target).closest("main .player-banner .relationship .following").length) {
                $relationshipList = $("main .player-banner .relationship .following-list");
            }
            else if ($(e.target).closest("main .player-banner .relationship .followers").length) {
                $relationshipList = $("main .player-banner .relationship .followers-list");
            }
            if ($relationshipList.hasClass("show")) {
                $relationshipList.removeClass("show");
            }
            else {
                $relationshipList.addClass("show");
            }
        }
    });

    // "show more"をクリックしたとき
    $("main .show-more").click(function() {
        var $selection, $nextbtn, $subject;
        let hei, amt = 50;

        while (!$(this).hasClass(`to${amt}`)) {
            amt += 50;
        }
        if ($(this).hasClass("bp")) {
            $selection = $("main .bestpp");
            $nextbtn = $(`main .bp.to${amt + 50}`);
            $subject = $("main .bestpp div .data-mobile");
        }
        else if ($(this).hasClass("mp")) {
            $selection = $("main .mostplays");
            $nextbtn = $(`main .mp.to${amt + 50}`);
        }
        else if ($(this).hasClass("rp")) {
            $selection = $("main .recentplays");
            $nextbtn = $(`main .rp.to${amt + 50}`);
            $subject = $(`main .recentplays div .data-mobile${rs === "passed" ? "-passed" : ""}`);
        }
        if ($("body").width() <= 767) {
            hei = 35;
            if ($subject !== undefined) {
                for (let i = 0; i < Math.min(amt, $subject.length); i++) {
                    hei += $subject.eq(i).height() + 5;
                }
            }
            else {
                hei += 59 * amt;
            }
        }
        else {
            hei = 50 + 60 * amt;
        }
        $selection.css("max-height", `${hei}px`);
        $(this).hide();
        $nextbtn.show();
    });

    $("main .verified").hover(function() {
        $(this).hide();
        $("main .verified-hover").show();
    });

    // "Show all"をクリックしたとき
    $("main .recentplays .all").click(function() {
        rs = "all";
        $("main .recentplays div .nothing").show();
        $("main .recentplays div .nothing-passed").hide();
        $(this).css({
            "filter": `invert(${0}%)`,
            "opacity": 1
        });
        $("main .recentplays .passed").css({
            "filter": "",
            "opacity": ""
        });
        if ($("body").width() > 767) {
            $("main .recentplays").css("max-height", `${350}px`);
            $("main .recentplays .data").show();
            $("main .recentplays .data-passed").hide();
        }
        else {
            let hei = 35;
            for (let i = 0; i < Math.min(5, $("main .recentplays div .data-mobile").length); i++) {
                hei += $("main .recentplays div .data-mobile").eq(i).height() + 5;
            }
            hei = Math.max(452, hei);
            $("main .recentplays").css({
                "min-height": `${hei}px`,
                "max-height": `${hei}px`
            });
            $("main .recentplays .data-mobile").show();
            $("main .recentplays .data-mobile-passed").hide();
        }
        $("main .rp.to50").show();
        $("main .rp.nof").hide();
    });

    // "Only passed"をクリックしたとき
    $("main .recentplays .passed").click(function() {
        rs = "passed";
        $(this).css({
            "filter": `invert(${0}%)`,
            "opacity": 1
        });
        $("main .recentplays .all").css({
            "filter": "",
            "opacity": ""
        });
        $("main .recentplays div .nothing").hide();
        $("main .recentplays div .nothing-passed").show();
        if ($("body").width() > 767) {
            $("main .recentplays").css("max-height", `${350}px`);
            $("main .recentplays .data").hide();
            $("main .recentplays .data-passed").show();
        }
        else {
            let hei = 35;
            for (let i = 0; i < Math.min(5, $("main .recentplays div .data-mobile-passed").length); i++) {
                hei += $("main .recentplays div .data-mobile-passed").eq(i).height() + 5;
            }
            hei = Math.max(452, hei);
            $("main .recentplays").css({
                "min-height": `${hei}px`,
                "max-height": `${hei}px`
            });
            $("main .recentplays .data-mobile").hide();
            $("main .recentplays .data-mobile-passed").show();
        }
        $("main .rp").hide();
        $("main .rp.nof.to50").show();
    });
});