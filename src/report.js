window.Webflow ||= [];
window.Webflow.push(() => {
  /*-------------------------------------------------------*/
  /* DECODE URL PARAMS                                     */
  /*-------------------------------------------------------*/
  const getUrlParameter = function getUrlParameter(sParam) {
    let sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
        return typeof sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
    return '';
  };
  /*-------------------------------------------------------*/
  /* DECODE URL PARAMS                                     */
  /*-------------------------------------------------------*/

  const pagePath = new URL(document.URL).pathname + '-popup';

  if (window.localStorage.getItem(pagePath) === 'true' || getUrlParameter('popup') === 'false') {
    document.querySelector('.sign-up_component').style.display = 'none';
    document.querySelector('.rich-text-wrap').style.maxHeight = 'none';
  }

  window.addEventListener('message', function (event) {
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
      document.querySelector('[fs-modal-element=close-2]').click();
      window.localStorage.setItem(pagePath, 'true');
      setTimeout(() => {
        document.querySelector('.sign-up_component').style.display = 'none';
        document.querySelector('.rich-text-wrap').style.maxHeight = 'none';
      }, 400);
    }
  });

  /*-------------------------------------------------------*/
  /* VIDEO POPUP                                           */
  /*-------------------------------------------------------*/

  document.querySelectorAll('.image_component .image_link:not([href="#"])').forEach((videoLink) => {
    videoLink.style.pointerEvents = 'auto';

    if (videoLink.target !== '_blank') {
      const videoUrl = videoLink.href;
      const youtubeId = getYoutubeId(videoUrl);

      videoLink.href = '#';

      let player = document.createElement('div');
      player.classList.add('fs_modal_video-embed');
      player.style.height = '100%';
      player.style.width = '100%';
      player.style.position = 'absolute';
      player.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

      videoLink.addEventListener('click', (e) => {
        document.querySelector('.fs_modal_video').appendChild(player);
      });
    } else {
      videoLink.removeAttribute('aria-roledescription');
      videoLink.removeAttribute('aria-haspopup');
      videoLink.removeAttribute('aria-controls');
      videoLink.removeAttribute('fs-modal-element');
    }
  });

  document.querySelectorAll('[fs-modal-element="close-1"]').forEach((link) => {
    link.addEventListener('click', () => {
      document
        .querySelector('[fs-modal-element="modal-1"] .fs_modal_video .fs_modal_video-embed')
        .remove();
    });
  });

  function getYoutubeId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return 'Unable to extract YouTube ID';
    }
  }

  /*-------------------------------------------------------*/
  /* VIDEO POPUP                                           */
  /*-------------------------------------------------------*/
});
