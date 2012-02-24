//stylesheet selector
if ((navigator.userAgent.indexOf("Mac") != -1)) {
	if (navigator.userAgent.indexOf("MSIE") != -1 ) {
		document.write("<link rel=stylesheet href=\"../../css/style.css\" type=\"text/css\">");
	} else {
		document.write("<link rel=stylesheet href=\"../../css/style.css\" type=\"text/css\">");
	}
} else if (navigator.userAgent.indexOf("MSIE") != -1) {
	document.write("<link rel=stylesheet href=\"../../css/style.css\" type=\"text/css\">");
} else {
	document.write("<link rel=stylesheet href=\"../../css/win_ns-sub.css\" type=\"text/css\">");
}
