import { mount } from 'svelte'
import './app.css'
import Fractals from './Fractals.svelte'

mount(Fractals, {
  target: document.getElementById('app')
})