<template>
  <div class="container t-cookies-alert" :class="{'t-cookies-alert--shown': !privacySeen}">
    <div class="alert shadow-sm t-cookies-alert__block" role="alert">
      <b-row>
        <b-col cols="12" lg="10" class="mb-4 mb-lg-0">
          <p class="small mb-0 t-cookies-alert__text">
            <strong>Vores privatlivspolitik er blevet opdateret.</strong>
            <br />Ved at fortsætte med at bruge webstedet eller lukke dette banner, accepterer du vores privatlivspolitik og brug af cookies.
            <br />Gå til vores for at finde ud af mere og lære, hvordan du ændrer dine valg
            <u>
              <router-link to="/meta/fortrolighedspolitik">fortrolighedspolitik</router-link>
            </u>.
          </p>
        </b-col>
        <b-col cols="12" lg="2" class="text-right d-flex justify-content-end align-items-end">
          <div class>
            <button
              type="button"
              class="btn btn-sm btn-light"
              aria-label="Accept cookies policy and close"
              @click="close()"
            >Enig</button>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      privacySeen: true
    };
  },
  mounted() {
    if (typeof localStorage !== "undefined") {
      setTimeout(() => {
        let lastUpdated = this.getPrivacyPolicyLastUpdated();
        let localStorageLastUpdated = localStorage.getItem("privacyPolicySeen");

        if (lastUpdated != localStorageLastUpdated) {
          this.privacySeen = false;
        } else {
          this.privacySeen = true;
        }
      }, 500);
    }
  },
  methods: {
    getPrivacyPolicyLastUpdated() {
      let privacyPolicy = this.$site.pages.filter(
        value => value.title.toLowerCase() === "fortrolighedspolitik"
      )[0];

      let lastUpdated = privacyPolicy.frontmatter.version;
      return lastUpdated;
    },
    close() {
      if (typeof localStorage !== "undefined") {
        let lastUpdated = this.getPrivacyPolicyLastUpdated();
        localStorage.setItem("privacyPolicySeen", lastUpdated);
      }
      this.privacySeen = true;
    }
  }
};
</script>
