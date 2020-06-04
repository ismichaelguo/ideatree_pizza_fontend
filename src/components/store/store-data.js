const STORE_DATA = [
    {
        stateId: 1,
        states: 'NEW SOUTH WALES',
        cities: [
            {
                cityID: 1,
                city: 'SYDNEY',
                stores: [
                    {
                        id: 1,
                        storeName: 'SYDNEY CBD',
                        address: 'T22 259 George St (Cnr Of Jamison & Lang Sts)',
                        suburb: 'CBD',
                        state: 'NSW',
                        postcode: '2000',
                        phone: '02 8275 2120'
                    },
                    {
                        id: 2,
                        storeName: 'GLEBE',
                        address: '167 Glebe Point Road',
                        suburb: 'GLEBE',
                        state: 'NSW',
                        postcode: '2037',
                        phone: '02 9296 6400'
                    },
                    {
                        id: 3,
                        storeName: 'PYRMONT',
                        address: '212-214 Harris Street',
                        suburb: 'PYRMONT',
                        state: 'NSW',
                        postcode: '2009',
                        phone: '02 9392 6120'
                    },
                    {
                        id: 4,
                        storeName: 'PYRMONT',
                        address: 'Ruby Tower 15 Gadigal Ave',
                        suburb: 'ZETLAND',
                        state: 'NSW',
                        postcode: '2017',
                        phone: '02 9663 6020'
                    },
                    {
                        id: 5,
                        storeName: 'CREMORNE',
                        address: '108 Glover Street',
                        suburb: 'CREMORNE',
                        state: 'NSW',
                        postcode: '2090',
                        phone: '02 9307 2620'
                    }]
            },
            {
                cityID: 2,
                city: 'Randwick',
                stores: [
                    {
                        id: 6,
                        storeName: 'BONDI',
                        address: '85 Bondi Road',
                        suburb: 'BONDI',
                        state: 'NSW',
                        postcode: '2026',
                        phone: '02 9386 8420'
                    },
                    {
                        id: 7,
                        storeName: 'MASCOT',
                        address: 'Shop 98 Bourke St',
                        suburb: 'MASCOT',
                        state: 'NSW',
                        postcode: '2020',
                        phone: '02 8339 3420'
                    }]
            },
            {
                cityID: 3,
                city: 'Wollongong',
                stores: [
                    {
                        id: 8,
                        storeName: 'WOLLONGONG CITY',
                        address: 'Cnr Smith And Keira St',
                        suburb: 'WOLLONGONG',
                        state: 'NSW',
                        postcode: '2500',
                        phone: '02 4222 6020'
                    },
                    {
                        id: 9,
                        storeName: 'WARRAWONG',
                        address: 'Shop 1 115 King Street',
                        suburb: 'WARRAWONG',
                        state: 'NSW',
                        postcode: '2502',
                        phone: '02 4251 9520'
                    }]
            },
        ]
    },
    {
        stateId: 2,
        states: 'AUSTRALIAN CAPITAL TERRITORY',
        cities: [
            {
                cityID: 4,
                city: 'Canberra',
                states: 'AUSTRALIAN CAPITAL TERRITORY',
                stores: [
                    {
                        id: 10,
                        storeName: 'CANBERRA CITY',
                        address: 'Cnr Smith And Keira St',
                        suburb: 'WOLLONGONG',
                        state: 'ACT',
                        postcode: '2500',
                        phone: '02 4222 6020'
                    },
                    {
                        id: 11,
                        storeName: 'WARRAWONG',
                        address: 'Shop 1 115 King Street',
                        suburb: 'WARRAWONG',
                        state: 'ACT',
                        postcode: '2502',
                        phone: '02 4251 9520'
                    }]
            },
            {
                cityID: 5,
                city: 'Gungahlin',
                stores: [
                    {
                        id: 12,
                        storeName: 'GUNGAHLIN',
                        address: 'Shop 3 Block 8 Ernest Cavanagh Street',
                        suburb: 'GUNGAHLIN',
                        state: 'ACT',
                        postcode: '2912',
                        phone: '02 6219 4420'
                    },
                    {
                        id: 13,
                        storeName: 'DICKSON',
                        address: '73/2 Cape Street',
                        suburb: 'DICKSON',
                        state: 'ACT',
                        postcode: '2602',
                        phone: '02 6234 9220'
                    }]
            },
        ]
    },
    {
        stateId: 3,
        states: 'QUEENSLAND',
        cities: [
            {
                cityID: 6,
                city: 'Brisbane',
                stores: [
                    {
                        id: 14,
                        storeName: 'TARINGA',
                        address: 'Shop 1 191 Moggill Road (Cnr Moorak Street)',
                        suburb: 'TARINGA',
                        state: 'QLD',
                        postcode: '4068',
                        phone: '07 3022 7120'
                    },
                    {
                        id: 15,
                        storeName: 'WISHART',
                        address: '9 Shillington Place',
                        suburb: 'WISHART',
                        state: 'QLD',
                        postcode: '4122',
                        phone: '07 3422 9620'
                    }]
            },
            {
                cityID: 7,
                city: 'Cairns',
                stores: [
                    {
                        id: 16,
                        storeName: 'CAIRNS CITY',
                        address: 'Shop 10 Civic Shopping Centre 113-117 Sheridan Street',
                        suburb: 'CAIRNS',
                        state: 'QLD',
                        postcode: '4870',
                        phone: '07 4232 4620'
                    },
                    {
                        id: 17,
                        storeName: 'MANUNDA',
                        address: '1 Jensen Street',
                        suburb: 'MANOORA',
                        state: 'QLD',
                        postcode: '4870',
                        phone: '07 4058 5620'
                    }]
            },
            {
                cityID: 8,
                city: 'Townsville',
                stores: [
                    {
                        id: 18,
                        storeName: 'AITKENVALE',
                        address: 'Shop 3 Banyans On Nathan 186 Nathan Street',
                        suburb: 'AITKENVALE',
                        state: 'QLD',
                        postcode: '4814',
                        phone: '07 4727 6820'
                    },
                    {
                        id: 19,
                        storeName: 'NORTH WARD',
                        address: 'Shop 15 North Ward Shopping Village Cnr Eyre & Gregory Streets',
                        suburb: 'NORTH WARD',
                        state: 'QLD',
                        postcode: '4810',
                        phone: '07 4755 3620'
                    }]
            },
            {
                cityID: 9,
                city: 'Carina',
                stores: [
                    {
                        id: 43,
                        storeName: 'CARINDALE',
                        address: 'Shop 3 Millennium Business Centre 1019 Old Cleveland Road',
                        suburb: 'CARINDALE',
                        state: 'QLD',
                        postcode: '4152',
                        phone: '07 3022 4520'
                    },
                    {
                        id: 44,
                        storeName: 'CANNON HILL',
                        address: '1181 Wynnum Road',
                        suburb: 'CANNON HILL',
                        state: 'QLD',
                        postcode: '4170',
                        phone: '07 3728 2420'
                    }]
            },
            {
                cityID: 10,
                city: 'Toowoomba',
                stores: [
                    {
                        id: 20,
                        storeName: 'TOOWOOMBA',
                        address: '120-126 Herries Street',
                        suburb: 'TOOWOOMBA',
                        state: 'QLD',
                        postcode: '4350',
                        phone: '07 4592 6820'
                    },
                    {
                        id: 21,
                        storeName: 'WYALLA',
                        address: 'Wyalla Plaza 238 Taylor St',
                        suburb: 'NEWTOWN',
                        state: 'QLD',
                        postcode: '4350',
                        phone: '07 4592 5620'
                    }]
            },
        ]
    },

    {
        stateId: 4,
        states: 'VICTORIA',
        cities: [
            {
                cityID: 11,
                city: 'Melbourne',
                stores: [
                    {
                        id: 22,
                        storeName: 'NORTH MELBOURNE',
                        address: 'Shop 5A 33 Flemington Road',
                        suburb: 'NORTH MELBOURNE',
                        state: 'VIC',
                        postcode: '3051',
                        phone: '03 9287 6220'
                    },
                    {
                        id: 23,
                        storeName: 'PORT MELBOURNE',
                        address: '253 Bay Street',
                        suburb: 'PORT MELBOURNE',
                        state: 'VIC',
                        postcode: '3207',
                        phone: '03 8342 9820'
                    }]
            },
            {
                cityID: 12,
                city: 'Geelong',
                stores: [
                    {
                        id: 24,
                        storeName: 'GEELONG CBD',
                        address: '53 Gheringhap St Cnr 87 Ryrie Street',
                        suburb: 'GEELONG',
                        state: 'VIC',
                        postcode: '3220',
                        phone: '03 5247 5820'
                    },
                    {
                        id: 25,
                        storeName: 'NEWCOMB',
                        address: 'Shop 15C 71 Bellarine Hwy',
                        suburb: 'NEWCOMB',
                        state: 'VIC',
                        postcode: '3219',
                        phone: '03 5274 4820'
                    }]
            },
            {
                cityID: 13,
                city: 'Ballarat',
                stores: [
                    {
                        id: 26,
                        storeName: 'BALLARAT',
                        address: '75 Victoria Street',
                        suburb: 'BALLARAT',
                        state: 'VIC',
                        postcode: '3350',
                        phone: '03 4313 8620'
                    },
                    {
                        id: 27,
                        storeName: 'SEBASTOPOL',
                        address: '4 Albert Street',
                        suburb: 'SEBASTOPOL',
                        state: 'VIC',
                        postcode: '3356',
                        phone: '03 4333 7920'
                    }]
            },
            {
                cityID: 14,
                city: 'Greensborough',
                stores: [
                    {
                        id: 28,
                        storeName: 'BUNDOORA',
                        address: '1282 Plenty Road',
                        suburb: 'BUNDOORA',
                        state: 'VIC',
                        postcode: '3083',
                        phone: '03 8467 5720'
                    },
                    {
                        id: 29,
                        storeName: 'HEIDELBERG',
                        address: 'Shop 11 101 Burgundy St',
                        suburb: 'HEIDELBERG',
                        state: 'VIC',
                        postcode: '3084',
                        phone: '03 8458 7720'
                    }]
            },

        ]
    },

    {
        stateId: 5,
        states: 'SOUTH AUSTRALIA',
        cities: [
            {
                cityID: 15,
                city: 'Adelaide',
                stores: [
                    {
                        id: 30,
                        storeName: 'PORT ADELAIDE',
                        address: '19 Church Place',
                        suburb: 'PORT ADELAIDE',
                        state: 'SA',
                        postcode: '5015',
                        phone: '08 8193 7120'
                    },
                    {
                        id: 31,
                        storeName: 'ADELAIDE CITY',
                        address: '236 Pulteney Street',
                        suburb: 'ADELAIDE',
                        state: 'SA',
                        postcode: '5000',
                        phone: '08 8198 8720'
                    }]
            },
            {
                cityID: 16,
                city: 'Elizabeth',
                states: 'SOUTH AUSTRALIA',
                stores: [
                    {
                        id: 32,
                        storeName: 'ELIZABETH SOUTH',
                        address: 'Shop 2 Elizabeth South Shopping Centre 100 Philip Highway',
                        suburb: 'ELIZABETH SOUTH',
                        state: 'SA',
                        postcode: '5112',
                        phone: '08 8259 5420'
                    },
                    {
                        id: 33,
                        storeName: 'HOLLYWOOD PLAZA',
                        address: '50/200 Winzor St',
                        suburb: 'SALISBURY DOWNS',
                        state: 'SA',
                        postcode: '5108',
                        phone: '08 8259 7620'
                    }]
            },
        ]
    },

    {
        stateId: 6,
        states: 'WESTERN AUSTRALIA',
        cities: [
            {
                cityID: 17,
                city: 'Perth',
                stores: [
                    {
                        id: 34,
                        storeName: 'EAST PERTH',
                        address: 'Tenancy 4 118 Royal St',
                        suburb: 'EAST PERTH',
                        state: 'WA',
                        postcode: '6004',
                        phone: '08 9486 6420'
                    },
                    {
                        id: 35,
                        storeName: 'WEST PERTH',
                        address: '1238 Hay St',
                        suburb: 'WEST PERTH',
                        state: 'WA',
                        postcode: '6005',
                        phone: '08 9491 0420'
                    }]
            },
            {
                cityID: 18,
                city: 'Clarkson',
                stores: [
                    {
                        id: 36,
                        storeName: 'JINDALEE',
                        address: 'Tenancy 3 Jindalee Commercial Centre 6 Jindalee Blvd',
                        suburb: 'JINDALEE',
                        state: 'WA',
                        postcode: '6036',
                        phone: '08 9561 7120'
                    },
                    {
                        id: 37,
                        storeName: 'MINDARIE',
                        address: 'Unit 8 Mindarie Commercial Centre Cnr Of Bergen Way & Anchorage Drive North',
                        suburb: 'MINDARIE',
                        state: 'WA',
                        postcode: '6030',
                        phone: '08 9233 4220'
                    }]
            },
        ]
    },

    {
        stateId: 7,
        states: 'NORTHERN TERRITORY',
        cities: [
            {
                cityID: 19,
                city: 'Darwin',
                stores: [
                    {
                        id: 38,
                        storeName: 'DARWIN CITY',
                        address: '130 Smith Street',
                        suburb: 'DARWIN',
                        state: 'NT',
                        postcode: '0800',
                        phone: '08 7923 2720'
                    },
                    {
                        id: 39,
                        storeName: 'MILLNER',
                        address: 'Shop 2 Millner Village Plaza 348 Bagot Road',
                        suburb: 'MILLNER',
                        state: 'NT',
                        postcode: '0810',
                        phone: '08 8997 2520'
                    }]
            },

        ]
    },
    
    
   {
        stateId: 8,
        states: 'TASMANIA',
        cities: [
            {
                cityID: 20,
                city: 'Launceston',
                stores: [
                    {
                        id: 40,
                        storeName: 'LAUNCESTON',
                        address: '76B Wellington Street',
                        suburb: 'LAUNCESTON',
                        state: 'TAS',
                        postcode: '7250',
                        phone: '03 6324 8120'
                    },
                    {
                        id: 41,
                        storeName: 'KINGS MEADOWS',
                        address: 'Shop 1B 89-93 Hobart Road',
                        suburb: 'KINGS MEADOWS',
                        state: 'TAS',
                        postcode: '7249',
                        phone: '03 6325 4820'
                    }]
            },
            {
                cityID: 21,
                city: 'Hobart',
                stores: [
                    {
                        id: 42,
                        storeName: 'HOBART',
                        address: '147 Macquarie Street',
                        suburb: 'HOBART',
                        state: 'TAS',
                        postcode: '7000',
                        phone: '03 6212 7920'
                    }]
            },

        ]
    },
]

export default STORE_DATA;