_aa={_ab:function(c,a){for(var d=qrcode.width,b=qrcode.height,e=!0,g=0;g<a.length&&e;g+=2){var f=Math.floor(a[g]),h=Math.floor(a[g+1]);if(-1>f||f>d||-1>h||h>b)throw"Error._ab ";e=!1;-1==f?(a[g]=0,e=!0):f==d&&(a[g]=d-1,e=!0);-1==h?(a[g+1]=0,e=!0):h==b&&(a[g+1]=b-1,e=!0)}e=!0;for(g=a.length-2;0<=g&&e;g-=2){f=Math.floor(a[g]);h=Math.floor(a[g+1]);if(-1>f||f>d||-1>h||h>b)throw"Error._ab ";e=!1;-1==f?(a[g]=0,e=!0):f==d&&(a[g]=d-1,e=!0);-1==h?(a[g+1]=0,e=!0):h==b&&(a[g+1]=b-1,e=!0)}},_af:function(c,a,d){for(var b=
new _ac(a),e=Array(a<<1),g=0;g<a;g++){for(var f=e.length,h=g+.5,k=0;k<f;k+=2)e[k]=(k>>1)+.5,e[k+1]=h;d._ad(e);_aa._ab(c,e);try{for(k=0;k<f;k+=2){var l=4*Math.floor(e[k])+Math.floor(e[k+1])*qrcode.width*4,q=c[Math.floor(e[k])+qrcode.width*Math.floor(e[k+1])];qrcode.imagedata.data[l]=q?255:0;qrcode.imagedata.data[l+1]=q?255:0;qrcode.imagedata.data[l+2]=0;qrcode.imagedata.data[l+3]=255;q&&b._dq(k>>1,g)}}catch(m){throw"Error._ab";}}return b},_ah:function(c,a,d,b,e,g,f,h,k,l,q,m,u,t,n,r,z,A){d=_ae._ag(d,
b,e,g,f,h,k,l,q,m,u,t,n,r,z,A);return _aa._af(c,a,d)}};function _a1(c,a){this.count=c;this._fc=a;this.__defineGetter__("Count",function(){return this.count});this.__defineGetter__("_dm",function(){return this._fc})}
function _a2(c,a,d){this._bm=c;this._do=d?[a,d]:Array(a);this.__defineGetter__("_bo",function(){return this._bm});this.__defineGetter__("_dn",function(){return this._bm*this._fo});this.__defineGetter__("_fo",function(){for(var b=0,e=0;e<this._do.length;e++)b+=this._do[e].length;return b});this._fb=function(){return this._do}}
function _a3(c,a,d,b,e,g){this._bs=c;this._ar=a;this._do=[d,b,e,g];c=0;a=d._bo;d=d._fb();for(b=0;b<d.length;b++)e=d[b],c+=e.Count*(e._dm+a);this._br=c;this.__defineGetter__("_fd",function(){return this._bs});this.__defineGetter__("_as",function(){return this._ar});this.__defineGetter__("_dp",function(){return this._br});this.__defineGetter__("_cr",function(){return 17+4*this._bs});this._aq=function(){var b=this._cr,e=new _ac(b);e._bq(0,0,9,9);e._bq(b-8,0,8,9);e._bq(0,b-8,9,8);for(var d=this._ar.length,
a=0;a<d;a++)for(var g=this._ar[a]-2,c=0;c<d;c++)0==a&&(0==c||c==d-1)||a==d-1&&0==c||e._bq(this._ar[c]-2,g,5,5);e._bq(6,9,1,b-17);e._bq(9,6,b-17,1);6<this._bs&&(e._bq(b-11,0,3,6),e._bq(0,b-11,6,3));return e};this._bu=function(b){return this._do[b.ordinal()]}}_a3._bv=[31892,34236,39577,42195,48118,51042,55367,58893,63784,68472,70749,76311,79154,84390,87683,92361,96236,102084,102881,110507,110734,117786,119615,126325,127568,133589,136944,141498,145311,150283,152622,158308,161089,167017];
_a3.VERSIONS=_ay();_a3._av=function(c){if(1>c||40<c)throw"bad arguments";return _a3.VERSIONS[c-1]};_a3._at=function(c){if(1!=c%4)throw"Error _at";try{return _a3._av(c-17>>2)}catch(a){throw"Error _av";}};_a3._aw=function(c){for(var a=4294967295,d=0,b=0;b<_a3._bv.length;b++){var e=_a3._bv[b];if(e==c)return this._av(b+7);e=_ax._gj(c,e);e<a&&(d=b+7,a=e)}return 3>=a?this._av(d):null};
function _ay(){return[new _a3(1,[],new _a2(7,new _a1(1,19)),new _a2(10,new _a1(1,16)),new _a2(13,new _a1(1,13)),new _a2(17,new _a1(1,9))),new _a3(2,[6,18],new _a2(10,new _a1(1,34)),new _a2(16,new _a1(1,28)),new _a2(22,new _a1(1,22)),new _a2(28,new _a1(1,16))),new _a3(3,[6,22],new _a2(15,new _a1(1,55)),new _a2(26,new _a1(1,44)),new _a2(18,new _a1(2,17)),new _a2(22,new _a1(2,13))),new _a3(4,[6,26],new _a2(20,new _a1(1,80)),new _a2(18,new _a1(2,32)),new _a2(26,new _a1(2,24)),new _a2(16,new _a1(4,9))),
new _a3(5,[6,30],new _a2(26,new _a1(1,108)),new _a2(24,new _a1(2,43)),new _a2(18,new _a1(2,15),new _a1(2,16)),new _a2(22,new _a1(2,11),new _a1(2,12))),new _a3(6,[6,34],new _a2(18,new _a1(2,68)),new _a2(16,new _a1(4,27)),new _a2(24,new _a1(4,19)),new _a2(28,new _a1(4,15))),new _a3(7,[6,22,38],new _a2(20,new _a1(2,78)),new _a2(18,new _a1(4,31)),new _a2(18,new _a1(2,14),new _a1(4,15)),new _a2(26,new _a1(4,13),new _a1(1,14))),new _a3(8,[6,24,42],new _a2(24,new _a1(2,97)),new _a2(22,new _a1(2,38),new _a1(2,
39)),new _a2(22,new _a1(4,18),new _a1(2,19)),new _a2(26,new _a1(4,14),new _a1(2,15))),new _a3(9,[6,26,46],new _a2(30,new _a1(2,116)),new _a2(22,new _a1(3,36),new _a1(2,37)),new _a2(20,new _a1(4,16),new _a1(4,17)),new _a2(24,new _a1(4,12),new _a1(4,13))),new _a3(10,[6,28,50],new _a2(18,new _a1(2,68),new _a1(2,69)),new _a2(26,new _a1(4,43),new _a1(1,44)),new _a2(24,new _a1(6,19),new _a1(2,20)),new _a2(28,new _a1(6,15),new _a1(2,16))),new _a3(11,[6,30,54],new _a2(20,new _a1(4,81)),new _a2(30,new _a1(1,
50),new _a1(4,51)),new _a2(28,new _a1(4,22),new _a1(4,23)),new _a2(24,new _a1(3,12),new _a1(8,13))),new _a3(12,[6,32,58],new _a2(24,new _a1(2,92),new _a1(2,93)),new _a2(22,new _a1(6,36),new _a1(2,37)),new _a2(26,new _a1(4,20),new _a1(6,21)),new _a2(28,new _a1(7,14),new _a1(4,15))),new _a3(13,[6,34,62],new _a2(26,new _a1(4,107)),new _a2(22,new _a1(8,37),new _a1(1,38)),new _a2(24,new _a1(8,20),new _a1(4,21)),new _a2(22,new _a1(12,11),new _a1(4,12))),new _a3(14,[6,26,46,66],new _a2(30,new _a1(3,115),
new _a1(1,116)),new _a2(24,new _a1(4,40),new _a1(5,41)),new _a2(20,new _a1(11,16),new _a1(5,17)),new _a2(24,new _a1(11,12),new _a1(5,13))),new _a3(15,[6,26,48,70],new _a2(22,new _a1(5,87),new _a1(1,88)),new _a2(24,new _a1(5,41),new _a1(5,42)),new _a2(30,new _a1(5,24),new _a1(7,25)),new _a2(24,new _a1(11,12),new _a1(7,13))),new _a3(16,[6,26,50,74],new _a2(24,new _a1(5,98),new _a1(1,99)),new _a2(28,new _a1(7,45),new _a1(3,46)),new _a2(24,new _a1(15,19),new _a1(2,20)),new _a2(30,new _a1(3,15),new _a1(13,
16))),new _a3(17,[6,30,54,78],new _a2(28,new _a1(1,107),new _a1(5,108)),new _a2(28,new _a1(10,46),new _a1(1,47)),new _a2(28,new _a1(1,22),new _a1(15,23)),new _a2(28,new _a1(2,14),new _a1(17,15))),new _a3(18,[6,30,56,82],new _a2(30,new _a1(5,120),new _a1(1,121)),new _a2(26,new _a1(9,43),new _a1(4,44)),new _a2(28,new _a1(17,22),new _a1(1,23)),new _a2(28,new _a1(2,14),new _a1(19,15))),new _a3(19,[6,30,58,86],new _a2(28,new _a1(3,113),new _a1(4,114)),new _a2(26,new _a1(3,44),new _a1(11,45)),new _a2(26,
new _a1(17,21),new _a1(4,22)),new _a2(26,new _a1(9,13),new _a1(16,14))),new _a3(20,[6,34,62,90],new _a2(28,new _a1(3,107),new _a1(5,108)),new _a2(26,new _a1(3,41),new _a1(13,42)),new _a2(30,new _a1(15,24),new _a1(5,25)),new _a2(28,new _a1(15,15),new _a1(10,16))),new _a3(21,[6,28,50,72,94],new _a2(28,new _a1(4,116),new _a1(4,117)),new _a2(26,new _a1(17,42)),new _a2(28,new _a1(17,22),new _a1(6,23)),new _a2(30,new _a1(19,16),new _a1(6,17))),new _a3(22,[6,26,50,74,98],new _a2(28,new _a1(2,111),new _a1(7,
112)),new _a2(28,new _a1(17,46)),new _a2(30,new _a1(7,24),new _a1(16,25)),new _a2(24,new _a1(34,13))),new _a3(23,[6,30,54,74,102],new _a2(30,new _a1(4,121),new _a1(5,122)),new _a2(28,new _a1(4,47),new _a1(14,48)),new _a2(30,new _a1(11,24),new _a1(14,25)),new _a2(30,new _a1(16,15),new _a1(14,16))),new _a3(24,[6,28,54,80,106],new _a2(30,new _a1(6,117),new _a1(4,118)),new _a2(28,new _a1(6,45),new _a1(14,46)),new _a2(30,new _a1(11,24),new _a1(16,25)),new _a2(30,new _a1(30,16),new _a1(2,17))),new _a3(25,
[6,32,58,84,110],new _a2(26,new _a1(8,106),new _a1(4,107)),new _a2(28,new _a1(8,47),new _a1(13,48)),new _a2(30,new _a1(7,24),new _a1(22,25)),new _a2(30,new _a1(22,15),new _a1(13,16))),new _a3(26,[6,30,58,86,114],new _a2(28,new _a1(10,114),new _a1(2,115)),new _a2(28,new _a1(19,46),new _a1(4,47)),new _a2(28,new _a1(28,22),new _a1(6,23)),new _a2(30,new _a1(33,16),new _a1(4,17))),new _a3(27,[6,34,62,90,118],new _a2(30,new _a1(8,122),new _a1(4,123)),new _a2(28,new _a1(22,45),new _a1(3,46)),new _a2(30,
new _a1(8,23),new _a1(26,24)),new _a2(30,new _a1(12,15),new _a1(28,16))),new _a3(28,[6,26,50,74,98,122],new _a2(30,new _a1(3,117),new _a1(10,118)),new _a2(28,new _a1(3,45),new _a1(23,46)),new _a2(30,new _a1(4,24),new _a1(31,25)),new _a2(30,new _a1(11,15),new _a1(31,16))),new _a3(29,[6,30,54,78,102,126],new _a2(30,new _a1(7,116),new _a1(7,117)),new _a2(28,new _a1(21,45),new _a1(7,46)),new _a2(30,new _a1(1,23),new _a1(37,24)),new _a2(30,new _a1(19,15),new _a1(26,16))),new _a3(30,[6,26,52,78,104,130],
new _a2(30,new _a1(5,115),new _a1(10,116)),new _a2(28,new _a1(19,47),new _a1(10,48)),new _a2(30,new _a1(15,24),new _a1(25,25)),new _a2(30,new _a1(23,15),new _a1(25,16))),new _a3(31,[6,30,56,82,108,134],new _a2(30,new _a1(13,115),new _a1(3,116)),new _a2(28,new _a1(2,46),new _a1(29,47)),new _a2(30,new _a1(42,24),new _a1(1,25)),new _a2(30,new _a1(23,15),new _a1(28,16))),new _a3(32,[6,34,60,86,112,138],new _a2(30,new _a1(17,115)),new _a2(28,new _a1(10,46),new _a1(23,47)),new _a2(30,new _a1(10,24),new _a1(35,
25)),new _a2(30,new _a1(19,15),new _a1(35,16))),new _a3(33,[6,30,58,86,114,142],new _a2(30,new _a1(17,115),new _a1(1,116)),new _a2(28,new _a1(14,46),new _a1(21,47)),new _a2(30,new _a1(29,24),new _a1(19,25)),new _a2(30,new _a1(11,15),new _a1(46,16))),new _a3(34,[6,34,62,90,118,146],new _a2(30,new _a1(13,115),new _a1(6,116)),new _a2(28,new _a1(14,46),new _a1(23,47)),new _a2(30,new _a1(44,24),new _a1(7,25)),new _a2(30,new _a1(59,16),new _a1(1,17))),new _a3(35,[6,30,54,78,102,126,150],new _a2(30,new _a1(12,
121),new _a1(7,122)),new _a2(28,new _a1(12,47),new _a1(26,48)),new _a2(30,new _a1(39,24),new _a1(14,25)),new _a2(30,new _a1(22,15),new _a1(41,16))),new _a3(36,[6,24,50,76,102,128,154],new _a2(30,new _a1(6,121),new _a1(14,122)),new _a2(28,new _a1(6,47),new _a1(34,48)),new _a2(30,new _a1(46,24),new _a1(10,25)),new _a2(30,new _a1(2,15),new _a1(64,16))),new _a3(37,[6,28,54,80,106,132,158],new _a2(30,new _a1(17,122),new _a1(4,123)),new _a2(28,new _a1(29,46),new _a1(14,47)),new _a2(30,new _a1(49,24),new _a1(10,
25)),new _a2(30,new _a1(24,15),new _a1(46,16))),new _a3(38,[6,32,58,84,110,136,162],new _a2(30,new _a1(4,122),new _a1(18,123)),new _a2(28,new _a1(13,46),new _a1(32,47)),new _a2(30,new _a1(48,24),new _a1(14,25)),new _a2(30,new _a1(42,15),new _a1(32,16))),new _a3(39,[6,26,54,82,110,138,166],new _a2(30,new _a1(20,117),new _a1(4,118)),new _a2(28,new _a1(40,47),new _a1(7,48)),new _a2(30,new _a1(43,24),new _a1(22,25)),new _a2(30,new _a1(10,15),new _a1(67,16))),new _a3(40,[6,30,58,86,114,142,170],new _a2(30,
new _a1(19,118),new _a1(6,119)),new _a2(28,new _a1(18,47),new _a1(31,48)),new _a2(30,new _a1(34,24),new _a1(34,25)),new _a2(30,new _a1(20,15),new _a1(61,16)))]}
function _ae(c,a,d,b,e,g,f,h,k){this.a11=c;this.a12=b;this.a13=f;this.a21=a;this.a22=e;this.a23=h;this.a31=d;this.a32=g;this.a33=k;this._ad=function(b){for(var e=b.length,d=this.a11,a=this.a12,g=this.a13,c=this.a21,f=this.a22,h=this.a23,k=this.a31,B=this.a32,C=this.a33,v=0;v<e;v+=2){var w=b[v],x=b[v+1],y=g*w+h*x+C;b[v]=(d*w+c*x+k)/y;b[v+1]=(a*w+f*x+B)/y}};this._fp=function(b,e){for(var d=b.length,a=0;a<d;a++){var g=b[a],c=e[a],f=this.a13*g+this.a23*c+this.a33;b[a]=(this.a11*g+this.a21*c+this.a31)/
f;e[a]=(this.a12*g+this.a22*c+this.a32)/f}};this._fr=function(){return new _ae(this.a22*this.a33-this.a23*this.a32,this.a23*this.a31-this.a21*this.a33,this.a21*this.a32-this.a22*this.a31,this.a13*this.a32-this.a12*this.a33,this.a11*this.a33-this.a13*this.a31,this.a12*this.a31-this.a11*this.a32,this.a12*this.a23-this.a13*this.a22,this.a13*this.a21-this.a11*this.a23,this.a11*this.a22-this.a12*this.a21)};this.times=function(b){return new _ae(this.a11*b.a11+this.a21*b.a12+this.a31*b.a13,this.a11*b.a21+
this.a21*b.a22+this.a31*b.a23,this.a11*b.a31+this.a21*b.a32+this.a31*b.a33,this.a12*b.a11+this.a22*b.a12+this.a32*b.a13,this.a12*b.a21+this.a22*b.a22+this.a32*b.a23,this.a12*b.a31+this.a22*b.a32+this.a32*b.a33,this.a13*b.a11+this.a23*b.a12+this.a33*b.a13,this.a13*b.a21+this.a23*b.a22+this.a33*b.a23,this.a13*b.a31+this.a23*b.a32+this.a33*b.a33)}}_ae._ag=function(c,a,d,b,e,g,f,h,k,l,q,m,u,t,n,r){c=this._be(c,a,d,b,e,g,f,h);return this._bf(k,l,q,m,u,t,n,r).times(c)};
_ae._bf=function(c,a,d,b,e,g,f,h){dy2=h-g;dy3=a-b+g-h;if(0==dy2&&0==dy3)return new _ae(d-c,e-d,c,b-a,g-b,a,0,0,1);dx1=d-e;dx2=f-e;dx3=c-d+e-f;dy1=b-g;_dr=dx1*dy2-dx2*dy1;a13=(dx3*dy2-dx2*dy3)/_dr;a23=(dx1*dy3-dx3*dy1)/_dr;return new _ae(d-c+a13*d,f-c+a23*f,c,b-a+a13*b,h-a+a23*h,a,a13,a23,1)};_ae._be=function(c,a,d,b,e,g,f,h){return this._bf(c,a,d,b,e,g,f,h)._fr()};function _bg(c,a){this.bits=c;this.points=a}
function Detector(c){this.image=c;this._am=null;this._bi=function(a,d,b,e){var g=Math.abs(e-d)>Math.abs(b-a);if(g){var c=a;a=d;d=c;c=b;b=e;e=c}for(var h=Math.abs(b-a),k=Math.abs(e-d),l=-h>>1,q=d<e?1:-1,m=a<b?1:-1,u=0,t=a,c=d;t!=b;t+=m){var n=g?c:t,r=g?t:c;1==u?this.image[n+r*qrcode.width]&&u++:this.image[n+r*qrcode.width]||u++;if(3==u)return e=t-a,d=c-d,Math.sqrt(e*e+d*d);l+=k;if(0<l){if(c==e)break;c+=q;l-=h}}a=b-a;d=e-d;return Math.sqrt(a*a+d*d)};this._bh=function(a,d,b,e){var c=this._bi(a,d,b,e),
f=1;b=a-(b-a);0>b?(f=a/(a-b),b=0):b>=qrcode.width&&(f=(qrcode.width-1-a)/(b-a),b=qrcode.width-1);e=Math.floor(d-(e-d)*f);f=1;0>e?(f=d/(d-e),e=0):e>=qrcode.height&&(f=(qrcode.height-1-d)/(e-d),e=qrcode.height-1);b=Math.floor(a+(b-a)*f);c+=this._bi(a,d,b,e);return c-1};this._bj=function(a,d){var b=this._bh(Math.floor(a.X),Math.floor(a.Y),Math.floor(d.X),Math.floor(d.Y)),e=this._bh(Math.floor(d.X),Math.floor(d.Y),Math.floor(a.X),Math.floor(a.Y));return isNaN(b)?e/7:isNaN(e)?b/7:(b+e)/14};this._bk=function(a,
d,b){return(this._bj(a,d)+this._bj(a,b))/2};this.distance=function(a,d){xDiff=a.X-d.X;yDiff=a.Y-d.Y;return Math.sqrt(xDiff*xDiff+yDiff*yDiff)};this._bx=function(a,d,b,e){d=Math.round(this.distance(a,d)/e);a=Math.round(this.distance(a,b)/e);a=(d+a>>1)+7;switch(a&3){case 0:a++;break;case 2:a--;break;case 3:throw"Error";}return a};this._bl=function(a,d,b,e){var c=Math.floor(e*a);e=Math.max(0,d-c);d=Math.min(qrcode.width-1,d+c);if(d-e<3*a)throw"Error";var f=Math.max(0,b-c);b=Math.min(qrcode.height-1,
b+c);return(new _ak(this.image,e,f,d-e,b-f,a,this._am)).find()};this.createTransform=function(a,d,b,e,c){c-=3.5;var f,h,k;null!=e?(f=e.X,e=e.Y,h=k=c-3):(f=d.X-a.X+b.X,e=d.Y-a.Y+b.Y,h=k=c);return _ae._ag(3.5,3.5,c,3.5,h,k,3.5,c,a.X,a.Y,d.X,d.Y,f,e,b.X,b.Y)};this._bz=function(a,d,b){return _aa._af(a,b,d)};this._cd=function(a){var d=a._gq,b=a._gs;a=a._gp;var e=this._bk(d,b,a);if(1>e)throw"Error";var c=this._bx(d,b,a,e),f=_a3._at(c),h=f._cr-7,k=null;if(0<f._as.length)for(f=1-3/h,k=Math.floor(d.X+f*(b.X-
d.X+a.X-d.X)),f=Math.floor(d.Y+f*(b.Y-d.Y+a.Y-d.Y));;){k=this._bl(e,k,f,4);break}e=this.createTransform(d,b,a,k,c);c=this._bz(this.image,e,c);return new _bg(c,null==k?[a,d,b]:[a,d,b,k])};this.detect=function(){var a=(new _cc)._ce(this.image);return this._cd(a)}}
var _ca=21522,_cb=[[21522,0],[20773,1],[24188,2],[23371,3],[17913,4],[16590,5],[20375,6],[19104,7],[30660,8],[29427,9],[32170,10],[30877,11],[26159,12],[25368,13],[27713,14],[26998,15],[5769,16],[5054,17],[7399,18],[6608,19],[1890,20],[597,21],[3340,22],[2107,23],[13663,24],[12392,25],[16177,26],[14854,27],[9396,28],[8579,29],[11994,30],[11245,31]],_ch=[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4];
function _ax(c){this._cf=_cg.forBits(c>>3&3);this._fe=c&7;this.__defineGetter__("_cg",function(){return this._cf});this.__defineGetter__("_dx",function(){return this._fe});this.GetHashCode=function(){return this._cf.ordinal()<<3|_fe};this.Equals=function(a){return this._cf==a._cf&&this._fe==a._fe}}_ax._gj=function(c,a){c^=a;return _ch[c&15]+_ch[_ew(c,4)&15]+_ch[_ew(c,8)&15]+_ch[_ew(c,12)&15]+_ch[_ew(c,16)&15]+_ch[_ew(c,20)&15]+_ch[_ew(c,24)&15]+_ch[_ew(c,28)&15]};
_ax._ci=function(c){var a=_ax._cj(c);return null!=a?a:_ax._cj(c^_ca)};_ax._cj=function(c){for(var a=4294967295,d=0,b=0;b<_cb.length;b++){var e=_cb[b],g=e[0];if(g==c)return new _ax(e[1]);g=this._gj(c,g);g<a&&(d=e[1],a=g)}return 3>=a?new _ax(d):null};function _cg(c,a,d){this._ff=c;this.bits=a;this.name=d;this.__defineGetter__("Bits",function(){return this.bits});this.__defineGetter__("Name",function(){return this.name});this.ordinal=function(){return this._ff}}
_cg.forBits=function(c){if(0>c||c>=FOR_BITS.length)throw"bad arguments";return FOR_BITS[c]};var L=new _cg(0,1,"L"),M=new _cg(1,0,"M"),Q=new _cg(2,3,"Q"),H=new _cg(3,2,"H"),FOR_BITS=[M,L,H,Q];
function _ac(c,a){a||(a=c);if(1>c||1>a)throw"Both dimensions must be greater than 0";this.width=c;this.height=a;var d=c>>5;0!=(c&31)&&d++;this.rowSize=d;this.bits=Array(d*a);for(d=0;d<this.bits.length;d++)this.bits[d]=0;this.__defineGetter__("Width",function(){return this.width});this.__defineGetter__("Height",function(){return this.height});this.__defineGetter__("Dimension",function(){if(this.width!=this.height)throw"Can't call getDimension() on a non-square matrix";return this.width});this._ds=
function(b,e){return 0!=(_ew(this.bits[e*this.rowSize+(b>>5)],b&31)&1)};this._dq=function(b,e){this.bits[e*this.rowSize+(b>>5)]|=1<<(b&31)};this.flip=function(b,e){this.bits[e*this.rowSize+(b>>5)]^=1<<(b&31)};this.clear=function(){for(var b=this.bits.length,e=0;e<b;e++)this.bits[e]=0};this._bq=function(b,e,a,d){if(0>e||0>b)throw"Left and top must be nonnegative";if(1>d||1>a)throw"Height and width must be at least 1";a=b+a;d=e+d;if(d>this.height||a>this.width)throw"The region must fit inside the matrix";
for(;e<d;e++)for(var c=e*this.rowSize,k=b;k<a;k++)this.bits[c+(k>>5)]|=1<<(k&31)}}function _dl(c,a){this._dv=c;this._dw=a;this.__defineGetter__("_du",function(){return this._dv});this.__defineGetter__("Codewords",function(){return this._dw})}
_dl._gn=function(c,a,d){if(c.length!=a._dp)throw"bad arguments";var b=a._bu(d);d=0;var e=b._fb();for(a=0;a<e.length;a++)d+=e[a].Count;d=Array(d);for(var g=0,f=0;f<e.length;f++){var h=e[f];for(a=0;a<h.Count;a++){var k=h._dm,l=b._bo+k;d[g++]=new _dl(k,Array(l))}}a=d[0]._dw.length;for(e=d.length-1;0<=e&&d[e]._dw.length!=a;)e--;e++;b=a-b._bo;for(a=h=0;a<b;a++)for(f=0;f<g;f++)d[f]._dw[a]=c[h++];for(f=e;f<g;f++)d[f]._dw[b]=c[h++];k=d[0]._dw.length;for(a=b;a<k;a++)for(f=0;f<g;f++)d[f]._dw[f<e?a:a+1]=c[h++];
return d};
function _cl(c){var a=c.Dimension;if(21>a||1!=(a&3))throw"Error _cl";this._au=c;this._co=this._cp=null;this._dk=function(a,b,e){return this._au._ds(a,b)?e<<1|1:e<<1};this._cm=function(){if(null!=this._co)return this._co;for(var a=0,b=0;6>b;b++)a=this._dk(b,8,a);a=this._dk(7,8,a);a=this._dk(8,8,a);a=this._dk(8,7,a);for(b=5;0<=b;b--)a=this._dk(8,b,a);this._co=_ax._ci(a);if(null!=this._co)return this._co;for(var e=this._au.Dimension,a=0,c=e-8,b=e-1;b>=c;b--)a=this._dk(b,8,a);for(b=e-7;b<e;b++)a=this._dk(8,
b,a);this._co=_ax._ci(a);if(null!=this._co)return this._co;throw"Error _cm";};this._cq=function(){if(null!=this._cp)return this._cp;var a=this._au.Dimension,b=a-17>>2;if(6>=b)return _a3._av(b);for(var b=0,e=a-11,c=5;0<=c;c--)for(var f=a-9;f>=e;f--)b=this._dk(f,c,b);this._cp=_a3._aw(b);if(null!=this._cp&&this._cp._cr==a)return this._cp;b=0;for(f=5;0<=f;f--)for(c=a-9;c>=e;c--)b=this._dk(f,c,b);this._cp=_a3._aw(b);if(null!=this._cp&&this._cp._cr==a)return this._cp;throw"Error _cq";};this._gk=function(){var a=
this._cm(),b=this._cq(),e=_dx._gl(a._dx),a=this._au.Dimension;e._dj(this._au,a);for(var e=b._aq(),c=!0,f=Array(b._dp),h=0,k=0,l=0,q=a-1;0<q;q-=2){6==q&&q--;for(var m=0;m<a;m++)for(var u=c?a-1-m:m,t=0;2>t;t++)e._ds(q-t,u)||(l++,k<<=1,this._au._ds(q-t,u)&&(k|=1),8==l&&(f[h++]=k,k=l=0));c^=1}if(h!=b._dp)throw"Error _gk";return f}}_dx={_gl:function(c){if(0>c||7<c)throw"bad arguments";return _dx._dy[c]}};
function _fg(){this._dj=function(c,a){for(var d=0;d<a;d++)for(var b=0;b<a;b++)this._fw(d,b)&&c.flip(b,d)};this._fw=function(c,a){return 0==(c+a&1)}}function _fh(){this._dj=function(c,a){for(var d=0;d<a;d++)for(var b=0;b<a;b++)this._fw(d,b)&&c.flip(b,d)};this._fw=function(c,a){return 0==(c&1)}}function _fi(){this._dj=function(c,a){for(var d=0;d<a;d++)for(var b=0;b<a;b++)this._fw(d,b)&&c.flip(b,d)};this._fw=function(c,a){return 0==a%3}}
function _fj(){this._dj=function(c,a){for(var d=0;d<a;d++)for(var b=0;b<a;b++)this._fw(d,b)&&c.flip(b,d)};this._fw=function(c,a){return 0==(c+a)%3}}function _fk(){this._dj=function(c,a){for(var d=0;d<a;d++)for(var b=0;b<a;b++)this._fw(d,b)&&c.flip(b,d)};this._fw=function(c,a){return 0==(_ew(c,1)+a/3&1)}}function _fl(){this._dj=function(c,a){for(var d=0;d<a;d++)for(var b=0;b<a;b++)this._fw(d,b)&&c.flip(b,d)};this._fw=function(c,a){var d=c*a;return 0==(d&1)+d%3}}
function _fm(){this._dj=function(c,a){for(var d=0;d<a;d++)for(var b=0;b<a;b++)this._fw(d,b)&&c.flip(b,d)};this._fw=function(c,a){var d=c*a;return 0==((d&1)+d%3&1)}}function _fn(){this._dj=function(c,a){for(var d=0;d<a;d++)for(var b=0;b<a;b++)this._fw(d,b)&&c.flip(b,d)};this._fw=function(c,a){return 0==((c+a&1)+c*a%3&1)}}_dx._dy=[new _fg,new _fh,new _fi,new _fj,new _fk,new _fl,new _fm,new _fn];
function _db(c){this._fa=c;this.decode=function(a,d){for(var b=new _bp(this._fa,a),e=Array(d),c=0;c<e.length;c++)e[c]=0;for(var f=!0,c=0;c<d;c++){var h=b.evaluateAt(this._fa.exp(c));e[e.length-1-c]=h;0!=h&&(f=!1)}if(!f)for(c=new _bp(this._fa,e),b=this._eb(this._fa._ba(d,1),c,d),c=b[1],b=this._ey(b[0]),e=this._di(c,b,!1),c=0;c<b.length;c++){f=a.length-1-this._fa.log(b[c]);if(0>f)throw"ReedSolomonException Bad error location";a[f]=_az._bd(a[f],e[c])}};this._eb=function(a,c,b){if(a._ec<c._ec){var e=
a;a=c;c=e}for(var e=this._fa.One,g=this._fa.Zero,f=this._fa.Zero,h=this._fa.One;c._ec>=Math.floor(b/2);){var k=a,l=e,q=f;a=c;e=g;f=h;if(a.Zero)throw"r_{i-1} was zero";c=k;h=this._fa.Zero;g=a._ex(a._ec);for(g=this._fa.inverse(g);c._ec>=a._ec&&!c.Zero;){var k=c._ec-a._ec,m=this._fa.multiply(c._ex(c._ec),g),h=h._bd(this._fa._ba(k,m));c=c._bd(a._dc(k,m))}g=h.multiply1(e)._bd(l);h=h.multiply1(f)._bd(q)}b=h._ex(0);if(0==b)throw"ReedSolomonException sigmaTilde(0) was zero";b=this._fa.inverse(b);a=h.multiply2(b);
b=c.multiply2(b);return[a,b]};this._ey=function(a){var c=a._ec;if(1==c)return Array(a._ex(1));for(var b=Array(c),e=0,g=1;256>g&&e<c;g++)0==a.evaluateAt(g)&&(b[e]=this._fa.inverse(g),e++);if(e!=c)throw"Error locator degree does not match number of roots";return b};this._di=function(a,c,b){for(var e=c.length,g=Array(e),f=0;f<e;f++){for(var h=this._fa.inverse(c[f]),k=1,l=0;l<e;l++)f!=l&&(k=this._fa.multiply(k,_az._bd(1,this._fa.multiply(c[l],h))));g[f]=this._fa.multiply(a.evaluateAt(h),this._fa.inverse(k));
b&&(g[f]=this._fa.multiply(g[f],h))}return g}}
function _bp(c,a){if(null==a||0==a.length)throw"bad arguments";this._fa=c;var d=a.length;if(1<d&&0==a[0]){for(var b=1;b<d&&0==a[b];)b++;if(b==d)this._dd=c.Zero._dd;else{this._dd=Array(d-b);for(d=0;d<this._dd.length;d++)this._dd[d]=0;for(d=0;d<this._dd.length;d++)this._dd[d]=a[b+d]}}else this._dd=a;this.__defineGetter__("Zero",function(){return 0==this._dd[0]});this.__defineGetter__("_ec",function(){return this._dd.length-1});this.__defineGetter__("Coefficients",function(){return this._dd});this._ex=
function(b){return this._dd[this._dd.length-1-b]};this.evaluateAt=function(b){if(0==b)return this._ex(0);var a=this._dd.length;if(1==b){for(var c=b=0;c<a;c++)b=_az._bd(b,this._dd[c]);return b}for(var d=this._dd[0],c=1;c<a;c++)d=_az._bd(this._fa.multiply(b,d),this._dd[c]);return d};this._bd=function(b){if(this._fa!=b._fa)throw"GF256Polys do not have same _az _fa";if(this.Zero)return b;if(b.Zero)return this;var a=this._dd;b=b._dd;if(a.length>b.length){var d=a,a=b;b=d}for(var d=Array(b.length),h=b.length-
a.length,k=0;k<h;k++)d[k]=b[k];for(k=h;k<b.length;k++)d[k]=_az._bd(a[k-h],b[k]);return new _bp(c,d)};this.multiply1=function(b){if(this._fa!=b._fa)throw"GF256Polys do not have same _az _fa";if(this.Zero||b.Zero)return this._fa.Zero;var a=this._dd,c=a.length;b=b._dd;for(var d=b.length,k=Array(c+d-1),l=0;l<c;l++)for(var q=a[l],m=0;m<d;m++)k[l+m]=_az._bd(k[l+m],this._fa.multiply(q,b[m]));return new _bp(this._fa,k)};this.multiply2=function(b){if(0==b)return this._fa.Zero;if(1==b)return this;for(var a=
this._dd.length,c=Array(a),d=0;d<a;d++)c[d]=this._fa.multiply(this._dd[d],b);return new _bp(this._fa,c)};this._dc=function(b,a){if(0>b)throw"bad arguments";if(0==a)return this._fa.Zero;for(var c=this._dd.length,d=Array(c+b),k=0;k<d.length;k++)d[k]=0;for(k=0;k<c;k++)d[k]=this._fa.multiply(this._dd[k],a);return new _bp(this._fa,d)};this.divide=function(b){if(this._fa!=b._fa)throw"GF256Polys do not have same _az _fa";if(b.Zero)throw"Divide by 0";for(var a=this._fa.Zero,c=this,d=b._ex(b._ec),d=this._fa.inverse(d);c._ec>=
b._ec&&!c.Zero;)var k=c._ec-b._ec,l=this._fa.multiply(c._ex(c._ec),d),q=b._dc(k,l),k=this._fa._ba(k,l),a=a._bd(k),c=c._bd(q);return[a,c]}}
function _az(c){this._gh=Array(256);this._gi=Array(256);for(var a=1,d=0;256>d;d++)this._gh[d]=a,a<<=1,256<=a&&(a^=c);for(d=0;255>d;d++)this._gi[this._gh[d]]=d;c=Array(1);c[0]=0;this.zero=new _bp(this,Array(c));c=Array(1);c[0]=1;this.one=new _bp(this,Array(c));this.__defineGetter__("Zero",function(){return this.zero});this.__defineGetter__("One",function(){return this.one});this._ba=function(b,a){if(0>b)throw"bad arguments";if(0==a)return zero;for(var c=Array(b+1),d=0;d<c.length;d++)c[d]=0;c[0]=a;
return new _bp(this,c)};this.exp=function(b){return this._gh[b]};this.log=function(b){if(0==b)throw"bad arguments";return this._gi[b]};this.inverse=function(b){if(0==b)throw"System.ArithmeticException";return this._gh[255-this._gi[b]]};this.multiply=function(b,a){return 0==b||0==a?0:1==b?a:1==a?b:this._gh[(this._gi[b]+this._gi[a])%255]}}_az._bb=new _az(285);_az._bc=new _az(301);_az._bd=function(c,a){return c^a};Decoder={};Decoder.rsDecoder=new _db(_az._bb);
Decoder.correctErrors=function(c,a){for(var d=c.length,b=Array(d),e=0;e<d;e++)b[e]=c[e]&255;d=c.length-a;try{Decoder.rsDecoder.decode(b,d)}catch(g){throw g;}for(e=0;e<a;e++)c[e]=b[e]};Decoder.decode=function(c){var a=new _cl(c);c=a._cq();for(var d=a._cm()._cg,a=a._gk(),a=_dl._gn(a,c,d),b=0,e=0;e<a.length;e++)b+=a[e]._du;for(var b=Array(b),g=0,f=0;f<a.length;f++){var e=a[f],h=e.Codewords,k=e._du;Decoder.correctErrors(h,k);for(e=0;e<k;e++)b[g++]=h[e]}return new QRCodeDataBlockReader(b,c._fd,d.Bits)};
qrcode={sourceCanvas:null,imagedata:null,width:0,height:0,qrCodeSymbol:null,debug:!1,maxImgSize:1048576,_eo:[[10,9,8,8],[12,11,16,10],[14,13,16,12]],callback:null,decode:function(c){if(0==arguments.length){var a=qrcode.sourceCanvas||document.getElementById("qr-canvas"),d=a.getContext("2d");qrcode.width=a.width;qrcode.height=a.height;qrcode.imagedata=d.getImageData(0,0,qrcode.width,qrcode.height);qrcode.result=qrcode.process(d);null!=qrcode.callback&&qrcode.callback(qrcode.result);return qrcode.result}var b=
new Image;b.onload=function(){var a=document.getElementById("out-canvas");null!=a&&(a=a.getContext("2d"),a.clearRect(0,0,320,240),a.drawImage(b,0,0,320,240));var a=document.createElement("canvas"),c=a.getContext("2d"),d=b.height,h=b.width;b.width*b.height>qrcode.maxImgSize&&(h=b.width/b.height,d=Math.sqrt(qrcode.maxImgSize/h),h*=d);a.width=h;a.height=d;c.drawImage(b,0,0,a.width,a.height);qrcode.width=a.width;qrcode.height=a.height;try{qrcode.imagedata=c.getImageData(0,0,a.width,a.height)}catch(k){qrcode.result=
"Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";null!=qrcode.callback&&qrcode.callback(qrcode.result);return}try{qrcode.result=qrcode.process(c)}catch(l){qrcode.result="error decoding QR Code"}null!=qrcode.callback&&qrcode.callback(qrcode.result)};b.src=c},isUrl:function(c){return/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(c)},decode_url:function(c){var a="";try{a=escape(c)}catch(d){a=c}c=
"";try{c=decodeURIComponent(a)}catch(b){c=a}return c},decode_utf8:function(c){return qrcode.isUrl(c)?qrcode.decode_url(c):c},process:function(c){(new Date).getTime();var a=qrcode.grayScaleToBitmap(qrcode.grayscale());if(qrcode.debug){for(var d=0;d<qrcode.height;d++)for(var b=0;b<qrcode.width;b++){var e=4*b+d*qrcode.width*4;qrcode.imagedata.data[e]=0;qrcode.imagedata.data[e+1]=0;qrcode.imagedata.data[e+2]=a[b+d*qrcode.width]?255:0}c.putImageData(qrcode.imagedata,0,0)}a=(new Detector(a)).detect();qrcode.debug&&
c.putImageData(qrcode.imagedata,0,0);c=Decoder.decode(a.bits).DataByte;a="";for(d=0;d<c.length;d++)for(b=0;b<c[d].length;b++)a+=String.fromCharCode(c[d][b]);(new Date).getTime();return qrcode.decode_utf8(a)},getPixel:function(c,a){if(qrcode.width<c)throw"point error";if(qrcode.height<a)throw"point error";point=4*c+a*qrcode.width*4;return p=(33*qrcode.imagedata.data[point]+34*qrcode.imagedata.data[point+1]+33*qrcode.imagedata.data[point+2])/100},binarize:function(c){for(var a=Array(qrcode.width*qrcode.height),
d=0;d<qrcode.height;d++)for(var b=0;b<qrcode.width;b++){var e=qrcode.getPixel(b,d);a[b+d*qrcode.width]=e<=c?!0:!1}return a},_em:function(c){for(var a=Math.floor(qrcode.width/4),d=Math.floor(qrcode.height/4),b=Array(4),e=0;4>e;e++){b[e]=Array(4);for(var g=0;4>g;g++)b[e][g]=[0,0]}for(e=0;4>e;e++)for(g=0;4>g;g++){b[g][e][0]=255;for(var f=0;f<d;f++)for(var h=0;h<a;h++){var k=c[a*g+h+(d*e+f)*qrcode.width];k<b[g][e][0]&&(b[g][e][0]=k);k>b[g][e][1]&&(b[g][e][1]=k)}}c=Array(4);for(a=0;4>a;a++)c[a]=Array(4);
for(e=0;4>e;e++)for(g=0;4>g;g++)c[g][e]=Math.floor((b[g][e][0]+b[g][e][1])/2);return c},grayScaleToBitmap:function(c){for(var a=qrcode._em(c),d=a.length,b=Math.floor(qrcode.width/d),e=Math.floor(qrcode.height/d),g=Array(qrcode.height*qrcode.width),f=0;f<d;f++)for(var h=0;h<d;h++)for(var k=0;k<e;k++)for(var l=0;l<b;l++)g[b*h+l+(e*f+k)*qrcode.width]=c[b*h+l+(e*f+k)*qrcode.width]<a[h][f]?!0:!1;return g},grayscale:function(){for(var c=Array(qrcode.width*qrcode.height),a=0;a<qrcode.height;a++)for(var d=
0;d<qrcode.width;d++){var b=qrcode.getPixel(d,a);c[d+a*qrcode.width]=b}return c}};function _ew(c,a){return 0<=c?c>>a:(c>>a)+(2<<~a)}Array.prototype.remove=function(c,a){var d=this.slice((a||c)+1||this.length);this.length=0>c?this.length+c:c;return this.push.apply(this,d)};var _gf=3,_eh=57,_el=8,_eg=2;
qrcode._er=function(c){function a(b,a){xDiff=b.X-a.X;yDiff=b.Y-a.Y;return Math.sqrt(xDiff*xDiff+yDiff*yDiff)}var d=a(c[0],c[1]),b=a(c[1],c[2]),e=a(c[0],c[2]);b>=d&&b>=e?(b=c[0],d=c[1],e=c[2]):e>=b&&e>=d?(b=c[1],d=c[0],e=c[2]):(b=c[2],d=c[0],e=c[1]);if(0>function(b,a,c){var d=a.x;a=a.y;return(c.x-d)*(b.y-a)-(c.y-a)*(b.x-d)}(d,b,e))var g=d,d=e,e=g;c[0]=d;c[1]=b;c[2]=e};
function _cz(c,a,d){this.x=c;this.y=a;this.count=1;this._aj=d;this.__defineGetter__("_ei",function(){return this._aj});this.__defineGetter__("Count",function(){return this.count});this.__defineGetter__("X",function(){return this.x});this.__defineGetter__("Y",function(){return this.y});this._ek=function(){this.count++};this._ev=function(b,a,c){return Math.abs(a-this.y)<=b&&Math.abs(c-this.x)<=b?(b=Math.abs(b-this._aj),1>=b||1>=b/this._aj):!1}}
function _es(c){this._go=c[0];this._gu=c[1];this._gr=c[2];this.__defineGetter__("_gp",function(){return this._go});this.__defineGetter__("_gq",function(){return this._gu});this.__defineGetter__("_gs",function(){return this._gr})}
function _cc(){this.image=null;this._cv=[];this._ge=!1;this._al=[0,0,0,0,0];this._am=null;this.__defineGetter__("_da",function(){this._al[0]=0;this._al[1]=0;this._al[2]=0;this._al[3]=0;this._al[4]=0;return this._al});this._ao=function(c){for(var a=0,d=0;5>d;d++){var b=c[d];if(0==b)return!1;a+=b}if(7>a)return!1;a=Math.floor((a<<_el)/7);d=Math.floor(a/2);return Math.abs(a-(c[0]<<_el))<d&&Math.abs(a-(c[1]<<_el))<d&&Math.abs(3*a-(c[2]<<_el))<3*d&&Math.abs(a-(c[3]<<_el))<d&&Math.abs(a-(c[4]<<_el))<d};
this._an=function(c,a){return a-c[4]-c[3]-c[2]/2};this._ap=function(c,a,d,b){for(var e=this.image,g=qrcode.height,f=this._da,h=c;0<=h&&e[a+h*qrcode.width];)f[2]++,h--;if(0>h)return NaN;for(;0<=h&&!e[a+h*qrcode.width]&&f[1]<=d;)f[1]++,h--;if(0>h||f[1]>d)return NaN;for(;0<=h&&e[a+h*qrcode.width]&&f[0]<=d;)f[0]++,h--;if(f[0]>d)return NaN;for(h=c+1;h<g&&e[a+h*qrcode.width];)f[2]++,h++;if(h==g)return NaN;for(;h<g&&!e[a+h*qrcode.width]&&f[3]<d;)f[3]++,h++;if(h==g||f[3]>=d)return NaN;for(;h<g&&e[a+h*qrcode.width]&&
f[4]<d;)f[4]++,h++;return f[4]>=d||5*Math.abs(f[0]+f[1]+f[2]+f[3]+f[4]-b)>=2*b?NaN:this._ao(f)?this._an(f,h):NaN};this._ej=function(c,a,d,b){for(var e=this.image,g=qrcode.width,f=this._da,h=c;0<=h&&e[h+a*qrcode.width];)f[2]++,h--;if(0>h)return NaN;for(;0<=h&&!e[h+a*qrcode.width]&&f[1]<=d;)f[1]++,h--;if(0>h||f[1]>d)return NaN;for(;0<=h&&e[h+a*qrcode.width]&&f[0]<=d;)f[0]++,h--;if(f[0]>d)return NaN;for(h=c+1;h<g&&e[h+a*qrcode.width];)f[2]++,h++;if(h==g)return NaN;for(;h<g&&!e[h+a*qrcode.width]&&f[3]<
d;)f[3]++,h++;if(h==g||f[3]>=d)return NaN;for(;h<g&&e[h+a*qrcode.width]&&f[4]<d;)f[4]++,h++;return f[4]>=d||5*Math.abs(f[0]+f[1]+f[2]+f[3]+f[4]-b)>=b?NaN:this._ao(f)?this._an(f,h):NaN};this._cu=function(c,a,d){var b=c[0]+c[1]+c[2]+c[3]+c[4];d=this._an(c,d);a=this._ap(a,Math.floor(d),c[2],b);if(!isNaN(a)&&(d=this._ej(Math.floor(d),Math.floor(a),c[2],b),!isNaN(d))){c=b/7;for(var b=!1,e=this._cv.length,g=0;g<e;g++){var f=this._cv[g];if(f._ev(c,a,d)){f._ek();b=!0;break}}b||(d=new _cz(d,a,c),this._cv.push(d),
null!=this._am&&this._am._ep(d));return!0}return!1};this._ee=function(){var c=this._cv.length;if(3>c)throw"Couldn't find enough finder patterns";if(3<c){for(var a=0,d=0,b=0;b<c;b++)var e=this._cv[b]._ei,a=a+e,d=d+e*e;var g=a/c;this._cv.sort(function(b,a){var c=Math.abs(a._ei-g),d=Math.abs(b._ei-g);return c<d?-1:c==d?0:1});b=Math.sqrt(d/c-g*g);c=Math.max(.2*g,b);for(b=0;b<this._cv.length&&3<this._cv.length;b++)Math.abs(this._cv[b]._ei-g)>c&&(this._cv.remove(b),b--)}3<this._cv.length&&this._cv.sort(function(b,
a){return b.count>a.count?-1:b.count<a.count?1:0});return[this._cv[0],this._cv[1],this._cv[2]]};this._eq=function(){var c=this._cv.length;if(1>=c)return 0;for(var a=null,d=0;d<c;d++){var b=this._cv[d];if(b.Count>=_eg)if(null==a)a=b;else return this._ge=!0,Math.floor((Math.abs(a.X-b.X)-Math.abs(a.Y-b.Y))/2)}return 0};this._cx=function(){for(var c=0,a=0,d=this._cv.length,b=0;b<d;b++){var e=this._cv[b];e.Count>=_eg&&(c++,a+=e._ei)}if(3>c)return!1;for(var c=a/d,g=0,b=0;b<d;b++)e=this._cv[b],g+=Math.abs(e._ei-
c);return g<=.05*a};this._ce=function(c){this.image=c;var a=qrcode.height,d=qrcode.width,b=Math.floor(3*a/(4*_eh));b<_gf&&(b=_gf);for(var e=!1,g=Array(5),f=b-1;f<a&&!e;f+=b){g[0]=0;g[1]=0;g[2]=0;g[3]=0;for(var h=g[4]=0,k=0;k<d;k++)if(c[k+f*qrcode.width])1==(h&1)&&h++,g[h]++;else if(0==(h&1))if(4==h)if(this._ao(g)){if(h=this._cu(g,f,k))b=2,this._ge?e=this._cx():(h=this._eq(),h>g[2]&&(f+=h-g[2]-b,k=d-1));else{do k++;while(k<d&&!c[k+f*qrcode.width]);k--}h=0;g[0]=0;g[1]=0;g[2]=0;g[3]=0;g[4]=0}else g[0]=
g[2],g[1]=g[3],g[2]=g[4],g[3]=1,g[4]=0,h=3;else g[++h]++;else g[h]++;this._ao(g)&&(h=this._cu(g,f,d))&&(b=g[0],this._ge&&(e=_cx()))}c=this._ee();qrcode._er(c);return new _es(c)}}
function _ai(c,a,d){this.x=c;this.y=a;this.count=1;this._aj=d;this.__defineGetter__("_ei",function(){return this._aj});this.__defineGetter__("Count",function(){return this.count});this.__defineGetter__("X",function(){return Math.floor(this.x)});this.__defineGetter__("Y",function(){return Math.floor(this.y)});this._ek=function(){this.count++};this._ev=function(b,a,c){return Math.abs(a-this.y)<=b&&Math.abs(c-this.x)<=b?(b=Math.abs(b-this._aj),1>=b||1>=b/this._aj):!1}}
function _ak(c,a,d,b,e,g,f){this.image=c;this._cv=[];this.startX=a;this.startY=d;this.width=b;this.height=e;this._ef=g;this._al=[0,0,0];this._am=f;this._an=function(b,a){return a-b[2]-b[1]/2};this._ao=function(b){for(var a=this._ef,c=a/2,d=0;3>d;d++)if(Math.abs(a-b[d])>=c)return!1;return!0};this._ap=function(b,a,c,d){var e=this.image,g=qrcode.height,f=this._al;f[0]=0;f[1]=0;f[2]=0;for(var n=b;0<=n&&e[a+n*qrcode.width]&&f[1]<=c;)f[1]++,n--;if(0>n||f[1]>c)return NaN;for(;0<=n&&!e[a+n*qrcode.width]&&
f[0]<=c;)f[0]++,n--;if(f[0]>c)return NaN;for(n=b+1;n<g&&e[a+n*qrcode.width]&&f[1]<=c;)f[1]++,n++;if(n==g||f[1]>c)return NaN;for(;n<g&&!e[a+n*qrcode.width]&&f[2]<=c;)f[2]++,n++;return f[2]>c||5*Math.abs(f[0]+f[1]+f[2]-d)>=2*d?NaN:this._ao(f)?this._an(f,n):NaN};this._cu=function(b,a,c){var d=b[0]+b[1]+b[2];c=this._an(b,c);a=this._ap(a,Math.floor(c),2*b[1],d);if(!isNaN(a)){b=(b[0]+b[1]+b[2])/3;for(var d=this._cv.length,e=0;e<d;e++)if(this._cv[e]._ev(b,a,c))return new _ai(c,a,b);c=new _ai(c,a,b);this._cv.push(c);
null!=this._am&&this._am._ep(c)}return null};this.find=function(){for(var a=this.startX,e=this.height,f=a+b,g=d+(e>>1),m=[0,0,0],u=0;u<e;u++){var t=g+(0==(u&1)?u+1>>1:-(u+1>>1));m[0]=0;m[1]=0;m[2]=0;for(var n=a;n<f&&!c[n+qrcode.width*t];)n++;for(var r=0;n<f;){if(c[n+t*qrcode.width])if(1==r)m[r]++;else if(2==r){if(this._ao(m)&&(r=this._cu(m,t,n),null!=r))return r;m[0]=m[2];m[1]=1;m[2]=0;r=1}else m[++r]++;else 1==r&&r++,m[r]++;n++}if(this._ao(m)&&(r=this._cu(m,t,f),null!=r))return r}if(0!=this._cv.length)return this._cv[0];
throw"Couldn't find enough alignment patterns";}}
function QRCodeDataBlockReader(c,a,d){this._ed=0;this._cw=7;this.dataLength=0;this.blocks=c;this._en=d;9>=a?this.dataLengthMode=0:10<=a&&26>=a?this.dataLengthMode=1:27<=a&&40>=a&&(this.dataLengthMode=2);this._gd=function(b){var a=0;if(b<this._cw+1){for(var c=0,a=0;a<b;a++)c+=1<<a;c<<=this._cw-b+1;a=(this.blocks[this._ed]&c)>>this._cw-b+1;this._cw-=b;return a}if(b<this._cw+1+8){for(var d=0,a=0;a<this._cw+1;a++)d+=1<<a;a=(this.blocks[this._ed]&d)<<b-(this._cw+1);this._ed++;a+=this.blocks[this._ed]>>
8-(b-(this._cw+1));this._cw-=b%8;0>this._cw&&(this._cw=8+this._cw);return a}if(b<this._cw+1+16){for(a=c=d=0;a<this._cw+1;a++)d+=1<<a;d=(this.blocks[this._ed]&d)<<b-(this._cw+1);this._ed++;var h=this.blocks[this._ed]<<b-(this._cw+1+8);this._ed++;for(a=0;a<b-(this._cw+1+8);a++)c+=1<<a;c<<=8-(b-(this._cw+1+8));a=d+h+((this.blocks[this._ed]&c)>>8-(b-(this._cw+1+8)));this._cw-=(b-8)%8;0>this._cw&&(this._cw=8+this._cw);return a}return 0};this.NextMode=function(){return this._ed>this.blocks.length-this._en-
2?0:this._gd(4)};this.getDataLength=function(b){for(var a=0;1!=b>>a;)a++;return this._gd(qrcode._eo[this.dataLengthMode][a])};this.getRomanAndFigureString=function(a){var c=0,d="",f="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");do if(1<a){var c=this._gd(11),h=c%45,d=d+f[Math.floor(c/45)],d=d+f[h];a-=2}else 1==a&&(c=this._gd(6),d+=f[c],--a);while(0<a);return d};this.getFigureString=function(a){var c=0,d="";do 3<=a?(c=this._gd(10),100>c&&(d+="0"),10>c&&(d+="0"),a-=3):2==a?(c=this._gd(7),
10>c&&(d+="0"),a-=2):1==a&&(c=this._gd(4),--a),d+=c;while(0<a);return d};this.get8bitByteArray=function(a){var c=0,d=[];do c=this._gd(8),d.push(c),a--;while(0<a);return d};this.getKanjiString=function(a){var c=0,d="";do{var c=_gd(13),c=(c/192<<8)+c%192,f=0,f=40956>=c+33088?c+33088:c+49472,d=d+String.fromCharCode(f);a--}while(0<a);return d};this.__defineGetter__("DataByte",function(){var a=[];do{var c=this.NextMode();if(0==c)if(0<a.length)break;else throw"Empty data block";if(1!=c&&2!=c&&4!=c&&8!=
c)throw"Invalid mode: "+c+" in (block:"+this._ed+" bit:"+this._cw+")";dataLength=this.getDataLength(c);if(1>dataLength)throw"Invalid data length: "+dataLength;switch(c){case 1:for(var c=this.getFigureString(dataLength),d=Array(c.length),f=0;f<c.length;f++)d[f]=c.charCodeAt(f);a.push(d);break;case 2:c=this.getRomanAndFigureString(dataLength);d=Array(c.length);for(f=0;f<c.length;f++)d[f]=c.charCodeAt(f);a.push(d);break;case 4:c=this.get8bitByteArray(dataLength);a.push(c);break;case 8:c=this.getKanjiString(dataLength),
a.push(c)}}while(1);return a})};