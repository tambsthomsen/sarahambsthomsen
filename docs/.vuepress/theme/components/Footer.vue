<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col cols="12" sm="6" xl="4" class="outbound-negative-space-fix">
          <div>
            <span class="footer__headline">Telefon</span>
            <br />28 68 86 24
            <br />
            <br />
            <span class="footer__headline">E-mail</span>
            <br />
            <a href="mailto:psykolog@sarahambs.dk">psykolog@sarahambs.dk</a>
            <br />
            <a href="https://www.linkedin.com/in/sarah-e-ambs-thomsen-a4807028/" target="_blank" rel="noopener nofollow">Connect eller følg på LinkedIn</a>
          </div>
        </b-col>

        <b-col cols="12" sm="6" xl="4" class="outbound-negative-space-fix mt-8 mt-sm-0">
          <div>
            <span class="footer__headline">Konsultation Charlottenlund</span>
            <br />Jægersborg Allé 16
            <br />2920 Charlottenlund
            <br />
            <br />Tæt på Charlottenlund station
            <br />Gratis parkering
          </div>
        </b-col>

        <b-col class="col-newsletter mt-8 mt-xl-0 outbound-negative-space-fix">
          <div>
            <span class="footer__headline">Konsultation Hillerød</span>
            <br />PsykologHus Hillerød
            <br />Helsingørsgade 16 A
            <br />3400 Hillerød
            <br />
            <br />Tæt på Hillerød station
            <br />Tæt på p-hus
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-10 align-items-md-center">
        <b-col cols="12">
          <ul
            class="list-inline list-group-transparent list-group-flush list-group-borderless mb-0"
          >
            <li
              class="list-inline-item pl-0 pr-4 my-1 text-muted"
            >© Sarah Ambs-Thomsen, 2019. Alle rettigheder forbeholdt.</li>
            <li class="list-inline-item pl-0 pr-4 my-1">
              <router-link to="/meta/fortrolighedspolitik">Fortrolighedspolitik</router-link>
            </li>
            <li class="list-inline-item pl-0 pr-4 my-1">
              <router-link to="/meta/cookiepolitik">Cookiepolitik</router-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import NewsletterForm from "./NewsletterForm";

export default {
  components: {
    NewsletterForm
  }
};
</script>
