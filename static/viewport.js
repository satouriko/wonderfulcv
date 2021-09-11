// mobile viewport hack
(function () {
  function applyViewport () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      const ww = window.screen.width
      const mw = 794 // min width of site
      const ratio = ww / mw // calculate ratio
      const viewportMetaTag = document.querySelector('meta[name=viewport]')
      if (ww < mw) { // smaller than minimum size
        viewportMetaTag.setAttribute('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=no, width=' + mw)
      } else { // regular size
        viewportMetaTag.setAttribute('content', 'initial-scale=1.0, maximum-scale=1, minimum-scale=1.0, user-scalable=yes, width=' + ww)
      }
      let styleTag = document.getElementById('mobileStyle')
      if (!styleTag) {
        styleTag = document.createElement('style')
        styleTag.id = 'mobileStyle'
        styleTag.innerHTML = `
.page {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
      `
        document.head.appendChild(styleTag)
      }
    } else {
      const styleTag = document.getElementById('mobileStyle')
      if (styleTag) styleTag.remove()
    }
  }

  // ok, i need to update viewport scale if screen dimentions changed
  window.addEventListener('resize', function () {
    applyViewport()
  })

  applyViewport()
}())
