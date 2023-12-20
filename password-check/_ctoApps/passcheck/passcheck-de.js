"use strict";window.addEventListener("load",function(){function e(){this.encrypt=function(e,t){return t},this.decrypt=function(e,t){return t}}function t(e,t,r){this.algo=e,this.state=t,this.opts=r,this.charToValue=function(e,t){for(var r=t.length,n=0;n<r;++n){var a=t[n].getElementsByClassName("alphabet")[0].value,i=parseInt(t[n].getElementsByClassName("offset")[0].innerText),s=a.indexOf(e);if(s>=0){for(var l=s+i;l<0;)l+=a.length;return l%a.length}}return-1},this.valueToChar=function(e,t){var r=void 0;if(this.opts.$convertToUpcase.prop("checked")&&this.state.$alphabets.length>0)r=this.state.$alphabets[0];else for(var n=this.state.$alphabets.length,a=0;!r&&a<n;++a)this.state.$alphabets[a].getElementsByClassName("alphabet")[0].value.indexOf(t)>=0&&(r=this.state.$alphabets[a]);if(r){var i=r.getElementsByClassName("alphabet")[0].value,s=parseInt(r.getElementsByClassName("offset")[0].innerText);if(i.length){for(e-=s;e<0;)e+=i.length;return e%=i.length,i.substr(e,1)}}return t},this.normalizeKey=function(){var e=[],t=this.state.$key.val(),r=t.length,n=this.state.$keyAlphabets;n||(n=this.state.$alphabets);for(var a=0;a<r;++a){var i=this.charToValue(t[a],n);(i>=0||!this.opts.$skipNonLetterKeys.prop("checked"))&&e.push(i)}return e},this.process=function(e,t){return t?this.algo.encrypt(this.state.$alphabets,e):this.algo.decrypt(this.state.$alphabets,e)}}function r(e){function t(){jQuery("#alphabet-details").modal("hide"),g=null,b=null,j=null}function r(){jQuery("#alphabet-length").text(""+b.val().length)}function a(){b.val(o(jQuery("#compressed-alphabet").val())),r(),n()}function i(e){return function(t){var r=jQuery("#compressed-alphabet");r.val(r.val()+e),a(),t.preventDefault()}}function l(e){if(e.length<3)return e;for(var t="",r=0;r<e.length;)if("-"!==e[r]){var n=e[r].charCodeAt(0),a=r+1;if(a<e.length)if(n===e[a].charCodeAt(0)-1)for(;a<e.length&&n===e[a].charCodeAt(0)-1;)++a,++n;else if(n===e[a].charCodeAt(0)+1)for(;a<e.length&&n===e[a].charCodeAt(0)+1;)++a,--n;if(a-r>=3)t+=e[r]+"-"+e[a-1];else for(var i=r;i<a;++i)t+=e[i];r=a}else t+="---",++r;return t}function o(e){for(var t="",r=0;r<e.length;)if(r+2<e.length&&"-"===e[r+1]){if(e[r].charCodeAt(0)<e[r+2].charCodeAt(0))for(var n=e[r].charCodeAt(0);n<=e[r+2].charCodeAt(0);++n)t+=String.fromCharCode(n);else for(var a=e[r].charCodeAt(0);a>=e[r+2].charCodeAt(0);--a)t+=String.fromCharCode(a);r+=3}else t+=e[r],++r;return t}function h(e){g=e,b=jQuery(".alphabet",e),j=jQuery(".offset",e),jQuery("#compressed-alphabet").val(l(b.val())),jQuery("#keyword-for-alphabet").val(""),jQuery("#offset-for-alphabet").val(j.text()),r(),jQuery("#alphabet-details").modal("show")}function p(e){return function(){var t=jQuery(this),r=t.children("div").first(),a=r.children("input").first();e.push(t.get()[0]),a.on("keyup",n),r.children("span").first().children("button").first().on("click",function(e){h(t),e.preventDefault()})}}function u(t,r,a){var i=jQuery('<div class="form-group"><div class="input-group"><input type="text" class="form-control alphabet"><span class="input-group-btn"><button class="btn btn-default">…</button></span></div><span class="offset">'+a+'</span><div class="alert alert-danger alert-hidden"></div></div>');r.append(i);var s=jQuery("input",i);s.val(t),s.on("keyup",n),jQuery("button",i).on("click",function(e){h(i),e.preventDefault()}),e.$alphabets.push(i.get()[0]),n()}function c(e,t){if(e)for(var r=function(e){for(var t={},r=e.firstChild;r;r=r.nextSibling)for(var n=r.firstChild.firstChild,a=n.value,i=0;i<a.length;++i)t[a[i]]=t[a[i]]?t[a[i]]+1:1;return t}(e),n=e.firstChild;n;n=n.nextSibling){var a=n.firstChild.firstChild,i=a.value,s=n.firstChild.nextSibling.nextSibling,l="";if(0===i.length)l="Alphabet ist leer";else if(t){for(var o="",h=0,p={},u=0;u<i.length;++u)r[i[u]]>1&&(p[i[u]]||(h&&(o+=", "),o+=i[u],p[i[u]]=!0),++h);o.length&&(l=h>1?"Buchstaben $1 werden mehrfach verwendet":"Buchstabe $1 wird mehrfach verwendet",l=l.replace("$1",o))}if(l!==s.innerHTML){for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(l)),l.length?s.classList.remove("alert-hidden"):s.classList.add("alert-hidden")}}}var f=jQuery("#alphabets"),d=jQuery("#key-alphabets"),v=jQuery("#keyword-for-alphabet");jQuery("#compressed-alphabet").on("keyup",function(){v.val(""),a()}),v.on("keyup",function(){var e=void 0,t="",r=b.val().split("").sort(),n=v.val();for(e=0;e<n.length;++e){var i=r.indexOf(n[e]);i>=0&&(t+=r[i],r.splice(i,1))}for(e=0;e<r.length;++e)t+=r[e];jQuery("#compressed-alphabet").val(l(t)),a()});var y=jQuery("#offset-for-alphabet");y.on("keyup",function(){var e=y.val();e.match(/^[+-]?[0-9]+$/)&&(j.text(e),n())}),jQuery("#alphabet-detail-buttons").children().each(function(){var e=jQuery(this),t=e.prop("id");t&&"add-"===t.substring(0,4)&&e.on("click",i(t.substring(4)))}),jQuery("#reverse-alphabet").on("click",function(e){for(var t="",r=b.val().length-1;r>=0;--r)t+=b.val()[r];jQuery("#compressed-alphabet").val(l(t)),a(),e.preventDefault()}),jQuery("#permute-alphabet").on("click",function(e){for(var t=b.val().split(""),r=t.length-1;r>0;--r){var n=Math.floor(Math.random()*r),i=t[n];t[n]=t[r],t[r]=i}jQuery("#compressed-alphabet").val(l(t.join(""))),a(),e.preventDefault()}),jQuery("#shift-alphabet-left").on("click",function(e){var t=b.val(),r=t.substr(1)+t.substr(0,1);jQuery("#compressed-alphabet").val(l(r)),a(),e.preventDefault()}),jQuery("#shift-alphabet-right").on("click",function(e){var t=b.val(),r=t.substr(t.length-1)+t.substr(0,t.length-1);jQuery("#compressed-alphabet").val(l(r)),a(),e.preventDefault()}),jQuery("#clone-alphabet-to-other-case").on("click",function(e){e.preventDefault();for(var r="",a=b.val(),i=0;i<a.length;++i)a[i]===a[i].toUpperCase()?r+=a[i].toLowerCase():r+=a[i].toUpperCase();u(r,jQuery(g.parent()),parseInt(j.text())),t(),n()}),jQuery("#delete-alphabet").on("click",function(r){e.$alphabets.splice(e.$alphabets.indexOf(b.get()[0]),1),g.remove(),t(),n(),r.preventDefault()});var g=void 0,b=void 0,j=void 0;jQuery(".form-group",f).each(p(e.$alphabets)),d.length&&(e.$keyAlphabets=[],jQuery(".form-group",d).each(p(e.$keyAlphabets))),jQuery("#add-alphabet").on("click",function(e){u("",f),e.preventDefault()});var Q=jQuery("#add-key-alphabet");Q&&Q.on("click",function(e){u("",d),e.preventDefault()}),s=function(){c(f.get()[0],!0),c(d.get()[0],!1)}}function n(){s();var e=l.encrypting?l.$plain:l.$cipher;(l.encrypting?l.$cipher:l.$plain).val(h.process(e.val(),l.encrypting))}var a=new e,i={forEach:function(e,t){for(var r in e)e.hasOwnProperty(r)&&t(e[r],r)}},s=void 0,l=new function(){this.encrypting=!0,this.$plain=jQuery("#plain"),this.$cipher=jQuery("#cipher"),this.$key=jQuery("#key"),this.$direction=jQuery("#direction"),this.$alphabets=[],this.$keyAlphabets=void 0,this.setEncrypting=function(){this.encrypting||(this.$direction.removeClass("flip"),this.$direction.addClass("flop"),this.encrypting=!0)},this.setDecrypting=function(){this.encrypting&&(this.$direction.removeClass("flop"),this.$direction.addClass("flip"),this.encrypting=!1)},this.$direction.on("click",function(e){l.encrypting?l.setDecrypting():l.setEncrypting(),e.preventDefault()}),this.$plain.on("keyup",function(){l.setEncrypting(),n()}),this.$cipher.on("keyup",function(){l.setDecrypting(),n()}),this.$key.on("keyup",n)},o=new function(){this.$deleteWhitespace=jQuery("#deleteWhitespace"),this.$groupBy5s=jQuery("#groupBy5s"),this.$deleteNonLetters=jQuery("#deleteNonLetters"),this.$convertToUpcase=jQuery("#convertToUpcase"),this.$skipNonLetterKeys=jQuery("#skipNonLetterKeys"),i.forEach(this,function(e){e.on("change",n)})},h=new t(a,l,o);this.evokeUpdate=function(){n()},function(){r(l);var e=jQuery("#page");e&&e.append(jQuery("#alphabet-details"))}()});