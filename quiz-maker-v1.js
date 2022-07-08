function gInitc() {
    gg.init("c")
}
function gInitm() {
    gg.init("m")
}
function loadFB(n) {
    var i, r, t;
    if (((document.location + "").split(".")[0] != "http://test" || localStorage.getItem("sm") != "no") && (n && (document.fbCB || (document.fbCB = []),
        document.fbCB === 1 ? n() : document.fbCB.push(n)),
        !document.fbloaded)) {
        i = "en_US";
        try {
            for (r = document.head.getElementsByTagName("META"),
                     t = 0; t < r.length; t++)
                r[t].getAttribute("name") == "language" && (i = r[t].getAttribute("content"));
            document.body && document.body.getAttribute("lang") && (i = document.body.getAttribute("lang"))
        } catch (u) {}
        (function(n, t, r) {
                var u, f = n.getElementsByTagName(t)[0];
                n.getElementById(r) || (u = n.createElement(t),
                    u.id = r,
                    u.src = "//connect.facebook.net/" + i + "/sdk.js",
                    f.parentNode.insertBefore(u, f))
            }
        )(document, "script", "facebook-jssdk");
        document.fbloaded = !0
    }
}
function checkFBCMT() {}
var qz, gg, map, iquiz, quiz, n, gcpCallback, Fingerprint, hCand, qzfb;
if (document.qzScript || (document.qzScript = 1,
!document.querySelectorAll && document.createStyleSheet && function(n, t) {
    n = document;
    t = n.createStyleSheet();
    n.querySelectorAll = function(i, r, u, f, e) {
        for (e = n.all,
                 r = [],
                 i = i.split(","),
                 u = i.length; u--; ) {
            for (t.addRule(i[u], "k:v"),
                     f = e.length; f--; )
                e[f].currentStyle.k && r.push(e[f]);
            t.removeRule(0)
        }
        return r
    }
}(),
    qz = {
        tm: 0,
        dcs: "",
        ssl: (document.location.protocol == "https:" ? "https" : "http") + ":",
        lk: 0,
        qv: 0,
        obj: function(n, t) {
            var r = n.substr(0, 1), u, i;
            if (r == "." || r == "#" || r == "[" || t) {
                if (n = document.querySelectorAll(n),
                n.length == 0)
                    return !1;
                if (n.length == 1 && t != 3 || t === 2)
                    return n[0];
                for (u = [],
                         i = 0; i < n.length; i++)
                    u.push(n[i]);
                return u
            }
            return document.getElementById(n)
        },
        addE: function(n, t, i, r) {
            var u;
            if (t != "DOMContentLoaded" || document.addEventListener || (n = window,
                t = "load"),
            typeof n == "string" && (n = qz.obj(n)),
            t instanceof Array) {
                for (u in t)
                    qz.addE(n, t[u], i, r);
                return
            }
            if (n instanceof Array)
                for (u in n)
                    qz.addE(n[u], t, i, r);
            else {
                if (!n || typeof n != "object")
                    return;
                if (t == "tclick") {
                    qz.addE(n, "click", i, r);
                    n.touchEvt = function(n) {
                        if (document.moveing)
                            return !1;
                        i(n);
                        n.preventDefault()
                    }
                    ;
                    qz.addE(n, "touchstart", n.touchEvt);
                    return
                }
                r && (i = function(n, t) {
                    return function(i) {
                        t(n, i)
                    }
                }(n, i),
                    r = 0);
                n.addEventListener ? n.addEventListener(t, i, !0) : n.attachEvent("on" + t, i)
            }
        },
        aspError: function(n, t, i) {
            return n != "System.ASP_Error" && i.indexOf('<font face="Arial" size=2>') != -1 && i.indexOf("error") != -1 ? (i = i.replace(/([\<][\/]*(font|p)( face[\=][\"]Arial[\"] size[\=]2)*[\>]|^[\s]+|[\s]+$)/gi, "").replace(/[\s]+/gi, " "),
                qz.xSend("System.ASP_Error", "loc=" + encodeURIComponent(document.location) + "&sv=" + encodeURIComponent(n) + "&dv=" + encodeURIComponent(t) + "&rv=" + encodeURIComponent(i), function() {}),
            "XERR: " + i) : !1
        },
        xSend: function(n, t, i) {
            var u, r;
            typeof n == "string" && (n = {
                s: n,
                d: t,
                cb: i
            });
            n.stm = (new Date).getTime();
            document.xtt = 0;
            u = document.location + "";
            n.xTest = qz.tst && !document.noLog && n.s.indexOf("Facebook.Heat_save") == -1 && n.s.indexOf("System.ASP_Error") == -1;
            r = u.match(/[\&\?]fbuid[\=]([\d]+)/i);
            r && r.length && (n.uid = r[1]);
            try {
                n.objXML = new XMLHttpRequest
            } catch (f) {
                n.objXML = new ActiveXObject("Microsoft.XMLHTTP")
            }
            return n.s = escape(n.s),
                n.tURL = "https://" + (qz.tst ? "test" : "www") + ".quiz-maker.com/qapi/" + n.s.replace(/^Quiz[\.]/gi, "") + (n.s.indexOf("?") == -1 ? "&" : "&") + "tt=" + n.stm,
            qz.tst && (document.location + "").indexOf("rebuild=y") != -1 && (n.tURL += "&rebuild=y"),
                n.log = function(t) {
                    if (n.xTest)
                        try {
                            console.log(t)
                        } catch (i) {}
                }
                ,
                n.log("XURLVR: " + n.tURL),
                n.d ? (n.log("XDATA: " + n.d),
                    n.objXML.open("POST", n.tURL, n.cb ? !0 : !1),
                /(^|&)(em|lk)[\=]/.test(n.d + "") && (n.objXML.withCredentials = !0),
                    n.objXML.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                    n.objXML.send(n.d)) : (n.objXML.open("GET", n.tURL, n.cb ? !0 : !1),
                    n.objXML.send(null)),
                n.catchErr = function(n) {
                    return function() {
                        document.xtt = (new Date).getTime() - n.stm;
                        n.isErr = qz.aspError(n.s, n.d, n.objXML.responseText);
                        n.log(n.isErr ? n.isErr : "XRESP: " + n.objXML.responseText)
                    }
                }(n),
                n.cb ? (n.cb !== !0 && (n.objXML.onreadystatechange = function(n) {
                    return function() {
                        n.objXML.readyState == 4 && (n.catchErr(),
                            n.cb(n.objXML.responseText, n))
                    }
                }(n)),
                    !0) : (n.catchErr(),
                    n.objXML.responseText)
        },
        setWait: function(n) {
            qz.obj(".quiz-container", 2).setAttribute("wait", n ? 1 : 0)
        },
        gEvent: function() {},
        loadTabs: function() {
            var r, e, f, u, t, n, i;
            for (document.tabs || (document.tabs = []),
                     r = document.querySelectorAll(".qp-subtab-c, .qp-notab-c"),
                     e = [],
                     i = 0; i < r.length; i++)
                if (!r[i].tabs) {
                    for (f = r[i].previousSibling,
                         f && f.className && (f.className + "").indexOf("qp-subtab") != -1 || (f = !1),
                             n = {
                                 tid: r[i].getAttribute("tid"),
                                 t: [],
                                 h: [],
                                 tp: r[i],
                                 hp: f,
                                 idx: parseInt(r[i].getAttribute("idx")),
                                 max: 1
                             },
                         n.idx || (n.idx = 1),
                         n.tid || (n.tid = i + 1),
                             t = 0; t < n.tp.childNodes.length; t++)
                        u = n.tp.childNodes[t],
                        u.tagName == "DIV" && (u.tidx = t,
                            n.t.push(u),
                        (u.className + "").indexOf("sel") != -1 && (n.idx = n.t.length));
                    if (n.hp)
                        for (t = 0; t < n.hp.childNodes.length; t++)
                            u = n.hp.childNodes[t],
                            u.tagName == "DIV" && n.h.push(u);
                    for (n.show = function(n) {
                        return function(t, i) {
                            var r = n.tabs, s, f, o, h, e, l, u, c;
                            if ((typeof t == "string" && (t = r.idx + parseInt(t)),
                            !t && t !== 0) || t > r.max || t < 1 || r.cb && !r.cb(r.idx, t) || r.t[t - 1] && r.t[t - 1].cb && !r.t[t - 1].cb(r.idx, t))
                                return !1;
                            for (s = i || t == r.idx ? "" : t > r.idx ? " fwd" : " bck",
                                     f = 0; f < r.t.length; f++)
                                o = f == t - 1 ? "sel" + s : "",
                                    h = (r.t[f].className + "").replace(/(^|[\s])(sel|fwd|bck|slide)(?=[\s]|$)/gi, "$1").replace(/[\s]+$/gi, ""),
                                    r.t[f].className = (h ? h + (o ? " " : "") : "") + o,
                                r.h[f] && (r.h[f].className = o);
                            e = (document.location.hash + "").split("-");
                            i || qz.nohash || n.getAttribute("hash") == "no" || e[0] && e[0] != "#" && e[0] != "#tab" || (e[0] = "#tab",
                                e[r.hidx] = t,
                                document.location.hash = e.join("-"));
                            l = n.offsetWidth;
                            u = r.t[t - 1];
                            s && (u.className += " slide",
                                setTimeout(function(n) {
                                    return function() {
                                        var t = (n.className + "").replace(/(^|[\s])(sel|fwd|bck|slide)(?=[\s]|$)/gi, "$1").replace(/[\s]+$/gi, "");
                                        n.className = (t ? t + " " : "") + ((n.className + "").indexOf("sel") == -1 ? "" : "sel")
                                    }
                                }(u), r.tp.getAttribute("animt") ? parseInt(r.tp.getAttribute("animt")) : 200));
                            r.idx = t;
                            c = u.getAttribute("onTab");
                            c && setTimeout(c.replace(/Tab[\_]IDX/gi, "'" + t + "'"), 0);
                            document.body.setAttribute("tidx-" + r.tid, u.ord ? u.ord : t);
                            document.body.setAttribute("tend-" + r.tid, (u.ord ? u.ord : t) >= r.max ? 1 : 0);
                            u.getAttribute("tab") && document.body.setAttribute("tn-" + r.tid, u.getAttribute("tab"))
                        }
                    }(r[i]),
                             t = 0; t < n.t.length; t++)
                        n.t[t].idx = t + 1,
                            n.t[t].show = function(n, t) {
                                return function(i, r) {
                                    n.show(t, r)
                                }
                            }(n, t + 1),
                        n.h[t] && qz.addE(n.h[t], "tclick", n.t[t].show);
                    qz.nohash || r[i].getAttribute("hash") == "no" || (e.push(r[i]),
                        n.hidx = e.length);
                    n.max = n.t.length;
                    n.tp.tabs = n;
                    n.hp && (n.hp.tabs = n);
                    n.show(n.idx, 1);
                    document.tabs.push(n);
                    r[i].setAttribute("tabs", 1)
                }
            if (!document.hashLoad && !qz.nohash) {
                if (n = (document.location.hash + "").split("-"),
                n[0] == "#tab")
                    for (i = 1; i < n.length; i++)
                        e[i - 1] && e[i - 1].tabs.show(parseInt(n[i]), 1);
                document.hashLoad = 1
            }
            qz.loadSocial()
        },
        getHost: function() {
            var n = (document.location.host + ".").toLowerCase().split(".")
                , t = {
                "poll-maker": 1,
                doquizzes: 1,
                "quiz-maker": 1,
                quizwiz: 1,
                "survey-maker": 1,
                supersurvey: 1,
                sitelistener: 1
            };
            return t[n[1]] ? t[n[1]] : t[n[0]]
        },
        loadSocial: function() {
            var o = (document.location + "?#").split("?")[0].split("#")[0] + "?s=res", i = document.title + "", u, t, n, e, r, a;
            for (document.shareData || (document.shareData = {
                results: {
                    url: o,
                    txt: i,
                    img: ""
                },
                poll: {
                    url: o.replace(/[\/]results/gi, "/poll"),
                    txt: i.replace(/[\s]*[\-][\s]*Results$/gi, " - Poll"),
                    img: ""
                },
                quiz: {
                    url: o.replace(/[\/]public/i, "").replace(/[\/]results([\d]+[\-][^\-]+[\-]|Q){0,1}/gi, "/Q"),
                    txt: i.replace(/^Quiz Results[\s]*[\-][\s]*/gi, ""),
                    img: ""
                }
            }),
                     t = document.querySelectorAll(".qp_sharedata[t]"),
                     n = 0; n < t.length; n++)
                if (u = t[n].innerHTML,
                u && u.substr(0, 1) == "{")
                    try {
                        u = JSON.parse(u);
                        quiz.shareData[t[n].getAttribute("t")] = u
                    } catch (v) {}
            for (t = document.querySelectorAll(".social-share[t] DIV"),
                     n = 0; n < t.length; n++) {
                var f = t[n].className
                    , c = {
                    fb: "Facebook",
                    tw: "Twitter",
                    gp: "Google Plus",
                    re: "Reddit",
                    st: "Stumble Upon",
                    tu: "Tumblr",
                    pi: "pInterest",
                    ed: "Embed",
                    cr: "Create",
                    "in": "LinkedIn"
                }
                    , l = {
                    fb: "Share on FB",
                    ed: "Embed this quiz on your website or blog",
                    cr: "Create your own",
                    "in": "Share on LinkedIn"
                }
                    , s = l[f] ? l[f] : "Share on " + c[f]
                    , h = f == "fb" ? "FB" : c[f];
                try {
                    s = quiz.translate(s);
                    h = quiz.translate(h)
                } catch (v) {}
                t[n].setAttribute("title", s);
                t[n].setAttribute("txt", h);
                qz.addE(t[n], "click", function(n) {
                    return function() {
                        var e = n.parentNode.getAttribute("t"), t = document.shareData[e], o, r, f, u, s;
                        quiz && quiz.shareData[e] && (t = quiz.shareData[e],
                        t.url && qz.evt(t.url.split("/").pop(), "Shared", {
                            sharetype: n.className
                        }));
                        o = qz.getHost();
                        !o && t.emurl && (t.url = document.location + "");
                        r = encodeURIComponent(t.url);
                        i = encodeURIComponent(t.name ? t.name : t.txt);
                        img = encodeURIComponent(t.img);
                        qz.gEvent("Share Click", e, n.className);
                        f = "";
                        t.accounts && (f = t.accounts.replace(/[^a-zA-Z\_\-\,]+/gi, ""));
                        f || (f = "poll_maker");
                        u = "";
                        t.hash && (u = t.hash.replace(/[^a-zA-Z\_\-\,]+/gi, ""));
                        u || (u = e == "quiz" ? "quiz" : "pollmaker");
                        u == "quiz" && t.url.indexOf("survey-maker") != -1 && (u = "survey");
                        switch (n.className) {
                            case "fb":
                                try {
                                    qz.obj("fb-root").style.display = ""
                                } catch (h) {}
                                o ? (s = {
                                    method: "feed",
                                    link: t.url,
                                    description: t.txt,
                                    picture: t.img
                                },
                                t.name && (s.name = t.name),
                                    FB.ui(s, function(n) {
                                        n && n.post_id && qz.gEvent("Results", "Shared", "fb")
                                    })) : window.open("https://www.facebook.com/sharer/sharer.php?u=" + r + "&title=" + i, "_blank", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=400");
                                break;
                            case "pi":
                                window.open("https://www.pinterest.com/pin/create/button/?url=" + r + "&media=" + img + "", "_blank", "width=600, height=500");
                                break;
                            case "tw":
                                window.open("https://twitter.com/share?url=" + r + "&text=" + i + "&related=" + f + "&hashtags=" + u, "_blank", "width=600, height=300");
                                break;
                            case "gp":
                                window.open("https://plus.google.com/share?url=" + r, "_blank", "width=600, height=300");
                                break;
                            case "re":
                                window.open("http://www.reddit.com/submit?url=" + r + "&title=" + i + "&related=" + f + "&hashtags=" + u, "_blank", "");
                                break;
                            case "st":
                                window.open("http://www.stumbleupon.com/badge/?url=" + r, "_blank", "width=800, height=600");
                                break;
                            case "tu":
                                window.open("http://www.tumblr.com/share/link?url=" + r + "&name=" + i + "&description=" + i, "_blank", "width=900, height=700");
                                break;
                            case "ed":
                                window.open("https://www.quiz-maker.com/Embed-Code?q=Q" + quiz.ref + "#tab-2", "_blank", "");
                                break;
                            case "cr":
                                window.open("https://www.quiz-maker.com/", "_blank", "");
                                break;
                            case "in":
                                window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + r + "&title=" + i + "&summary=" + i, "_blank", "width=800, height=500")
                        }
                        try {
                            quiz.ref && qz.xSend("Quiz.Share " + quiz.ref + ";" + n.className, 0, !0)
                        } catch (h) {}
                    }
                }(t[n]))
            }
            for (t = document.querySelectorAll(".social-share-group INPUT.qp-share-inp"),
                     n = 0; n < t.length; n++)
                e = t[n].getAttribute("t"),
                    r = document.shareData[e],
                quiz && quiz.shareData[e] && (r = quiz.shareData[e]),
                    a = qz.getHost(),
                !a && r.emurl && (r.url = document.location + "",
                e == "quiz" && (r.url = (r.url + "#").split("#")[0])),
                    t[n].value = r.url,
                    qz.addE(t[n], "click", function(n) {
                        return function() {
                            n.select()
                        }
                    }(t[n])),
                    qz.addE(t[n], "copy", function(n) {
                        return function() {
                            qz.gEvent("Share Click", n.getAttribute("t"), "ln")
                        }
                    }(t[n]))
        },
        data: {},
        host: "www.poll-maker.com",
        tst: 0,
        setKey: function(n) {
            qz.apiKey = n
        },
        setKey: function(n) {
            qz.apiKey = n
        },
        getQuiz: function(n, t) {
            return qz.data[n + "-" + (t ? t : 0)].qObj
        },
        load: function(n) {
            var u, r, i, f, t, o, e;
            if (n.parent ? typeof n.parent != "object" && (n.parent = qz.obj(n.parent)) : n.parent = document.body,
                !n.parent) {
                console.log("DOM Element for Quiz Loading not found");
                return
            }
            if (u = document.createElement("DIV"),
                u.setAttribute("quiz", n.quiz),
                u.setAttribute("data-quiz", n.quiz),
                u = n.parent.appendChild(u),
                r = [],
                i = qz.lk,
                qz.lk++,
                r[i] = u,
                f = r[i].getAttribute("quiz"),
                r[i].k = i,
                t = {
                    id: f,
                    k: i,
                    m: document.createElement("DIV"),
                    lnk: document.createElement("DIV"),
                    a: u,
                    html: "",
                    sk: 0,
                    w: n.width,
                    h: n.height,
                    fs: n.fullscreen,
                    qObj: n
                },
                t.m.className = "qp_quiz",
                n.opt)
                for (o in n.opt)
                    e = {
                        type: "emtypeN"
                    }[o],
                        e = e ? e : o,
                        t[e] = n.opt[o];
            r[i].tagName == "DIV" && (r[i].innerHTML = "",
                r[i].style.display = "inline");
            r[i].parentNode.insertBefore(t.lnk, r[i]);
            r[i].parentNode.insertBefore(t.m, r[i]);
            r[i].loaded = !0;
            qz.data[f + "-" + i] = t;
            r[i].parentNode.style.textAlign = "center";
            t.emtypeN ? qz.buildPop(t) : (t.m.innerHTML = !n.loadMsg && n.loadMsg !== "" ? "Loading Quiz..." : n.loadMsg,
                t.m.setAttribute("q", f),
                t.m.style.cssText = "position:relative; margin-bottom:20px; color:#525252; font-family:'open sans',sans-serif; font-weight:400; font-size:14px; line-height:1.5; text-align:left; -webkit-transition:height 150ms ease-out,opacity 100ms ease-out 150ms; transition:height 150ms ease-out,opacity 100ms ease-out 150ms; -moz-transition:height 150ms ease-out,opacity 100ms ease-out 150ms;",
            t.w && (t.m.style.maxWidth = t.w,
                r[i].style.maxWidth = t.w),
            t.h && (t.m.style.height = t.h,
                t.m.style.overflow = "auto"),
            t.fs && (document.body.className += " quiz-page"),
                qz.xSend("Quiz.Take " + f.substr(1), "ref=" + encodeURIComponent(qz.ref()) + (qz.apiKey ? "&apikey=" + qz.apiKey : 0), function(n, t) {
                    return function(n) {
                        var r = "?tt=" + (new Date).getTime();
                        t.fs && (n = n.replace(/ quiz[\-]embed/gi, ""));
                        t.html = n;
                        t.sc = qz.getScripts(n);
                        t.lnk.innerHTML = "<link id='qz-css-" + t.id + "' onLoad=\"qz.styleLoad('" + t.id + "'," + i + ")\" href='" + qz.ssl + "//" + (qz.tst ? qz.host + "/3012/CDN" : "cdn.poll-maker.com") + "/quiz-embed-v1.css" + r + "' rel='stylesheet' type='text/css'>";
                        qz.leTFN = function(n, t) {
                            return function() {
                                qz.leStyle(n, t)
                            }
                        }(t.id, i);
                        qz.leTMR = setTimeout(qz.leTFN, 1e3)
                    }
                }(t.m, t)))
        },
        list: function(n, t) {
            var i = "";
            i += n.list ? (i ? "&" : "") + "list=" + encodeURIComponent(n.list) : "";
            i += n.tag ? (i ? "&" : "") + "tag=" + encodeURIComponent(n.tag) : "";
            i += qz.apiKey ? (i ? "&" : "") + "apikey=" + qz.apiKey : "";
            qz.xSend("Quiz.Public_Quiz_List", i, function(n, t) {
                return function(n) {
                    n = n.substr(0, 1) == "{" ? JSON.parse(n) : 0;
                    n || (n = {
                        error: "Invalid Response"
                    });
                    t && t(n)
                }
            }(n, t))
        },
        quizReady: function(n, t) {
            var i = qz.data[n + "-" + (t ? t : 0)];
            i.a.ready = 1;
            i.a.start && qz.startQuiz(i.a)
        },
        startQuiz: function(n) {
            var t = parseInt(n.getAttribute("data-emtype"));
            n.start = 1;
            n.ready ? t ? (n.pop = 1,
                qz.popQuiz(n)) : (n.previousSibling.style.display = "block",
                n.style.display = "none") : (n.style.cursor = "wait",
                n.style.opacity = "0.7",
                t && !n.pop ? (n.pop = 1,
                    qz.popInit(n)) : setTimeout(function(n) {
                    return function() {
                        qz.startQuiz(n)
                    }
                }(n), 300))
        },
        popInit: function(n) {
            var o = n.getAttribute("data-quiz"), t = qz.data[o + "-" + n.k], c, e, r, u, i, a;
            if (qz.addE(window, "message", function(n) {
                return function(t) {
                    var i, r;
                    if ((t.data + " ").substr(0, 1) == "{") {
                        if (i = JSON.parse(t.data),
                        i.qid != n.id || i.k !== n.k)
                            return;
                        switch (i.act) {
                            case "init":
                                n.op && n.f.contentWindow.postMessage('{"act":"op","op":' + n.op + "}", "*");
                                n.winit = 1;
                                qz.popQuiz(n.a);
                                n.m.className = "qp_quiz";
                                qz.evt(n.id, n.k, "Load", {
                                    status: "loaded"
                                });
                                break;
                            case "window":
                                i.evt.status && setTimeout(function(n) {
                                    return function() {
                                        var t = qz.findPos(n)
                                            , i = t.y + t.sp.scrollTop - 35;
                                        qz.easeScroll(i)
                                    }
                                }(f), 350);
                                break;
                            case "verifycb":
                                n.f.removeAttribute("qpmax");
                            case "height":
                                i.h && n.emtypeN != 2 && n.emtypeN != 3 && n.emtypeN != 4 && n.emtypeN != 6 && (n.emtypeN == 1 ? n.h && n.h != "auto" || (n.f.style.height = i.h + 0 + "px",
                                n.m.qpfr && (n.m.style.height = "")) : (n.f.style.height = i.h + 0 + "px;",
                                n.f.inith || (n.f.parentNode.style.height = i.tmax + 0 + "px",
                                    n.f.style.minHeight = "100%",
                                n.emtypeN == 5 && (r = i.tmax + 0 + 80,
                                    n.winx.style.cssText = "bottom:" + r + "px;bottom:min(calc(100% - 40px)," + r + "px)"))),
                                    n.f.inith = 1,
                                    n.f.contentWindow.postMessage('{"act":"hfin"}', "*"));
                                qz.evt(n.id, n.k, "Height", i);
                                break;
                            case "max":
                                qz.obj("qp-frstyle") || document.body.insertAdjacentHTML("beforeBegin", "<STYLE id='qp-frstyle'>IFRAME[qpmax='1'] {position:fixed; top:0; left:0; bottom:0; right:0; height:100%!important; width:100%!important; background:transparent!important;}<STYLE>");
                                n.f.setAttribute("qpmax", 1);
                                break;
                            case "min":
                                n.f.removeAttribute("qpmax");
                                break;
                            case "body":
                                document.body.setAttribute(i.n, i.v)
                        }
                    }
                }
            }(t)),
                c = "https://poll-maker.com",
            t.host && (c = t.host),
                t.f = document.createElement("IFRAME"),
                t.f.src = c + "/" + o + (t.eurl ? "?" + t.eurl : "") + "#fr=" + encodeURIComponent(document.location + "") + "&frk=" + t.k,
                t.f.setAttribute("scrolling", "auto"),
                t.f.setAttribute("frameborder", "0"),
                t.f.style.cssText = t.emtypeN == 2 ? "position:fixed; height:100%; width:100%; zindex:1; top:0px; left:0px; background:transparent;" : "width:100%; height:" + (t.emtypeN == 5 && t.sh && (!t.h || t.h == "auto") ? t.sh + "px" : "100%") + "; background:transparent; border:0; overflow:auto;",
                t.m.appendChild(t.f),
                n.ready = 1,
                e = {
                    src: qz.ref(),
                    lnk: []
                },
            e.src && !qz.getHost()) {
                if (r = qz.obj("A[href*='linkto.run/'][href*='" + o.substr(1) + "']", 3),
                    r)
                    for (u = 0; u < r.length; u++) {
                        i = {};
                        a = r[u].parentNode;
                        i.v = r[u].getAttribute("href").split("linkto.run/")[1].split("/")[0];
                        var l = i.t = r[u].innerText
                            , s = r[u].previousSibling
                            , h = r[u].nextSibling;
                        i.t = "[" + i.t + "]";
                        s && s.nodeType == 3 && s.textContent && (i.t = s.textContent + "" + i.t);
                        h && h.nodeType == 3 && h.textContent && (i.t += h.textContent + "");
                        i.t = i.t.replace(/^[\s\r\f\n\t]+|[\s\r\f\n\t]+$/gi, "");
                        "[" + l + "]" == i.t && (i.t = l);
                        r[u].getAttribute("rel") == "nofollow" && (i.nf = 1);
                        e.lnk.push(i)
                    }
                qz.xSend("Quiz.Track_Ref " + o.substr(1), e.src ? "ref=" + encodeURIComponent(JSON.stringify(e)) : "", function() {
                    return function() {}
                }(t))
            }
        },
        popQuiz: function(n) {
            var r = n.getAttribute("data-quiz") + "-" + n.k, t = qz.data[r], i;
            n.start && t.win && (i = parseInt(t.win.getAttribute("show")),
            i || (t.a.style.opacity = 1,
                t.a.style.cursor = "",
                t.a.style.pointerEvents = ""),
                t.win.s = i = i ? 0 : 1,
            (t.emtypeN == 3 || t.emtypeN == 4) && (qz.qv += i ? 1 : -1,
                document.body.setAttribute("qpshow", qz.qv ? 1 : 0)),
                t.win.setAttribute("show", i),
            i && clearTimeout(t.popTMR))
        },
        dataProp: function(n, t) {
            for (var i, r, e, o, u = 0, f = n.attributes, s = f.length; u < s; u++)
                i = f[u].nodeName.split("-"),
                    r = f[u].nodeValue,
                i[0] == "data" && (e = {
                    type: "emtype",
                    emtype: "emtypeN",
                    width: "w",
                    height: "h",
                    fullscreen: "fs"
                }[i[1]],
                    i = e ? e : i[1],
                    o = parseFloat(r),
                r + "" == o + "" && (r = o),
                    t[i] = r)
        },
        init: function() {
            var i, e, t, r, o, f, n, u, c;
            for (window.qzAsyncInit && window.qzAsyncInit(),
                     i = document.querySelectorAll("A[quiz],DIV[quiz],A[data-quiz],DIV[data-quiz]", 1),
                     n = 0; n < i.length; n++)
                if (!i[n].loaded) {
                    for (e = i[n].getAttribute("quiz"),
                         e || (e = i[n].getAttribute("data-quiz")),
                             i[n].k = n,
                             t = {
                                 id: e,
                                 k: n,
                                 m: document.createElement("DIV"),
                                 lnk: document.createElement("SPAN"),
                                 a: i[n],
                                 html: "",
                                 sk: 0
                             },
                             qz.dataProp(i[n], t),
                         (i[n].tagName == "DIV" || (i[n].innerHTML + "").indexOf("Loading") != -1) && (i[n].innerHTML = "",
                             i[n].style.display = "inline"),
                             r = i[n]; r && r.className !== "qp_frame"; )
                        r = r.previousSibling ? r.previousSibling : r.parentNode;
                    if (i[n].parentNode.insertBefore(t.lnk, i[n]),
                        r && r.className == "qp_frame" ? (t.m = r,
                            t.m.qpfr = 1,
                            t.m.className += " qp_quiz") : (t.m.className = "qp_quiz",
                            i[n].parentNode.insertBefore(t.m, i[n])),
                        i[n].parentNode.style.textAlign = "center",
                        i[n].loaded = !0,
                        qz.data[e + "-" + n] = t,
                        t.m.setAttribute("q", e),
                    n > 0 && !t.emtypeN)
                        t.m.innerHTML = "<div style='margin:10px 0;padding:10px;border:1px solid #EC0000;color:#EC0000;max-width:500px;background-color:#FFEAEA;font-family:Arial;font-size:14px;'>Error: Unable to load Quiz, there is already a quiz on this page<\/div>"
                    else if (t.emtypeN)
                        qz.buildPop(t);
                    else {
                        if (o = {
                            src: qz.ref(),
                            lnk: []
                        },
                        o.src && (f = qz.obj("A[href*='linkto.run/'][href*='" + e.substr(1) + "']", 3),
                            f))
                            for (n = 0; n < f.length; n++) {
                                u = {};
                                c = f[n].parentNode;
                                u.v = f[n].getAttribute("href").split("linkto.run/")[1].split("/")[0];
                                var h = u.t = f[n].innerText
                                    , r = f[n].previousSibling
                                    , s = f[n].nextSibling;
                                u.t = "[" + u.t + "]";
                                r && r.nodeType == 3 && r.textContent && (u.t = r.textContent + "" + u.t);
                                s && s.nodeType == 3 && s.textContent && (u.t += s.textContent + "");
                                u.t = u.t.replace(/^[\s\r\f\n\t]+|[\s\r\f\n\t]+$/gi, "");
                                "[" + h + "]" == u.t && (u.t = h);
                                f[n].getAttribute("rel") == "nofollow" && (u.nf = 1);
                                o.lnk.push(u)
                            }
                        t.m.style.cssText = (t.emtype && t.emtype != 4 ? "display:none;" : "") + " position:relative; margin-bottom:20px; color:#525252; font-family:'open sans',sans-serif; font-weight:400; font-size:14px; line-height:1.5; text-align:center; -webkit-transition:height 150ms ease-out,opacity 100ms ease-out 150ms; transition:height 150ms ease-out,opacity 100ms ease-out 150ms; -moz-transition:height 150ms ease-out,opacity 100ms ease-out 150ms;";
                        t.w && (t.m.style.maxWidth = t.w,
                            i[n].style.maxWidth = t.w);
                        t.h && (t.m.style.height = t.h,
                            t.m.style.overflow = "auto",
                            t.m.setAttribute("scroll", 1));
                        t.fs && (document.body.className += " quiz-page");
                        qz.xSend("Quiz.Take " + e.substr(1), o.src ? "ref=" + encodeURIComponent(JSON.stringify(o)) : "", function(n, t) {
                            return function(n) {
                                var i = "?tt=" + (new Date).getTime();
                                t.fs && (n = n.replace(/ quiz[\-]embed/gi, ""));
                                t.html = n;
                                t.sc = qz.getScripts(n);
                                t.lnk.innerHTML = "<link id='qz-css-" + t.id + "' onLoad=\"qz.styleLoad('" + t.id + "')\" href='" + qz.ssl + "//" + (qz.tst ? qz.host + "/3012/CDN" : "cdn.poll-maker.com") + "/quiz-embed-v1.css" + i + "' rel='stylesheet' type='text/css'>";
                                qz.leTFN = function(n, t) {
                                    return function() {
                                        qz.leStyle(n, t)
                                    }
                                }(t.id, t.k);
                                qz.leTMR = setTimeout(qz.leTFN, 1e3)
                            }
                        }(t.m, t))
                    }
                }
        },
        buildPop: function(n) {
            if (n.emtypeN > 2) {
                n.win = document.createElement("DIV");
                n.win.className = "qp_quiz_win qp_em" + n.emtypeN;
                n.m.parentNode.insertBefore(n.win, n.m);
                var t = "";
                qz.obj("qp-win-css") || (t += ".qp_quiz_win\t\t\t\t\t\t\t\t{opacity:0; position:fixed; top:0; left:0; bottom:0; right:0; padding:30px; transition:opacity 300ms ease-out; pointer-events:none; box-sizing:border-box; z-index:2;}",
                    t += ".qp_quiz_win .qp_quiz\t\t\t\t\t\t{display:block; position:relative; overflow:hidden; height:100%; max-height:calc(100% - 0px); width:calc(100% - 0px); border-radius:6px; box-shadow:1px 1px 6px 1px rgba(0,0,0,0.3); pointer-events:none;}",
                    t += ".qp_quiz_win[show='1']\t\t\t\t\t{opacity:1; pointer-events:all; background:rgba(0,0,0,0.4);}",
                    t += ".qp_quiz_win[show='1'] .qp_quiz, .qp_quiz_win[show='1'] .qp_win_close {pointer-events:all;}",
                    t += "*[data-quiz]:hover\t\t\t\t\t\t{filter:brightness(0.95);}",
                    t += "*[data-quiz][data-dark]:hover\t\t\t\t{filter:brightness(1.2);}",
                    t += "BODY[qpshow='1']\t\t\t\t\t\t\t{overflow:hidden!important;}",
                    t += ".qp_quiz_win.qp_em3 .qp_quiz IFRAME\t\t{height:100%!important;}",
                    t += ".qp_quiz_win.qp_em4 .qp_quiz\t\t\t\t{transition:left 300ms linear!important; left:100%; width:85%;}",
                    t += ".qp_quiz_win.qp_em4[show='1'] .qp_quiz\t{left:15%;}",
                    t += ".qp_quiz_win.qp_em5, .qp_quiz_win.qp_em6\t{background:transparent; pointer-events:none;}",
                    t += ".qp_quiz_win.qp_em5 .qp_quiz\t\t\t\t{position:absolute; transition:bottom 300ms linear; top:auto; bottom:-100%; right:20px; left:auto; width:50%; max-height:calc(100% - 120px);}",
                    t += ".qp_quiz_win.qp_em5 .qp_win_close \t\t{right:0; top:auto; bottom:-100%;}",
                    t += ".qp_quiz_win.qp_em5[show='1'] .qp_quiz\t{bottom:100px;}",
                    t += ".qp_quiz_win.qp_em5[show='1'] + A[data-quiz='" + n.id + "'] {}",
                    t += ".qp_quiz_win.qp_em6 .qp_win_close \t\t{left:calc(50% - 20px); display:block; top:50px; transition:none;}",
                    t += ".qp_quiz_win.qp_em6 .qp_quiz\t\t\t\t{transition:left 300ms linear; top:40px; left:100%; width:calc(50% + 30px); max-height:calc(100% - 80px)!important; border-top-right-radius:0; border-bottom-right-radius:0;}",
                    t += ".qp_quiz_win.qp_em6[show='1'] .qp_quiz\t{left:50%;}",
                    t += ".qp_win_close {position:absolute; z-index:99; top:10px; right:10px; width:40px; line-height:40px; text-align:center; cursor:pointer; border-radius:100%; opacity:1; pointer-events:none; transition:opacity 300ms ease-out;}",
                    t += ".qp_win_close:before {content:'X'; font-family:'Arial'; font-size:20px;}",
                    t += ".qp_win_close:hover {color:#0057ad; background-color:rgba(255,255,255,1); box-shadow:1px 1px 3px 0px rgba(0,0,0,0.8);}",
                    t += "@media only screen and (max-width:479px) {",
                    t += ".qp_quiz_win\t\t\t\t\t\t\t\t{padding:20px;}",
                    t += ".qp_quiz_win.qp_em5 .qp_quiz\t\t\t\t{left:0; width:100%;}",
                    t += ".qp_quiz_win.qp_em6 .qp_quiz\t\t\t\t{width:calc(100% + 20px); top:20px;  height:calc(100% - 40px)!important;}",
                    t += ".qp_quiz_win.qp_em6[show='1'] .qp_quiz\t{left:0;}",
                    t += ".qp_quiz_win.qp_em6 .qp_win_close\t\t\t{left:0; top:40px;}",
                    t += "}",
                    t = "<STYLE id='qp-win-css'>" + t + "<\/STYLE>");
                n.win.innerHTML = "<div class='qp_win_close'><\/div>" + t;
                n.win.appendChild(n.m);
                n.winx = n.win.childNodes[0];
                qz.addE(n.winx, "click", function(n) {
                    return function() {
                        qz.startQuiz(n)
                    }
                }(n.a));
                n.a.style.opacity == "0.5" && (n.a.start = 1,
                    qz.popInit(n.a));
                (n.seconds || n.exit || n.scroll) && (n.a.pop = 1,
                    qz.popInit(n.a),
                    n.autoPop = function(n) {
                        return function(t) {
                            if (t && t.type == "scroll",
                            !t || t.type != "mouseout" || t.clientY < 50 && t.relatedTarget == null && t.target.nodeName.toLowerCase() !== "select") {
                                var i = qz.data[n];
                                i.win.s || i.win.fpop || (i.winit ? (i.a.start = 1,
                                    qz.popQuiz(i.a)) : i.a.start = 1);
                                i.win.fpop = 1
                            }
                        }
                    }(n.id + "-" + n.k),
                n.seconds && (n.popTMR = setTimeout(n.autoPop, n.seconds * 1e3)),
                n.scroll && qz.addE(window, "load", function(n) {
                    return function() {
                        qz.addE(window, "scroll", n.autoPop)
                    }
                }(n)),
                n.exit && qz.addE(window, "load", function(n) {
                    return function() {
                        qz.addE(document, "mouseout", n.autoPop)
                    }
                }(n)))
            } else
                qz.popInit(n.a)
        },
        ref: function() {
            var n = "";
            try {
                n = top.document.location + ""
            } catch (t) {
                try {
                    n = document.location + ""
                } catch (t) {}
            }
            return n
        },
        getScripts: function(n) {
            var r = n.match(/[\<]SCRIPT[^\>]*[\>]([^\<]|[\<][^s]|[\<]S[^C])+[\<][\/]SCRIPT[\>]/gi), t = "", u, i;
            if (r && r.length)
                for (u = 0; u < r.length; u++)
                    i = r[u].split(">"),
                        i.shift(),
                        i = i.join(">"),
                        t += i.substr(0, i.length - 9),
                    t && t.substr(t.length - 1) != ";" && (t += ";");
            return t
        },
        setLeadQ: function(n) {
            var i = qz.data[n], t, r;
            if (quiz.isLC && (qz.data["LCQ" + quiz.schema.id] = n),
                i.qObj) {
                for (t in quiz.schema.questions)
                    r = i.qObj.schema.questions[t] = quiz.schema.questions[t],
                        r.lead_capture = !0;
                qz.evt(n, "Lead", {
                    status: "leadcapture"
                })
            }
        },
        results: function(n, t) {
            var i = qz.data[n];
            n = n.substr(1);
            qz.setWait(1);
            qz.xSend("Quiz.Results " + t + "-" + n, (qz.apiKey ? "apikey=" + qz.apiKey : "") + (qz.clang ? "&lang=" + qz.clang.toUpperCase() : ""), function(n, t, i) {
                return function(n) {
                    if (n == "R")
                        document.location = "https://www.quiz-maker.com/results" + t + "-" + i + (qz.clang ? "/" + qz.clang.toUpperCase() : "");
                    else {
                        var u = /class[\=][\'\"][^\'\"]*quiz[\-]container[^\'\"]+quiz[\-]lc[^\'\"]*[\'\"]/i.test(n)
                            , r = u ? "ntabs" : "results";
                        n = n.replace(/(id=[\']quiz[\-])tabs([\'])/gi, "$1" + r + "$2").replace(/document.tabs[\[]0[\]]([\.]show[\(])/gi, "quiz.obj('quiz-" + r + "').tabs$1");
                        quiz.reInit({
                            html: n,
                            lc: u,
                            res: 1,
                            rid: t,
                            tn: r
                        });
                        qz.nohash || (document.location.hash = "R" + t + "-" + i);
                        qz.evt("Q" + i, "Results", {
                            status: "results"
                        })
                    }
                }
            }(i, t, n))
        },
        leStyle: function(n, t) {
            if (qz.leFIN) {
                qz.styleLoad(n, t);
                return
            }
            var i = getComputedStyle(qz.obj(".qp_quiz", 2), null).borderBottomStyle;
            i == "dotted" && (qz.leFIN = 1);
            qz.leTMR = setTimeout(qz.leTFN, 300)
        },
        styleLoad: function(n, t) {
            var i, u, r;
            clearTimeout(qz.leTMR);
            i = qz.data[n + "-" + (t ? t : 0)];
            i.sk++;
            i.sk > 0 && (i.m.style.visibility = "hidden",
                i.m.innerHTML = i.html.replace(/([\'\"])([\/][\/][\w]+)/gi, "$1" + qz.ssl + "$2"),
            quiz.rid && "Q" + quiz.ref != n && (quiz.rid = "",
            qz.nohash || (document.location.hash = "")),
                quiz.embed = !0,
                qz.evt(n, t, "Load", {
                    status: "loaded"
                }),
                u = navigator.userAgent + "",
            (/MSIE|Trident|Edge/.test(u) || /^((?!chrome|android).)*safari/i.test(u)) && document.compatMode == "BackCompat" && quiz.addCSS(".qp_a", "height:auto!important;"),
                i.sc ? setTimeout(i.sc + "qz.loadTabs();qz.created('" + n + "'," + t + ");quiz.init();qz.quizReady('" + n + "'," + t + ");", 1) : (qz.loadTabs(),
                    qz.created(n, t),
                    quiz.init(),
                    qz.quizReady(n, t)),
                i.m.style.visibility = "",
            i.tb && (i.tb.tb.style.height = ""),
            i.fs && (i.m.style.font = "inherit",
                i.m.style.color = "inherit"),
            i.fs || (r = qz.obj(".qp_quiz[q='" + n + "'] .qp_progress", 2),
            r && getComputedStyle(r).position == "fixed" && (r.style.position = "absolute")))
        },
        created: function(n, t) {
            qz.apiKey && (quiz.apiKey = qz.apiKey,
            qz.data[n + "-" + t] && qz.data[n + "-" + t].track && (quiz.track = qz.data[n + "-" + t].track),
            quiz.schema && delete quiz.schema.id,
                qz.evt(n, t, "Create", {
                    status: "created",
                    schema: quiz.schema
                }))
        },
        async: function(n, t, i) {
            var f = document;
            if (f.getElementById(n))
                return i && i(),
                    !1;
            var u = t.indexOf(".css") == -1 ? "script" : "link"
                , r = f.createElement(u)
                , e = f.getElementsByTagName(u)[0];
            u == "link" && (r.setAttribute("type", "text/css"),
                r.setAttribute("rel", "stylesheet"));
            r[u == "script" ? "src" : "href"] = t.substr(0, 4) == "http" ? t : (/[\/]{2}test[\.]/.test(t) ? "http:" : "https:") + (t.substr(0, 2) == "//" ? "" : "//") + t;
            r.id = n;
            i && r.addEventListener("load", function(n) {
                i(null, n)
            }, !1);
            e.parentNode.insertBefore(r, e)
        },
        evt: function(n, t, i, r) {
            var u = qz.data[n + "-" + t], t;
            if (u && u.qObj) {
                for (t in r)
                    u.qObj[t] = r[t];
                if (u.qObj["on" + i] && u.qObj["on" + i](u.qObj) === !1)
                    return !1
            }
            return !0
        },
        apiR: function(n) {
            var h = qz.data["LC" + n.qid], t, r, u, e, o, f, s, i;
            if (h && (n.qid = h),
                t = qz.data[n.qid + "-" + (n.k ? n.k : 0)],
            t && t.qObj) {
                if (t.qObj.response || (r = {
                    questions: {}
                },
                quiz.order && (r.question_order = quiz.order.join(",")),
                quiz.track && (r.track = quiz.track),
                    t.qObj.response = r),
                    n.answers) {
                    var l = String.fromCharCode(209)
                        , a = String.fromCharCode(166)
                        , c = n.answers.split(l);
                    for (i = 0; i < c.length; i++)
                        if (u = c[i].split(a),
                            u[1]) {
                            for (e = {
                                answers: []
                            },
                                     o = u[1].split(","),
                                     f = 0; f < o.length; f++)
                                e.answers.push(parseInt(o[f]));
                            t.qObj.response.questions["Q" + u[0]] = e
                        }
                    delete n.answers
                }
                if (n.questions) {
                    for (s in n.questions)
                        t.qObj.response.questions[s] = n.questions[s];
                    delete n.questions
                }
                delete n.qid;
                for (i in n)
                    t.qObj.response[i] = n[i]
            }
        }
    },
document.currentScript && (qz.dcs = document.currentScript.src + "",
    qz.host = qz.dcs.split("/")[2]),
qz.host.split(".")[0] == "test" && (qz.tst = 1)),
    "loaded;interactive;complete".indexOf(document.readyState) != -1 ? qz.init() : qz.addE(document, "DOMContentLoaded", qz.init),
    gg = {
        c: 0,
        m: 0,
        mF: [],
        cF: [],
        ref: "",
        tChart: {
            c: 0,
            opt: {
                chartArea: {
                    top: 20,
                    backgroundColor: "#FFFFFF"
                },
                backgroundColor: "#FFFFFF",
                colors: ["#006FB9", "#5BCFFC", "#163463", "#82BF49", "#84D9C9", "#4D8C7A", "#D9BC2B", "#F27C38", "#D93D3D", "#8E0B07", "#404040", "#262626"],
                is3D: !0,
                legend: {
                    position: "bottom",
                    textStyle: {
                        color: "#434343",
                        fontSize: 11
                    }
                },
                width: "100%",
                fontSize: 11
            }
        },
        obj: function(n, t) {
            return document.qzScript ? qz.obj(n, t) : obj(n, t)
        },
        xSend: function(n, t, i) {
            return document.qzScript ? qz.xSend(n, t, i) : xSend(n, t, i)
        },
        async: function(n, t, i) {
            return document.qzScript ? qz.async(n, t, i) : async(n, t, i)
        },
        attachE: function(n, t, i, r) {
            return document.qzScript ? qz.addE(n, t, i, r) : attachE(n, t, i, r)
        },
        cU: "www.google.com/jsapi?callback=gInit",
        mU: "maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=visualization&callback=gInit",
        load: function(n) {
            gg[n] || gg.async("gapi" + n, gg[n + "U"] + n, n == "c" ? gInitc : gInitm)
        },
        run: function(n, t, i) {
            gg[n + t] || (gg[n] == 2 ? i() : (gg[n + "F"].push(i),
                gg.load(n)))
        },
        init: function(n) {
            for (gg[n] = 2,
                     n += "F"; gg[n].length; ) {
                var t = gg[n].shift();
                t()
            }
        },
        makeExpL: function(n, t, i) {
            var r = document.createElement("A");
            r.className = "chart-export";
            r.target = "_blank";
            r.href = n.getImageURI();
            r.setAttribute("download", i + ".png");
            r = t.parentNode.appendChild(r)
        },
        getTimeLine: function() {
            gg.run("c", "t", function() {
                google.load("visualization", "1", {
                    callback: "gg.timeData",
                    packages: ["corechart"]
                })
            })
        },
        timeData: function(n) {
            gg.obj("time-canvas").setAttribute("wait", 1);
            n && gg.tChart.n && gg.tChart.c.draw(google.visualization.arrayToDataTable(gg.tChart.n), gg.tChart.opt);
            gg.xSend({
                s: "Quiz.Results_TimelineData " + gg.ref,
                utf: 1,
                noLog: 1,
                cb: function(n) {
                    var t, u, i, r, f;
                    if (n.substr(0, 1) != "D")
                        return console.log(n),
                            !1;
                    for (n = n.substr(1),
                             t = gg.tChart.d = n.split("~"),
                             t[0] = t[0].split("|"),
                             u = t.concat([]),
                             i = 1; i < t.length; i++)
                        for (t[i] = t[i].split("|"),
                                 u[i] = t[i].concat([]),
                                 r = 1; r < t[i].length; r++)
                            t[i][r] = parseInt(t[i][r]),
                                u[i][r] = 0;
                    f = google.visualization.arrayToDataTable(t);
                    gg.tChart.n = u;
                    gg.tChart.c = new google.visualization.LineChart(gg.obj("time-canvas"));
                    gg.tChart.c.draw(f, gg.tChart.opt);
                    gg.makeExpL(gg.tChart.c, gg.obj("time-canvas"), "timeline");
                    gg.ct = 1;
                    gg.obj("time-canvas").removeAttribute("wait")
                }
            })
        },
        getMap: function() {
            return document.mapStart ? !0 : (document.lfK = 0,
                document.mapStart = function() {
                    if (document.lfK++,
                    document.lfK == 4) {
                        var n = document.gMap = L.map("map-canvas");
                        n._handlers.forEach(function(n) {
                            n.disable()
                        });
                        gg.attachE(gg.obj("map-loader"), "mousedown", function() {
                            if (!gg.obj("map-loader").loaded) {
                                gg.obj("map-loader").loaded = 1;
                                gg.obj("map-loader").setAttribute("wait", 1);
                                var t = document.gl = L.mapboxGL({
                                    attribution: '<a href="https://www.maptiler.com/license/maps/" target="_blank">© MapTiler<\/a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors<\/a>',
                                    accessToken: "not-needed",
                                    style: "https://api.maptiler.com/maps/streets/style.json?key=vHvrAnkOBn26Z7Z6n5XA"
                                }).addTo(n);
                                t._glMap.on("load", function() {
                                    n._handlers.forEach(function(n) {
                                        n.enable()
                                    });
                                    n.drawHeat();
                                    gg.obj("map-loader").removeAttribute("wait");
                                    gg.obj("map-loader").removeAttribute("load")
                                })
                            }
                        });
                        gg.mapData()
                    }
                }
                ,
                gg.obj("map-loader").setAttribute("load", 0),
                gg.async("lf01", "//unpkg.com/leaflet@1.3.1/dist/leaflet.css", document.mapStart),
                gg.async("lf06", "//api.tiles.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css", document.mapStart),
                gg.async("lf02", "//unpkg.com/leaflet@1.3.1/dist/leaflet.js", function() {
                    gg.async("lf04", "//api.tiles.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.js", function() {
                        gg.async("lf05", "//cdn.klokantech.com/mapbox-gl-leaflet/latest/leaflet-mapbox-gl.js", document.mapStart);
                        gg.async("lf03", "//cdn.poll-maker.com/pm-leaflet-heat.js", document.mapStart)
                    })
                }),
                !0)
        },
        mapData: function(n) {
            if (gg.obj("map-loader").setAttribute("wait", 1),
                n) {
                var t = document.gMap;
                t.heat && (t.removeLayer(t.heat),
                    t.heat = 0)
            }
            gg.xSend({
                s: "Quiz.Results_GeoData " + gg.ref,
                utf: 1,
                cb: function(n) {
                    var o, f, e, r, u, i;
                    if (n.substr(0, 1) != "D" || n == "D")
                        return console.log(n),
                            !1;
                    n = n.substr(1);
                    var s = []
                        , h = n.split(",")
                        , c = 0
                        , t = {
                        w: 1,
                        min: {
                            lat: !1,
                            lng: !1
                        },
                        max: {
                            lat: !1,
                            lng: !1
                        }
                    };
                    for (o = 0; o < h.length; o++)
                        f = h[o].split(";"),
                            e = f[2] ? parseInt(f[2]) : 1,
                            c += e,
                            r = parseFloat(f[0]),
                            u = parseFloat(f[1]),
                            s.push([r, u, e]),
                        e > t.w && (t.w = e),
                        (r < t.min.lat || t.min.lat === !1) && (t.min.lat = r),
                        (u < t.min.lng || t.min.lng === !1) && (t.min.lng = u),
                        (r > t.max.lat || t.max.lat === !1) && (t.max.lat = r),
                        (u > t.max.lng || t.max.lng === !1) && (t.max.lng = u);
                    i = document.gMap;
                    i.drawHeat = function(n, i) {
                        return function() {
                            n.heat && n.removeLayer(n.heat);
                            n.heat = i.length < 20 ? L.heatLayer(i, {
                                minOpacity: .7,
                                max: t.w / 4,
                                blur: 5,
                                radius: 7,
                                gradient: {
                                    .1: "lime",
                                    .5: "yellow",
                                    .75: "red"
                                }
                            }).addTo(n) : L.heatLayer(i, {
                                minOpacity: .2,
                                max: t.w / 4,
                                blur: 5,
                                radius: 15,
                                gradient: {
                                    .1: "lime",
                                    .5: "yellow",
                                    .75: "red"
                                }
                            }).addTo(n)
                        }
                    }(i, s);
                    i.drawHeat();
                    document.body.offsetWidth <= 375 ? i.fitBounds([[84.336980376396042, 103.35937499999227], [-59.175928249272658, -139.92187500000568]], {
                        linear: !0,
                        duration: 0
                    }) : document.body.offsetWidth <= 767 ? i.fitBounds([[75.845168540271885, 233.43749999999272], [-60.58696734225461, -195.46875000000003]], {
                        linear: !0,
                        duration: 0
                    }) : i.fitBounds([[-43.5434, -159.53], [61.1441, 176.9167]], {
                        linear: !0,
                        duration: 0
                    });
                    gg.obj("map-loader").removeAttribute("wait")
                }
            })
        }
    },
    !document.qzVote) {
    document.qzVote = 1;
    document.utf = 1;
    iquiz = {};
    typeof quiz == "object" && (iquiz = quiz);
    quiz = {
        ref: "",
        rid: "",
        saveFirst: 0,
        save: 0,
        rand: 0,
        fin: 0,
        tidx: 1,
        cidx: 0,
        qidx: 0,
        cq: 1,
        maxQ: 0,
        ca: 0,
        ct: "",
        scrollDr: "f",
        lastST: 0,
        retry: 0,
        nexttime: 2e3,
        cSave: [],
        requires: "",
        cInf: "",
        emptyX: [],
        autoadv: 0,
        noadv: 0,
        autoscore: 0,
        tmr: (new Date).getTime(),
        noalert: 0,
        msgL: [],
        blockTab: [],
        score: {
            t: 0,
            qi: 0,
            qc: 0,
            qp: 0,
            c: 0,
            max: 0
        },
        aVal: {},
        shareData: {},
        plugins: {},
        callbacks: {},
        sendA: {
            e: ["public", "embed", "owner", "notify", "apipost", "ucodes", "vanon"],
            a: ["sref", "ct", "check", "apikey", "integrate", "connect", "lk", "ftmr", "tool"]
        },
        setN: function(n) {
            for (var t in n)
                quiz[t] = n[t]
        },
        obj: function(n, t) {
            return document.qzScript ? qz.obj(n, t) : obj(n, t)
        },
        addE: function(n, t, i, r) {
            return document.qzScript ? qz.addE(n, t, i, r) : attachE(n, t, i, r)
        },
        loadTabs: function() {
            document.qzScript ? qz.loadTabs() : loadTabs()
        },
        xSend: function(n, t, i) {
            return document.qzScript ? qz.xSend(n, t, i) : xSend(n, t, i)
        },
        async: function(n, t, i) {
            return document.qzScript ? qz.async(n, t, i) : async(n, t, i)
        },
        setWait: function(n, t, i, r) {
            return document.qzScript ? qz.setWait(n, t, i, r) : setWait(n, t, i, r)
        },
        gEvent: function() {},
        qsV: function(n, t) {
            t = t ? t : document.location + "";
            try {
                return new RegExp("[\\?\\&]" + n + "[\\=]([^\\&\\?\\=\\#]+)").exec(t)[1]
            } catch (i) {}
            return ""
        },
        evt: function(n, t) {
            return quiz.runCB(n, t),
                document.qzScript ? qz.evt("Q" + quiz.ref, n, t) : !0
        },
        apiR: function(n) {
            document.qzScript && quiz.apiKey && (n.qid = "Q" + quiz.ref,
                qz.apiR(n))
        },
        addCB: function(n, t) {
            quiz.callbacks[n] || (quiz.callbacks[n] = []);
            quiz.callbacks[n].push(t)
        },
        runCB: function(n, t) {
            var u, i, f, r;
            if (!quiz.callbacks[n])
                return u;
            for (i = 0; i < quiz.callbacks[n].length; i++)
                f = quiz.callbacks[n][i],
                f && (delete r,
                    r = f(t),
                typeof r != "undefined" && (u = r));
            return u
        },
        getProp: function(n, t, i, r) {
            var e, u, f;
            if (t.indexOf(".") != -1) {
                for (e = t.split("."),
                         u = n,
                         f = 0; f < e.length; f++) {
                    if (typeof u[e[f]] == "undefined" && i && f < e.length - 1 && (u[e[f]] = {}),
                    typeof u[e[f]] != "object")
                        return i && (u[e[f]] = r),
                            u[e[f]];
                    u = u[e[f]]
                }
                return i && (u = r),
                    u
            }
            return i && (n[t] = r),
                n[t]
        },
        msg: function(n, t) {
            n = quiz.translate(n) + (t ? t : "");
            n && (quiz.noalert ? quiz.msgL.unshift(n) : quiz.win({
                id: "alert",
                msg: n
            }))
        },
        translate: function(n, t, i) {
            var s = n + "", f, r, u, e, o;
            if (quiz.tmsg)
                for (f = 0; f < quiz.tmsg.list.length; f++) {
                    if (r = quiz.tmsg.list[f],
                        u = r.t,
                    t && r.c && (u = r.c[t] ? r.c[t] : n),
                    r.v == n || r.v == "<h2>" + n + "<\/h2>")
                        return u;
                    if (i && r.ids) {
                        for (e = 0,
                                 o = 0; !e && o < r.ids.length; o++)
                            r.ids[o] == i && (e = 1);
                        if (e)
                            return u
                    } else
                        r.v && (s = s.replace(new RegExp(r.v,"gi"), u))
                }
            return s
        },
        translateAll: function(n) {
            var o, r, f, t, u, i, e, s;
            for (quiz.clang = n,
                 typeof qz == "object" && (qz.clang = n),
                     o = quiz.obj(".qp_title,.qp_qi,.qp_instruct,.qp_t,.qp_a > DIV", 3),
                     f = 0; f < o.length; f++) {
                t = o[f];
                r = 0;
                switch (t.className) {
                    case "qp_qi":
                    case "qp_instruct":
                        for (u = t; u && u.className != "take-q"; )
                            u = u.parentNode;
                        u && (r = u.getAttribute("qid") + "_q");
                        t.original || (t.original = t.innerHTML);
                        t.innerHTML = quiz.translate(t.original, n, r);
                        break;
                    case "qp_t":
                        for (i = [],
                                 e = 0; e < t.childNodes.length; e++)
                            s = t.childNodes[e],
                                i[s.nodeType] = s;
                        i[1] && (r = (i[1].name + "").replace(/qp_v/gi, "") + "_a" + i[1].value);
                        i[3] && (t.original || (t.original = i[3].textContent),
                            i[3].textContent = quiz.translate(t.original, n, r));
                        break;
                    case "qp_title":
                        r = "t";
                    default:
                        t.original || (t.original = t.innerHTML);
                        t.innerHTML = quiz.translate(t.original, n, r)
                }
            }
        },
        login: function(n) {
            var t, i;
            if (n == 2) {
                quiz.isSignup = quiz.isSignup ? 0 : 1;
                quiz.obj("#quiz-login INPUT").value = quiz.obj(".qp_qi", 2).innerHTML = quiz.translate(quiz.isSignup ? "Create Account" : "Login");
                quiz.obj("quiz-signup").innerHTML = quiz.translate(quiz.isSignup ? "Login" : "Create Account");
                return
            }
            !n && quiz.isSignup && (n = 1);
            quiz.setWait(1);
            t = quiz.loginI = function(n) {
                return quiz.obj(".qp_" + n + "_inp", 1)
            }
            ;
            t("em").type == "hidden" && t("em").value != "test@test.com" && (t("em").value = "x");
            i = t("em").parentNode.getAttribute("n");
            quiz.xSend({
                s: "Quiz." + (n ? "Signup" : "Login") + " " + quiz.dx(0).replace(/[^\w\d]+/gi, ""),
                d: !n || n == 1 ? "em=" + encodeURIComponent(t("em").value) + (i ? "&tp=" + i : "") + "&pw=" + encodeURIComponent(t("pw").value) + (quiz.rid ? "&id=" + encodeURIComponent(quiz.rid) : "") : "s=" + n,
                cb: function(n) {
                    var t, i;
                    if (n = n.split(";"),
                        t = n.shift(),
                        n = n.join(";"),
                    t == "X") {
                        quiz.setWait(0);
                        i = quiz.obj(".qp_qi");
                        i.innerHTML = i.innerHTML.replace(/signup/gi);
                        return
                    }
                    t && t != "E" ? quiz.loginInit(n) : (quiz.setWait(0),
                        quiz.msg(n ? n : "Unable to login, please check your connection"))
                }
            })
        },
        expFrame: function(n) {
            parent.window.postMessage('{"qid":"Q' + quiz.ref + '","k":' + quiz.frk + ',"act":"' + (n ? "max" : "min") + '"}', "*");
            document.body.setAttribute("qpmax", n ? 1 : 0)
        },
        verifyWin: function(n) {
            if (quiz.runCB("verify-init", n) !== !1) {
                if (!quiz.pHost(1).pm || qsV("vframe") == "y") {
                    quiz.verifyWinF(n);
                    return
                }
                quiz.embed && window.innerWidth <= 320 && quiz.expFrame(1);
                quiz.setWait(1);
                var t = document.body.getAttribute("lang");
                quiz.runCB("verify-win", n) !== !1 && quiz.xSend({
                    s: "Quiz.Verify_Win " + quiz.ref,
                    d: "d=" + (quiz.verify ? encodeURIComponent(JSON.stringify(quiz.verify)) : "") + (quiz.langID ? "&lang=" + quiz.langID : "") + (t ? "&lc=" + t : "") + (quiz.vanon ? "&vanon=y" : ""),
                    cmsg: n,
                    cb: function(n, t) {
                        quiz.runCB("verify-show", {
                            s: t,
                            r: n
                        }) !== !1 && (quiz.win({
                            id: "verify",
                            msg: "<span class='quiz-verify'>" + n + "<\/span>",
                            show: 0,
                            btns: []
                        }),
                        t.cmsg && (quiz.obj(".qp_verify_msg").innerHTML = sys.translate(t.cmsg)),
                            quiz.requires = quiz.obj("verify-inp").getAttribute("src"),
                            quiz.setReq(function() {
                                quiz.runReq();
                                quiz.setWait(0);
                                quiz.win({
                                    id: "verify",
                                    show: 1
                                })
                            }))
                    }
                })
            }
        },
        verifyWinF: function(n) {
            var t = document.body.getAttribute("lang");
            quiz.addE(window, "message", function(t) {
                var i, r, u, f;
                if ((t.data + " ").substr(0, 1) == "{") {
                    i = JSON.parse(t.data);
                    switch (i.act) {
                        case "verify":
                            quiz.setWait(0);
                            quiz.win({
                                id: "verifyf",
                                show: 1
                            });
                            r = quiz.obj(".quiz-verify");
                            u = '{"act":"vwin","quiz":{"ref":"' + quiz.ref + '","verify":' + JSON.stringify(quiz.verify) + ',"langID":' + (quiz.langID ? quiz.langID : 0) + ',"vanon":' + (quiz.vanon ? quiz.vanon : 0) + "}" + (n ? ',"cmsg":"' + n.replace(/[\"]/gi, "'") + '"' : "") + "}";
                            r.contentWindow.postMessage(u, "*");
                            break;
                        case "verifycb":
                            quiz.win({
                                id: "verifyf",
                                show: 0
                            });
                            quiz.lk = i.lk;
                            quiz.saveCB && (f = quiz.saveCB,
                                quiz.saveCB = !1,
                                f())
                    }
                }
            });
            quiz.win({
                id: "verifyf",
                msg: "<iframe class='quiz-verify' src=\"https://take.quiz-maker.com/api/Quiz.Verify_Frame\"><\/iframe>",
                show: 0,
                btns: []
            })
        },
        verifyFrame: function() {
            quiz.addE(window, "message", function(n) {
                var t, i;
                if ((n.data + " ").substr(0, 1) == "{") {
                    t = JSON.parse(n.data);
                    switch (t.act) {
                        case "vwin":
                            for (i in t.quiz)
                                quiz[i] = t.quiz[i];
                            quiz.verifyWin(t.cmsg)
                    }
                }
            });
            top.postMessage('{"act":"verify"}', "*")
        },
        loginInit: function(n) {
            var r, i, u, t;
            if (quiz.timeout) {
                quiz.setWait(0);
                quiz.win({
                    id: "login",
                    show: 0
                });
                quiz.timeout();
                return
            }
            quiz.obj(".qp_qi", 1).innerHTML = quiz.translate("Your session has timed out, please login again");
            r = quiz.reInit({
                html: n,
                su: 1
            });
            r.m.className = "quiz-container quiz-embed";
            quiz.saveFirst = 1;
            quiz.setWait(0);
            quiz.win({
                id: "login",
                msg: "<span class='quiz-login'>" + r.phtml + "<\/span>",
                show: 0,
                btns: []
            });
            i = quiz.loginI;
            i && (i("em").value = "",
                i("pw").value = "");
            u = quiz.obj(".preview-tb", 2);
            u && u.setAttribute("login", "y");
            t = document.location.hash;
            t.substr(0, 1) == "#" && (t = t.substr(1));
            t.substr(0, 1) == "R" && setTimeout(function() {
                return function() {
                    quiz.resumeH(t, 1)
                }
            }(t), 2)
        },
        forgot: function(n, t) {
            quiz.win({
                id: "alert",
                show: 0
            });
            quiz.setWait(1);
            quiz.xSend({
                s: "Quiz.Forgot_Password " + quiz.dx(0).replace(/[^\w\d]+/gi, ""),
                d: "em=" + encodeURIComponent(quiz.loginI("em").value) + (n ? "&rc=" + encodeURIComponent(n) + "&pw=" + encodeURIComponent(t) : ""),
                cb: function(n) {
                    quiz.setWait(0);
                    n = n.split(";");
                    var t = n.shift();
                    n = n.join(";");
                    switch (t) {
                        case "E":
                        case "":
                            n = n.split(";");
                            quiz.win({
                                id: "forgot",
                                show: 0
                            });
                            quiz.msg(n[0] ? n[0] : "Unable to send password reset link, please contact the quiz or survey creator", " (code " + !n[1] ? 700 : n[1] + ")");
                            return;
                        case "M":
                            quiz.werr("forgot", n);
                            return;
                        case "S":
                            quiz.win({
                                id: "forgot",
                                msg: quiz.translate("An email has been sent to your email address with a code to reset your password") + ".<br><br>" + quiz.translate("Enter the code and your new password below to continue") + "<br><div style='max-width:250px; margin:40px auto;'><input class='qp_txti' type='text' value='' placeholder='" + quiz.translate("Reset Code") + "' style='margin:0 0 20px 0;'><input class='qp_txti' type='password' value='' placeholder='" + quiz.translate("New Password") + "'><\/div>",
                                show: 1,
                                btns: [{
                                    id: "fgsave",
                                    v: "Save",
                                    cn: "qp-win-y",
                                    cb: function() {
                                        var n = quiz.obj("#forgot .qp_txti", 3)
                                            , r = n[0].parentNode.parentNode
                                            , t = n[0].value
                                            , i = n[1].value;
                                        if (quiz.werr("forgot"),
                                        !t || (t + "").replace(/[^0-9]/gi).length < 6) {
                                            quiz.werr("forgot", quiz.translate("Please enter a valid Reset Code"), n[0]);
                                            return
                                        }
                                        if (!i || (i + "").replace(/^[\s]+|[\s]+$/gi).length < 6) {
                                            quiz.werr("forgot", quiz.translate("Your new password must be a minimum of 6 characters"), n[1]);
                                            return
                                        }
                                        quiz.forgot(t, i)
                                    }
                                }, {
                                    id: "fgsend",
                                    v: "Resend Code",
                                    cn: "qp-win-n",
                                    cb: function() {
                                        quiz.plugins.winforgot.xCB();
                                        quiz.forgot()
                                    }
                                }, {
                                    id: "fgx",
                                    v: "Cancel",
                                    cn: "qp-win-n",
                                    cb: function() {
                                        quiz.plugins.winforgot.xCB()
                                    }
                                }]
                            });
                            return;
                        default:
                            quiz.win({
                                id: "forgot",
                                show: 0
                            });
                            quiz.loginInit(n);
                            return
                    }
                }
            })
        },
        win: function(n) {
            if (n.msg && (n.msg + "").indexOf("<") == -1 && (n.msg = n.msg.replace(/[\n]/gi, "<br>")),
                quiz.plugins["win" + n.id]) {
                var t = n.show || n.show == 0 ? n.show : 1;
                n.msg && (quiz.obj("#" + n.id + " .qp-win-body").innerHTML = n.msg);
                n = quiz.plugins["win" + n.id];
                n.show = t;
                n.w.setAttribute("show", t);
                return
            }
            n.id == "alert" && quiz.addE(document.body, "keyup", function(n) {
                if (n.keyCode == 13) {
                    var t = quiz.plugins.winalert;
                    if (console.log("test", t.show),
                    t && t.show)
                        return quiz.win({
                            id: "alert",
                            show: 0
                        }),
                            n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                        n.stopPropagation && n.stopPropagation(),
                            !1
                }
            });
            n.xCB || (n.xCB = function(n) {
                return function() {
                    n.show = 0;
                    n.w.setAttribute("show", 0)
                }
            }(n));
            n.nCB || (n.nCB = n.xCB);
            n.yCB || (n.yCB = function(n) {
                return function() {
                    n.yes(n) && n.xCB()
                }
            }(n));
            n.btns || (n.btns = [],
                n.btns.push({
                    v: "OK",
                    id: n.id + "_y",
                    cn: "qp-win-y",
                    cb: n.yes ? n.yCB : n.nCB
                }),
            n.yes && n.btns.push({
                v: "Cancel",
                id: n.id + "_n",
                cn: "qp-win-n",
                cb: n.nCB
            }));
            n.w = document.createElement("DIV");
            n.w.className = "qp-win";
            n.w.id = n.id;
            n.w.innerHTML = "<div class='qp-blur' vis=" + (n.blur == 0 ? 0 : 1) + "><\/div><div class='qp-win-i'><div><div class='qp-win-title'>" + (n.title ? n.title : "") + "<\/div><div class='qp-win-body'>" + (n.msg ? n.msg : "") + "<\/div><div class='qp-win-btns'>" + quiz.wbtn(n.btns ? n.btns : [{
                v: "OK",
                id: n.id + "_y",
                cn: "qp-win-y",
                cb: n.yCB
            }, {
                v: "Cancel",
                id: n.id + "_n",
                cn: "qp-win-n",
                cb: n.nCB
            }]) + "<\/div><\/div><\/div>";
            n.err = function(n) {
                return function(t, i) {
                    for (var u = quiz.obj("#" + n.id + " .qp-win-body,#" + n.id + " *[err]", 3), r = 0; r < u.length; r++)
                        u[r].removeAttribute("err");
                    t && (setTimeout(function(n, t) {
                        return function() {
                            n.setAttribute("err", t)
                        }
                    }(u[0], t), 300),
                    i && i.setAttribute("err", 1))
                }
            }(n);
            document.body.appendChild(n.w);
            n.show = n.show == 0 ? 0 : 1;
            n.w.setAttribute("show", n.show);
            quiz.plugins["win" + n.id] = n
        },
        wbtn: function(n) {
            for (var t = 0; t < n.length; t++)
                quiz.addCB("btn" + n[t].id, n[t].cb),
                    n[t] = "<a href='javascript:void(0)' class='qp_hr" + (t == 0 && n.length <= 2 ? "a" : "b") + " qp_btna" + (n[t].cn ? " " + n[t].cn : "") + "'><input id='" + n[t].id + "' class='qp_btn' type='button' value='" + quiz.translate(n[t].v) + "' onclick=\"quiz.runCB('btn'+this.id)\"><\/a>";
            return n.join("")
        },
        werr: function(n, t, i) {
            quiz.plugins["win" + n].err(t, i)
        },
        addLang: function(n) {
            if (!quiz.tmsg) {
                quiz.tmsg = {
                    list: n
                };
                quiz.tmsg.c = n.length;
                return
            }
            quiz.tmsg.list = quiz.tmsg.list.concat(n);
            quiz.tmsg.c = quiz.tmsg.list.length
        },
        setLang: function(n, t, i) {
            var f, r, u;
            if (!document.body) {
                setTimeout(function(n, t, i) {
                    return function() {
                        quiz.setLang(n, t, i)
                    }
                }(n, t, i), 100);
                return
            }
            for (t && t.list && (quiz.addLang(t.list),
            t.id && (quiz.langID = t.id)),
                 i && (",ar,he,iw,fa,".indexOf((i + "_").split("_")[0]) != -1 && (document.body.className += " rtl"),
                 typeof qz != "object" && document.body.setAttribute("lang", i)),
                     f = document.querySelectorAll("SPAN[date]"),
                     r = 0; r < f.length; r++)
                u = new Date,
                    u.setTime((parseFloat(f[r].getAttribute("date")) - 25569) * 864e5),
                    f[r].innerHTML = u.toLocaleDateString ? u.toLocaleDateString(n) : u.toLocaleString()
        },
        fileDrop: function(n, t) {
            try {
                n.stopPropagation();
                n.preventDefault()
            } catch (n) {
                n.cancelValue = !0
            }
            switch (n.type) {
                case "dragover":
                    t.setAttribute("drag", 1);
                    break;
                case "dragleave":
                    t.setAttribute("drag", 0);
                    break;
                case "drop":
                    t.setAttribute("drag", 2);
                    var i = n.target.files || n.dataTransfer.files;
                    quiz.uploadFile(n, t.previousSibling, i)
            }
            return !1
        },
        uploadFile: function(n, t, i, r) {
            var d, s, k, h, v, y, o, b, tt, l, e, it, f, a, w, u, ft;
            if (i || (i = t.files),
                i) {
                if (d = t.parentNode,
                    s = t.u,
                s || (t.u = s = {
                    list: []
                }),
                    k = t.getAttribute("min"),
                    h = t.getAttribute("max"),
                    k = k ? parseInt(k) : -1,
                    h = h ? parseInt(h) : -1,
                    v = t.getAttribute("accept"),
                    y = parseFloat(t.getAttribute("size")) * 1024,
                (v || y) && !r) {
                    for (e = [],
                             b = "av",
                             f = 0; f < i.length; f++) {
                        var g = i[f]
                            , nt = (g.name + "").split(".").pop().toLowerCase()
                            , p = 0;
                        if (v) {
                            if (v.indexOf("/") != -1)
                                o = v.split("/"),
                                    tt = (g.type + "").split("/"),
                                o[0] == tt[0] && (o[1] == tt[1] || o[1] == "*") && (p = 1);
                            else
                                for (o = v.split(","),
                                         l = 0; l < o.length; l++)
                                    o[l] = o[l].replace(/^[\s\.]+|[\s]+$/gi, "").toLowerCase(),
                                    (o[l] == nt || o[l] == "*") && (p = 1);
                            p || (b = "av")
                        }
                        y && (p = g.size <= y ? 1 : 0,
                        p || (b = "sz"));
                        p && e.push(i[f])
                    }
                    if (!e.length) {
                        quiz.msg(b == "av" ? quiz.translate("You must select a file of the type") + ': "' + quiz.translate(t.getAttribute("ftype")) + '"' : quiz.translate("You must select a file less than") + " " + quiz.szN(y));
                        return
                    }
                    i.length != e.length && quiz.msg(quiz.translate("Some of the files you have selected are not") + " " + (b == "av" ? '"' + quiz.translate(t.getAttribute("ftype")) + '" ' + quiz.translate("files") : quiz.translate("less than") + " " + quiz.szN(y)));
                    i = e
                }
                if (!t.parentNode.getAttribute("Multiple") && i.length > 1 && (i = [i[0]]),
                !r && h != -1 && i.length + s.list.length > h) {
                    for (e = [],
                             f = 0; f < h - s.list.length; f++)
                        e.push(i[f]);
                    if ((!e.length || i.length != e.length) && (alert(quiz.translate("Please only upload a maximum of") + " " + h + " " + quiz.translate("files")),
                        !e.length))
                        return;
                    i = e
                }
                if (!r && !quiz.rid) {
                    if (quiz.setWait(1),
                        it = function(n, t, i) {
                            return function() {
                                quiz.uploadFile(n, t, i)
                            }
                        }(n, t, i),
                    quiz.save == 1) {
                        setTimeout(it, 5e3);
                        return
                    }
                    quiz.saveCB = it;
                    quiz.saveQ("SAVE");
                    return
                }
                for (quiz.setWait(0),
                         f = 0; f < i.length; f++) {
                    a = document.createElement("DIV");
                    a.className = "qp_fbox";
                    a.innerHTML = "<div class='qp_fbox_img'><\/div><div class='qp_fbox_n'><\/div><div class='qp_progress qp_progp'><div class='qp_progi' p='0' style='width:0%;'><\/div><\/div><div class='qp_fbox_x'><\/div>";
                    d.appendChild(a);
                    w = a.childNodes;
                    u = {
                        dom: a,
                        ft: 6e4,
                        st: (new Date).getTime(),
                        first: 1,
                        fn: i[f].name,
                        i: t,
                        p: d,
                        img: w[0],
                        n: w[1],
                        prog: w[2],
                        bar: w[2].childNodes[0],
                        x: w[3]
                    };
                    u.xhr = new XMLHttpRequest;
                    u.onProgress = function(n) {
                        return function() {
                            n.ct = (new Date).getTime();
                            n.tt = n.ct - n.st;
                            n.pct = Math.round(n.tt * 100 / n.ft);
                            n.pct >= 99 && (n.pct = 99,
                                clearInterval(n.tmr));
                            n.bar.setAttribute("p", n.pct);
                            n.prog.setAttribute("in", parseInt(getComputedStyle(n.bar, null).width) > 33 ? 1 : 0)
                        }
                    }(u);
                    u.onCancel = function(n) {
                        return function() {
                            try {
                                n.xhr.abort()
                            } catch (i) {}
                            var t = function() {
                                for (var i = n.i.u.list, r = [], u = 0, t = 0; t < i.length; t++)
                                    t != n.idx && (i[t].idx = u,
                                        u++,
                                        r.push(i[t]));
                                n.i.u.list = r;
                                n.p.removeChild(n.dom);
                                n.i.q = n.i.u.list.length;
                                n.p.setAttribute("q", n.i.q);
                                n.i.value = ""
                            };
                            n.delkey ? (quiz.setWait(1),
                                quiz.xSend("Quiz.Remove_File " + n.delkey, 0, function(n) {
                                    return function(t) {
                                        quiz.setWait(0);
                                        t = t.split(";");
                                        t[0] == "Y" ? (n(),
                                            quiz.saveQ("SAVE")) : quiz.msg(t[0] == "E" && t[1] ? t[1] : "Unable to delete file")
                                    }
                                }(t))) : t()
                        }
                    }(u);
                    u.n.setAttribute("fn", u.fn);
                    quiz.addE(u.x, "click", u.onCancel);
                    quiz.addE(u.img, ["mouseover", "mouseout"], function(n) {
                        document.body.setAttribute("tabvis", n.type == "mouseover" ? 1 : 0)
                    });
                    s.list.push(u);
                    u.idx = s.list.length - 1;
                    u.p.setAttribute("q", s.list.length);
                    var nt = (i[f].name + "").split(".").pop().toLowerCase()
                        , c = ""
                        , ut = new RegExp("[\\,\\w]*?" + nt + "[\\,\\w]*?[\\:]([\\w]+)","i")
                        , rt = ut.exec("xls,xlsx,xlsm,xlt,xltx,xlsb,xla,xlam,xps,ods,csv:excel;pdf:pdf;zip,rar:archive;txt:text;doc,docx,docm,dot,dotx,dotm,wps,odt:word;ppt,pptx,pptm,pot,potx,potm,pps,ppsx,ppsm,ppa,ppam,odp:powerpoint");
                    if (rt && rt[1] && (c = rt[1]),
                    c || (c = (i[f].type + "/").split("/")[0],
                    "image,audio,video,text".indexOf(c) == -1 && (c = "")),
                        u.fico = c,
                        u.img.className += " fa-file" + (c ? "-" + c : "") + "-o",
                        u.n.setAttribute("sz", quiz.szN(i[f].size)),
                        i[f].delkey)
                        u.delkey = i[f].delkey,
                            u.url = i[f].url,
                        u.fico == "image" && (u.img.style.backgroundImage = "URL(" + u.url + ")",
                            u.img.setAttribute("img", 1));
                    else {
                        if ((i[f].type + "/").split("/")[0] == "image")
                            try {
                                reader = new FileReader;
                                reader.onload = function(n) {
                                    return function(t) {
                                        n.img.setAttribute("img", 1);
                                        n.img.style.backgroundImage = "URL(" + t.target.result + ")"
                                    }
                                }(u);
                                reader.readAsDataURL(i[f])
                            } catch (n) {}
                        a.setAttribute("up", 1);
                        u.bar.setAttribute("a", 1);
                        ft = document.body.offsetWidth;
                        u.bar.style.width = "100%";
                        u.tmr = setInterval(u.onProgress, 250);
                        u.xhr.open("POST", "https://www.quiz-maker.com/qapi/Upload_File 1;" + encodeURIComponent(quiz.ref + ";" + quiz.rid + ";" + t.id.substr(4) + ";" + (i[f].type + "").replace(/[\;]/gi, "") + ";" + i[f].name), !0);
                        u.xhr.onload = function(n) {
                            return function() {
                                var t = (n.xhr.responseText + "").split(";");
                                t[0] == "Y" ? (n.url = "https:" + t[1],
                                    n.delkey = t[2],
                                    n.dom.removeAttribute("up"),
                                    n.i.q = n.i.u.list.length,
                                    n.p.setAttribute("q", n.i.q),
                                    quiz.saveQ("SAVE")) : (quiz.msg(t[0] == "E" && t[1] ? t[1] : "File upload failed, please try again"),
                                    n.onCancel())
                            }
                        }(u);
                        u.xhr.onerror = function(n) {
                            return function(t) {
                                t.type == "error" && (n.onCancel(),
                                    alert("Error: Unable to upload file\n\nMaximum file size is 100 MB"))
                            }
                        }(u);
                        u.xhr.upload.onprogress = function(n) {
                            return function(t) {
                                t.lengthComputable && (clearInterval(n.tmr),
                                    n.bar.removeAttribute("a"),
                                    n.pct = Math.round(t.loaded * 100 / t.total),
                                    n.bar.style.width = n.pct + "%",
                                    n.bar.setAttribute("p", n.pct),
                                    n.prog.setAttribute("in", parseInt(getComputedStyle(n.bar, null).width) > 33 ? 1 : 0))
                            }
                        }(u);
                        u.xhr.send(i[f])
                    }
                }
            }
        },
        szN: function(n) {
            for (var t = 0; n >= 1024; )
                n = n / 1024,
                    t++;
            return (t ? Math.round(n) + " " + " KMGTPEZ".charAt(t) : "1 K") + "B"
        },
        scrollTo: function(n) {
            var i;
            if (!quiz.scrolltabs) {
                if (i = n ? n : !1,
                    !n) {
                    var t = quiz.findPos(quiz.tbox)
                        , u = t.sp.clientHeight - (t.y + quiz.tbox.offsetHeight)
                        , r = t.sp.clientHeight - quiz.tbox.offsetHeight;
                    u < 0 ? i = t.y < 0 || r < 0 ? t.st + t.y - (r > 15 ? 15 : 5) : t.st - u - (t.y > 15 ? 15 : 5) : t.y < 0 && (i = t.st + t.y - (r > 15 ? 15 : 5))
                }
                i != !1 && (quiz.ref == "PREVIEW" && (typeof sys == "undefined" || typeof sys.wpreview == "undefined") && (i = 0),
                    quiz.easeScroll(i))
            }
        },
        scrollRoot: function() {
            return quiz.scrollParent || document.scrollingElement || document.documentElement
        },
        easeScroll: function(n, t, i) {
            typeof n != "object" && (n = {
                ev: n,
                cb: t,
                i: i
            });
            n.i || (n.i = quiz.scrollRoot());
            quiz.scrollT && clearInterval(quiz.scrollT.tmr);
            quiz.scrollT = {
                i: n.i,
                start: (new Date).getTime(),
                sv: n.i.scrollTop,
                cv: n.i.scrollTop,
                ev: 0,
                d: 300,
                cb: t
            };
            for (var r in n)
                quiz.scrollT[r] = n[r];
            quiz.scrollT.tmr = setInterval(quiz.easeScrollTo, 10)
        },
        easeScrollTo: function() {
            var n = quiz.scrollT
                , t = (new Date).getTime() - n.start;
            if (n.sv <= n.ev && n.cv >= n.ev || n.sv > n.ev && n.cv <= n.ev)
                return n.i.scrollTop = n.ev,
                    clearInterval(n.tmr),
                n.cb && n.cb(),
                    quiz.scrollT = !1,
                    !1;
            n.cv = (n.ev - n.sv) * (t /= n.d) * t * t + n.sv;
            n.i.scrollTop = n.cv
        },
        findPos: function(n) {
            var t = {
                x: 0,
                y: window.pageYOffset ? 0 - window.pageYOffset : 0,
                xa: 0,
                ya: 0,
                sp: document.body,
                st: window.pageYOffset ? window.pageYOffset : 0
            }, i;
            if (n.offsetParent)
                do
                    n.offsetParent && (t.x += n.offsetLeft - n.scrollLeft,
                        t.xa += n.offsetLeft,
                        t.y += n.offsetTop - n.scrollTop,
                        t.ya += n.offsetTop,
                        t.st += n.scrollTop),
                    (n.scrollHeight > n.offsetHeight || n.scrollWidth > n.offsetWidth) && (i = getComputedStyle(n, null).overflow,
                    i != "hidden" && i != "visible" && (t.sp = n));
                while (n = n.offsetParent);
            return t
        },
        sel: function(n, t, i) {
            var c, r, e, o, s, t, u, f, l, h;
            if (!quiz.noadv) {
                for (n === !1 ? (c = t,
                    t = t.parentNode.parentNode) : (n = n ? n : event,
                    c = n.target ? n.target : n.srcElement),
                         r = t.getElementsByTagName("INPUT")[0],
                     c.tagName != "INPUT" && (r.checked = r.type == "radio" ? !0 : !r.checked),
                     (i || i === 0) && (i = i ? !0 : !1,
                     r.checked != i && (r.checked = i)),
                         e = t.parentNode.parentNode.parentNode,
                     e.tagName == "TBODY" && (e = e.parentNode),
                     e.tagName == "TABLE" && (e = e.parentNode),
                         o = e.getElementsByTagName("INPUT"),
                         s = -1,
                         u = 0; u < o.length; u++)
                    f = o[u].parentNode.parentNode,
                        t = o[u].checked ? 1 : 0,
                        f.setAttribute("sel", t),
                    t && (s = u),
                    o[u].value == "999" && e.setAttribute("other", o[u].checked ? 1 : 0);
                for (u = 0; u < o.length; u++)
                    o[u].parentNode.parentNode.setAttribute("cm", u <= s ? 1 : 0);
                if (quiz.checkLogic(quiz.saveQ("LOGIC"), 1),
                (r.type == "checkbox" || r.type == "radio") && quiz.checkMand(r, s > -1),
                quiz.autoadv || quiz.scrolltabs) {
                    for (f = r; f && (f.className + "").indexOf("take-q") == -1; )
                        f = f.parentNode;
                    if ((quiz.autoadv || quiz.scrolltabs) && (r.type == "radio" || r.type == "checkbox" && f.getAttribute("fmt") == "2" && (quiz.scrolltabs || f.getAttribute("skip") != "1")) && n) {
                        if (r.value == "999" || r.getAttribute("pid")) {
                            quiz.cntr.setAttribute("btns", 1);
                            return
                        }
                        l = "+1";
                        h = document.body.getAttribute("last");
                        (document.body.getAttribute("tend-" + quiz.tabs.tid) == "1" || h == "1") && (h && h != "1" || (l = "E"));
                        f.nextSibling && (f.nextSibling.className + "").indexOf("take-q") != -1 || quiz.saveQ(l)
                    }
                }
            }
        },
        checkAdv: function(n) {
            var i, t;
            if (!quiz.autoadv && !quiz.scrolltabs || n && n.noadv)
                return 0;
            for (i = "+1",
                 quiz.obj("quiz-end").offsetHeight && (i = "E"),
                     t = n; t && (t.className + "").indexOf("take-q") == -1; )
                t = t.parentNode;
            if (!t.nextSibling || (t.nextSibling.className + "").indexOf("take-q") == -1)
                return i
        },
        hov: function(n, t) {
            var i = t.parentNode.parentNode.parentNode, u = i.getElementsByTagName("INPUT"), f = i.idx, r;
            if (i.idx = parseInt(t.getAttribute("v") - 1),
            n.type == "mouseover" || i.idx == f)
                for (r = 0; r < u.length; r++)
                    u[r].parentNode.parentNode.setAttribute("cmhov", r <= i.idx ? 1 : 0)
        },
        setRank: function(n, t) {
            if (t == 999) {
                var i = quiz.obj((n.name + "").replace(/qp_v/gi, "qp_main"));
                i.setAttribute("other", n.value ? 1 : 0)
            }
        },
        newOrder: function() {
            var t = quiz.tabs.t.length, i, r, n, u;
            for (quiz.rand > t + 1 && (quiz.rand = t + 1),
                     quiz.order = [],
                     n = quiz.rand - 1; n < t; n++)
                quiz.order.push(n + 1);
            if (quiz.fy(quiz.order),
            quiz.rand > 1)
                for (n = quiz.rand - 2; n >= 0; n--)
                    quiz.order.unshift(n + 1);
            for (i = [],
                     r = 0,
                     n = 0; n < quiz.order.length; n++)
                r += quiz.tabs.qk[quiz.order[n] - 1],
                    i.push(r),
                quiz.scrolltabs && quiz.tabs.t[0].parentNode.appendChild(quiz.tabs.t[quiz.order[n] - 1]),
                    u = quiz.tabs.t[quiz.order[n] - 1],
                    u.ord = n + 1;
            quiz.tabs.qt = i;
            quiz.randTab(1)
        },
        getOrdP: function(n) {
            if (n || n == 0 || (n = quiz.tidx),
                quiz.order)
                for (var t = 0; t < quiz.order.length; t++)
                    quiz.order[t] == n && (n = t + 1,
                        t = quiz.order.length);
            return n = n ? n : 1,
            (quiz.ucodes || quiz.startp || quiz.sref) && n--,
                n
        },
        getOrdT: function(n) {
            return quiz.order && (n = quiz.order[n - 1]),
                n ? n : 1
        },
        fy: function(n, t, i, r) {
            for (i = n.length; i; )
                t = Math.random() * i-- | 0,
                    r = n[i],
                    n[i] = n[t],
                    n[t] = r
        },
        dx: function(n) {
            for (var t = (quiz.dxo[parseInt(n)] + "").replace(/[A-Z]/g, function(n) {
                return n = n.charCodeAt(0) - 66,
                    n == -1 ? "-" : n == 10 ? "," : n + "" + n
            }).split(","), c = [1181050948, 896747570, 24900], n = t.length, u = t[n - 1], f = t[0], s, h, l = Math.floor(6 + 52 / n), e = l * 2654435769, r, o, i; e != 0; ) {
                for (h = e >>> 2 & 3,
                         r = n - 1; r >= 0; r--)
                    u = t[r > 0 ? r - 1 : n - 1],
                        s = (u >>> 5 ^ f << 2) + (f >>> 3 ^ u << 4) ^ (e ^ f) + (c[r & 3 ^ h] ^ u),
                        f = t[r] -= s;
                e -= 2654435769
            }
            for (o = new Array(t.length),
                     i = 0; i < t.length; i++)
                o[i] = String.fromCharCode(t[i] & 255, t[i] >>> 8 & 255, t[i] >>> 16 & 255, t[i] >>> 24 & 255);
            return o.join("")
        },
        dxi: function(n) {
            var u = quiz.obj("qp_shareimg"), f, r, i, t;
            if (u)
                for (f = "id",
                     quiz.dxo || (r = u.outerHTML.split('"')[3],
                         quiz.dxo = r.substr(43, r.length - 44).split("/")),
                         i = document.querySelectorAll(n + " *[e" + f + "x]"),
                         t = 0; t < i.length; t++)
                    i[t].innerHTML = decodeURIComponent(quiz.dx(i[t].getAttribute("eidx")))
        },
        sessionKntr: function(n) {
            var i = 1, t;
            try {
                if (t = parseInt(sessionStorage.getItem("session-kntr")),
                    t)
                    if (n)
                        i = t + 1;
                    else
                        return t;
                sessionStorage.setItem("session-kntr", i)
            } catch (r) {}
            return i
        },
        startTime: function(n) {
            var t = quiz.getTT(), i;
            quiz.timeIDX = n;
            try {
                i = parseFloat(sessionStorage.getItem(quiz.sesK + "-" + quiz.ref + "-" + n));
                i ? t = i : sessionStorage.setItem(quiz.sesK + "-" + quiz.ref + "-" + n, t)
            } catch (r) {}
            return t
        },
        checkTime: function(n, t, i) {
            var r = document.querySelectorAll(".qp_progress_time")[0], u, c, s;
            if (!n || quiz.fin == 1) {
                clearInterval(quiz.qTMR);
                quiz.qTMR = 0;
                delete quiz.timeIDX;
                r && r.removeAttribute("t");
                quiz.evt("Timer", {
                    p: r,
                    s: 9
                });
                return
            }
            u = Math.round(n - (quiz.getTT() - t) / 1e3) + 1;
            u > n && (u = n);
            var f = u % 60
                , e = (u - f) / 60 % 60
                , o = parseInt((u - e * 60 - f) / 3600)
                , h = quiz.getTT() >= t + n * 1e3 ? 3 : f < 11 && e == 0 && o == 0 ? 2 : i ? 0 : 1;
            r && (r.setAttribute("t", (o == 0 ? "" : (o < 10 ? "0" : "") + o + ":") + (e < 10 ? "0" : "") + e + ":" + (f < 10 ? "0" : "") + f),
                r.setAttribute("out", h > 1 ? 1 : 0));
            quiz.evt("Timer", {
                p: r,
                s: h,
                qtt: n,
                tt: u,
                st: t
            });
            h == 3 && (clearInterval(quiz.qTMR),
                quiz.qTMR = 0,
                quiz.qtimer ? (quiz.between({
                    s: 0,
                    hide: 1
                }),
                    quiz.clearNCA(),
                    clearTimeout(quiz.nextTMR),
                    quiz.nextTMR = 0,
                    delete quiz.nextFN,
                    quiz.saveQ("E", 1, 0, 1),
                    sessionStorage.removeItem(quiz.sesK + "-" + quiz.ref + "-0")) : (c = "+1",
                    s = document.body.getAttribute("last"),
                (document.body.getAttribute("tend-" + quiz.tabs.tid) == "1" || s == "1") && (s && s != "1" || (c = "E")),
                    quiz.blockTab[quiz.timeIDX] = 1,
                    delete quiz.timeIDX),
                r.setAttribute("t", "00:00"),
                quiz.saveQ(c, 1, 0, 1))
        },
        setMaxT: function(n) {
            var r = quiz.tabs.h, t, i;
            if (r)
                for (t = 0; t < n; t++)
                    i = r[t],
                    i && i.setAttribute("c", 1)
        },
        setTab: function(n, t, i) {
            var y, k, u, a, d, g, v, c, o, s, h, r, nt, p, w, e, f, tt, b, l;
            if (quiz.tabs && t + "" != "undefined") {
                if (document.body.setAttribute("startp", t ? 1 : 0),
                    y = quiz.obj("preview-qn"),
                y && (k = parseInt(y.getAttribute("offset")),
                    y.value = parseInt(n) + (k ? k : 0)),
                    n = parseInt(n),
                    quiz.tidx = n,
                    u = quiz.tabs.t[n - 1],
                quiz.autoadv && quiz.cntr.setAttribute("btns", quiz.tabs.t[n - 1].lastSingle ? 0 : 1),
                u && u.tagName) {
                    for (quiz.setMaxT(n),
                             quiz.dxi("DIV[tid='" + u.getAttribute("tid") + "']"),
                             a = parseFloat(u.getAttribute("time")),
                         i && !a || quiz.qtimer || (a ? (f = quiz.startTime(n),
                             quiz.checkTime(a, f, 1),
                             clearInterval(quiz.qTMR),
                             quiz.qTMR = setInterval(function(n, t) {
                                 return function() {
                                     quiz.checkTime(n, t)
                                 }
                             }(a, f), 333)) : quiz.checkTime(0)),
                         !i && quiz.qtimer && quiz.timerpg > 1 && quiz.initTimer(),
                         quiz.prog && quiz.tabs.qt && (d = quiz.getOrdP(n),
                             quiz.setProg(quiz.prog.pt == "p" ? d == 1 ? 0 : quiz.tabs.qt[d - 2] : 0)),
                             u.setAttribute("upto", 1),
                             g = quiz.obj("DIV[tid='" + u.getAttribute("tid") + "'] .take-q", 3),
                             v = 0; v < g.length; v++)
                        if (c = g[v],
                        (c.className + "").indexOf("take-q") != -1) {
                            if (o = c.getElementsByTagName("INPUT"),
                            c.getAttribute("rand") == "1") {
                                for (s = [],
                                         r = 0; r < o.length; r++)
                                    (o[r].type == "checkbox" || o[r].type == "radio") && o[r].value != "999" && s.push(o[r]);
                                for (u.style.visibility = "hidden",
                                         h = document.createElement("DIV"),
                                         r = 0; r < s.length; r++)
                                    nt = Math.floor(Math.random() * s.length),
                                    nt != r && s[r].value != "999" && (p = s[r].parentNode.parentNode,
                                        w = s[nt].parentNode.parentNode,
                                        p.parentNode.insertBefore(h, p),
                                        w.parentNode.insertBefore(p, w),
                                        h.parentNode.insertBefore(w, h));
                                h.parentNode && h.parentNode.removeChild(h);
                                u.style.visibility = ""
                            }
                            i || v != 0 || !o[0] || quiz.noFocus || o[0].focus();
                            quiz.runCB("q" + c.getAttribute("qid") + "v", c);
                            quiz.scrolltabs && !quiz.fromScroll && (e = quiz.scrollTabs(u),
                                e.idx == 0 ? f = 0 : (f = e.y[e.idx] - e.ym,
                                f > e.p[e.idx].ya && (f = e.p[e.idx].ya)),
                                i || quiz.noSL ? e.r.scrollTop = f : (quiz.fromTab = 1,
                                    quiz.easeScroll(f, function() {
                                        setTimeout(function() {
                                            quiz.fromTab = 0
                                        }, 100)
                                    })))
                        }
                    tt = u.getAttribute("tid");
                    try {
                        gg.ref = quiz.ref;
                        switch (tt) {
                            case "geo":
                                gg.getMap();
                                break;
                            case "time":
                                gg.getTimeLine()
                        }
                    } catch (it) {}
                    b = u.getAttribute("mark");
                    l = quiz.obj("quiz-score");
                    b && (quiz.tabSaved = !0);
                    l && (b ? (l.setAttribute("mark", b),
                        l.setAttribute("score", u.getAttribute("score"))) : (l.removeAttribute("mark"),
                        l.removeAttribute("score")))
                }
                setTimeout(function() {
                    document.getElementsByTagName("body")[0].focus()
                }, 601)
            }
        },
        onScroll: function() {
            if (!quiz.fromTab && quiz.scrolltabs) {
                if (clearTimeout(quiz.scrollTmr),
                    quiz.scrollTmr = setTimeout(function() {
                        quiz.scrollCalc = 0;
                        quiz.fromScroll = 0
                    }, 100),
                    quiz.scrollCalc)
                    n = quiz.scrollCalc,
                        n.reCalc();
                else
                    var n = quiz.scrollCalc = quiz.scrollTabs();
                if (quiz.timeIDX) {
                    clearTimeout(quiz.scrollTTmr);
                    quiz.scrollTTmr = setTimeout(function() {
                        var n = quiz.scrollTabs(), t = quiz.timeIDX, i;
                        (t || t === 0) && n.r.scrollTop > n.p[t - 1].ya + n.t[t - 1].offsetHeight + 100 && (n.idx == 0 ? i = 0 : (i = n.y[t - 1] - n.ym,
                        i > n.p[t - 1].ya && (i = n.p[t].ya)),
                            quiz.easeScroll(i))
                    }, 300);
                    return
                }
                n.idx != n.sidx && (quiz.fromScroll = 1,
                    quiz.goTab(quiz.getOrdT(n.sidx + 1), 1),
                    quiz.scrollCalc.idx = parseInt(quiz.tabs.idx) - 1);
                n.r.scrollHeight - n.st - n.r.clientHeight < 30 ? quiz.scrollEnd || (quiz.cntr.setAttribute("scrollend", 1),
                    quiz.scrollEnd = 1) : quiz.scrollEnd && (quiz.scrollEnd = 0,
                    quiz.cntr.removeAttribute("scrollend"))
            }
        },
        scrollTabs: function(n) {
            var t = {
                idx: parseInt(quiz.tabs.idx) - 1,
                sidx: 0,
                t: quiz.obj("DIV[tid]", 3),
                p: [],
                y: [],
                r: quiz.scrollRoot()
            }, i, r;
            for (t.st = y = t.r.scrollTop,
                     t.ym = Math.round((t.r.clientHeight - 60) / 2),
                     t.setS = function(n) {
                         t.st < 50 ? n == 0 && (t.sidx = n) : t.y[n] && t.st >= t.p[n].ya - t.ym && (t.sidx = n)
                     }
                     ,
                     t.setDr = function() {
                         t.st != quiz.lastST && (quiz.scrollDr = t.st - quiz.lastST < 0 ? "b" : "f");
                         quiz.lastST = t.st
                     }
                     ,
                     t.reCalc = function() {
                         t.st = y = t.r.scrollTop;
                         t.setDr();
                         for (var n = 0; n < t.t.length; n++)
                             t.setS(n)
                     }
                     ,
                     t.setDr(),
                     i = 0; i < t.t.length; i++)
                t.t[i] == n && (t.idx = i),
                    r = t.t[i].childNodes[0],
                    t.p[i] = quiz.findPos(r),
                    t.y[i] = t.p[i].ya + Math.round(r.offsetHeight / 2),
                    t.setS(i);
            return t
        },
        scrollToTab: function(n, t, i) {
            quiz.scrolltabs && (t || quiz.scrollEnd || n != quiz.tabs.idx) && (quiz.scrollDr = "f",
                quiz.scrollEnd = 0,
                quiz.cntr.removeAttribute("scrollend"),
                quiz.goTab(n, i))
        },
        initScrollTabs: function() {
            quiz.cntr && (quiz.cntr.className = (quiz.cntr.className + "").replace(/[\s]*qp[\_]scrolltabs/gi, "") + (quiz.scrolltabs ? " qp_scrolltabs" : ""));
            quiz.nexttime = quiz.scrolltabs ? 1500 : 2e3
        },
        clearNC: function() {
            setTimeout(function() {
                quiz.noclick = 0
            }, 250)
        },
        clearNCA: function() {
            quiz.tbox.style.pointerEvents = "";
            quiz.noadv = 0;
            quiz.noclick = 0
        },
        joinLive: function() {
            quiz.setWait(1);
            quiz.saveCB = function() {
                quiz.setWait(0)
            }
            ;
            quiz.saveQ("+1", 1, 1)
        },
        liveWaitNext: function(n, t) {
            var u, f, o, i, r, e;
            if (quiz.obj("lw-msg") || (u = quiz.obj("quiz-tabs").parentNode,
                u = document.body,
                f = u.insertBefore(document.createElement("DIV"), u.childNodes[0]),
                f.id = "lw-msg",
                f.innerHTML = "Waiting for Presenter",
                o = f.offsetWidth),
                clearTimeout(quiz.liveWaitTMR),
                quiz.liveWaitTMR = setTimeout(quiz.liveWait, 1e3),
                document.body.setAttribute("livewait", 1),
                document.body.setAttribute("livech", n == "Q" ? 1 : 0),
                quiz.obj("quiz-next").getElementsByTagName("INPUT")[0].value = n == "Q" ? "Change" : "Waiting...",
            t || n != "Q" && quiz.sblock && quiz.liveWaitQ != 0) {
                if (i = quiz.lwAllowMove("0"),
                    tmax = quiz.tbox.tabs.t.length,
                i.m < tmax && (tmax = i.m),
                    quiz.autoscore)
                    for (r = 1; r < tmax; r++)
                        e = quiz.tbox.tabs.t[r].max,
                        t && r == i.m - 1 && n == "Q" && (e = 0),
                        e || e === 0 || (quiz.saveQ("SCORE", r),
                            quiz.loadResponse(quiz.cScore));
                i.m == i.p ? (quiz.noadv = 1,
                    quiz.noclick = 1,
                    quiz.tbox.style.pointerEvents = "none") : quiz.clearNCA()
            } else
                quiz.clearNCA()
        },
        clearWaitNext: function() {
            clearTimeout(quiz.liveWaitTMR);
            document.body.setAttribute("livewait", 0);
            quiz.obj("quiz-next").getElementsByTagName("INPUT")[0].value = "Next";
            quiz.clearNCA()
        },
        liveWait: function() {
            clearTimeout(quiz.liveWaitTMR);
            quiz.xSend({
                s: "Quiz.Live_Wait " + quiz.sref,
                d: 0,
                noLog: 1,
                cb: function(n) {
                    var i = n.substr(0, 1), t;
                    i == "Q" || i == "A" ? (t = n.substr(1),
                        t = t == "E" ? t : parseInt(t),
                        quiz.liveWaitCB(t, i)) : quiz.liveWaitNext(i)
                }
            })
        },
        liveWaitCB: function(n, t, i) {
            if (n == quiz.liveWaitQ && !i) {
                quiz.liveWaitNext(t);
                return
            }
            if ((n == 9999 || n == "E") && quiz.end != 1) {
                if (i) {
                    quiz.sblock = 0;
                    quiz.clearWaitNext();
                    quiz.goNext("+1");
                    return
                }
                n = 0
            }
            quiz.liveWaitQ = n;
            switch (n) {
                case 0:
                    quiz.obj("DIV[tid='0'] .qp_a > DIV:first-child", 1).innerHTML = "Please wait for the presenter to start the quiz...";
                    quiz.obj("quiz-start").style.cssText = "opacity:0.5; pointer-events:none;";
                    quiz.obj("quiz-start").getElementsByTagName("INPUT")[0].value = "Waiting...";
                    quiz.liveWaitNext(t);
                    break;
                case 9999:
                case "E":
                    quiz.clearWaitNext();
                    quiz.endSV == 1 ? quiz.endSV = 2 : (quiz.endSV = 2,
                        quiz.setWait(1),
                        quiz.goEnd());
                    break;
                default:
                    var r = quiz.lwAllowMove("+1")
                        , f = quiz.obj("DIV[qid='" + n + "']", 1).parentNode
                        , u = 0;
                    i ? r.y && (u = 1) : r.m == r.p && (u = 1);
                    u ? (quiz.goNext("+1"),
                        quiz.clearWaitNext()) : quiz.liveWaitNext(t)
            }
        },
        lwAllowMove: function(n) {
            var u = n == "E" ? quiz.tbox.tabs.t.length : (typeof n == "string" ? quiz.tbox.tabs.idx : 0) + parseInt(n), r = 1, i, t;
            if (quiz.liveWaitQ)
                if (quiz.liveWaitQ == "E" || quiz.liveWaitQ == 9999)
                    r = quiz.tbox.tabs.t.length + 1;
                else {
                    for (i = quiz.liveWaitQ + "",
                         i.indexOf(".") != -1 && (i = i.split(".")[0]),
                             t = quiz.obj("DIV[qid='" + i + "'], TBODY[qid='" + i + "']", 1); t.parentNode && !t.parentNode.idx && t.parentNode.idx !== 0; )
                        t = t.parentNode;
                    t && t.parentNode && (r = t.parentNode.idx)
                }
            return {
                y: u <= r,
                m: u,
                p: r
            }
        },
        getTags: function(n, t) {
            var f = [], i, u, r;
            for (t = t.split(","),
                     i = 0; i < t.length; i++)
                for (u = n.getElementsByTagName(t[i]),
                         r = 0; r < u.length; r++)
                    f.push(u[r]);
            return f
        },
        getAtt: function(n, t, i) {
            var e = {}, u, f, r;
            if (t = t.split(","),
                !n.getAttribute)
                return e;
            for (u = 0; u < t.length; u++)
                f = (t[u] + ":n").split(":"),
                    r = n.getAttribute((i ? i : "") + f[0]),
                f[1] == "n" && (r = r ? parseInt(r) : 0),
                    e[f[0]] = r;
            return e
        },
        clearErr: function() {
            for (var t = quiz.obj(".take-q[err]", 3), n = 0; n < t.length; n++)
                t[n].removeAttribute("err")
        },
        setErr: function(n, t) {
            var i = quiz.obj(".take-q[qid='" + n + "']", 2), r;
            i && (quiz.scrolltabs ? quiz.scrollToTab(i.parentNode.idx) : (r = quiz.tbox.style,
                r.overflow = "visible",
                i.scrollIntoView({
                    behavior: "smooth"
                }),
                r.overflow = ""),
                i.setAttribute("err", 1),
            quiz.msgL[0] && quiz.obj(".take-q[qid='" + n + "'] > SPAN:last-of-type", 2).setAttribute("emsg", quiz.msgL[0]),
            t && t.focus && t.focus())
        },
        saveQ: function(n, t, i, r) {
             var dt, nt, at, vt, yt, d, f, gt, fi, wi, ot, pt, u, ni, ei, st, oi, bi, ft, s, l, si, g, ti, ki, wt, et, di, ii, ri, tr, ir, gi, hi, o, a, it, bt, ht, ci, ct, kt, y, b, h, nr, e, rr, ut, p, li, w, v, ai, ur, c;
            if (!i && quiz.nextTMR && (clearTimeout(quiz.nextTMR),
                quiz.nextTMR = 0,
            quiz.nextFN && !quiz.nextFN()))
                return delete quiz.nextFN,
                    !1;
            if ((i || n == "SCORE" || n == "LOGIC" || n == "SAVE" || !(quiz.noadv || quiz.noclick)) && (n != "LOGIC" || quiz.fin != 1)) {
                n != "SCORE" && n != "LOGIC" && n != "SAVE" && (quiz.noclick = 1,
                    dt = 1);
                var lt, vi = quiz.tabs, yi = parseInt(vi.idx), ui = 0, pi = 0;
                if (n == "SCORE" || n == "LOGIC" || n == "SAVE" ? (lt = vi.t[!t && t !== 0 ? yi - 1 : t],
                    t = 1,
                    ui = 1) : (lt = vi.t[yi - 1],
                    quiz.cidx = yi,
                    quiz.cq = parseInt(lt.getAttribute("tid")),
                quiz.cq > quiz.maxQ && (quiz.maxQ = quiz.cq),
                    ui = (!quiz.fin || quiz.fin == 2) && (n == "+1" || n == "E")),
                quiz.tabSaved && (quiz.tabSaved = !1,
                n == "+1" || n == "E" && quiz.endSV))
                    if (n == "E") {
                        if (quiz.end == 1) {
                            quiz.goEnd(quiz.rid ? 1 : 0);
                            quiz.clearNC();
                            return
                        }
                    } else {
                        quiz.goNext(n);
                        quiz.clearNC();
                        return
                    }
                if (quiz.clearErr(),
                n == "E" && ui && !quiz.checkAllErr()) {
                    quiz.clearNCA();
                    return
                }
                if (ui) {
                    if (quiz.queue == 2) {
                        quiz.clearNCA();
                        quiz.msg("This quiz has run out of free responses");
                        return
                    }
                    nt = "tt" + quiz.getTT();
                    at = "";
                    n != "LOGIC" && (quiz.cScore = {
                        c: "",
                        f: 2,
                        r: [],
                        hasS: 0
                    });
                    var rt = String.fromCharCode(209)
                        , k = String.fromCharCode(166)
                        , tt = {
                        y: 0,
                        n: 0
                    };
                    if (!i) {
                        for (vt = [],
                                 w = 0; w < lt.childNodes.length; w++)
                            vt.push(lt.childNodes[w]);
                        for (yt = quiz.obj("DIV[tid='" + lt.getAttribute("tid") + "'] TBODY.take-q", 1),
                             yt && (yt.push || (yt = [yt]),
                                 vt = vt.concat(yt)),
                                 w = 0; w < vt.length; w++)
                            if (a = vt[w],
                                d = quiz.getAtt(a, "qid,qt,mark,min,max,skip,pqt,emsg:t"),
                            d.qt == 98 && (quiz.ucodes = 1),
                            a && a.className && a.className.indexOf("take-q") != -1 && d.qt != 99 && (!d.mark || d.mark == 3)) {
                                for (f = {},
                                         o = d.qt == 6 ? [a.childNodes[0]] : quiz.getTags(a, "INPUT,SELECT,TEXTAREA"),
                                         e = 0; e < o.length; e++) {
                                    if (gt = o[e].getAttribute("pid"),
                                        u = gt ? d.qid + "." + gt : d.qid,
                                        !f[u]) {
                                        f[u] = {
                                            v: "",
                                            otv: "",
                                            optk: 0,
                                            isA: 0
                                        };
                                        for (h in d)
                                            f[u][h] = d[h]
                                    }
                                    if (f[u].itp = o[e].tagName == "INPUT" ? o[e].type : o[e].tagName,
                                        gt) {
                                        fi = quiz.getAtt(a, "qid,qt,mark,min,max,skip", gt + "-");
                                        for (h in fi)
                                            fi[h] && (f[u][h] = fi[h]);
                                        a.parentNode.parentNode.getAttribute("skip") + "" == "1" && (f[u].skip = 1)
                                    }
                                    switch (f[u].itp) {
                                        case "checkbox":
                                            o[e].checked && (f[u].optk++,
                                                f[u].v += (f[u].v ? "," : "") + o[e].value);
                                            break;
                                        case "radio":
                                            o[e].checked && (f[u].optk++,
                                                f[u].v = o[e].value);
                                            break;
                                        case "range":
                                            f[u].otv = o[e].value;
                                            f[u].v = f[u].otv ? "999" : "";
                                            break;
                                        case "text":
                                        case "email":
                                        case "url":
                                        case "password":
                                        case "hidden":
                                        case "tel":
                                            /qp_nosave/.test(o[e].className + "") || (/qp_otv/.test(o[e].className + "") && (f[u].otv = o[e].value),
                                            /qp_txti|qp_tv/.test(o[e].className + "") && (f[u].otv = o[e].value,
                                            o[e].reply && (f[u].pass = 1),
                                                f[u].v = f[u].otv ? "999" : ""));
                                            break;
                                        case "number":
                                            /qp_timen|qp_nosave/.test(o[e].className + "") || (/qp_txti|qp_tv/.test(o[e].className + "") ? (f[u].otv = o[e].value,
                                                f[u].v = f[u].otv ? "999" : "") : o[e].value && (f[u].optk++,
                                                f[u].v += (f[u].v ? "," : "") + o[e].getAttribute("oidx") + "=" + o[e].value));
                                            break;
                                        case "file":
                                            if (o[e].u)
                                                for (h = 0; h < o[e].u.list.length; h++)
                                                    if (wi = o[e].u.list[h],
                                                        wi.url)
                                                        f[u].optk++,
                                                            f[u].otv += (f[u].otv ? ", " : "") + wi.url;
                                                    else if (n != "SAVE" && n != "LOGIC") {
                                                        quiz.msg("Please wait for all files to finish uploading before continuing");
                                                        quiz.clearNC();
                                                        return
                                                    }
                                            f[u].v = f[u].otv ? "999" : "";
                                            break;
                                        case "SELECT":
                                            f[u].v = o[e].value;
                                            break;
                                        case "TEXTAREA":
                                            /qp_txti/.test(o[e].className + "") && !/qp_nosave/.test(o[e].className + "") && (f[u].otv = o[e].value,
                                                f[u].v = f[u].otv ? "999" : "")
                                    }
                                }
                                ot = "";
                                pt = f[u] ? quiz.getQTxt(f[u].qid) : "";
                                for (u in f) {
                                    if (f[u].qtxt = (u.indexOf(".") != -1 ? ": " + quiz.obj(".qp_qi[pid='" + u.split(".")[1] + "']").innerHTML + "" : "").replace(/[\<][^\<\>]+[\>]/gi, ""),
                                    f[u].qtxt == ": undefined" && (f[u].qtxt = ""),
                                    f[u].qt == 1 || f[u].qt == 8) {
                                        if (f[u].min && f[u].optk < f[u].min && (ot = " a minimum of " + f[u].min),
                                        f[u].max && f[u].optk > f[u].max && (ot += (ot ? " and" : "") + " a maximum of " + f[u].max),
                                        ot && !t) {
                                            quiz.msg("You must select" + ot + " " + (f[u].qt == 8 ? "files" : "answers") + " for the question:\n\n'" + pt + f[u].qtxt + "'");
                                            quiz.setErr(f[u].qid, o[0]);
                                            quiz.clearNC();
                                            return
                                        }
                                        ot && (f[u].isA = "n")
                                    }
                                    if (ni = quiz.callbacks["q" + f[u].qid],
                                    ni && ni.length)
                                        for (ei = 0; ei < ni.length; ei++)
                                            if (!ni[ei](f[u]))
                                                return;
                                    if (f[u].qt == 3 && f[u].v) {
                                        for (ut = f[u].v.split(","),
                                                 ut.sort(function(n, t) {
                                                     var i = parseFloat(n.split("=")[1])
                                                         , r = parseFloat(t.split("=")[1]);
                                                     return i == r ? 0 : i < r ? -1 : 1
                                                 }),
                                                 c = [],
                                                 e = 0; e < ut.length; e++)
                                            c.push(ut[e].split("=")[0]);
                                        f[u].v = c.join(",")
                                    }
                                    if (f[u].qt != 14 && f[u].otv && f[u].v.indexOf("999") == -1 && (f[u].otv = ""),
                                        f[u].qt == 6 || f[u].pass ? at += (at ? rt : "") + u + k + k : nt += (nt ? rt : "") + u + k + f[u].v + k + (f[u].otv + "").replace(new RegExp(rt,"g"), "@CHAR-N@").replace(new RegExp(k,"g"), "@CHAR-P@"),
                                    f[u].isA || /^[26]$/.test(f[u].qt + "") || (f[u].isA = f[u].v ? "y" : "n"),
                                    f[u].emsg && !t) {
                                        quiz.setErr(f[u].qid, o[0]);
                                        quiz.msg(f[u].emsg.replace(/[\@]Q/gi, pt + f[u].qtxt));
                                        quiz.clearNC();
                                        return
                                    }
                                    if (f[u].v || f[u].pass || f[u].qt == 6 || f[u].skip == 1 || t) {
                                        if ((f[u].otv || f[u].pass) && f[u].qt == 2)
                                            for (o = quiz.getTags(a, "INPUT,TEXTAREA"),
                                                     st = "",
                                                     h = 0; h < o.length; h++)
                                                if (!/[\.]/.test(u + "") || o[h].getAttribute("pid") == u.split(".")[1]) {
                                                    switch (parseInt(o[h].getAttribute("fmt") + "")) {
                                                        case 1:
                                                            ft = /^[A-Z0-9._%+-\\']+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                                                            ft.test(f[u].otv) || (st = "email address");
                                                            break;
                                                        case 2:
                                                            parseFloat(f[u].otv) || parseFloat(f[u].otv) === 0 || (st = "number");
                                                            break;
                                                        case 3:
                                                            ft = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
                                                            ft.test(f[u].otv) || (st = "website address");
                                                            break;
                                                        case 13:
                                                            if (n != "SCORE" && n != "LOGIC" && o[h].reply != "Y" + quiz.dx(parseInt(o[h].getAttribute("fmtre"))).replace(/[^A-Z0-9]/g, "")) {
                                                                quiz.setWait(1);
                                                                quiz.setVN();
                                                                oi = 1;
                                                                bi = parseInt(sessionStorage.getItem("tk"));
                                                                bi && (oi = bi);
                                                                quiz.xSend({
                                                                    s: "Quiz.qpass",
                                                                    d: "q=" + quiz.ref + ";" + f[u].qid + ";" + oi + "&p=" + f[u].otv + "&vn=" + quiz.vn,
                                                                    tk: oi,
                                                                    dr: n,
                                                                    i: o[h],
                                                                    emsg: "You must answer the question:\n\n'" + pt + f[u].qtxt + "'\n\nwith a valid password",
                                                                    cb: function(n, t) {
                                                                        quiz.clearNC();
                                                                        quiz.setWait(0);
                                                                        t.i.value = "";
                                                                        n.substr(0, 1) != "Y" ? (sessionStorage.setItem("tk", t.tk + 1),
                                                                            quiz.msg(n == "X" ? "To many password tries" : t.emsg)) : (t.i.reply = n,
                                                                            t.i.parentNode.className += " qp_block",
                                                                            sessionStorage.setItem("tk", 0),
                                                                            quiz.noclick = 0,
                                                                            quiz.saveQ(t.dr))
                                                                    }
                                                                });
                                                                return
                                                            }
                                                            break;
                                                        case 99:
                                                            ft = new RegExp("^" + o[h].getAttribute("fmtre") + "$","g");
                                                            ft.test(f[u].otv) || (st = "answer")
                                                    }
                                                    if (st && (f[u].isA = "n",
                                                        !t)) {
                                                        quiz.msg("You must answer the question:\n\n'" + pt + f[u].qtxt + "'\n\nwith a valid " + st);
                                                        quiz.setErr(f[u].qid, o[h]);
                                                        quiz.clearNC();
                                                        return
                                                    }
                                                }
                                        f[u].isA || f[u].qt != 2 || (f[u].isA = f[u].otv ? "y" : "n")
                                    } else {
                                        f[u].qt == 98 ? quiz.msg("You must enter a pass code") : (quiz.msg("You must answer the question:\n\n'" + pt + f[u].qtxt + "'"),
                                            quiz.setErr(f[u].qid, o[0]));
                                        quiz.clearNC();
                                        return
                                    }
                                    if (n != "LOGIC" && quiz.localSC && quiz.localSC["q" + u]) {
                                        s = {
                                            q: f[u].qid,
                                            a: f[u].v.split(","),
                                            t: f[u].otv,
                                            opt: {},
                                            s: 0,
                                            score: {
                                                max: 0
                                            },
                                            isC: -1,
                                            isP: 0
                                        };
                                        l = quiz.localSC["q" + u];
                                        u.indexOf(".") != -1 && (s.cq = parseInt(u.split(".")[1]));
                                        for (e in l)
                                            switch (e) {
                                                case "e":
                                                    if (si = l[e][s.s == 0 ? 1 : 0],
                                                    f[u].qt == 1 && s.s == 0 && s.isC == 1 && (si = l[e][0]),
                                                    si != -1) {
                                                        v = quiz.obj("qp_main" + s.q);
                                                        g = quiz.obj("#qp_main" + s.q + " .qp-explain", 1);
                                                        g ? ti = g.childNodes[0] : (n == "E" && (n = "+1"),
                                                            g = v.appendChild(document.createElement("DIV")),
                                                            g.className = "qp-explain",
                                                            g.setAttribute("tp", s.s == 0 ? "n" : "y"),
                                                            ti = g.appendChild(document.createElement("DIV")),
                                                            ti.className = "qp-explaini");
                                                        c = quiz.dx(si);
                                                        try {
                                                            c = decodeURIComponent(c)
                                                        } catch (fr) {
                                                            c = unescape(c)
                                                        }
                                                        ti.innerHTML = c;
                                                        g.show !== 3 && (g.show = 1,
                                                            ki = function(n) {
                                                                return function() {
                                                                    n.setAttribute("show", n.show++)
                                                                }
                                                            }(g),
                                                            setTimeout(ki, 100),
                                                            setTimeout(ki, 401));
                                                        quiz.cScore.expV = 1
                                                    }
                                                    break;
                                                case "xs":
                                                    s.score.cbmulti = l[e];
                                                    s.score.max = l[e][0];
                                                    break;
                                                default:
                                                    wt = e.substr(1);
                                                    et = 0;
                                                    l[e][0] != "y" ? et = l[e][0] > l[e][1] ? l[e][0] : l[e][1] : s.score.zero = 1;
                                                    f[u].qt == 2 ? (et > s.score.max && (s.score.max = et),
                                                    s.s == 0 && (quiz.wcTest(l[e][2], f[u].otv) ? s.s = l[e][0] : (s.s = l[e][1],
                                                        s.cq ? (v = quiz.obj("INPUT[name='qp_v" + s.q + "_" + s.cq + "']", 1),
                                                        v && (v = v.parentNode.parentNode)) : v = quiz.obj("qp_main" + s.q),
                                                    v && (di = quiz.obj("#qp_main" + s.q + " .qp_ao"),
                                                        (di ? di : v).setAttribute("ans", l[e][2]))))) : (s.score.max = f[u].qt == 0 ? et > s.score.max ? et : s.score.max : s.score.max + (et > 0 ? et : 0),
                                                        s.s += ("," + f[u].v + ",").indexOf(wt) != -1 ? l[e][0] === "y" ? 0 : l[e][0] : l[e][1],
                                                    f[u].qt == 1 && ((l[e][0] > 0 || l[e][0] === "y") && ("," + f[u].v + ",").indexOf(wt) == -1 ? s.isC = 0 : s.isC == -1 && (s.isC = 1),
                                                    l[e][0] > 0 || l[e][0] === "y" || ("," + f[u].v + ",").indexOf(wt) == -1 || (s.isC = 0,
                                                        s.isP = 1)));
                                                    s.opt["i" + wt] = {
                                                        oidx: wt,
                                                        score: {
                                                            y: l[e][0],
                                                            n: l[e][1]
                                                        }
                                                    }
                                            }
                                        s.score.cbmulti && (s.isC && (s.s += s.score.cbmulti[0]),
                                        s.isP && (s.s += s.score.cbmulti[1]));
                                        s.score.max && (quiz.cScore.hasS = 1);
                                        quiz.cScore.r.push(s)
                                    }
                                    quiz.fillAns(u, {
                                        qt: f[u].qt,
                                        v: f[u].v.split(","),
                                        otv: f[u].otv
                                    });
                                    f[u].isA && (ii = "q" + f[u].qid,
                                        ri = f[u].isA,
                                        tt[ii] ? tt[ii] == "y" && ri == "n" && (tt.y--,
                                            tt.n++,
                                            tt[ii] = ri) : (tt[ri]++,
                                            tt[ii] = ri))
                                }
                                tr = parseInt(a.getAttribute("pqt"));
                                tr == 7 ? (pi = 1,
                                    quiz.preMatch = quiz.nexttime,
                                    quiz.nexttime = 300,
                                quiz.prog && quiz.prog.p.setAttribute("ntmr", 300),
                                    quiz.tbox.setAttribute("animt", 1e3),
                                    quiz.tbox.className = (quiz.tbox.className + "").replace(/slide/gi, "fade")) : quiz.preMatch && (quiz.nexttime = quiz.preMatch,
                                quiz.prog && quiz.prog.p.setAttribute("ntmr", quiz.preMatch),
                                    quiz.tbox.removeAttribute("animt"),
                                    quiz.tbox.className = (quiz.tbox.className + "").replace(/fade/gi, "slide"))
                            }
                    }
                    if (n == "SCORE" || n == "LOGIC")
                        return ir = quiz.getOrdP(),
                        quiz.tabs.qt && quiz.setProg(quiz.tabs.qt[ir - 1] - tt.n),
                        nt + (!nt || !at ? "" : rt) + at;
                    if (pi) {
                        gi = 1;
                        for (v in quiz.cScore.r)
                            if (c = quiz.cScore.r[v],
                                hi = quiz.obj("qp_main" + c.q),
                            hi && (o = hi.getElementsByTagName("INPUT"),
                                a = hi.parentNode.parentNode,
                                a.setAttribute("mark", 3),
                            a.atKntr || (a.atKntr = 0),
                            parseInt(a.getAttribute("pqt")) == 7))
                                for (e = 0; e < o.length; e++)
                                    if (it = o[e],
                                    it.type == "radio") {
                                        if (bt = it.value && ("," + c.a.join(",") + ",").indexOf("," + it.value + ",") != -1 ? 1 : 0,
                                            ht = c.opt["i" + it.value].score,
                                            it.style.display = "none",
                                            ci = it.parentNode.parentNode,
                                            ci.setAttribute("yes", ht.y > 0 && bt ? 1 : 0),
                                            ci.setAttribute("no", ht.n > 0 && !bt || bt && ht.y < 1 && c.score.max > 0 ? 1 : 0),
                                        ht.y == 0 && bt) {
                                            setTimeout(function(n, t) {
                                                return function() {
                                                    n.checked = 0;
                                                    quiz.autoadv || t.removeAttribute("sel");
                                                    t.setAttribute("clear", 1);
                                                    t.removeAttribute("no");
                                                    setTimeout(function() {
                                                        t.removeAttribute("clear")
                                                    }, 300)
                                                }
                                            }(it, ci), 300);
                                            a.atKntr++;
                                            ct = quiz.localSC["q" + c.q];
                                            for (kt in ct)
                                                ct[kt][0] != "y" && ct[kt][0] > 0 && (ct[kt][0]--,
                                                ct[kt][0] || (ct[kt][0] = "y"))
                                        }
                                        ht.y > 0 && (bt ? (quiz.between({
                                            s: c.q,
                                            fn: function(n, t) {
                                                return function(i, r, u, f) {
                                                    if (f.getAttribute("pidx") + "" == t + "") {
                                                        var e = quiz.obj(".take-q[qid='" + u + "'] .qp_i[value='" + n + "']")
                                                            , o = e.parentNode.parentNode;
                                                        o.setAttribute("disabled", !0)
                                                    }
                                                }
                                            }(it.value, parseInt(a.getAttribute("pidx")))
                                        }),
                                            nt = nt.replace(new RegExp("((?:^|[" + rt + "])" + c.q + k + "[^" + k + "]*)","gi"), "$1" + k + k + (c.score.zero ? 0 : ht.y))) : gi = 0)
                                    }
                        if (!gi) {
                            quiz.noclick = 0;
                            return
                        }
                    }

                    if (quiz.cAns = nt,
                        quiz.cInf = at,
                        quiz.apiR({
                            answers: nt
                        }),
                        y = "",
                    quiz.rid || (y = "fp=" + encodeURIComponent(new Fingerprint({
                        screen_resolution: !0,
                        canvas: !0,
                        ie_activex: !0
                    }).get()),
                        y += document.ip2 ? "&ipt=" + encodeURIComponent(document.ip2) : "",
                        y += quiz.uc ? "&uc=" + encodeURIComponent(quiz.uc) : "",
                        y += quiz.previewObj ? "&previewobj=" + encodeURIComponent(quiz.previewObj) : "",
                        y += "&qt=" + quiz.tmr,
                        quiz.setVN(),
                        y += quiz.vn ? "&vn=" + encodeURIComponent(quiz.vn) : "",
                        y += quiz.order ? "&order=" + encodeURIComponent(quiz.order.join(",")) : ""),
                        quiz.ftmr = r ? 1 : 0,
                    !quiz.rid || n == "E")
                        for (b = quiz.sendA.e,
                                 h = 0; h < b.length; h++)
                            y += quiz[b[h]] ? (y ? "&" : "") + b[h] + "=" + parseInt(quiz[b[h]]) : "";
                    for (b = quiz.sendA.a,
                             h = 0; h < b.length; h++)
                        y += quiz[b[h]] ? (y ? "&" : "") + b[h] + "=" + encodeURIComponent(quiz[b[h]]) : "";
                    if (n != "E" || i || (quiz.setWait(1, quiz.autoscore ? quiz.cntr : 0),
                        quiz.end = 1,
                    quiz.prog && quiz.setProg(quiz.prog.max)),
                    quiz.end == 1 && (y += (y ? "&" : "") + "end=1"),
                    quiz.rid && quiz.end != 1 || (y += quiz.track ? "&track=" + encodeURIComponent(quiz.track) + "&lc=" + (quiz.isLC ? 1 : 0) : ""),
                        nr = quiz.cidx,
                        quiz.order)
                        for (e = 0; e < quiz.order.length; e++)
                            quiz.order[e] == quiz.cidx && (nr = e + 1,
                                e = quiz.order.length);
                    if (quiz.autoscore && !i && !quiz.sblock && !quiz.ucodes && (!quiz.cScore || !quiz.cScore.hasS || tt.y))
                        if (quiz.cAns || document.body.getAttribute("startp") == "1") {
                            if (quiz.cScore.hasS) {
                                for (rr = !quiz.cScore.expV,
                                     quiz.nextNoWait || quiz.setWait(1, quiz.cntr),
                                         quiz.loadResponse(quiz.cScore),
                                         ut = quiz.cAns.split(rt),
                                         p = {
                                             mark: "",
                                             score: 0,
                                             qt: 0,
                                             qy: 0,
                                             qn: 0,
                                             qp: 0,
                                             r: []
                                         },
                                         li = 0; li < ut.length; li++)
                                    for (w = 0; w < quiz.cScore.r.length; w++)
                                        v = quiz.cScore.r[w],
                                        v.q + "" == ut[li].split(k)[0] + "" && (p.qt++,
                                            p.score += v.s,
                                            v.s >= v.score.max ? p.qy++ : v.s ? p.qp++ : p.qn++,
                                            p.r.push(v));
                                p.mark = p.qy == p.qt ? "y" : p.qn == p.qt ? "n" : "p";
                                ai = quiz.obj((p.mark == "y" || p.mark == "p" ? "" : "in") + "correct");
                                ai && (ai.play(),
                                    p.sound = ai);
                                quiz.evt("Score", p);
                                quiz.prog && quiz.prog.p.setAttribute("n", 1);
                                n != "E" || quiz.cScore.expV || quiz.endSV || (quiz.endSV = 1);
                                quiz.qtimer || (clearInterval(quiz.qTMR),
                                    quiz.qTMR = 0,
                                quiz.timeIDX && (quiz.tabs.t[quiz.timeIDX - 1].removeAttribute("time"),
                                    delete quiz.timeIDX));
                                quiz.nextNoWait || (quiz.noadv = 1,
                                    quiz.tbox.style.pointerEvents = "none");
                                rr ? (quiz.nextFN = function(n, t) {
                                    return function() {
                                        if (quiz.saveFirst && !quiz.rid) {
                                            clearTimeout(quiz.nextTMR);
                                            quiz.nextTMR = setTimeout(quiz.nextFN, 300);
                                            return
                                        }
                                        return quiz.nextTMR = 0,
                                            quiz.evt("scoreEnd", t),
                                            n == "E" ? quiz.goEnd() : (quiz.tbox.style.pointerEvents = "",
                                                quiz.noadv = 0,
                                                quiz.goNext(n)),
                                            delete quiz.nextFN,
                                            !1
                                    }
                                }(n, p),
                                    quiz.nextTMR = setTimeout(quiz.nextFN, quiz.nexttime)) : quiz.nextNoWait ? (quiz.evt("scoreEnd", p),
                                    quiz.allowCont()) : (quiz.nextFN = function(n) {
                                    return function() {
                                        return quiz.evt("scoreEnd", n),
                                            quiz.allowCont(),
                                            delete quiz.nextFN,
                                            !0
                                    }
                                }(p),
                                    quiz.nextTMR = setTimeout(quiz.nextFN, quiz.nexttime));
                                dt = 0;
                                quiz.evt("Score")
                            }
                        } else {
                            quiz.goNext(n);
                            quiz.clearNC();
                            return
                        }
                    if ((quiz.sblock || quiz.ucodes) && (dt = 0,
                        quiz.noadv = 1,
                        quiz.noclick = 1,
                        quiz.tbox.style.pointerEvents = "none",
                        quiz.setWait(1, quiz.sblock ? quiz.cntr : 0)),
                    n == "E" && quiz.verify && quiz.verify.s && !quiz.lk) {
                        quiz.cSave.push(quiz.cAns);
                        quiz.saveCB = function(n) {
                            return function() {
                                quiz.saveQ(n, 0, 1)
                            }
                        }(n);
                        quiz.verifyWin();
                        return
                    }
                    if (n == "E" && !quiz.evt("Finish", {
                        status: "finished"
                    }))
                        return;
                    if (ur = (document.location + "").indexOf("block=y") != -1 && (document.location + "").indexOf("test.") != -1,
                    quiz.save != 1 && (quiz.queue != 1 || n == "E" || quiz.saveFirst))
                        n != "E" || quiz.autoscore || quiz.setWait(1),
                        !quiz.saveFirst || quiz.rid || quiz.apiKey || (quiz.setWait(1),
                            y += "&apikey=geo",
                            dt = !1),
                            quiz.save = 1,
                            quiz.gcpCB = function(n, t) {
                                return function(i) {
                                    var r, o, u, f, e;
                                    if (quiz.save = 0,
                                        quiz.gcps = {},
                                    i.substr(0, 1) == "{")
                                        if (quiz.retry = 0,
                                        quiz.saveCB || t == "E" && quiz.cSave.length || quiz.setWait(0),
                                            r = JSON.parse(i),
                                        (r.queue || r.queue == 0) && (quiz.queue = r.queue),
                                            r.error)
                                            quiz.msg(r.error),
                                                quiz.setWait(0),
                                                quiz.setWait(0, quiz.cntr),
                                                quiz.clearNCA(),
                                            quiz.end == 1 && (quiz.endSV = 0);
                                        else {
                                            if (quiz.rid != r.c && (quiz.rid = r.c,
                                            quiz.nohash || (document.location.hash = "R" + quiz.rid),
                                            quiz.ucodes && (quiz.sesK = quiz.sessionKntr(1),
                                                quiz.initTimer()),
                                            r.apiR && (quiz.apiR(r.apiR),
                                            quiz.saveFirst && r.apiR && (quiz.cResp = r.apiR)),
                                                quiz.runCB("firstSave"),
                                            quiz.saveFirst && (quiz.setWait(0),
                                                quiz.clearNCA(),
                                            quiz.nextTMR && quiz.nextFN || quiz.goNext(t))),
                                            quiz.ucodes && (quiz.ucodes = 0,
                                                quiz.setWait(0),
                                                quiz.clearNCA(),
                                                quiz.goNext("+1")),
                                            quiz.sblock && (quiz.setWait(0, quiz.cntr),
                                                quiz.liveWaitCB(r.cq, r.rs == 0 ? "Q" : "A", 1)),
                                                quiz.saveCB) {
                                                o = quiz.saveCB;
                                                quiz.saveCB = !1;
                                                o();
                                                return
                                            }
                                            quiz.end != 1 || quiz.sblock || (quiz.ref == "PREVIEW" || quiz.isLC || quiz.gEvent("Quiz", "Taken"),
                                                quiz.endSV == 1 ? (quiz.endSV = 2,
                                                quiz.endTMR || (quiz.setWait(1),
                                                    quiz.goEnd())) : (quiz.endSV = 2,
                                                    quiz.setWait(1),
                                                    quiz.goEnd()))
                                        }
                                    else {
                                        quiz.end == 1 && (quiz.endSV = 0);
                                        u = i.substr(0, 1);
                                        f = 1e3;
                                        /[TAR]/.test(u) && (quiz.retry++,
                                            f = Math.pow(quiz.retry, 2) * 100 + Math.round(Math.random() * 100),
                                            e = function(n) {
                                                return function() {
                                                    quiz.xSend({
                                                        s: "Quiz.Answer " + quiz.ref + ";" + quiz.rid,
                                                        d: n + (n ? "&" : "") + "retry=" + quiz.retry + "&ans=" + encodeURIComponent(quiz.cAns),
                                                        cb: quiz.gcpCB
                                                    })
                                                }
                                            }(n));
                                        (i + "  ").substr(1, 1) == "Q" && (quiz.queue = 1);
                                        switch (u) {
                                            case "T":
                                            case "A":
                                                quiz.setWait(0);
                                                quiz.timeout = e;
                                                quiz.win({
                                                    id: "login"
                                                });
                                                quiz.loginI("em").parentNode.style.display = u == "A" ? "none" : "";
                                                return;
                                            case "R":
                                                setTimeout(e, f);
                                                return;
                                            case "B":
                                                if (quiz.gcps = {
                                                    ref: quiz.ref + ";" + quiz.rid,
                                                    sd: n + (n ? "&" : "") + "ans=" + encodeURIComponent(quiz.cAns)
                                                },
                                                    quiz.obj("gcp-win")) {
                                                    quiz.gcpReset(2);
                                                    return
                                                }
                                                quiz.setWait(1);
                                                quiz.setWait(0, quiz.cntr);
                                                quiz.async("gcp", "www.google.com/recaptcha/api.js?onload=gcpCallback&render=explicit");
                                                return
                                        }
                                        quiz.setWait(0);
                                        quiz.setWait(0, quiz.cntr);
                                        quiz.msg(i.substr(0, 1) == "E" ? i.split(";")[1] : "Unable to save response, please try again later");
                                        quiz.clearNCA()
                                    }
                                }
                            }(y, n),

                        quiz.cSave.length && (c = quiz.cSave.join(rt),
                            quiz.cAns = c + (!quiz.cAns || !c ? "" : rt) + quiz.cAns,
                            quiz.cSave = []),
                            quiz.xSend({
                                s: "Quiz." + (ur ? "No_" : "") + "Answer " + quiz.ref + ";" + quiz.rid + ";" + nr,
                                d: y + (y ? "&" : "") + (!quiz.autoscore || pi ? "" : "st=1&") + "ans=" + encodeURIComponent(quiz.cAns),
                                cb: quiz.gcpCB,
                                noLog: 1
                            });
                    else if (quiz.cSave.push(quiz.cAns),
                    n == "E") {
                        quiz.saveCB = function(n) {
                            return function() {
                                quiz.saveQ(n, 0, 1)
                            }
                        }(n);
                        return
                    }
                    quiz.gEvent("quiz", "next")
                }
                n != "E" && dt && quiz.goNext(n);
                quiz.clearNC()
            }
        },
        setVN: function() {
            var r, u, i, n, t;
            if (quiz.ovn) {
                for (quiz.dvn || (quiz.dvn = (quiz.ovn + "-").split("-")[0]),
                         r = [0, 0],
                         u = (new Date).getTime() - quiz.tmr,
                         i = 0; i < 2; i++) {
                    for (n = ([quiz.dvn, parseFloat(quiz.dvn) + u / 864e5][i] + "").split("."),
                             n[1] = (n[1] + Array(11).join("0")).substr(0, 10).split(""),
                             n = n.concat([parseInt(n[1][8]), parseInt(n[1][9])]),
                             t = 2; t < 4; t++)
                        n.push(0 + (n[t] < 5 ? 9 - n[t] : n[t])),
                            n[t + 2] = n[t + 2] == 9 ? 8 : n[t + 2];
                    n[4] == n[5] && (n[5] = n[4] == 8 ? 5 : n[4] + 1);
                    n[1][n[4] - 1] = 0 + n[3];
                    n[1][n[5] - 1] = 0 + n[2];
                    n[1][8] = n[2];
                    n[1][9] = n[3];
                    r[i] = n[0] + "." + n[1].join("")
                }
                quiz.vn = r.join("-")
            }
        },
        allowCont: function() {
            var n, t;
            quiz.tabSaved = !0;
            quiz.setWait(0, quiz.cntr);
            quiz.tbox.style.pointerEvents = "";
            quiz.noadv = 0;
            n = quiz.obj(".quiz-container", 2);
            n && n.setAttribute("btns", 1);
            quiz.scrolltabs && (t = quiz.obj("DIV[tid].sel .qp_tabbtn .qp_btn", 2),
            t && (t.value = quiz.translate("Next")))
        },
        getQTxt: function(n) {
            var t = quiz.obj(".take-q[qid='" + n + "'] .qp_tn, DIV.take-q[qid='" + n + "'] .qp_qi:not(:empty), .take-q[qid='" + n + "'] SPAN.qp_t", 2);
            return t ? t.textContent + "" : ""
        },
        checkAllErr: function() {
            var n, t;
            return quiz.scrolltabs ? (n = quiz.obj(".take-q:not([cont='1']):not([skip='1'])", 2),
                n) ? (t = n.getAttribute("qid"),
                quiz.setWait(0),
                quiz.msg("You must answer the question:\n\n'" + quiz.getQTxt(t) + "'"),
                quiz.setErr(t, 1),
                0) : 1 : 1
        },
        wcTest: function(n, t) {
            return n = "^" + n.replace(/[\’]/gi, "'").replace(/^[\s]*|[\s]*$/gi, "").replace(/([()[{+.$^\\|?])/g, "\\$1").replace(/[\*]/gi, "[\\s\\S]*").replace(/[\_]/gi, "[\\s\\S]") + "$",
                new RegExp(n,"i").test(t.replace(/[\’]/gi, "'").replace(/^[\s]*|[\s]*$/gi, ""))
        },
        pHost: function(n) {
            if (quiz.embed && !n)
                return {
                    pm: 0,
                    dq: 0,
                    loc: ""
                };
            var t = document.location + ""
                , i = t.indexOf("www") == -1 ? t.indexOf("test") == -1 ? "" : "test." : "www.";
            return t.indexOf("testcdn.poll-maker.com") != -1 ? {
                pm: 0,
                dq: 0,
                loc: ""
            } : t.indexOf("mysurvey.run") != -1 ? {
                pm: 1,
                dq: 0,
                qm: 0,
                sm: 0,
                sl: 0,
                ms: 1,
                loc: "https://mysurvey.run"
            } : t.indexOf("sitelistener.com") != -1 ? {
                pm: 1,
                dq: 0,
                qm: 0,
                sm: 0,
                sl: 1,
                loc: "https://www.sitelistener.com"
            } : t.indexOf("poll-maker.com") != -1 && !/[\/]Embed[\-]Quiz/.test(document.location + "") ? {
                pm: 1,
                dq: 0,
                qm: 0,
                sm: 0,
                sl: 0,
                loc: "https://" + i + "poll-maker.com"
            } : t.indexOf("quiz-maker.com") != -1 && !/(cdn[\.]quiz[\-]maker[\.]com|[\/]Embed[\-]Quiz|[\/]Device[\-]Frame)/.test(document.location + "") ? (i = "take.",
                {
                    pm: 1,
                    dq: 0,
                    qm: 1,
                    sm: 0,
                    sl: 0,
                    loc: "https://" + i + "quiz-maker.com"
                }) : t.indexOf("survey-maker.com") != -1 ? {
                pm: 1,
                dq: 0,
                qm: 0,
                sm: 1,
                sl: 0,
                loc: "https://" + i + "survey-maker.com"
            } : t.indexOf("quizwiz.com") != -1 ? {
                pm: 1,
                dq: 0,
                qm: 1,
                sm: 0,
                sl: 0,
                loc: "http://" + i + "quizwiz.com"
            } : t.indexOf("supersurvey.com") != -1 ? {
                pm: 1,
                dq: 0,
                qm: 0,
                sm: 1,
                sl: 0,
                ms: 0,
                loc: "https://" + i + "supersurvey.com"
            } : {
                pm: 0,
                dq: 0,
                loc: ""
            }
        },
        goEnd: function(n) {
            var r, t, i, u;
            if (quiz.end == 1 || n) {
                n && (quiz.endSV = 2);
                switch (quiz.endSV) {
                    case 2:
                        if (clearTimeout(quiz.nextTMR),
                            clearTimeout(quiz.endTMR),
                            quiz.nextTMR = 0,
                            quiz.endTMR = 0,
                            r = quiz.pHost(),
                            t = !n || quiz.end == 1 ? quiz.rid : "",
                            quiz.isLC)
                            if (quiz.oLC)
                                quiz.ref = quiz.oLC.ref,
                                    quiz.showResults(quiz.oLC.rid);
                            else if (r.pm)
                                quiz.nohash || (document.location.hash = ""),
                                    document.location.reload();
                            else {
                                i = quiz.track.split("-");
                                typeof qz == "object" ? qz.results("Q" + i[2], i[0] + "-" + i[1]) : (quiz.ref = i[2],
                                    quiz.showResults(i[0] + "-" + i[1]));
                                return
                            }
                        else if (r.pm)
                            quiz.ref == "PREVIEW" ? quiz.showResults(t) : (quiz.setWait(1, quiz.cntr),
                            r.dq && sys && sys.qpub && sys.qpub.setFin(quiz.ref, t),
                                u = qsV("pc"),
                                document.location = (quiz.public && !r.dq ? "/Public" : "") + "/results" + (t ? t + "-" : "Q") + quiz.ref + (quiz.clang ? "/" + quiz.clang.toUpperCase() : "") + (u ? "?pc=" + u : ""));
                        else {
                            typeof qz == "object" ? qz.results("Q" + quiz.ref, t) : quiz.showResults(t);
                            return
                        }
                        break;
                    case 1:
                        quiz.setWait(1);
                        quiz.endTMR = setTimeout(quiz.goEnd, 300)
                }
            }
        },
        showResults: function(n) {
            quiz.xSend("Quiz." + (quiz.public ? "Public_" : "") + "Results " + n + "-" + quiz.ref, quiz.clang ? "lang=" + quiz.clang.toUpperCase() : "", function(n) {
                return function(t) {
                    var r, f, u, i;
                    t == "R" ? (r = quiz.pHost(),
                        f = r.loc ? r.loc : "www.poll-maker.com",
                        document.location = f + "/results" + n + "-" + qid + (quiz.clang ? "/" + quiz.clang.toUpperCase() : "")) : (u = /class[\=][\'\"][^\'\"]*quiz[\-]container[^\'\"]+quiz[\-]lc[^\'\"]*[\'\"]/i.test(t),
                        i = u ? "ntabs" : "results",
                        t = t.replace(/(id=[\']quiz[\-])tabs([\'])/gi, "$1" + i + "$2").replace(/document.tabs[\[]0[\]]([\.]show[\(])/gi, "quiz.obj('quiz-" + i + "').tabs$1"),
                        quiz.reInit({
                            html: t,
                            lc: u,
                            res: 1,
                            rid: n,
                            tn: i
                        }))
                }
            }(n))
        },
        reInit: function(n) {
            quiz.linkTheme = quiz.obj(".qp_container LINK[id^='theme-']", 2);
            quiz.linkTheme && document.head.appendChild(quiz.linkTheme);
            n.m = document.querySelectorAll(".quiz-container")[0];
            n.phtml = n.m.innerHTML;
            n.html = n.html.replace(/([\=][\"\'])([\/][\/])/gi, "$1https:$2");
            n.m.offsetWidth <= 400 && quiz.embed && (n.m.className += " quiz-small" + (n.m.offsetWidth <= 250 ? " quiz-vsmall" : ""),
            quiz.tool == "PM" && (n.html = n.html.replace(/qp[\-]subtab[\-]c/gi, "qp-notab-c")));
            /[\s]*class[\=][\'\"][^\'\"]*quiz[\-]container/.test(n.html) ? n.m.outerHTML = n.html : (/[\s]*class[\=][\'\"][^\'\"]*qp[\_]container/.test(n.html) || (n.html = "<div class='qp_container'>" + n.html + "<\/div>"),
                n.m.innerHTML = n.html);
            delete quiz.dxo;
            n.lc && (quiz.rid = "",
                delete quiz.end,
                delete quiz.endSV,
                delete quiz.order,
                delete quiz.rand,
                document.body.removeAttribute("last"));
            !n.lc && / quiz-lc/.test(n.m.className) && (n.m.className = n.m.className.replace(/ quiz-lc/gi, ""));
            try {
                FB.XFBML.parse()
            } catch (i) {}
            try {
                quiz.loadTabs()
            } catch (i) {}
            try {
                loadSocial()
            } catch (i) {}
            clearTimeout(quiz.nextTMR);
            clearInterval(quiz.qTMR);
            clearTimeout(quiz.endTMR);
            quiz.nextTMR = 0;
            quiz.qTMR = 0;
            quiz.endTMR = 0;
            quiz.tbox = quiz.obj("quiz-" + (n.tn ? n.tn : "tabs"));
            quiz.tabs = quiz.tbox.tabs;
            var t = quiz.getScripts(n.html);
            return t && ((n.lc || n.su) && (t += "quiz.initEvents();quiz.setReq(quiz.runReq);" + (n.su ? "quiz.initTimer();quiz.setTab(quiz.tabs.idx,0);quiz.endInit()" : "")),
            n.res && (t += "quiz.resEvents();quiz.runCB('afterResults');"),
                setTimeout(t, 1)),
            quiz.ref == "PREVIEW" && n.res && (quiz.obj(".preview-take", 2).removeAttribute("sel"),
                quiz.obj(".preview-res", 2).setAttribute("sel", 1)),
            n.rid && !quiz.nohash && (document.location.hash = "X" + n.rid + "-" + quiz.ref),
            n.lc && (quiz.oLC = {
                rid: n.rid,
                ref: quiz.ref
            },
                quiz.sref = "",
                quiz.sblock = 0),
                (quiz.tbox.className + "").indexOf("qp-notab-c") != -1 ? (gg.ref = quiz.ref,
                quiz.obj("map-canvas") && gg.getMap(),
                quiz.obj("time-canvas") && gg.getTimeLine()) : quiz.initTabs(),
                quiz.setWait(0, quiz.cntr),
                quiz.setWait(0),
                quiz.initTarget(),
                setTimeout(function() {
                    quiz.scrolltabs ? (quiz.scrollRoot().scrollTop = 0,
                        quiz.onScroll()) : quiz.scrollTo()
                }, 10),
                quiz.clearNCA(),
            !t && n.res && quiz.runCB("afterResults"),
                n
        },
        getScripts: function(n) {
            var r = n.match(/[\<]SCRIPT[^\>]*[\>]([^\<]|[\<][^s]|[\<]S[^C])+[\<][\/]SCRIPT[\>]/gi), t = "", u, i;
            if (r && r.length)
                for (u = 0; u < r.length; u++)
                    i = r[u].split(">"),
                        i.shift(),
                        i = i.join(">"),
                        t += i.substr(0, i.length - 9),
                    t && t.substr(t.length - 1) != ";" && (t += ";");
            return t
        },
        goNext: function(n, t) {
            if (quiz.blockNext) {
                quiz.blockNext = 0;
                return
            }
            if ((quiz.qtimer || (clearTimeout(quiz.nextTMR),
                clearInterval(quiz.qTMR),
                quiz.nextTMR = 0,
                quiz.qTMR = 0,
                delete quiz.timeIDX),
                quiz.setWait(0, quiz.cntr),
            quiz.rid || quiz.evt("Start", {
                status: "started"
            })) && quiz.evt(n == "-1" ? "Back" : "Next", {
                frompage: quiz.tabs.idx
            })) {
                if (quiz.blockNext) {
                    quiz.blockNext = 0;
                    return
                }
                quiz.checkLogic(quiz.cAns + (!quiz.cInf || !quiz.cAns ? "" : String.fromCharCode(209)) + quiz.cInf);
                typeof n == "object" && n.tagName ? (n.show(),
                    n = "+1") : quiz.order ? quiz.randTab(n, t) : quiz.goTab(n, t);
                quiz.tabEmpty(n);
                quiz.scrollTo();
                quiz.previewCH(1)
            }
        },
        goTab: function(n, t) {
            (quiz.timeIDX && (n = quiz.timeIDX),
                quiz.blockTab[n]) || (quiz.scrolltabs && n === "+1" && quiz.tidx >= quiz.tbox.tabs.t.length && quiz.scrollToEnd(),
                quiz.noSL = t,
                quiz.tbox.tabs.show(n, t),
                delete quiz.noSL)
        },
        scrollToEnd: function() {
            quiz.fromTab = 1;
            quiz.fromScroll = 1;
            quiz.easeScroll(quiz.scrollRoot().scrollHeight, function() {
                setTimeout(function() {
                    quiz.fromTab = 0;
                    quiz.fromScroll = 0;
                    quiz.onScroll();
                    quiz.tabSaved = !0
                }, 100)
            })
        },
        between: function(n) {
            var f, c, i, a, s, v, w;
            n.s ? n.s = quiz.qInfo(n.s) : quiz.order || (n.s = {
                tidx: 1
            });
            var h = n.s ? n.s.tidx - 1 : 0
                , y = quiz.tabs.t.length
                , o = 0;
            for (quiz.order && (h = n.s ? quiz.getOrdP(n.s.tidx) - 1 : 0,
                y = quiz.order.length,
            n.s || (n.s = {})),
                     f = h; f < y; f++) {
                c = f;
                quiz.order && (c = quiz.getOrdT(f + 1) - 1);
                var p = quiz.tabs.t[c].getAttribute("tid")
                    , u = document.querySelectorAll("DIV[tid='" + p + "'] .take-q, DIV[tid='" + p + "'] .qp_matrix[qid]")
                    , e = -1;
                if (f == h && n.s.qid) {
                    for (i = 0; e == -1 && i < u.length; i++)
                        u[i].getAttribute("qid") + "" == n.s.qid + "" && (e = i + (n.e == 0 || n.inc ? 0 : 1),
                            i = u.length + 1);
                    e == -1 && (e = u.length)
                } else
                    e = 0;
                for (i = e; i < u.length; i++) {
                    var t = u[i]
                        , r = t.parentNode
                        , l = parseInt(t.getAttribute("qid"));
                    if (n.e == l && !n.inc)
                        return o;
                    if (t.getAttribute("qt") != "6" && t.style.display != "none" && r.getAttribute("skip") != "1" && o++,
                    n.hide === 1) {
                        for (t.pskip || t.pskip == 0 || (t.pskip = parseInt(t.getAttribute("skip")) ? 1 : 0),
                                 t.setAttribute("skip", 1),
                             t.hideIDX || (t.hideIDX = {}),
                                 t.hideIDX[n.src ? n.src : "x"] = 1,
                                 t.style.display = "none",
                             n.skip || (t.hide = 1),
                                 a = 0,
                                 s = 0; s < u.length; s++)
                            u[s].style.display != "none" && a++;
                        a || (r.pskip || r.pskip == 0 || (r.pskip = parseInt(r.getAttribute("skip")) ? 1 : 0),
                            quiz.setTabSkip(r, 1))
                    }
                    if (n.hide === 0 && (!n.skip || !t.hide)) {
                        t.hideIDX || (t.hideIDX = {});
                        delete t.hideIDX[n.src ? n.src : "x"];
                        v = 1;
                        for (w in t.hideIDX)
                            t.hideIDX[w] == 1 && (v = 0);
                        v && ((t.pskip || t.pskip == 0) && t.setAttribute("skip", t.pskip),
                            t.style.display = "",
                            t.hide = 0,
                        (r.pskip || r.pskip == 0) && quiz.setTabSkip(r, r.pskip))
                    }
                    if (n.fn && n.fn(f, i, l, t, n),
                    n.e == 0 || n.e == l)
                        return o
                }
            }
            return o
        },
        setTabSkip: function(n, t) {
            if (n.setAttribute("skip", t),
                quiz.tabs.h) {
                var i = quiz.tabs.h[n.tidx];
                i && i.setAttribute("skip", t)
            }
        },
        qInfo: function(n) {
            var t = {
                qid: n,
                dom: quiz.obj(".take-q[qid='" + n + "'], .qp_matrix[qid='" + n + "']", 2)
            };
            return t.tab = t.dom.parentNode,
                t.tid = t.tab.getAttribute("tid"),
                t.tidx = t.tab.idx,
                t
        },
        compareA: function(n, t) {
            n = (n + "").substr(0, 1) == "/" && (n + "").substr(n.length - 1) == "/" ? n.substr(1, n.length - 2) : "^" + (n + "").replace(/[\’]/gi, "'").replace(/(^|[^\\])[\*]/gi, "$1@WILDCARD@").replace(/[\\][*]/gi, "*").replace(/([\\\^\$\.\|\?\*\+\(\)\[\{\]\}\,])/gi, "\\$1").replace(/[\@]WILDCARD[\@]/gi, "[\\s\\S]*") + "$";
            var i = new RegExp(n,"gi");
            if (i.test(t.replace(/[\’]/gi, "'")))
                return 1
        },
        checkMand: function(n, t) {
            for (var i = n, e, r, f, u; i && (i.className + "").indexOf("take-q") == -1; )
                i = i.parentNode;
            if (i) {
                for (e = quiz.getAtt(i, "qid,qt,mark,min,max,skip"),
                     typeof t == "undefined" && (t = n.value),
                         i.setAttribute("cont", t ? 1 : 0),
                         quiz.evt((t ? "Allow" : "Block") + "Next"),
                         r = i.parentNode; r && !(tid = r.getAttribute("tid")); )
                    r = r.parentNode;
                for (f = quiz.obj("DIV[tid='" + tid + "'] .take-q", 3),
                         r.setAttribute("cont", 0),
                         u = 0; u < f.length; u++)
                    if (f[u].getAttribute("cont") != "1") {
                        quiz.evt("TabBlockNext");
                        return
                    }
                r.setAttribute("cont", 1);
                quiz.evt("TabAllowNext")
            }
        },
        checkLogic: function(n, t) {
            var a, v, r, h, y, g, i, f, c, l, w, b;
            if (quiz.logic && n) {
                var tt = String.fromCharCode(209)
                    , it = String.fromCharCode(166)
                    , k = n.split(tt);
                for (a = 0; a < k.length; a++) {
                    var e = k[a].split(it)
                        , o = parseInt(e[0])
                        , u = quiz.logic[o]
                        , d = 0;
                    if (u && e[1] == "" && (v = quiz.obj(".take-q[qid='" + o + "']"),
                    v && v.getAttribute("skip") == "1" && getComputedStyle(v, null).display == "none" && (d = 1)),
                    u && !d) {
                        for (r = [],
                                 h = [],
                                 i = u.list.length - 1; i >= 0; i--)
                            u.list[i].c == 2 && h.push(u.list[i].lidx),
                                y = 0,
                                e[1] == "999" ? quiz.compareA(u.list[i].a, e[2]) && (y = 1) : ("," + e[1] + ",").indexOf("," + u.list[i].a + ",") != -1 && (y = 1),
                                u.list[i].src = o,
                                y ? r.push(u.list[i]) : r.unshift(u.list[i]);
                        for (h.length && !u.rnd && u.rnd !== 0 && (u.rnd = h[parseInt(Math.random() * h.length)]),
                                 g = quiz.between({
                                     s: 0,
                                     e: o
                                 }) + 1,
                                 i = 0; i < r.length; i++) {
                            f = 0;
                            c = parseInt(r[i].q);
                            switch (parseInt(r[i].c)) {
                                case 1:
                                    f = 1;
                                    break;
                                case 2:
                                    u.rnd == r[i].lidx && (f = 1);
                                    break
                                case 3:
                                    parseInt(r[i].a) == g && (f = 1);
                                    break;
                                default:
                                    e[1] == "999" ? quiz.compareA(r[i].a, e[2]) && (f = 1) : ("," + e[1] + ",").indexOf("," + r[i].a + ",") != -1 && (f = 1)
                            }
                            if (f)
                                switch (parseInt(r[i].l)) {
                                    case 0:
                                        quiz.between({
                                            s: o,
                                            e: c,
                                            hide: 1,
                                            skip: 1,
                                            act: f,
                                            src: r[i].src
                                        });
                                        break;
                                    case 1:
                                        quiz.between({
                                            s: c,
                                            e: 0,
                                            hide: 1,
                                            act: f,
                                            src: r[i].src
                                        });
                                        break;
                                    case 2:
                                        if (quiz.between({
                                            s: o,
                                            hide: 1,
                                            act: f,
                                            src: r[i].src
                                        }),
                                            !t) {
                                            quiz.clearNCA();
                                            quiz.autoscore = 0;
                                            quiz.saveQ("E", 1);
                                            return
                                        }
                                }
                            else if (t)
                                switch (parseInt(r[i].l)) {
                                    case 0:
                                        quiz.between({
                                            s: o,
                                            e: c,
                                            hide: 0,
                                            skip: 1,
                                            act: f,
                                            src: r[i].src
                                        });
                                        break;
                                    case 1:
                                        quiz.between({
                                            s: c,
                                            e: 0,
                                            hide: 0,
                                            act: f,
                                            src: r[i].src
                                        });
                                        break;
                                    case 2:
                                        quiz.between({
                                            s: o,
                                            hide: 0,
                                            act: f,
                                            src: r[i].src
                                        })
                                }
                        }
                    }
                }
                var s = -1
                    , p = quiz.tabs.idx
                    , nt = quiz.tabs.t.length;
                for (quiz.order && (p = quiz.getOrdP(p),
                    nt = quiz.order.length),
                         l = p; l < nt; l++)
                    w = l,
                    quiz.order && (w = quiz.getOrdT(l + 1) - 1),
                        b = quiz.tabs.t[w].getAttribute("skip") == "1" ? 1 : 0,
                        s = s == -1 || s == 1 && b == 0 ? b : s;
                s != -1 && (s == 1 ? document.body.setAttribute("last", s) : quiz.order && s == 0 ? document.body.setAttribute("last", 0) : document.body.removeAttribute("last"))
            }
        },
        tabEmpty: function(n) {
            var t, i, r;
            if (n != "E") {
                if ((quiz.tabs.tp.className + "").indexOf("qp-notab-c") != -1)
                    return;
                setTimeout(function() {
                    quiz.emptyX = []
                }, 100);
                t = parseInt(quiz.tabs.idx);
                i = quiz.tabs.tp.childNodes[t - 1];
                i.childNodes.length && i.getAttribute("skip") != "1" || (quiz.noclick = 0,
                    quiz.emptyX[t] = quiz.emptyX[t] ? quiz.emptyX[t] + 1 : 1,
                quiz.emptyX[t] < 10 && quiz.saveQ(n),
                t == 1 && (r = "BODY[tidx-" + quiz.tabs.tid + "='" + quiz.tabs.idx + "'] .qp_bo #quiz",
                    quiz.addCSS(r + "-back", "display:none!important"),
                    quiz.addCSS(r + "-next", "padding-left:0px!important")))
            }
        },
        addCSS: function(n, t) {
            var i = quiz.obj("qp_sheet");
            i || (i = document.head.appendChild(document.createElement("STYLE")),
                i.id = "qp_sheet");
            i = i.sheet;
            i.addRule ? i.addRule(n, t, 0) : i.insertRule(n + " {" + t + "}", 0)
        },
        gcpStart: function() {
            quiz.setWait(0);
            document.body.setAttribute("blur", "1");
            var n = document.body.appendChild(document.createElement("DIV"));
            n.id = "gcp-win";
            grecaptcha.render("gcp-win", {
                sitekey: "6LdV6SYTAAAAAO3aEfulkS6ObtQQkk0QBAIRrgwV",
                theme: "light",
                callback: quiz.gcpEnd
            })
        },
        gcpEnd: function() {
            document.body.setAttribute("blur", "0");
            quiz.obj("gcp-win").setAttribute("e", 0);
            quiz.setWait(1);
            quiz.xSend("Quiz.GCP " + quiz.ref, "nk=1&v=" + encodeURIComponent(grecaptcha.getResponse()), function(n) {
                n == "Y" ? quiz.xSend({
                    s: "Quiz.Answer " + quiz.gcps.ref,
                    d: quiz.gcps.sd,
                    cb: quiz.gcpCB,
                    noLog: 1
                }) : (quiz.setWait(0),
                    quiz.gcpReset(1))
            })
        },
        gcpReset: function(n) {
            document.body.setAttribute("blur", "1");
            quiz.obj("gcp-win").setAttribute("e", n);
            grecaptcha.reset()
        },
        randTab: function(n, t) {
            var u = 0, f = 0, i = 0, r, e;
            for (typeof n != "string" && (quiz.tidx = quiz.order[n - 1],
                n = 0,
                t = 1),
                     r = 0; r < quiz.order.length; r++)
                if (quiz.order[r] == quiz.tidx) {
                    if (i = r + parseInt(n),
                    i < 0 || i > quiz.order.length - 1) {
                        quiz.scrolltabs && n === "+1" && i > quiz.order.length - 1 && quiz.scrollToEnd();
                        return
                    }
                    e = quiz.order[i];
                    f = i <= 0;
                    u = i >= quiz.order.length - 1;
                    quiz.goTab(e, t);
                    document.body.setAttribute("first", f ? 1 : 0);
                    document.body.setAttribute("last", u ? 1 : 0);
                    return
                }
        },
        fillAns: function(n, t) {
            var e, u, s, f, h, l, o, i, r, c;
            if (t ? quiz.aVal[n] = t : t = quiz.aVal[n],
                e = document.querySelectorAll(".quiz-answer-" + (n + "").replace(/[\.]/g, "-")),
            e && e.length) {
                for (u = "",
                         s = [],
                         i = 0; i < t.v.length; i++)
                    t.v[i] + "" == "999" || t.qt == 4 ? u += (u ? ", " : "") + (t.v[i] + "" == "999" ? t.otv : t.v[i]) : (f = "",
                        h = 0,
                    /[\.]/.test(n + "") && (n = n.split("."),
                        f = n[1],
                        n = n[0],
                        h = 1),
                        l = h && t.qt < 2 ? ".qp_qi[mopt='" + f + "." + t.v[i] + "']" : "#qp_main" + n + " " + (t.qt == 5 ? (f ? "SELECT[pid='" + f + "'] " : "") + "OPTION" : ".qp_i") + "[value='" + t.v[i] + "']" + (!f || t.qt == 5 ? "" : "[pid='" + f + "']"),
                        o = quiz.obj(l, 2),
                    o && t.v[i] != "" && (t.qt != 5 && (o = o.parentNode),
                        s.push(o.innerText),
                        u += (u ? ", " : "") + o.innerText));
                for (i = 0; i < e.length; i++) {
                    r = u;
                    c = e[i].getAttribute("n") + "";
                    switch (c) {
                        case "":
                            r = u;
                            break;
                        case "s":
                            r = t.s ? t.s : 0;
                            t.s || t.s === 0 || (r = !1);
                            break;
                        case "p":
                            r = !t.s || !t.max ? 0 : Math.round(t.s * 100 / t.max);
                            t.s || t.s === 0 || (r = !1);
                            break;
                        default:
                            r = s[parseInt(c) - 1];
                            r || (r = "")
                    }
                    r !== !1 && (e[i].innerHTML = r)
                }
            }
        },
        loadResponse: function(n, t) {
            var y = 1, d = 0, o = {
                t: 0,
                qi: 0,
                qc: 0,
                qp: 0,
                c: 0,
                max: 0
            }, g, a, nt, tt, ht, kt, s, u, ct, b, l, it, lt, rt, ut, k, p, at, e, ft, vt, et, h, r, wt, w, ot, st, v, pt, f, i, c;
            if (n.f && (quiz.fin = n.f),
                n.order)
                for (quiz.order = n.order.concat(),
                         g = quiz.obj("quiz-tabs").childNodes,
                         s = 0; s < g.length - 1; s++)
                    g[s].tagName && g[s].getAttribute("tid") && ("," + quiz.order.join(",") + ",").indexOf("," + (s + 1) + ",") == -1 && quiz.order.push(s + 1);
            for (f in n.r)
                if (i = n.r[f],
                    h = quiz.obj("qp_main" + i.q),
                    h) {
                    if (a = h.parentNode,
                    a.className && (a.className + "").indexOf("take-q") != -1 || (a = a.parentNode),
                        quiz.fillAns(i.q + (i.cq ? "." + i.cq : ""), {
                            qt: parseInt(a.getAttribute((i.cq ? i.cq + "-" : "") + "qt")),
                            v: i.a,
                            otv: i.t,
                            s: i.s,
                            max: !i.score || !i.score.max ? 0 : i.score.max
                        }),
                    i.a[0] && i.a[0] != 0 && (nt = a.parentNode.tidx + 1),
                    !n.f || n.f == 2)
                        if (quiz.order) {
                            for (tt = 0,
                                     s = 0; s < quiz.order.length; s++)
                                quiz.order[s] == nt && (tt = s);
                            tt + 1 > d && (d = tt + 1);
                            d > quiz.order.length - 1 && (d = quiz.order.length - 1)
                        } else
                            nt + 1 > y && (y = nt + 1);
                    for (ht = h.getElementsByTagName("INPUT"),
                             kt = 0,
                             s = 0; s < ht.length; s++)
                        if (u = ht[s],
                            ct = u.getAttribute("pid"),
                        !ct || ct + "" == i.cq + "") {
                            switch (u.type) {
                                case "checkbox":
                                case "radio":
                                    b = u.value && ("," + i.a.join(",") + ",").indexOf("," + u.value + ",") != -1 ? 1 : 0;
                                    n.f && (e = i.opt["i" + u.value] ? i.opt["i" + u.value].score : {
                                        y: 0,
                                        n: 0
                                    },
                                        u.style.display = "none",
                                        l = u.parentNode.parentNode,
                                        it = e.y > 0 || e.y == "y",
                                        l.setAttribute("yes", it && b ? 1 : 0),
                                        l.setAttribute("no", e.n > 0 && !b || b && !it && i.score.max > 0 ? 1 : 0),
                                        l.setAttribute("ymark", it ? 1 : 0),
                                        l.setAttribute("nmark", e.n > 0 ? 1 : 0),
                                    e.y + e.n != 0 && (lt = parseInt(l.parentNode.getAttribute("skntr")),
                                        l.parentNode.setAttribute("skntr", lt ? lt + 1 : 1)),
                                        l.parentNode.setAttribute("multi", u.type == "radio" ? 0 : 1),
                                    b && e.y == i.score.max && l.parentNode.setAttribute("one", 1),
                                        rt = l.childNodes[0],
                                    rt && (e.y != 0 && rt.setAttribute("sy", (e.y < 0 ? "-" : "+") + e.y),
                                    e.n != 0 && rt.setAttribute("sn", (e.n < 0 ? "-" : "+") + e.n)));
                                    b ? quiz.sel(!1, u, 1) : u.checked && u.type == "checkbox" && quiz.sel(!1, u, 0);
                                    break;
                                case "range":
                                    i.t && (u.value = i.t,
                                        u.parentNode.setAttribute("v", i.t));
                                    break;
                                case "number":
                                    for (ut = -1,
                                             k = 0; k < i.a.length; k++)
                                        i.a[k] == parseInt(u.getAttribute("oidx")) && (ut = k + 1,
                                            k = i.a.length + 1);
                                    u.value = ut == -1 ? "" : ut;
                                    break;
                                case "text":
                                case "email":
                                case "url":
                                case "tel":
                                case "hidden":
                                    if (/qp_txti|qp_tv|qp_otv/.test(u.className + "") && !/qp_nosave/.test(u.className + "") && (u.value = i.t ? i.t : "",
                                        u.onFill))
                                        u.onFill(i);
                                    break;
                                case "file":
                                    i.files;
                                    quiz.uploadFile(0, u, i.files, 1)
                            }
                            quiz.checkMand(u)
                        }
                    if (p = h.getElementsByTagName("SELECT"),
                    p && p[0] && !/qp_nosave/.test(p[0].className + "") && (p[0].value = i.a[0] ? i.a[0] + "" : "",
                        at = i.opt ? i.opt["i" + i.a[0]] : 0,
                    at && (e = at.score,
                    e.y != 0 && p[0].setAttribute("sy", (e.y < 0 ? "-" : "+") + e.y),
                    e.n != 0 && p[0].setAttribute("sn", (e.n < 0 ? "-" : "+") + e.n))),
                        ft = h.getElementsByTagName("TEXTAREA"),
                    ft && ft[0] && (ft[0].value = i.t ? i.t : ""),
                        quiz.fin) {
                        i.ans && (i.qt == 2 ? (vt = quiz.obj("#qp_main" + i.q + " .qp_ao"),
                            (vt ? vt : h).setAttribute("ans", i.ans)) : h.setAttribute("ans", i.ans),
                            et = quiz.obj("INPUT[name='qp_v" + i.q + "_" + i.cq + "']", 1),
                        et && et.parentNode && et.parentNode.parentNode.setAttribute("ans", i.ans));
                        i.score || (i.score = {
                            max: 0
                        });
                        var f = a
                            , h = i.s == i.score.max ? "y" : i.s > 0 ? "p" : "n"
                            , yt = "";
                        f.tagName == "TBODY" ? (f.score || (f.score = 0),
                        f.max || (f.max = 0),
                            f.score += i.s,
                            f.max += i.score.max,
                            h = f.score == f.max ? "y" : f.score > 0 ? "p" : "n",
                            yt = f.score + " / " + f.max) : yt = i.s + " / " + i.score.max;
                        f.setAttribute("mark", h);
                        f.setAttribute("score", yt);
                        r = f.parentNode;
                        r.tagName == "TABLE" && (r = r.parentNode.parentNode);
                        r.score || (r.score = 0);
                        r.max || (r.max = 0);
                        r.score += i.s;
                        r.max += i.score.max;
                        r.max && (wt = r.score == r.max ? "y" : r.score > 0 ? "p" : "n",
                            r.setAttribute("mark", wt),
                            r.setAttribute("score", r.score + " / " + r.max));
                        w = 0;
                        r.sk || (r.sk = 0);
                        r.qsk || (r.qsk = 0);
                        ot = quiz.logic ? 1 : 0;
                        f && f.getAttribute("skip") + "" == "1" && (ot = 0);
                        switch (i.qt) {
                            case 0:
                            case 1:
                            case 4:
                                r.qsk++;
                                i.a && (i.a[0] == 0 || !i.a.length) && (w = 1,
                                    r.sk++);
                                break;
                            case 2:
                            case 3:
                                r.qsk++;
                                i.t || (w = 1,
                                    r.sk++)
                        }
                        ot && (w && f.setAttribute("skipped", 1),
                            r.setAttribute("skipped", r.sk > 0 && r.sk == r.qsk ? 1 : 0));
                        w && f.setAttribute("noans", 1);
                        r.setAttribute("noans", r.sk > 0 && r.sk == r.qsk ? 1 : 0);
                        i.e && (st = i.e[r.score > 0 ? 0 : 1],
                        st && st != -1 && (v = quiz.obj("#qp_main" + i.q + " .qp-explain"),
                            v ? pt = v.childNodes[0] : (v = quiz.obj("qp_main" + i.q).appendChild(document.createElement("DIV")),
                                v.className = "qp-explain",
                                v.setAttribute("tp", r.score > 0 ? "y" : "n"),
                                v.setAttribute("show", 2),
                                pt = v.appendChild(document.createElement("DIV"))),
                            pt.innerHTML = st));
                        (!w || ot == 0 && !quiz.hideSkipped && w) && (r.score || r.max) && (i.qt != 4 && i.qt != 6 && i.qt != 99 && o.c++,
                            o.t += i.s,
                            o[h == "y" ? "qc" : h == "n" ? "qi" : "qp"]++,
                            o.max += i.score.max)
                    }
                }
            var bt = ""
                , dt = String.fromCharCode(209)
                , gt = String.fromCharCode(166);
            for (f in n.r)
                i = n.r[f],
                i.a && (bt += (bt ? dt : "") + i.q + gt + i.a.join(","));
            quiz.checkLogic(quiz.saveQ("LOGIC"));
            quiz.fin && n.f && (quiz.obj("quiz-progress") && !quiz.autoscore && (quiz.obj("quiz-progress").style.display = "none"),
            quiz.order && n.f != 2 && quiz.order.push(quiz.order.length + 1),
            quiz.forceQC && (o.qc = quiz.forceQC),
            quiz.forceScoreMax && (o.max = quiz.forceScoreMax),
                quiz.score = o,
            quiz.obj("quiz-tscore") && (quiz.obj("quiz-tscore").innerHTML = o.t + " / " + o.max + " (" + Math.round(o.t * 100 / o.max) + "%)",
                quiz.obj("quiz-qc").innerHTML = o.qc + " / " + o.c,
                quiz.obj("quiz-qi").innerHTML = o.qi + " / " + o.c,
                quiz.obj("quiz-qp").innerHTML = o.qp + " / " + o.c,
            o.qp || (quiz.obj("quiz-qp").parentNode.parentNode.style.display = "none")),
            quiz.obj(".qp_scoretotal") && (quiz.obj(".qp_scoretotal").innerHTML = o.t + "/" + o.max));
            quiz.sblock && (n.cq || n.cq == 0) ? (quiz.setWait(0, quiz.cntr),
                quiz.liveWaitQ = n.cq,
                c = quiz.lwAllowMove(y),
                c.m == c.p + 1 ? (c.m = c.p,
                    quiz.tabs.show(c.p, 1),
                    quiz.maxQ = c.p) : (quiz.tabs.show(c.m, 1),
                    quiz.maxQ = c.m),
                c.m > c.p ? quiz.liveWaitNext("A") : c.m == c.p && quiz.liveWaitNext(n.rs == 0 ? "Q" : "A", 1)) : quiz.tabs && (n.f != 2 || t) && (y > quiz.tabs.t.length && (y = quiz.tabs.t.length),
                quiz.order ? quiz.randTab(d) : (quiz.maxQ = y,
                    quiz.tabs.show(y, 1)),
                quiz.tabEmpty("+1"));
            n.f == 2 && (quiz.scrollTo(),
                quiz.setProg());
            quiz.evt("loadResponse", n)
        },
        setProg: function(n, t) {
            var u, i, f, r;
            if (t || quiz.prog) {
                if (t && (quiz.prog = {
                    p: t,
                    c: t.childNodes[0],
                    v: n,
                    max: quiz.tabs.qmax,
                    pt: t.className.indexOf("qp_progn") != -1 ? "n" : "p",
                    pg: [],
                    maxP: quiz.tbox.offsetWidth < 480 ? 4 : 8,
                    startP: 0
                },
                quiz.prog.pt == "n"))
                    for (quiz.prog.pgs = t.childNodes[0].childNodes[0],
                             quiz.prog.pge = t.childNodes[0].childNodes[1],
                             i = 0; i < quiz.tbox.tabs.t.length; i++)
                        i == 0 && quiz.tbox.tabs.t[i].getAttribute("startp") == "1" ? quiz.prog.startP = quiz.tbox.tabs.t[i] : (u = quiz.prog[i < quiz.prog.maxP ? "pgs" : "pge"].appendChild(document.createElement("DIV")),
                            u.className = "qp_progress_page",
                            u.innerHTML = quiz.prog.pg.length + 1,
                            quiz.prog.pg.push(u));
                if (t = quiz.prog,
                    t.v = Math.round(n * 100 / t.max),
                t.v || (t.v = 0),
                t.pt == "p")
                    (n + "" != "undefined" || t.v) && (t.c.style.width = t.v + "%");
                else {
                    var o = 0
                        , l = 0
                        , e = quiz.getOrdP() - 1;
                    for (i = 0; i < t.pg.length; i++) {
                        if (t.pg[i].getAttribute("sel") == "c" && t.pg[i].removeAttribute("sel"),
                            f = "",
                            r = quiz.obj(".qp-subtab-c > DIV[tid='" + quiz.getOrdT(i + 1) + "']"),
                        r.length && (r = r[0]),
                            r) {
                            f = r.getAttribute("mark");
                            var s = (r.getAttribute("score") + "/").split("/")
                                , h = parseInt(s[0])
                                , c = parseInt(s[1]);
                            o += h ? h : 0;
                            l += c ? c : 0
                        }
                        i <= e ? t.pg[i].parentNode == t.pge && t.pge.childNodes.length > 2 && (t.pg[i] = t.pgs.appendChild(t.pg[i])) : t.pg[i].parentNode == t.pgs && t.pgs.childNodes.length > t.maxP && (t.pg[i] = t.pge.insertBefore(t.pg[i], t.pge.childNodes[0]));
                        f && t.pg[i].setAttribute("mark", f)
                    }
                    document.body.getAttribute("startp") != "1" && t.pg[e] && t.pg[e].setAttribute("sel", "c");
                    t.p.getAttribute("n") == "1" && (t.p.setAttribute("n", 2),
                        setTimeout(function() {
                            t.p.getAttribute("n") == "2" && quiz.prog.p.setAttribute("n", 0)
                        }, 1));
                    quiz.obj(".qp_progress_score").innerHTML = o
                }
                (n + "" != "undefined" || t.v) && (t.c.setAttribute("p", t.v),
                    t.p.setAttribute("in", t.p.offsetWidth * t.v / 100 > 30 ? 1 : 0))
            }
        },
        initTabs: function() {
            var i, n, t, o, l, f;
            if (quiz.tabs)
                for (quiz.tabs.qk = [],
                         quiz.tabs.qt = [],
                         quiz.tabs.qmax = 0,
                         i = quiz.tabs.hh = {
                             min: 0,
                             max: 0,
                             minIDX: -1,
                             maxIDX: -1
                         },
                         n = 0; n < quiz.tabs.t.length; n++) {
                    var e = quiz.tabs.t[n].getAttribute("tid")
                        , r = quiz.obj("#quiz-tabs DIV[tid='" + e + "'] .take-q, #quiz-ntabs DIV[tid='" + e + "'] .take-q, #quiz-results DIV[tid='" + e + "'] .take-q, #quiz-tabs DIV[tid='" + e + "'] .quiz-live-start", 3)
                        , s = 0
                        , u = 0
                        , h = 0
                        , c = 0;
                    for (t = 0; t < r.length; t++)
                        r[t].tagName && (o = r[t].getAttribute("qt"),
                        (r[t].className + "").indexOf("take-q") != -1 && o != "6" && o != "99" && o != "98" && (s++,
                            quiz.tabs.qmax++,
                            u = r[t],
                            l = r[t].getAttribute("time"),
                        l && (c += parseFloat(l))),
                        getComputedStyle(r[t]).display != "none" && (h = 1));
                    c && quiz.tabs.t[n].setAttribute("time", c);
                    h || quiz.setTabSkip(quiz.tabs.t[n], 1);
                    s || quiz.tabs.t[n].setAttribute("cont", 1);
                    quiz.tabs.t[n].lastSingle = u && (u.getAttribute("qt") == "0" || u.getAttribute("qt") == "1" && u.getAttribute("fmt") == "2" && u.getAttribute("skip") != "1");
                    h && (f = quiz.tabs.t[n].offsetHeight + (quiz.tabs.t[n].lastSingle ? 0 : 79),
                    f && ((f < i.min || i.min == 0) && (i.min = f,
                        i.minIDX = n),
                    f > i.max && (i.max = f,
                        i.maxIDX = n)));
                    quiz.tabs.qk.push(s);
                    quiz.tabs.qt.push(quiz.tabs.qmax);
                    quiz.tbox.className.indexOf("qp-notab-c") != -1 && (quiz.fromScroll = 1,
                        quiz.setTab(n + 1, 0),
                        quiz.fromScroll = 0);
                    quiz.tabs.t[n].cb = function(n) {
                        return function() {
                            return quiz.setTab(n, 0, 0),
                                !0
                        }
                    }(n + 1)
                }
        },
        setReq: function(n) {
            var i, t, r;
            if (quiz.requires) {
                for (quiz.requiresA || (quiz.requiresK = 0,
                    quiz.requiresA = {},
                    quiz.requiresI = []),
                         i = quiz.requires.split(";"),
                         delete quiz.requires,
                         t = 0; t < i.length; t++)
                    i[t] && (r = quiz.requiresK++,
                        quiz.requiresA["req" + r] = {
                            idx: r,
                            src: i[t],
                            s: 0
                        },
                        quiz.async("req" + r, i[t], function(n, t) {
                            return function() {
                                quiz.requiresA["req" + n].s = 1;
                                t && t()
                            }
                        }(r, n)));
                return !1
            }
            return !0
        },
        checkReq: function() {
            if (quiz.requiresA)
                for (var n in quiz.requiresA)
                    if (!quiz.requiresA[n].s)
                        return !1;
            return !0
        },
        runReq: function() {
            if (quiz.requiresI)
                for (var n = 0; n < quiz.requiresI.length; n++)
                    quiz[quiz.requiresI[n]].init();
            quiz.requiresI = []
        },
        resEvents: function() {
            quiz.addE(".qp_rbtn", "click", function(n) {
                var t = n.className.split(" qp_b")[1]
                    , i = n.parentNode.parentNode.parentNode;
                n.sel = n.sel ? 0 : 1;
                n.setAttribute("sel", n.sel);
                i.setAttribute(t, n.sel);
                t == "sort" && quiz.resSort(i, n)
            }, 1)
        },
        initEvents: function() {
            var n, t, i;
            for (quiz.runReq(),
                     n = quiz.obj(".qp_upload LABEL"),
                 n && !n.length && (n = [n]),
                     t = 0; t < n.length; t++)
                quiz.addE(n[t], ["dragover", "dragleave", "drop"], function(n) {
                    return function(t) {
                        return quiz.fileDrop(t, n)
                    }
                }(n[t]));
            quiz.addE(".take-q INPUT:not([type='radio']):not([type='checkbox']),.take-q SELECT,.take-q TEXTAREA", "change", function(n) {
                var t = n.target ? n.target : n.srcElement, i;
                quiz.checkLogic(quiz.saveQ("LOGIC"), 1);
                i = quiz.checkAdv(t);
                i && quiz.checkMand(t);
                t.value && (quiz.clearErr(),
                t.tagName == "SELECT" && i && quiz.saveQ(i))
            });
            quiz.addE(".take-q INPUT:not([type='radio']):not([type='checkbox']),.take-q TEXTAREA", "keyup", function(n) {
                var t = n.target ? n.target : n.srcElement
                    , i = quiz.checkAdv(t);
                i && (quiz.checkMand(t),
                n.keyCode == 13 && t.tagName == "INPUT" && quiz.saveQ(i))
            });
            quiz.previewCH(0);
            i = quiz.findPos(quiz.cntr).sp;
            i != document.body && (quiz.scrollParent = i);
            quiz.addE(quiz.scrollParent || window, "scroll", quiz.onScroll);
            quiz.addE(quiz.obj("DIV[tid]", 3), "click", function(n) {
                quiz.scrollToTab(n.idx)
            }, 1);
            quiz.addE(".qp_progress_page", "click", function(n) {
                quiz.scrollToTab(quiz.getOrdT(parseInt(n.innerHTML)))
            }, 1);
            quiz.initScrollTabs();
            quiz.resEvents();
            quiz.addE(document.body, "keyup", function(n) {
                var i = n.keyCode, u, r, t;
                !1 && quiz.scrolltabs && i > 64 && i < 91 && (u = quiz.tabs.t[quiz.tabs.idx - 1].getAttribute("tid"),
                    r = quiz.obj("DIV[tid='" + u + "'] .take-q:first-of-type INPUT[type='radio'], DIV[tid='" + u + "'] .take-q:first-of-type INPUT[type='checkbox']", 3),
                r && r[i - 65] && (t = r[i - 65],
                    t.checked && t.type == "checkbox" ? quiz.sel(!1, t, 0) : (quiz.sel(!1, t, 1),
                    t.type == "radio" && quiz.saveQ("+1"))))
            });
            quiz.tabSaved = !1
        },
        resSort: function(n, t) {
            var r, i;
            if (!n.sortk)
                for (n.sortk = quiz.sortk = quiz.sortk ? quiz.sortk + 1 : 1,
                         n.setAttribute("sortk", quiz.sortk),
                         r = ".qp_b[sortk='" + quiz.sortk + "'] .qp_ao ",
                         n.a = quiz.obj(r + " .qp_flexc, " + r + " > .qp_a", 3),
                         n.v = quiz.obj(r + " .qp_rv > DIV", 3),
                         i = 0; i < n.a.length; i++)
                    n.a[i].idx = i,
                        n.a[i].v = parseFloat(n.v[i].innerHTML);
            for (n.a.sort(function(n) {
                return function(t, i) {
                    return n ? t.v == i.v ? 0 : t.v > i.v ? -1 : 1 : t.idx == i.idx ? 0 : t.idx < i.idx ? -1 : 1
                }
            }(t.sel)),
                     i = 0; i < n.a.length; i++)
                n.a[0].parentNode.appendChild(n.a[i])
        },
        initTimer: function() {
            if (quiz.qtimer) {
                if (quiz.timerpg > 1) {
                    if (quiz.getOrdP() < quiz.timerpg)
                        return !1;
                    delete quiz.timerpg
                }
                var n = quiz.startTime(0);
                quiz.checkTime(quiz.qtimer, n, 1);
                clearInterval(quiz.qTMR);
                quiz.qTMR = setInterval(function(n, t) {
                    return function() {
                        quiz.checkTime(n, t)
                    }
                }(quiz.qtimer, n), 333)
            }
        },
        initTarget: function() {
            var n, t;
            if (quiz.frk && (n = quiz.obj("A[rel]:not([target])", 3),
            n && n.length))
                for (t = 0; t < n.length; t++)
                    quiz.addE(n[t], "click", function() {
                        quiz.setWait(1)
                    }),
                        n[t].setAttribute("target", "_top")
        },
        init: function() {
            if (quiz.checkReq() && (quiz.evt("beforeInit"),
                quiz.setReq(quiz.init))) {
                try {
                    performance.now && (quiz.tmrp = (new Date).getTime() - performance.now())
                } catch (n) {}
                (quiz.tmrp || (quiz.tti = (new Date).getTime(),
                    setInterval(function() {
                        quiz.tti += 500;
                        var n = quiz.getTT();
                        Math.abs(n - quiz.tti) > 2e3 ? quiz.ttX = 1 : (quiz.ttX = 0,
                            quiz.tti = n)
                    }, 500)),
                    quiz.tbox = quiz.obj("#quiz-tabs, #quiz-ntabs", 2),
                    quiz.cntr = quiz.obj(".quiz-container"),
                quiz.cntr.length && (quiz.cntr = quiz.cntr[0]),
                quiz.tbox || (quiz.tbox = quiz.obj("quiz-results")),
                    quiz.tbox) && (quiz.tbox.tabs || loadTabs(),
                    quiz.tabs = quiz.tbox.tabs,
                    quiz.cntr.wblock = 1,
                    document.body.wblock = 1,
                !quiz.track && quiz.qsV("t") && (quiz.track = quiz.qsV("t")),
                quiz.cntr && (quiz.acc || quiz.acc == 0) && quiz.cntr.setAttribute("qmaccount", quiz.acc),
                    quiz.initTabs(),
                    quiz.initTarget(),
                    quiz.endInit())
            }
        },
        endInit: function() {
            var f, e, i, t, n, s, r, h, u, c, o;
            if (quiz.setProg(0, quiz.obj("quiz-progress")),
                quiz.defaults) {
                for (f = [],
                         e = 0; e < quiz.defaults.length; e++)
                    i = quiz.defaults[e],
                        t = i.v,
                    t.indexOf("{") != -1 && (t = t.replace(/[\{][\s]*(answer to|score of|percent of|answer [\d]+ to|default [\d])[\s]*[\=][\s]*([^\}]+)[\}]/g, function(n) {
                        n = n.substr(1, n.length - 2).replace(/[\s]*[\=][\s]*/g, "=").replace(/(^[\s]+|[\s]+$)/g, "").split("=");
                        switch (n[0]) {
                            case "default 2":
                                return decodeURIComponent(quiz.qsV(n[1]));
                            case "default 3":
                                return quiz.getProp(window, n[1])
                        }
                        return ""
                    })),
                    t && (f.push({
                        q: i.q,
                        a: [],
                        t: t
                    }),
                    i.h && quiz.between({
                        s: i.q,
                        e: 0,
                        hide: 1
                    }));
                f.length && quiz.loadResponse({
                    r: f
                })
            }
            quiz.initEvents();
            n = quiz.nohash ? "" : document.location.hash;
            n.substr(0, 1) == "#" && (n = n.substr(1));
            switch (n.substr(0, 1)) {
                case "C":
                    quiz.obj("DIV[qid='0'][qt='98']", 1) && (quiz.ucodes = 1,
                        quiz.startp = 1,
                        document.location.hash = "",
                        document.getElementsByName("qp_v0")[0].value = n,
                        quiz.noFocus = 1,
                        quiz.rand ? (quiz.fin && quiz.order ? quiz.randTab(1) : quiz.newOrder(),
                            quiz.setTab(quiz.order[0], 0, 1)) : quiz.setTab(1, 0, 1),
                        delete quiz.noFocus,
                        quiz.saveFirst = 0,
                        quiz.saveQ("+1"));
                case "X":
                    s = n.substr(1);
                    r = s.split("-");
                    quiz.ref == r[2] && r.length == 3 && quiz.showResults(r[0] + "-" + r[1]);
                    break;
                case "R":
                    quiz.resumeH(n);
                    break;
                default:
                    quiz.obj("DIV[qid='0'][qt='98']", 1) ? (quiz.ucodes = 1,
                        quiz.startp = 1) : (quiz.sesK = quiz.sessionKntr(1),
                        quiz.initTimer());
                    quiz.noFocus = 1;
                    quiz.rand ? (quiz.fin && quiz.order ? quiz.randTab(1) : quiz.newOrder(),
                        quiz.setTab(quiz.order[0], 0, 1)) : quiz.setTab(1, 0, 1);
                    /(maker|supersurvey|quizwiz)[\.]com[\/]results(Q[\w\d]+|[\d]+[\-][\w\d\-]+)/.test(document.location + "") || quiz.tabEmpty("+1");
                    delete quiz.noFocus
            }
            quiz.srid;
            h = quiz.qsV("fr", "?" + document.location.hash.substr(1));
            h && (quiz.frk = quiz.qsV("frk", "?" + document.location.hash.substr(1)),
                quiz.embed = !0,
                document.body.setAttribute("fr", 1),
                quiz.addE(window, "message", function(n) {
                    if ((n.data + " ").substr(0, 1) == "{") {
                        var t = JSON.parse(n.data);
                        switch (t.act) {
                            case "wait":
                                setWait(t.s);
                                break;
                            case "op":
                                document.body.setAttribute("op", t.op);
                                quiz.addCSS("BODY[op]:after", "opacity:" + (1 - t.op) + "!important");
                                break;
                            case "hfin":
                                quiz.isResize = 0
                        }
                    }
                }),
                quiz.postSize = function() {
                    var t, r, u, i;
                    if (!quiz.isResize) {
                        t = quiz.obj("content").offsetHeight;
                        r = getComputedStyle(document.body);
                        t += parseFloat(r.paddingTop) + parseFloat(r.paddingBottom);
                        u = quiz.obj("DIV.sel", 1);
                        i = 0;
                        u && (i = u.offsetHeight);
                        var n = {
                            qid: "Q" + quiz.ref,
                            k: parseInt(quiz.frk),
                            act: "height"
                        }
                            , f = 0
                            , e = quiz.obj(".qp_bo", 1)
                            , o = quiz.obj(".qp_progress", 1);
                        e && (f = e.offsetHeight - (o ? o.offsetHeight : 0));
                        n.h = t;
                        quiz.tabs.hh ? (n.tmax = t - (i + f) + quiz.tabs.hh.max,
                            n.tmin = t - i + quiz.tabs.hh.min) : (n.tmax = t,
                            n.tmin = t);
                        n.th = i;
                        n.bh = f;
                        n.otmax = n.tmax;
                        quiz.postR = n;
                        (!n.tmax || n.tmax < t) && (n.tmax = t);
                        n.h && (quiz.isResize = 1,
                            parent.window.postMessage(JSON.stringify(n), "*"))
                    }
                }
                ,
                quiz.addE(window, "resize", quiz.postSize),
                quiz.postSize(),
                quiz.addCB("Next", function() {
                    document.body.style.cssText += "overflow:hidden!important";
                    setTimeout(function() {
                        quiz.postSize();
                        document.body.style.overflow = ""
                    }, 100)
                }),
                quiz.addCB("Back", function() {
                    document.body.style.cssText += "overflow:hidden!important";
                    setTimeout(function() {
                        quiz.postSize();
                        document.body.style.overflow = ""
                    }, 100)
                }),
                quiz.addCB("afterResults", function() {
                    setTimeout(quiz.postSize, 300)
                }),
                parent.window.postMessage('{"qid":"Q' + quiz.ref + '","k":' + quiz.frk + ',"act":"init"}', "*"));
            quiz.lkem && (u = quiz.obj(".qp_container", 2),
            u && (c = getComputedStyle(u).maxWidth,
                o = document.createElement("DIV"),
                o.className = "qp_verify_ex",
                o.innerHTML = "<div style='max-width:" + c + ";'><div><div em=\"" + quiz.lkem + '"><\/div><div class=\'qp_verify_exx\' onClick="quiz.clearVerify()"><\/div><\/div><\/div>',
                quiz.lkDom = u.parentNode.appendChild(o)),
                quiz.runCB("verify-saved", u));
            quiz.runCB("afterInit");
            document.body.getAttribute("p") == "quiz-results" && quiz.runCB("afterResults")
        },
        clearVerify: function() {
            delete quiz.lkem;
            delete quiz.lk;
            quiz.lkDom && quiz.lkDom.parentNode.removeChild(quiz.lkDom);
            xSend("LMS.Logout", "", function() {})
        },
        resumeH: function(n, t) {
            var i, r;
            (t || !quiz.obj("quiz-login")) && (i = n.substr(1),
                quiz.srid = "",
                r = i.split("-"),
                typeof qz == "object" && quiz.embed && r.length == 3 ? qz.results("Q" + r[2], r[0] + "-" + r[1]) : i != quiz.rid && quiz.ref && (quiz.setWait(1),
                    quiz.xSend("Quiz.Load_Response " + i + "-" + quiz.ref + (quiz.autoscore ? "-2" : ""), 0, function(n) {
                        return function(t) {
                            if (quiz.setWait(0),
                            t.substr(0, 1) == "{") {
                                if (resp = JSON.parse(t),
                                    resp) {
                                    if (resp.f == 1) {
                                        quiz.nohash || (document.location.hash = "");
                                        quiz.setWait(1);
                                        document.location.reload();
                                        return
                                    }
                                    quiz.rid = n;
                                    quiz.sesK = quiz.sessionKntr();
                                    quiz.loadResponse(resp, 1);
                                    quiz.initTimer()
                                }
                            } else
                                quiz.msg("Unable to load response, please start again")
                        }
                    }(i))))
        },
        previewCH: function(n) {
            if (quiz.ref == "PREVIEW")
                try {
                    quiz.doc = document;
                    top.document.previewChange(quiz, window.frameElement, n)
                } catch (t) {}
        },
        getTT: function() {
            return quiz.tmrp ? Math.round(quiz.tmrp + performance.now()) : quiz.ttX ? quiz.tti : (new Date).getTime()
        }
    };
    for (n in iquiz)
        quiz[n] = iquiz[n],
            delete iquiz;
    gcpCallback = function() {
        quiz.gcpStart()
    }
    ;
    document && "loaded;interactive;complete".indexOf(document.readyState) != -1 ? quiz.init() : quiz.addE(document, "DOMContentLoaded", function() {
        quiz.init()
    });
    Fingerprint = function(n) {
        var t, i;
        t = Array.prototype.forEach;
        i = Array.prototype.map;
        this.each = function(n, i, r) {
            var u, e, f;
            if (n !== null)
                if (t && n.forEach === t)
                    n.forEach(i, r);
                else if (n.length === +n.length) {
                    for (u = 0,
                             e = n.length; u < e; u++)
                        if (i.call(r, n[u], u, n) === {})
                            return
                } else
                    for (f in n)
                        if (n.hasOwnProperty(f) && i.call(r, n[f], f, n) === {})
                            return
        }
        ;
        this.map = function(n, t, r) {
            var u = [];
            return n == null ? u : i && n.map === i ? n.map(t, r) : (this.each(n, function(n, i, f) {
                u[u.length] = t.call(r, n, i, f)
            }),
                u)
        }
        ;
        typeof n == "object" ? (this.hasher = n.hasher,
            this.screen_resolution = n.screen_resolution,
            this.screen_orientation = n.screen_orientation,
            this.canvas = n.canvas,
            this.ie_activex = n.ie_activex) : typeof n == "function" && (this.hasher = n)
    }
    ;
    Fingerprint.prototype = {
        get: function() {
            var n = [], t;
            return n.push(navigator.userAgent),
                n.push(navigator.language),
                n.push(screen.colorDepth),
            this.screen_resolution && (t = this.getScreenResolution(),
            typeof t != "undefined" && n.push(this.getScreenResolution().join("x"))),
                n.push((new Date).getTimezoneOffset()),
                n.push(this.hasSessionStorage()),
                n.push(this.hasLocalStorage()),
                n.push(!!window.indexedDB),
                document.body ? n.push(typeof document.body.addBehavior) : n.push(typeof undefined),
                n.push(typeof window.openDatabase),
                n.push(navigator.cpuClass),
                n.push(navigator.platform),
                n.push(navigator.doNotTrack),
                n.push(this.getPluginsString()),
            this.canvas && this.isCanvasSupported() && n.push(this.getCanvasFingerprint()),
                this.hasher ? this.hasher(n.join("###"), 31) : this.murmurhash3_32_gc(n.join("###"), 31)
        },
        murmurhash3_32_gc: function(n, t) {
            var o, h, r, s, f, e, i, u;
            for (o = n.length & 3,
                     h = n.length - o,
                     r = t,
                     f = 3432918353,
                     e = 461845907,
                     u = 0; u < h; )
                i = n.charCodeAt(u) & 255 | (n.charCodeAt(++u) & 255) << 8 | (n.charCodeAt(++u) & 255) << 16 | (n.charCodeAt(++u) & 255) << 24,
                    ++u,
                    i = (i & 65535) * f + (((i >>> 16) * f & 65535) << 16) & 4294967295,
                    i = i << 15 | i >>> 17,
                    i = (i & 65535) * e + (((i >>> 16) * e & 65535) << 16) & 4294967295,
                    r ^= i,
                    r = r << 13 | r >>> 19,
                    s = (r & 65535) * 5 + (((r >>> 16) * 5 & 65535) << 16) & 4294967295,
                    r = (s & 65535) + 27492 + (((s >>> 16) + 58964 & 65535) << 16);
            i = 0;
            switch (o) {
                case 3:
                    i ^= (n.charCodeAt(u + 2) & 255) << 16;
                case 2:
                    i ^= (n.charCodeAt(u + 1) & 255) << 8;
                case 1:
                    i ^= n.charCodeAt(u) & 255;
                    i = (i & 65535) * f + (((i >>> 16) * f & 65535) << 16) & 4294967295;
                    i = i << 15 | i >>> 17;
                    i = (i & 65535) * e + (((i >>> 16) * e & 65535) << 16) & 4294967295;
                    r ^= i
            }
            return r ^= n.length,
                r ^= r >>> 16,
                r = (r & 65535) * 2246822507 + (((r >>> 16) * 2246822507 & 65535) << 16) & 4294967295,
                r ^= r >>> 13,
                r = (r & 65535) * 3266489909 + (((r >>> 16) * 3266489909 & 65535) << 16) & 4294967295,
                r ^= r >>> 16,
            r >>> 0
        },
        hasLocalStorage: function() {
            try {
                return !!window.localStorage
            } catch (n) {
                return !0
            }
        },
        hasSessionStorage: function() {
            try {
                return !!window.sessionStorage
            } catch (n) {
                return !0
            }
        },
        isCanvasSupported: function() {
            var n = document.createElement("canvas");
            return !!(n.getContext && n.getContext("2d"))
        },
        isIE: function() {
            return navigator.appName === "Microsoft Internet Explorer" ? !0 : navigator.appName === "Netscape" && /Trident/.test(navigator.userAgent) ? !0 : !1
        },
        getPluginsString: function() {
            return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
        },
        getRegularPluginsString: function() {
            return this.map(navigator.plugins, function(n) {
                var t = this.map(n, function(n) {
                    return [n.type, n.suffixes].join("~")
                }).join(",");
                return [n.name, n.description, t].join("::")
            }, this).join(";")
        },
        getIEPluginsString: function() {
            if (window.ActiveXObject)
                return this.map(["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"], function(n) {
                    try {
                        return new ActiveXObject(n),
                            n
                    } catch (t) {
                        return null
                    }
                }).join(";");
            return ""
        },
        getScreenResolution: function() {
            return this.screen_orientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width]
        },
        getCanvasFingerprint: function() {
            var t = document.createElement("canvas")
                , n = t.getContext("2d")
                , i = "http://valve.github.io";
            return n.textBaseline = "top",
                n.font = "14px 'Arial'",
                n.textBaseline = "alphabetic",
                n.fillStyle = "#f60",
                n.fillRect(125, 1, 62, 20),
                n.fillStyle = "#069",
                n.fillText(i, 2, 15),
                n.fillStyle = "rgba(102, 204, 0, 0.7)",
                n.fillText(i, 4, 17),
                t.toDataURL()
        }
    };
    function getIPs(n) {
        var i, o, u, t;
        try {
            var f = {}
                , r = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection
                , e = !!window.webkitRTCPeerConnection;
            r || (i = iframe.contentWindow,
                r = i.RTCPeerConnection || i.mozRTCPeerConnection || i.webkitRTCPeerConnection,
                e = !!i.webkitRTCPeerConnection);
            o = {
                optional: [{
                    RtpDataChannels: !0
                }]
            };
            u = undefined;
            e && (u = {
                iceServers: [{
                    urls: "stun:stun.services.mozilla.com"
                }]
            });
            t = new r(u,o);
            hCand = function(t) {
                try {
                    var i = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(t)[1]
                } catch (r) {}
                i && (/(10|192|172)\.[\d]+\.[\d]+\.[\d]+/.test(i) || (f[i] === undefined && n(i),
                    f[i] = !0))
            }
            ;
            t.onicecandidate = function(n) {
                n.candidate && hCand(n.candidate.candidate)
            }
            ;
            t.createDataChannel("");
            t.createOffer(function(n) {
                t.setLocalDescription(n, function() {}, function() {})
            }, function() {});
            setTimeout(function() {
                if (t.localDescription) {
                    var n = t.localDescription.sdp.split("\n");
                    n.forEach(function(n) {
                        n.indexOf("a=candidate:") === 0 && hCand(n)
                    })
                }
            }, 1e3)
        } catch (s) {}
    }
    getIPs(function(n) {
        n && (document.ip2 + "").indexOf(n) == -1 && (document.ip2 = (document.ip2 ? document.ip2 + "," : "") + n)
    })
}
qzfb = {
    obj: function(n, t) {
        return document.qzScript ? qz.obj(n, t) : obj(n, t)
    },
    addE: function(n, t, i) {
        return document.qzScript ? qz.addE(n, t, i) : attachE(n, t, i)
    },
    xSend: function(n, t, i) {
        return document.qzScript ? qz.xSend(n, t, i) : xSend(n, t, i)
    }
};
window.fbAsyncInit = function() {
    var i = {
        "poll-maker": "463067627146096",
        "quiz-maker": "463067627146096",
        "survey-maker": "273935076403776",
        supersurvey: "273935076403776",
        mychallengetribe: "1447460432175374",
        "clashofclans-tools": "518538828247675",
        doquizzes: "896617837121051",
        doriddles: "106106623151747",
        quotestoknow: "541389202715380",
        myiqtested: "146960112378159"
    }, t = i[(document.location + "").split(".")[1].toLowerCase()], n;
    if (t == "518538828247675" && document.location.pathname == "/embed-test.asp" && (t = 0),
    t || (t = i["poll-maker"]),
        FB.init({
            appId: t,
            cookie: !0,
            xfbml: !0,
            frictionlessRequests: !0,
            version: "v12.0"
        }),
    document.fbCB && document.fbCB !== 1)
        for (n = 0; n < document.fbCB.length; n++)
            document.fbCB[n] && typeof document.fbCB[n] == "function" && document.fbCB[n]();
    document.fbCB = 1
}
;
document && "loaded;interactive;complete".indexOf(document.readyState) != -1 ? loadFB() : qzfb.addE(document, "DOMContentLoaded", function() {
    document.qzScript || loadFB()
})
function gInitc() {
    gg.init("c")
}
function gInitm() {
    gg.init("m")
}
function loadFB(n) {
    var i, r, t;
    if (((document.location + "").split(".")[0] != "http://test" || localStorage.getItem("sm") != "no") && (n && (document.fbCB || (document.fbCB = []),
        document.fbCB === 1 ? n() : document.fbCB.push(n)),
        !document.fbloaded)) {
        i = "en_US";
        try {
            for (r = document.head.getElementsByTagName("META"),
                     t = 0; t < r.length; t++)
                r[t].getAttribute("name") == "language" && (i = r[t].getAttribute("content"));
            document.body && document.body.getAttribute("lang") && (i = document.body.getAttribute("lang"))
        } catch (u) {}
        (function(n, t, r) {
                var u, f = n.getElementsByTagName(t)[0];
                n.getElementById(r) || (u = n.createElement(t),
                    u.id = r,
                    u.src = "//connect.facebook.net/" + i + "/sdk.js",
                    f.parentNode.insertBefore(u, f))
            }
        )(document, "script", "facebook-jssdk");
        document.fbloaded = !0
    }
}
function checkFBCMT() {}
var qz, gg, map, iquiz, quiz, n, gcpCallback, Fingerprint, hCand, qzfb;
if (document.qzScript || (document.qzScript = 1,
!document.querySelectorAll && document.createStyleSheet && function(n, t) {
    n = document;
    t = n.createStyleSheet();
    n.querySelectorAll = function(i, r, u, f, e) {
        for (e = n.all,
                 r = [],
                 i = i.split(","),
                 u = i.length; u--; ) {
            for (t.addRule(i[u], "k:v"),
                     f = e.length; f--; )
                e[f].currentStyle.k && r.push(e[f]);
            t.removeRule(0)
        }
        return r
    }
}(),
    qz = {
        tm: 0,
        dcs: "",
        ssl: (document.location.protocol == "https:" ? "https" : "http") + ":",
        lk: 0,
        qv: 0,
        obj: function(n, t) {
            var r = n.substr(0, 1), u, i;
            if (r == "." || r == "#" || r == "[" || t) {
                if (n = document.querySelectorAll(n),
                n.length == 0)
                    return !1;
                if (n.length == 1 && t != 3 || t === 2)
                    return n[0];
                for (u = [],
                         i = 0; i < n.length; i++)
                    u.push(n[i]);
                return u
            }
            return document.getElementById(n)
        },
        addE: function(n, t, i, r) {
            var u;
            if (t != "DOMContentLoaded" || document.addEventListener || (n = window,
                t = "load"),
            typeof n == "string" && (n = qz.obj(n)),
            t instanceof Array) {
                for (u in t)
                    qz.addE(n, t[u], i, r);
                return
            }
            if (n instanceof Array)
                for (u in n)
                    qz.addE(n[u], t, i, r);
            else {
                if (!n || typeof n != "object")
                    return;
                if (t == "tclick") {
                    qz.addE(n, "click", i, r);
                    n.touchEvt = function(n) {
                        if (document.moveing)
                            return !1;
                        i(n);
                        n.preventDefault()
                    }
                    ;
                    qz.addE(n, "touchstart", n.touchEvt);
                    return
                }
                r && (i = function(n, t) {
                    return function(i) {
                        t(n, i)
                    }
                }(n, i),
                    r = 0);
                n.addEventListener ? n.addEventListener(t, i, !0) : n.attachEvent("on" + t, i)
            }
        },
        aspError: function(n, t, i) {
            return n != "System.ASP_Error" && i.indexOf('<font face="Arial" size=2>') != -1 && i.indexOf("error") != -1 ? (i = i.replace(/([\<][\/]*(font|p)( face[\=][\"]Arial[\"] size[\=]2)*[\>]|^[\s]+|[\s]+$)/gi, "").replace(/[\s]+/gi, " "),
                qz.xSend("System.ASP_Error", "loc=" + encodeURIComponent(document.location) + "&sv=" + encodeURIComponent(n) + "&dv=" + encodeURIComponent(t) + "&rv=" + encodeURIComponent(i), function() {}),
            "XERR: " + i) : !1
        },
        xSend: function(n, t, i) {
            var u, r;
            typeof n == "string" && (n = {
                s: n,
                d: t,
                cb: i
            });
            n.stm = (new Date).getTime();
            document.xtt = 0;
            u = document.location + "";
            n.xTest = qz.tst && !document.noLog && n.s.indexOf("Facebook.Heat_save") == -1 && n.s.indexOf("System.ASP_Error") == -1;
            r = u.match(/[\&\?]fbuid[\=]([\d]+)/i);
            r && r.length && (n.uid = r[1]);
            try {
                n.objXML = new XMLHttpRequest
            } catch (f) {
                n.objXML = new ActiveXObject("Microsoft.XMLHTTP")
            }
            return n.s = escape(n.s),
                n.tURL = "https://" + (qz.tst ? "test" : "www") + ".quiz-maker.com/qapi/" + n.s.replace(/^Quiz[\.]/gi, "") + (n.s.indexOf("?") == -1 ? "&" : "&") + "tt=" + n.stm,
            qz.tst && (document.location + "").indexOf("rebuild=y") != -1 && (n.tURL += "&rebuild=y"),
                n.log = function(t) {
                    if (n.xTest)
                        try {
                            console.log(t)
                        } catch (i) {}
                }
                ,
                n.log("XURLVR: " + n.tURL),
                n.d ? (n.log("XDATA: " + n.d),
                    n.objXML.open("POST", n.tURL, n.cb ? !0 : !1),
                /(^|&)(em|lk)[\=]/.test(n.d + "") && (n.objXML.withCredentials = !0),
                    n.objXML.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                    n.objXML.send(n.d)) : (n.objXML.open("GET", n.tURL, n.cb ? !0 : !1),
                    n.objXML.send(null)),
                n.catchErr = function(n) {
                    return function() {
                        document.xtt = (new Date).getTime() - n.stm;
                        n.isErr = qz.aspError(n.s, n.d, n.objXML.responseText);
                        n.log(n.isErr ? n.isErr : "XRESP: " + n.objXML.responseText)
                    }
                }(n),
                n.cb ? (n.cb !== !0 && (n.objXML.onreadystatechange = function(n) {
                    return function() {
                        n.objXML.readyState == 4 && (n.catchErr(),
                            n.cb(n.objXML.responseText, n))
                    }
                }(n)),
                    !0) : (n.catchErr(),
                    n.objXML.responseText)
        },
        setWait: function(n) {
            qz.obj(".quiz-container", 2).setAttribute("wait", n ? 1 : 0)
        },
        gEvent: function() {},
        loadTabs: function() {
            var r, e, f, u, t, n, i;
            for (document.tabs || (document.tabs = []),
                     r = document.querySelectorAll(".qp-subtab-c, .qp-notab-c"),
                     e = [],
                     i = 0; i < r.length; i++)
                if (!r[i].tabs) {
                    for (f = r[i].previousSibling,
                         f && f.className && (f.className + "").indexOf("qp-subtab") != -1 || (f = !1),
                             n = {
                                 tid: r[i].getAttribute("tid"),
                                 t: [],
                                 h: [],
                                 tp: r[i],
                                 hp: f,
                                 idx: parseInt(r[i].getAttribute("idx")),
                                 max: 1
                             },
                         n.idx || (n.idx = 1),
                         n.tid || (n.tid = i + 1),
                             t = 0; t < n.tp.childNodes.length; t++)
                        u = n.tp.childNodes[t],
                        u.tagName == "DIV" && (u.tidx = t,
                            n.t.push(u),
                        (u.className + "").indexOf("sel") != -1 && (n.idx = n.t.length));
                    if (n.hp)
                        for (t = 0; t < n.hp.childNodes.length; t++)
                            u = n.hp.childNodes[t],
                            u.tagName == "DIV" && n.h.push(u);
                    for (n.show = function(n) {
                        return function(t, i) {
                            var r = n.tabs, s, f, o, h, e, l, u, c;
                            if ((typeof t == "string" && (t = r.idx + parseInt(t)),
                            !t && t !== 0) || t > r.max || t < 1 || r.cb && !r.cb(r.idx, t) || r.t[t - 1] && r.t[t - 1].cb && !r.t[t - 1].cb(r.idx, t))
                                return !1;
                            for (s = i || t == r.idx ? "" : t > r.idx ? " fwd" : " bck",
                                     f = 0; f < r.t.length; f++)
                                o = f == t - 1 ? "sel" + s : "",
                                    h = (r.t[f].className + "").replace(/(^|[\s])(sel|fwd|bck|slide)(?=[\s]|$)/gi, "$1").replace(/[\s]+$/gi, ""),
                                    r.t[f].className = (h ? h + (o ? " " : "") : "") + o,
                                r.h[f] && (r.h[f].className = o);
                            e = (document.location.hash + "").split("-");
                            i || qz.nohash || n.getAttribute("hash") == "no" || e[0] && e[0] != "#" && e[0] != "#tab" || (e[0] = "#tab",
                                e[r.hidx] = t,
                                document.location.hash = e.join("-"));
                            l = n.offsetWidth;
                            u = r.t[t - 1];
                            s && (u.className += " slide",
                                setTimeout(function(n) {
                                    return function() {
                                        var t = (n.className + "").replace(/(^|[\s])(sel|fwd|bck|slide)(?=[\s]|$)/gi, "$1").replace(/[\s]+$/gi, "");
                                        n.className = (t ? t + " " : "") + ((n.className + "").indexOf("sel") == -1 ? "" : "sel")
                                    }
                                }(u), r.tp.getAttribute("animt") ? parseInt(r.tp.getAttribute("animt")) : 200));
                            r.idx = t;
                            c = u.getAttribute("onTab");
                            c && setTimeout(c.replace(/Tab[\_]IDX/gi, "'" + t + "'"), 0);
                            document.body.setAttribute("tidx-" + r.tid, u.ord ? u.ord : t);
                            document.body.setAttribute("tend-" + r.tid, (u.ord ? u.ord : t) >= r.max ? 1 : 0);
                            u.getAttribute("tab") && document.body.setAttribute("tn-" + r.tid, u.getAttribute("tab"))
                        }
                    }(r[i]),
                             t = 0; t < n.t.length; t++)
                        n.t[t].idx = t + 1,
                            n.t[t].show = function(n, t) {
                                return function(i, r) {
                                    n.show(t, r)
                                }
                            }(n, t + 1),
                        n.h[t] && qz.addE(n.h[t], "tclick", n.t[t].show);
                    qz.nohash || r[i].getAttribute("hash") == "no" || (e.push(r[i]),
                        n.hidx = e.length);
                    n.max = n.t.length;
                    n.tp.tabs = n;
                    n.hp && (n.hp.tabs = n);
                    n.show(n.idx, 1);
                    document.tabs.push(n);
                    r[i].setAttribute("tabs", 1)
                }
            if (!document.hashLoad && !qz.nohash) {
                if (n = (document.location.hash + "").split("-"),
                n[0] == "#tab")
                    for (i = 1; i < n.length; i++)
                        e[i - 1] && e[i - 1].tabs.show(parseInt(n[i]), 1);
                document.hashLoad = 1
            }
            qz.loadSocial()
        },
        getHost: function() {
            var n = (document.location.host + ".").toLowerCase().split(".")
                , t = {
                "poll-maker": 1,
                doquizzes: 1,
                "quiz-maker": 1,
                quizwiz: 1,
                "survey-maker": 1,
                supersurvey: 1,
                sitelistener: 1
            };
            return t[n[1]] ? t[n[1]] : t[n[0]]
        },
        loadSocial: function() {
            var o = (document.location + "?#").split("?")[0].split("#")[0] + "?s=res", i = document.title + "", u, t, n, e, r, a;
            for (document.shareData || (document.shareData = {
                results: {
                    url: o,
                    txt: i,
                    img: ""
                },
                poll: {
                    url: o.replace(/[\/]results/gi, "/poll"),
                    txt: i.replace(/[\s]*[\-][\s]*Results$/gi, " - Poll"),
                    img: ""
                },
                quiz: {
                    url: o.replace(/[\/]public/i, "").replace(/[\/]results([\d]+[\-][^\-]+[\-]|Q){0,1}/gi, "/Q"),
                    txt: i.replace(/^Quiz Results[\s]*[\-][\s]*/gi, ""),
                    img: ""
                }
            }),
                     t = document.querySelectorAll(".qp_sharedata[t]"),
                     n = 0; n < t.length; n++)
                if (u = t[n].innerHTML,
                u && u.substr(0, 1) == "{")
                    try {
                        u = JSON.parse(u);
                        quiz.shareData[t[n].getAttribute("t")] = u
                    } catch (v) {}
            for (t = document.querySelectorAll(".social-share[t] DIV"),
                     n = 0; n < t.length; n++) {
                var f = t[n].className
                    , c = {
                    fb: "Facebook",
                    tw: "Twitter",
                    gp: "Google Plus",
                    re: "Reddit",
                    st: "Stumble Upon",
                    tu: "Tumblr",
                    pi: "pInterest",
                    ed: "Embed",
                    cr: "Create",
                    "in": "LinkedIn"
                }
                    , l = {
                    fb: "Share on FB",
                    ed: "Embed this quiz on your website or blog",
                    cr: "Create your own",
                    "in": "Share on LinkedIn"
                }
                    , s = l[f] ? l[f] : "Share on " + c[f]
                    , h = f == "fb" ? "FB" : c[f];
                try {
                    s = quiz.translate(s);
                    h = quiz.translate(h)
                } catch (v) {}
                t[n].setAttribute("title", s);
                t[n].setAttribute("txt", h);
                qz.addE(t[n], "click", function(n) {
                    return function() {
                        var e = n.parentNode.getAttribute("t"), t = document.shareData[e], o, r, f, u, s;
                        quiz && quiz.shareData[e] && (t = quiz.shareData[e],
                        t.url && qz.evt(t.url.split("/").pop(), "Shared", {
                            sharetype: n.className
                        }));
                        o = qz.getHost();
                        !o && t.emurl && (t.url = document.location + "");
                        r = encodeURIComponent(t.url);
                        i = encodeURIComponent(t.name ? t.name : t.txt);
                        img = encodeURIComponent(t.img);
                        qz.gEvent("Share Click", e, n.className);
                        f = "";
                        t.accounts && (f = t.accounts.replace(/[^a-zA-Z\_\-\,]+/gi, ""));
                        f || (f = "poll_maker");
                        u = "";
                        t.hash && (u = t.hash.replace(/[^a-zA-Z\_\-\,]+/gi, ""));
                        u || (u = e == "quiz" ? "quiz" : "pollmaker");
                        u == "quiz" && t.url.indexOf("survey-maker") != -1 && (u = "survey");
                        switch (n.className) {
                            case "fb":
                                try {
                                    qz.obj("fb-root").style.display = ""
                                } catch (h) {}
                                o ? (s = {
                                    method: "feed",
                                    link: t.url,
                                    description: t.txt,
                                    picture: t.img
                                },
                                t.name && (s.name = t.name),
                                    FB.ui(s, function(n) {
                                        n && n.post_id && qz.gEvent("Results", "Shared", "fb")
                                    })) : window.open("https://www.facebook.com/sharer/sharer.php?u=" + r + "&title=" + i, "_blank", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=400");
                                break;
                            case "pi":
                                window.open("https://www.pinterest.com/pin/create/button/?url=" + r + "&media=" + img + "", "_blank", "width=600, height=500");
                                break;
                            case "tw":
                                window.open("https://twitter.com/share?url=" + r + "&text=" + i + "&related=" + f + "&hashtags=" + u, "_blank", "width=600, height=300");
                                break;
                            case "gp":
                                window.open("https://plus.google.com/share?url=" + r, "_blank", "width=600, height=300");
                                break;
                            case "re":
                                window.open("http://www.reddit.com/submit?url=" + r + "&title=" + i + "&related=" + f + "&hashtags=" + u, "_blank", "");
                                break;
                            case "st":
                                window.open("http://www.stumbleupon.com/badge/?url=" + r, "_blank", "width=800, height=600");
                                break;
                            case "tu":
                                window.open("http://www.tumblr.com/share/link?url=" + r + "&name=" + i + "&description=" + i, "_blank", "width=900, height=700");
                                break;
                            case "ed":
                                window.open("https://www.quiz-maker.com/Embed-Code?q=Q" + quiz.ref + "#tab-2", "_blank", "");
                                break;
                            case "cr":
                                window.open("https://www.quiz-maker.com/", "_blank", "");
                                break;
                            case "in":
                                window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + r + "&title=" + i + "&summary=" + i, "_blank", "width=800, height=500")
                        }
                        try {
                            quiz.ref && qz.xSend("Quiz.Share " + quiz.ref + ";" + n.className, 0, !0)
                        } catch (h) {}
                    }
                }(t[n]))
            }
            for (t = document.querySelectorAll(".social-share-group INPUT.qp-share-inp"),
                     n = 0; n < t.length; n++)
                e = t[n].getAttribute("t"),
                    r = document.shareData[e],
                quiz && quiz.shareData[e] && (r = quiz.shareData[e]),
                    a = qz.getHost(),
                !a && r.emurl && (r.url = document.location + "",
                e == "quiz" && (r.url = (r.url + "#").split("#")[0])),
                    t[n].value = r.url,
                    qz.addE(t[n], "click", function(n) {
                        return function() {
                            n.select()
                        }
                    }(t[n])),
                    qz.addE(t[n], "copy", function(n) {
                        return function() {
                            qz.gEvent("Share Click", n.getAttribute("t"), "ln")
                        }
                    }(t[n]))
        },
        data: {},
        host: "www.poll-maker.com",
        tst: 0,
        setKey: function(n) {
            qz.apiKey = n
        },
        setKey: function(n) {
            qz.apiKey = n
        },
        getQuiz: function(n, t) {
            return qz.data[n + "-" + (t ? t : 0)].qObj
        },
        load: function(n) {
            var u, r, i, f, t, o, e;
            if (n.parent ? typeof n.parent != "object" && (n.parent = qz.obj(n.parent)) : n.parent = document.body,
                !n.parent) {
                console.log("DOM Element for Quiz Loading not found");
                return
            }
            if (u = document.createElement("DIV"),
                u.setAttribute("quiz", n.quiz),
                u.setAttribute("data-quiz", n.quiz),
                u = n.parent.appendChild(u),
                r = [],
                i = qz.lk,
                qz.lk++,
                r[i] = u,
                f = r[i].getAttribute("quiz"),
                r[i].k = i,
                t = {
                    id: f,
                    k: i,
                    m: document.createElement("DIV"),
                    lnk: document.createElement("DIV"),
                    a: u,
                    html: "",
                    sk: 0,
                    w: n.width,
                    h: n.height,
                    fs: n.fullscreen,
                    qObj: n
                },
                t.m.className = "qp_quiz",
                n.opt)
                for (o in n.opt)
                    e = {
                        type: "emtypeN"
                    }[o],
                        e = e ? e : o,
                        t[e] = n.opt[o];
            r[i].tagName == "DIV" && (r[i].innerHTML = "",
                r[i].style.display = "inline");
            r[i].parentNode.insertBefore(t.lnk, r[i]);
            r[i].parentNode.insertBefore(t.m, r[i]);
            r[i].loaded = !0;
            qz.data[f + "-" + i] = t;
            r[i].parentNode.style.textAlign = "center";
            t.emtypeN ? qz.buildPop(t) : (t.m.innerHTML = !n.loadMsg && n.loadMsg !== "" ? "Loading Quiz..." : n.loadMsg,
                t.m.setAttribute("q", f),
                t.m.style.cssText = "position:relative; margin-bottom:20px; color:#525252; font-family:'open sans',sans-serif; font-weight:400; font-size:14px; line-height:1.5; text-align:left; -webkit-transition:height 150ms ease-out,opacity 100ms ease-out 150ms; transition:height 150ms ease-out,opacity 100ms ease-out 150ms; -moz-transition:height 150ms ease-out,opacity 100ms ease-out 150ms;",
            t.w && (t.m.style.maxWidth = t.w,
                r[i].style.maxWidth = t.w),
            t.h && (t.m.style.height = t.h,
                t.m.style.overflow = "auto"),
            t.fs && (document.body.className += " quiz-page"),
                qz.xSend("Quiz.Take " + f.substr(1), "ref=" + encodeURIComponent(qz.ref()) + (qz.apiKey ? "&apikey=" + qz.apiKey : 0), function(n, t) {
                    return function(n) {
                        var r = "?tt=" + (new Date).getTime();
                        t.fs && (n = n.replace(/ quiz[\-]embed/gi, ""));
                        t.html = n;
                        t.sc = qz.getScripts(n);
                        t.lnk.innerHTML = "<link id='qz-css-" + t.id + "' onLoad=\"qz.styleLoad('" + t.id + "'," + i + ")\" href='" + qz.ssl + "//" + (qz.tst ? qz.host + "/3012/CDN" : "cdn.poll-maker.com") + "/quiz-embed-v1.css" + r + "' rel='stylesheet' type='text/css'>";
                        qz.leTFN = function(n, t) {
                            return function() {
                                qz.leStyle(n, t)
                            }
                        }(t.id, i);
                        qz.leTMR = setTimeout(qz.leTFN, 1e3)
                    }
                }(t.m, t)))
        },
        list: function(n, t) {
            var i = "";
            i += n.list ? (i ? "&" : "") + "list=" + encodeURIComponent(n.list) : "";
            i += n.tag ? (i ? "&" : "") + "tag=" + encodeURIComponent(n.tag) : "";
            i += qz.apiKey ? (i ? "&" : "") + "apikey=" + qz.apiKey : "";
            qz.xSend("Quiz.Public_Quiz_List", i, function(n, t) {
                return function(n) {
                    n = n.substr(0, 1) == "{" ? JSON.parse(n) : 0;
                    n || (n = {
                        error: "Invalid Response"
                    });
                    t && t(n)
                }
            }(n, t))
        },
        quizReady: function(n, t) {
            var i = qz.data[n + "-" + (t ? t : 0)];
            i.a.ready = 1;
            i.a.start && qz.startQuiz(i.a)
        },
        startQuiz: function(n) {
            var t = parseInt(n.getAttribute("data-emtype"));
            n.start = 1;
            n.ready ? t ? (n.pop = 1,
                qz.popQuiz(n)) : (n.previousSibling.style.display = "block",
                n.style.display = "none") : (n.style.cursor = "wait",
                n.style.opacity = "0.7",
                t && !n.pop ? (n.pop = 1,
                    qz.popInit(n)) : setTimeout(function(n) {
                    return function() {
                        qz.startQuiz(n)
                    }
                }(n), 300))
        },
        popInit: function(n) {
            var o = n.getAttribute("data-quiz"), t = qz.data[o + "-" + n.k], c, e, r, u, i, a;
            if (qz.addE(window, "message", function(n) {
                return function(t) {
                    var i, r;
                    if ((t.data + " ").substr(0, 1) == "{") {
                        if (i = JSON.parse(t.data),
                        i.qid != n.id || i.k !== n.k)
                            return;
                        switch (i.act) {
                            case "init":
                                n.op && n.f.contentWindow.postMessage('{"act":"op","op":' + n.op + "}", "*");
                                n.winit = 1;
                                qz.popQuiz(n.a);
                                n.m.className = "qp_quiz";
                                qz.evt(n.id, n.k, "Load", {
                                    status: "loaded"
                                });
                                break;
                            case "window":
                                i.evt.status && setTimeout(function(n) {
                                    return function() {
                                        var t = qz.findPos(n)
                                            , i = t.y + t.sp.scrollTop - 35;
                                        qz.easeScroll(i)
                                    }
                                }(f), 350);
                                break;
                            case "verifycb":
                                n.f.removeAttribute("qpmax");
                            case "height":
                                i.h && n.emtypeN != 2 && n.emtypeN != 3 && n.emtypeN != 4 && n.emtypeN != 6 && (n.emtypeN == 1 ? n.h && n.h != "auto" || (n.f.style.height = i.h + 0 + "px",
                                n.m.qpfr && (n.m.style.height = "")) : (n.f.style.height = i.h + 0 + "px;",
                                n.f.inith || (n.f.parentNode.style.height = i.tmax + 0 + "px",
                                    n.f.style.minHeight = "100%",
                                n.emtypeN == 5 && (r = i.tmax + 0 + 80,
                                    n.winx.style.cssText = "bottom:" + r + "px;bottom:min(calc(100% - 40px)," + r + "px)"))),
                                    n.f.inith = 1,
                                    n.f.contentWindow.postMessage('{"act":"hfin"}', "*"));
                                qz.evt(n.id, n.k, "Height", i);
                                break;
                            case "max":
                                qz.obj("qp-frstyle") || document.body.insertAdjacentHTML("beforeBegin", "<STYLE id='qp-frstyle'>IFRAME[qpmax='1'] {position:fixed; top:0; left:0; bottom:0; right:0; height:100%!important; width:100%!important; background:transparent!important;}<STYLE>");
                                n.f.setAttribute("qpmax", 1);
                                break;
                            case "min":
                                n.f.removeAttribute("qpmax");
                                break;
                            case "body":
                                document.body.setAttribute(i.n, i.v)
                        }
                    }
                }
            }(t)),
                c = "https://poll-maker.com",
            t.host && (c = t.host),
                t.f = document.createElement("IFRAME"),
                t.f.src = c + "/" + o + (t.eurl ? "?" + t.eurl : "") + "#fr=" + encodeURIComponent(document.location + "") + "&frk=" + t.k,
                t.f.setAttribute("scrolling", "auto"),
                t.f.setAttribute("frameborder", "0"),
                t.f.style.cssText = t.emtypeN == 2 ? "position:fixed; height:100%; width:100%; zindex:1; top:0px; left:0px; background:transparent;" : "width:100%; height:" + (t.emtypeN == 5 && t.sh && (!t.h || t.h == "auto") ? t.sh + "px" : "100%") + "; background:transparent; border:0; overflow:auto;",
                t.m.appendChild(t.f),
                n.ready = 1,
                e = {
                    src: qz.ref(),
                    lnk: []
                },
            e.src && !qz.getHost()) {
                if (r = qz.obj("A[href*='linkto.run/'][href*='" + o.substr(1) + "']", 3),
                    r)
                    for (u = 0; u < r.length; u++) {
                        i = {};
                        a = r[u].parentNode;
                        i.v = r[u].getAttribute("href").split("linkto.run/")[1].split("/")[0];
                        var l = i.t = r[u].innerText
                            , s = r[u].previousSibling
                            , h = r[u].nextSibling;
                        i.t = "[" + i.t + "]";
                        s && s.nodeType == 3 && s.textContent && (i.t = s.textContent + "" + i.t);
                        h && h.nodeType == 3 && h.textContent && (i.t += h.textContent + "");
                        i.t = i.t.replace(/^[\s\r\f\n\t]+|[\s\r\f\n\t]+$/gi, "");
                        "[" + l + "]" == i.t && (i.t = l);
                        r[u].getAttribute("rel") == "nofollow" && (i.nf = 1);
                        e.lnk.push(i)
                    }
                qz.xSend("Quiz.Track_Ref " + o.substr(1), e.src ? "ref=" + encodeURIComponent(JSON.stringify(e)) : "", function() {
                    return function() {}
                }(t))
            }
        },
        popQuiz: function(n) {
            var r = n.getAttribute("data-quiz") + "-" + n.k, t = qz.data[r], i;
            n.start && t.win && (i = parseInt(t.win.getAttribute("show")),
            i || (t.a.style.opacity = 1,
                t.a.style.cursor = "",
                t.a.style.pointerEvents = ""),
                t.win.s = i = i ? 0 : 1,
            (t.emtypeN == 3 || t.emtypeN == 4) && (qz.qv += i ? 1 : -1,
                document.body.setAttribute("qpshow", qz.qv ? 1 : 0)),
                t.win.setAttribute("show", i),
            i && clearTimeout(t.popTMR))
        },
        dataProp: function(n, t) {
            for (var i, r, e, o, u = 0, f = n.attributes, s = f.length; u < s; u++)
                i = f[u].nodeName.split("-"),
                    r = f[u].nodeValue,
                i[0] == "data" && (e = {
                    type: "emtype",
                    emtype: "emtypeN",
                    width: "w",
                    height: "h",
                    fullscreen: "fs"
                }[i[1]],
                    i = e ? e : i[1],
                    o = parseFloat(r),
                r + "" == o + "" && (r = o),
                    t[i] = r)
        },
        init: function() {
            var i, e, t, r, o, f, n, u, c;
            for (window.qzAsyncInit && window.qzAsyncInit(),
                     i = document.querySelectorAll("A[quiz],DIV[quiz],A[data-quiz],DIV[data-quiz]", 1),
                     n = 0; n < i.length; n++)
                if (!i[n].loaded) {
                    for (e = i[n].getAttribute("quiz"),
                         e || (e = i[n].getAttribute("data-quiz")),
                             i[n].k = n,
                             t = {
                                 id: e,
                                 k: n,
                                 m: document.createElement("DIV"),
                                 lnk: document.createElement("SPAN"),
                                 a: i[n],
                                 html: "",
                                 sk: 0
                             },
                             qz.dataProp(i[n], t),
                         (i[n].tagName == "DIV" || (i[n].innerHTML + "").indexOf("Loading") != -1) && (i[n].innerHTML = "",
                             i[n].style.display = "inline"),
                             r = i[n]; r && r.className !== "qp_frame"; )
                        r = r.previousSibling ? r.previousSibling : r.parentNode;
                    if (i[n].parentNode.insertBefore(t.lnk, i[n]),
                        r && r.className == "qp_frame" ? (t.m = r,
                            t.m.qpfr = 1,
                            t.m.className += " qp_quiz") : (t.m.className = "qp_quiz",
                            i[n].parentNode.insertBefore(t.m, i[n])),
                        i[n].parentNode.style.textAlign = "center",
                        i[n].loaded = !0,
                        qz.data[e + "-" + n] = t,
                        t.m.setAttribute("q", e),
                    n > 0 && !t.emtypeN)
                        t.m.innerHTML = "<div style='margin:10px 0;padding:10px;border:1px solid #EC0000;color:#EC0000;max-width:500px;background-color:#FFEAEA;font-family:Arial;font-size:14px;'>Error: Unable to load Quiz, there is already a quiz on this page<\/div>"
                    else if (t.emtypeN)
                        qz.buildPop(t);
                    else {
                        if (o = {
                            src: qz.ref(),
                            lnk: []
                        },
                        o.src && (f = qz.obj("A[href*='linkto.run/'][href*='" + e.substr(1) + "']", 3),
                            f))
                            for (n = 0; n < f.length; n++) {
                                u = {};
                                c = f[n].parentNode;
                                u.v = f[n].getAttribute("href").split("linkto.run/")[1].split("/")[0];
                                var h = u.t = f[n].innerText
                                    , r = f[n].previousSibling
                                    , s = f[n].nextSibling;
                                u.t = "[" + u.t + "]";
                                r && r.nodeType == 3 && r.textContent && (u.t = r.textContent + "" + u.t);
                                s && s.nodeType == 3 && s.textContent && (u.t += s.textContent + "");
                                u.t = u.t.replace(/^[\s\r\f\n\t]+|[\s\r\f\n\t]+$/gi, "");
                                "[" + h + "]" == u.t && (u.t = h);
                                f[n].getAttribute("rel") == "nofollow" && (u.nf = 1);
                                o.lnk.push(u)
                            }
                        t.m.style.cssText = (t.emtype && t.emtype != 4 ? "display:none;" : "") + " position:relative; margin-bottom:20px; color:#525252; font-family:'open sans',sans-serif; font-weight:400; font-size:14px; line-height:1.5; text-align:center; -webkit-transition:height 150ms ease-out,opacity 100ms ease-out 150ms; transition:height 150ms ease-out,opacity 100ms ease-out 150ms; -moz-transition:height 150ms ease-out,opacity 100ms ease-out 150ms;";
                        t.w && (t.m.style.maxWidth = t.w,
                            i[n].style.maxWidth = t.w);
                        t.h && (t.m.style.height = t.h,
                            t.m.style.overflow = "auto",
                            t.m.setAttribute("scroll", 1));
                        t.fs && (document.body.className += " quiz-page");
                        qz.xSend("Quiz.Take " + e.substr(1), o.src ? "ref=" + encodeURIComponent(JSON.stringify(o)) : "", function(n, t) {
                            return function(n) {
                                var i = "?tt=" + (new Date).getTime();
                                t.fs && (n = n.replace(/ quiz[\-]embed/gi, ""));
                                t.html = n;
                                t.sc = qz.getScripts(n);
                                t.lnk.innerHTML = "<link id='qz-css-" + t.id + "' onLoad=\"qz.styleLoad('" + t.id + "')\" href='" + qz.ssl + "//" + (qz.tst ? qz.host + "/3012/CDN" : "cdn.poll-maker.com") + "/quiz-embed-v1.css" + i + "' rel='stylesheet' type='text/css'>";
                                qz.leTFN = function(n, t) {
                                    return function() {
                                        qz.leStyle(n, t)
                                    }
                                }(t.id, t.k);
                                qz.leTMR = setTimeout(qz.leTFN, 1e3)
                            }
                        }(t.m, t))
                    }
                }
        },
        buildPop: function(n) {
            if (n.emtypeN > 2) {
                n.win = document.createElement("DIV");
                n.win.className = "qp_quiz_win qp_em" + n.emtypeN;
                n.m.parentNode.insertBefore(n.win, n.m);
                var t = "";
                qz.obj("qp-win-css") || (t += ".qp_quiz_win\t\t\t\t\t\t\t\t{opacity:0; position:fixed; top:0; left:0; bottom:0; right:0; padding:30px; transition:opacity 300ms ease-out; pointer-events:none; box-sizing:border-box; z-index:2;}",
                    t += ".qp_quiz_win .qp_quiz\t\t\t\t\t\t{display:block; position:relative; overflow:hidden; height:100%; max-height:calc(100% - 0px); width:calc(100% - 0px); border-radius:6px; box-shadow:1px 1px 6px 1px rgba(0,0,0,0.3); pointer-events:none;}",
                    t += ".qp_quiz_win[show='1']\t\t\t\t\t{opacity:1; pointer-events:all; background:rgba(0,0,0,0.4);}",
                    t += ".qp_quiz_win[show='1'] .qp_quiz, .qp_quiz_win[show='1'] .qp_win_close {pointer-events:all;}",
                    t += "*[data-quiz]:hover\t\t\t\t\t\t{filter:brightness(0.95);}",
                    t += "*[data-quiz][data-dark]:hover\t\t\t\t{filter:brightness(1.2);}",
                    t += "BODY[qpshow='1']\t\t\t\t\t\t\t{overflow:hidden!important;}",
                    t += ".qp_quiz_win.qp_em3 .qp_quiz IFRAME\t\t{height:100%!important;}",
                    t += ".qp_quiz_win.qp_em4 .qp_quiz\t\t\t\t{transition:left 300ms linear!important; left:100%; width:85%;}",
                    t += ".qp_quiz_win.qp_em4[show='1'] .qp_quiz\t{left:15%;}",
                    t += ".qp_quiz_win.qp_em5, .qp_quiz_win.qp_em6\t{background:transparent; pointer-events:none;}",
                    t += ".qp_quiz_win.qp_em5 .qp_quiz\t\t\t\t{position:absolute; transition:bottom 300ms linear; top:auto; bottom:-100%; right:20px; left:auto; width:50%; max-height:calc(100% - 120px);}",
                    t += ".qp_quiz_win.qp_em5 .qp_win_close \t\t{right:0; top:auto; bottom:-100%;}",
                    t += ".qp_quiz_win.qp_em5[show='1'] .qp_quiz\t{bottom:100px;}",
                    t += ".qp_quiz_win.qp_em5[show='1'] + A[data-quiz='" + n.id + "'] {}",
                    t += ".qp_quiz_win.qp_em6 .qp_win_close \t\t{left:calc(50% - 20px); display:block; top:50px; transition:none;}",
                    t += ".qp_quiz_win.qp_em6 .qp_quiz\t\t\t\t{transition:left 300ms linear; top:40px; left:100%; width:calc(50% + 30px); max-height:calc(100% - 80px)!important; border-top-right-radius:0; border-bottom-right-radius:0;}",
                    t += ".qp_quiz_win.qp_em6[show='1'] .qp_quiz\t{left:50%;}",
                    t += ".qp_win_close {position:absolute; z-index:99; top:10px; right:10px; width:40px; line-height:40px; text-align:center; cursor:pointer; border-radius:100%; opacity:1; pointer-events:none; transition:opacity 300ms ease-out;}",
                    t += ".qp_win_close:before {content:'X'; font-family:'Arial'; font-size:20px;}",
                    t += ".qp_win_close:hover {color:#0057ad; background-color:rgba(255,255,255,1); box-shadow:1px 1px 3px 0px rgba(0,0,0,0.8);}",
                    t += "@media only screen and (max-width:479px) {",
                    t += ".qp_quiz_win\t\t\t\t\t\t\t\t{padding:20px;}",
                    t += ".qp_quiz_win.qp_em5 .qp_quiz\t\t\t\t{left:0; width:100%;}",
                    t += ".qp_quiz_win.qp_em6 .qp_quiz\t\t\t\t{width:calc(100% + 20px); top:20px;  height:calc(100% - 40px)!important;}",
                    t += ".qp_quiz_win.qp_em6[show='1'] .qp_quiz\t{left:0;}",
                    t += ".qp_quiz_win.qp_em6 .qp_win_close\t\t\t{left:0; top:40px;}",
                    t += "}",
                    t = "<STYLE id='qp-win-css'>" + t + "<\/STYLE>");
                n.win.innerHTML = "<div class='qp_win_close'><\/div>" + t;
                n.win.appendChild(n.m);
                n.winx = n.win.childNodes[0];
                qz.addE(n.winx, "click", function(n) {
                    return function() {
                        qz.startQuiz(n)
                    }
                }(n.a));
                n.a.style.opacity == "0.5" && (n.a.start = 1,
                    qz.popInit(n.a));
                (n.seconds || n.exit || n.scroll) && (n.a.pop = 1,
                    qz.popInit(n.a),
                    n.autoPop = function(n) {
                        return function(t) {
                            if (t && t.type == "scroll",
                            !t || t.type != "mouseout" || t.clientY < 50 && t.relatedTarget == null && t.target.nodeName.toLowerCase() !== "select") {
                                var i = qz.data[n];
                                i.win.s || i.win.fpop || (i.winit ? (i.a.start = 1,
                                    qz.popQuiz(i.a)) : i.a.start = 1);
                                i.win.fpop = 1
                            }
                        }
                    }(n.id + "-" + n.k),
                n.seconds && (n.popTMR = setTimeout(n.autoPop, n.seconds * 1e3)),
                n.scroll && qz.addE(window, "load", function(n) {
                    return function() {
                        qz.addE(window, "scroll", n.autoPop)
                    }
                }(n)),
                n.exit && qz.addE(window, "load", function(n) {
                    return function() {
                        qz.addE(document, "mouseout", n.autoPop)
                    }
                }(n)))
            } else
                qz.popInit(n.a)
        },
        ref: function() {
            var n = "";
            try {
                n = top.document.location + ""
            } catch (t) {
                try {
                    n = document.location + ""
                } catch (t) {}
            }
            return n
        },
        getScripts: function(n) {
            var r = n.match(/[\<]SCRIPT[^\>]*[\>]([^\<]|[\<][^s]|[\<]S[^C])+[\<][\/]SCRIPT[\>]/gi), t = "", u, i;
            if (r && r.length)
                for (u = 0; u < r.length; u++)
                    i = r[u].split(">"),
                        i.shift(),
                        i = i.join(">"),
                        t += i.substr(0, i.length - 9),
                    t && t.substr(t.length - 1) != ";" && (t += ";");
            return t
        },
        setLeadQ: function(n) {
            var i = qz.data[n], t, r;
            if (quiz.isLC && (qz.data["LCQ" + quiz.schema.id] = n),
                i.qObj) {
                for (t in quiz.schema.questions)
                    r = i.qObj.schema.questions[t] = quiz.schema.questions[t],
                        r.lead_capture = !0;
                qz.evt(n, "Lead", {
                    status: "leadcapture"
                })
            }
        },
        results: function(n, t) {
            var i = qz.data[n];
            n = n.substr(1);
            qz.setWait(1);
            qz.xSend("Quiz.Results " + t + "-" + n, (qz.apiKey ? "apikey=" + qz.apiKey : "") + (qz.clang ? "&lang=" + qz.clang.toUpperCase() : ""), function(n, t, i) {
                return function(n) {
                    if (n == "R")
                        document.location = "https://www.quiz-maker.com/results" + t + "-" + i + (qz.clang ? "/" + qz.clang.toUpperCase() : "");
                    else {
                        var u = /class[\=][\'\"][^\'\"]*quiz[\-]container[^\'\"]+quiz[\-]lc[^\'\"]*[\'\"]/i.test(n)
                            , r = u ? "ntabs" : "results";
                        n = n.replace(/(id=[\']quiz[\-])tabs([\'])/gi, "$1" + r + "$2").replace(/document.tabs[\[]0[\]]([\.]show[\(])/gi, "quiz.obj('quiz-" + r + "').tabs$1");
                        quiz.reInit({
                            html: n,
                            lc: u,
                            res: 1,
                            rid: t,
                            tn: r
                        });
                        qz.nohash || (document.location.hash = "R" + t + "-" + i);
                        qz.evt("Q" + i, "Results", {
                            status: "results"
                        })
                    }
                }
            }(i, t, n))
        },
        leStyle: function(n, t) {
            if (qz.leFIN) {
                qz.styleLoad(n, t);
                return
            }
            var i = getComputedStyle(qz.obj(".qp_quiz", 2), null).borderBottomStyle;
            i == "dotted" && (qz.leFIN = 1);
            qz.leTMR = setTimeout(qz.leTFN, 300)
        },
        styleLoad: function(n, t) {
            var i, u, r;
            clearTimeout(qz.leTMR);
            i = qz.data[n + "-" + (t ? t : 0)];
            i.sk++;
            i.sk > 0 && (i.m.style.visibility = "hidden",
                i.m.innerHTML = i.html.replace(/([\'\"])([\/][\/][\w]+)/gi, "$1" + qz.ssl + "$2"),
            quiz.rid && "Q" + quiz.ref != n && (quiz.rid = "",
            qz.nohash || (document.location.hash = "")),
                quiz.embed = !0,
                qz.evt(n, t, "Load", {
                    status: "loaded"
                }),
                u = navigator.userAgent + "",
            (/MSIE|Trident|Edge/.test(u) || /^((?!chrome|android).)*safari/i.test(u)) && document.compatMode == "BackCompat" && quiz.addCSS(".qp_a", "height:auto!important;"),
                i.sc ? setTimeout(i.sc + "qz.loadTabs();qz.created('" + n + "'," + t + ");quiz.init();qz.quizReady('" + n + "'," + t + ");", 1) : (qz.loadTabs(),
                    qz.created(n, t),
                    quiz.init(),
                    qz.quizReady(n, t)),
                i.m.style.visibility = "",
            i.tb && (i.tb.tb.style.height = ""),
            i.fs && (i.m.style.font = "inherit",
                i.m.style.color = "inherit"),
            i.fs || (r = qz.obj(".qp_quiz[q='" + n + "'] .qp_progress", 2),
            r && getComputedStyle(r).position == "fixed" && (r.style.position = "absolute")))
        },
        created: function(n, t) {
            qz.apiKey && (quiz.apiKey = qz.apiKey,
            qz.data[n + "-" + t] && qz.data[n + "-" + t].track && (quiz.track = qz.data[n + "-" + t].track),
            quiz.schema && delete quiz.schema.id,
                qz.evt(n, t, "Create", {
                    status: "created",
                    schema: quiz.schema
                }))
        },
        async: function(n, t, i) {
            var f = document;
            if (f.getElementById(n))
                return i && i(),
                    !1;
            var u = t.indexOf(".css") == -1 ? "script" : "link"
                , r = f.createElement(u)
                , e = f.getElementsByTagName(u)[0];
            u == "link" && (r.setAttribute("type", "text/css"),
                r.setAttribute("rel", "stylesheet"));
            r[u == "script" ? "src" : "href"] = t.substr(0, 4) == "http" ? t : (/[\/]{2}test[\.]/.test(t) ? "http:" : "https:") + (t.substr(0, 2) == "//" ? "" : "//") + t;
            r.id = n;
            i && r.addEventListener("load", function(n) {
                i(null, n)
            }, !1);
            e.parentNode.insertBefore(r, e)
        },
        evt: function(n, t, i, r) {
            var u = qz.data[n + "-" + t], t;
            if (u && u.qObj) {
                for (t in r)
                    u.qObj[t] = r[t];
                if (u.qObj["on" + i] && u.qObj["on" + i](u.qObj) === !1)
                    return !1
            }
            return !0
        },
        apiR: function(n) {
            var h = qz.data["LC" + n.qid], t, r, u, e, o, f, s, i;
            if (h && (n.qid = h),
                t = qz.data[n.qid + "-" + (n.k ? n.k : 0)],
            t && t.qObj) {
                if (t.qObj.response || (r = {
                    questions: {}
                },
                quiz.order && (r.question_order = quiz.order.join(",")),
                quiz.track && (r.track = quiz.track),
                    t.qObj.response = r),
                    n.answers) {
                    var l = String.fromCharCode(209)
                        , a = String.fromCharCode(166)
                        , c = n.answers.split(l);
                    for (i = 0; i < c.length; i++)
                        if (u = c[i].split(a),
                            u[1]) {
                            for (e = {
                                answers: []
                            },
                                     o = u[1].split(","),
                                     f = 0; f < o.length; f++)
                                e.answers.push(parseInt(o[f]));
                            t.qObj.response.questions["Q" + u[0]] = e
                        }
                    delete n.answers
                }
                if (n.questions) {
                    for (s in n.questions)
                        t.qObj.response.questions[s] = n.questions[s];
                    delete n.questions
                }
                delete n.qid;
                for (i in n)
                    t.qObj.response[i] = n[i]
            }
        }
    },
document.currentScript && (qz.dcs = document.currentScript.src + "",
    qz.host = qz.dcs.split("/")[2]),
qz.host.split(".")[0] == "test" && (qz.tst = 1)),
    "loaded;interactive;complete".indexOf(document.readyState) != -1 ? qz.init() : qz.addE(document, "DOMContentLoaded", qz.init),
    gg = {
        c: 0,
        m: 0,
        mF: [],
        cF: [],
        ref: "",
        tChart: {
            c: 0,
            opt: {
                chartArea: {
                    top: 20,
                    backgroundColor: "#FFFFFF"
                },
                backgroundColor: "#FFFFFF",
                colors: ["#006FB9", "#5BCFFC", "#163463", "#82BF49", "#84D9C9", "#4D8C7A", "#D9BC2B", "#F27C38", "#D93D3D", "#8E0B07", "#404040", "#262626"],
                is3D: !0,
                legend: {
                    position: "bottom",
                    textStyle: {
                        color: "#434343",
                        fontSize: 11
                    }
                },
                width: "100%",
                fontSize: 11
            }
        },
        obj: function(n, t) {
            return document.qzScript ? qz.obj(n, t) : obj(n, t)
        },
        xSend: function(n, t, i) {
            return document.qzScript ? qz.xSend(n, t, i) : xSend(n, t, i)
        },
        async: function(n, t, i) {
            return document.qzScript ? qz.async(n, t, i) : async(n, t, i)
        },
        attachE: function(n, t, i, r) {
            return document.qzScript ? qz.addE(n, t, i, r) : attachE(n, t, i, r)
        },
        cU: "www.google.com/jsapi?callback=gInit",
        mU: "maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=visualization&callback=gInit",
        load: function(n) {
            gg[n] || gg.async("gapi" + n, gg[n + "U"] + n, n == "c" ? gInitc : gInitm)
        },
        run: function(n, t, i) {
            gg[n + t] || (gg[n] == 2 ? i() : (gg[n + "F"].push(i),
                gg.load(n)))
        },
        init: function(n) {
            for (gg[n] = 2,
                     n += "F"; gg[n].length; ) {
                var t = gg[n].shift();
                t()
            }
        },
        makeExpL: function(n, t, i) {
            var r = document.createElement("A");
            r.className = "chart-export";
            r.target = "_blank";
            r.href = n.getImageURI();
            r.setAttribute("download", i + ".png");
            r = t.parentNode.appendChild(r)
        },
        getTimeLine: function() {
            gg.run("c", "t", function() {
                google.load("visualization", "1", {
                    callback: "gg.timeData",
                    packages: ["corechart"]
                })
            })
        },
        timeData: function(n) {
            gg.obj("time-canvas").setAttribute("wait", 1);
            n && gg.tChart.n && gg.tChart.c.draw(google.visualization.arrayToDataTable(gg.tChart.n), gg.tChart.opt);
            gg.xSend({
                s: "Quiz.Results_TimelineData " + gg.ref,
                utf: 1,
                noLog: 1,
                cb: function(n) {
                    var t, u, i, r, f;
                    if (n.substr(0, 1) != "D")
                        return console.log(n),
                            !1;
                    for (n = n.substr(1),
                             t = gg.tChart.d = n.split("~"),
                             t[0] = t[0].split("|"),
                             u = t.concat([]),
                             i = 1; i < t.length; i++)
                        for (t[i] = t[i].split("|"),
                                 u[i] = t[i].concat([]),
                                 r = 1; r < t[i].length; r++)
                            t[i][r] = parseInt(t[i][r]),
                                u[i][r] = 0;
                    f = google.visualization.arrayToDataTable(t);
                    gg.tChart.n = u;
                    gg.tChart.c = new google.visualization.LineChart(gg.obj("time-canvas"));
                    gg.tChart.c.draw(f, gg.tChart.opt);
                    gg.makeExpL(gg.tChart.c, gg.obj("time-canvas"), "timeline");
                    gg.ct = 1;
                    gg.obj("time-canvas").removeAttribute("wait")
                }
            })
        },
        getMap: function() {
            return document.mapStart ? !0 : (document.lfK = 0,
                document.mapStart = function() {
                    if (document.lfK++,
                    document.lfK == 4) {
                        var n = document.gMap = L.map("map-canvas");
                        n._handlers.forEach(function(n) {
                            n.disable()
                        });
                        gg.attachE(gg.obj("map-loader"), "mousedown", function() {
                            if (!gg.obj("map-loader").loaded) {
                                gg.obj("map-loader").loaded = 1;
                                gg.obj("map-loader").setAttribute("wait", 1);
                                var t = document.gl = L.mapboxGL({
                                    attribution: '<a href="https://www.maptiler.com/license/maps/" target="_blank">© MapTiler<\/a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors<\/a>',
                                    accessToken: "not-needed",
                                    style: "https://api.maptiler.com/maps/streets/style.json?key=vHvrAnkOBn26Z7Z6n5XA"
                                }).addTo(n);
                                t._glMap.on("load", function() {
                                    n._handlers.forEach(function(n) {
                                        n.enable()
                                    });
                                    n.drawHeat();
                                    gg.obj("map-loader").removeAttribute("wait");
                                    gg.obj("map-loader").removeAttribute("load")
                                })
                            }
                        });
                        gg.mapData()
                    }
                }
                ,
                gg.obj("map-loader").setAttribute("load", 0),
                gg.async("lf01", "//unpkg.com/leaflet@1.3.1/dist/leaflet.css", document.mapStart),
                gg.async("lf06", "//api.tiles.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css", document.mapStart),
                gg.async("lf02", "//unpkg.com/leaflet@1.3.1/dist/leaflet.js", function() {
                    gg.async("lf04", "//api.tiles.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.js", function() {
                        gg.async("lf05", "//cdn.klokantech.com/mapbox-gl-leaflet/latest/leaflet-mapbox-gl.js", document.mapStart);
                        gg.async("lf03", "//cdn.poll-maker.com/pm-leaflet-heat.js", document.mapStart)
                    })
                }),
                !0)
        },
        mapData: function(n) {
            if (gg.obj("map-loader").setAttribute("wait", 1),
                n) {
                var t = document.gMap;
                t.heat && (t.removeLayer(t.heat),
                    t.heat = 0)
            }
            gg.xSend({
                s: "Quiz.Results_GeoData " + gg.ref,
                utf: 1,
                cb: function(n) {
                    var o, f, e, r, u, i;
                    if (n.substr(0, 1) != "D" || n == "D")
                        return console.log(n),
                            !1;
                    n = n.substr(1);
                    var s = []
                        , h = n.split(",")
                        , c = 0
                        , t = {
                        w: 1,
                        min: {
                            lat: !1,
                            lng: !1
                        },
                        max: {
                            lat: !1,
                            lng: !1
                        }
                    };
                    for (o = 0; o < h.length; o++)
                        f = h[o].split(";"),
                            e = f[2] ? parseInt(f[2]) : 1,
                            c += e,
                            r = parseFloat(f[0]),
                            u = parseFloat(f[1]),
                            s.push([r, u, e]),
                        e > t.w && (t.w = e),
                        (r < t.min.lat || t.min.lat === !1) && (t.min.lat = r),
                        (u < t.min.lng || t.min.lng === !1) && (t.min.lng = u),
                        (r > t.max.lat || t.max.lat === !1) && (t.max.lat = r),
                        (u > t.max.lng || t.max.lng === !1) && (t.max.lng = u);
                    i = document.gMap;
                    i.drawHeat = function(n, i) {
                        return function() {
                            n.heat && n.removeLayer(n.heat);
                            n.heat = i.length < 20 ? L.heatLayer(i, {
                                minOpacity: .7,
                                max: t.w / 4,
                                blur: 5,
                                radius: 7,
                                gradient: {
                                    .1: "lime",
                                    .5: "yellow",
                                    .75: "red"
                                }
                            }).addTo(n) : L.heatLayer(i, {
                                minOpacity: .2,
                                max: t.w / 4,
                                blur: 5,
                                radius: 15,
                                gradient: {
                                    .1: "lime",
                                    .5: "yellow",
                                    .75: "red"
                                }
                            }).addTo(n)
                        }
                    }(i, s);
                    i.drawHeat();
                    document.body.offsetWidth <= 375 ? i.fitBounds([[84.336980376396042, 103.35937499999227], [-59.175928249272658, -139.92187500000568]], {
                        linear: !0,
                        duration: 0
                    }) : document.body.offsetWidth <= 767 ? i.fitBounds([[75.845168540271885, 233.43749999999272], [-60.58696734225461, -195.46875000000003]], {
                        linear: !0,
                        duration: 0
                    }) : i.fitBounds([[-43.5434, -159.53], [61.1441, 176.9167]], {
                        linear: !0,
                        duration: 0
                    });
                    gg.obj("map-loader").removeAttribute("wait")
                }
            })
        }
    },
    !document.qzVote) {
    document.qzVote = 1;
    document.utf = 1;
    iquiz = {};
    typeof quiz == "object" && (iquiz = quiz);
    quiz = {
        ref: "",
        rid: "",
        saveFirst: 0,
        save: 0,
        rand: 0,
        fin: 0,
        tidx: 1,
        cidx: 0,
        qidx: 0,
        cq: 1,
        maxQ: 0,
        ca: 0,
        ct: "",
        scrollDr: "f",
        lastST: 0,
        retry: 0,
        nexttime: 2e3,
        cSave: [],
        requires: "",
        cInf: "",
        emptyX: [],
        autoadv: 0,
        noadv: 0,
        autoscore: 0,
        tmr: (new Date).getTime(),
        noalert: 0,
        msgL: [],
        blockTab: [],
        score: {
            t: 0,
            qi: 0,
            qc: 0,
            qp: 0,
            c: 0,
            max: 0
        },
        aVal: {},
        shareData: {},
        plugins: {},
        callbacks: {},
        sendA: {
            e: ["public", "embed", "owner", "notify", "apipost", "ucodes", "vanon"],
            a: ["sref", "ct", "check", "apikey", "integrate", "connect", "lk", "ftmr", "tool"]
        },
        setN: function(n) {
            for (var t in n)
                quiz[t] = n[t]
        },
        obj: function(n, t) {
            return document.qzScript ? qz.obj(n, t) : obj(n, t)
        },
        addE: function(n, t, i, r) {
            return document.qzScript ? qz.addE(n, t, i, r) : attachE(n, t, i, r)
        },
        loadTabs: function() {
            document.qzScript ? qz.loadTabs() : loadTabs()
        },
        xSend: function(n, t, i) {
            return document.qzScript ? qz.xSend(n, t, i) : xSend(n, t, i)
        },
        async: function(n, t, i) {
            return document.qzScript ? qz.async(n, t, i) : async(n, t, i)
        },
        setWait: function(n, t, i, r) {
            return document.qzScript ? qz.setWait(n, t, i, r) : setWait(n, t, i, r)
        },
        gEvent: function() {},
        qsV: function(n, t) {
            t = t ? t : document.location + "";
            try {
                return new RegExp("[\\?\\&]" + n + "[\\=]([^\\&\\?\\=\\#]+)").exec(t)[1]
            } catch (i) {}
            return ""
        },
        evt: function(n, t) {
            return quiz.runCB(n, t),
                document.qzScript ? qz.evt("Q" + quiz.ref, n, t) : !0
        },
        apiR: function(n) {
            document.qzScript && quiz.apiKey && (n.qid = "Q" + quiz.ref,
                qz.apiR(n))
        },
        addCB: function(n, t) {
            quiz.callbacks[n] || (quiz.callbacks[n] = []);
            quiz.callbacks[n].push(t)
        },
        runCB: function(n, t) {
            var u, i, f, r;
            if (!quiz.callbacks[n])
                return u;
            for (i = 0; i < quiz.callbacks[n].length; i++)
                f = quiz.callbacks[n][i],
                f && (delete r,
                    r = f(t),
                typeof r != "undefined" && (u = r));
            return u
        },
        getProp: function(n, t, i, r) {
            var e, u, f;
            if (t.indexOf(".") != -1) {
                for (e = t.split("."),
                         u = n,
                         f = 0; f < e.length; f++) {
                    if (typeof u[e[f]] == "undefined" && i && f < e.length - 1 && (u[e[f]] = {}),
                    typeof u[e[f]] != "object")
                        return i && (u[e[f]] = r),
                            u[e[f]];
                    u = u[e[f]]
                }
                return i && (u = r),
                    u
            }
            return i && (n[t] = r),
                n[t]
        },
        msg: function(n, t) {
            n = quiz.translate(n) + (t ? t : "");
            n && (quiz.noalert ? quiz.msgL.unshift(n) : quiz.win({
                id: "alert",
                msg: n
            }))
        },
        translate: function(n, t, i) {
            var s = n + "", f, r, u, e, o;
            if (quiz.tmsg)
                for (f = 0; f < quiz.tmsg.list.length; f++) {
                    if (r = quiz.tmsg.list[f],
                        u = r.t,
                    t && r.c && (u = r.c[t] ? r.c[t] : n),
                    r.v == n || r.v == "<h2>" + n + "<\/h2>")
                        return u;
                    if (i && r.ids) {
                        for (e = 0,
                                 o = 0; !e && o < r.ids.length; o++)
                            r.ids[o] == i && (e = 1);
                        if (e)
                            return u
                    } else
                        r.v && (s = s.replace(new RegExp(r.v,"gi"), u))
                }
            return s
        },
        translateAll: function(n) {
            var o, r, f, t, u, i, e, s;
            for (quiz.clang = n,
                 typeof qz == "object" && (qz.clang = n),
                     o = quiz.obj(".qp_title,.qp_qi,.qp_instruct,.qp_t,.qp_a > DIV", 3),
                     f = 0; f < o.length; f++) {
                t = o[f];
                r = 0;
                switch (t.className) {
                    case "qp_qi":
                    case "qp_instruct":
                        for (u = t; u && u.className != "take-q"; )
                            u = u.parentNode;
                        u && (r = u.getAttribute("qid") + "_q");
                        t.original || (t.original = t.innerHTML);
                        t.innerHTML = quiz.translate(t.original, n, r);
                        break;
                    case "qp_t":
                        for (i = [],
                                 e = 0; e < t.childNodes.length; e++)
                            s = t.childNodes[e],
                                i[s.nodeType] = s;
                        i[1] && (r = (i[1].name + "").replace(/qp_v/gi, "") + "_a" + i[1].value);
                        i[3] && (t.original || (t.original = i[3].textContent),
                            i[3].textContent = quiz.translate(t.original, n, r));
                        break;
                    case "qp_title":
                        r = "t";
                    default:
                        t.original || (t.original = t.innerHTML);
                        t.innerHTML = quiz.translate(t.original, n, r)
                }
            }
        },
        login: function(n) {
            var t, i;
            if (n == 2) {
                quiz.isSignup = quiz.isSignup ? 0 : 1;
                quiz.obj("#quiz-login INPUT").value = quiz.obj(".qp_qi", 2).innerHTML = quiz.translate(quiz.isSignup ? "Create Account" : "Login");
                quiz.obj("quiz-signup").innerHTML = quiz.translate(quiz.isSignup ? "Login" : "Create Account");
                return
            }
            !n && quiz.isSignup && (n = 1);
            quiz.setWait(1);
            t = quiz.loginI = function(n) {
                return quiz.obj(".qp_" + n + "_inp", 1)
            }
            ;
            t("em").type == "hidden" && t("em").value != "test@test.com" && (t("em").value = "x");
            i = t("em").parentNode.getAttribute("n");
            quiz.xSend({
                s: "Quiz." + (n ? "Signup" : "Login") + " " + quiz.dx(0).replace(/[^\w\d]+/gi, ""),
                d: !n || n == 1 ? "em=" + encodeURIComponent(t("em").value) + (i ? "&tp=" + i : "") + "&pw=" + encodeURIComponent(t("pw").value) + (quiz.rid ? "&id=" + encodeURIComponent(quiz.rid) : "") : "s=" + n,
                cb: function(n) {
                    var t, i;
                    if (n = n.split(";"),
                        t = n.shift(),
                        n = n.join(";"),
                    t == "X") {
                        quiz.setWait(0);
                        i = quiz.obj(".qp_qi");
                        i.innerHTML = i.innerHTML.replace(/signup/gi);
                        return
                    }
                    t && t != "E" ? quiz.loginInit(n) : (quiz.setWait(0),
                        quiz.msg(n ? n : "Unable to login, please check your connection"))
                }
            })
        },
        expFrame: function(n) {
            parent.window.postMessage('{"qid":"Q' + quiz.ref + '","k":' + quiz.frk + ',"act":"' + (n ? "max" : "min") + '"}', "*");
            document.body.setAttribute("qpmax", n ? 1 : 0)
        },
        verifyWin: function(n) {
            if (quiz.runCB("verify-init", n) !== !1) {
                if (!quiz.pHost(1).pm || qsV("vframe") == "y") {
                    quiz.verifyWinF(n);
                    return
                }
                quiz.embed && window.innerWidth <= 320 && quiz.expFrame(1);
                quiz.setWait(1);
                var t = document.body.getAttribute("lang");
                quiz.runCB("verify-win", n) !== !1 && quiz.xSend({
                    s: "Quiz.Verify_Win " + quiz.ref,
                    d: "d=" + (quiz.verify ? encodeURIComponent(JSON.stringify(quiz.verify)) : "") + (quiz.langID ? "&lang=" + quiz.langID : "") + (t ? "&lc=" + t : "") + (quiz.vanon ? "&vanon=y" : ""),
                    cmsg: n,
                    cb: function(n, t) {
                        quiz.runCB("verify-show", {
                            s: t,
                            r: n
                        }) !== !1 && (quiz.win({
                            id: "verify",
                            msg: "<span class='quiz-verify'>" + n + "<\/span>",
                            show: 0,
                            btns: []
                        }),
                        t.cmsg && (quiz.obj(".qp_verify_msg").innerHTML = sys.translate(t.cmsg)),
                            quiz.requires = quiz.obj("verify-inp").getAttribute("src"),
                            quiz.setReq(function() {
                                quiz.runReq();
                                quiz.setWait(0);
                                quiz.win({
                                    id: "verify",
                                    show: 1
                                })
                            }))
                    }
                })
            }
        },
        verifyWinF: function(n) {
            var t = document.body.getAttribute("lang");
            quiz.addE(window, "message", function(t) {
                var i, r, u, f;
                if ((t.data + " ").substr(0, 1) == "{") {
                    i = JSON.parse(t.data);
                    switch (i.act) {
                        case "verify":
                            quiz.setWait(0);
                            quiz.win({
                                id: "verifyf",
                                show: 1
                            });
                            r = quiz.obj(".quiz-verify");
                            u = '{"act":"vwin","quiz":{"ref":"' + quiz.ref + '","verify":' + JSON.stringify(quiz.verify) + ',"langID":' + (quiz.langID ? quiz.langID : 0) + ',"vanon":' + (quiz.vanon ? quiz.vanon : 0) + "}" + (n ? ',"cmsg":"' + n.replace(/[\"]/gi, "'") + '"' : "") + "}";
                            r.contentWindow.postMessage(u, "*");
                            break;
                        case "verifycb":
                            quiz.win({
                                id: "verifyf",
                                show: 0
                            });
                            quiz.lk = i.lk;
                            quiz.saveCB && (f = quiz.saveCB,
                                quiz.saveCB = !1,
                                f())
                    }
                }
            });
            quiz.win({
                id: "verifyf",
                msg: "<iframe class='quiz-verify' src=\"https://take.quiz-maker.com/api/Quiz.Verify_Frame\"><\/iframe>",
                show: 0,
                btns: []
            })
        },
        verifyFrame: function() {
            quiz.addE(window, "message", function(n) {
                var t, i;
                if ((n.data + " ").substr(0, 1) == "{") {
                    t = JSON.parse(n.data);
                    switch (t.act) {
                        case "vwin":
                            for (i in t.quiz)
                                quiz[i] = t.quiz[i];
                            quiz.verifyWin(t.cmsg)
                    }
                }
            });
            top.postMessage('{"act":"verify"}', "*")
        },
        loginInit: function(n) {
            var r, i, u, t;
            if (quiz.timeout) {
                quiz.setWait(0);
                quiz.win({
                    id: "login",
                    show: 0
                });
                quiz.timeout();
                return
            }
            quiz.obj(".qp_qi", 1).innerHTML = quiz.translate("Your session has timed out, please login again");
            r = quiz.reInit({
                html: n,
                su: 1
            });
            r.m.className = "quiz-container quiz-embed";
            quiz.saveFirst = 1;
            quiz.setWait(0);
            quiz.win({
                id: "login",
                msg: "<span class='quiz-login'>" + r.phtml + "<\/span>",
                show: 0,
                btns: []
            });
            i = quiz.loginI;
            i && (i("em").value = "",
                i("pw").value = "");
            u = quiz.obj(".preview-tb", 2);
            u && u.setAttribute("login", "y");
            t = document.location.hash;
            t.substr(0, 1) == "#" && (t = t.substr(1));
            t.substr(0, 1) == "R" && setTimeout(function() {
                return function() {
                    quiz.resumeH(t, 1)
                }
            }(t), 2)
        },
        forgot: function(n, t) {
            quiz.win({
                id: "alert",
                show: 0
            });
            quiz.setWait(1);
            quiz.xSend({
                s: "Quiz.Forgot_Password " + quiz.dx(0).replace(/[^\w\d]+/gi, ""),
                d: "em=" + encodeURIComponent(quiz.loginI("em").value) + (n ? "&rc=" + encodeURIComponent(n) + "&pw=" + encodeURIComponent(t) : ""),
                cb: function(n) {
                    quiz.setWait(0);
                    n = n.split(";");
                    var t = n.shift();
                    n = n.join(";");
                    switch (t) {
                        case "E":
                        case "":
                            n = n.split(";");
                            quiz.win({
                                id: "forgot",
                                show: 0
                            });
                            quiz.msg(n[0] ? n[0] : "Unable to send password reset link, please contact the quiz or survey creator", " (code " + !n[1] ? 700 : n[1] + ")");
                            return;
                        case "M":
                            quiz.werr("forgot", n);
                            return;
                        case "S":
                            quiz.win({
                                id: "forgot",
                                msg: quiz.translate("An email has been sent to your email address with a code to reset your password") + ".<br><br>" + quiz.translate("Enter the code and your new password below to continue") + "<br><div style='max-width:250px; margin:40px auto;'><input class='qp_txti' type='text' value='' placeholder='" + quiz.translate("Reset Code") + "' style='margin:0 0 20px 0;'><input class='qp_txti' type='password' value='' placeholder='" + quiz.translate("New Password") + "'><\/div>",
                                show: 1,
                                btns: [{
                                    id: "fgsave",
                                    v: "Save",
                                    cn: "qp-win-y",
                                    cb: function() {
                                        var n = quiz.obj("#forgot .qp_txti", 3)
                                            , r = n[0].parentNode.parentNode
                                            , t = n[0].value
                                            , i = n[1].value;
                                        if (quiz.werr("forgot"),
                                        !t || (t + "").replace(/[^0-9]/gi).length < 6) {
                                            quiz.werr("forgot", quiz.translate("Please enter a valid Reset Code"), n[0]);
                                            return
                                        }
                                        if (!i || (i + "").replace(/^[\s]+|[\s]+$/gi).length < 6) {
                                            quiz.werr("forgot", quiz.translate("Your new password must be a minimum of 6 characters"), n[1]);
                                            return
                                        }
                                        quiz.forgot(t, i)
                                    }
                                }, {
                                    id: "fgsend",
                                    v: "Resend Code",
                                    cn: "qp-win-n",
                                    cb: function() {
                                        quiz.plugins.winforgot.xCB();
                                        quiz.forgot()
                                    }
                                }, {
                                    id: "fgx",
                                    v: "Cancel",
                                    cn: "qp-win-n",
                                    cb: function() {
                                        quiz.plugins.winforgot.xCB()
                                    }
                                }]
                            });
                            return;
                        default:
                            quiz.win({
                                id: "forgot",
                                show: 0
                            });
                            quiz.loginInit(n);
                            return
                    }
                }
            })
        },
        win: function(n) {
            if (n.msg && (n.msg + "").indexOf("<") == -1 && (n.msg = n.msg.replace(/[\n]/gi, "<br>")),
                quiz.plugins["win" + n.id]) {
                var t = n.show || n.show == 0 ? n.show : 1;
                n.msg && (quiz.obj("#" + n.id + " .qp-win-body").innerHTML = n.msg);
                n = quiz.plugins["win" + n.id];
                n.show = t;
                n.w.setAttribute("show", t);
                return
            }
            n.id == "alert" && quiz.addE(document.body, "keyup", function(n) {
                if (n.keyCode == 13) {
                    var t = quiz.plugins.winalert;
                    if (console.log("test", t.show),
                    t && t.show)
                        return quiz.win({
                            id: "alert",
                            show: 0
                        }),
                            n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                        n.stopPropagation && n.stopPropagation(),
                            !1
                }
            });
            n.xCB || (n.xCB = function(n) {
                return function() {
                    n.show = 0;
                    n.w.setAttribute("show", 0)
                }
            }(n));
            n.nCB || (n.nCB = n.xCB);
            n.yCB || (n.yCB = function(n) {
                return function() {
                    n.yes(n) && n.xCB()
                }
            }(n));
            n.btns || (n.btns = [],
                n.btns.push({
                    v: "OK",
                    id: n.id + "_y",
                    cn: "qp-win-y",
                    cb: n.yes ? n.yCB : n.nCB
                }),
            n.yes && n.btns.push({
                v: "Cancel",
                id: n.id + "_n",
                cn: "qp-win-n",
                cb: n.nCB
            }));
            n.w = document.createElement("DIV");
            n.w.className = "qp-win";
            n.w.id = n.id;
            n.w.innerHTML = "<div class='qp-blur' vis=" + (n.blur == 0 ? 0 : 1) + "><\/div><div class='qp-win-i'><div><div class='qp-win-title'>" + (n.title ? n.title : "") + "<\/div><div class='qp-win-body'>" + (n.msg ? n.msg : "") + "<\/div><div class='qp-win-btns'>" + quiz.wbtn(n.btns ? n.btns : [{
                v: "OK",
                id: n.id + "_y",
                cn: "qp-win-y",
                cb: n.yCB
            }, {
                v: "Cancel",
                id: n.id + "_n",
                cn: "qp-win-n",
                cb: n.nCB
            }]) + "<\/div><\/div><\/div>";
            n.err = function(n) {
                return function(t, i) {
                    for (var u = quiz.obj("#" + n.id + " .qp-win-body,#" + n.id + " *[err]", 3), r = 0; r < u.length; r++)
                        u[r].removeAttribute("err");
                    t && (setTimeout(function(n, t) {
                        return function() {
                            n.setAttribute("err", t)
                        }
                    }(u[0], t), 300),
                    i && i.setAttribute("err", 1))
                }
            }(n);
            document.body.appendChild(n.w);
            n.show = n.show == 0 ? 0 : 1;
            n.w.setAttribute("show", n.show);
            quiz.plugins["win" + n.id] = n
        },
        wbtn: function(n) {
            for (var t = 0; t < n.length; t++)
                quiz.addCB("btn" + n[t].id, n[t].cb),
                    n[t] = "<a href='javascript:void(0)' class='qp_hr" + (t == 0 && n.length <= 2 ? "a" : "b") + " qp_btna" + (n[t].cn ? " " + n[t].cn : "") + "'><input id='" + n[t].id + "' class='qp_btn' type='button' value='" + quiz.translate(n[t].v) + "' onclick=\"quiz.runCB('btn'+this.id)\"><\/a>";
            return n.join("")
        },
        werr: function(n, t, i) {
            quiz.plugins["win" + n].err(t, i)
        },
        addLang: function(n) {
            if (!quiz.tmsg) {
                quiz.tmsg = {
                    list: n
                };
                quiz.tmsg.c = n.length;
                return
            }
            quiz.tmsg.list = quiz.tmsg.list.concat(n);
            quiz.tmsg.c = quiz.tmsg.list.length
        },
        setLang: function(n, t, i) {
            var f, r, u;
            if (!document.body) {
                setTimeout(function(n, t, i) {
                    return function() {
                        quiz.setLang(n, t, i)
                    }
                }(n, t, i), 100);
                return
            }
            for (t && t.list && (quiz.addLang(t.list),
            t.id && (quiz.langID = t.id)),
                 i && (",ar,he,iw,fa,".indexOf((i + "_").split("_")[0]) != -1 && (document.body.className += " rtl"),
                 typeof qz != "object" && document.body.setAttribute("lang", i)),
                     f = document.querySelectorAll("SPAN[date]"),
                     r = 0; r < f.length; r++)
                u = new Date,
                    u.setTime((parseFloat(f[r].getAttribute("date")) - 25569) * 864e5),
                    f[r].innerHTML = u.toLocaleDateString ? u.toLocaleDateString(n) : u.toLocaleString()
        },
        fileDrop: function(n, t) {
            try {
                n.stopPropagation();
                n.preventDefault()
            } catch (n) {
                n.cancelValue = !0
            }
            switch (n.type) {
                case "dragover":
                    t.setAttribute("drag", 1);
                    break;
                case "dragleave":
                    t.setAttribute("drag", 0);
                    break;
                case "drop":
                    t.setAttribute("drag", 2);
                    var i = n.target.files || n.dataTransfer.files;
                    quiz.uploadFile(n, t.previousSibling, i)
            }
            return !1
        },
        uploadFile: function(n, t, i, r) {
            var d, s, k, h, v, y, o, b, tt, l, e, it, f, a, w, u, ft;
            if (i || (i = t.files),
                i) {
                if (d = t.parentNode,
                    s = t.u,
                s || (t.u = s = {
                    list: []
                }),
                    k = t.getAttribute("min"),
                    h = t.getAttribute("max"),
                    k = k ? parseInt(k) : -1,
                    h = h ? parseInt(h) : -1,
                    v = t.getAttribute("accept"),
                    y = parseFloat(t.getAttribute("size")) * 1024,
                (v || y) && !r) {
                    for (e = [],
                             b = "av",
                             f = 0; f < i.length; f++) {
                        var g = i[f]
                            , nt = (g.name + "").split(".").pop().toLowerCase()
                            , p = 0;
                        if (v) {
                            if (v.indexOf("/") != -1)
                                o = v.split("/"),
                                    tt = (g.type + "").split("/"),
                                o[0] == tt[0] && (o[1] == tt[1] || o[1] == "*") && (p = 1);
                            else
                                for (o = v.split(","),
                                         l = 0; l < o.length; l++)
                                    o[l] = o[l].replace(/^[\s\.]+|[\s]+$/gi, "").toLowerCase(),
                                    (o[l] == nt || o[l] == "*") && (p = 1);
                            p || (b = "av")
                        }
                        y && (p = g.size <= y ? 1 : 0,
                        p || (b = "sz"));
                        p && e.push(i[f])
                    }
                    if (!e.length) {
                        quiz.msg(b == "av" ? quiz.translate("You must select a file of the type") + ': "' + quiz.translate(t.getAttribute("ftype")) + '"' : quiz.translate("You must select a file less than") + " " + quiz.szN(y));
                        return
                    }
                    i.length != e.length && quiz.msg(quiz.translate("Some of the files you have selected are not") + " " + (b == "av" ? '"' + quiz.translate(t.getAttribute("ftype")) + '" ' + quiz.translate("files") : quiz.translate("less than") + " " + quiz.szN(y)));
                    i = e
                }
                if (!t.parentNode.getAttribute("Multiple") && i.length > 1 && (i = [i[0]]),
                !r && h != -1 && i.length + s.list.length > h) {
                    for (e = [],
                             f = 0; f < h - s.list.length; f++)
                        e.push(i[f]);
                    if ((!e.length || i.length != e.length) && (alert(quiz.translate("Please only upload a maximum of") + " " + h + " " + quiz.translate("files")),
                        !e.length))
                        return;
                    i = e
                }
                if (!r && !quiz.rid) {
                    if (quiz.setWait(1),
                        it = function(n, t, i) {
                            return function() {
                                quiz.uploadFile(n, t, i)
                            }
                        }(n, t, i),
                    quiz.save == 1) {
                        setTimeout(it, 5e3);
                        return
                    }
                    quiz.saveCB = it;
                    quiz.saveQ("SAVE");
                    return
                }
                for (quiz.setWait(0),
                         f = 0; f < i.length; f++) {
                    a = document.createElement("DIV");
                    a.className = "qp_fbox";
                    a.innerHTML = "<div class='qp_fbox_img'><\/div><div class='qp_fbox_n'><\/div><div class='qp_progress qp_progp'><div class='qp_progi' p='0' style='width:0%;'><\/div><\/div><div class='qp_fbox_x'><\/div>";
                    d.appendChild(a);
                    w = a.childNodes;
                    u = {
                        dom: a,
                        ft: 6e4,
                        st: (new Date).getTime(),
                        first: 1,
                        fn: i[f].name,
                        i: t,
                        p: d,
                        img: w[0],
                        n: w[1],
                        prog: w[2],
                        bar: w[2].childNodes[0],
                        x: w[3]
                    };
                    u.xhr = new XMLHttpRequest;
                    u.onProgress = function(n) {
                        return function() {
                            n.ct = (new Date).getTime();
                            n.tt = n.ct - n.st;
                            n.pct = Math.round(n.tt * 100 / n.ft);
                            n.pct >= 99 && (n.pct = 99,
                                clearInterval(n.tmr));
                            n.bar.setAttribute("p", n.pct);
                            n.prog.setAttribute("in", parseInt(getComputedStyle(n.bar, null).width) > 33 ? 1 : 0)
                        }
                    }(u);
                    u.onCancel = function(n) {
                        return function() {
                            try {
                                n.xhr.abort()
                            } catch (i) {}
                            var t = function() {
                                for (var i = n.i.u.list, r = [], u = 0, t = 0; t < i.length; t++)
                                    t != n.idx && (i[t].idx = u,
                                        u++,
                                        r.push(i[t]));
                                n.i.u.list = r;
                                n.p.removeChild(n.dom);
                                n.i.q = n.i.u.list.length;
                                n.p.setAttribute("q", n.i.q);
                                n.i.value = ""
                            };
                            n.delkey ? (quiz.setWait(1),
                                quiz.xSend("Quiz.Remove_File " + n.delkey, 0, function(n) {
                                    return function(t) {
                                        quiz.setWait(0);
                                        t = t.split(";");
                                        t[0] == "Y" ? (n(),
                                            quiz.saveQ("SAVE")) : quiz.msg(t[0] == "E" && t[1] ? t[1] : "Unable to delete file")
                                    }
                                }(t))) : t()
                        }
                    }(u);
                    u.n.setAttribute("fn", u.fn);
                    quiz.addE(u.x, "click", u.onCancel);
                    quiz.addE(u.img, ["mouseover", "mouseout"], function(n) {
                        document.body.setAttribute("tabvis", n.type == "mouseover" ? 1 : 0)
                    });
                    s.list.push(u);
                    u.idx = s.list.length - 1;
                    u.p.setAttribute("q", s.list.length);
                    var nt = (i[f].name + "").split(".").pop().toLowerCase()
                        , c = ""
                        , ut = new RegExp("[\\,\\w]*?" + nt + "[\\,\\w]*?[\\:]([\\w]+)","i")
                        , rt = ut.exec("xls,xlsx,xlsm,xlt,xltx,xlsb,xla,xlam,xps,ods,csv:excel;pdf:pdf;zip,rar:archive;txt:text;doc,docx,docm,dot,dotx,dotm,wps,odt:word;ppt,pptx,pptm,pot,potx,potm,pps,ppsx,ppsm,ppa,ppam,odp:powerpoint");
                    if (rt && rt[1] && (c = rt[1]),
                    c || (c = (i[f].type + "/").split("/")[0],
                    "image,audio,video,text".indexOf(c) == -1 && (c = "")),
                        u.fico = c,
                        u.img.className += " fa-file" + (c ? "-" + c : "") + "-o",
                        u.n.setAttribute("sz", quiz.szN(i[f].size)),
                        i[f].delkey)
                        u.delkey = i[f].delkey,
                            u.url = i[f].url,
                        u.fico == "image" && (u.img.style.backgroundImage = "URL(" + u.url + ")",
                            u.img.setAttribute("img", 1));
                    else {
                        if ((i[f].type + "/").split("/")[0] == "image")
                            try {
                                reader = new FileReader;
                                reader.onload = function(n) {
                                    return function(t) {
                                        n.img.setAttribute("img", 1);
                                        n.img.style.backgroundImage = "URL(" + t.target.result + ")"
                                    }
                                }(u);
                                reader.readAsDataURL(i[f])
                            } catch (n) {}
                        a.setAttribute("up", 1);
                        u.bar.setAttribute("a", 1);
                        ft = document.body.offsetWidth;
                        u.bar.style.width = "100%";
                        u.tmr = setInterval(u.onProgress, 250);
                        u.xhr.open("POST", "https://www.quiz-maker.com/qapi/Upload_File 1;" + encodeURIComponent(quiz.ref + ";" + quiz.rid + ";" + t.id.substr(4) + ";" + (i[f].type + "").replace(/[\;]/gi, "") + ";" + i[f].name), !0);
                        u.xhr.onload = function(n) {
                            return function() {
                                var t = (n.xhr.responseText + "").split(";");
                                t[0] == "Y" ? (n.url = "https:" + t[1],
                                    n.delkey = t[2],
                                    n.dom.removeAttribute("up"),
                                    n.i.q = n.i.u.list.length,
                                    n.p.setAttribute("q", n.i.q),
                                    quiz.saveQ("SAVE")) : (quiz.msg(t[0] == "E" && t[1] ? t[1] : "File upload failed, please try again"),
                                    n.onCancel())
                            }
                        }(u);
                        u.xhr.onerror = function(n) {
                            return function(t) {
                                t.type == "error" && (n.onCancel(),
                                    alert("Error: Unable to upload file\n\nMaximum file size is 100 MB"))
                            }
                        }(u);
                        u.xhr.upload.onprogress = function(n) {
                            return function(t) {
                                t.lengthComputable && (clearInterval(n.tmr),
                                    n.bar.removeAttribute("a"),
                                    n.pct = Math.round(t.loaded * 100 / t.total),
                                    n.bar.style.width = n.pct + "%",
                                    n.bar.setAttribute("p", n.pct),
                                    n.prog.setAttribute("in", parseInt(getComputedStyle(n.bar, null).width) > 33 ? 1 : 0))
                            }
                        }(u);
                        u.xhr.send(i[f])
                    }
                }
            }
        },
        szN: function(n) {
            for (var t = 0; n >= 1024; )
                n = n / 1024,
                    t++;
            return (t ? Math.round(n) + " " + " KMGTPEZ".charAt(t) : "1 K") + "B"
        },
        scrollTo: function(n) {
            var i;
            if (!quiz.scrolltabs) {
                if (i = n ? n : !1,
                    !n) {
                    var t = quiz.findPos(quiz.tbox)
                        , u = t.sp.clientHeight - (t.y + quiz.tbox.offsetHeight)
                        , r = t.sp.clientHeight - quiz.tbox.offsetHeight;
                    u < 0 ? i = t.y < 0 || r < 0 ? t.st + t.y - (r > 15 ? 15 : 5) : t.st - u - (t.y > 15 ? 15 : 5) : t.y < 0 && (i = t.st + t.y - (r > 15 ? 15 : 5))
                }
                i != !1 && (quiz.ref == "PREVIEW" && (typeof sys == "undefined" || typeof sys.wpreview == "undefined") && (i = 0),
                    quiz.easeScroll(i))
            }
        },
        scrollRoot: function() {
            return quiz.scrollParent || document.scrollingElement || document.documentElement
        },
        easeScroll: function(n, t, i) {
            typeof n != "object" && (n = {
                ev: n,
                cb: t,
                i: i
            });
            n.i || (n.i = quiz.scrollRoot());
            quiz.scrollT && clearInterval(quiz.scrollT.tmr);
            quiz.scrollT = {
                i: n.i,
                start: (new Date).getTime(),
                sv: n.i.scrollTop,
                cv: n.i.scrollTop,
                ev: 0,
                d: 300,
                cb: t
            };
            for (var r in n)
                quiz.scrollT[r] = n[r];
            quiz.scrollT.tmr = setInterval(quiz.easeScrollTo, 10)
        },
        easeScrollTo: function() {
            var n = quiz.scrollT
                , t = (new Date).getTime() - n.start;
            if (n.sv <= n.ev && n.cv >= n.ev || n.sv > n.ev && n.cv <= n.ev)
                return n.i.scrollTop = n.ev,
                    clearInterval(n.tmr),
                n.cb && n.cb(),
                    quiz.scrollT = !1,
                    !1;
            n.cv = (n.ev - n.sv) * (t /= n.d) * t * t + n.sv;
            n.i.scrollTop = n.cv
        },
        findPos: function(n) {
            var t = {
                x: 0,
                y: window.pageYOffset ? 0 - window.pageYOffset : 0,
                xa: 0,
                ya: 0,
                sp: document.body,
                st: window.pageYOffset ? window.pageYOffset : 0
            }, i;
            if (n.offsetParent)
                do
                    n.offsetParent && (t.x += n.offsetLeft - n.scrollLeft,
                        t.xa += n.offsetLeft,
                        t.y += n.offsetTop - n.scrollTop,
                        t.ya += n.offsetTop,
                        t.st += n.scrollTop),
                    (n.scrollHeight > n.offsetHeight || n.scrollWidth > n.offsetWidth) && (i = getComputedStyle(n, null).overflow,
                    i != "hidden" && i != "visible" && (t.sp = n));
                while (n = n.offsetParent);
            return t
        },
        sel: function(n, t, i) {
            var c, r, e, o, s, t, u, f, l, h;
            if (!quiz.noadv) {
                for (n === !1 ? (c = t,
                    t = t.parentNode.parentNode) : (n = n ? n : event,
                    c = n.target ? n.target : n.srcElement),
                         r = t.getElementsByTagName("INPUT")[0],
                     c.tagName != "INPUT" && (r.checked = r.type == "radio" ? !0 : !r.checked),
                     (i || i === 0) && (i = i ? !0 : !1,
                     r.checked != i && (r.checked = i)),
                         e = t.parentNode.parentNode.parentNode,
                     e.tagName == "TBODY" && (e = e.parentNode),
                     e.tagName == "TABLE" && (e = e.parentNode),
                         o = e.getElementsByTagName("INPUT"),
                         s = -1,
                         u = 0; u < o.length; u++)
                    f = o[u].parentNode.parentNode,
                        t = o[u].checked ? 1 : 0,
                        f.setAttribute("sel", t),
                    t && (s = u),
                    o[u].value == "999" && e.setAttribute("other", o[u].checked ? 1 : 0);
                for (u = 0; u < o.length; u++)
                    o[u].parentNode.parentNode.setAttribute("cm", u <= s ? 1 : 0);
                if (quiz.checkLogic(quiz.saveQ("LOGIC"), 1),
                (r.type == "checkbox" || r.type == "radio") && quiz.checkMand(r, s > -1),
                quiz.autoadv || quiz.scrolltabs) {
                    for (f = r; f && (f.className + "").indexOf("take-q") == -1; )
                        f = f.parentNode;
                    if ((quiz.autoadv || quiz.scrolltabs) && (r.type == "radio" || r.type == "checkbox" && f.getAttribute("fmt") == "2" && (quiz.scrolltabs || f.getAttribute("skip") != "1")) && n) {
                        if (r.value == "999" || r.getAttribute("pid")) {
                            quiz.cntr.setAttribute("btns", 1);
                            return
                        }
                        l = "+1";
                        h = document.body.getAttribute("last");
                        (document.body.getAttribute("tend-" + quiz.tabs.tid) == "1" || h == "1") && (h && h != "1" || (l = "E"));
                        f.nextSibling && (f.nextSibling.className + "").indexOf("take-q") != -1 || quiz.saveQ(l)
                    }
                }
            }
        },
        checkAdv: function(n) {
            var i, t;
            if (!quiz.autoadv && !quiz.scrolltabs || n && n.noadv)
                return 0;
            for (i = "+1",
                 quiz.obj("quiz-end").offsetHeight && (i = "E"),
                     t = n; t && (t.className + "").indexOf("take-q") == -1; )
                t = t.parentNode;
            if (!t.nextSibling || (t.nextSibling.className + "").indexOf("take-q") == -1)
                return i
        },
        hov: function(n, t) {
            var i = t.parentNode.parentNode.parentNode, u = i.getElementsByTagName("INPUT"), f = i.idx, r;
            if (i.idx = parseInt(t.getAttribute("v") - 1),
            n.type == "mouseover" || i.idx == f)
                for (r = 0; r < u.length; r++)
                    u[r].parentNode.parentNode.setAttribute("cmhov", r <= i.idx ? 1 : 0)
        },
        setRank: function(n, t) {
            if (t == 999) {
                var i = quiz.obj((n.name + "").replace(/qp_v/gi, "qp_main"));
                i.setAttribute("other", n.value ? 1 : 0)
            }
        },
        newOrder: function() {
            var t = quiz.tabs.t.length, i, r, n, u;
            for (quiz.rand > t + 1 && (quiz.rand = t + 1),
                     quiz.order = [],
                     n = quiz.rand - 1; n < t; n++)
                quiz.order.push(n + 1);
            if (quiz.fy(quiz.order),
            quiz.rand > 1)
                for (n = quiz.rand - 2; n >= 0; n--)
                    quiz.order.unshift(n + 1);
            for (i = [],
                     r = 0,
                     n = 0; n < quiz.order.length; n++)
                r += quiz.tabs.qk[quiz.order[n] - 1],
                    i.push(r),
                quiz.scrolltabs && quiz.tabs.t[0].parentNode.appendChild(quiz.tabs.t[quiz.order[n] - 1]),
                    u = quiz.tabs.t[quiz.order[n] - 1],
                    u.ord = n + 1;
            quiz.tabs.qt = i;
            quiz.randTab(1)
        },
        getOrdP: function(n) {
            if (n || n == 0 || (n = quiz.tidx),
                quiz.order)
                for (var t = 0; t < quiz.order.length; t++)
                    quiz.order[t] == n && (n = t + 1,
                        t = quiz.order.length);
            return n = n ? n : 1,
            (quiz.ucodes || quiz.startp || quiz.sref) && n--,
                n
        },
        getOrdT: function(n) {
            return quiz.order && (n = quiz.order[n - 1]),
                n ? n : 1
        },
        fy: function(n, t, i, r) {
            for (i = n.length; i; )
                t = Math.random() * i-- | 0,
                    r = n[i],
                    n[i] = n[t],
                    n[t] = r
        },
        dx: function(n) {
            for (var t = (quiz.dxo[parseInt(n)] + "").replace(/[A-Z]/g, function(n) {
                return n = n.charCodeAt(0) - 66,
                    n == -1 ? "-" : n == 10 ? "," : n + "" + n
            }).split(","), c = [1181050948, 896747570, 24900], n = t.length, u = t[n - 1], f = t[0], s, h, l = Math.floor(6 + 52 / n), e = l * 2654435769, r, o, i; e != 0; ) {
                for (h = e >>> 2 & 3,
                         r = n - 1; r >= 0; r--)
                    u = t[r > 0 ? r - 1 : n - 1],
                        s = (u >>> 5 ^ f << 2) + (f >>> 3 ^ u << 4) ^ (e ^ f) + (c[r & 3 ^ h] ^ u),
                        f = t[r] -= s;
                e -= 2654435769
            }
            for (o = new Array(t.length),
                     i = 0; i < t.length; i++)
                o[i] = String.fromCharCode(t[i] & 255, t[i] >>> 8 & 255, t[i] >>> 16 & 255, t[i] >>> 24 & 255);
            return o.join("")
        },
        dxi: function(n) {
            var u = quiz.obj("qp_shareimg"), f, r, i, t;
            if (u)
                for (f = "id",
                     quiz.dxo || (r = u.outerHTML.split('"')[3],
                         quiz.dxo = r.substr(43, r.length - 44).split("/")),
                         i = document.querySelectorAll(n + " *[e" + f + "x]"),
                         t = 0; t < i.length; t++)
                    i[t].innerHTML = decodeURIComponent(quiz.dx(i[t].getAttribute("eidx")))
        },
        sessionKntr: function(n) {
            var i = 1, t;
            try {
                if (t = parseInt(sessionStorage.getItem("session-kntr")),
                    t)
                    if (n)
                        i = t + 1;
                    else
                        return t;
                sessionStorage.setItem("session-kntr", i)
            } catch (r) {}
            return i
        },
        startTime: function(n) {
            var t = quiz.getTT(), i;
            quiz.timeIDX = n;
            try {
                i = parseFloat(sessionStorage.getItem(quiz.sesK + "-" + quiz.ref + "-" + n));
                i ? t = i : sessionStorage.setItem(quiz.sesK + "-" + quiz.ref + "-" + n, t)
            } catch (r) {}
            return t
        },
        checkTime: function(n, t, i) {
            var r = document.querySelectorAll(".qp_progress_time")[0], u, c, s;
            if (!n || quiz.fin == 1) {
                clearInterval(quiz.qTMR);
                quiz.qTMR = 0;
                delete quiz.timeIDX;
                r && r.removeAttribute("t");
                quiz.evt("Timer", {
                    p: r,
                    s: 9
                });
                return
            }
            u = Math.round(n - (quiz.getTT() - t) / 1e3) + 1;
            u > n && (u = n);
            var f = u % 60
                , e = (u - f) / 60 % 60
                , o = parseInt((u - e * 60 - f) / 3600)
                , h = quiz.getTT() >= t + n * 1e3 ? 3 : f < 11 && e == 0 && o == 0 ? 2 : i ? 0 : 1;
            r && (r.setAttribute("t", (o == 0 ? "" : (o < 10 ? "0" : "") + o + ":") + (e < 10 ? "0" : "") + e + ":" + (f < 10 ? "0" : "") + f),
                r.setAttribute("out", h > 1 ? 1 : 0));
            quiz.evt("Timer", {
                p: r,
                s: h,
                qtt: n,
                tt: u,
                st: t
            });
            h == 3 && (clearInterval(quiz.qTMR),
                quiz.qTMR = 0,
                quiz.qtimer ? (quiz.between({
                    s: 0,
                    hide: 1
                }),
                    quiz.clearNCA(),
                    clearTimeout(quiz.nextTMR),
                    quiz.nextTMR = 0,
                    delete quiz.nextFN,
                    quiz.saveQ("E", 1, 0, 1),
                    sessionStorage.removeItem(quiz.sesK + "-" + quiz.ref + "-0")) : (c = "+1",
                    s = document.body.getAttribute("last"),
                (document.body.getAttribute("tend-" + quiz.tabs.tid) == "1" || s == "1") && (s && s != "1" || (c = "E")),
                    quiz.blockTab[quiz.timeIDX] = 1,
                    delete quiz.timeIDX),
                r.setAttribute("t", "00:00"),
                quiz.saveQ(c, 1, 0, 1))
        },
        setMaxT: function(n) {
            var r = quiz.tabs.h, t, i;
            if (r)
                for (t = 0; t < n; t++)
                    i = r[t],
                    i && i.setAttribute("c", 1)
        },
        setTab: function(n, t, i) {
            var y, k, u, a, d, g, v, c, o, s, h, r, nt, p, w, e, f, tt, b, l;
            if (quiz.tabs && t + "" != "undefined") {
                if (document.body.setAttribute("startp", t ? 1 : 0),
                    y = quiz.obj("preview-qn"),
                y && (k = parseInt(y.getAttribute("offset")),
                    y.value = parseInt(n) + (k ? k : 0)),
                    n = parseInt(n),
                    quiz.tidx = n,
                    u = quiz.tabs.t[n - 1],
                quiz.autoadv && quiz.cntr.setAttribute("btns", quiz.tabs.t[n - 1].lastSingle ? 0 : 1),
                u && u.tagName) {
                    for (quiz.setMaxT(n),
                             quiz.dxi("DIV[tid='" + u.getAttribute("tid") + "']"),
                             a = parseFloat(u.getAttribute("time")),
                         i && !a || quiz.qtimer || (a ? (f = quiz.startTime(n),
                             quiz.checkTime(a, f, 1),
                             clearInterval(quiz.qTMR),
                             quiz.qTMR = setInterval(function(n, t) {
                                 return function() {
                                     quiz.checkTime(n, t)
                                 }
                             }(a, f), 333)) : quiz.checkTime(0)),
                         !i && quiz.qtimer && quiz.timerpg > 1 && quiz.initTimer(),
                         quiz.prog && quiz.tabs.qt && (d = quiz.getOrdP(n),
                             quiz.setProg(quiz.prog.pt == "p" ? d == 1 ? 0 : quiz.tabs.qt[d - 2] : 0)),
                             u.setAttribute("upto", 1),
                             g = quiz.obj("DIV[tid='" + u.getAttribute("tid") + "'] .take-q", 3),
                             v = 0; v < g.length; v++)
                        if (c = g[v],
                        (c.className + "").indexOf("take-q") != -1) {
                            if (o = c.getElementsByTagName("INPUT"),
                            c.getAttribute("rand") == "1") {
                                for (s = [],
                                         r = 0; r < o.length; r++)
                                    (o[r].type == "checkbox" || o[r].type == "radio") && o[r].value != "999" && s.push(o[r]);
                                for (u.style.visibility = "hidden",
                                         h = document.createElement("DIV"),
                                         r = 0; r < s.length; r++)
                                    nt = Math.floor(Math.random() * s.length),
                                    nt != r && s[r].value != "999" && (p = s[r].parentNode.parentNode,
                                        w = s[nt].parentNode.parentNode,
                                        p.parentNode.insertBefore(h, p),
                                        w.parentNode.insertBefore(p, w),
                                        h.parentNode.insertBefore(w, h));
                                h.parentNode && h.parentNode.removeChild(h);
                                u.style.visibility = ""
                            }
                            i || v != 0 || !o[0] || quiz.noFocus || o[0].focus();
                            quiz.runCB("q" + c.getAttribute("qid") + "v", c);
                            quiz.scrolltabs && !quiz.fromScroll && (e = quiz.scrollTabs(u),
                                e.idx == 0 ? f = 0 : (f = e.y[e.idx] - e.ym,
                                f > e.p[e.idx].ya && (f = e.p[e.idx].ya)),
                                i || quiz.noSL ? e.r.scrollTop = f : (quiz.fromTab = 1,
                                    quiz.easeScroll(f, function() {
                                        setTimeout(function() {
                                            quiz.fromTab = 0
                                        }, 100)
                                    })))
                        }
                    tt = u.getAttribute("tid");
                    try {
                        gg.ref = quiz.ref;
                        switch (tt) {
                            case "geo":
                                gg.getMap();
                                break;
                            case "time":
                                gg.getTimeLine()
                        }
                    } catch (it) {}
                    b = u.getAttribute("mark");
                    l = quiz.obj("quiz-score");
                    b && (quiz.tabSaved = !0);
                    l && (b ? (l.setAttribute("mark", b),
                        l.setAttribute("score", u.getAttribute("score"))) : (l.removeAttribute("mark"),
                        l.removeAttribute("score")))
                }
                setTimeout(function() {
                    document.getElementsByTagName("body")[0].focus()
                }, 601)
            }
        },
        onScroll: function() {
            if (!quiz.fromTab && quiz.scrolltabs) {
                if (clearTimeout(quiz.scrollTmr),
                    quiz.scrollTmr = setTimeout(function() {
                        quiz.scrollCalc = 0;
                        quiz.fromScroll = 0
                    }, 100),
                    quiz.scrollCalc)
                    n = quiz.scrollCalc,
                        n.reCalc();
                else
                    var n = quiz.scrollCalc = quiz.scrollTabs();
                if (quiz.timeIDX) {
                    clearTimeout(quiz.scrollTTmr);
                    quiz.scrollTTmr = setTimeout(function() {
                        var n = quiz.scrollTabs(), t = quiz.timeIDX, i;
                        (t || t === 0) && n.r.scrollTop > n.p[t - 1].ya + n.t[t - 1].offsetHeight + 100 && (n.idx == 0 ? i = 0 : (i = n.y[t - 1] - n.ym,
                        i > n.p[t - 1].ya && (i = n.p[t].ya)),
                            quiz.easeScroll(i))
                    }, 300);
                    return
                }
                n.idx != n.sidx && (quiz.fromScroll = 1,
                    quiz.goTab(quiz.getOrdT(n.sidx + 1), 1),
                    quiz.scrollCalc.idx = parseInt(quiz.tabs.idx) - 1);
                n.r.scrollHeight - n.st - n.r.clientHeight < 30 ? quiz.scrollEnd || (quiz.cntr.setAttribute("scrollend", 1),
                    quiz.scrollEnd = 1) : quiz.scrollEnd && (quiz.scrollEnd = 0,
                    quiz.cntr.removeAttribute("scrollend"))
            }
        },
        scrollTabs: function(n) {
            var t = {
                idx: parseInt(quiz.tabs.idx) - 1,
                sidx: 0,
                t: quiz.obj("DIV[tid]", 3),
                p: [],
                y: [],
                r: quiz.scrollRoot()
            }, i, r;
            for (t.st = y = t.r.scrollTop,
                     t.ym = Math.round((t.r.clientHeight - 60) / 2),
                     t.setS = function(n) {
                         t.st < 50 ? n == 0 && (t.sidx = n) : t.y[n] && t.st >= t.p[n].ya - t.ym && (t.sidx = n)
                     }
                     ,
                     t.setDr = function() {
                         t.st != quiz.lastST && (quiz.scrollDr = t.st - quiz.lastST < 0 ? "b" : "f");
                         quiz.lastST = t.st
                     }
                     ,
                     t.reCalc = function() {
                         t.st = y = t.r.scrollTop;
                         t.setDr();
                         for (var n = 0; n < t.t.length; n++)
                             t.setS(n)
                     }
                     ,
                     t.setDr(),
                     i = 0; i < t.t.length; i++)
                t.t[i] == n && (t.idx = i),
                    r = t.t[i].childNodes[0],
                    t.p[i] = quiz.findPos(r),
                    t.y[i] = t.p[i].ya + Math.round(r.offsetHeight / 2),
                    t.setS(i);
            return t
        },
        scrollToTab: function(n, t, i) {
            quiz.scrolltabs && (t || quiz.scrollEnd || n != quiz.tabs.idx) && (quiz.scrollDr = "f",
                quiz.scrollEnd = 0,
                quiz.cntr.removeAttribute("scrollend"),
                quiz.goTab(n, i))
        },
        initScrollTabs: function() {
            quiz.cntr && (quiz.cntr.className = (quiz.cntr.className + "").replace(/[\s]*qp[\_]scrolltabs/gi, "") + (quiz.scrolltabs ? " qp_scrolltabs" : ""));
            quiz.nexttime = quiz.scrolltabs ? 1500 : 2e3
        },
        clearNC: function() {
            setTimeout(function() {
                quiz.noclick = 0
            }, 250)
        },
        clearNCA: function() {
            quiz.tbox.style.pointerEvents = "";
            quiz.noadv = 0;
            quiz.noclick = 0
        },
        joinLive: function() {
            quiz.setWait(1);
            quiz.saveCB = function() {
                quiz.setWait(0)
            }
            ;
            quiz.saveQ("+1", 1, 1)
        },
        liveWaitNext: function(n, t) {
            var u, f, o, i, r, e;
            if (quiz.obj("lw-msg") || (u = quiz.obj("quiz-tabs").parentNode,
                u = document.body,
                f = u.insertBefore(document.createElement("DIV"), u.childNodes[0]),
                f.id = "lw-msg",
                f.innerHTML = "Waiting for Presenter",
                o = f.offsetWidth),
                clearTimeout(quiz.liveWaitTMR),
                quiz.liveWaitTMR = setTimeout(quiz.liveWait, 1e3),
                document.body.setAttribute("livewait", 1),
                document.body.setAttribute("livech", n == "Q" ? 1 : 0),
                quiz.obj("quiz-next").getElementsByTagName("INPUT")[0].value = n == "Q" ? "Change" : "Waiting...",
            t || n != "Q" && quiz.sblock && quiz.liveWaitQ != 0) {
                if (i = quiz.lwAllowMove("0"),
                    tmax = quiz.tbox.tabs.t.length,
                i.m < tmax && (tmax = i.m),
                    quiz.autoscore)
                    for (r = 1; r < tmax; r++)
                        e = quiz.tbox.tabs.t[r].max,
                        t && r == i.m - 1 && n == "Q" && (e = 0),
                        e || e === 0 || (quiz.saveQ("SCORE", r),
                            quiz.loadResponse(quiz.cScore));
                i.m == i.p ? (quiz.noadv = 1,
                    quiz.noclick = 1,
                    quiz.tbox.style.pointerEvents = "none") : quiz.clearNCA()
            } else
                quiz.clearNCA()
        },
        clearWaitNext: function() {
            clearTimeout(quiz.liveWaitTMR);
            document.body.setAttribute("livewait", 0);
            quiz.obj("quiz-next").getElementsByTagName("INPUT")[0].value = "Next";
            quiz.clearNCA()
        },
        liveWait: function() {
            clearTimeout(quiz.liveWaitTMR);
            quiz.xSend({
                s: "Quiz.Live_Wait " + quiz.sref,
                d: 0,
                noLog: 1,
                cb: function(n) {
                    var i = n.substr(0, 1), t;
                    i == "Q" || i == "A" ? (t = n.substr(1),
                        t = t == "E" ? t : parseInt(t),
                        quiz.liveWaitCB(t, i)) : quiz.liveWaitNext(i)
                }
            })
        },
        liveWaitCB: function(n, t, i) {
            if (n == quiz.liveWaitQ && !i) {
                quiz.liveWaitNext(t);
                return
            }
            if ((n == 9999 || n == "E") && quiz.end != 1) {
                if (i) {
                    quiz.sblock = 0;
                    quiz.clearWaitNext();
                    quiz.goNext("+1");
                    return
                }
                n = 0
            }
            quiz.liveWaitQ = n;
            switch (n) {
                case 0:
                    quiz.obj("DIV[tid='0'] .qp_a > DIV:first-child", 1).innerHTML = "Please wait for the presenter to start the quiz...";
                    quiz.obj("quiz-start").style.cssText = "opacity:0.5; pointer-events:none;";
                    quiz.obj("quiz-start").getElementsByTagName("INPUT")[0].value = "Waiting...";
                    quiz.liveWaitNext(t);
                    break;
                case 9999:
                case "E":
                    quiz.clearWaitNext();
                    quiz.endSV == 1 ? quiz.endSV = 2 : (quiz.endSV = 2,
                        quiz.setWait(1),
                        quiz.goEnd());
                    break;
                default:
                    var r = quiz.lwAllowMove("+1")
                        , f = quiz.obj("DIV[qid='" + n + "']", 1).parentNode
                        , u = 0;
                    i ? r.y && (u = 1) : r.m == r.p && (u = 1);
                    u ? (quiz.goNext("+1"),
                        quiz.clearWaitNext()) : quiz.liveWaitNext(t)
            }
        },
        lwAllowMove: function(n) {
            var u = n == "E" ? quiz.tbox.tabs.t.length : (typeof n == "string" ? quiz.tbox.tabs.idx : 0) + parseInt(n), r = 1, i, t;
            if (quiz.liveWaitQ)
                if (quiz.liveWaitQ == "E" || quiz.liveWaitQ == 9999)
                    r = quiz.tbox.tabs.t.length + 1;
                else {
                    for (i = quiz.liveWaitQ + "",
                         i.indexOf(".") != -1 && (i = i.split(".")[0]),
                             t = quiz.obj("DIV[qid='" + i + "'], TBODY[qid='" + i + "']", 1); t.parentNode && !t.parentNode.idx && t.parentNode.idx !== 0; )
                        t = t.parentNode;
                    t && t.parentNode && (r = t.parentNode.idx)
                }
            return {
                y: u <= r,
                m: u,
                p: r
            }
        },
        getTags: function(n, t) {
            var f = [], i, u, r;
            for (t = t.split(","),
                     i = 0; i < t.length; i++)
                for (u = n.getElementsByTagName(t[i]),
                         r = 0; r < u.length; r++)
                    f.push(u[r]);
            return f
        },
        getAtt: function(n, t, i) {
            var e = {}, u, f, r;
            if (t = t.split(","),
                !n.getAttribute)
                return e;
            for (u = 0; u < t.length; u++)
                f = (t[u] + ":n").split(":"),
                    r = n.getAttribute((i ? i : "") + f[0]),
                f[1] == "n" && (r = r ? parseInt(r) : 0),
                    e[f[0]] = r;
            return e
        },
        clearErr: function() {
            for (var t = quiz.obj(".take-q[err]", 3), n = 0; n < t.length; n++)
                t[n].removeAttribute("err")
        },
        setErr: function(n, t) {
            var i = quiz.obj(".take-q[qid='" + n + "']", 2), r;
            i && (quiz.scrolltabs ? quiz.scrollToTab(i.parentNode.idx) : (r = quiz.tbox.style,
                r.overflow = "visible",
                i.scrollIntoView({
                    behavior: "smooth"
                }),
                r.overflow = ""),
                i.setAttribute("err", 1),
            quiz.msgL[0] && quiz.obj(".take-q[qid='" + n + "'] > SPAN:last-of-type", 2).setAttribute("emsg", quiz.msgL[0]),
            t && t.focus && t.focus())
        },
        saveQ: function(n, t, i, r) {
            var dt, nt, at, vt, yt, d, f, gt, fi, wi, ot, pt, u, ni, ei, st, oi, bi, ft, s, l, si, g, ti, ki, wt, et, di, ii, ri, tr, ir, gi, hi, o, a, it, bt, ht, ci, ct, kt, y, b, h, nr, e, rr, ut, p, li, w, v, ai, ur, c;
            if (!i && quiz.nextTMR && (clearTimeout(quiz.nextTMR),
                quiz.nextTMR = 0,
            quiz.nextFN && !quiz.nextFN()))
                return delete quiz.nextFN,
                    !1;
            if ((i || n == "SCORE" || n == "LOGIC" || n == "SAVE" || !(quiz.noadv || quiz.noclick)) && (n != "LOGIC" || quiz.fin != 1)) {
                n != "SCORE" && n != "LOGIC" && n != "SAVE" && (quiz.noclick = 1,
                    dt = 1);
                var lt, vi = quiz.tabs, yi = parseInt(vi.idx), ui = 0, pi = 0;
                if (n == "SCORE" || n == "LOGIC" || n == "SAVE" ? (lt = vi.t[!t && t !== 0 ? yi - 1 : t],
                    t = 1,
                    ui = 1) : (lt = vi.t[yi - 1],
                    quiz.cidx = yi,
                    quiz.cq = parseInt(lt.getAttribute("tid")),
                quiz.cq > quiz.maxQ && (quiz.maxQ = quiz.cq),
                    ui = (!quiz.fin || quiz.fin == 2) && (n == "+1" || n == "E")),
                quiz.tabSaved && (quiz.tabSaved = !1,
                n == "+1" || n == "E" && quiz.endSV))
                    if (n == "E") {
                        if (quiz.end == 1) {
                            quiz.goEnd(quiz.rid ? 1 : 0);
                            quiz.clearNC();
                            return
                        }
                    } else {
                        quiz.goNext(n);
                        quiz.clearNC();
                        return
                    }
                if (quiz.clearErr(),
                n == "E" && ui && !quiz.checkAllErr()) {
                    quiz.clearNCA();
                    return
                }
                if (ui) {
                    if (quiz.queue == 2) {
                        quiz.clearNCA();
                        quiz.msg("This quiz has run out of free responses");
                        return
                    }
                    nt = "tt" + quiz.getTT();
                    at = "";
                    n != "LOGIC" && (quiz.cScore = {
                        c: "",
                        f: 2,
                        r: [],
                        hasS: 0
                    });
                    var rt = String.fromCharCode(209)
                        , k = String.fromCharCode(166)
                        , tt = {
                        y: 0,
                        n: 0
                    };
                    if (!i) {
                        for (vt = [],
                                 w = 0; w < lt.childNodes.length; w++)
                            vt.push(lt.childNodes[w]);
                        for (yt = quiz.obj("DIV[tid='" + lt.getAttribute("tid") + "'] TBODY.take-q", 1),
                             yt && (yt.push || (yt = [yt]),
                                 vt = vt.concat(yt)),
                                 w = 0; w < vt.length; w++)
                            if (a = vt[w],
                                d = quiz.getAtt(a, "qid,qt,mark,min,max,skip,pqt,emsg:t"),
                            d.qt == 98 && (quiz.ucodes = 1),
                            a && a.className && a.className.indexOf("take-q") != -1 && d.qt != 99 && (!d.mark || d.mark == 3)) {
                                for (f = {},
                                         o = d.qt == 6 ? [a.childNodes[0]] : quiz.getTags(a, "INPUT,SELECT,TEXTAREA"),
                                         e = 0; e < o.length; e++) {
                                    if (gt = o[e].getAttribute("pid"),
                                        u = gt ? d.qid + "." + gt : d.qid,
                                        !f[u]) {
                                        f[u] = {
                                            v: "",
                                            otv: "",
                                            optk: 0,
                                            isA: 0
                                        };
                                        for (h in d)
                                            f[u][h] = d[h]
                                    }
                                    if (f[u].itp = o[e].tagName == "INPUT" ? o[e].type : o[e].tagName,
                                        gt) {
                                        fi = quiz.getAtt(a, "qid,qt,mark,min,max,skip", gt + "-");
                                        for (h in fi)
                                            fi[h] && (f[u][h] = fi[h]);
                                        a.parentNode.parentNode.getAttribute("skip") + "" == "1" && (f[u].skip = 1)
                                    }
                                    switch (f[u].itp) {
                                        case "checkbox":
                                            o[e].checked && (f[u].optk++,
                                                f[u].v += (f[u].v ? "," : "") + o[e].value);
                                            break;
                                        case "radio":
                                            o[e].checked && (f[u].optk++,
                                                f[u].v = o[e].value);
                                            break;
                                        case "range":
                                            f[u].otv = o[e].value;
                                            f[u].v = f[u].otv ? "999" : "";
                                            break;
                                        case "text":
                                        case "email":
                                        case "url":
                                        case "password":
                                        case "hidden":
                                        case "tel":
                                            /qp_nosave/.test(o[e].className + "") || (/qp_otv/.test(o[e].className + "") && (f[u].otv = o[e].value),
                                            /qp_txti|qp_tv/.test(o[e].className + "") && (f[u].otv = o[e].value,
                                            o[e].reply && (f[u].pass = 1),
                                                f[u].v = f[u].otv ? "999" : ""));
                                            break;
                                        case "number":
                                            /qp_timen|qp_nosave/.test(o[e].className + "") || (/qp_txti|qp_tv/.test(o[e].className + "") ? (f[u].otv = o[e].value,
                                                f[u].v = f[u].otv ? "999" : "") : o[e].value && (f[u].optk++,
                                                f[u].v += (f[u].v ? "," : "") + o[e].getAttribute("oidx") + "=" + o[e].value));
                                            break;
                                        case "file":
                                            if (o[e].u)
                                                for (h = 0; h < o[e].u.list.length; h++)
                                                    if (wi = o[e].u.list[h],
                                                        wi.url)
                                                        f[u].optk++,
                                                            f[u].otv += (f[u].otv ? ", " : "") + wi.url;
                                                    else if (n != "SAVE" && n != "LOGIC") {
                                                        quiz.msg("Please wait for all files to finish uploading before continuing");
                                                        quiz.clearNC();
                                                        return
                                                    }
                                            f[u].v = f[u].otv ? "999" : "";
                                            break;
                                        case "SELECT":
                                            f[u].v = o[e].value;
                                            break;
                                        case "TEXTAREA":
                                            /qp_txti/.test(o[e].className + "") && !/qp_nosave/.test(o[e].className + "") && (f[u].otv = o[e].value,
                                                f[u].v = f[u].otv ? "999" : "")
                                    }
                                }
                                ot = "";
                                pt = f[u] ? quiz.getQTxt(f[u].qid) : "";
                                for (u in f) {
                                    if (f[u].qtxt = (u.indexOf(".") != -1 ? ": " + quiz.obj(".qp_qi[pid='" + u.split(".")[1] + "']").innerHTML + "" : "").replace(/[\<][^\<\>]+[\>]/gi, ""),
                                    f[u].qtxt == ": undefined" && (f[u].qtxt = ""),
                                    f[u].qt == 1 || f[u].qt == 8) {
                                        if (f[u].min && f[u].optk < f[u].min && (ot = " a minimum of " + f[u].min),
                                        f[u].max && f[u].optk > f[u].max && (ot += (ot ? " and" : "") + " a maximum of " + f[u].max),
                                        ot && !t) {
                                            quiz.msg("You must select" + ot + " " + (f[u].qt == 8 ? "files" : "answers") + " for the question:\n\n'" + pt + f[u].qtxt + "'");
                                            quiz.setErr(f[u].qid, o[0]);
                                            quiz.clearNC();
                                            return
                                        }
                                        ot && (f[u].isA = "n")
                                    }
                                    if (ni = quiz.callbacks["q" + f[u].qid],
                                    ni && ni.length)
                                        for (ei = 0; ei < ni.length; ei++)
                                            if (!ni[ei](f[u]))
                                                return;
                                    if (f[u].qt == 3 && f[u].v) {
                                        for (ut = f[u].v.split(","),
                                                 ut.sort(function(n, t) {
                                                     var i = parseFloat(n.split("=")[1])
                                                         , r = parseFloat(t.split("=")[1]);
                                                     return i == r ? 0 : i < r ? -1 : 1
                                                 }),
                                                 c = [],
                                                 e = 0; e < ut.length; e++)
                                            c.push(ut[e].split("=")[0]);
                                        f[u].v = c.join(",")
                                    }
                                    if (f[u].qt != 14 && f[u].otv && f[u].v.indexOf("999") == -1 && (f[u].otv = ""),
                                        f[u].qt == 6 || f[u].pass ? at += (at ? rt : "") + u + k + k : nt += (nt ? rt : "") + u + k + f[u].v + k + (f[u].otv + "").replace(new RegExp(rt,"g"), "@CHAR-N@").replace(new RegExp(k,"g"), "@CHAR-P@"),
                                    f[u].isA || /^[26]$/.test(f[u].qt + "") || (f[u].isA = f[u].v ? "y" : "n"),
                                    f[u].emsg && !t) {
                                        quiz.setErr(f[u].qid, o[0]);
                                        quiz.msg(f[u].emsg.replace(/[\@]Q/gi, pt + f[u].qtxt));
                                        quiz.clearNC();
                                        return
                                    }
                                    if (f[u].v || f[u].pass || f[u].qt == 6 || f[u].skip == 1 || t) {
                                        if ((f[u].otv || f[u].pass) && f[u].qt == 2)
                                            for (o = quiz.getTags(a, "INPUT,TEXTAREA"),
                                                     st = "",
                                                     h = 0; h < o.length; h++)
                                                if (!/[\.]/.test(u + "") || o[h].getAttribute("pid") == u.split(".")[1]) {
                                                    switch (parseInt(o[h].getAttribute("fmt") + "")) {
                                                        case 1:
                                                            ft = /^[A-Z0-9._%+-\\']+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                                                            ft.test(f[u].otv) || (st = "email address");
                                                            break;
                                                        case 2:
                                                            parseFloat(f[u].otv) || parseFloat(f[u].otv) === 0 || (st = "number");
                                                            break;
                                                        case 3:
                                                            ft = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
                                                            ft.test(f[u].otv) || (st = "website address");
                                                            break;
                                                        case 13:
                                                            if (n != "SCORE" && n != "LOGIC" && o[h].reply != "Y" + quiz.dx(parseInt(o[h].getAttribute("fmtre"))).replace(/[^A-Z0-9]/g, "")) {
                                                                quiz.setWait(1);
                                                                quiz.setVN();
                                                                oi = 1;
                                                                bi = parseInt(sessionStorage.getItem("tk"));
                                                                bi && (oi = bi);
                                                                quiz.xSend({
                                                                    s: "Quiz.qpass",
                                                                    d: "q=" + quiz.ref + ";" + f[u].qid + ";" + oi + "&p=" + f[u].otv + "&vn=" + quiz.vn,
                                                                    tk: oi,
                                                                    dr: n,
                                                                    i: o[h],
                                                                    emsg: "You must answer the question:\n\n'" + pt + f[u].qtxt + "'\n\nwith a valid password",
                                                                    cb: function(n, t) {
                                                                        quiz.clearNC();
                                                                        quiz.setWait(0);
                                                                        t.i.value = "";
                                                                        n.substr(0, 1) != "Y" ? (sessionStorage.setItem("tk", t.tk + 1),
                                                                            quiz.msg(n == "X" ? "To many password tries" : t.emsg)) : (t.i.reply = n,
                                                                            t.i.parentNode.className += " qp_block",
                                                                            sessionStorage.setItem("tk", 0),
                                                                            quiz.noclick = 0,
                                                                            quiz.saveQ(t.dr))
                                                                    }
                                                                });
                                                                return
                                                            }
                                                            break;
                                                        case 99:
                                                            ft = new RegExp("^" + o[h].getAttribute("fmtre") + "$","g");
                                                            ft.test(f[u].otv) || (st = "answer")
                                                    }
                                                    if (st && (f[u].isA = "n",
                                                        !t)) {
                                                        quiz.msg("You must answer the question:\n\n'" + pt + f[u].qtxt + "'\n\nwith a valid " + st);
                                                        quiz.setErr(f[u].qid, o[h]);
                                                        quiz.clearNC();
                                                        return
                                                    }
                                                }
                                        f[u].isA || f[u].qt != 2 || (f[u].isA = f[u].otv ? "y" : "n")
                                    } else {
                                        f[u].qt == 98 ? quiz.msg("You must enter a pass code") : (quiz.msg("You must answer the question:\n\n'" + pt + f[u].qtxt + "'"),
                                            quiz.setErr(f[u].qid, o[0]));
                                        quiz.clearNC();
                                        return
                                    }
                                    if (n != "LOGIC" && quiz.localSC && quiz.localSC["q" + u]) {
                                        s = {
                                            q: f[u].qid,
                                            a: f[u].v.split(","),
                                            t: f[u].otv,
                                            opt: {},
                                            s: 0,
                                            score: {
                                                max: 0
                                            },
                                            isC: -1,
                                            isP: 0
                                        };
                                        l = quiz.localSC["q" + u];
                                        u.indexOf(".") != -1 && (s.cq = parseInt(u.split(".")[1]));
                                        for (e in l)
                                            switch (e) {
                                                case "e":
                                                    if (si = l[e][s.s == 0 ? 1 : 0],
                                                    f[u].qt == 1 && s.s == 0 && s.isC == 1 && (si = l[e][0]),
                                                    si != -1) {
                                                        v = quiz.obj("qp_main" + s.q);
                                                        g = quiz.obj("#qp_main" + s.q + " .qp-explain", 1);
                                                        g ? ti = g.childNodes[0] : (n == "E" && (n = "+1"),
                                                            g = v.appendChild(document.createElement("DIV")),
                                                            g.className = "qp-explain",
                                                            g.setAttribute("tp", s.s == 0 ? "n" : "y"),
                                                            ti = g.appendChild(document.createElement("DIV")),
                                                            ti.className = "qp-explaini");
                                                        c = quiz.dx(si);
                                                        try {
                                                            c = decodeURIComponent(c)
                                                        } catch (fr) {
                                                            c = unescape(c)
                                                        }
                                                        ti.innerHTML = c;
                                                        g.show !== 3 && (g.show = 1,
                                                            ki = function(n) {
                                                                return function() {
                                                                    n.setAttribute("show", n.show++)
                                                                }
                                                            }(g),
                                                            setTimeout(ki, 100),
                                                            setTimeout(ki, 401));
                                                        quiz.cScore.expV = 1
                                                    }
                                                    break;
                                                case "xs":
                                                    s.score.cbmulti = l[e];
                                                    s.score.max = l[e][0];
                                                    break;
                                                default:
                                                    wt = e.substr(1);
                                                    et = 0;
                                                    l[e][0] != "y" ? et = l[e][0] > l[e][1] ? l[e][0] : l[e][1] : s.score.zero = 1;
                                                    f[u].qt == 2 ? (et > s.score.max && (s.score.max = et),
                                                    s.s == 0 && (quiz.wcTest(l[e][2], f[u].otv) ? s.s = l[e][0] : (s.s = l[e][1],
                                                        s.cq ? (v = quiz.obj("INPUT[name='qp_v" + s.q + "_" + s.cq + "']", 1),
                                                        v && (v = v.parentNode.parentNode)) : v = quiz.obj("qp_main" + s.q),
                                                    v && (di = quiz.obj("#qp_main" + s.q + " .qp_ao"),
                                                        (di ? di : v).setAttribute("ans", l[e][2]))))) : (s.score.max = f[u].qt == 0 ? et > s.score.max ? et : s.score.max : s.score.max + (et > 0 ? et : 0),
                                                        s.s += ("," + f[u].v + ",").indexOf(wt) != -1 ? l[e][0] === "y" ? 0 : l[e][0] : l[e][1],
                                                    f[u].qt == 1 && ((l[e][0] > 0 || l[e][0] === "y") && ("," + f[u].v + ",").indexOf(wt) == -1 ? s.isC = 0 : s.isC == -1 && (s.isC = 1),
                                                    l[e][0] > 0 || l[e][0] === "y" || ("," + f[u].v + ",").indexOf(wt) == -1 || (s.isC = 0,
                                                        s.isP = 1)));
                                                    s.opt["i" + wt] = {
                                                        oidx: wt,
                                                        score: {
                                                            y: l[e][0],
                                                            n: l[e][1]
                                                        }
                                                    }
                                            }
                                        s.score.cbmulti && (s.isC && (s.s += s.score.cbmulti[0]),
                                        s.isP && (s.s += s.score.cbmulti[1]));
                                        s.score.max && (quiz.cScore.hasS = 1);
                                        quiz.cScore.r.push(s)
                                    }
                                    quiz.fillAns(u, {
                                        qt: f[u].qt,
                                        v: f[u].v.split(","),
                                        otv: f[u].otv
                                    });
                                    f[u].isA && (ii = "q" + f[u].qid,
                                        ri = f[u].isA,
                                        tt[ii] ? tt[ii] == "y" && ri == "n" && (tt.y--,
                                            tt.n++,
                                            tt[ii] = ri) : (tt[ri]++,
                                            tt[ii] = ri))
                                }
                                tr = parseInt(a.getAttribute("pqt"));
                                tr == 7 ? (pi = 1,
                                    quiz.preMatch = quiz.nexttime,
                                    quiz.nexttime = 300,
                                quiz.prog && quiz.prog.p.setAttribute("ntmr", 300),
                                    quiz.tbox.setAttribute("animt", 1e3),
                                    quiz.tbox.className = (quiz.tbox.className + "").replace(/slide/gi, "fade")) : quiz.preMatch && (quiz.nexttime = quiz.preMatch,
                                quiz.prog && quiz.prog.p.setAttribute("ntmr", quiz.preMatch),
                                    quiz.tbox.removeAttribute("animt"),
                                    quiz.tbox.className = (quiz.tbox.className + "").replace(/fade/gi, "slide"))
                            }
                    }
                    if (n == "SCORE" || n == "LOGIC")
                        return ir = quiz.getOrdP(),
                        quiz.tabs.qt && quiz.setProg(quiz.tabs.qt[ir - 1] - tt.n),
                        nt + (!nt || !at ? "" : rt) + at;
                    if (pi) {
                        gi = 1;
                        for (v in quiz.cScore.r)
                            if (c = quiz.cScore.r[v],
                                hi = quiz.obj("qp_main" + c.q),
                            hi && (o = hi.getElementsByTagName("INPUT"),
                                a = hi.parentNode.parentNode,
                                a.setAttribute("mark", 3),
                            a.atKntr || (a.atKntr = 0),
                            parseInt(a.getAttribute("pqt")) == 7))
                                for (e = 0; e < o.length; e++)
                                    if (it = o[e],
                                    it.type == "radio") {
                                        if (bt = it.value && ("," + c.a.join(",") + ",").indexOf("," + it.value + ",") != -1 ? 1 : 0,
                                            ht = c.opt["i" + it.value].score,
                                            it.style.display = "none",
                                            ci = it.parentNode.parentNode,
                                            ci.setAttribute("yes", ht.y > 0 && bt ? 1 : 0),
                                            ci.setAttribute("no", ht.n > 0 && !bt || bt && ht.y < 1 && c.score.max > 0 ? 1 : 0),
                                        ht.y == 0 && bt) {
                                            setTimeout(function(n, t) {
                                                return function() {
                                                    n.checked = 0;
                                                    quiz.autoadv || t.removeAttribute("sel");
                                                    t.setAttribute("clear", 1);
                                                    t.removeAttribute("no");
                                                    setTimeout(function() {
                                                        t.removeAttribute("clear")
                                                    }, 300)
                                                }
                                            }(it, ci), 300);
                                            a.atKntr++;
                                            ct = quiz.localSC["q" + c.q];
                                            for (kt in ct)
                                                ct[kt][0] != "y" && ct[kt][0] > 0 && (ct[kt][0]--,
                                                ct[kt][0] || (ct[kt][0] = "y"))
                                        }
                                        ht.y > 0 && (bt ? (quiz.between({
                                            s: c.q,
                                            fn: function(n, t) {
                                                return function(i, r, u, f) {
                                                    if (f.getAttribute("pidx") + "" == t + "") {
                                                        var e = quiz.obj(".take-q[qid='" + u + "'] .qp_i[value='" + n + "']")
                                                            , o = e.parentNode.parentNode;
                                                        o.setAttribute("disabled", !0)
                                                    }
                                                }
                                            }(it.value, parseInt(a.getAttribute("pidx")))
                                        }),
                                            nt = nt.replace(new RegExp("((?:^|[" + rt + "])" + c.q + k + "[^" + k + "]*)","gi"), "$1" + k + k + (c.score.zero ? 0 : ht.y))) : gi = 0)
                                    }
                        if (!gi) {
                            quiz.noclick = 0;
                            return
                        }
                    }
                    if (quiz.cAns = nt,
                        quiz.cInf = at,
                        quiz.apiR({
                            answers: nt
                        }),
                        y = "",
                    quiz.rid || (y = "fp=" + encodeURIComponent(new Fingerprint({
                        screen_resolution: !0,
                        canvas: !0,
                        ie_activex: !0
                    }).get()),
                        y += document.ip2 ? "&ipt=" + encodeURIComponent(document.ip2) : "",
                        y += quiz.uc ? "&uc=" + encodeURIComponent(quiz.uc) : "",
                        y += quiz.previewObj ? "&previewobj=" + encodeURIComponent(quiz.previewObj) : "",
                        y += "&qt=" + quiz.tmr,
                        quiz.setVN(),
                        y += quiz.vn ? "&vn=" + encodeURIComponent(quiz.vn) : "",
                        y += quiz.order ? "&order=" + encodeURIComponent(quiz.order.join(",")) : ""),
                        quiz.ftmr = r ? 1 : 0,
                    !quiz.rid || n == "E")
                        for (b = quiz.sendA.e,
                                 h = 0; h < b.length; h++)
                            y += quiz[b[h]] ? (y ? "&" : "") + b[h] + "=" + parseInt(quiz[b[h]]) : "";
                    for (b = quiz.sendA.a,
                             h = 0; h < b.length; h++)
                        y += quiz[b[h]] ? (y ? "&" : "") + b[h] + "=" + encodeURIComponent(quiz[b[h]]) : "";
                    if (n != "E" || i || (quiz.setWait(1, quiz.autoscore ? quiz.cntr : 0),
                        quiz.end = 1,
                    quiz.prog && quiz.setProg(quiz.prog.max)),
                    quiz.end == 1 && (y += (y ? "&" : "") + "end=1"),
                    quiz.rid && quiz.end != 1 || (y += quiz.track ? "&track=" + encodeURIComponent(quiz.track) + "&lc=" + (quiz.isLC ? 1 : 0) : ""),
                        nr = quiz.cidx,
                        quiz.order)
                        for (e = 0; e < quiz.order.length; e++)
                            quiz.order[e] == quiz.cidx && (nr = e + 1,
                                e = quiz.order.length);
                    if (quiz.autoscore && !i && !quiz.sblock && !quiz.ucodes && (!quiz.cScore || !quiz.cScore.hasS || tt.y))
                        if (quiz.cAns || document.body.getAttribute("startp") == "1") {
                            if (quiz.cScore.hasS) {
                                for (rr = !quiz.cScore.expV,
                                     quiz.nextNoWait || quiz.setWait(1, quiz.cntr),
                                         quiz.loadResponse(quiz.cScore),
                                         ut = quiz.cAns.split(rt),
                                         p = {
                                             mark: "",
                                             score: 0,
                                             qt: 0,
                                             qy: 0,
                                             qn: 0,
                                             qp: 0,
                                             r: []
                                         },
                                         li = 0; li < ut.length; li++)
                                    for (w = 0; w < quiz.cScore.r.length; w++)
                                        v = quiz.cScore.r[w],
                                        v.q + "" == ut[li].split(k)[0] + "" && (p.qt++,
                                            p.score += v.s,
                                            v.s >= v.score.max ? p.qy++ : v.s ? p.qp++ : p.qn++,
                                            p.r.push(v));
                                p.mark = p.qy == p.qt ? "y" : p.qn == p.qt ? "n" : "p";
                                ai = quiz.obj((p.mark == "y" || p.mark == "p" ? "" : "in") + "correct");
                                ai && (ai.play(),
                                    p.sound = ai);
                                quiz.evt("Score", p);
                                quiz.prog && quiz.prog.p.setAttribute("n", 1);
                                n != "E" || quiz.cScore.expV || quiz.endSV || (quiz.endSV = 1);
                                quiz.qtimer || (clearInterval(quiz.qTMR),
                                    quiz.qTMR = 0,
                                quiz.timeIDX && (quiz.tabs.t[quiz.timeIDX - 1].removeAttribute("time"),
                                    delete quiz.timeIDX));
                                quiz.nextNoWait || (quiz.noadv = 1,
                                    quiz.tbox.style.pointerEvents = "none");
                                rr ? (quiz.nextFN = function(n, t) {
                                    return function() {
                                        if (quiz.saveFirst && !quiz.rid) {
                                            clearTimeout(quiz.nextTMR);
                                            quiz.nextTMR = setTimeout(quiz.nextFN, 300);
                                            return
                                        }
                                        return quiz.nextTMR = 0,
                                            quiz.evt("scoreEnd", t),
                                            n == "E" ? quiz.goEnd() : (quiz.tbox.style.pointerEvents = "",
                                                quiz.noadv = 0,
                                                quiz.goNext(n)),
                                            delete quiz.nextFN,
                                            !1
                                    }
                                }(n, p),
                                    quiz.nextTMR = setTimeout(quiz.nextFN, quiz.nexttime)) : quiz.nextNoWait ? (quiz.evt("scoreEnd", p),
                                    quiz.allowCont()) : (quiz.nextFN = function(n) {
                                    return function() {
                                        return quiz.evt("scoreEnd", n),
                                            quiz.allowCont(),
                                            delete quiz.nextFN,
                                            !0
                                    }
                                }(p),
                                    quiz.nextTMR = setTimeout(quiz.nextFN, quiz.nexttime));
                                dt = 0;
                                quiz.evt("Score")
                            }
                        } else {
                            quiz.goNext(n);
                            quiz.clearNC();
                            return
                        }
                    if ((quiz.sblock || quiz.ucodes) && (dt = 0,
                        quiz.noadv = 1,
                        quiz.noclick = 1,
                        quiz.tbox.style.pointerEvents = "none",
                        quiz.setWait(1, quiz.sblock ? quiz.cntr : 0)),
                    n == "E" && quiz.verify && quiz.verify.s && !quiz.lk) {
                        quiz.cSave.push(quiz.cAns);
                        quiz.saveCB = function(n) {
                            return function() {
                                quiz.saveQ(n, 0, 1)
                            }
                        }(n);
                        quiz.verifyWin();
                        return
                    }
                    if (n == "E" && !quiz.evt("Finish", {
                        status: "finished"
                    }))
                        return;
                    if (ur = (document.location + "").indexOf("block=y") != -1 && (document.location + "").indexOf("test.") != -1,
                    quiz.save != 1 && (quiz.queue != 1 || n == "E" || quiz.saveFirst))
                        n != "E" || quiz.autoscore || quiz.setWait(1),
                        !quiz.saveFirst || quiz.rid || quiz.apiKey || (quiz.setWait(1),
                            y += "&apikey=geo",
                            dt = !1),
                            quiz.save = 1,
                            quiz.gcpCB = function(n, t) {
                                return function(i) {
                                    var r, o, u, f, e;
                                    if (quiz.save = 0,
                                        quiz.gcps = {},
                                    i.substr(0, 1) == "{")
                                        if (quiz.retry = 0,
                                        quiz.saveCB || t == "E" && quiz.cSave.length || quiz.setWait(0),
                                            r = JSON.parse(i),
                                        (r.queue || r.queue == 0) && (quiz.queue = r.queue),
                                            r.error)
                                            quiz.msg(r.error),
                                                quiz.setWait(0),
                                                quiz.setWait(0, quiz.cntr),
                                                quiz.clearNCA(),
                                            quiz.end == 1 && (quiz.endSV = 0);
                                        else {
                                            if (quiz.rid != r.c && (quiz.rid = r.c,
                                            quiz.nohash || (document.location.hash = "R" + quiz.rid),
                                            quiz.ucodes && (quiz.sesK = quiz.sessionKntr(1),
                                                quiz.initTimer()),
                                            r.apiR && (quiz.apiR(r.apiR),
                                            quiz.saveFirst && r.apiR && (quiz.cResp = r.apiR)),
                                                quiz.runCB("firstSave"),
                                            quiz.saveFirst && (quiz.setWait(0),
                                                quiz.clearNCA(),
                                            quiz.nextTMR && quiz.nextFN || quiz.goNext(t))),
                                            quiz.ucodes && (quiz.ucodes = 0,
                                                quiz.setWait(0),
                                                quiz.clearNCA(),
                                                quiz.goNext("+1")),
                                            quiz.sblock && (quiz.setWait(0, quiz.cntr),
                                                quiz.liveWaitCB(r.cq, r.rs == 0 ? "Q" : "A", 1)),
                                                quiz.saveCB) {
                                                o = quiz.saveCB;
                                                quiz.saveCB = !1;
                                                o();
                                                return
                                            }
                                            quiz.end != 1 || quiz.sblock || (quiz.ref == "PREVIEW" || quiz.isLC || quiz.gEvent("Quiz", "Taken"),
                                                quiz.endSV == 1 ? (quiz.endSV = 2,
                                                quiz.endTMR || (quiz.setWait(1),
                                                    quiz.goEnd())) : (quiz.endSV = 2,
                                                    quiz.setWait(1),
                                                    quiz.goEnd()))
                                        }
                                    else {
                                        quiz.end == 1 && (quiz.endSV = 0);
                                        u = i.substr(0, 1);
                                        f = 1e3;
                                        /[TAR]/.test(u) && (quiz.retry++,
                                            f = Math.pow(quiz.retry, 2) * 100 + Math.round(Math.random() * 100),
                                            e = function(n) {
                                                return function() {
                                                    quiz.xSend({
                                                        s: "Quiz.Answer " + quiz.ref + ";" + quiz.rid,
                                                        d: n + (n ? "&" : "") + "retry=" + quiz.retry + "&ans=" + encodeURIComponent(quiz.cAns),
                                                        cb: quiz.gcpCB
                                                    })
                                                }
                                            }(n));
                                        (i + "  ").substr(1, 1) == "Q" && (quiz.queue = 1);
                                        switch (u) {
                                            case "T":
                                            case "A":
                                                quiz.setWait(0);
                                                quiz.timeout = e;
                                                quiz.win({
                                                    id: "login"
                                                });
                                                quiz.loginI("em").parentNode.style.display = u == "A" ? "none" : "";
                                                return;
                                            case "R":
                                                setTimeout(e, f);
                                                return;
                                            case "B":
                                                if (quiz.gcps = {
                                                    ref: quiz.ref + ";" + quiz.rid,
                                                    sd: n + (n ? "&" : "") + "ans=" + encodeURIComponent(quiz.cAns)
                                                },
                                                    quiz.obj("gcp-win")) {
                                                    quiz.gcpReset(2);
                                                    return
                                                }
                                                quiz.setWait(1);
                                                quiz.setWait(0, quiz.cntr);
                                                quiz.async("gcp", "www.google.com/recaptcha/api.js?onload=gcpCallback&render=explicit");
                                                return
                                        }
                                        quiz.setWait(0);
                                        quiz.setWait(0, quiz.cntr);
                                        quiz.msg(i.substr(0, 1) == "E" ? i.split(";")[1] : "Unable to save response, please try again later");
                                        quiz.clearNCA()
                                    }
                                }
                            }(y, n),
                        quiz.cSave.length && (c = quiz.cSave.join(rt),
                            quiz.cAns = c + (!quiz.cAns || !c ? "" : rt) + quiz.cAns,
                            quiz.cSave = []),
                            quiz.xSend({
                                s: "Quiz." + (ur ? "No_" : "") + "Answer " + quiz.ref + ";" + quiz.rid + ";" + nr,
                                d: y + (y ? "&" : "") + (!quiz.autoscore || pi ? "" : "st=1&") + "ans=" + encodeURIComponent(quiz.cAns),
                                cb: quiz.gcpCB,
                                noLog: 1
                            });
                    else if (quiz.cSave.push(quiz.cAns),
                    n == "E") {
                        quiz.saveCB = function(n) {
                            return function() {
                                quiz.saveQ(n, 0, 1)
                            }
                        }(n);
                        return
                    }
                    quiz.gEvent("quiz", "next")
                }
                n != "E" && dt && quiz.goNext(n);
                quiz.clearNC()
            }
        },
        setVN: function() {
            var r, u, i, n, t;
            if (quiz.ovn) {
                for (quiz.dvn || (quiz.dvn = (quiz.ovn + "-").split("-")[0]),
                         r = [0, 0],
                         u = (new Date).getTime() - quiz.tmr,
                         i = 0; i < 2; i++) {
                    for (n = ([quiz.dvn, parseFloat(quiz.dvn) + u / 864e5][i] + "").split("."),
                             n[1] = (n[1] + Array(11).join("0")).substr(0, 10).split(""),
                             n = n.concat([parseInt(n[1][8]), parseInt(n[1][9])]),
                             t = 2; t < 4; t++)
                        n.push(0 + (n[t] < 5 ? 9 - n[t] : n[t])),
                            n[t + 2] = n[t + 2] == 9 ? 8 : n[t + 2];
                    n[4] == n[5] && (n[5] = n[4] == 8 ? 5 : n[4] + 1);
                    n[1][n[4] - 1] = 0 + n[3];
                    n[1][n[5] - 1] = 0 + n[2];
                    n[1][8] = n[2];
                    n[1][9] = n[3];
                    r[i] = n[0] + "." + n[1].join("")
                }
                quiz.vn = r.join("-")
            }
        },
        allowCont: function() {
            var n, t;
            quiz.tabSaved = !0;
            quiz.setWait(0, quiz.cntr);
            quiz.tbox.style.pointerEvents = "";
            quiz.noadv = 0;
            n = quiz.obj(".quiz-container", 2);
            n && n.setAttribute("btns", 1);
            quiz.scrolltabs && (t = quiz.obj("DIV[tid].sel .qp_tabbtn .qp_btn", 2),
            t && (t.value = quiz.translate("Next")))
        },
        getQTxt: function(n) {
            var t = quiz.obj(".take-q[qid='" + n + "'] .qp_tn, DIV.take-q[qid='" + n + "'] .qp_qi:not(:empty), .take-q[qid='" + n + "'] SPAN.qp_t", 2);
            return t ? t.textContent + "" : ""
        },
        checkAllErr: function() {
            var n, t;
            return quiz.scrolltabs ? (n = quiz.obj(".take-q:not([cont='1']):not([skip='1'])", 2),
                n) ? (t = n.getAttribute("qid"),
                quiz.setWait(0),
                quiz.msg("You must answer the question:\n\n'" + quiz.getQTxt(t) + "'"),
                quiz.setErr(t, 1),
                0) : 1 : 1
        },
        wcTest: function(n, t) {
            return n = "^" + n.replace(/[\’]/gi, "'").replace(/^[\s]*|[\s]*$/gi, "").replace(/([()[{+.$^\\|?])/g, "\\$1").replace(/[\*]/gi, "[\\s\\S]*").replace(/[\_]/gi, "[\\s\\S]") + "$",
                new RegExp(n,"i").test(t.replace(/[\’]/gi, "'").replace(/^[\s]*|[\s]*$/gi, ""))
        },
        pHost: function(n) {
            if (quiz.embed && !n)
                return {
                    pm: 0,
                    dq: 0,
                    loc: ""
                };
            var t = document.location + ""
                , i = t.indexOf("www") == -1 ? t.indexOf("test") == -1 ? "" : "test." : "www.";
            return t.indexOf("testcdn.poll-maker.com") != -1 ? {
                pm: 0,
                dq: 0,
                loc: ""
            } : t.indexOf("mysurvey.run") != -1 ? {
                pm: 1,
                dq: 0,
                qm: 0,
                sm: 0,
                sl: 0,
                ms: 1,
                loc: "https://mysurvey.run"
            } : t.indexOf("sitelistener.com") != -1 ? {
                pm: 1,
                dq: 0,
                qm: 0,
                sm: 0,
                sl: 1,
                loc: "https://www.sitelistener.com"
            } : t.indexOf("poll-maker.com") != -1 && !/[\/]Embed[\-]Quiz/.test(document.location + "") ? {
                pm: 1,
                dq: 0,
                qm: 0,
                sm: 0,
                sl: 0,
                loc: "https://" + i + "poll-maker.com"
            } : t.indexOf("quiz-maker.com") != -1 && !/(cdn[\.]quiz[\-]maker[\.]com|[\/]Embed[\-]Quiz|[\/]Device[\-]Frame)/.test(document.location + "") ? (i = "take.",
                {
                    pm: 1,
                    dq: 0,
                    qm: 1,
                    sm: 0,
                    sl: 0,
                    loc: "https://" + i + "quiz-maker.com"
                }) : t.indexOf("survey-maker.com") != -1 ? {
                pm: 1,
                dq: 0,
                qm: 0,
                sm: 1,
                sl: 0,
                loc: "https://" + i + "survey-maker.com"
            } : t.indexOf("quizwiz.com") != -1 ? {
                pm: 1,
                dq: 0,
                qm: 1,
                sm: 0,
                sl: 0,
                loc: "http://" + i + "quizwiz.com"
            } : t.indexOf("supersurvey.com") != -1 ? {
                pm: 1,
                dq: 0,
                qm: 0,
                sm: 1,
                sl: 0,
                ms: 0,
                loc: "https://" + i + "supersurvey.com"
            } : {
                pm: 0,
                dq: 0,
                loc: ""
            }
        },
        goEnd: function(n) {
            var r, t, i, u;
            if (quiz.end == 1 || n) {
                n && (quiz.endSV = 2);
                switch (quiz.endSV) {
                    case 2:
                        if (clearTimeout(quiz.nextTMR),
                            clearTimeout(quiz.endTMR),
                            quiz.nextTMR = 0,
                            quiz.endTMR = 0,
                            r = quiz.pHost(),
                            t = !n || quiz.end == 1 ? quiz.rid : "",
                            quiz.isLC)
                            if (quiz.oLC)
                                quiz.ref = quiz.oLC.ref,
                                    quiz.showResults(quiz.oLC.rid);
                            else if (r.pm)
                                quiz.nohash || (document.location.hash = ""),
                                    document.location.reload();
                            else {
                                i = quiz.track.split("-");
                                typeof qz == "object" ? qz.results("Q" + i[2], i[0] + "-" + i[1]) : (quiz.ref = i[2],
                                    quiz.showResults(i[0] + "-" + i[1]));
                                return
                            }
                        else if (r.pm)
                            quiz.ref == "PREVIEW" ? quiz.showResults(t) : (quiz.setWait(1, quiz.cntr),
                            r.dq && sys && sys.qpub && sys.qpub.setFin(quiz.ref, t),
                                u = qsV("pc"),
                                document.location = (quiz.public && !r.dq ? "/Public" : "") + "/results" + (t ? t + "-" : "Q") + quiz.ref + (quiz.clang ? "/" + quiz.clang.toUpperCase() : "") + (u ? "?pc=" + u : ""));
                        else {
                            typeof qz == "object" ? qz.results("Q" + quiz.ref, t) : quiz.showResults(t);
                            return
                        }
                        break;
                    case 1:
                        quiz.setWait(1);
                        quiz.endTMR = setTimeout(quiz.goEnd, 300)
                }
            }
        },
        showResults: function(n) {
            quiz.xSend("Quiz." + (quiz.public ? "Public_" : "") + "Results " + n + "-" + quiz.ref, quiz.clang ? "lang=" + quiz.clang.toUpperCase() : "", function(n) {
                return function(t) {
                    var r, f, u, i;
                    t == "R" ? (r = quiz.pHost(),
                        f = r.loc ? r.loc : "www.poll-maker.com",
                        document.location = f + "/results" + n + "-" + qid + (quiz.clang ? "/" + quiz.clang.toUpperCase() : "")) : (u = /class[\=][\'\"][^\'\"]*quiz[\-]container[^\'\"]+quiz[\-]lc[^\'\"]*[\'\"]/i.test(t),
                        i = u ? "ntabs" : "results",
                        t = t.replace(/(id=[\']quiz[\-])tabs([\'])/gi, "$1" + i + "$2").replace(/document.tabs[\[]0[\]]([\.]show[\(])/gi, "quiz.obj('quiz-" + i + "').tabs$1"),
                        quiz.reInit({
                            html: t,
                            lc: u,
                            res: 1,
                            rid: n,
                            tn: i
                        }))
                }
            }(n))
        },
        reInit: function(n) {
            quiz.linkTheme = quiz.obj(".qp_container LINK[id^='theme-']", 2);
            quiz.linkTheme && document.head.appendChild(quiz.linkTheme);
            n.m = document.querySelectorAll(".quiz-container")[0];
            n.phtml = n.m.innerHTML;
            n.html = n.html.replace(/([\=][\"\'])([\/][\/])/gi, "$1https:$2");
            n.m.offsetWidth <= 400 && quiz.embed && (n.m.className += " quiz-small" + (n.m.offsetWidth <= 250 ? " quiz-vsmall" : ""),
            quiz.tool == "PM" && (n.html = n.html.replace(/qp[\-]subtab[\-]c/gi, "qp-notab-c")));
            /[\s]*class[\=][\'\"][^\'\"]*quiz[\-]container/.test(n.html) ? n.m.outerHTML = n.html : (/[\s]*class[\=][\'\"][^\'\"]*qp[\_]container/.test(n.html) || (n.html = "<div class='qp_container'>" + n.html + "<\/div>"),
                n.m.innerHTML = n.html);
            delete quiz.dxo;
            n.lc && (quiz.rid = "",
                delete quiz.end,
                delete quiz.endSV,
                delete quiz.order,
                delete quiz.rand,
                document.body.removeAttribute("last"));
            !n.lc && / quiz-lc/.test(n.m.className) && (n.m.className = n.m.className.replace(/ quiz-lc/gi, ""));
            try {
                FB.XFBML.parse()
            } catch (i) {}
            try {
                quiz.loadTabs()
            } catch (i) {}
            try {
                loadSocial()
            } catch (i) {}
            clearTimeout(quiz.nextTMR);
            clearInterval(quiz.qTMR);
            clearTimeout(quiz.endTMR);
            quiz.nextTMR = 0;
            quiz.qTMR = 0;
            quiz.endTMR = 0;
            quiz.tbox = quiz.obj("quiz-" + (n.tn ? n.tn : "tabs"));
            quiz.tabs = quiz.tbox.tabs;
            var t = quiz.getScripts(n.html);
            return t && ((n.lc || n.su) && (t += "quiz.initEvents();quiz.setReq(quiz.runReq);" + (n.su ? "quiz.initTimer();quiz.setTab(quiz.tabs.idx,0);quiz.endInit()" : "")),
            n.res && (t += "quiz.resEvents();quiz.runCB('afterResults');"),
                setTimeout(t, 1)),
            quiz.ref == "PREVIEW" && n.res && (quiz.obj(".preview-take", 2).removeAttribute("sel"),
                quiz.obj(".preview-res", 2).setAttribute("sel", 1)),
            n.rid && !quiz.nohash && (document.location.hash = "X" + n.rid + "-" + quiz.ref),
            n.lc && (quiz.oLC = {
                rid: n.rid,
                ref: quiz.ref
            },
                quiz.sref = "",
                quiz.sblock = 0),
                (quiz.tbox.className + "").indexOf("qp-notab-c") != -1 ? (gg.ref = quiz.ref,
                quiz.obj("map-canvas") && gg.getMap(),
                quiz.obj("time-canvas") && gg.getTimeLine()) : quiz.initTabs(),
                quiz.setWait(0, quiz.cntr),
                quiz.setWait(0),
                quiz.initTarget(),
                setTimeout(function() {
                    quiz.scrolltabs ? (quiz.scrollRoot().scrollTop = 0,
                        quiz.onScroll()) : quiz.scrollTo()
                }, 10),
                quiz.clearNCA(),
            !t && n.res && quiz.runCB("afterResults"),
                n
        },
        getScripts: function(n) {
            var r = n.match(/[\<]SCRIPT[^\>]*[\>]([^\<]|[\<][^s]|[\<]S[^C])+[\<][\/]SCRIPT[\>]/gi), t = "", u, i;
            if (r && r.length)
                for (u = 0; u < r.length; u++)
                    i = r[u].split(">"),
                        i.shift(),
                        i = i.join(">"),
                        t += i.substr(0, i.length - 9),
                    t && t.substr(t.length - 1) != ";" && (t += ";");
            return t
        },
        goNext: function(n, t) {
            if (quiz.blockNext) {
                quiz.blockNext = 0;
                return
            }
            if ((quiz.qtimer || (clearTimeout(quiz.nextTMR),
                clearInterval(quiz.qTMR),
                quiz.nextTMR = 0,
                quiz.qTMR = 0,
                delete quiz.timeIDX),
                quiz.setWait(0, quiz.cntr),
            quiz.rid || quiz.evt("Start", {
                status: "started"
            })) && quiz.evt(n == "-1" ? "Back" : "Next", {
                frompage: quiz.tabs.idx
            })) {
                if (quiz.blockNext) {
                    quiz.blockNext = 0;
                    return
                }
                quiz.checkLogic(quiz.cAns + (!quiz.cInf || !quiz.cAns ? "" : String.fromCharCode(209)) + quiz.cInf);
                typeof n == "object" && n.tagName ? (n.show(),
                    n = "+1") : quiz.order ? quiz.randTab(n, t) : quiz.goTab(n, t);
                quiz.tabEmpty(n);
                quiz.scrollTo();
                quiz.previewCH(1)
            }
        },
        goTab: function(n, t) {
            (quiz.timeIDX && (n = quiz.timeIDX),
                quiz.blockTab[n]) || (quiz.scrolltabs && n === "+1" && quiz.tidx >= quiz.tbox.tabs.t.length && quiz.scrollToEnd(),
                quiz.noSL = t,
                quiz.tbox.tabs.show(n, t),
                delete quiz.noSL)
        },
        scrollToEnd: function() {
            quiz.fromTab = 1;
            quiz.fromScroll = 1;
            quiz.easeScroll(quiz.scrollRoot().scrollHeight, function() {
                setTimeout(function() {
                    quiz.fromTab = 0;
                    quiz.fromScroll = 0;
                    quiz.onScroll();
                    quiz.tabSaved = !0
                }, 100)
            })
        },
        between: function(n) {
            var f, c, i, a, s, v, w;
            n.s ? n.s = quiz.qInfo(n.s) : quiz.order || (n.s = {
                tidx: 1
            });
            var h = n.s ? n.s.tidx - 1 : 0
                , y = quiz.tabs.t.length
                , o = 0;
            for (quiz.order && (h = n.s ? quiz.getOrdP(n.s.tidx) - 1 : 0,
                y = quiz.order.length,
            n.s || (n.s = {})),
                     f = h; f < y; f++) {
                c = f;
                quiz.order && (c = quiz.getOrdT(f + 1) - 1);
                var p = quiz.tabs.t[c].getAttribute("tid")
                    , u = document.querySelectorAll("DIV[tid='" + p + "'] .take-q, DIV[tid='" + p + "'] .qp_matrix[qid]")
                    , e = -1;
                if (f == h && n.s.qid) {
                    for (i = 0; e == -1 && i < u.length; i++)
                        u[i].getAttribute("qid") + "" == n.s.qid + "" && (e = i + (n.e == 0 || n.inc ? 0 : 1),
                            i = u.length + 1);
                    e == -1 && (e = u.length)
                } else
                    e = 0;
                for (i = e; i < u.length; i++) {
                    var t = u[i]
                        , r = t.parentNode
                        , l = parseInt(t.getAttribute("qid"));
                    if (n.e == l && !n.inc)
                        return o;
                    if (t.getAttribute("qt") != "6" && t.style.display != "none" && r.getAttribute("skip") != "1" && o++,
                    n.hide === 1) {
                        for (t.pskip || t.pskip == 0 || (t.pskip = parseInt(t.getAttribute("skip")) ? 1 : 0),
                                 t.setAttribute("skip", 1),
                             t.hideIDX || (t.hideIDX = {}),
                                 t.hideIDX[n.src ? n.src : "x"] = 1,
                                 t.style.display = "none",
                             n.skip || (t.hide = 1),
                                 a = 0,
                                 s = 0; s < u.length; s++)
                            u[s].style.display != "none" && a++;
                        a || (r.pskip || r.pskip == 0 || (r.pskip = parseInt(r.getAttribute("skip")) ? 1 : 0),
                            quiz.setTabSkip(r, 1))
                    }
                    if (n.hide === 0 && (!n.skip || !t.hide)) {
                        t.hideIDX || (t.hideIDX = {});
                        delete t.hideIDX[n.src ? n.src : "x"];
                        v = 1;
                        for (w in t.hideIDX)
                            t.hideIDX[w] == 1 && (v = 0);
                        v && ((t.pskip || t.pskip == 0) && t.setAttribute("skip", t.pskip),
                            t.style.display = "",
                            t.hide = 0,
                        (r.pskip || r.pskip == 0) && quiz.setTabSkip(r, r.pskip))
                    }
                    if (n.fn && n.fn(f, i, l, t, n),
                    n.e == 0 || n.e == l)
                        return o
                }
            }
            return o
        },
        setTabSkip: function(n, t) {
            if (n.setAttribute("skip", t),
                quiz.tabs.h) {
                var i = quiz.tabs.h[n.tidx];
                i && i.setAttribute("skip", t)
            }
        },
        qInfo: function(n) {
            var t = {
                qid: n,
                dom: quiz.obj(".take-q[qid='" + n + "'], .qp_matrix[qid='" + n + "']", 2)
            };
            return t.tab = t.dom.parentNode,
                t.tid = t.tab.getAttribute("tid"),
                t.tidx = t.tab.idx,
                t
        },
        compareA: function(n, t) {
            n = (n + "").substr(0, 1) == "/" && (n + "").substr(n.length - 1) == "/" ? n.substr(1, n.length - 2) : "^" + (n + "").replace(/[\’]/gi, "'").replace(/(^|[^\\])[\*]/gi, "$1@WILDCARD@").replace(/[\\][*]/gi, "*").replace(/([\\\^\$\.\|\?\*\+\(\)\[\{\]\}\,])/gi, "\\$1").replace(/[\@]WILDCARD[\@]/gi, "[\\s\\S]*") + "$";
            var i = new RegExp(n,"gi");
            if (i.test(t.replace(/[\’]/gi, "'")))
                return 1
        },
        checkMand: function(n, t) {
            for (var i = n, e, r, f, u; i && (i.className + "").indexOf("take-q") == -1; )
                i = i.parentNode;
            if (i) {
                for (e = quiz.getAtt(i, "qid,qt,mark,min,max,skip"),
                     typeof t == "undefined" && (t = n.value),
                         i.setAttribute("cont", t ? 1 : 0),
                         quiz.evt((t ? "Allow" : "Block") + "Next"),
                         r = i.parentNode; r && !(tid = r.getAttribute("tid")); )
                    r = r.parentNode;
                for (f = quiz.obj("DIV[tid='" + tid + "'] .take-q", 3),
                         r.setAttribute("cont", 0),
                         u = 0; u < f.length; u++)
                    if (f[u].getAttribute("cont") != "1") {
                        quiz.evt("TabBlockNext");
                        return
                    }
                r.setAttribute("cont", 1);
                quiz.evt("TabAllowNext")
            }
        },
        checkLogic: function(n, t) {
            var a, v, r, h, y, g, i, f, c, l, w, b;
            if (quiz.logic && n) {
                var tt = String.fromCharCode(209)
                    , it = String.fromCharCode(166)
                    , k = n.split(tt);
                for (a = 0; a < k.length; a++) {
                    var e = k[a].split(it)
                        , o = parseInt(e[0])
                        , u = quiz.logic[o]
                        , d = 0;
                    if (u && e[1] == "" && (v = quiz.obj(".take-q[qid='" + o + "']"),
                    v && v.getAttribute("skip") == "1" && getComputedStyle(v, null).display == "none" && (d = 1)),
                    u && !d) {
                        for (r = [],
                                 h = [],
                                 i = u.list.length - 1; i >= 0; i--)
                            u.list[i].c == 2 && h.push(u.list[i].lidx),
                                y = 0,
                                e[1] == "999" ? quiz.compareA(u.list[i].a, e[2]) && (y = 1) : ("," + e[1] + ",").indexOf("," + u.list[i].a + ",") != -1 && (y = 1),
                                u.list[i].src = o,
                                y ? r.push(u.list[i]) : r.unshift(u.list[i]);
                        for (h.length && !u.rnd && u.rnd !== 0 && (u.rnd = h[parseInt(Math.random() * h.length)]),
                                 g = quiz.between({
                                     s: 0,
                                     e: o
                                 }) + 1,
                                 i = 0; i < r.length; i++) {
                            f = 0;
                            c = parseInt(r[i].q);
                            switch (parseInt(r[i].c)) {
                                case 1:
                                    f = 1;
                                    break;
                                case 2:
                                    u.rnd == r[i].lidx && (f = 1);
                                    break
                                case 3:
                                    parseInt(r[i].a) == g && (f = 1);
                                    break;
                                default:
                                    e[1] == "999" ? quiz.compareA(r[i].a, e[2]) && (f = 1) : ("," + e[1] + ",").indexOf("," + r[i].a + ",") != -1 && (f = 1)
                            }
                            if (f)
                                switch (parseInt(r[i].l)) {
                                    case 0:
                                        quiz.between({
                                            s: o,
                                            e: c,
                                            hide: 1,
                                            skip: 1,
                                            act: f,
                                            src: r[i].src
                                        });
                                        break;
                                    case 1:
                                        quiz.between({
                                            s: c,
                                            e: 0,
                                            hide: 1,
                                            act: f,
                                            src: r[i].src
                                        });
                                        break;
                                    case 2:
                                        if (quiz.between({
                                            s: o,
                                            hide: 1,
                                            act: f,
                                            src: r[i].src
                                        }),
                                            !t) {
                                            quiz.clearNCA();
                                            quiz.autoscore = 0;
                                            quiz.saveQ("E", 1);
                                            return
                                        }
                                }
                            else if (t)
                                switch (parseInt(r[i].l)) {
                                    case 0:
                                        quiz.between({
                                            s: o,
                                            e: c,
                                            hide: 0,
                                            skip: 1,
                                            act: f,
                                            src: r[i].src
                                        });
                                        break;
                                    case 1:
                                        quiz.between({
                                            s: c,
                                            e: 0,
                                            hide: 0,
                                            act: f,
                                            src: r[i].src
                                        });
                                        break;
                                    case 2:
                                        quiz.between({
                                            s: o,
                                            hide: 0,
                                            act: f,
                                            src: r[i].src
                                        })
                                }
                        }
                    }
                }
                var s = -1
                    , p = quiz.tabs.idx
                    , nt = quiz.tabs.t.length;
                for (quiz.order && (p = quiz.getOrdP(p),
                    nt = quiz.order.length),
                         l = p; l < nt; l++)
                    w = l,
                    quiz.order && (w = quiz.getOrdT(l + 1) - 1),
                        b = quiz.tabs.t[w].getAttribute("skip") == "1" ? 1 : 0,
                        s = s == -1 || s == 1 && b == 0 ? b : s;
                s != -1 && (s == 1 ? document.body.setAttribute("last", s) : quiz.order && s == 0 ? document.body.setAttribute("last", 0) : document.body.removeAttribute("last"))
            }
        },
        tabEmpty: function(n) {
            var t, i, r;
            if (n != "E") {
                if ((quiz.tabs.tp.className + "").indexOf("qp-notab-c") != -1)
                    return;
                setTimeout(function() {
                    quiz.emptyX = []
                }, 100);
                t = parseInt(quiz.tabs.idx);
                i = quiz.tabs.tp.childNodes[t - 1];
                i.childNodes.length && i.getAttribute("skip") != "1" || (quiz.noclick = 0,
                    quiz.emptyX[t] = quiz.emptyX[t] ? quiz.emptyX[t] + 1 : 1,
                quiz.emptyX[t] < 10 && quiz.saveQ(n),
                t == 1 && (r = "BODY[tidx-" + quiz.tabs.tid + "='" + quiz.tabs.idx + "'] .qp_bo #quiz",
                    quiz.addCSS(r + "-back", "display:none!important"),
                    quiz.addCSS(r + "-next", "padding-left:0px!important")))
            }
        },
        addCSS: function(n, t) {
            var i = quiz.obj("qp_sheet");
            i || (i = document.head.appendChild(document.createElement("STYLE")),
                i.id = "qp_sheet");
            i = i.sheet;
            i.addRule ? i.addRule(n, t, 0) : i.insertRule(n + " {" + t + "}", 0)
        },
        gcpStart: function() {
            quiz.setWait(0);
            document.body.setAttribute("blur", "1");
            var n = document.body.appendChild(document.createElement("DIV"));
            n.id = "gcp-win";
            grecaptcha.render("gcp-win", {
                sitekey: "6LdV6SYTAAAAAO3aEfulkS6ObtQQkk0QBAIRrgwV",
                theme: "light",
                callback: quiz.gcpEnd
            })
        },
        gcpEnd: function() {
            document.body.setAttribute("blur", "0");
            quiz.obj("gcp-win").setAttribute("e", 0);
            quiz.setWait(1);
            quiz.xSend("Quiz.GCP " + quiz.ref, "nk=1&v=" + encodeURIComponent(grecaptcha.getResponse()), function(n) {
                n == "Y" ? quiz.xSend({
                    s: "Quiz.Answer " + quiz.gcps.ref,
                    d: quiz.gcps.sd,
                    cb: quiz.gcpCB,
                    noLog: 1
                }) : (quiz.setWait(0),
                    quiz.gcpReset(1))
            })
        },
        gcpReset: function(n) {
            document.body.setAttribute("blur", "1");
            quiz.obj("gcp-win").setAttribute("e", n);
            grecaptcha.reset()
        },
        randTab: function(n, t) {
            var u = 0, f = 0, i = 0, r, e;
            for (typeof n != "string" && (quiz.tidx = quiz.order[n - 1],
                n = 0,
                t = 1),
                     r = 0; r < quiz.order.length; r++)
                if (quiz.order[r] == quiz.tidx) {
                    if (i = r + parseInt(n),
                    i < 0 || i > quiz.order.length - 1) {
                        quiz.scrolltabs && n === "+1" && i > quiz.order.length - 1 && quiz.scrollToEnd();
                        return
                    }
                    e = quiz.order[i];
                    f = i <= 0;
                    u = i >= quiz.order.length - 1;
                    quiz.goTab(e, t);
                    document.body.setAttribute("first", f ? 1 : 0);
                    document.body.setAttribute("last", u ? 1 : 0);
                    return
                }
        },
        fillAns: function(n, t) {
            var e, u, s, f, h, l, o, i, r, c;
            if (t ? quiz.aVal[n] = t : t = quiz.aVal[n],
                e = document.querySelectorAll(".quiz-answer-" + (n + "").replace(/[\.]/g, "-")),
            e && e.length) {
                for (u = "",
                         s = [],
                         i = 0; i < t.v.length; i++)
                    t.v[i] + "" == "999" || t.qt == 4 ? u += (u ? ", " : "") + (t.v[i] + "" == "999" ? t.otv : t.v[i]) : (f = "",
                        h = 0,
                    /[\.]/.test(n + "") && (n = n.split("."),
                        f = n[1],
                        n = n[0],
                        h = 1),
                        l = h && t.qt < 2 ? ".qp_qi[mopt='" + f + "." + t.v[i] + "']" : "#qp_main" + n + " " + (t.qt == 5 ? (f ? "SELECT[pid='" + f + "'] " : "") + "OPTION" : ".qp_i") + "[value='" + t.v[i] + "']" + (!f || t.qt == 5 ? "" : "[pid='" + f + "']"),
                        o = quiz.obj(l, 2),
                    o && t.v[i] != "" && (t.qt != 5 && (o = o.parentNode),
                        s.push(o.innerText),
                        u += (u ? ", " : "") + o.innerText));
                for (i = 0; i < e.length; i++) {
                    r = u;
                    c = e[i].getAttribute("n") + "";
                    switch (c) {
                        case "":
                            r = u;
                            break;
                        case "s":
                            r = t.s ? t.s : 0;
                            t.s || t.s === 0 || (r = !1);
                            break;
                        case "p":
                            r = !t.s || !t.max ? 0 : Math.round(t.s * 100 / t.max);
                            t.s || t.s === 0 || (r = !1);
                            break;
                        default:
                            r = s[parseInt(c) - 1];
                            r || (r = "")
                    }
                    r !== !1 && (e[i].innerHTML = r)
                }
            }
        },
        loadResponse: function(n, t) {
            var y = 1, d = 0, o = {
                t: 0,
                qi: 0,
                qc: 0,
                qp: 0,
                c: 0,
                max: 0
            }, g, a, nt, tt, ht, kt, s, u, ct, b, l, it, lt, rt, ut, k, p, at, e, ft, vt, et, h, r, wt, w, ot, st, v, pt, f, i, c;
            if (n.f && (quiz.fin = n.f),
                n.order)
                for (quiz.order = n.order.concat(),
                         g = quiz.obj("quiz-tabs").childNodes,
                         s = 0; s < g.length - 1; s++)
                    g[s].tagName && g[s].getAttribute("tid") && ("," + quiz.order.join(",") + ",").indexOf("," + (s + 1) + ",") == -1 && quiz.order.push(s + 1);
            for (f in n.r)
                if (i = n.r[f],
                    h = quiz.obj("qp_main" + i.q),
                    h) {
                    if (a = h.parentNode,
                    a.className && (a.className + "").indexOf("take-q") != -1 || (a = a.parentNode),
                        quiz.fillAns(i.q + (i.cq ? "." + i.cq : ""), {
                            qt: parseInt(a.getAttribute((i.cq ? i.cq + "-" : "") + "qt")),
                            v: i.a,
                            otv: i.t,
                            s: i.s,
                            max: !i.score || !i.score.max ? 0 : i.score.max
                        }),
                    i.a[0] && i.a[0] != 0 && (nt = a.parentNode.tidx + 1),
                    !n.f || n.f == 2)
                        if (quiz.order) {
                            for (tt = 0,
                                     s = 0; s < quiz.order.length; s++)
                                quiz.order[s] == nt && (tt = s);
                            tt + 1 > d && (d = tt + 1);
                            d > quiz.order.length - 1 && (d = quiz.order.length - 1)
                        } else
                            nt + 1 > y && (y = nt + 1);
                    for (ht = h.getElementsByTagName("INPUT"),
                             kt = 0,
                             s = 0; s < ht.length; s++)
                        if (u = ht[s],
                            ct = u.getAttribute("pid"),
                        !ct || ct + "" == i.cq + "") {
                            switch (u.type) {
                                case "checkbox":
                                case "radio":
                                    b = u.value && ("," + i.a.join(",") + ",").indexOf("," + u.value + ",") != -1 ? 1 : 0;
                                    n.f && (e = i.opt["i" + u.value] ? i.opt["i" + u.value].score : {
                                        y: 0,
                                        n: 0
                                    },
                                        u.style.display = "none",
                                        l = u.parentNode.parentNode,
                                        it = e.y > 0 || e.y == "y",
                                        l.setAttribute("yes", it && b ? 1 : 0),
                                        l.setAttribute("no", e.n > 0 && !b || b && !it && i.score.max > 0 ? 1 : 0),
                                        l.setAttribute("ymark", it ? 1 : 0),
                                        l.setAttribute("nmark", e.n > 0 ? 1 : 0),
                                    e.y + e.n != 0 && (lt = parseInt(l.parentNode.getAttribute("skntr")),
                                        l.parentNode.setAttribute("skntr", lt ? lt + 1 : 1)),
                                        l.parentNode.setAttribute("multi", u.type == "radio" ? 0 : 1),
                                    b && e.y == i.score.max && l.parentNode.setAttribute("one", 1),
                                        rt = l.childNodes[0],
                                    rt && (e.y != 0 && rt.setAttribute("sy", (e.y < 0 ? "-" : "+") + e.y),
                                    e.n != 0 && rt.setAttribute("sn", (e.n < 0 ? "-" : "+") + e.n)));
                                    b ? quiz.sel(!1, u, 1) : u.checked && u.type == "checkbox" && quiz.sel(!1, u, 0);
                                    break;
                                case "range":
                                    i.t && (u.value = i.t,
                                        u.parentNode.setAttribute("v", i.t));
                                    break;
                                case "number":
                                    for (ut = -1,
                                             k = 0; k < i.a.length; k++)
                                        i.a[k] == parseInt(u.getAttribute("oidx")) && (ut = k + 1,
                                            k = i.a.length + 1);
                                    u.value = ut == -1 ? "" : ut;
                                    break;
                                case "text":
                                case "email":
                                case "url":
                                case "tel":
                                case "hidden":
                                    if (/qp_txti|qp_tv|qp_otv/.test(u.className + "") && !/qp_nosave/.test(u.className + "") && (u.value = i.t ? i.t : "",
                                        u.onFill))
                                        u.onFill(i);
                                    break;
                                case "file":
                                    i.files;
                                    quiz.uploadFile(0, u, i.files, 1)
                            }
                            quiz.checkMand(u)
                        }
                    if (p = h.getElementsByTagName("SELECT"),
                    p && p[0] && !/qp_nosave/.test(p[0].className + "") && (p[0].value = i.a[0] ? i.a[0] + "" : "",
                        at = i.opt ? i.opt["i" + i.a[0]] : 0,
                    at && (e = at.score,
                    e.y != 0 && p[0].setAttribute("sy", (e.y < 0 ? "-" : "+") + e.y),
                    e.n != 0 && p[0].setAttribute("sn", (e.n < 0 ? "-" : "+") + e.n))),
                        ft = h.getElementsByTagName("TEXTAREA"),
                    ft && ft[0] && (ft[0].value = i.t ? i.t : ""),
                        quiz.fin) {
                        i.ans && (i.qt == 2 ? (vt = quiz.obj("#qp_main" + i.q + " .qp_ao"),
                            (vt ? vt : h).setAttribute("ans", i.ans)) : h.setAttribute("ans", i.ans),
                            et = quiz.obj("INPUT[name='qp_v" + i.q + "_" + i.cq + "']", 1),
                        et && et.parentNode && et.parentNode.parentNode.setAttribute("ans", i.ans));
                        i.score || (i.score = {
                            max: 0
                        });
                        var f = a
                            , h = i.s == i.score.max ? "y" : i.s > 0 ? "p" : "n"
                            , yt = "";
                        f.tagName == "TBODY" ? (f.score || (f.score = 0),
                        f.max || (f.max = 0),
                            f.score += i.s,
                            f.max += i.score.max,
                            h = f.score == f.max ? "y" : f.score > 0 ? "p" : "n",
                            yt = f.score + " / " + f.max) : yt = i.s + " / " + i.score.max;
                        f.setAttribute("mark", h);
                        f.setAttribute("score", yt);
                        r = f.parentNode;
                        r.tagName == "TABLE" && (r = r.parentNode.parentNode);
                        r.score || (r.score = 0);
                        r.max || (r.max = 0);
                        r.score += i.s;
                        r.max += i.score.max;
                        r.max && (wt = r.score == r.max ? "y" : r.score > 0 ? "p" : "n",
                            r.setAttribute("mark", wt),
                            r.setAttribute("score", r.score + " / " + r.max));
                        w = 0;
                        r.sk || (r.sk = 0);
                        r.qsk || (r.qsk = 0);
                        ot = quiz.logic ? 1 : 0;
                        f && f.getAttribute("skip") + "" == "1" && (ot = 0);
                        switch (i.qt) {
                            case 0:
                            case 1:
                            case 4:
                                r.qsk++;
                                i.a && (i.a[0] == 0 || !i.a.length) && (w = 1,
                                    r.sk++);
                                break;
                            case 2:
                            case 3:
                                r.qsk++;
                                i.t || (w = 1,
                                    r.sk++)
                        }
                        ot && (w && f.setAttribute("skipped", 1),
                            r.setAttribute("skipped", r.sk > 0 && r.sk == r.qsk ? 1 : 0));
                        w && f.setAttribute("noans", 1);
                        r.setAttribute("noans", r.sk > 0 && r.sk == r.qsk ? 1 : 0);
                        i.e && (st = i.e[r.score > 0 ? 0 : 1],
                        st && st != -1 && (v = quiz.obj("#qp_main" + i.q + " .qp-explain"),
                            v ? pt = v.childNodes[0] : (v = quiz.obj("qp_main" + i.q).appendChild(document.createElement("DIV")),
                                v.className = "qp-explain",
                                v.setAttribute("tp", r.score > 0 ? "y" : "n"),
                                v.setAttribute("show", 2),
                                pt = v.appendChild(document.createElement("DIV"))),
                            pt.innerHTML = st));
                        (!w || ot == 0 && !quiz.hideSkipped && w) && (r.score || r.max) && (i.qt != 4 && i.qt != 6 && i.qt != 99 && o.c++,
                            o.t += i.s,
                            o[h == "y" ? "qc" : h == "n" ? "qi" : "qp"]++,
                            o.max += i.score.max)
                    }
                }
            var bt = ""
                , dt = String.fromCharCode(209)
                , gt = String.fromCharCode(166);
            for (f in n.r)
                i = n.r[f],
                i.a && (bt += (bt ? dt : "") + i.q + gt + i.a.join(","));
            quiz.checkLogic(quiz.saveQ("LOGIC"));
            quiz.fin && n.f && (quiz.obj("quiz-progress") && !quiz.autoscore && (quiz.obj("quiz-progress").style.display = "none"),
            quiz.order && n.f != 2 && quiz.order.push(quiz.order.length + 1),
            quiz.forceQC && (o.qc = quiz.forceQC),
            quiz.forceScoreMax && (o.max = quiz.forceScoreMax),
                quiz.score = o,
            quiz.obj("quiz-tscore") && (quiz.obj("quiz-tscore").innerHTML = o.t + " / " + o.max + " (" + Math.round(o.t * 100 / o.max) + "%)",
                quiz.obj("quiz-qc").innerHTML = o.qc + " / " + o.c,
                quiz.obj("quiz-qi").innerHTML = o.qi + " / " + o.c,
                quiz.obj("quiz-qp").innerHTML = o.qp + " / " + o.c,
            o.qp || (quiz.obj("quiz-qp").parentNode.parentNode.style.display = "none")),
            quiz.obj(".qp_scoretotal") && (quiz.obj(".qp_scoretotal").innerHTML = o.t + "/" + o.max));
            quiz.sblock && (n.cq || n.cq == 0) ? (quiz.setWait(0, quiz.cntr),
                quiz.liveWaitQ = n.cq,
                c = quiz.lwAllowMove(y),
                c.m == c.p + 1 ? (c.m = c.p,
                    quiz.tabs.show(c.p, 1),
                    quiz.maxQ = c.p) : (quiz.tabs.show(c.m, 1),
                    quiz.maxQ = c.m),
                c.m > c.p ? quiz.liveWaitNext("A") : c.m == c.p && quiz.liveWaitNext(n.rs == 0 ? "Q" : "A", 1)) : quiz.tabs && (n.f != 2 || t) && (y > quiz.tabs.t.length && (y = quiz.tabs.t.length),
                quiz.order ? quiz.randTab(d) : (quiz.maxQ = y,
                    quiz.tabs.show(y, 1)),
                quiz.tabEmpty("+1"));
            n.f == 2 && (quiz.scrollTo(),
                quiz.setProg());
            quiz.evt("loadResponse", n)
        },
        setProg: function(n, t) {
            var u, i, f, r;
            if (t || quiz.prog) {
                if (t && (quiz.prog = {
                    p: t,
                    c: t.childNodes[0],
                    v: n,
                    max: quiz.tabs.qmax,
                    pt: t.className.indexOf("qp_progn") != -1 ? "n" : "p",
                    pg: [],
                    maxP: quiz.tbox.offsetWidth < 480 ? 4 : 8,
                    startP: 0
                },
                quiz.prog.pt == "n"))
                    for (quiz.prog.pgs = t.childNodes[0].childNodes[0],
                             quiz.prog.pge = t.childNodes[0].childNodes[1],
                             i = 0; i < quiz.tbox.tabs.t.length; i++)
                        i == 0 && quiz.tbox.tabs.t[i].getAttribute("startp") == "1" ? quiz.prog.startP = quiz.tbox.tabs.t[i] : (u = quiz.prog[i < quiz.prog.maxP ? "pgs" : "pge"].appendChild(document.createElement("DIV")),
                            u.className = "qp_progress_page",
                            u.innerHTML = quiz.prog.pg.length + 1,
                            quiz.prog.pg.push(u));
                if (t = quiz.prog,
                    t.v = Math.round(n * 100 / t.max),
                t.v || (t.v = 0),
                t.pt == "p")
                    (n + "" != "undefined" || t.v) && (t.c.style.width = t.v + "%");
                else {
                    var o = 0
                        , l = 0
                        , e = quiz.getOrdP() - 1;
                    for (i = 0; i < t.pg.length; i++) {
                        if (t.pg[i].getAttribute("sel") == "c" && t.pg[i].removeAttribute("sel"),
                            f = "",
                            r = quiz.obj(".qp-subtab-c > DIV[tid='" + quiz.getOrdT(i + 1) + "']"),
                        r.length && (r = r[0]),
                            r) {
                            f = r.getAttribute("mark");
                            var s = (r.getAttribute("score") + "/").split("/")
                                , h = parseInt(s[0])
                                , c = parseInt(s[1]);
                            o += h ? h : 0;
                            l += c ? c : 0
                        }
                        i <= e ? t.pg[i].parentNode == t.pge && t.pge.childNodes.length > 2 && (t.pg[i] = t.pgs.appendChild(t.pg[i])) : t.pg[i].parentNode == t.pgs && t.pgs.childNodes.length > t.maxP && (t.pg[i] = t.pge.insertBefore(t.pg[i], t.pge.childNodes[0]));
                        f && t.pg[i].setAttribute("mark", f)
                    }
                    document.body.getAttribute("startp") != "1" && t.pg[e] && t.pg[e].setAttribute("sel", "c");
                    t.p.getAttribute("n") == "1" && (t.p.setAttribute("n", 2),
                        setTimeout(function() {
                            t.p.getAttribute("n") == "2" && quiz.prog.p.setAttribute("n", 0)
                        }, 1));
                    quiz.obj(".qp_progress_score").innerHTML = o
                }
                (n + "" != "undefined" || t.v) && (t.c.setAttribute("p", t.v),
                    t.p.setAttribute("in", t.p.offsetWidth * t.v / 100 > 30 ? 1 : 0))
            }
        },
        initTabs: function() {
            var i, n, t, o, l, f;
            if (quiz.tabs)
                for (quiz.tabs.qk = [],
                         quiz.tabs.qt = [],
                         quiz.tabs.qmax = 0,
                         i = quiz.tabs.hh = {
                             min: 0,
                             max: 0,
                             minIDX: -1,
                             maxIDX: -1
                         },
                         n = 0; n < quiz.tabs.t.length; n++) {
                    var e = quiz.tabs.t[n].getAttribute("tid")
                        , r = quiz.obj("#quiz-tabs DIV[tid='" + e + "'] .take-q, #quiz-ntabs DIV[tid='" + e + "'] .take-q, #quiz-results DIV[tid='" + e + "'] .take-q, #quiz-tabs DIV[tid='" + e + "'] .quiz-live-start", 3)
                        , s = 0
                        , u = 0
                        , h = 0
                        , c = 0;
                    for (t = 0; t < r.length; t++)
                        r[t].tagName && (o = r[t].getAttribute("qt"),
                        (r[t].className + "").indexOf("take-q") != -1 && o != "6" && o != "99" && o != "98" && (s++,
                            quiz.tabs.qmax++,
                            u = r[t],
                            l = r[t].getAttribute("time"),
                        l && (c += parseFloat(l))),
                        getComputedStyle(r[t]).display != "none" && (h = 1));
                    c && quiz.tabs.t[n].setAttribute("time", c);
                    h || quiz.setTabSkip(quiz.tabs.t[n], 1);
                    s || quiz.tabs.t[n].setAttribute("cont", 1);
                    quiz.tabs.t[n].lastSingle = u && (u.getAttribute("qt") == "0" || u.getAttribute("qt") == "1" && u.getAttribute("fmt") == "2" && u.getAttribute("skip") != "1");
                    h && (f = quiz.tabs.t[n].offsetHeight + (quiz.tabs.t[n].lastSingle ? 0 : 79),
                    f && ((f < i.min || i.min == 0) && (i.min = f,
                        i.minIDX = n),
                    f > i.max && (i.max = f,
                        i.maxIDX = n)));
                    quiz.tabs.qk.push(s);
                    quiz.tabs.qt.push(quiz.tabs.qmax);
                    quiz.tbox.className.indexOf("qp-notab-c") != -1 && (quiz.fromScroll = 1,
                        quiz.setTab(n + 1, 0),
                        quiz.fromScroll = 0);
                    quiz.tabs.t[n].cb = function(n) {
                        return function() {
                            return quiz.setTab(n, 0, 0),
                                !0
                        }
                    }(n + 1)
                }
        },
        setReq: function(n) {
            var i, t, r;
            if (quiz.requires) {
                for (quiz.requiresA || (quiz.requiresK = 0,
                    quiz.requiresA = {},
                    quiz.requiresI = []),
                         i = quiz.requires.split(";"),
                         delete quiz.requires,
                         t = 0; t < i.length; t++)
                    i[t] && (r = quiz.requiresK++,
                        quiz.requiresA["req" + r] = {
                            idx: r,
                            src: i[t],
                            s: 0
                        },
                        quiz.async("req" + r, i[t], function(n, t) {
                            return function() {
                                quiz.requiresA["req" + n].s = 1;
                                t && t()
                            }
                        }(r, n)));
                return !1
            }
            return !0
        },
        checkReq: function() {
            if (quiz.requiresA)
                for (var n in quiz.requiresA)
                    if (!quiz.requiresA[n].s)
                        return !1;
            return !0
        },
        runReq: function() {
            if (quiz.requiresI)
                for (var n = 0; n < quiz.requiresI.length; n++)
                    quiz[quiz.requiresI[n]].init();
            quiz.requiresI = []
        },
        resEvents: function() {
            quiz.addE(".qp_rbtn", "click", function(n) {
                var t = n.className.split(" qp_b")[1]
                    , i = n.parentNode.parentNode.parentNode;
                n.sel = n.sel ? 0 : 1;
                n.setAttribute("sel", n.sel);
                i.setAttribute(t, n.sel);
                t == "sort" && quiz.resSort(i, n)
            }, 1)
        },
        initEvents: function() {
            var n, t, i;
            for (quiz.runReq(),
                     n = quiz.obj(".qp_upload LABEL"),
                 n && !n.length && (n = [n]),
                     t = 0; t < n.length; t++)
                quiz.addE(n[t], ["dragover", "dragleave", "drop"], function(n) {
                    return function(t) {
                        return quiz.fileDrop(t, n)
                    }
                }(n[t]));
            quiz.addE(".take-q INPUT:not([type='radio']):not([type='checkbox']),.take-q SELECT,.take-q TEXTAREA", "change", function(n) {
                var t = n.target ? n.target : n.srcElement, i;
                quiz.checkLogic(quiz.saveQ("LOGIC"), 1);
                i = quiz.checkAdv(t);
                i && quiz.checkMand(t);
                t.value && (quiz.clearErr(),
                t.tagName == "SELECT" && i && quiz.saveQ(i))
            });
            quiz.addE(".take-q INPUT:not([type='radio']):not([type='checkbox']),.take-q TEXTAREA", "keyup", function(n) {
                var t = n.target ? n.target : n.srcElement
                    , i = quiz.checkAdv(t);
                i && (quiz.checkMand(t),
                n.keyCode == 13 && t.tagName == "INPUT" && quiz.saveQ(i))
            });
            quiz.previewCH(0);
            i = quiz.findPos(quiz.cntr).sp;
            i != document.body && (quiz.scrollParent = i);
            quiz.addE(quiz.scrollParent || window, "scroll", quiz.onScroll);
            quiz.addE(quiz.obj("DIV[tid]", 3), "click", function(n) {
                quiz.scrollToTab(n.idx)
            }, 1);
            quiz.addE(".qp_progress_page", "click", function(n) {
                quiz.scrollToTab(quiz.getOrdT(parseInt(n.innerHTML)))
            }, 1);
            quiz.initScrollTabs();
            quiz.resEvents();
            quiz.addE(document.body, "keyup", function(n) {
                var i = n.keyCode, u, r, t;
                !1 && quiz.scrolltabs && i > 64 && i < 91 && (u = quiz.tabs.t[quiz.tabs.idx - 1].getAttribute("tid"),
                    r = quiz.obj("DIV[tid='" + u + "'] .take-q:first-of-type INPUT[type='radio'], DIV[tid='" + u + "'] .take-q:first-of-type INPUT[type='checkbox']", 3),
                r && r[i - 65] && (t = r[i - 65],
                    t.checked && t.type == "checkbox" ? quiz.sel(!1, t, 0) : (quiz.sel(!1, t, 1),
                    t.type == "radio" && quiz.saveQ("+1"))))
            });
            quiz.tabSaved = !1
        },
        resSort: function(n, t) {
            var r, i;
            if (!n.sortk)
                for (n.sortk = quiz.sortk = quiz.sortk ? quiz.sortk + 1 : 1,
                         n.setAttribute("sortk", quiz.sortk),
                         r = ".qp_b[sortk='" + quiz.sortk + "'] .qp_ao ",
                         n.a = quiz.obj(r + " .qp_flexc, " + r + " > .qp_a", 3),
                         n.v = quiz.obj(r + " .qp_rv > DIV", 3),
                         i = 0; i < n.a.length; i++)
                    n.a[i].idx = i,
                        n.a[i].v = parseFloat(n.v[i].innerHTML);
            for (n.a.sort(function(n) {
                return function(t, i) {
                    return n ? t.v == i.v ? 0 : t.v > i.v ? -1 : 1 : t.idx == i.idx ? 0 : t.idx < i.idx ? -1 : 1
                }
            }(t.sel)),
                     i = 0; i < n.a.length; i++)
                n.a[0].parentNode.appendChild(n.a[i])
        },
        initTimer: function() {
            if (quiz.qtimer) {
                if (quiz.timerpg > 1) {
                    if (quiz.getOrdP() < quiz.timerpg)
                        return !1;
                    delete quiz.timerpg
                }
                var n = quiz.startTime(0);
                quiz.checkTime(quiz.qtimer, n, 1);
                clearInterval(quiz.qTMR);
                quiz.qTMR = setInterval(function(n, t) {
                    return function() {
                        quiz.checkTime(n, t)
                    }
                }(quiz.qtimer, n), 333)
            }
        },
        initTarget: function() {
            var n, t;
            if (quiz.frk && (n = quiz.obj("A[rel]:not([target])", 3),
            n && n.length))
                for (t = 0; t < n.length; t++)
                    quiz.addE(n[t], "click", function() {
                        quiz.setWait(1)
                    }),
                        n[t].setAttribute("target", "_top")
        },
        init: function() {
            if (quiz.checkReq() && (quiz.evt("beforeInit"),
                quiz.setReq(quiz.init))) {
                try {
                    performance.now && (quiz.tmrp = (new Date).getTime() - performance.now())
                } catch (n) {}
                (quiz.tmrp || (quiz.tti = (new Date).getTime(),
                    setInterval(function() {
                        quiz.tti += 500;
                        var n = quiz.getTT();
                        Math.abs(n - quiz.tti) > 2e3 ? quiz.ttX = 1 : (quiz.ttX = 0,
                            quiz.tti = n)
                    }, 500)),
                    quiz.tbox = quiz.obj("#quiz-tabs, #quiz-ntabs", 2),
                    quiz.cntr = quiz.obj(".quiz-container"),
                quiz.cntr.length && (quiz.cntr = quiz.cntr[0]),
                quiz.tbox || (quiz.tbox = quiz.obj("quiz-results")),
                    quiz.tbox) && (quiz.tbox.tabs || loadTabs(),
                    quiz.tabs = quiz.tbox.tabs,
                    quiz.cntr.wblock = 1,
                    document.body.wblock = 1,
                !quiz.track && quiz.qsV("t") && (quiz.track = quiz.qsV("t")),
                quiz.cntr && (quiz.acc || quiz.acc == 0) && quiz.cntr.setAttribute("qmaccount", quiz.acc),
                    quiz.initTabs(),
                    quiz.initTarget(),
                    quiz.endInit())
            }
        },
        endInit: function() {
            var f, e, i, t, n, s, r, h, u, c, o;
            if (quiz.setProg(0, quiz.obj("quiz-progress")),
                quiz.defaults) {
                for (f = [],
                         e = 0; e < quiz.defaults.length; e++)
                    i = quiz.defaults[e],
                        t = i.v,
                    t.indexOf("{") != -1 && (t = t.replace(/[\{][\s]*(answer to|score of|percent of|answer [\d]+ to|default [\d])[\s]*[\=][\s]*([^\}]+)[\}]/g, function(n) {
                        n = n.substr(1, n.length - 2).replace(/[\s]*[\=][\s]*/g, "=").replace(/(^[\s]+|[\s]+$)/g, "").split("=");
                        switch (n[0]) {
                            case "default 2":
                                return decodeURIComponent(quiz.qsV(n[1]));
                            case "default 3":
                                return quiz.getProp(window, n[1])
                        }
                        return ""
                    })),
                    t && (f.push({
                        q: i.q,
                        a: [],
                        t: t
                    }),
                    i.h && quiz.between({
                        s: i.q,
                        e: 0,
                        hide: 1
                    }));
                f.length && quiz.loadResponse({
                    r: f
                })
            }
            quiz.initEvents();
            n = quiz.nohash ? "" : document.location.hash;
            n.substr(0, 1) == "#" && (n = n.substr(1));
            switch (n.substr(0, 1)) {
                case "C":
                    quiz.obj("DIV[qid='0'][qt='98']", 1) && (quiz.ucodes = 1,
                        quiz.startp = 1,
                        document.location.hash = "",
                        document.getElementsByName("qp_v0")[0].value = n,
                        quiz.noFocus = 1,
                        quiz.rand ? (quiz.fin && quiz.order ? quiz.randTab(1) : quiz.newOrder(),
                            quiz.setTab(quiz.order[0], 0, 1)) : quiz.setTab(1, 0, 1),
                        delete quiz.noFocus,
                        quiz.saveFirst = 0,
                        quiz.saveQ("+1"));
                case "X":
                    s = n.substr(1);
                    r = s.split("-");
                    quiz.ref == r[2] && r.length == 3 && quiz.showResults(r[0] + "-" + r[1]);
                    break;
                case "R":
                    quiz.resumeH(n);
                    break;
                default:
                    quiz.obj("DIV[qid='0'][qt='98']", 1) ? (quiz.ucodes = 1,
                        quiz.startp = 1) : (quiz.sesK = quiz.sessionKntr(1),
                        quiz.initTimer());
                    quiz.noFocus = 1;
                    quiz.rand ? (quiz.fin && quiz.order ? quiz.randTab(1) : quiz.newOrder(),
                        quiz.setTab(quiz.order[0], 0, 1)) : quiz.setTab(1, 0, 1);
                    /(maker|supersurvey|quizwiz)[\.]com[\/]results(Q[\w\d]+|[\d]+[\-][\w\d\-]+)/.test(document.location + "") || quiz.tabEmpty("+1");
                    delete quiz.noFocus
            }
            quiz.srid;
            h = quiz.qsV("fr", "?" + document.location.hash.substr(1));
            h && (quiz.frk = quiz.qsV("frk", "?" + document.location.hash.substr(1)),
                quiz.embed = !0,
                document.body.setAttribute("fr", 1),
                quiz.addE(window, "message", function(n) {
                    if ((n.data + " ").substr(0, 1) == "{") {
                        var t = JSON.parse(n.data);
                        switch (t.act) {
                            case "wait":
                                setWait(t.s);
                                break;
                            case "op":
                                document.body.setAttribute("op", t.op);
                                quiz.addCSS("BODY[op]:after", "opacity:" + (1 - t.op) + "!important");
                                break;
                            case "hfin":
                                quiz.isResize = 0
                        }
                    }
                }),
                quiz.postSize = function() {
                    var t, r, u, i;
                    if (!quiz.isResize) {
                        t = quiz.obj("content").offsetHeight;
                        r = getComputedStyle(document.body);
                        t += parseFloat(r.paddingTop) + parseFloat(r.paddingBottom);
                        u = quiz.obj("DIV.sel", 1);
                        i = 0;
                        u && (i = u.offsetHeight);
                        var n = {
                            qid: "Q" + quiz.ref,
                            k: parseInt(quiz.frk),
                            act: "height"
                        }
                            , f = 0
                            , e = quiz.obj(".qp_bo", 1)
                            , o = quiz.obj(".qp_progress", 1);
                        e && (f = e.offsetHeight - (o ? o.offsetHeight : 0));
                        n.h = t;
                        quiz.tabs.hh ? (n.tmax = t - (i + f) + quiz.tabs.hh.max,
                            n.tmin = t - i + quiz.tabs.hh.min) : (n.tmax = t,
                            n.tmin = t);
                        n.th = i;
                        n.bh = f;
                        n.otmax = n.tmax;
                        quiz.postR = n;
                        (!n.tmax || n.tmax < t) && (n.tmax = t);
                        n.h && (quiz.isResize = 1,
                            parent.window.postMessage(JSON.stringify(n), "*"))
                    }
                }
                ,
                quiz.addE(window, "resize", quiz.postSize),
                quiz.postSize(),
                quiz.addCB("Next", function() {
                    document.body.style.cssText += "overflow:hidden!important";
                    setTimeout(function() {
                        quiz.postSize();
                        document.body.style.overflow = ""
                    }, 100)
                }),
                quiz.addCB("Back", function() {
                    document.body.style.cssText += "overflow:hidden!important";
                    setTimeout(function() {
                        quiz.postSize();
                        document.body.style.overflow = ""
                    }, 100)
                }),
                quiz.addCB("afterResults", function() {
                    setTimeout(quiz.postSize, 300)
                }),
                parent.window.postMessage('{"qid":"Q' + quiz.ref + '","k":' + quiz.frk + ',"act":"init"}', "*"));
            quiz.lkem && (u = quiz.obj(".qp_container", 2),
            u && (c = getComputedStyle(u).maxWidth,
                o = document.createElement("DIV"),
                o.className = "qp_verify_ex",
                o.innerHTML = "<div style='max-width:" + c + ";'><div><div em=\"" + quiz.lkem + '"><\/div><div class=\'qp_verify_exx\' onClick="quiz.clearVerify()"><\/div><\/div><\/div>',
                quiz.lkDom = u.parentNode.appendChild(o)),
                quiz.runCB("verify-saved", u));
            quiz.runCB("afterInit");
            document.body.getAttribute("p") == "quiz-results" && quiz.runCB("afterResults")
        },
        clearVerify: function() {
            delete quiz.lkem;
            delete quiz.lk;
            quiz.lkDom && quiz.lkDom.parentNode.removeChild(quiz.lkDom);
            xSend("LMS.Logout", "", function() {})
        },
        resumeH: function(n, t) {
            var i, r;
            (t || !quiz.obj("quiz-login")) && (i = n.substr(1),
                quiz.srid = "",
                r = i.split("-"),
                typeof qz == "object" && quiz.embed && r.length == 3 ? qz.results("Q" + r[2], r[0] + "-" + r[1]) : i != quiz.rid && quiz.ref && (quiz.setWait(1),
                    quiz.xSend("Quiz.Load_Response " + i + "-" + quiz.ref + (quiz.autoscore ? "-2" : ""), 0, function(n) {
                        return function(t) {
                            if (quiz.setWait(0),
                            t.substr(0, 1) == "{") {
                                if (resp = JSON.parse(t),
                                    resp) {
                                    if (resp.f == 1) {
                                        quiz.nohash || (document.location.hash = "");
                                        quiz.setWait(1);
                                        document.location.reload();
                                        return
                                    }
                                    quiz.rid = n;
                                    quiz.sesK = quiz.sessionKntr();
                                    quiz.loadResponse(resp, 1);
                                    quiz.initTimer()
                                }
                            } else
                                quiz.msg("Unable to load response, please start again")
                        }
                    }(i))))
        },
        previewCH: function(n) {
            if (quiz.ref == "PREVIEW")
                try {
                    quiz.doc = document;
                    top.document.previewChange(quiz, window.frameElement, n)
                } catch (t) {}
        },
        getTT: function() {
            return quiz.tmrp ? Math.round(quiz.tmrp + performance.now()) : quiz.ttX ? quiz.tti : (new Date).getTime()
        }
    };
    for (n in iquiz)
        quiz[n] = iquiz[n],
            delete iquiz;
    gcpCallback = function() {
        quiz.gcpStart()
    }
    ;
    document && "loaded;interactive;complete".indexOf(document.readyState) != -1 ? quiz.init() : quiz.addE(document, "DOMContentLoaded", function() {
        quiz.init()
    });
    Fingerprint = function(n) {
        var t, i;
        t = Array.prototype.forEach;
        i = Array.prototype.map;
        this.each = function(n, i, r) {
            var u, e, f;
            if (n !== null)
                if (t && n.forEach === t)
                    n.forEach(i, r);
                else if (n.length === +n.length) {
                    for (u = 0,
                             e = n.length; u < e; u++)
                        if (i.call(r, n[u], u, n) === {})
                            return
                } else
                    for (f in n)
                        if (n.hasOwnProperty(f) && i.call(r, n[f], f, n) === {})
                            return
        }
        ;
        this.map = function(n, t, r) {
            var u = [];
            return n == null ? u : i && n.map === i ? n.map(t, r) : (this.each(n, function(n, i, f) {
                u[u.length] = t.call(r, n, i, f)
            }),
                u)
        }
        ;
        typeof n == "object" ? (this.hasher = n.hasher,
            this.screen_resolution = n.screen_resolution,
            this.screen_orientation = n.screen_orientation,
            this.canvas = n.canvas,
            this.ie_activex = n.ie_activex) : typeof n == "function" && (this.hasher = n)
    }
    ;
    Fingerprint.prototype = {
        get: function() {
            var n = [], t;
            return n.push(navigator.userAgent),
                n.push(navigator.language),
                n.push(screen.colorDepth),
            this.screen_resolution && (t = this.getScreenResolution(),
            typeof t != "undefined" && n.push(this.getScreenResolution().join("x"))),
                n.push((new Date).getTimezoneOffset()),
                n.push(this.hasSessionStorage()),
                n.push(this.hasLocalStorage()),
                n.push(!!window.indexedDB),
                document.body ? n.push(typeof document.body.addBehavior) : n.push(typeof undefined),
                n.push(typeof window.openDatabase),
                n.push(navigator.cpuClass),
                n.push(navigator.platform),
                n.push(navigator.doNotTrack),
                n.push(this.getPluginsString()),
            this.canvas && this.isCanvasSupported() && n.push(this.getCanvasFingerprint()),
                this.hasher ? this.hasher(n.join("###"), 31) : this.murmurhash3_32_gc(n.join("###"), 31)
        },
        murmurhash3_32_gc: function(n, t) {
            var o, h, r, s, f, e, i, u;
            for (o = n.length & 3,
                     h = n.length - o,
                     r = t,
                     f = 3432918353,
                     e = 461845907,
                     u = 0; u < h; )
                i = n.charCodeAt(u) & 255 | (n.charCodeAt(++u) & 255) << 8 | (n.charCodeAt(++u) & 255) << 16 | (n.charCodeAt(++u) & 255) << 24,
                    ++u,
                    i = (i & 65535) * f + (((i >>> 16) * f & 65535) << 16) & 4294967295,
                    i = i << 15 | i >>> 17,
                    i = (i & 65535) * e + (((i >>> 16) * e & 65535) << 16) & 4294967295,
                    r ^= i,
                    r = r << 13 | r >>> 19,
                    s = (r & 65535) * 5 + (((r >>> 16) * 5 & 65535) << 16) & 4294967295,
                    r = (s & 65535) + 27492 + (((s >>> 16) + 58964 & 65535) << 16);
            i = 0;
            switch (o) {
                case 3:
                    i ^= (n.charCodeAt(u + 2) & 255) << 16;
                case 2:
                    i ^= (n.charCodeAt(u + 1) & 255) << 8;
                case 1:
                    i ^= n.charCodeAt(u) & 255;
                    i = (i & 65535) * f + (((i >>> 16) * f & 65535) << 16) & 4294967295;
                    i = i << 15 | i >>> 17;
                    i = (i & 65535) * e + (((i >>> 16) * e & 65535) << 16) & 4294967295;
                    r ^= i
            }
            return r ^= n.length,
                r ^= r >>> 16,
                r = (r & 65535) * 2246822507 + (((r >>> 16) * 2246822507 & 65535) << 16) & 4294967295,
                r ^= r >>> 13,
                r = (r & 65535) * 3266489909 + (((r >>> 16) * 3266489909 & 65535) << 16) & 4294967295,
                r ^= r >>> 16,
            r >>> 0
        },
        hasLocalStorage: function() {
            try {
                return !!window.localStorage
            } catch (n) {
                return !0
            }
        },
        hasSessionStorage: function() {
            try {
                return !!window.sessionStorage
            } catch (n) {
                return !0
            }
        },
        isCanvasSupported: function() {
            var n = document.createElement("canvas");
            return !!(n.getContext && n.getContext("2d"))
        },
        isIE: function() {
            return navigator.appName === "Microsoft Internet Explorer" ? !0 : navigator.appName === "Netscape" && /Trident/.test(navigator.userAgent) ? !0 : !1
        },
        getPluginsString: function() {
            return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
        },
        getRegularPluginsString: function() {
            return this.map(navigator.plugins, function(n) {
                var t = this.map(n, function(n) {
                    return [n.type, n.suffixes].join("~")
                }).join(",");
                return [n.name, n.description, t].join("::")
            }, this).join(";")
        },
        getIEPluginsString: function() {
            if (window.ActiveXObject)
                return this.map(["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"], function(n) {
                    try {
                        return new ActiveXObject(n),
                            n
                    } catch (t) {
                        return null
                    }
                }).join(";");
            return ""
        },
        getScreenResolution: function() {
            return this.screen_orientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width]
        },
        getCanvasFingerprint: function() {
            var t = document.createElement("canvas")
                , n = t.getContext("2d")
                , i = "http://valve.github.io";
            return n.textBaseline = "top",
                n.font = "14px 'Arial'",
                n.textBaseline = "alphabetic",
                n.fillStyle = "#f60",
                n.fillRect(125, 1, 62, 20),
                n.fillStyle = "#069",
                n.fillText(i, 2, 15),
                n.fillStyle = "rgba(102, 204, 0, 0.7)",
                n.fillText(i, 4, 17),
                t.toDataURL()
        }
    };
    function getIPs(n) {
        var i, o, u, t;
        try {
            var f = {}
                , r = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection
                , e = !!window.webkitRTCPeerConnection;
            r || (i = iframe.contentWindow,
                r = i.RTCPeerConnection || i.mozRTCPeerConnection || i.webkitRTCPeerConnection,
                e = !!i.webkitRTCPeerConnection);
            o = {
                optional: [{
                    RtpDataChannels: !0
                }]
            };
            u = undefined;
            e && (u = {
                iceServers: [{
                    urls: "stun:stun.services.mozilla.com"
                }]
            });
            t = new r(u,o);
            hCand = function(t) {
                try {
                    var i = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(t)[1]
                } catch (r) {}
                i && (/(10|192|172)\.[\d]+\.[\d]+\.[\d]+/.test(i) || (f[i] === undefined && n(i),
                    f[i] = !0))
            }
            ;
            t.onicecandidate = function(n) {
                n.candidate && hCand(n.candidate.candidate)
            }
            ;
            t.createDataChannel("");
            t.createOffer(function(n) {
                t.setLocalDescription(n, function() {}, function() {})
            }, function() {});
            setTimeout(function() {
                if (t.localDescription) {
                    var n = t.localDescription.sdp.split("\n");
                    n.forEach(function(n) {
                        n.indexOf("a=candidate:") === 0 && hCand(n)
                    })
                }
            }, 1e3)
        } catch (s) {}
    }
    getIPs(function(n) {
        n && (document.ip2 + "").indexOf(n) == -1 && (document.ip2 = (document.ip2 ? document.ip2 + "," : "") + n)
    })
}
qzfb = {
    obj: function(n, t) {
        return document.qzScript ? qz.obj(n, t) : obj(n, t)
    },
    addE: function(n, t, i) {
        return document.qzScript ? qz.addE(n, t, i) : attachE(n, t, i)
    },
    xSend: function(n, t, i) {
        return document.qzScript ? qz.xSend(n, t, i) : xSend(n, t, i)
    }
};
window.fbAsyncInit = function() {
    var i = {
        "poll-maker": "463067627146096",
        "quiz-maker": "463067627146096",
        "survey-maker": "273935076403776",
        supersurvey: "273935076403776",
        mychallengetribe: "1447460432175374",
        "clashofclans-tools": "518538828247675",
        doquizzes: "896617837121051",
        doriddles: "106106623151747",
        quotestoknow: "541389202715380",
        myiqtested: "146960112378159"
    }, t = i[(document.location + "").split(".")[1].toLowerCase()], n;
    if (t == "518538828247675" && document.location.pathname == "/embed-test.asp" && (t = 0),
    t || (t = i["poll-maker"]),
        FB.init({
            appId: t,
            cookie: !0,
            xfbml: !0,
            frictionlessRequests: !0,
            version: "v12.0"
        }),
    document.fbCB && document.fbCB !== 1)
        for (n = 0; n < document.fbCB.length; n++)
            document.fbCB[n] && typeof document.fbCB[n] == "function" && document.fbCB[n]();
    document.fbCB = 1
}
;
document && "loaded;interactive;complete".indexOf(document.readyState) != -1 ? loadFB() : qzfb.addE(document, "DOMContentLoaded", function() {
    document.qzScript || loadFB()
})
