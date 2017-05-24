'use strict'

const ajax = createAjax();
const view = createView();
ajax.getPlaylists();
ajax.getTracks();
