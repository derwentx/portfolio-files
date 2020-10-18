<template>
  <div id="app" class="main-wrapper">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Menu</span>
        <span class="d-none d-lg-block">
          <img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            :src="require_asset(profile_file)"
            alt=""
          />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience"
              >Experience</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education"
              >Education</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests"
              >Interests</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://blog.laserphile.com/">Blog</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/derwentx/portfolio-files"
              >Source Code</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">
      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">
            {{ name.first }} <span class="text-primary">{{ name.last }}</span>
          </h1>
          <div class="subheading mb-5">
            <a :href="phone_href">{{ contact.phone }}</a> ·
            <a :href="email_href">{{ contact.email }}</a>
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

      <section
        class="resume-section p-3 p-lg-5 d-flex flex-column"
        id="experience"
      >
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>

          <div
            class="resume-item d-flex flex-column flex-md-row mb-5"
            v-for="job in experience"
            :key="job.company"
          >
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ job.position }}</h3>
              <div class="subheading mb-3">{{ job.company }}</div>
              <p>{{ job.description }}</p>
              <ul>
                <li v-for="(item, index) in job.items" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary"
                >{{ job.startDate }} - {{ job.endDate }}</span
              >
            </div>
          </div>
        </div>
      </section>

      <section
        class="resume-section p-3 p-lg-5 d-flex flex-column"
        id="education"
      >
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>

          <div
            class="resume-item d-flex flex-column flex-md-row mb-5"
            v-for="edu in education"
            :key="edu.qualification"
          >
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ edu.institution }}</h3>
              <div class="subheading mb-3">{{ edu.qualification }}</div>
              <p>{{ edu.description }}</p>
              <ul>
                <li v-for="(point, index) in edu.points" :key="index">
                  {{ point }}
                </li>
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
              <i class="devicon-python-plain"></i>
              <!-- -wordmark -->
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
              <i class="devicon-go-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-java-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-haskell"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-clojure"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-ruby-plain"></i>
              <!-- -wordmark -->
            </li>
            <!-- TODO: complete -->
          </ul>
          <div class="subheading mb-3">Web Technologies</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicon-html5-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-css3-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-bootstrap-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-jquery-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-wordpress-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-nodejs-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-vuejs-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-apache-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-mysql-plain"></i>
              <!-- -wordmark -->
            </li>
          </ul>

          <div class="subheading mb-3">Tools & Workflow</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicon-travis-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-git-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-atom-original"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicon-vim-plain"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-docker"></i>
              <!-- -wordmark -->
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-google-cloud-platform"></i>
              <!-- -wordmark -->
            </li>
          </ul>
        </div>
      </section>

      <section
        class="resume-section p-3 p-lg-5 d-flex flex-column"
        id="interests"
      >
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>
            In my spare time I play drums for
            <a href="https://www.facebook.com/theanxioustype">two</a>
            <a href="https://www.facebook.com/shaebirdwonders/">bands</a> and
            make experimental electronic music using algorithmic composition.
            Writing music in high level languages like Supercollider, Haskell
            and Clojure/Overtone is a nice way to take a break from work. Most
            aspects of my life revolve around code in some way.
          </p>
          <p>
            For most of my life, Python has been my native tongue, and I feel
            very much at home in a command line. I've used Python in countless
            open source projects ranging from small utilities and web scrapers
            to automate my workflow; to ambitious collaborative art projects for
            festivals. My friends and I have worked on several novel electronics
            engineering projects which we have written about in
            <a href="http://blog.laserphile.com/">our blog</a>.
          </p>
          <div
            class="resume-item d-flex flex-column flex-md-row mb-5"
            v-for="interest in interests"
            :key="interest.title"
          >
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ interest.title }}</h3>
              <p v-html="interest.description"></p>
              <ul>
                <li v-for="(item, index) in interest.items" :key="index">
                  <strong v-html="item.strong"></strong>
                  <span
                    v-for="(sub_item, sub_index) in item.sub_items"
                    :key="sub_index"
                  >
                    <span> &middot; </span><span v-html="sub_item"></span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        class="resume-section p-3 p-lg-5 d-flex flex-column"
        id="projects"
      >
        <div class="my-auto">
          <h2 class="mb-5">Projects</h2>
          <div
            class="resume-item d-flex flex-column flex-md-row mb-5"
            v-for="project in projects"
            :key="project.title"
          >
            <div class="col-md-5">
              <img
                class="img-fluid rounded mb-3 mb-md-0"
                :src="require_asset(project.image)"
                width="320px"
              />
            </div>
            <div class="resume-content mr-auto col-md-7">
              <h3 class="mb-0">{{ project.title }}</h3>
              <div class="subheading mb-3">{{ project.role }}</div>
              <ul class="list-unstyled">
                <li
                  v-for="(badge, index) in project.badges"
                  :key="index"
                  v-html="badge.html"
                ></li>
              </ul>

              <p class="mb-0" v-html="project.description"></p>
              <ul>
                <li v-for="(link, index) in project.links" :key="index">
                  <a :href="link.url">{{ link.text }}</a>
                </li>
              </ul>
            </div>
          </div>
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
        email: 'derwentx@gmail.com'
      },
      about:
        'I am a polymath developer with a passion for social justice. I have an innate ability to quickly adapt to unfamiliar tech stacks and a strong drive for solving complex engineering problems on the cutting edge of computer science. I have made a point of exposing myself to as many different software engineering domains as possible. These domains range from quantum computing, machine learning, and internet of things, to augmented reality, data engineering and cloud native engineering. I am also an engaged participant in the information security community, attending various capture-the-flags, meet-ups and conferences.',
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
          location: "O'Connor, WA",
          description: '',
          items: [
            'Provided IT support and POS system deployment to a fleet of 4 stores',
            'Designed, Built and Optimized a custom WooCommerce website which has vastly improved the business’ sales.',
            'Installed and Maintained a network of security camera systems across multiple locations',
            'Created a utility which automatically synchronizes product stock data between WooCommerce and Xero using their respective APIs',
            'Built a custom map generator around the Xero accounting API'
          ],
          startDate: 'Jan. 2010',
          endDate: 'Jun. 2014'
        },
        {
          position: 'Freelance IT Consultant',
          company: 'Laserphile',
          location: 'Melbourne, VIC',
          description: '',
          items: [
            'Built a completely bespoke eCommerce system for a client with a dynamic and challenging set of requirements',
            "Created a set of utilities which could synchronize user, product and order data between a client's CRM, Accounting and eCommerce databases",
            'Learnt first-hand, the importance of rigid version control and testing procedures in collaborative software development projects',
            'Applied leadership skills to organize teams spanning multiple disciplines and timezones',
            'Gained an awareness of significance of good information security practices when administrating web-facing applications',
            'Took on the role of a sysadmin in an environment that was under a constant barrage of DDoS and attempted defacement attacks where I learnt pre-emptive DDoS mitigation techniques.',
            'Performed incident response for a client whose web hosting company and backups had been taken down by an advanced attacker.'
          ],
          startDate: 'Jun. 2014',
          endDate: 'Jan. 2019'
        },
        {
          position: 'Regional Security Specialist',
          company: 'ThoughtWorks',
          location: 'Melbourne, VIC',
          description: '',
          items: [
            'Lead a team of developers from around the world in building a VueJS web app for connecting victims of the Australian bushfire disaster with a searchable directory of helpful resources',
            'Helped the Personalization and Optimization team at an airline with the productionisation of their machine learning pipelines',
            "Set up multiple Azure DevOps pipelines which provisioned a large retail organization's cloud infrastructure using Terraform.",
            'Built an augmented reality app as a proof of concept for a major sporting organization.',
            'Helped a renewable energy company enrich the data visualizations in their React frontend and improve the test coverage of their GraphQL queries.',
            'Performed the role of security champion on most of these engagements.'
          ],
          startDate: 'Jan. 2019',
          endDate: 'Present'
        }
      ],
      education: [
        {
          institution: 'University of Western Australia',
          qualification: 'B.Sc. in Computer Science and Physics',
          description: '',
          dates: '2010 - 2013',
          points: ['Grade Point Average: 4.931']
        }
      ],
      projects: [
        {
          title: 'TeleCortex',
          role: 'Protocol, firmware and controller software',
          description:
            'Helped fabricate custom controller boards, designed and optimised transmission protocols to maximise throughput, wrote and reverse engineered microcontroller firmware, and built highly performant server and client applications for synchronously transmitting pixel data to multiple microcontrollers as part of an interactive geodesic LED dome art project in collaboration with <a href="https://github.com/laserphile/">laserphile</a>.',
          image: 'project-telecortex-inside-dome.gif',
          links: [
            {
              text: 'Blog posts',
              url: 'http://blog.laserphile.com/search/label/Cortex'
            },
            {
              text: 'Arduino Firmware on GitHub',
              url: 'https://github.com/Laserphile/TeleCortex'
            },
            {
              text: 'Python controller on GitHub',
              url: 'https://github.com/Laserphile/Python-TeleCortex'
            },
            {
              text: 'NodeJS Rewrite of Server on GitHub',
              url: 'https://github.com/Laserphile/JS-Telecortex-2-Server'
            }
          ],
          badges: [
            {
              html:
                '<a href="https://codeclimate.com/github/Laserphile/JS-Telecortex-2-Server/maintainability"><img src="https://api.codeclimate.com/v1/badges/ef74b26938c3f747b39f/maintainability" /></a>'
            },
            {
              html:
                '<a href="https://codecov.io/gh/Laserphile/JS-Telecortex-2-Server"><img src="https://codecov.io/gh/Laserphile/JS-Telecortex-2-Server/branch/master/graph/badge.svg" /></a>'
            }
          ]
        },
        {
          title: 'PixelBlaze Expander NodeJS Library',
          description:
            'A NodeJS Library for controlling <a href="https://github.com/simap/pixelblaze_output_expander">PixelBlaze Expander> boards via serial port.',
          image: 'pbx_board.jpeg',
          links: [
            {
              text: 'NodeJS library on GitHub',
              url: 'https://github.com/derwentx/js-pixelblaze-expander'
            }
          ],
          badges: [
            {
              html:
                '<a href="https://codeclimate.com/github/derwentx/js-pixelblaze-expander/maintainability"><img src="https://api.codeclimate.com/v1/badges/b16f8ee13c50462afb9a/maintainability" /></a>'
            }
          ]
        },
        {
          title: 'LEDPortal',
          description:
            'An interactive art installation with OpenGL driven animations parameters controlled by a leap motion',
          image: 'ledportal-leapmotion.gif',
          links: [
            {
              text: 'Java project on GitHub',
              url: 'https://github.com/flavius-space/ledportal-ide'
            }
          ]
        },
        {
          title: 'Moonbuggy',
          description:
            'Programmed the Arduino firmware for an electric vehicle art project in collaboration with Matt Callaghan',
          image: 'project-moonbuggy.png',
          links: [
            {
              text: 'Project on GitHub',
              url: 'https://github.com/derwentx/Moonbuggy-Controller'
            }
          ]
        },
        {
          title: 'Modified 3D Printer',
          description:
            'Designed custom components and firmware for a specialised 3d printer that could simultaneously print multiple materials in collaboration with Matt Callaghan',
          image: 'project-3d-printer.jpg',
          links: [
            {
              text: 'Blog Posts',
              url: 'http://blog.laserphile.com/search/label/3d%20printing'
            },
            {
              text: 'Firmware on GitHub',
              url: 'https://github.com/derwentx/Marlin-Laserphile'
            },
            {
              text: 'Open SCAD files on GitHub',
              url: 'https://github.com/derwentx/hydra-bits'
            }
          ]
        },
        {
          title: 'GPM Cache',
          description:
            'Wrote a script to locally cache files from a playlist in Google Play Music for you to enjoy offline',
          image: 'project-gpm-cache.png',
          links: [
            {
              text: 'Project on GitHub',
              url: 'https://github.com/derwentx/gpm-cache'
            }
          ],
          badges: [
            {
              html:
                '<a href="https://codeclimate.com/github/derwentx/gpm-cache/maintainability"><img src="https://api.codeclimate.com/v1/badges/f28cbc664d9193b330b3/maintainability" /></a>'
            }
          ]
        }
      ],
      interests: [
        {
          title: 'Conferences / Workshops',
          description:
            "During my time as a freelancer, I've attended numerous conferences (at my own expense) because I love being at the forefront of research in the computer science and information security community. I watch the talks that come out of CCC, Black Hat and DEF CON religiously. Here are some of the recent conferences and workshops I've been a part of:",
          items: [
            { strong: 'OWASP AppSec Day', sub_items: ['Melbourne, 2018'] },
            {
              strong: 'Platypus',
              sub_items: [
                'Ran a <a href="http://blog.laserphile.com/2017/10/platypus-hardware-hacking-101-finding.html">workshop on bypassing IoT security using UART</a>, 2017'
              ]
            },
            { strong: 'Ruxcon', sub_items: ['Melbourne, 2017'] },
            { strong: 'WAHCKon', sub_items: ['Perth, 2015 - 2016'] },
            { strong: 'PyCon', sub_items: ['Melbourne, 2017'] },
            { strong: 'Compose', sub_items: ['Melbourne, 2017 - 2018'] },
            { strong: 'PlatypusCamp', sub_items: ['Sydney, 2017'] },
            { strong: 'BuzzConf', sub_items: ['Melbourne, 2016 - 2017'] },
            { strong: 'WooConf', sub_items: ['San Francisco, 2014'] }
          ]
        },
        {
          title: 'Wargames / CTFs / Hackathons',
          description:
            "I started hacking with Kali Linux (or Backtrack as it was called then) in my teenage years on discarded computer hardware that I would find and repair. More recently I've been pursuing my passion in Infosec by competing in various capture the flag competitions, hackathons and wargame exercises.",
          items: [
            {
              strong: 'PentesterLab Pro',
              sub_items: [
                'Blue',
                'PCAP',
                'Yellow',
                'Intercept',
                'Serialize',
                'White',
                'Essential',
                'Unix'
              ]
            },
            { strong: 'RuxCon CTF', sub_items: ['2017'] },
            { strong: 'PlatypusCamp CTF', sub_items: ['Android Internals'] },
            { strong: 'PyCon Hackathon', sub_items: ['ESP32 Toolchain'] },
            { strong: 'ExploitExercises', sub_items: ['Nebula', 'Protostar'] },
            { strong: 'VulnHub', sub_items: ['Mr Robot'] },
            {
              strong: 'OverTheWire',
              sub_items: ['Bandit', 'Leviathan', 'Natas', 'Krypton']
            }
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
        if (
          location.pathname.replace(/^\//, '') ===
            this.pathname.replace(/^\//, '') &&
          location.hostname === this.hostname
        ) {
          var target = $(this.hash)
          target = target.length
            ? target
            : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate(
              {
                scrollTop: target.offset().top
              },
              1000,
              'easeInOutExpo'
            )
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

      this.$ua.trackView({ routeName: '/' })
    }) // End of use strict
  },
  methods: {
    require_asset: function (file) {
      if (file) {
        return require('./assets/' + file)
      }
    }
  },
  computed: {
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
