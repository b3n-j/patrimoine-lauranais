export interface Translation {
  header: {
    searchBarPlaceholder: string,
    navbar: {
      dropdownButtonOne: {
        label: string,
        submenu: {
          art: string,
          collectibles: string,
          domainNames: string,
          music: string,
          photography: string,
          sports: string,
          tradingCards: string,
          utility: string,
          virtualWorlds: string,
        }
      }
      dropdownButtonTwo: {
        label: string,
        submenu: {
          ranking: string,
          activity: string,
        }
      }
      dropdownButtonThree: {
        label: string,
        submenu: {
          helpCenter: string,
          blog: string,
          documents: string,
          newsletter: string,
        }
      }
      dropdownButtonFour: {
        label: string,
      }
    }
    account: {
      profile: string,
      favorites: string,
      collections: string,
      settings: string,
    }
  },
  footer: {
    newsletter: {
      title: string
      paragraph: string,
      searchBarPlaceholder: string,
      buttonLabel: string,
    },
    socialMedia: {
      title: string
    },
    aboutUs: {
      paragraph: string,
    },
    sitemap: {
      columnOne: {
        title: string,
        new: string,
        art: string,
        collectibles: string,
        domainNames: string,
        music: string,
        photography: string,
        sports: string,
        tradingCards: string,
        utility: string,
        virtualWorlds: string, 
      },
      columnTwo: {
        title: string,
        profile: string,
        favorites: string,
        collections: string,
        settings: string,
      },
      columnThree: {
        title: string,
        helpCenter: string,
        platformStatus: string,
        partners: string,
        blog: string,
        documents: string,
        newsletter: string,
      },
      columnFour: {
        title: string,
        about: string,
        careers: string,
      }
    },
    legalNotices: {
      termsOfService: string,
      privacyPolicy: string,
    }
  },
  
  common: {
    translateButton: string,
    translatedText: string,
  }
  home: {
    title: string,
    welcome: {
      title: string,
      subtitle: string,
      firstActionButtonLabel: string,
      secondActionButtonLabel: string,
    }
  },
  profile: {
    title: string,
  }
  settings: {
    title: string,
  }
  notFound: {
    title: string,
  }
  marketplace: {
    title: string,
  },
}
