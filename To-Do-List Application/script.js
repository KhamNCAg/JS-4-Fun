var context = new AudioContext()
var o = context.createOscillator()
var  g = context.createGain()
o.connect(g)
g.connect(context.destination)
o.start(0)

g.gain.exponentialRampToValueAtTime(
    0.00001, context.currentTime + 0.04
  )