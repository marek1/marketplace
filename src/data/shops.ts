import { Shop } from '@/interfaces';
import { Products } from '@/data/products';

export const Shops: Shop[] = [
  {
    name: 'Jibboo Der Spielzeugladen',
    route: 'jibboo-der-spielzeugladen',
    logo: 'http://spielzeug.jibboo.de/wp-content/uploads/Logo-Jibboo3-Kopie.png',
    address: 'Bänschstraße 53, 10247 Berlin',
    coordinates: [52.5183232, 13.465673],
    url: 'http://jibboo.de/',
    visits: [],
    products: [
      {
        ...Products[0],
        inStock: 6,
        prices: [
          {
            price: 54.99,
            date: new Date('2019-03-16')
          },
          {
            price: 59.99,
            date: new Date('2020-01-01')
          },
          {
            price: 39.99,
            date: new Date('2020-03-01')
          }
        ],
        visits: []
      },
      {
        ...Products[1],
        inStock: 1,
        prices: [
          {
            price: 99.99,
            date: new Date('2019-03-16')
          },
          {
            price: 75.99,
            date: new Date('2020-01-01')
          },
          {
            price: 79.99,
            date: new Date('2020-03-01')
          }
        ],
        visits: []
      }
    ]
  },
  {
    name: 'siebenschön Spielzeugladen',
    route: 'siebenschoen',
    logo: '',
    address: 'Gärtnerstraße 26, 10245 Berlin',
    coordinates: [52.5098868, 13.460254],
    url: 'https://www.siebenschoen.de/',
    visits: [],
    products: [
      {
        ...Products[0],
        inStock: 6,
        prices: [
          {
            price: 37.99,
            date: new Date('2020-03-01')
          }
        ],
        visits: []
      }, {
        ...Products[2],
        inStock: 1,
        prices: [
          {
            price: 39.99,
            date: new Date('2019-01-01')
          }
        ],
        visits: [
          {
            ip: '0.0.0.0',
            date: new Date('2019-12-12')
          }
        ]
      },
      {
        ...Products[3],
        inStock: 2,
        prices: [
          {
            price: 17.99,
            date: new Date('2020-03-01')
          }
        ],
        visits: []
      }
    ]
  },
  {
    name: 'Großstadtponny',
    route: 'grossstadtponny',
    logo: 'http://grossstadtpony.de/wp-content/uploads/2016/01/logo_horizontal.png',
    address: 'Gärtnerstraße 26, 10245 Berlin',
    coordinates: [52.5098869, 13.460255],
    url: 'http://grossstadtpony.de/',
    visits: [],
    products: [
      {
        ...Products[8],
        inStock: 1,
        prices: [
          {
            price: 29.99,
            date: new Date('2020-03-01')
          }
        ],
        visits: []
      }
    ]
  },
  {
    name: 'fuchswecker',
    route: 'fuchswecker',
    logo: 'http://www.gutesspielzeug.com/wp-content/uploads/2019/10/fuchswecker_AI10-2.png',
    address: 'Bötzowstraße 17, 10407 Berlin',
    coordinates: [52.5307116, 13.4326534],
    url: 'http://www.gutesspielzeug.com/',
    visits: [],
    products: []
  },
  {
    name: 'Lieblingsplatz Berlin',
    route: 'lieblingsplatz',
    logo: 'https://4.bp.blogspot.com/-wsdxFd0h2O8/XeE6pRwf_xI/AAAAAAAAKXw/eK5Zd6X0E_gg5PqX-pS2_w8e4cjXvz_ZwCK4BGAYYCw/w800/FB-Banner_FAIR.jpg',
    address: 'Kollwitzstraße 22, 10405 Berlin',
    coordinates: [52.5329433, 13.414659],
    url: 'https://lieblingsplatzinberlin.blogspot.com/',
    visits: [],
    products: []
  },
  {
    name: 'Die kleine Gesellschaft',
    route: 'die-kleine-gesellschaft',
    logo: '',
    address: 'Rykestraße 41, 10405 Berlin',
    coordinates: [52.5372229, 13.4208963],
    url: 'https://kleinegesellschaft.com/',
    visits: [],
    products: [
      {
        ...Products[7],
        inStock: 1,
        prices: [
          {
            price: 29.99,
            date: new Date('2020-03-01')
          }
        ],
        visits: []
      }
    ]
  },
  {
    name: 'AllerleiSpiel',
    route: 'allerleispiel',
    logo: 'http://www.allerleispiel.de/_layout/images/logo.png',
    address: 'Prenzlauer Allee 211, 10405 Berlin',
    coordinates: [52.5363765, 13.4221402],
    url: 'http://www.allerleispiel.de/',
    visits: [],
    products: []
  },
  {
    name: 'Ratzekatz - Spielzeugland',
    route: 'ratzekatz-spielzeugland',
    logo: 'https://www.ratzekatz.de/wp-content/uploads/2017/10/head-banner-final.jpg',
    address: 'Raumerstraße 7, 10437 Berlin',
    coordinates: [52.5429404, 13.4178048],
    url: 'http://www.ratzekatz.de/',
    visits: [],
    products: [
      {
        ...Products[6],
        inStock: 1,
        prices: [
          {
            price: 9.99,
            date: new Date('2020-03-01')
          }
        ],
        visits: []
      }
    ]
  },
  {
    name: 'Die wilden Schwäne',
    route: 'die-wilden-schwaene',
    logo: '',
    address: 'Schönhauser Allee 63, 10437 Berlin',
    coordinates: [52.5458476, 13.4133829],
    url: 'http://www.wildeschwaene.de/',
    visits: [],
    products: []
  },
  {
    name: 'Katalka Spielwaren u. Handgefertiges',
    route: 'katalka-spielwaren-handgefertiges',
    logo: '',
    address: 'Raumerstraße 22, 10437 Berlin',
    coordinates: [52.5411607, 13.4237735],
    url: 'http://www.katalka.de/',
    visits: [],
    products: [
      {
        ...Products[4],
        inStock: 1,
        prices: [
          {
            price: 19.99,
            date: new Date('2020-03-01')
          }
        ],
        visits: []
      }
    ]
  },
  {
    name: 'Onkel Philipps Spielzeugwerkstatt',
    route: 'onkel-philipps-spielzeugwerkstatt',
    logo: '',
    address: 'Choriner Str. 35, 10435 Berlin',
    coordinates: [52.5364551, 13.4105201],
    url: 'http://onkel-philipp.de/',
    visits: [],
    products: [
      {
        ...Products[5],
        inStock: 1,
        prices: [
          {
            price: 9.99,
            date: new Date('2020-03-01')
          }
        ],
        visits: []
      }
    ]
  }
];
