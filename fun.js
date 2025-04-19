
const consoleBtn = document.getElementById('console-btn');
const consoleOutput = document.getElementById('console-output');
const consoleWindow = document.querySelector('.console-window');
let hackMessage = `
$ Initiating hack...
> Connecting to planet mainframe...
> Bypassing firewalls [████████░░░░]
> Injecting memes into the system...
> Downloading memes.zip...
> Uploading to global servers...
> SYSTEM OVERRIDE: \x1b[31mACCESS GRANTED!\x1b[0m

    ▄████▄   ▄▄▄       ▄▄▄▄   ▄▄▄   ▄▄▄  ▄▄▄
   ███▀▀▀██ ████     ██▀▀▀██ ███   ███  ███
   ███     ██████   ██     ██ ███▄███  ███
   ███     ███ ██  ██     ██  █████   ███
   ███     ███  ██ ██     ██   ███    ███
    ▀████▀ ███   ███  ▀████▀   ███    ███

>> HACK THE PLANET! <<
> Mission complete. You are now a certified hacker! 😎`;
let typing = false;

function randomDelay(min, max) {
  return Math.random() * (max - min) + min;
}

function glitchChar(char) {
  const glitch = ['█', '▓', '▒', '░', '#', '*', '%', '$', '@', '!', '?'];
  return Math.random() < 0.08 ? glitch[Math.floor(Math.random() * glitch.length)] : char;
}

if (consoleBtn && consoleOutput) {
  consoleBtn.addEventListener('click', () => {
    if (typing) return;
    typing = true;
    consoleOutput.textContent = '';
    let i = 0;
    function type() {
      if (i < hackMessage.length) {
        let nextChar = hackMessage[i];
        if (nextChar !== '\n' && nextChar !== '\r') {
          nextChar = glitchChar(nextChar);
        }
        consoleOutput.textContent += nextChar;
        i++;
        setTimeout(type, randomDelay(12, 45));
      } else {
        typing = false;
        if (consoleWindow) {
          consoleWindow.classList.add('glitch-anim');
          setTimeout(() => consoleWindow.classList.remove('glitch-anim'), 700);
        }
      }
    }
    setTimeout(type, 450);
  });
}

if (footerPixel && footerSecret) {
  footerPixel.addEventListener('click', () => {
    footerSecret.style.display = 'block';
    setTimeout(() => { footerSecret.style.opacity = 1; }, 50);
    setTimeout(() => { footerSecret.style.opacity = 0; setTimeout(()=>footerSecret.style.display='none', 700); }, 4000);
  });
}

(function addGlitchCSS() {
  if (!document.getElementById('glitch-anim-style')) {
    const style = document.createElement('style');
    style.id = 'glitch-anim-style';
    style.textContent = `
      .glitch-anim {
        animation: glitch-shake 0.7s linear 1;
      }
      @keyframes glitch-shake {
        0% { transform: translate(0, 0) skewX(0deg); filter: hue-rotate(0deg); }
        10% { transform: translate(-2px, 2px) skewX(-2deg); filter: hue-rotate(15deg); }
        20% { transform: translate(2px, -1px) skewX(2deg); filter: hue-rotate(-10deg); }
        30% { transform: translate(-1px, 1px) skewX(-1deg); filter: hue-rotate(10deg); }
        40% { transform: translate(1px, -2px) skewX(1deg); filter: hue-rotate(-15deg); }
        50% { transform: translate(-2px, 2px) skewX(-2deg); filter: hue-rotate(10deg); }
        60% { transform: translate(2px, 1px) skewX(2deg); filter: hue-rotate(-10deg); }
        70% { transform: translate(-1px, -1px) skewX(-1deg); filter: hue-rotate(15deg); }
        80% { transform: translate(1px, 2px) skewX(1deg); filter: hue-rotate(-10deg); }
        90% { transform: translate(-2px, -2px) skewX(-2deg); filter: hue-rotate(10deg); }
        100% { transform: translate(0, 0) skewX(0deg); filter: hue-rotate(0deg); }
      }
    `;
    document.head.appendChild(style);
  }
})();

const footerPixel = document.getElementById('footer-pixel');
const footerSecret = document.getElementById('footer-secret');
if (footerPixel && footerSecret) {
  footerPixel.addEventListener('click', () => {
    footerSecret.style.display = 'block';
    setTimeout(() => { footerSecret.style.opacity = 1; }, 50);
    setTimeout(() => { footerSecret.style.opacity = 0; setTimeout(()=>footerSecret.style.display='none', 700); }, 4000);
  });
}
