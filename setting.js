﻿//window.disableTapAdvanceSlide = true;
//window.disableTapAdvanceAnimation = true;
//window.disableHyperlinkToSlide = true;
//window.overrideTransition = {ef:3853,t:2};
//window.disableSwipe = true;
//window.disableFullscreen = true
//window.exactFit = true
//window.loopUntilEsc = true
//window.disableTextSelection = true
//window.evalPostMessage = true //allow parent iframe to post any command to inner
//window.showNavigationGuide = true //show a message "click or swipe or use keyboard to navigate"

//window.enableThumbnailPanelIcon = true
//window.enableSpeakerNoteIcon = true

//window.thumbNaviPath = '../thumb1'
//window.thumbNaviName = 'Slide'
//window.thumbNaviWidth = 100
//window.thumbNaviHeight = 75



//override thumbnail navigation classes
/*var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.thumbNaviImage { } \n .thumbNaviPanel {}';
document.getElementsByTagName('head')[0].appendChild(style);*/


function onSlideIndexChange(sldNo){
	//
}

function onAnimationStart(index){
	//console.log('ani start:' + index)
}

function onAnimationEnd(index){
	//var count = getSlideCount()
	//console.log('ani end:' + index + '/' + count)
}

function onAnimationNextBuild(slideNo,stepNo,toAnimate){
	//window.parent.postMessage('onAnimationNextBuild(' + slideNo + ',' + stepNo + ',' + toAnimate + ')',"*")
}

	
function onSlideShowTimeUpdate(slideNo,time,total){
	//console.log(slideNo,time,total)
}

allSlideNotes = []