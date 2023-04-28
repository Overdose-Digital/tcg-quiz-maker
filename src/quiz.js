function quizWidget($) {
    var config = $('[data-quiz-config]').data('quizConfig');

    var quizWidgetObject = {
        options: {
            mobileBreakpoint: 768,
            getStartedButtonClass: 'quiz-widget__get-started-button',
            getStartedContainerClass: 'quiz-widget__get-started',
            getStartedText: config.getStartedText || 'Not sure which bed you need? Take our quick Sleep Selector quiz and we\'ll recommend the right bed for you.',
            quizTabs: '#quiz-tabs',
            questionTitle: '.qp_qi',
            questionPicture: '.qp_pic',
            learnMoreClass: 'quiz-widget__learn-more',
            quizResults: '#quiz-results',
            quizContainer: '.quiz-container',
            quizWrapper: '.quiz-widget__wrapper',
            progressBarWrapperClass: 'quiz-widget__progress-bar-wrapper',
            progressBar: '.quiz-widget__progress-bar',
            progressLine: '.quiz-widget__progress-line',
            progressBarItems: '.quiz-widget__progress-bar-item',
            leadsDataStorageKey: 'leads-data',
            formQuestionsClass: 'quiz-widget__send-results-questions',
            formWrapperClass: 'quiz-widget__send-results-wrapper',
            formSubmitButtonClass: 'quiz-widget__send-results-submit',
            formCloseButtonClass: 'quiz-widget__send-results-close',
            solutionLinksTrigger: '.quiz-widget__solution-links__trigger, .quiz-widget__solution-links__close',
            solutionLinksWrapper: '.quiz-widget__solution-links__wrapper',
            solutionLink: '.quiz-widget__solution-link',
            solutionShift: '.quiz-widget__solution-shift',
            reviewsPageSwitcher: '.reviews-page__switch-page',
            leadGenPlaceholder: config.leadGenPlaceholder || 'Tell us in 300 characters or less why you should win and what you would buy with the $5000 Prezzee Gift Card.'
        },

        _loadQuiz: function () {
            var self = this;

            qz.setKey(config.publicKey);

            qz.load({
                quiz: config.quizId,
                parent: config.quizParent,
                onCreate: function (quizData) {
                    self.questions = quizData.schema.questions;
                    quiz.scrollTo = ()=>{};
                    quiz.xSend = function (n, t, i) {
                        var isLeads = !!n && !!n.d && $('#quiz-ntabs').length > 0;
                        isLeads && self._setLeadsDataToStorage(n);
                        return document.qzScript ? qz.xSend(n, t, i) : xSend(n, t, i);
                    };

                    quiz.setErr = function(n, t) {
                        var i = quiz.obj(".take-q[qid='" + n + "']", 2), r;
                        i && (quiz.scrolltabs ? quiz.scrollToTab(i.parentNode.idx) : (r = quiz.tbox.style,
                            r.overflow = "visible",
                            r.overflow = ""),
                            i.setAttribute("err", 1),
                        quiz.msgL[0] && quiz.obj(".take-q[qid='" + n + "'] > SPAN:last-of-type", 2).setAttribute("emsg", quiz.msgL[0]),
                        t && t.focus && t.focus())
                    }

                    self._init();
                }
            });
        },

        _buildLoadEmailMeResultsPopup: function () {
            var data = localStorage.getItem(this.options.leadsDataStorageKey);
            var object = data && JSON.parse(data);

            if (!object) {
                return;
            }

            this.leadsObject = object;

            var questions = this._getLeadsQuestions(object.d);
            var questinsHtml = '';

            $.each(questions, function (i, question) {
                console.log(question.question);
                if(
                    question.question.includes('terms-and-conditions') ||
                    question.question.includes('Terms and Conditions') ||
                    question.question.includes('Tell us')
                ) {
                    return;
                }

                var type = 'text';

                if (question.format === 'Email') {
                    type = 'email';
                }

                if (question.format === 'Number') {
                    type = 'number';
                }

                if (question.type === 'Checkboxes') {
                    type = 'checkbox';
                }

                var isCheckbox = type === 'checkbox';
                var label = isCheckbox ? '<label for="' + question.id + '">' + question.question + '</label>' : ''
                var placeholder = isCheckbox ? '' : question.question;
                var controlClass = isCheckbox ? 'quiz-widget__send-results-question-control  checkbox' : 'quiz-widget__send-results-question-control';
                var questionClass = isCheckbox ? 'quiz-widget__send-results-question  checkbox' : 'quiz-widget__send-results-question';

                questinsHtml +=
                    '<div class="' + questionClass + '" data-id="' + question.id + '">' +
                    '<div class="' + controlClass + '">' +
                    '<input id="' + question.id + '" type="' + type + '" placeholder="' + placeholder + '">' +
                    '</div>' +
                    label +
                    '</div>';
            });

            var formHtml = $('' +
                '<div class="' + this.options.formWrapperClass + '" style="display: none">' +
                '<div class="quiz-widget__send-results">' +
                '<button class="' + this.options.formCloseButtonClass + '"></button>' +
                '<div class="quiz-widget__send-results-title">Get your results in your inbox</div>' +
                '<div class="quiz-widget__send-results-subtitle">Thanks for completing the Sleep Selector. Enter in your details below and we’ll email you your results straight to your inbox.</div>' +
                '<div class="' + this.options.formQuestionsClass + '">' + questinsHtml + '</div>' +
                '<button class="' + this.options.formSubmitButtonClass + '">submit</button>' +
                '</div>' +
                '</div>' +
                '');


            $('#quiz').append(formHtml);
            var el = $('input[placeholder="Lead Capture Form Flag"]');
            if (el.length) {
                el.parent().parent().hide();
                el.val('resultform');
            }
        },

        _sendForm: function () {
            var options = this.options;
            var questions = $('.' + options.formQuestionsClass + ' [data-id]');

            if (!this._validateForm(questions)) {
                return;
            }

            var decodedJson = this.decodedJson;

            decodedJson.ans = decodedJson.ans.split('Ñ')[0];

            $.each(questions, function (i, q) {
                var question = $(q);
                var id = question.data('id');
                var input = question.find('input');
                var type = input.attr('type');
                var isCheckbox = type === 'checkbox';
                var value = input.val();
                var queryString = '';

                if (isCheckbox) {
                    var isChecked = input.is(':checked')
                    value = isChecked ? '1' : '';

                    queryString = 'Ñ' + id + '¦' + value + '¦';
                } else {
                    queryString = 'Ñ' + id + '¦' + '999' + '¦' + value;
                }

                decodedJson.ans += queryString;
            }.bind(this));


            var str = [];

            for (var p in decodedJson) {
                if (decodedJson.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(decodedJson[p]));
                }
            }

            var queryString = str.join("&");

            this._sendRequest(queryString).then(function () {
                this._triggerFormVisibility(false);
            }.bind(this), function (error) {
                console.error(error)
                this._triggerFormVisibility(false);
            }.bind(this));
        },

        _sendRequest: async function (queryString) {
            let send = await quiz.xSend({
                s: this.leadsObject.s,
                d: queryString,
                cb: quiz.gcpCB,
                noLog: 1
            });

            return await send;
        },

        _validateForm: function (questions) {
            var isValid = true;
            var errorMessage = 'Incorrect form input';

            $.each(questions, function (i, q) {
                var question = $(q);
                var id = question.data('id');
                var input = question.find('input');
                var type = input.attr('type');
                var isEmail = type === 'email';
                var isCheckbox = type === 'checkbox';
                var value = input.val();

                errorMessage = '';

                if(+id === 12748425) {
                    return true
                }

                if(+id === 13709975) {
                    return true
                }

                if(isEmail) {
                    errorMessage = 'Please provide correct email address';
                }else {
                    if(isCheckbox) {
                        errorMessage = 'please select: ' + this.questions['Q' + id].question;
                    }else {
                        errorMessage = this.questions['Q' + id].question + ' is required';
                    }
                }

                if (isCheckbox) {
                    isValid = !!input.is(':checked');

                    return isValid;
                } else {
                    if (isEmail) {
                        isValid = /(.+)@(.+){2,}\.(.+){2,}/.test(value);

                        return isValid;
                    } else {
                        isValid = !!value;

                        return isValid;
                    }
                }
            }.bind(this))

            !isValid && quiz.msg(errorMessage);

            return isValid;
        },

        _getLeadsQuestions: function (data) {
            this.decodedJson = JSON.parse('{"' + decodeURI(data).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
            var questions = this.decodedJson.ans;

            return questions.split('Ñ').filter(function (question) {
                var questionData = question.split('¦');

                return questionData.length > 1 && questionData
            }).map(function (question) {
                var questionData = question.split('¦');
                var questionId = 'Q' + questionData[0];
                var questionFromSchema = this.questions[questionId];
                questionFromSchema.savedAnswer = questionData[2];
                questionFromSchema.id = questionData[0];

                return questionFromSchema;
            }.bind(this))
        },

        _setLeadsDataToStorage: function (data) {
            localStorage.setItem(this.options.leadsDataStorageKey, JSON.stringify(data));
        },

        _create: function () {
            var publicKey = config.publicKey;

            if (publicKey && config.quizParent && config.quizId) {
                this._loadQuiz();

                quiz.addCB('afterResults', function () {
                    this._processLeads();
                    if (this.quizTime) {
                        clearTimeout(this.quizTime);

                        this.quizTime = null;
                    }

                    $(this.options.quizContainer).toggleClass('results', this._isResultsStep())
                    this._triggerProgressBarVisibility(false);
                    this._removeBaseStyles();

                    if (this._isResultsStep()) {
                        this._fixTitle()
                        this._buildLoadEmailMeResultsPopup();
                        this._loadReviews();
                        this.pushFormDataToDataLayer();
                        !localStorage.getItem('reloadedresults') && $("html, body").animate({ scrollTop: 0 }, 'fast');
                        localStorage.setItem('reloadedresults', true);
                    } else {
                        localStorage.removeItem('reloadedresults');
                    }
                }.bind(this));

                quiz.addCB('Next', function (question) {
                    this._updateProgressBar(question.frompage + 1);
                }.bind(this));

                quiz.addCB('Back', function (question) {
                    this._updateProgressBar(question.frompage - 1);
                }.bind(this));
            }
        },

        _fixTitle: function () {
            const $feel = $('.quiz-widget__solution-sub-heading[data-subtitle="feel"]');
            const $size = $('.quiz-widget__solution-sub-heading[data-subtitle="size"]');

            const feelText = $feel.text().toLowerCase()
                .replaceAll('it varies', 'medium');

            if($feel.text().trim() === 'Feel:' || $feel.text().toLowerCase().includes('not sure')) {
                $feel.remove();
            } else {
                $feel.text(feelText);
            }

            if($size.text().trim() === 'Size:' || $size.text().toLowerCase().includes('not sure')) {
                $size.remove();
            }
        },

        digestMessage: async function (message) {
            const msgUint8 = new TextEncoder().encode(message);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
            const hashArray = Array.from(new Uint8Array(hashBuffer));

            return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
        },

        pushFormDataToDataLayer: async function () {
            window.dataLayer.push({
                'event': 'completed_sleep_selector',
                'sleep_selector_recommendation': $('.quiz-widget__solution-heading').text(),
            });

            var qzData = window.qz.data[Object.keys(window.qz.data)[0]].qObj.schema.questions;

            var isFormSent = Object.keys(qzData).filter((item)=>{
                const q = qzData[item];
                return q.question === 'Email address' && q.savedAnswer
            }).length > 0

            if(!isFormSent) {
                window.dataLayer.push({
                    'event': 'skipped_competition_form'
                });

                return;
            }

            var dataLayer = {
                'event': 'submitted_competition_form',
            }

            for (var i in Object.values(qzData)) {
                var q = Object.values(qzData)[i];
                var answer = q && q.savedAnswer && q.savedAnswer.trim() ? q.savedAnswer : '';

                switch (q.question)
                {
                    case 'First name':
                        dataLayer.first_name = answer;
                        dataLayer.fn = answer ? await this.digestMessage(answer): ''
                    case 'Last name':
                        dataLayer.last_name = answer;
                        dataLayer.ln = answer? await this.digestMessage(answer): ''
                    case 'Email address':
                        dataLayer.email = decodeURIComponent(answer);
                        dataLayer.em = answer? await this.digestMessage(answer): ''
                    case 'Phone number':
                        var phone =  answer.replace(/[^\d\+]/g,"");

                        dataLayer.phone = phone;
                        dataLayer.ph = phone? await this.digestMessage(phone): '';

                }

                if(q.question && q.question.indexOf('tips') !== -1 ) {
                    dataLayer.email_optin = !!q.answers[0].answer
                }
            }

            window.dataLayer.push(dataLayer);
        },

        getSelectedQuestionData: function (fromPage) {
            var questionIndex = fromPage - 1
            var questionsNodes = $(this.options.quizTabs + '> div');
            var totalQuestionsCount = questionsNodes.length;
            var questionNode = questionsNodes.eq(questionIndex);
            var questionText = questionNode.find('.qp_qi > div').eq(0).text();
            var selectedAnswerNode = questionNode.find('[sel=1]');
            var answerIndex = selectedAnswerNode.parents('.qp_flexc').index();
            var answerText = selectedAnswerNode.find('.qp_t').text();

            return {
                'event': 'answered_sleep_selector',
                'sleep_selector_step': `Question ${fromPage} of ${totalQuestionsCount}`,
                'sleep_selector_question': questionText,
                'sleep_selector_answer': answerText,
            }
        },

        _loadReviews: function () {
            if (!config.reviewsPublicKey) {
                return
            }

            var e = document.createElement('script');
            (e.type = "text/javascript"), (e.async = !0), (e.src = '//staticw2.yotpo.com/' + config.reviewsPublicKey + '/widget.js');
            var t = document.getElementsByTagName('script')[0];
            t.parentNode.insertBefore(e, t);
        },

        _processLeads: function () {
            var leads = $('#quiz-ntabs');

            if (leads.length) {
                this._processFlagLeadFormData();
                this._replacePlaceholders();
                this._replaceButtons();
                this._setEventListenersOnLeads();
            }
        },

        _setEventListenersOnLeads: function () {
            $('textarea[maxlength]').on('keyup', function () {
                const maxSymbols = +$(this).attr('maxlength');
                const symbolsCount = this.value.length;

                if(maxSymbols && symbolsCount >= maxSymbols) {
                    quiz.msg(`Maximum characters length is ${maxSymbols}`);
                }
            });
        },

        _processFlagLeadFormData: function () {
            var questionTitle = $('#quiz-ntabs').find(this.options.questionTitle);
            var el = null;
            $.each(questionTitle, function( index, value ) {
                if ($(value).text() == 'Lead Capture Form Flag') {
                    var parentEl = $(value).parent().parent();
                    parentEl.hide();
                    el = parentEl.find( "input" );
                    if (el.length) {
                        el.attr('flagleadform', 1);
                        el.val('leadform')
                    }
                }
            });
        },

        _replacePlaceholders: function () {
            var placeholders = [
                {old: 'Enter number here', new: 'Phone number'},
                {old: 'First Name', new: 'First name'},
                {old: 'Last Name', new: 'Last name'},
                {old: 'Email', new: 'Email address'},
                {old: 'Enter text here', new: this.options.leadGenPlaceholder, maxlength: '300'}
            ]

            for (var i in placeholders) {
                var placeholder = placeholders[i];
                var el = $('input[placeholder="' + placeholder.old + '"], textarea[placeholder="' + placeholder.old + '"]');

                el.length && el.attr('placeholder', placeholder.new);
                el.length && placeholder.maxlength && el.attr('maxlength', placeholder.maxlength);
            }
        },

        _replaceButtons: function () {
            $('#quiz-end input').val('Submit');
            $('#quiz-skip input').val('No thanks, show me my results');
        },

        _updateProgressBar: function (index) {
            var tabs = this._getTabs();
            var activeClass = 'active';
            var currentIndex = index || +(tabs.siblings('.sel').attr('tid'));
            var tabIndex = +tabs.eq(currentIndex - 1).attr('data-index');
            var progressBarItems = $(this.options.progressBarItems);
            var percents = ((tabIndex - 1) / +progressBarItems.length) * 100;

            $(this.options.progressLine).css({
                width: percents + '%'
            });

            progressBarItems.removeClass(activeClass);

            var activeItem = $(this.options.progressBarItems + '[data-index="'+ tabIndex +'"]');
            var offset = activeItem.offset();
            activeItem.addClass(activeClass);

            offset && $(this.options.progressBar).stop().animate({scrollLeft: offset.left - 20}, 500);
        },

        _isResultsStep: function () {
            return $(this.options.quizResults).length > 0;
        },

        _init: function () {
            this._prepareWidget();
            this._initEvents();
        },


        _prepareWidget: function () {
            this._applyStyles();

            if (this._isQuizInProgress()) {
                this._beginQuiz();
            } else {
                this._createGetStarted();
                this._updateQuestionsHtml();
            }
        },

        _isQuizInProgress: function () {
            var quizIdShort = config.quizId.substring(1);
            var hash = window.location.hash;

            return hash.indexOf(quizIdShort) !== -1;
        },

        _applyStyles: function () {
            var styles = config.styles;
            this._removeBaseStyles();

            if (styles) {
                var link = $("<link/>", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: styles,
                });

                link.on('load', function () {
                    this._triggerQuizWrapperVisibility(true);
                }.bind(this));

                link.appendTo(this._getWrapper());
            } else {
                this._triggerQuizWrapperVisibility(true);
            }
        },

        _removeBaseStyles: function () {
            var baseStyles = this._getParent().find('link');

            baseStyles.remove();
            $('.qp_quiz').attr('style', '');
        },

        _getParent: function () {
            return $('#' + config.quizParent);
        },

        _getWrapper: function () {
            return $('.' + config.quizWrapper);
        },

        _getTabs: function () {
            return $(this.options.quizTabs + '>div');
        },

        _gatTabsFilteredLength: function () {
            var $tabs = this._getTabs();
            var options = this.options;
            var tabsLength = 0;

            $.each($tabs, function (i, tab) {
                var $tab = $(tab);
                var $prevTab = $tab.prev();
                var $questionTitle = $tab.find(options.questionTitle);
                var $dataTag = $questionTitle.find('code');
                var progressBarItemText = $dataTag.data('progressbar');
                var sameTab = $prevTab.length && $prevTab.find(options.questionTitle + ' code[data-progressbar='+ progressBarItemText +']' ).length > 0;

                if(!sameTab) {
                    tabsLength++;
                }

                this._setTabIndex($tab, tabsLength);
            }.bind(this));

            return tabsLength;
        },

        _setTabIndex: function ($tab, tabsLength) {
            $tab.attr('data-index', tabsLength);
        },

        _updateQuestionsHtml: function () {
            var quizTabs = this._getTabs();
            var options = this.options;
            var tabsLength = this._gatTabsFilteredLength();

            if(!tabsLength) {
                return;
            }

            var progressBarHtml = $(
                '<div style="display: none" class="' + options.progressBarWrapperClass + '">' +
                '<div class="quiz-widget__progress-line-wrapper">' +
                '<div class="quiz-widget__progress-line"></div>' +
                '</div>' +
                '<div class="quiz-widget__progress-bar">' +
                '</div>' +
                '</div>'
            );

            $.each(quizTabs, function (i, tab) {
                var $tab = $(tab);
                var questionTitle = $tab.find(options.questionTitle);
                var dataTag = questionTitle.find('code');
                var learnMoreTitle = dataTag.data('title');
                var learnMoreText = dataTag.data('text');
                var progressBarItemText = dataTag.data('progressbar');
                var questionIndex = $tab.data('index');
                var questionIndexOfTotal = $('<div class="quiz-widget__question-index-of-total-text">' + 'Question ' + questionIndex + ' of ' + tabsLength + '</div>');
                var learnMorePicture = $tab.find(options.questionPicture);
                var learnMorePictureBackground = learnMorePicture.css('background-image');
                var learnMoreOpen = $('<button class="quiz-widget__learn-more-open"></button>');
                var learnMoreClose = $('<button class="quiz-widget__learn-more-close"></button>');
                var holderClass = 'quiz-widget__learn-more-holder';

                var learnMoreHtml = $(
                    '<div style="display: none" class=' + this.options.learnMoreClass + '>' +
                    '<div class="' + holderClass + '">' +
                    '<div class="quiz-widget__learn-more-column quiz-widget__learn-more-column--info">' +
                    '<h3>' + learnMoreTitle + '</h3>' +
                    '<div class="quiz-widget__learn-more-text">' + learnMoreText + '</div>' +
                    '</div>' +

                    '<div class="quiz-widget__learn-more-column quiz-widget__learn-more-column--image">' +
                    '<div class="quiz-widget__learn-more-image"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                );

                learnMorePicture.remove();

                learnMoreHtml.find('.' + holderClass).append(learnMoreClose);
                questionTitle.find('>div:first-child').append(learnMoreOpen);
                questionIndexOfTotal.insertBefore(questionTitle);
                $tab.append(learnMoreHtml);

                if(progressBarItemText && progressBarHtml) {
                    var isAlreadyExist = progressBarHtml.find('[data-index="'+ questionIndex +'"]').length > 0;

                    !isAlreadyExist && progressBarHtml.find('.quiz-widget__progress-bar').append('<div class="quiz-widget__progress-bar-item" data-index="'+ questionIndex +'">' + progressBarItemText + '</div>')
                }

                learnMoreHtml.find('.quiz-widget__learn-more-image').css('background-image', learnMorePictureBackground);
                learnMoreClose.on('click', function () {
                    this._triggerLearnMoreVisibility(false);
                }.bind(this));

                learnMoreOpen.on('click', function () {
                    this._triggerLearnMoreVisibility(true);
                }.bind(this));
            }.bind(this));

            $('.' + options.progressBarWrapperClass).remove();
            $(options.quizWrapper).prepend(progressBarHtml);
        },

        _createGetStarted: function () {
            var quizTimeText = 'Quiz time: ' + config.quizTimeMinutes + ' minutes';

            var html = '<div class=' + this.options.getStartedContainerClass + '>' +
                '<h3>Sleep Selector</h3>' +

                '<div class="quiz-widget__quiz-time">' +
                quizTimeText +
                '</div>' +

                '<div class="quiz-widget__get-started-text">' +
                this.options.getStartedText +
                '</div>' +

                '<button class=' + this.options.getStartedButtonClass + '>Get started</button>' +
                '</div>';

            $('.' + this.options.getStartedContainerClass).remove();
            $('.' + config.quizWrapper).prepend(html);
        },


        _initEvents: function () {
            var options = this.options

            $('.' + options.getStartedButtonClass).on('click', function () {
                this._beginQuiz();
                this._setQuizTime();
            }.bind(this));

            $(document).off('click', '.quiz-lc #quiz-next');

            $(document).on('click', '.quiz-lc #quiz-next', function (e) {
                setTimeout(function () {
                    quiz.saveQ('E');
                }, 500)
            }.bind(this));

            $(document).on('click', this.options.quizTabs + ' .qp_flexc', function (e) {
                var frompage = $(e.currentTarget).parents('.take-q').parent().attr('tid');
                var prevQuestionData = this.getSelectedQuestionData(frompage);
                var data = $.extend(prevQuestionData, {'event': 'selected_answer'});

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push(data);
            }.bind(this));

            $(document).on('click', '.' + options.learnMoreClass, function (e) {
                var target = $(e.target);
                var isLearnMore = target.is('.quiz-widget__learn-more-holder') || target.parents('.quiz-widget__learn-more-holder').length > 0;

                !isLearnMore && this._triggerLearnMoreVisibility(false);
            }.bind(this));

            $(document).on('click', '.' + options.formWrapperClass, function (e) {
                var target = $(e.target);
                var isForm = target.is('.quiz-widget__send-results') || target.parents('.quiz-widget__send-results').length > 0;

                !isForm && this._triggerFormVisibility(false);
            }.bind(this));

            $(document).one('click', '.quiz-lc #quiz-back', function () {
                window.location.hash = '';
                this._reloadQuiz();
            }.bind(this));

            $(document).on('click', '.quiz-widget__email-results-button', function () {
                this._triggerFormVisibility(true);
            }.bind(this));

            $(document).on('click', '.quiz-widget__warranty-button', function (e) {
                var target = $(e.target);
                var isNext = target.hasClass('next');
                var holder = target.siblings('.quiz-widget__warranty-holder');
                var warrantyItems = holder.find('.quiz-widget__warranty-item');
                var activeItem = holder.find('.active');
                var nextActive = activeItem[isNext ? 'next' : 'prev']();

                activeItem.removeClass('active');

                if (nextActive.length > 0) {
                    nextActive.addClass('active');
                } else {
                    warrantyItems[isNext? 'first': 'last']().addClass('active');
                }
            });

            $(document).on('click', '.' + this.options.formSubmitButtonClass, this._sendForm.bind(this));

            $(document).on('click', '.' + this.options.formCloseButtonClass, function () {
                this._triggerFormVisibility(false);
            }.bind(this));

            $(document).on('click', this.options.solutionLinksTrigger, function (e) {
                var $button = $(e.currentTarget);
                var $wrapper = $button.parents(this.options.solutionLinksWrapper);

                $wrapper.toggleClass('active');
            }.bind(this));

            $(document).on('click', this.options.solutionLink, function (e) {
                var $link = $(e.currentTarget);
                var href = $link.attr('href');

                if(window.innerWidth <= this.options.mobileBreakpoint && config.projectName === 'sleepMaker') {
                    e.preventDefault();

                    $(this.options.solutionLink).removeClass('active')
                    $link.addClass('active');

                    $(this.options.solutionShift).attr('href', href)
                }

            }.bind(this));



            $(document).on('click', this.options.reviewsPageSwitcher, function (e) {
                var $button = $(e.currentTarget);
                var searchAttribute = 'data-product-id';
                var attribute = $button.attr(searchAttribute);
                var $searchNode = $('[' + searchAttribute + '=' + attribute + ']')
                var $allNodesByAttribute =  $('[' + searchAttribute + ']')

                $allNodesByAttribute.removeClass('active');
                $searchNode.addClass('active');
            }.bind(this));
        },

        _reloadQuiz: function () {
            this._triggerQuizContainerVisibility(false);
            this._triggerProgressBarVisibility(false);
            this._getParent().html('');
            this._loadQuiz();
        },

        _setQuizTime: function () {
            var minutes = config.quizTimeMinutes || 2;
            var timeout = +minutes * 60000;

            this.quizTime = setTimeout(function () {
                this._reloadQuiz();
            }.bind(this), timeout);
        },

        _triggerQuizContainerVisibility: function (isVisible) {
            this._getParent().toggle(isVisible);
        },

        _triggerQuizWrapperVisibility: function (isVisible) {
            $('.' + config.quizWrapper).toggle(isVisible);
        },

        _triggerLearnMoreVisibility: function (isVisible) {
            $('body').toggleClass('quiz-body-overflowed', isVisible);
            $('.' + this.options.learnMoreClass).toggle(isVisible);
        },

        _triggerGetStartedVisibility: function (isVisible) {
            $('.' + this.options.getStartedContainerClass).toggle(isVisible);
        },

        _triggerFormVisibility: function (isVisible) {
            $('body').toggleClass('quiz-body-overflowed', isVisible);
            $('.' + this.options.formWrapperClass).toggle(isVisible);
        },

        _triggerProgressBarVisibility: function (isVisible) {
            $('.' + this.options.progressBarWrapperClass).toggle(isVisible);
        },

        _beginQuiz: function () {
            this._triggerQuizContainerVisibility(true);
            this._triggerProgressBarVisibility(true);
            this._triggerGetStartedVisibility(false);
            this._updateProgressBar();

            window.dataLayer.push({
                'event': 'started_sleep_selector'
            });
        }
    }

    config && quizWidgetObject._create();

    window.quizWidget = quizWidgetObject;
}

function incertGTM () {
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        ' https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5F7CN2V');
}

function incertUserIPDetector () {
    window.geoip = (data) => {
        window.userCity = data.city;
        window.userIp = data.ip;
        window.userCountry = data.country;
    }
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    script_tag.setAttribute("src", "https://get.geojs.io/v1/ip/geo.js");

    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
}


(function () {
    incertUserIPDetector ()
    incertGTM ()
// Localize jQuery variable
    var jQuery;

    /******** Load jQuery if not present *********/

    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '3.6.0') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src",
            "https://code.jquery.com/jquery-3.6.0.min.js");
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    scriptLoadHandler();
                }
            };
        } else { // Other browsers
            script_tag.onload = scriptLoadHandler;
        }
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        main();
    }

    /******** Called once jQuery has loaded ******/
    function scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
        // Call our main function
        main();
    }

    /******** main function ********/
    function main() {
        (function (i, s, o, g, r, a, m) {
            var ql = document.querySelectorAll("A[quiz],DIV[quiz],A[data-quiz],DIV[data-quiz]");

            if (ql) {
                if (ql.length) {
                    for (var k = 0; k < ql.length; k++) {
                        ql[k].id = "quiz-embed-" + k;
                        ql[k].href = "javascript:var i=document.getElementById('quiz-embed-" + k + "');try{qz.startQuiz(i)}catch(e){i.start=1;i.style.cursor='wait';i.style.opacity='0.5'};void(0);";
                    }
                }
            }
            i["QP"] = r;
            (i[r] =
                i[r] ||
                function () {
                    (i[r].q = i[r].q || []).push(arguments);
                }),
                (i[r].l = 1 * new Date());
            (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
            a.async = 1;
            a.src = g;

            if (a.readyState) {
                a.onreadystatechange = function () { // For old versions of IE
                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                        quizWidget(jQuery);
                    }
                };
            } else { // Other browsers
                a.onload = function () {
                    quizWidget(jQuery)
                };
            }

            m.parentNode.insertBefore(a, m);
        })(window, document, "script", "//take.quiz-maker.com/3012/CDN/quiz-embed-v1.js", "qp");
    }
})();
