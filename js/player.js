function webOpen( channel ) {
	var player = "http://box.s-itv.com/flashplay/vjtvplayer.swf";
	var server = "?src=vjms://122.155.180.8:8500/live/cid="
	//var p2p = "&usep2p=0&showTime=0";
	//alert(player+server+channel);
	window.open(player+server+channel,"Live TV");
}