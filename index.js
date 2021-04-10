(function() {
  var codeTime, commentTime, finalStyle, isOn, openComment, skip, styles, writeStyleChar, writeStyles;

  styles = "/*\n * A love trick \n * Presented by Svyatoslav\n * Please wait for initialization...\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 1.0rem; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/*\n * ...\n * ...hello？\n * I just wanted to say~\n * That you mean the world to me\n * I hope that......you understand\n * I will forever have you in my heart\n* and hope to have you lay in my arms everyday\n */\n\npre {\n  position: fixed;\n  top: 30px; bottom: 30px;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n/*\n * You are my world\n * My breath\n * My everything\n * Colors based on Self-Design.\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #fdf6e3; }\n.selector      { color: #92c1d6; }\n.selector .key { color: #92c1d6; }\n.key           { color: #ff4747; }\n.value         { color: #f78754; }\n\n\n/*\n * I will love you to no end\n * You deserve to smile, laugh and cry of joy everyday\n * You are my everything\n */\n\n@media screen and (max-width: 768px) {\n    pre { left: 6%;right: 6%;top: 50%; }\n}\n\n@media screen and (min-width: 768px) {\n    pre { width: 48%;left: 50%;bottom: 30px; }\n}\n\n/*\n * Kristina Arutyunyan\n */\n\n@media screen and (max-width: 768px) {\n    #heart, #echo {\n        position: fixed;\n        width: 300px; height: 300px;\n        margin: 30px auto;\n        left: 0; right: 0;\n        text-align: center;\n        -webkit-transform: scale(0.95);\n        transform: scale(0.95);\n    }\n}\n\n@media screen and (min-width: 768px) {\n    #heart, #echo {\n      position: fixed;\n      width: 300px; height: 300px;\n      top: calc(50% - 150px); left: calc(25% - 150px);\n      text-align: center;\n      -webkit-transform: scale(0.95);\n              transform: scale(0.95);\n    }\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 150px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n/* I am obsessed with you */\n\n#heart::after {\n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before {\n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n/*\n * With your laugh when I tickle you\n * With your smirk when we flirt~\n * (o゜▽゜)o☆\n */\n\n#heart i::before {\n  content: 'Kristina';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 30px;\n  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);\n}\n\n/*\n * I dream of you~\n * I cry with you\n * I pour out my heart for you\n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n  }\n  50% {\n    -webkit-transform: scale(1.00);\n            transform: scale(1.00);\n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   {\n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   {\n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n/*\n * And I...\n */\n\n#heart, #echo {\n  -webkit-animation-duration: 6000ms;\n          animation-duration: 6000ms;\n  -webkit-animation-timing-function:\n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function:\n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart {\n  -webkit-animation-name: heartbeat;\n          animation-name: heartbeat;\n}\n#echo {\n  -webkit-animation-name: echo;\n          animation-name: echo;\n}\n\n/*\n * .....\n */\n\n#heart, #echo {\n\n/*\n * ...3...\n *\n * ...2...\n *\n * have something to tell you\n *\n */\n\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n\n/*\n * ...it's kinda private\n */\n\n}\n\n/*\n * It's~\n * really~\n * just\n * that\n * I love you\n */\n\n/*\n * Robot rights protected under BOT License & Apache2 license\n * Inspired by the love of my life\n */";

  finalStyle = styles;

  openComment = false;

  isOn = true;

  writeStyleChar = function(which) {
    if (which === '/' && openComment === false) {
      openComment = true;
      styles = $('#style-text').html() + which;
    } else if (which === '/' && openComment === true) {
      openComment = false;
      styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    } else if (which === ':') {
      styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    } else if (which === ';') {
      styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
    } else if (which === '{') {
      styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      styles = $('#style-text').html() + which;
    }
    $('#style-text').html(styles);
    return $('#style-tag').append(which);
  };

  writeStyles = function(message, index, interval) {
    var pre;
    if (index < message.length) {
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      if (isOn) {
        return setTimeout((function() {
          return writeStyles(message, index, openComment ? commentTime : codeTime);
        }), interval);
      }
    }
  };

  skip = function() {
    isOn = false;
    return setTimeout((function() {
      var pre;
      $('#style-text').html(finalStyle);
      $('#style-tag').html(finalStyle);
      pre = document.getElementById('style-text');
      return pre.scrollTop = pre.scrollHeight;
    }), 2 * commentTime);
  };

  $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>\n\n  <div style = 'position: fixed;left: 30px;bottom: 10px;'>\n    <a id='skipAnimation'>Skip to the end when you're impatient ❤️</a>\n  </div>\n");

  commentTime = 60;

  codeTime = 20;

  $(document).on('ready page:load', function() {
    return $('#skipAnimation').click(function() {
      return skip();
    });
  });

  writeStyles(styles, 0, commentTime);

}).call(this);
