<template>
  <div id="app" class="main-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Start Bootstrap</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" :src="profile_src" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">{{ name.first }}
            <span class="text-primary">{{ name.last }}</span>
          </h1>
          <div class="subheading mb-5">
            <a :href="phone_href">{{ contact.phone }}</a>
             · <a :href="email_href">{{ contact.email }}</a>
          </div>
          <p class="mb-5">{{ about }}</p>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a :href="github_href">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a :href="linkedin_href">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a :href="twitter_href">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a :href="facebook_href">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in experience" :key="job.company">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ job.position }}</h3>
              <div class="subheading mb-3">{{ job.company }}</div>
              <p>{{ job.description }}</p>
              <ul>
                <li v-for="(item, index) in job.items" :key="index">{{ item }}</li>
              </ul>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
            </div>
          </div>
        </div>

      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>

          <div
            class="resume-item d-flex flex-column flex-md-row mb-5"
            v-for="edu in education" :key="edu.qualification"
          >
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ edu.institution }}</h3>
              <div class="subheading mb-3">{{ edu.qualification }}</div>
              <p>{{ edu.description }}</p>
              <ul>
                <li v-for="(point, index) in edu.points" :key="index">{{ point }}</li>
              </ul>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ edu.dates }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicon-python-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-c-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-cplusplus-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-php-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-javascript-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-java-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-ruby-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-clojure"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-haskell"></i> <!-- -wordmark -->
            </li>
            <!-- TODO: complete -->
          </ul>
          <div class="subheading mb-3">Web Technologies</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicon-html5-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-css3-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-bootstrap-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-jquery-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-wordpress-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-nodejs-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-vuejs-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-apache-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-mysql-plain"></i> <!-- -wordmark -->
            </li>
          </ul>

          <div class="subheading mb-3">Tools & Workflow</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicon-travis-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-git-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-atom-original"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-vim-plain"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-docker"></i> <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-google-cloud-platform"></i> <!-- -wordmark -->
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>In my spare time I play drums for two bands and make experimental electronic music using algorithmic composition. Writing music in high level languages like Supercollider, Haskell and Clojure/Overtone is a nice way to take a break from work. Most aspects of my life revolve around code in some way.</p>
          <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              3<sup>rd</sup>
              thing</li>
            <!-- TODO: complete -->
          </ul>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'My Portfolio',
      name: {
        first: 'Derwent'
        // , last: 'McElhinney'
      },
      contact: {
        phone: '(+61) 416-160-912',
        email: 'derwent@laserphile.com'
      },
      about: 'Seasoned freelance software developer with 4 years of experience delivering unique and bespoke software solutions. Easy going, hard working nerd with a passion for research in information security and a strong sense of social justice. Engaged participant in the InfoSec community at various CTFs, meet-ups and conferences',
      socials: {
        github: 'derwentx',
        twitter: 'derwentx',
        facebook: 'derwentx',
        linkedin: 'derwentx'
      },
      experience: [
        {
          position: 'IT Infrastructure Manager',
          company: 'Anna Chandler Design',
          location: 'O\'Connor, WA',
          description: '',
          items: [
            'Provided IT support and POS system deployment to a fleet of 4 stores',
            'Designed, Built and Optimized a custom WooCommerce website which has vastly improved the business\' sales.',
            'Installed and Maintained a network of security camera systems across multiple locations',
            'Created a utility which automatically synchronizes product stock data between WooCommerce and Xero using their respective APIs',
            'Built a custom map generator around the Xero accounting API'
          ],
          startDate: 'Jan. 2010',
          endDate: 'Present'
        },
        {
          position: 'Freelance IT Consultant',
          company: 'Laserphile',
          location: 'Melbourne, VIC',
          description: '',
          items: [
            'Built a completely bespoke eCommerce system for a client with a dynamic and challenging set of requirements',
            'Created a set of utilities which could synchronize user, product and order data between a client\'s CRM, Accounting and eCommerce databases',
            'Learned first-hand, the importance of rigid version control, testing procedures and continuous integration practices in collaborative software development projects',
            'Applied leadership skills to organize teams spanning multiple disciplines and timezones to deliver several projects',
            'Gained an awareness of significance of good information security practices when aministrating web-facing applications',
            'Took on the role of a sysadmin in an environment that was under a constant barrage of DDoS and attempted defacement attacks where I learnt pre-emptive DDoS mitigation techniques.',
            'Performed incident response for a client whose web hosting company and backups had been taken down by an advanced attacker.'
          ],
          startDate: 'Jun. 2014',
          endDate: 'Present'
        }
      ],
      education: [
        {
          institution: 'University of Western Australia',
          qualification: 'B.Sc. in Computer Science and Physics',
          description: '',
          dates: '2010 - 2013',
          points: [
            'Grade Point Average: 4.931'
          ]
        }
      ],
      profile_file: 'profile.jpg'
    }
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      'use strict' // Start of use strict

      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    }) // End of use strict
  },
  computed: {
    profile_src: function () {
      return require('./assets/' + this.profile_file)
    },
    phone_href: function () {
      return 'tel:' + this.contact.phone.replace(/[ ()-]/g, '')
    },
    email_href: function () {
      return 'mailto:' + this.contact.email
    },
    github_href: function () {
      return 'https://github.com/' + this.socials.github
    },
    linkedin_href: function () {
      return 'https://www.linkedin.com/in/' + this.socials.linkedin
    },
    twitter_href: function () {
      return 'https://twitter.com/@' + this.socials.twitter
    },
    facebook_href: function () {
      return 'https://www.facebook.com/' + this.socials.facebook
    }
  }
}
</script>
