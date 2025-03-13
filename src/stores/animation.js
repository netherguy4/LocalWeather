import { defineStore } from 'pinia'
import { gsap } from 'gsap'

export const useAnimation = defineStore('animation', () => {
  const buttonAnimation = gsap.timeline({
    paused: true,
    defaults: { duration: 0.6, ease: 'back.inOut(0.5)' },
  })
  const modalAnimation = gsap.timeline({
    paused: true,
    defaults: { duration: 0.35, ease: 'back.out' },
  })

  buttonAnimation.fromTo(
    '#addButton',
    {
      autoAlpha: 0,
      scale: 0,
    },
    {
      autoAlpha: 1,
      scale: 1,
    },
  )
  buttonAnimation.fromTo(
    '#infoButton',
    {
      xPercent: 0,
    },
    {
      xPercent: -150,
    },
    '<0.1',
  )
  modalAnimation.fromTo(
    '.modal',
    {
      autoAlpha: 0,
      background: 'none',
      backdropFilter: 'none',
    },
    {
      autoAlpha: 1,
      background: 'rgba($color: #000000, $alpha: 0.05)',
      backdropFilter: 'blur(1px)',
    },
  )
  modalAnimation.from(
    '.modal__content',
    {
      yPercent: 100,
      scale: 0.5,
      autoAlpha: 0,
      ease: 'back',
    },
    '<0.15',
  )

  function openModal() {
    modalAnimation.restart()
  }
  function closeModal() {
    modalAnimation.reverse()
  }
  function showButton() {
    buttonAnimation.play()
  }
  function hideButton() {
    buttonAnimation.reverse()
  }

  return { openModal, closeModal, showButton, hideButton }
})
