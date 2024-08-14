let boxOneAnim = gsap.from('#box-1', { x: '-100vw', paused: true, duration: 3, ease: 'elastic.out(1,0.3)' })
let boxTwoAnim = gsap.from('#box-2', { y: '100vh', paused: true, duration: 3, delay: .5, ease: 'bounce.out' })
let boxThreeAnim = gsap.from('#box-3', { x: '100vw', paused: true, duration: 3, delay: .5, ease: 'power4.out' })

boxOneAnim.play()
boxTwoAnim.play()
boxThreeAnim.play()

document.querySelector('.play-btn').addEventListener('click', function () {
  boxOneAnim.play()
  boxTwoAnim.play()
  boxThreeAnim.play()
})

document.querySelector('.pause-btn').addEventListener('click', function() {
  boxOneAnim.pause()
  boxTwoAnim.pause()
  boxThreeAnim.pause()
})

document.querySelector('.reverse-btn').addEventListener('click', function() {
  boxOneAnim.reverse()
  boxTwoAnim.reverse()
  boxThreeAnim.reverse()
  shapeTl.reverse()
})

document.querySelector('.restart-btn').addEventListener('click', function() {
  boxOneAnim.restart()
  boxTwoAnim.restart()
  boxThreeAnim.restart()
})

document.querySelector('.seek-btn').addEventListener('click', function() {
  boxOneAnim.seek(2)
})

gsap.fromTo('section', {
  x: '-100vw',
  color: 'yellow',
  opacity: 0,
}, {
  color: 'red',
  duration: 2,
  opacity: 1,
  x: 0,
  stagger: .25
})

let ballTl = gsap.timeline({ paused: true })

ballTl.to('.ball', { x: 200, duration: 1, rotate: 360 })
      .to('.ball', { x: 250, y: -200, duration: .5 })
      .to('.ball', { x: 300, y: 0, duration: 1, scaleY: .7, scaleX: 1.2, ease: 'bounce.out' })
      .to('.ball', { x: 350, y: -200, duration: .5, scale: 1 })
      .to('.ball', { x: 400, y: 0, duration: 1, scaleY: .7, scaleX: 1.2, ease: 'bounce.out' })
      .to('.ball', { scale: 1, duration: .3 })
      .to('.ball', { x: 500, duration: 1, rotate: 720 })

ballTl.play()


let shapeTl = gsap.timeline({ paused: true })

shapeTl.to('.shape', { x: '100vw', left: -200, duration: 2, borderRadius: '50%', backgroundColor: 'yellow' })
      .to('.shape', { y: '100vh', top: -200, duration: 2, backgroundColor: 'red', borderRadius: 0, clipPath: 'polygon(x 0, 100% 100%, 100% 100%, 0 100%, 0 100%)' })
      .to('.shape', { x: 0, left: 0, backgroundColor: 'green', duration: 2, clipPath: 'polygon(50% 0, 100% 40%, 80% 100%, 20% 100%, 0 40%)' })
      .to('.shape', { y: 0, top: 0, duration: 2, backgroundColor: 'cyan', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 10%)' })

shapeTl.play()



gsap.from('span', { y: '100vh', duration: 1, stagger: .2, opacity: 0, ease: 'elastic.out(1,0,0)' })