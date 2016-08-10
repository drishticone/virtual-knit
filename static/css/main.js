$(document).ready(function(){
	var Width = $(window).width(),
		Height = $(window).height(),
		didAnimationFisnished = 0;
	initHome();
	bindClick();


	var transEndEventNames = {
	    'WebkitTransition' : 'webkitTransitionEnd',
	    'MozTransition'    : 'transitionend',
	    'OTransition'      : 'oTransitionEnd',
	    'msTransition'     : 'MSTransitionEnd',
	    'transition'       : 'transitionend'
	},
	transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

	var googleImgs = ["http://www.mahedineyahia.fr/images/projects/google/bg-cloud.jpg",
		"http://www.mahedineyahia.fr/images/projects/google/bg-header.png",
		"http://www.mahedineyahia.fr/images/projects/google/bg-sub-header.png",
		"http://www.mahedineyahia.fr/images/projects/google/board-zouhair.png",
		"http://www.mahedineyahia.fr/images/projects/google/bulle-blonde.png",
		"http://www.mahedineyahia.fr/images/projects/google/bulle-done.png",
		"http://www.mahedineyahia.fr/images/projects/google/bulle-player.png",
		"http://www.mahedineyahia.fr/images/projects/google/bulle1.png",
		"http://www.mahedineyahia.fr/images/projects/google/bulle2.png",
		"http://www.mahedineyahia.fr/images/projects/google/bulle3.png",
		"http://www.mahedineyahia.fr/images/projects/google/bureau.png",
		"http://www.mahedineyahia.fr/images/projects/google/capture-big.png",
		"http://www.mahedineyahia.fr/images/projects/google/capture-left.png",
		"http://www.mahedineyahia.fr/images/projects/google/capture-right.png",
		"http://www.mahedineyahia.fr/images/projects/google/icone-drive.jpg",
		"http://www.mahedineyahia.fr/images/projects/google/icone-hangout.jpg",
		"http://www.mahedineyahia.fr/images/projects/google/last-img.jpg",
		"http://www.mahedineyahia.fr/images/projects/google/player.png",
		"http://www.mahedineyahia.fr/images/projects/google/player2.jpg",
		"http://www.mahedineyahia.fr/images/projects/google/player3.jpg",
		"http://www.mahedineyahia.fr/images/projects/google/price.png",
		"http://www.mahedineyahia.fr/images/projects/google/studika.png",
		 ],
		citroenImgs = [
			"http://www.mahedineyahia.fr/images/projects/citroen/backgrounds.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/citroen-app.jpg",
			"http://www.mahedineyahia.fr/images/projects/citroen/creative.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/icon1.jpg",
			"http://www.mahedineyahia.fr/images/projects/citroen/icon2.jpg",
			"http://www.mahedineyahia.fr/images/projects/citroen/icon3.jpg",
			"http://www.mahedineyahia.fr/images/projects/citroen/iphone.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/left-screen.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/logo-citroen.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/main-screen.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/pattern-noise.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/right-screen.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/rond-blanc.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/rond-rouge.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/rond-noir.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/screen1.jpg",
			"http://www.mahedineyahia.fr/images/projects/citroen/title-citroen.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/voiture.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/wireframe-pattern.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/wireframe-patterne.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/wireframes-citroen.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/work1.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/work2.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/work3.png",
			"http://www.mahedineyahia.fr/images/projects/citroen/work4.png"
		],
		cokeImgs = [
			"http://www.mahedineyahia.fr/images/projects/coke/bg-subheader.png",
			"http://www.mahedineyahia.fr/images/projects/coke/bg-header.jpg",
			"http://www.mahedineyahia.fr/images/projects/coke/illu-bottle.jpg",
			"http://www.mahedineyahia.fr/images/projects/coke/illu.png",
			"http://www.mahedineyahia.fr/images/projects/coke/img1.jpg",
			"http://www.mahedineyahia.fr/images/projects/coke/img2.jpg",
			"http://www.mahedineyahia.fr/images/projects/coke/left-bottle.png",
			"http://www.mahedineyahia.fr/images/projects/coke/right-bottle.png",
			"http://www.mahedineyahia.fr/images/projects/coke/screen-coke-drag.jpg"
		],
		gqImgs = [
			"http://www.mahedineyahia.fr/images/projects/gq/bg-pattern-red.jpg",
			"http://www.mahedineyahia.fr/images/projects/gq/bg-subheader.png",
			"http://www.mahedineyahia.fr/images/projects/gq/booba.png",
			"http://www.mahedineyahia.fr/images/projects/gq/final-design.png",
			"http://www.mahedineyahia.fr/images/projects/gq/main-view.jpg",
			"http://www.mahedineyahia.fr/images/projects/gq/pattern-bandeau1.jpg",
			"http://www.mahedineyahia.fr/images/projects/gq/phone1.png",
			"http://www.mahedineyahia.fr/images/projects/gq/phone2.png",
			"http://www.mahedineyahia.fr/images/projects/gq/phones.png",
			"http://www.mahedineyahia.fr/images/projects/gq/sidebar.jpg",
			"http://www.mahedineyahia.fr/images/projects/gq/title.jpg"
		],
		illustrationImgs = [
			"http://www.mahedineyahia.fr/images/projects/illustration/instagram-icon.jpg",
			"http://www.mahedineyahia.fr/images/projects/illustration/bg-header.jpg",
			"http://www.mahedineyahia.fr/images/projects/illustration/bg-subheader.png",
			"http://www.mahedineyahia.fr/images/projects/illustration/livre.jpg",
		];

	function initHome(){
		var homeImgs = [
			"http://www.mahedineyahia.fr/images/bg-citroen-pattern.png",
			"http://www.mahedineyahia.fr/images/bg-citroen.png",
			"http://www.mahedineyahia.fr/images/bg-coke.png",
			"http://www.mahedineyahia.fr/images/bg-google.jpg",
			"http://www.mahedineyahia.fr/images/bg-gq-pattern.png",
			"http://www.mahedineyahia.fr/images/bg-gq.png",
			"http://www.mahedineyahia.fr/images/bg-illus.png",
			"http://www.mahedineyahia.fr/images/logo-home.png",
			"http://www.mahedineyahia.fr/images/social-sprite.jpg",
		];
		var count = 0,
			length = homeImgs.length;
		//on precharge les images
		$.each(homeImgs, function(i, img){
			var test = new Image();
			test.src = img.toString();
			$(test).on("load", function(){
				count++;
				if(count == length){
					$("#loading").fadeOut();
				}
			});
		});


		var offsetStart = Height+1500;
		if($(".home").length){
			$("#wrapper").attr("style","margin-top:"+offsetStart+"px");
		
			$(window).scroll(function () {

				if($(window).scrollTop() >= offsetStart-700){
					didAnimationFisnished = 1;
					$("body").addClass("ready");
					// $("#wrapper").attr("style","margin-top: 0px");
					// $(window).scrollTop(0);
				}else{
					$("body").removeClass("ready");
				}

				if($(window).scrollTop() >= offsetStart-500){
					animateProjects();
				}

				if($(window).scrollTop() >= 30){
					$("#scroll").fadeOut();
				}else{
					$("#scroll").fadeIn();
				}

				if($(window).scrollTop() >= Height/2){
					var opac = ($(window).scrollTop() - Height/2) / 600;

					$("#logo-home").attr("style", "opacity: "+opac+";");
				}else{
					$("#logo-home").attr("style", "opacity: 0;");
				}
			});
		}
		//progress bars
		$(".progress-bar p").attr("style","width: "+Width+"px");
		$(".full-progress").attr("style","width: "+Width+"px");
		
	}
	
	function animateProjects(){
		var nbProjects = $("#projects-list li").length,
			currentProject = 0;
		$("#projects-list li").eq(currentProject).removeClass("project-hidden");
		var timer = window.setInterval(function(){	
				if(currentProject <= nbProjects){
					currentProject++;
					$("#projects-list li").eq(currentProject).removeClass("project-hidden");

				}else{
					window.clearInterval(timer);
					if($("body").hasClass('home')){
						$("#wrapper").addClass("animating-done");	
					}
					
				}
			}, 500);
	}

	function getProjectByClick(elem, url){
		$.ajax({
			type: 'get',
			url: base + url,
			dataType: "html",
			success: function(data){
				console.log("SUCCES");

				var	count = 0,
					width = 0,
					projectImgs;

				switch($(elem).attr("data-project")){
					case "google":
						projectImgs = googleImgs;
						break;
					case "citroen":
						projectImgs = citroenImgs;
						break;
					case "coke":
						projectImgs = cokeImgs;
						break;
					case "gq":
						projectImgs = gqImgs;
						break;
					case "illustration":
						projectImgs = illustrationImgs;
						break;
				}


				var imgLength = projectImgs.length,
					step = 100/imgLength;

				//on precharge les images
				$.each(projectImgs, function(i, img){
					var test = new Image();
					test.src = img.toString();
					$(test).on("load", function(){
						count++;
						width += step;
						$(".progress-bar", elem).attr("style", "width: "+width+"%");
					});
				});

				//si toutes les images sont chargées
				if(count = imgLength-1){
					$(".progress-bar",elem).bind(transEndEventNames[ Modernizr.prefixed('transition') ], function(){
						var projectHeight = $(".project").height();

						$(".progress-bar",elem).animate({
							height: projectHeight,
							bottom: 0,
						}, function(){

							//on enleve le script de la video
							$("#video-js").remove();
							$(window).unbind('scroll');

							$('.project a').unbind('click');

							//on fade et affiche le nouveau contenu...
							//$("#receiver").addClass(elem.attr("data-project"));
							$("#wrapper").addClass("loading");
							$("#receiver").fadeOut(1000, function(){
								$("body").removeClass("ready");
								$("#wrapper").removeClass("loading");
								//on recupere le contenu de la div site-content
								$(window).scrollTop(0);
								var pageContent = $(data).find("#receiver").html();
								$("#receiver").html(pageContent);

								//on enleve la marge prévu pour la video
								$("#wrapper").attr("style", "");

								//on change l'url
								history.pushState(url , base + url, url);

								//on change la classe du wrapper pour faire fontionner le js et le css
								console.log($("#receiver #class-name").html());
								$("body").removeClass("home");
								switchClass($("#receiver #class-name").html());
								$("#receiver").fadeIn(500, function(){
									finishedLoading = true;
									$("body").addClass("ready");									
								});
								console.log("fini");
							});


				    	});
					});
				}

				
			}
		});
	}

	function getProjectByBack(url){
		console.log(url);
		$.ajax({
			type: 'get',
			url: base + url,
			dataType: "html",
			success: function(data){
				//on fade et affiche le nouveau contenu...
				$("#receiver").fadeOut(1000, function(){
					//on recupere le contenu de la div site-content
					var pageContent = $(data).find("#receiver").html();
					$(window).unbind("scroll");
					$("#receiver").html(pageContent);
					$("#receiver").fadeIn(500, function(){
						finishedLoading = true;

						console.log("fini");
						if(url == ""){
							initHome();
							$("#wrapper").removeClass("animating-done");
							animateProjects();
							bindClick();
							switchClass("home");
							var offsetStart = Height+1000;
							$("#wrapper").attr("style","margin-top:"+offsetStart+"px");
							launchScroll();
							$(window).scrollTop(1600);
						}else{
							$(window).scrollTop(0);
							switchClass($("#receiver #class-name").html());
							//on enleve la marge prévu pour la video
							$("#wrapper").attr("style", "");
						}
						$("body").addClass("ready");

					});
				});

			}
		});
	}

	function getScrollToPos(elem){
		var posTop = elem.offset().top,
			sous = $(window).height(),
			result = posTop - sous/2;
			result = result + elem.height()/2;
		return parseInt(result);
	}

	////////////
	//history.js
	////////////

	var base = 'http://www.mahedineyahia.fr/',
		innerContainer = $('#site-container'),
		mainContent = $('#main-content'),
		historySupported,
		el;

	historySupported = isSupportedBrowserHistory();

	if(historySupported) {
		var current = location.protocol + '//www.mahedineyahia.fr'+ location.pathname;
		if (base + '/' != current) {
			var diff = current.replace(base, '');
			history.replaceState(diff, base + diff, diff);
		} else {
			history.replaceState(' ', base, '');
		}
		window.onpopstate = popStateHandler;
	} else {
		// dont do anything. fallback for browsers that don't support history states
	}

	function popStateHandler(event) {
		console.log(event.state);
		if(event.state != null) {
			(event.preventDefault) ? event.preventDefault() : event.returnValue = false;	// Prevents the links default action
			getProjectByBack(event.state);
		}
	}

	function isSupportedBrowserHistory() {
		return !!(window.history && history.pushState);
	}


	//call projects
	// $("#projects-list>li>a").click(function(){
	// 	var url = $(this).attr("data-url"),
	// 		e = $(this).parent();
	// 	$('body').animate({scrollTop:getScrollToPos(e)}, 1000, function(){
	// 		getProject(e, url);
	// 	});
		
	// 	return false;
	// });
	
	function bindClick(){
		$('.project a').click(function(event) {
		if(historySupported) { // Test to see if the history push state is supported in the browser
			el = $(this);
			// var url = $(this).attr("data-url"),
			var path = el.attr('href').replace(base, ''); // get link's URL, removes base domain URL
			e = $(this).parent();
			$('body').animate({scrollTop:getScrollToPos(e)}, 1000, function(){
				console.log(path);
				getProjectByClick(e, path);
				//history.pushState(path , base + path, path);
			});
			return false;
		}	
	});
	}


	function switchClass(name){
		$("body").attr("class", "");
		$("body").addClass(name);
	}


	// ------------------------------------------------
	// ----------------  VIDEO  -----------------------
	// ------------------------------------------------

	var $doc = $(document);
	var $win = $(window);
	launchScroll();

	// dimensions - we want to cache them on window resize
	var windowHeight, windowWidth;
	var fullHeight, scrollHeight;
	var streetImgWidth = 1024, streetImgHeight = 640;
	calculateDimensions();

	var currentPosition = -1, targetPosition = 0;
	var $videoContainer = $('.street-view');
	var video = $('.street-view > img')[0];
	var $hotspotElements = $('[data-position]');


	// handling resize and scroll events
	
	function calculateDimensions() {
		windowWidth = $win.width();
		windowHeight = $win.height();
		fullHeight = $('#main').height();
		scrollHeight = fullHeight - windowHeight;
	}
	
	function handleResize() {
		calculateDimensions();
		resizeBackgroundImage();
		handleScroll();
	}
	
	function handleScroll() {
		targetPosition = $win.scrollTop() / scrollHeight;
	}
	
	// main render loop
	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          window.oRequestAnimationFrame      ||
	          window.msRequestAnimationFrame     ||
	          function(/* function */ callback, /* DOMElement */ element){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();


	function animloop(){
		if ( Math.floor(currentPosition*5000) != Math.floor(targetPosition*5000) ) {
			currentPosition += (targetPosition - currentPosition) / 5;
			renderVideo(currentPosition);
		}
	  requestAnimFrame(animloop);
	}


	function resizeBackgroundImage(){
		// get image container size
		var scale = Math.max( windowHeight/streetImgHeight , windowWidth/streetImgWidth );
		var width = scale * streetImgWidth , height = scale * streetImgHeight;
		var left = (windowWidth-width)/2, top = (windowHeight-height)/2;
		$videoContainer
				  .width(width).height(height)
				  .css('position','fixed')
				  .css('left',left+'px')
				  .css('z-index', "0")
				  .css('top',top+'px');
	}

	// video handling
	//../shared/street/vid-{index}.jpg

	var imageSeqLoader = new ProgressiveImageSequence( "./video/frame/video_{index}.jpg" , 191 , {
		indexSize: 4,
		initialStep: 16,
		onProgress: handleLoadProgress,
		onComplete: handleLoadComplete,
		stopAt: 1
	} );

	var loadCounterForIE = 0; // there seems to be a problem with ie calling the callback several times
	imageSeqLoader.loadPosition(currentPosition,function(){
		loadCounterForIE++;
		if ( loadCounterForIE == 1 ) {
			renderVideo(currentPosition);
			imageSeqLoader.load();
			imageSeqLoader.load();
			imageSeqLoader.load();
			imageSeqLoader.load();
		}
	});


	var currentSrc, currentIndex;

	function renderVideo(position) {
		var index = Math.round( currentPosition * (imageSeqLoader.length-1) );
		var img = imageSeqLoader.getNearest( index );
		var nearestIndex = imageSeqLoader.nearestIndex;
		if ( nearestIndex < 0 ) nearestIndex = 0;
		var $img = $(img);
		var src;
		if ( !!img ) {
			src = img.src;
			if ( src != currentSrc ) {
				video.src = src;
				currentSrc = src;
			}
		}
	}



	$('body').append('<div id="loading-bar" style="position:fixed; bottom:0; left:0; background-color: #DF0012; background-color: rgba(223,0,18,0.5); height: 1px;"></div>');
	
	function handleLoadProgress() {
		var progress = imageSeqLoader.getLoadProgress() * 100;
		$('#loading-bar').css({width:progress+'%',opacity:1});
	}

	function handleLoadComplete() {
		$('#loading-bar').css({width:'100%',opacity:0});
	}




	$win.resize( handleResize );

	function launchScroll(){
		$win.scroll(function(){
			if($('body').hasClass('home')){
				handleScroll();
			}
		});
	}
	

	handleResize();
	animloop();



});
