<template>
  <layout-default class="landing-page" id="landing-page">
    <template slot="root-content">
      <div class="landing">
        <div class="hero" scroll-reveal>
          <b-container class="lcontainer lcontainer--hero">
            <div class="hero__headline">
              <h2>
                <span class="hero__headline-main">Erhvervspsykologisk rådgivning · Personsamtaler · Foredrag</span>
                <span class="hero__headline-secondary">ved Sarah Ambs-Thomsen, autoriseret erhvervspsykolog</span>.
              </h2>
            </div>
          </b-container>
        </div>
      </div>
    </template>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/LayoutDefault";
import BrandButton from "@theme/components/BrandButton";
import * as throttle from "lodash.throttle";

export default {
  data() {
    return {
      parallaxElements: [],
      revealElements: [],
      layoutElement: undefined,
      blogPosts: []
    };
  },
  components: {
    LayoutDefault,
    BrandButton
  },
  created() {
    let pages = this.$site.pages;
    for (let i = 0; i < pages.length; i++) {
      let page = pages[i];
      if (
        page &&
        page.relativePath &&
        page.relativePath.indexOf("_posts") !== -1
      ) {
        this.blogPosts.push(page);
        if (this.blogPosts.length >= 3) {
          break;
        }
      }
    }

    this.blogPosts = this.blogPosts.sort((a, b) => {
      let aDate = new Date(a.filedate);
      let bDate = new Date(b.filedate);
      return aDate.getTime() < bDate.getTime() ? 1 : -1;
    });
  },
  mounted() {
    this.layoutElement = document.getElementById("landing-page");
    this.parallaxElements = Array.from(
      document.getElementsByClassName("parallax-element")
    );
    this.revealElements = Array.from(
      document.querySelectorAll("[scroll-reveal]")
    );
    window.addEventListener("scroll", this.throttleParallax);
    window.addEventListener("scroll", this.throttleReveal);

    this.handleReveal();
    this.throttleParallax();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.throttleParallax);
    window.removeEventListener("scroll", this.throttleReveal);
  },
  methods: {
    throttleParallax: throttle(function() {
      this.handleParallax();
    }, 100),
    throttleReveal: throttle(function() {
      this.handleReveal();
    }, 200),
    handleParallax() {
      let scrollY = window.scrollY;

      scrollY += window.innerHeight;

      for (let i = 0; i < this.parallaxElements.length; i++) {
        let element = this.parallaxElements[i];
        let elOffset = this.offset(element.parentElement);
        let multiplier =
          this.parallaxElements[i].dataset.parallaxFactor || 0.05;

        if (elOffset < scrollY) {
          let parallaxTranslate = (scrollY - elOffset) * multiplier;
          if (Math.abs(parallaxTranslate) < 100) {
            element.style.transform = `translateY(${parallaxTranslate}px)`;
          }
        }
      }
    },
    handleReveal() {
      let scrollY = window.scrollY;
      scrollY += window.innerHeight - 150;
      let revealedSome = false;

      for (let i = 0; i < this.revealElements.length; i++) {
        let element = this.revealElements[i];
        let elOffset = this.offset(element.parentElement);

        if (elOffset < scrollY) {
          if (!element.dataset.scrollRevealed) {
            let childReveals = element.querySelectorAll(
              "[scroll-reveal-child]"
            );

            if (element.dataset.revealDelay) {
              setTimeout(() => {
                element.classList.add("scroll-reveal--revealed");

                for (let i = 0; i < childReveals.length; i++) {
                  if (childReveals[i].dataset.revealDelay) {
                    setTimeout(() => {
                      childReveals[i].classList.add("scroll-reveal--revealed");
                    }, parseInt(childReveals[i].dataset.revealDelay));
                  } else {
                    childReveals[i].classList.add("scroll-reveal--revealed");
                  }
                }
              }, parseInt(element.dataset.revealDelay));
            } else {
              element.classList.add("scroll-reveal--revealed");

              for (let i = 0; i < childReveals.length; i++) {
                if (childReveals[i].dataset.revealDelay) {
                  setTimeout(() => {
                    childReveals[i].classList.add("scroll-reveal--revealed");
                  }, parseInt(childReveals[i].dataset.revealDelay));
                } else {
                  childReveals[i].classList.add("scroll-reveal--revealed");
                }
              }
            }
            element.dataset.scrollRevealed = true;
            revealedSome = true;
          }
        }
      }

      if (revealedSome) {
        this.revealElements = this.revealElements.filter(
          element => !element.dataset.scrollRevealed
        );
      }
    },
    offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return rect.top + scrollTop;
    }
  }
};
</script>


<style src="../styles/landing.scss" lang="scss"></style>
