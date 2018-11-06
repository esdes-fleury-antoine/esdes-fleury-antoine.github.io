console.log(anime)

var lineDrawing = anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 0 },
    direction: 'alternate',
    loop: true
  });

  var timeline = anime.timeline();
timeline.add({
    targets: '#coming-soon',
    opacity: 1,
    delay: 1000
});

timeline.add({
    targets: '#coming-soon',
    translateY: -100

});
