const animations = {
    run: "Running",
    walk: "Walking",
    jump: "Jump",
    idle: "Idle",
  };
  
  const updateAnimationMixer = () => {
    const bot = document.getElementById("xbot-model");
    const data = bot.getAttribute("animation-mixer");
    console.log(data);
    if (data.clip == animations.idle) data.clip = animations.walk;
    else if (data.clip == animations.walk) data.clip = animations.run;
    else data.clip = animations.walk;
  
    bot.setAttribute("animation-mixer", data);
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    window.setInterval(function(){
      updateAnimationMixer();
    }, 3000);
  });
  