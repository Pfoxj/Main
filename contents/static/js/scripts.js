/**
 * @license AGPL
 * @copyright Internet Archive, 2016
 */

$(document).ready(function() {
  $(".js-bio-unit").on('click', function() {
    var bio = $(this).find('.hidden-bio').html();

    var modalEl = document.getElementById('modal');
    if ( ! modalEl) {
      modalEl = document.createElement('div');
    }
    modalEl.id = 'modal';
    modalEl.className = 'modal';
    modalEl.innerHTML = '';

    var modalInnerEl = document.createElement('div');
    modalInnerEl.className = 'modalInnerEl';

    var bioEl = document.createElement('div');
    bioEl.innerHTML = bio;
    bioEl.className = 'modal-contents';
    modalInnerEl.appendChild(bioEl);


    var closeEl = document.createElement('button');
    closeEl.innerHTML = 'Close';
    closeEl.className = 'close-button';
    closeEl.onclick = function() {
      $(modalEl).remove();
      document.body.style.overflow = 'initial';
    };

    var closeDiv = document.createElement('div');
    closeDiv.className = 'close-wrapper';
    closeDiv.appendChild(closeEl);
    modalInnerEl.appendChild(closeDiv);

    modalEl.appendChild(modalInnerEl);
    document.body.appendChild(modalEl);
    document.body.style.overflow = 'hidden';
  });

  /**
   * Simple carousel effect
   */
  $(".js-carousel").each(function(elem, index) {
    var currIndex = 0;
    var perPage = 5;
    var msPerPage = 5000;
    var $elem = $(elem);

    var initStyles = function($elem) {
      $elem.children().each(function(child, childIndex) {
        if (childIndex >= (currIndex * perPage) && childIndex < ((currIndex * perPage) + perPage)) {
          child.style.display = 'block';
          child.style.opacity = '1';
        } else {
          child.style.display = 'none';
          child.style.opacity = '0';
        }
      });
    };

    var showIndex = function(nextIndex) {
      var fadeOuts = [];
      var fadeIns = [];
      $elem.children().each(function(child, childIndex) {
        if (childIndex >= (currIndex * perPage) && childIndex < ((currIndex * perPage) + perPage)) {
          fadeIns.push(child);
        } else {
          fadeOuts.push(child);
        }
      });
      $(fadeOuts).each(function(child, childIndex) {
        child.style.transition = 'opacity 2.0s ease-in';
        child.style.opacity = '0';
      });
      setTimeout(function(){
        $(fadeOuts).each(function(child, childIndex) {
          child.style.display = 'none';
        });
        $(fadeIns).each(function(child, childIndex) {
          child.style.display = 'block';
          child.style.transition = 'opacity 1.0s ease-out';
          child.style.opacity = '0';
          setTimeout(function(){
            child.style.opacity = '1';
          }, 50);
        });
      }, 2050);
    };

    initStyles($elem);
    showIndex(currIndex);
    setInterval(function() {
      currIndex = (currIndex + 1) % Math.ceil($elem.children().length / perPage);
      showIndex(currIndex);
    }, msPerPage);
  });
});
