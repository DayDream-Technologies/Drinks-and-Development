/**
 * Site copy (placeholders). Edit this file to update all text without touching components.
 */

export const content = {
  hero: {
    headline: 'Drinks and Development',
    tagline: 'A professional networking group in Grand Rapids, MI. Connect with local professionals over drinks and conversation.',
    ctaLinkedIn: 'Join our LinkedIn group',
  },
  about: {
    title: 'What we do',
    paragraph1:
      "We're a professional networking group in Grand Rapids, MI. We bring together local professionals from all industries for regular meetups, drinks, and meaningful conversation.",
    paragraph2:
      'Whether you’re building your career, growing your business, or expanding your network, you’ll find a welcoming group of peers. No agendas or pitches, just good company and genuine connections.',
  },
  events: {
    title: 'Upcoming events',
    description: 'We keep our meetups on the calendar below. Add it to yours or stop by when we’re next meeting.',
  },
  signup: {
    title: 'Stay in the loop',
    subtitle: 'Get a heads-up about upcoming meetups and group updates.',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'What brings you here? (optional)',
    messagePlaceholder: 'Networking, industry connections, or just saying hello.',
    submitLabel: 'Sign up',
    successMessage: 'Thanks! We’ll be in touch.',
    errorMessage: 'Something went wrong. Please try again or reach out on LinkedIn.',
  },
  footer: {
    location: 'Grand Rapids, MI',
    copyright: 'Drinks and Development',
    developedBy: 'Site developed by',
    developerName: 'DayDream Technologies',
    developerUrl: 'https://daydreamtechnologies.net',
  },
  pastEvents: {
    title: 'Past Events',
    intro: 'Meetups we’ve hosted around Grand Rapids and West Michigan.',
    sponsoredBy: 'Sponsored by',
    events: [
      {
        id: 'blox-newco-fnbm',
        venueId: 'blox-newco',
        location: 'BLOX / Newco Design-Build',
        address: '4131 Roger B. Chaffee Memorial Blvd SE, Grand Rapids, MI 49548',
        lat: 42.8892124,
        lng: -85.6527256,
        image: 'events/blox-newco-fnbm.png',
        sponsors: [{ name: 'First National Bank of Michigan', to: '/sponsors' }],
      },
      {
        id: 'meijer-gardens',
        venueId: 'meijer-gardens',
        location: 'Frederik Meijer Gardens & Sculpture Park',
        address: '1000 E Beltline Ave NE, Grand Rapids, MI 49525',
        lat: 42.9803285,
        lng: -85.5908786,
        image: 'events/meijer-gardens.png',
        sponsors: [{ name: 'Frederik Meijer Gardens & Sculpture Park', href: 'https://www.meijergardens.org/' }],
      },
      {
        id: 'mammoth-distilling',
        venueId: 'mammoth-distilling',
        location: 'Mammoth Distilling',
        address: '710 Wealthy St SE, Grand Rapids, MI 49503',
        lat: 42.9554652,
        lng: -85.6511492,
        image: 'events/mammoth-distilling.png',
        sponsors: [
          { name: 'BT Partners', href: 'https://www.btpartners.com/' },
          { name: 'Mammoth Distilling', href: 'https://mammothdistilling.com/grand-rapids/' },
        ],
      },
      {
        id: 'mitten-brewing',
        venueId: 'mitten-brewing',
        location: 'The Mitten Brewing Company',
        address: '527 Leonard St NW, Grand Rapids, MI 49504',
        lat: 42.9851679,
        lng: -85.6810634,
        image: 'events/mitten-brewing.png',
        sponsors: [{ name: 'AFP West Michigan', href: 'https://afpwm.org/' }],
      },
      {
        id: 'lmcu-leonard',
        venueId: 'lmcu-leonard',
        location: 'LMCU Leonard St',
        address: '1820 Leonard St NE, Grand Rapids, MI 49505',
        lat: 42.9843506,
        lng: -85.6245314,
        image: 'events/lmcu-leonard.png',
        sponsors: [{ name: 'LMCU Leonard St', href: 'https://www.lmcu.org/leonard-st' }],
      },
      {
        id: 'blox-newco-wam',
        venueId: 'blox-newco',
        location: 'BLOX / Newco Design-Build',
        address: '4131 Roger B. Chaffee Memorial Blvd SE, Grand Rapids, MI 49548',
        lat: 42.8892124,
        lng: -85.6527256,
        image: 'events/blox-newco-wam.png',
        sponsors: [{ name: 'WAM Printing', href: 'https://www.wamgr.com/' }],
      },
      {
        id: 'ganders',
        venueId: 'ganders',
        location: 'Ganders Restaurant & Lounge',
        address: '4747 28th St SE, Grand Rapids, MI 49512',
        lat: 42.9133703,
        lng: -85.5501612,
        image: 'events/ganders.png',
        sponsors: [],
      },
    ],
  },
  participants: {
    title: 'Active Participants',
    intro:
      'These organizations regularly attend Drinks and Development meetups in Grand Rapids.',
    visitWebsite: 'Visit website',
    teaserTitle: 'Active Participants',
    teaserIntro: 'Local organizations that show up, connect, and keep coming back.',
    teaserCta: 'Meet our participants',
    organizations: [
      {
        id: 'cognition-daily',
        name: 'Cognition Daily',
        tagline:
          'Improving cognitive, neurological, and psychological health through accessible, evidence-based digital programs.',
        website: 'https://cognitiondaily.net',
        logo: 'logos/cognition-daily-logo.png',
      },
      {
        id: 'streams-of-hope',
        name: 'Streams of Hope',
        tagline:
          'Cultivating a healthy, vibrant neighborhood through food, education, and community connection.',
        website: 'https://streamsofhope.org',
        logo: 'logos/streams-of-hope-logo.png',
      },
      {
        id: 'sus-manos-gleaners',
        name: 'Sus Manos Gleaners',
        tagline: 'Surplus Food for Starving People',
        website: 'https://smgleaners.org',
        logo: 'logos/sus-manos-gleaners-logo.png',
      },
      {
        id: 'the-fundraisers-collective',
        name: 'The Fundraisers Collective',
        tagline:
          'Connecting, equipping, and elevating nonprofit professionals to grow fundraising impact.',
        website: 'https://thefundraiserscollective.com',
        logo: 'logos/the-fundraisers-collective-logo.png',
      },
      {
        id: 'code-on-wheels',
        name: 'Code on Wheels',
        tagline: 'Bringing technology education directly to our communities.',
        about:
          'Code on Wheels is a West Michigan nonprofit that brings hands-on technology education directly to youth in their communities. Through partnerships with schools and community organizations, we provide coding classes, workshops, camps, and after-school programs that give students opportunities to explore technology and build new skills.',
        website: 'https://codeonwheels.org',
        logo: 'logos/code-on-wheels-logo.png',
      },
      {
        id: 'revive-and-thrive',
        name: 'Revive & Thrive',
        tagline: 'Nourishing the community, one meal at a time.',
        about:
          'Revive & Thrive, a Food is Medicine provider, delivers no-cost, medically supportive meals to those facing cancer, diabetes, and heart disease while empowering the next generation. We combine nutritious, chef-prepared meals with Registered Dietitian services, nutrition education, a Teen Chef Program, and meaningful community connection.',
        website: 'https://reviveandthrive.org',
        logo: 'logos/revive-and-thrive-logo.png',
      },
      {
        id: 'startup-garage',
        name: 'Startup Garage',
        tagline: 'Expanding Christ-Centered Entrepreneurship',
        about:
          'Startup Garage is a nonprofit dedicated to developing redemptive entrepreneurs by equipping early-stage, faith-driven founders through a clear pathway of events, intentional connections, and our small groups called The Forge.',
        website: 'https://www.startupgarage.org/',
        logo: 'logos/startup-garage-logo.png',
      },
      {
        id: 'upcycle-bikes',
        name: 'Upcycle Bikes',
        tagline: 'Old bike. New life.',
        about:
          'Upcycle Bikes strengthens independence, opportunity, and connection through affordable and accessible transportation by providing refurbished adult bikes at no cost to individuals with financial constraints.',
        website: 'https://www.upcyclebikes.org',
        logo: 'logos/upcycle-bikes-logo.png',
      },
    ],
  },
  sponsors: {
    title: 'Sponsors',
    intro: 'Organizations that support Drinks and Development and the community around it.',
    visitWebsite: 'Visit website',
    organizations: [
      {
        id: 'first-national-bank-of-michigan',
        name: 'First National Bank of Michigan',
        about: [
          'First National Bank of Michigan is privately owned by area investors who value local decision-making and the ability to help our communities and individuals grow and prosper.',
          'Our employees and directors have been involved in local banking for many years and are a vital part of the community, both professionally and personally.',
        ],
        website: 'https://fnbmichigan.bank',
        logo: 'logos/first-national-bank-of-michigan-logo.png',
      },
    ],
  },
  team: {
    title: 'Our Team',
    intro: 'The board members who lead Drinks and Development.',
    linkedInLabel: 'LinkedIn',
    members: [
      {
        id: 'jr-roberts',
        name: 'JR Roberts',
        title:
          'Founder, The Fundraisers Collective | Co-Host, Known Profits | Fractional Development Director, Streams GR',
        about: [
          'JR Roberts has worked in nonprofit leadership since 2010, focusing on fundraising and development for organizations serving youth, people experiencing homelessness, and communities needing food access, healthcare, and education.',
          'He is a Fractional Development Director with Streams GR, co-host of the Known Profits podcast, and founder of The Fundraisers Collective, a community helping fundraisers connect, learn, and feel less alone.',
        ],
        linkedin: 'https://www.linkedin.com/in/jroberts1/',
        photo: 'team/jr-roberts.jpg',
      },
      {
        id: 'alex-wilson',
        name: 'Alex Wilson',
        title:
          'Founder, Drinks and Development | Co-Founder, The Fundraisers Collective | Director of Personal Giving, Samaritas',
        about: [
          'Alex Wilson is passionate about connecting others and serving the community. She founded Drinks and Development, a free networking group for fundraisers in Grand Rapids, and co-founded The Fundraisers Collective.',
          'She is Director of Personal Giving at Samaritas and a Grand Rapids Rotarian, serving on boards and committees across West Michigan including the GRFD Fire Prevention Foundation, Leading Ladies, Aquinas College Alumni Leadership Council, and Women of Habitat Kent.',
        ],
        linkedin: 'https://www.linkedin.com/in/alexandra-wilson-b41186a5/',
        photo: 'team/alex-wilson.png',
      },
      {
        id: 'collin-olsson',
        name: 'Collin Olsson',
        title: 'Donor Engagement and Retention Manager, CURE International',
        about: [
          'Collin Olsson leads donor engagement and retention at CURE International, a Grand Rapids-based global nonprofit network of children’s hospitals providing surgical care in a gospel-centered environment.',
          'He has grown through donor engagement and relations roles at CURE since 2020. He holds a Bachelor of Arts in Communication from Cornerstone University, with minors in business management and marketing.',
        ],
        linkedin: 'https://www.linkedin.com/in/collin-olsson-1a766341/',
        photo: null,
      },
      {
        id: 'alexis-velazquez',
        name: 'Alexis Velazquez',
        title: 'Development Officer, Frederik Meijer Gardens & Sculpture Park',
        about: [
          'Alexis Velazquez is a Development Officer at Frederik Meijer Gardens & Sculpture Park. She previously served as Senior Development Manager at the American Cancer Society.',
          'She holds a Master’s in Philanthropy and Nonprofit Leadership from Grand Valley State University, where her graduate work focused on funding, access, and how nonprofit communities support one another.',
        ],
        linkedin: 'https://www.linkedin.com/in/alexis-velazquez-735174180/',
        photo: 'team/alexis-velazquez.png',
      },
      {
        id: 'kevin-nelson',
        name: 'Kevin Nelson',
        title:
          'Director of Donor Development, Heart of West Michigan United Way | Co-Founder, The Fundraisers Collective',
        about: [
          'Kevin Nelson is Director of Donor Development at Heart of West Michigan United Way, where he helps people and companies engage their time, talent, and treasure to fight poverty and build a thriving community.',
          'A co-founder of The Fundraisers Collective, he is a community advocate and connector. He is a Metro Detroit native with family roots in Michigan’s Keweenaw Peninsula.',
        ],
        linkedin: 'https://www.linkedin.com/in/kevin-nelson-/',
        photo: 'team/kevin-nelson.png',
      },
      {
        id: 'steven-de-polo',
        name: 'Steven de Polo',
        title: 'Grants Director, YMCA of Greater Grand Rapids | Adjunct Instructor, Aquinas College',
        about: [
          'Steven de Polo is a grants and philanthropy strategist who leads institutional funding at the YMCA of Greater Grand Rapids, securing roughly $4 million annually in foundation and public support.',
          'He has more than two decades of fund development experience, including leadership roles at Hope Network, Covenant House Michigan, and Grand Valley State University. He teaches grant writing at Aquinas College and leads the Grand Rapids Grant Writers Roundtable.',
        ],
        linkedin: 'https://www.linkedin.com/in/stevendepolo/',
        photo: 'team/steven-de-polo.png',
      },
      {
        id: 'kyle-szucs',
        name: 'Kyle Szucs',
        title:
          'Associate Director of Development, MSU College of Human Medicine | Co-Host, Known Profits | Co-Founder, The Fundraisers Collective',
        about: [
          'Kyle Szucs, CFRM, is Associate Director of Development at Michigan State University College of Human Medicine, co-host of the Known Profits podcast, and co-founder of The Fundraisers Collective.',
          'He co-chairs Drinks and Development in Grand Rapids, a monthly gathering for fundraising professionals. He previously served as a philanthropy specialist at Kids’ Food Basket, working with corporate and individual donors to address food insecurity in West Michigan.',
        ],
        linkedin: 'https://www.linkedin.com/in/kyle-szucs/',
        photo: 'team/kyle-szucs.png',
      },
    ],
  },
}
