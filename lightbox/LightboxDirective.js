import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
  bind (element, binding) {
    let index = store.addImage(element.getAttribute('href'))
    element.addEventListener('click', function (e) {
      e.preventDefault()
      store.open(index)
    })
  }
})
