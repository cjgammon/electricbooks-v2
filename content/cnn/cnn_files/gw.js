//AG-develop 13.01.24-242 (2013-01-24 10:04:33 PST)
var rsi_now= new Date();
var rsi_csid= 'A09801';if(typeof(csids)=="undefined"){var csids=[rsi_csid];}else{csids.push(rsi_csid);};function rsiClient(Da){this._rsiaa=Da;this._rsiba=1;this._rsica=1;this._rsida=0;this._rsiea=0;this._rsifa=0;this._rsiga="1008211";this._rsiha="pix04.revsci.net";this._rsiia="js";this._rsija="b";this._rsika="3";this._rsila=3;this._rsima=1;this._rsina=new Array();this._rsioa=0;this._rsipa=null;this._rsiqa=null;this._rsira=null;this._rsisa=null;this._rsita=null;this._rsiua=null;this._rsiva=0;this.DM_cat=function(Ea){this._rsipa=Ea;};this.DM_name=function(Fa){this._rsiqa=Fa;};this.DM_keywords=function(st){this._rsira=st;};this.DM_event=function(Ga){this._rsisa=Ga;};this.DM_addToLoc=function(n,v){this._rsita=_rsiwa(this._rsita,n,v);};this.DM_addEncToLoc=function(n,v){this.DM_addToLoc(_rsixa(n),_rsixa(v));};this.DM_setLoc=function(u){this._rsita=u;};this.rsi_c=function(Da){this._rsiaa=Da;};this.rsi_ral=function(Ha){this._rsiba=Ha;};this.rsi_riu=function(Ia){this._rsica=Ia;};this.rsi_tiu=function(Ja){this._rsida=Ja;};this.rsi_m=function(Ka){this._rsiea=Ka;};this.rsi_dw=function(La){this._rsifa=La;};this.rsi_s=function(Ma){this._rsiha=Ma;};this.rsi_t=function(Na){this._rsiia=Na;};this.rsi_en=function(Oa){this._rsija=Oa;};this.rsi_cn=function(Pa){this._rsika=Pa;};this.rsi_us=function(Qa){this._rsila=Qa;};this.rsi_ra=function(ra){this._rsima=ra;};this.DM_tag=function(){var Ra;if(this._rsioa==0||this._rsiea==1){if(typeof(DM_prepClient)=="function"){DM_prepClient(this._rsiaa,this);}var Sa=this._rsiya();if(this._rsiia=="gif"){Ra=new Image(2,3);Ra.src=Sa;this._rsina[this._rsina.length]=Ra;}else if(this._rsiia=="js"){if(this._rsifa==1){document.write("<script language=\"JavaScript\" type=\"text/javascript\" src=\""+Sa+"\"><"+"/script>");}else{var Ta=document.createElement("script");Ta.language="JavaScript";Ta.type="text/javascript";Ta.src=Sa;var Ua=(document.body==null)?document.getElementsByTagName("head")[0]:document.body;Ua.insertBefore(Ta,Ua.firstChild);Ra=Ta;}}this._rsioa=1;}this.rsi_r();return Ra;};this._rsiya=function(){var Va="";this.DM_addEncToLoc("_rsiL",this._rsiva);Va="DM_LOC="+_rsixa(this._rsita);if(this._rsipa){Va+="&DM_CAT="+_rsixa(this._rsipa);}if(this._rsisa){Va+="&DM_EVT="+_rsixa(this._rsisa);}if(this._rsira){Va+="&DM_KYW="+_rsixa(this._rsira);}if(this._rsica==1&&this._rsiua){Va+="&DM_REF="+_rsixa(this._rsiua);}if(this._rsida==1){Va+="&DM_TIT="+_rsixa(document.title);}if(this._rsiqa){Va+="&DM_NAM="+_rsixa(this._rsiqa);}Va+="&DM_EOM=1";var Wa="http"+(location.protocol=="https:"?"s":"")+"://";var Xa="/"+this._rsiaa+"/"+this._rsija+this._rsika+"/0/"+this._rsila+"/"+this._rsiga+"/";var Ya=Math.floor(Math.random()*1000000000)+"."+this._rsiia;var Za=Wa+this._rsiha+Xa+Ya+"?D="+_rsixa(Va)+"&C="+_rsixa(csids);var $a=Za.length;if($a>=2000){if(Za.charAt(1998)=='%'){Za=Za.substr(0,1998);}else if(Za.charAt(1999)=='%'){Za=Za.substr(0,1999);}else{Za=Za.substr(0,2000);}if(Za.charAt(Za.length-3)=='%'&&Za.charAt(Za.length-2)=='2'&&Za.charAt(Za.length-1)=='5'){Za=Za.substr(0,Za.length-3);}}return Za;};this.rsi_r=function(){var ab;var bb;var cb=0;var db=0;if(this._rsiba==1){var eb=window;while(true){try{ab=eb.document.location;bb=eb.document.referrer;cb=db;}catch(notAllowed){}if(eb==window.top||eb==eb.parent){break;}eb=eb.parent;db++;}}else{ab=window.document.location;bb=window.document.referrer;}this._rsiva=db-cb;this._rsiua=this._rsima?_rsiza(bb.toString()):bb.toString();if(this._rsiva==0){this._rsita=(this._rsima)?_rsiza(ab.href):ab.href;}else{this._rsita=this._rsiua;}this._rsipa=null;this._rsiqa=null;this._rsira=null;this._rsisa=null;};this.rsi_r();}var _rsixa;if(typeof(encodeURIComponent)=="function"){_rsixa=encodeURIComponent;}else{var _rsiAa=new RegExp("[\x00-\x20]|[\x22-\x26]|[\x2B-\x2C]|\x2F|[\x3A-\x40]|[\x5B-\x5E]|\x60|[\x7B-\x7D]|[\x7F-\uFFFF]","g");_rsixa=function(v){return v.toString().replace(_rsiAa,_rsiBa);}}function _rsiwa(u,n,v){return u+(u.indexOf("?")==-1?"?":"&")+n+"="+v;}function _rsiza(u){var i=u.indexOf('#');return(i>=0)?u.substr(0,i):u;}function _rsiCa(i){var fb=i.toString(16).toUpperCase();return fb.length<2?"0"+fb:fb;}function _rsiBa(c){var i=c.charCodeAt(0);if(isNaN(i))return "";if(i<128)return "%"+_rsiCa(i);if(i<2048)return "%"+_rsiCa(0xC0+(i>>6))+"%"+_rsiCa(0x80+(i&0x3F));if(i<65536)return "%"+_rsiCa(0xE0+(i>>12))+"%"+_rsiCa(0x80+(i>>6&0x3F))+"%"+_rsiCa(0x80+(i&0x3F));return "%"+_rsiCa(0xF0+(i>>18))+"%"+_rsiCa(0x80+(i>>12&0x3F))+"%"+_rsiCa(0x80+(i>>6&0x3F))+"%"+_rsiCa(0x80+(i&0x3F));}window[rsi_csid]=new rsiClient(rsi_csid);
function DM_cat(aa){window[rsi_csid].DM_cat(aa);}function DM_name(ba){window[rsi_csid].DM_name(ba);}function DM_keywords(kw){window[rsi_csid].DM_keywords(kw);}function DM_event(ca){window[rsi_csid].DM_event(ca);}function DM_addToLoc(n,v){window[rsi_csid].DM_addToLoc(n,v);}function DM_addEncToLoc(n,v){window[rsi_csid].DM_addEncToLoc(n,v);}function DM_setLoc(u){window[rsi_csid].DM_setLoc(u);}function DM_tag(){window[rsi_csid].DM_tag();}
