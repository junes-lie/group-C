    /* 다녀간전시, 찜한전시 */
    $(document).ready(function(){
      $(".tags.state .tag").each(function(){
        const $tag = $(this);
        const $solid = $tag.find(".fa-solid");
        const $regular = $tag.find(".fa-regular");

        if ($tag.hasClass("active")) {
          gsap.set($solid, { opacity: 1, scale: 1 });
          gsap.set($regular, { opacity: 0, scale: 0.8 });
        } else {
          gsap.set($solid, { opacity: 0, scale: 0.8 });
          gsap.set($regular, { opacity: 1, scale: 1 });
        }
      });

      $(".tags.state .tag").click(function(){
        const $tag = $(this);
        
        const $solid = $tag.find(".fa-solid");
        const $regular = $tag.find(".fa-regular");

        if ($tag.hasClass("active")) {
          gsap.to($solid, { opacity: 0, scale: 0.8, duration: 0.2 });
          gsap.to($regular, { opacity: 1, scale: 1, duration: 0.3, delay: 0.2 });
          $tag.removeClass("active");
        } else {
          gsap.to($regular, { opacity: 0, scale: 0.8, duration: 0.2 });
          gsap.to($solid, { opacity: 1, scale: 1, duration: 0.3, delay: 0.2 });
          $tag.addClass("active");
        }
      });
    });