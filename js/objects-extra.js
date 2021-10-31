/*
 * Title: JS Objects Practice
 * Author: Ryan Orsinger
 * Topics: JS Objects, arrays, writing methods, iteration
 */

let profiles = [
    {
        "_id": "54e23c3e46ab53a440b580e8",
        "index": 0,
        "guid": "9962b468-ef3e-4993-b677-617469bc3008",
        "isActive": false,
        "balance": "$2,097.02",
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "eyeColor": "blue",
        "name": "Hebert Estes",
        "gender": "male",
        "company": "ANDRYX",
        "email": "hebertestes@andryx.com",
        "phone": "+1 (866) 456-2268",
        "address": "121 Emmons Avenue, Klondike, Kentucky, 5975",
        "about": "Sit cillum deserunt irure laboris tempor fugiat laboris. Amet commodo amet est incididunt. Dolore qui fugiat cillum pariatur dolore excepteur elit ipsum.\r\n",
        "registered": "2014-11-10T01:44:03 +06:00",
        "latitude": -80.157843,
        "longitude": 161.93016,
        "tags": [
            "sit",
            "occaecat",
            "non",
            "ea",
            "sit",
            "laboris",
            "exercitation"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Tanisha Leonard"
            },
            {
                "id": 1,
                "name": "Dennis Wilson"
            },
            {
                "id": 2,
                "name": "Lupe Howe"
            }
        ],
        "greeting": "Hello, Hebert Estes! You have 4 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "54e23c3ef5cc0d250968c212",
        "index": 1,
        "guid": "905f849d-49bf-4a57-b4f3-5d6e4bf1b04c",
        "isActive": false,
        "balance": "$3,654.02",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "eyeColor": "green",
        "name": "Allison Wynn",
        "gender": "male",
        "company": "PHARMACON",
        "email": "allisonwynn@pharmacon.com",
        "phone": "+1 (926) 525-3131",
        "address": "724 Brevoort Place, Lodoga, Indiana, 3880",
        "about": "Esse quis cillum sunt occaecat ad et eu incididunt aliquip dolor. Adipisicing labore magna anim cillum nisi. Elit mollit consequat velit nulla cillum excepteur elit ullamco deserunt. Anim aliquip Lorem excepteur ad veniam et labore in qui ullamco. Occaecat sit do incididunt voluptate id magna ea amet.\r\n",
        "registered": "2014-06-10T13:41:26 +05:00",
        "latitude": 55.737207,
        "longitude": -167.177561,
        "tags": [
            "enim",
            "officia",
            "laboris",
            "irure",
            "veniam",
            "occaecat",
            "pariatur"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Curry Cox"
            },
            {
                "id": 1,
                "name": "Alma Dale"
            },
            {
                "id": 2,
                "name": "Barbara Mayo"
            }
        ],
        "greeting": "Hello, Allison Wynn! You have 19 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "54e23c3e09cc6875638cd36b",
        "index": 2,
        "guid": "1b042d48-9cfa-4db5-8b60-4104165591c3",
        "isActive": true,
        "balance": "$1,536.02",
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "eyeColor": "brown",
        "name": "Jacobs Floyd",
        "gender": "male",
        "company": "QUONK",
        "email": "jacobsfloyd@quonk.com",
        "phone": "+1 (853) 537-3315",
        "address": "941 Cox Place, Bluffview, Georgia, 5882",
        "about": "Deserunt adipisicing proident exercitation cillum anim consectetur labore exercitation. Commodo reprehenderit laborum enim exercitation. Ullamco nulla culpa aliqua nisi fugiat consectetur deserunt nostrud in eu.\r\n",
        "registered": "2014-07-30T03:17:32 +05:00",
        "latitude": 30.215667,
        "longitude": 68.831905,
        "tags": [
            "est",
            "aute",
            "laborum",
            "sint",
            "anim",
            "sit",
            "consectetur"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Robles Chan"
            },
            {
                "id": 1,
                "name": "Whitfield Strickland"
            },
            {
                "id": 2,
                "name": "Lina Melton"
            }
        ],
        "greeting": "Hello, Jacobs Floyd! You have 5 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "54e23c3e54e4094147a3b1da",
        "index": 3,
        "guid": "69eb3454-8acc-46f1-a636-c6df00dfb542",
        "isActive": false,
        "balance": "$3,919.64",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "eyeColor": "green",
        "name": "Fay Hammond",
        "gender": "female",
        "company": "INRT",
        "email": "fayhammond@inrt.com",
        "phone": "+1 (922) 429-2592",
        "address": "518 Randolph Street, Whitestone, Arizona, 8189",
        "about": "Aliqua sunt exercitation quis cupidatat fugiat nulla laboris occaecat ut reprehenderit qui incididunt. Amet excepteur qui amet mollit sint enim velit est dolor eu. Velit labore ea aute ipsum consequat culpa cupidatat excepteur aliqua. Sit commodo id est deserunt commodo. Labore sit deserunt enim in dolore incididunt. Officia qui est veniam cillum consequat minim duis Lorem esse magna culpa cupidatat cupidatat enim. Amet eiusmod elit qui reprehenderit commodo quis.\r\n",
        "registered": "2015-01-30T08:05:38 +06:00",
        "latitude": 33.825844,
        "longitude": -65.969538,
        "tags": [
            "aliqua",
            "esse",
            "sint",
            "pariatur",
            "commodo",
            "do",
            "anim"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Dudley Booker"
            },
            {
                "id": 1,
                "name": "Esmeralda Tyler"
            },
            {
                "id": 2,
                "name": "Rosa Hampton"
            }
        ],
        "greeting": "Hello, Fay Hammond! You have 10 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "54e23c3e177caf5567ba87ac",
        "index": 4,
        "guid": "97962c85-7700-4ffa-a01e-2fcbc147fd81",
        "isActive": false,
        "balance": "$3,681.39",
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "eyeColor": "green",
        "name": "Chasity Marsh",
        "gender": "female",
        "company": "WAZZU",
        "email": "chasitymarsh@wazzu.com",
        "phone": "+1 (976) 425-2362",
        "address": "604 Just Court, Eastvale, Federated States Of Micronesia, 8644",
        "about": "Irure excepteur consequat esse qui tempor deserunt nulla fugiat. Ut excepteur do veniam dolore dolor proident sunt voluptate ad ipsum nisi. Lorem proident deserunt Lorem cupidatat dolor nulla qui id aliqua. Et nulla laborum deserunt tempor ad culpa. Ullamco occaecat adipisicing dolore laborum laborum duis aliqua nisi irure ex. Incididunt tempor Lorem quis dolore.\r\n",
        "registered": "2014-07-31T06:03:19 +05:00",
        "latitude": -31.660978,
        "longitude": 37.559095,
        "tags": [
            "aliquip",
            "duis",
            "irure",
            "amet",
            "aliquip",
            "dolore",
            "esse"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Kristina Glover"
            },
            {
                "id": 1,
                "name": "Ora Christian"
            },
            {
                "id": 2,
                "name": "Jacklyn Joseph"
            }
        ],
        "greeting": "Hello, Chasity Marsh! You have 9 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "54e23c3eaffbb506aa15ec1c",
        "index": 5,
        "guid": "fc3e04d1-44c2-449e-891a-d4f8053d14a4",
        "isActive": true,
        "balance": "$1,694.42",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "eyeColor": "brown",
        "name": "Camacho Cortez",
        "gender": "male",
        "company": "EARTHWAX",
        "email": "camachocortez@earthwax.com",
        "phone": "+1 (869) 528-2019",
        "address": "101 Haring Street, Nicut, Louisiana, 1473",
        "about": "Qui ad commodo elit voluptate cupidatat exercitation amet ea laborum sunt aliquip nisi irure. Veniam voluptate eiusmod sint aliquip ea. Voluptate voluptate Lorem nulla laborum eiusmod occaecat et nostrud sint in cillum reprehenderit magna nulla. Lorem id fugiat laborum qui mollit amet. Culpa officia ipsum nisi culpa in. Fugiat quis eu cupidatat non culpa in ea velit pariatur non in excepteur.\r\n",
        "registered": "2014-03-17T12:04:00 +05:00",
        "latitude": 74.434627,
        "longitude": 69.527088,
        "tags": [
            "et",
            "sit",
            "in",
            "id",
            "ullamco",
            "elit",
            "laborum"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Sexton Tillman"
            },
            {
                "id": 1,
                "name": "Boone Steele"
            },
            {
                "id": 2,
                "name": "Elvia Ward"
            }
        ],
        "greeting": "Hello, Camacho Cortez! You have 19 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "54e23c3e0fd8074c2ca52667",
        "index": 6,
        "guid": "af8d9a03-fde9-4039-b20c-c4708d4cfc3c",
        "isActive": false,
        "balance": "$1,214.10",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "green",
        "name": "Avery Flynn",
        "gender": "male",
        "company": "TERSANKI",
        "email": "averyflynn@tersanki.com",
        "phone": "+1 (966) 404-2471",
        "address": "569 Oakland Place, Beyerville, Puerto Rico, 2395",
        "about": "Minim consequat anim ad et tempor et pariatur cillum ut. Ea Lorem consectetur sunt aliquip ea minim minim id dolore incididunt qui magna. Magna velit labore dolore voluptate ut aliquip esse qui est ipsum cupidatat duis enim. Sunt esse eiusmod cupidatat duis quis sunt anim dolore adipisicing enim dolore aliqua mollit. Commodo sit ad eiusmod reprehenderit.\r\n",
        "registered": "2014-04-13T10:25:03 +05:00",
        "latitude": -89.879409,
        "longitude": 143.441709,
        "tags": [
            "quis",
            "esse",
            "Lorem",
            "minim",
            "nostrud",
            "voluptate",
            "laborum"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Ball Henson"
            },
            {
                "id": 1,
                "name": "Dalton Mccoy"
            },
            {
                "id": 2,
                "name": "Carolina Sharp"
            }
        ],
        "greeting": "Hello, Avery Flynn! You have 13 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "54e23c3eb112d96e4204914d",
        "index": 7,
        "guid": "95f1c020-f9eb-4a29-b236-e766759d89d0",
        "isActive": false,
        "balance": "$2,930.31",
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "eyeColor": "blue",
        "name": "Michael Cash",
        "gender": "male",
        "company": "ORBIXTAR",
        "email": "michaelcash@orbixtar.com",
        "phone": "+1 (996) 439-3660",
        "address": "808 Duryea Court, Downsville, Northern Mariana Islands, 2154",
        "about": "Minim proident minim consectetur nostrud dolor reprehenderit. Ea est proident non do cillum eu est dolor Lorem id. Tempor enim incididunt consequat voluptate nulla ipsum voluptate id. Incididunt enim laboris nostrud in exercitation est culpa nulla velit.\r\n",
        "registered": "2014-05-24T17:56:54 +05:00",
        "latitude": -86.621367,
        "longitude": -4.06197,
        "tags": [
            "eu",
            "sit",
            "dolore",
            "culpa",
            "Lorem",
            "in",
            "esse"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Rodgers Nolan"
            },
            {
                "id": 1,
                "name": "Jewel Marks"
            },
            {
                "id": 2,
                "name": "Sue Mejia"
            }
        ],
        "greeting": "Hello, Michael Cash! You have 17 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "54e23c3ef30f14d0e5afddf3",
        "index": 8,
        "guid": "bde2d56f-2488-40d0-a7d2-21019ee8a18b",
        "isActive": false,
        "balance": "$1,944.15",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "green",
        "name": "Madeleine Bray",
        "gender": "female",
        "company": "KIDSTOCK",
        "email": "madeleinebray@kidstock.com",
        "phone": "+1 (820) 541-2969",
        "address": "684 Stratford Road, Rosine, District Of Columbia, 7177",
        "about": "Ullamco ea esse ullamco commodo quis amet ut ad. Sint eiusmod ullamco minim nostrud amet in ex adipisicing velit cillum Lorem enim nostrud. Deserunt esse incididunt eiusmod commodo ullamco id pariatur tempor duis laboris Lorem. Laboris magna Lorem quis laborum ullamco. Dolor minim magna ut occaecat in consequat consequat in commodo pariatur voluptate pariatur dolore. Quis exercitation cillum labore cillum laborum. Dolore est reprehenderit anim reprehenderit consectetur sit quis ea ut veniam.\r\n",
        "registered": "2014-08-11T08:54:06 +05:00",
        "latitude": 45.118798,
        "longitude": -7.698707,
        "tags": [
            "id",
            "magna",
            "excepteur",
            "excepteur",
            "excepteur",
            "duis",
            "excepteur"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Herrera Doyle"
            },
            {
                "id": 1,
                "name": "Berger Fisher"
            },
            {
                "id": 2,
                "name": "Chang Coffey"
            }
        ],
        "greeting": "Hello, Madeleine Bray! You have 2 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "54e23c3ebd80e9c26b057fa3",
        "index": 9,
        "guid": "75991ca5-05ed-499e-bbb5-f057f86d05d7",
        "isActive": true,
        "balance": "$2,839.22",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "eyeColor": "blue",
        "name": "Corine French",
        "gender": "female",
        "company": "INTRAWEAR",
        "email": "corinefrench@intrawear.com",
        "phone": "+1 (987) 573-3164",
        "address": "964 Clara Street, Snyderville, Oklahoma, 3627",
        "about": "Sint cillum laborum labore duis fugiat voluptate adipisicing. Ad culpa et et ea incididunt nulla excepteur officia. Cillum veniam amet ipsum reprehenderit do eiusmod aliqua aute nisi Lorem consectetur esse in incididunt.\r\n",
        "registered": "2014-06-25T20:17:13 +05:00",
        "latitude": -37.637422,
        "longitude": 154.195523,
        "tags": [
            "laboris",
            "in",
            "dolore",
            "mollit",
            "velit",
            "laboris",
            "excepteur"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Greta Hill"
            },
            {
                "id": 1,
                "name": "Cline Curry"
            },
            {
                "id": 2,
                "name": "Branch Sawyer"
            }
        ],
        "greeting": "Hello, Corine French! You have 18 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "54e23c3e6d89c09f5507e7dd",
        "index": 10,
        "guid": "87cffc18-3acf-40c5-8708-1bb93f1b68de",
        "isActive": true,
        "balance": "$2,467.31",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "blue",
        "name": "Trudy Cummings",
        "gender": "female",
        "company": "SPLINX",
        "email": "trudycummings@splinx.com",
        "phone": "+1 (925) 403-2797",
        "address": "558 Charles Place, Tedrow, California, 9832",
        "about": "Non id adipisicing deserunt non magna ex adipisicing sint esse sint. Laborum ea nostrud Lorem voluptate quis proident eu nisi exercitation in. Consequat occaecat proident officia anim.\r\n",
        "registered": "2014-03-13T17:54:31 +05:00",
        "latitude": -36.185131,
        "longitude": -37.774906,
        "tags": [
            "aute",
            "occaecat",
            "ea",
            "pariatur",
            "consectetur",
            "magna",
            "ea"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Amber Gates"
            },
            {
                "id": 1,
                "name": "Barron Walsh"
            },
            {
                "id": 2,
                "name": "Nell Bolton"
            }
        ],
        "greeting": "Hello, Trudy Cummings! You have 2 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "54e23c3e4192cf53edd67c99",
        "index": 11,
        "guid": "5a5496f1-a027-4c21-85da-c399234cd9a5",
        "isActive": true,
        "balance": "$3,304.99",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "eyeColor": "brown",
        "name": "Peggy Mayer",
        "gender": "female",
        "company": "ACCUPRINT",
        "email": "peggymayer@accuprint.com",
        "phone": "+1 (854) 428-2585",
        "address": "830 Willmohr Street, Crenshaw, Missouri, 6032",
        "about": "Aliqua sit enim cillum aliquip ad proident excepteur in consectetur eiusmod. Ipsum sint cillum veniam eiusmod aute sunt et do est tempor. Lorem elit dolor dolore incididunt cillum. Enim occaecat minim sunt cillum est velit cillum deserunt tempor eu.\r\n",
        "registered": "2014-09-14T07:06:49 +05:00",
        "latitude": 48.323912,
        "longitude": 22.184821,
        "tags": [
            "commodo",
            "esse",
            "ad",
            "ullamco",
            "ea",
            "sint",
            "ipsum"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Hopkins Mccall"
            },
            {
                "id": 1,
                "name": "Nielsen Weeks"
            },
            {
                "id": 2,
                "name": "Dale Knowles"
            }
        ],
        "greeting": "Hello, Peggy Mayer! You have 13 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "54e23c3eedcc65f0ec3a5496",
        "index": 12,
        "guid": "759a21c4-5f9c-4189-9c50-c9d8a9f31037",
        "isActive": false,
        "balance": "$3,844.42",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "brown",
        "name": "Chan Hurley",
        "gender": "male",
        "company": "ZEAM",
        "email": "chanhurley@zeam.com",
        "phone": "+1 (917) 475-3705",
        "address": "915 Channel Avenue, Clinton, North Dakota, 6244",
        "about": "Voluptate exercitation ut anim ex adipisicing ut do officia incididunt fugiat cupidatat aliqua. Cillum ullamco irure dolore est consectetur non consequat. Nulla ullamco eu irure qui dolor magna ipsum id in enim voluptate aute. Officia aliqua dolore ut reprehenderit Lorem cillum. Cillum reprehenderit eu cillum aliqua sint eiusmod cupidatat culpa elit in. Fugiat voluptate reprehenderit amet anim qui nisi velit aliqua proident anim.\r\n",
        "registered": "2014-03-01T14:51:23 +06:00",
        "latitude": 85.901051,
        "longitude": -74.986179,
        "tags": [
            "minim",
            "veniam",
            "sit",
            "aute",
            "irure",
            "non",
            "eiusmod"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Reese Grant"
            },
            {
                "id": 1,
                "name": "Jenna Kinney"
            },
            {
                "id": 2,
                "name": "Rhea May"
            }
        ],
        "greeting": "Hello, Chan Hurley! You have 7 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "54e23c3eb813e66c6d33aa82",
        "index": 13,
        "guid": "6fd14a8e-3158-48eb-a7e1-93fe57b74746",
        "isActive": true,
        "balance": "$3,594.99",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "blue",
        "name": "Diaz Pena",
        "gender": "male",
        "company": "SUREPLEX",
        "email": "diazpena@sureplex.com",
        "phone": "+1 (986) 511-3050",
        "address": "184 Kingsway Place, Grantville, Michigan, 2421",
        "about": "Enim elit amet officia consectetur do Lorem reprehenderit cupidatat exercitation velit. Ex tempor esse consectetur dolore aute et. Cupidatat duis nulla in incididunt nulla ullamco non magna officia commodo anim. Labore quis ullamco est deserunt excepteur duis nostrud deserunt cillum proident. Non eiusmod consectetur pariatur deserunt irure quis exercitation ex incididunt quis dolore pariatur sunt irure. Eu do fugiat laboris tempor culpa.\r\n",
        "registered": "2014-04-19T20:43:12 +05:00",
        "latitude": 6.606991,
        "longitude": 81.593748,
        "tags": [
            "excepteur",
            "elit",
            "ullamco",
            "excepteur",
            "ad",
            "quis",
            "dolore"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Mcmillan Knox"
            },
            {
                "id": 1,
                "name": "Flossie Dixon"
            },
            {
                "id": 2,
                "name": "Sears Carson"
            }
        ],
        "greeting": "Hello, Diaz Pena! You have 13 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "54e23c3e502a2f526b689c3e",
        "index": 14,
        "guid": "459cc82d-7878-42cb-b9c6-073506380036",
        "isActive": true,
        "balance": "$2,940.24",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "brown",
        "name": "Heath Castaneda",
        "gender": "male",
        "company": "NETPLODE",
        "email": "heathcastaneda@netplode.com",
        "phone": "+1 (944) 478-3741",
        "address": "278 Village Road, Sunnyside, Massachusetts, 7496",
        "about": "Consectetur mollit cupidatat ex consectetur eiusmod ut. Cupidatat anim cupidatat cupidatat minim ipsum et quis amet proident pariatur. Do consectetur fugiat quis nisi non. Ut eu consequat consequat in ullamco eiusmod quis cillum sunt dolore anim. Non irure aliqua aliqua enim elit labore consequat.\r\n",
        "registered": "2014-07-30T21:38:43 +05:00",
        "latitude": 69.928876,
        "longitude": 33.649878,
        "tags": [
            "elit",
            "commodo",
            "ut",
            "ullamco",
            "ullamco",
            "velit",
            "ullamco"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Dora Mack"
            },
            {
                "id": 1,
                "name": "Christensen Camacho"
            },
            {
                "id": 2,
                "name": "Castro Kelly"
            }
        ],
        "greeting": "Hello, Heath Castaneda! You have 12 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "54e23c3e69d22e49c7fe62de",
        "index": 15,
        "guid": "33d2bbe5-d6f7-4844-88fc-b9f6af63b373",
        "isActive": false,
        "balance": "$3,062.41",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "brown",
        "name": "Greer Blankenship",
        "gender": "male",
        "company": "QUALITERN",
        "email": "greerblankenship@qualitern.com",
        "phone": "+1 (957) 482-3874",
        "address": "557 Ingraham Street, Brambleton, South Dakota, 8482",
        "about": "Non in excepteur nostrud consectetur. Qui non consectetur officia incididunt elit laboris exercitation exercitation est minim veniam ullamco dolore. Eu sit aute culpa ex sunt amet. Ut et amet Lorem sunt anim pariatur.\r\n",
        "registered": "2014-03-30T21:39:41 +05:00",
        "latitude": -71.093388,
        "longitude": 65.740255,
        "tags": [
            "enim",
            "eiusmod",
            "Lorem",
            "reprehenderit",
            "nisi",
            "anim",
            "sunt"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Woods Norman"
            },
            {
                "id": 1,
                "name": "Marilyn Haney"
            },
            {
                "id": 2,
                "name": "Webster Nielsen"
            }
        ],
        "greeting": "Hello, Greer Blankenship! You have 7 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "54e23c3e42676228c442a669",
        "index": 16,
        "guid": "e44604f0-c7a8-4b89-bda3-0f4710ebe28a",
        "isActive": false,
        "balance": "$3,067.82",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "green",
        "name": "Coffey Hayes",
        "gender": "male",
        "company": "INQUALA",
        "email": "coffeyhayes@inquala.com",
        "phone": "+1 (880) 451-3490",
        "address": "490 Durland Place, Craig, Tennessee, 5034",
        "about": "Est esse irure Lorem ullamco veniam fugiat laborum veniam excepteur. Ad enim pariatur nostrud excepteur et nostrud velit dolore ex enim cillum in aliquip fugiat. Nulla laborum exercitation irure magna elit laborum magna ad excepteur. Cillum pariatur Lorem eiusmod ad dolore eiusmod veniam do minim laborum in dolor. Reprehenderit elit ad id voluptate Lorem Lorem dolor cupidatat excepteur. Proident minim ea aute nulla.\r\n",
        "registered": "2014-04-01T23:04:39 +05:00",
        "latitude": -30.662644,
        "longitude": 59.806684,
        "tags": [
            "duis",
            "est",
            "in",
            "officia",
            "nostrud",
            "occaecat",
            "mollit"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Suarez Perry"
            },
            {
                "id": 1,
                "name": "Marlene Sheppard"
            },
            {
                "id": 2,
                "name": "Cohen Yates"
            }
        ],
        "greeting": "Hello, Coffey Hayes! You have 19 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "54e23c3e4ac5969958013235",
        "index": 17,
        "guid": "fa7e26df-d239-41e8-9aa9-be5e808b6f89",
        "isActive": true,
        "balance": "$2,646.76",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "eyeColor": "brown",
        "name": "Leanne Hurst",
        "gender": "female",
        "company": "ACCIDENCY",
        "email": "leannehurst@accidency.com",
        "phone": "+1 (820) 420-3317",
        "address": "196 Columbus Place, Carbonville, New Jersey, 7513",
        "about": "Dolor occaecat dolore ut tempor. Veniam elit anim duis do pariatur. Qui excepteur nisi eiusmod mollit laboris fugiat commodo ipsum reprehenderit labore cillum. Aliquip laborum commodo nisi cupidatat labore nostrud exercitation adipisicing mollit eu magna proident ex Lorem. Nostrud magna sint sint consequat consectetur et sint.\r\n",
        "registered": "2014-11-10T01:25:55 +06:00",
        "latitude": 16.671695,
        "longitude": 139.707959,
        "tags": [
            "culpa",
            "deserunt",
            "tempor",
            "quis",
            "reprehenderit",
            "incididunt",
            "est"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Farley Frank"
            },
            {
                "id": 1,
                "name": "Pruitt Frye"
            },
            {
                "id": 2,
                "name": "Simpson Cardenas"
            }
        ],
        "greeting": "Hello, Leanne Hurst! You have 5 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "54e23c3ed945981ba2580614",
        "index": 18,
        "guid": "e608dc5c-fee4-4086-971b-3ebd37bfa137",
        "isActive": true,
        "balance": "$2,227.79",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "eyeColor": "brown",
        "name": "Ewing Larson",
        "gender": "male",
        "company": "ESCENTA",
        "email": "ewinglarson@escenta.com",
        "phone": "+1 (943) 439-3760",
        "address": "136 Beard Street, Wattsville, New Hampshire, 2803",
        "about": "Veniam eiusmod exercitation culpa mollit reprehenderit ullamco voluptate voluptate irure qui duis anim et. Laborum dolor quis do voluptate. In pariatur dolor id mollit et enim. Qui ex qui in cillum irure enim non reprehenderit irure et excepteur aliquip eu eu.\r\n",
        "registered": "2014-07-21T19:17:41 +05:00",
        "latitude": 15.903555,
        "longitude": -159.721203,
        "tags": [
            "Lorem",
            "magna",
            "dolor",
            "aliquip",
            "reprehenderit",
            "eu",
            "voluptate"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Suzette Huffman"
            },
            {
                "id": 1,
                "name": "Paige Santiago"
            },
            {
                "id": 2,
                "name": "Dollie Fernandez"
            }
        ],
        "greeting": "Hello, Ewing Larson! You have 16 unread messages.",
        "favoriteFruit": "strawberry"
    }
]

// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}
function makeCar(make, model) {
    return {
        make: make,
        model: model,
    }
}
console.log(makeCar("vw", "beetle"));
// Exercise 2. Use the following data to create an object named salesReport.
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units
//
// Monthly Sales Report
// Date: 03-17-2015
// Office: Codeup
// ===================================================
// Employee Number, First Name, Last Name, Sales Units
// ***************************************************
// 1, Jane, Janeway, 3
// 3, Tricia, Triciason, 5
// 4, Jeannette, Jeanson, 4
// 5, Charles Emmerson III, Winchester, 2
// 6, Chet, Chedderson, 8
// 7, Chaiam, Chaiamson, 12
// 8, Dale, Dalesinger, 1
// 9, Zig, Ziglar, 50
// 10, Henry, Kissinger, 1
// 11, Arthur Herbert, Fonzarelli, 23
// 12, Betty, Boop, 67
let salesReport = {
    title: 'Monthly Sales Report',
    date: '10-21-2021',
    office: 'Codeup',
    employees: [],
    getEmployeeCount: function () {return this.employees.length;},
    getTotalNumberOfSales: function () {
        let totalUnitSales = 0;
        this.employees.forEach((employee) => {
            totalUnitSales += employee.salesunits;
        });
        return totalUnitSales;
    },
    getAverageSalesPerEmployee: function () {
        return this.getTotalNumberOfSales() / this.getEmployeeCount();
    }
};
addEmployee = function(num, first, last, units) {
    return {
        employeenumber: num,
        firstname: first,
        lastname: last,
        salesunits: units
    };
}
salesReport.employees.push(addEmployee(1, 'Jane', 'Janeway', 3));
salesReport.employees.push(addEmployee(4, 'Jeannette', 'Jeanson', 4));
salesReport.employees.push(addEmployee(5, 'Charles Emmerson III', 'Winchester', 2));
salesReport.employees.push(addEmployee(6, 'Chet', 'Chedderson', 8));
salesReport.employees.push(addEmployee(7, 'Chaiam', 'Chaiamson', 12));
salesReport.employees.push(addEmployee(8, 'Dale', 'Dalesinger', 1));
salesReport.employees.push(addEmployee(9, 'Zig', 'Ziglar', 50));
salesReport.employees.push(addEmployee(10, 'Henry', 'Kissenger', 1));
salesReport.employees.push(addEmployee(11, 'Arthur Herbert', 'Fonzarelli', 23));
salesReport.employees.push(addEmployee(12, 'Betty', 'Boop', 67));

console.log(salesReport.getEmployeeCount());
console.log(salesReport.getTotalNumberOfSales());
console.log(salesReport.getAverageSalesPerEmployee());

// Exercise 3. On the salesReport object you made, add the following methods.
// getEmployeeCount() should return the total number of employees
// getTotalNumberOfSales() should return the total number of units sold
// getAverageSalesPerEmployee() should return the average units sold per employee

// Exercise 4. Go to https://gist.githubusercontent.com/ryanorsinger/f77e5ec94dbe14e21771/raw/d4a1f916723ca69ac99fdcab48746c6682bf4530/profiles.json
// then copy the JSON and assign it to a variable named profiles.

// Exercise 5. Create an object named profileReport and add the following methods that use the "profiles" JSON data.
//  getProfileCount() should return the total number of profiles
function getProfileCount(arr) {
    return arr.length;
}
let numUsers = getProfileCount(profiles)
console.log(numUsers);
//  getActiveCount() should return the number of active profiles
function getActiveCount(arr) {
    let active = 0;
    arr.forEach(profile => {
        if (profile.isActive) active++;
    });
    return active;
}
console.log(getActiveCount(profiles));
//  getInactiveCount() should return the number of inactive profiles
function getInactiveCount(arr) {
    let inactive = 0;
    arr.forEach(profile => {
        if (profile.isActive === false) inactive++;
    });
    return inactive;
}
console.log(getInactiveCount(profiles));
//  sumOfAllBalances() should return sum of the balance of all profiles
function sumOfAllBalances(arr) {
    let sum = 0;
    arr.forEach(profile => {
        sum += parseFloat(profile.balance.replace(/\$|,/g, ''));
    });
    return sum;
}
console.log(`$`, sumOfAllBalances(profiles).toFixed(2));
//  getAverageBalance() should return the average balance per users
function getAverageBalance(arr) {
    return sumOfAllBalances(arr) / getProfileCount(arr);
}
console.log(`$`, getAverageBalance(profiles).toFixed(2));
//  getLowestBalance() should return the customer name with the lowest balance
function getLowestBalance(arr) {
    let low = Number.MAX_SAFE_INTEGER;
    arr.forEach(profile => {
        if (low > profile.balance.replace(/\$|,/g, '')) {
            low = profile.balance.replace(/\$|,/g, '');
        }

    });
    return parseFloat(low);
}
console.log(`$`, getLowestBalance(profiles).toFixed(2));
//  getHighestBalance() should return the customer name with the highest balance
function getHighestBalance(arr) {
    let hi = Number.MIN_SAFE_INTEGER;
    arr.forEach(profile => {
        if (hi < profile.balance.replace(/\$|,/g, '')) {
            hi = profile.balance.replace(/\$|,/g, '');
        }
    });
    return parseFloat(hi);
}
console.log(`$`, getHighestBalance(profiles).toFixed(2));
//  getMostFavoriteFruit() should return the most common fruit
function getMostOrLeastFrequent(arr, most) {
    // https://javascript.plainenglish.io/how-to-find-the-most-frequent-element-in-an-array-in-javascript-c85119dc78d2
    // this function was found here and edited by me to be generalized and work with least common occurance
    // I know how useful hashmaps are but my hashmap game is still weak. learned a lot with this though!
    const hashmap = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
    if (most) return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b);
    else return Object.keys(hashmap).reduce((a, b) => hashmap[a] < hashmap[b] ? a : b);
}
function getFruitPreferences (arr) {
    let fruits = [];
    arr.forEach(profile => {
        fruits.push(profile.favoriteFruit);
    });
    return fruits;
}
const fruits = getFruitPreferences(profiles);

function getMostFavoriteFruit(arr) {
    return getMostOrLeastFrequent(fruits, 1);
}
console.log(getMostFavoriteFruit(profiles));
//  getLeastFavoriteFruit() should return the least favorite fruit
function getLeastFavoriteFruit(arr) {
    return getMostOrLeastFrequent(fruits, 0);
}
console.log(getLeastFavoriteFruit(profiles));

//  getTotalNumberOfUnreadMessages() should return the number of unread messages for all users
function getTotalNumberOfUnreadMessages(arr) {
    let messageNum = 0;
    arr.forEach(profile => {
        // jesus i have been slightly avoiding writing my own regex before this but it really ain't so bad after all
        messageNum += parseFloat(profile.greeting.match(/\b\d+\b/));
    });
    return messageNum;
}
let unreadMessagesTotal = getTotalNumberOfUnreadMessages(profiles)
console.log(unreadMessagesTotal);

//  getAverageNumberOfUnreadMessages() should return the average number of unread mesages per user.
function getAverageNumberOfUnreadMessages(totalMessages) {
    return totalMessages / numUsers;
}
console.log(getAverageNumberOfUnreadMessages(unreadMessagesTotal));
//  getAverageAge() should return the average age of all users
function getAverageAge(arr) {
    let total = 0;
    arr.forEach(profile => {
        total += profile.age;
    });
    return total / numUsers;
}
console.log(getAverageAge(profiles));
//  getGenderCounts() should return gender count of users as an object: example {"m": 23, "f", 32}
function getGenderCounts(arr) {
    genders = { f: 0, m: 0, n:0 }; // gotta fight for my enbies out there!
    arr.forEach(profile => {
        switch(profile.gender) {
            case 'female':
                genders.f++;
                break;
            case 'male':
                genders.m++;
                break;
            case 'other':
                genders.n++;
                break;
        }
    });
    return genders;
}

console.log(getGenderCounts(profiles));
//  getAllCompanyNames() should return an array of all companies represented by the users
function getAllCompanyNames(arr) {
    companies = new Set();
    arr.forEach(profile => {
        companies.add(profile.company);
    });
    return Array.from(companies);
}
// I want to work at EARTHWAX so bad I can't stand it that's such a great name
console.log(getAllCompanyNames(profiles));
//  getMostCommonEyeColor() should return the most commonly occuring eye-color.
function getEyeColors(arr) {
    let eyeColors = [];
    arr.forEach(profile => {
        eyeColors.push(profile.eyeColor);
    });
    return eyeColors;
}
const eyeColors = getEyeColors(profiles);

function getMostCommonEyeColor(arr) {
    return getMostOrLeastFrequent(arr, 1);
}

console.log(getMostCommonEyeColor(eyeColors));
//  getBalancesForActiveAndNonActive() should return the balance of all non-active accounts vs. the balance of all active accounts?
function getBalancesForActiveAndNonActive(arr) {
    let balances = {activeBalances: 0, inactiveBalances: 0};
    arr.forEach(profile => {
        if (profile.isActive) balances.activeBalances += parseFloat(profile.balance.replace(/\$|,/g, ''));
        else balances.inactiveBalances += parseFloat(profile.balance.replace(/\$|,/g, ''));
    });
    return balances;
}
console.log(getBalancesForActiveAndNonActive(profiles));
//     this last method should return an object that looks like {"active-balances": 23000, "inactive-balances": 4000} w/ different numbers.


// Exercise 6. Practice with assignment by reference
// create a variable named person1 with a name property. Assign it a name property.
// Now create a variable named person2 and assign person1 to it.
// Then reassign the name property on person2 with person2.name = "Bob";
// console.log the name property on person 1.
// Why do you think changing person2 altered person1?
// The term for this behavior is assignment by reference.
let person1 = {
    name: "James"
};
console.log('person 1:', person1);
let person2 = person1;
console.log('person 2:', person2);
person2.name = "Bob";
console.log('person2.name = "Bob"');
console.log('person 1:', person1);
console.log('person 2:', person2);
// assignment by reference is when an assigment is preformed that instead of duplicating the original object
// actually it points the new variable towards the original's location in memory. She's a tricky devil but
// knowlege is power and knowing when and when not to assign by reference is a great tool.

// Exercise 7. More practice with assignment by reference
// Add the following HTML to your index.html page in this project.
// <input type="text" id="input" name="input">
// now, create a variable named input and assign it document.getElementById("input").
// now run input.value = "Hello" from the JS console. Did you see any HTML change?
// Create a second variable named inputElement.
// var inputElement = document.getElementById("input");
// now, run inputElement.value = "I am altering an object by altering its properties" in your JS console.
// See how both the "input" and "textInput" varialbes are referencing the same underlying HTML element?
// This behavior is another example of "assignment by reference"

let input = document.getElementById("input");
let inputElement = document.getElementById("input");

/* OBJECTS BONUSES
Create a dog object

The dog object should have properties for:

breed (string),
weightInPounds (number),
age (number),
color (string),
sterilized (boolean),
shotRecords (array of objects with properties for date and typeOfShot)
The dog object should have methods to:

bark() - will console.log "Woof!"
getOlder() - will increase age by 1
fix() - will set sterile to true if dog sterilized property is false
vaccinate() - takes in an argument for the name of the shot and adds a new
                shot with the current date to the shotRecords array
 */

let dog = {
    breed: 'collie',
    weightInPounds: 45,
    age: 4,
    color: 'black and white',
    sterilized: false,
    shotRecords: [{
        date: new Date("July 19 2019 15:22"),
        typeOfShot: 'doggie flu shot',
    }],
    bark: function () { console.log('Woof!'); },
    getOlder: function () { this.age++; },
    fix: function () { this.sterilized = true; },
    vaccinate: function (shotName) {
        this.shotRecords.push({
            date: new Date(),
            typeOfShot: shotName
        });
    }
}
console.log(dog);
dog.bark();
console.log('Dog is', dog.age, 'years old. Getting older...');
dog.getOlder();
console.log('Dog is now', dog.age, 'years old. What a big cutie!');
console.log('time to take the dog to the vet...');
dog.fix();
dog.vaccinate('anti-hairloss shot');
console.log(dog);

let books = [];
function createBook (title, authorName) {
    let author = authorName.split(' ');
    return {
        name: title.toLowerCase(),
        author: {
            first: author[0].toLowerCase(),
            last: author[1].toLowerCase(),
            name: function () { return `${this.first} ${this.last}`; }
        },
        keywords: [],
        addKeywords: function (newKeywords) { this.keywords.push(newKeywords); },
        available: true,
        dateAvailable: 'now',
        lend: function () {
            this.available = false;
            this.dateAvailable = new Date(new Date + 12096e5);
        },
        receive: function () {
            this.available = true;
            this.dateAvailable = 'now';
        }
    }
}

function showBookInfo (book, index) {

    console.log(`Book #${index + 1}`);
    console.log(`Title: ${book.name}`);
    console.log(`Author: ${book.author.name()}`);
}

function listBooks() {
    books.forEach((book, index) => {
        showBookInfo(book, index);
        console.log(`---`);
    });
}

books.push(createBook('Dune', 'Frank Herbert'));
books.push(createBook('Blindsight', 'Peter Watts'));
books.push(createBook('Three Body Problem', 'Cixin Liu'));
books.push(createBook('Imagica', 'Clive Barker'));
books.push(createBook('Weaveworld', 'Clive Barker'));
books.push(createBook('Annihilation', 'Jeff VanderMeer'));
books.push(createBook('Blood Meridian', 'Cormac Mccarthy'));
books.push(createBook('1Q84', 'Haruki Murakami'));
listBooks();

// Create an application to take in user input to build the books array of objects.
function userInputBookCreation () {
    let cont = true;
    do {
        let bookTitle = prompt("Enter a book title.");
        let bookAuthor = prompt("Enter the book's author's name.");
        books.push(createBook(bookTitle, bookAuthor));
        cont = confirm("Do you want to enter another book?");
    } while (cont);
    console.log(books);
}
//userInputBookCreation();
// Allow the user to continue adding books or to finish adding books.
// Once the books have been added, output the books array in the console.
// Allow a user to delete a book or a group of books by title or author last name.
function deleteBook() {
    let cont = true;
    do {
        let userSearch = prompt("Enter a book title or author last name to delete a book.").toLowerCase();
        console.log('searching for:', userSearch);
        for (let i = 0; i < books.length; i++) {
            if ((userSearch === books[i]['name']) || (userSearch === books[i]['author']['last'])) {
                console.log('Match found! Deleting:', books[i]);
                books.splice(i, 1);
                i--;    // we need to decrement i because the length of books will shrink by 1 and if there's another
            }           // book that matches the criteria in the very next index after this, it will be skipped otherwise D:
        }
        console.log(books);
        cont = confirm("Do you want to delete another book?");
    } while (cont);
}
// Allow a user to edit a book by index number in the books array.
function bookEditByIndex() {
    let anotherBook = false;
    listBooks();
    do {
        let userSearch = parseFloat(prompt("Enter the index number according to the printed list of the book you wish to edit."));
        console.log('Grabbing book with index of', userSearch);
        let book = books[userSearch - 1];
        let userWantsToEdit;
        do {
            userWantsToEdit = prompt(`Selected book is "${book.name}", by ${book.author.name()}. Type which value you wish to edit in the book. Valid input is: 'name', 'author first', or 'author last'.`).toLowerCase();
            bookEditValue(book, userWantsToEdit);
            userWantsToEdit = confirm("Do you want to edit another value for this same book?");
        } while (userWantsToEdit);
        showBookInfo(book, userSearch - 1);
        anotherBook = confirm("Do you want to edit another book?");
    } while (anotherBook);
}

function bookEditValue(book, key) {
    let attrib = key.split(' ');        // can take either 'name', 'author first', or 'author last'
    if (attrib.length === 1) {
       book[attrib[0]] = prompt(`Enter the new ${key} for this book.`).toLowerCase();
        console.log(`Book ${key} changed:`, book[attrib[0]]);
    } else {
        book[attrib[0]][attrib[1]] = prompt(`Enter the new ${key} name for this book.`).toLowerCase();
        console.log(`Book ${key} name changed:`, book[attrib[0]][attrib[1]]);
    }
}
/**
* Define an object called jackBox

Include properties for...

triggered - whether or not the box has been sprung (should be false by default)
intervalId - set to null
play() - once called, if triggered is false, console.log one new element in the lyrics array every second after
 the lyrics, stop the interval, set the triggered property to true, and alert POP!
windUp() - once called will stop the play() method and set triggered to false.
When running, current lyrics should also be displayed on the page.
**/
let songLyricsDisplay = document.getElementById("jackBoxSong");
const jackBox = {
    triggered: false,
    intervalID: null,
    // this function did not really need to be async but I thought it would be good practice for eventually
    // needing to write non-blocking code and dealing with promises and callbacks and all that goodness :)
    play: async function () {
        if (!this.triggered && !this.intervalID) {
            this.intervalID = setInterval(async () => {
                console.log(this.lyrics[this.lyricIndex]);
                songLyricsDisplay.textContent = this.lyrics[this.lyricIndex];
                if (this.lyricIndex < this.lyrics.length - 1) {
                    this.lyricIndex++;
                } else {
                    this.lyricIndex = 0;
                    clearInterval(this.intervalID);
                    this.intervalID = null;
                    this.triggered = true;
                    await new Promise(resolve => setTimeout(resolve, 750));
                    console.log("POP!");
                    songLyricsDisplay.textContent = "POP!!!";
                }
            }, 1000);
        }
    },
    windUp: function () {
        clearInterval(this.intervalID);
        this.intervalID = null;
        this.triggered = false;
        songLyricsDisplay.textContent = "Jack in the box is wound, hit play!"
    },
    lyrics: ["All a-...",
        "-round the ...",
        "mulberry...",
        "bush, The...",
        "monkey...",
        "chased the...",
        "wea-...",
        "-sel...",
        "The monkey...",
        "stopped to...",
        "pull up his...",
        "sock,...",
        "Pop!...",
        "goes the...",
        "wea-...",
        "-sel."],
    lyricIndex : 0
}

/**Build a Stop Watch
 Define an object called stopWatch.
 Include the following properties...
 intervalId
 count
 Include the following methods...
 start() - starts console logging an increasing count every second pause() - pauses counter reset() - stops counter and resets count to zero
 *
 * @type {{start: stopWatch.start, reset: stopWatch.reset, pause: stopWatch.pause}}
 */

const stopWatch = {
    intervalId: null,
    count: 0,
    start: function () {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
               console.log(this.count++);
            }, 1000);
        }
    },
    pause: function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            console.log("PAUSED");
        }
    },
    reset: function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.count = 0;
            console.log(this.count);
        }
    }
}

/*Write a function that takes in a sentence and returns the length of the longest word.

"I like going out to parties with friends or watching TV." => 8 */

function longestWordInSentence (sentence) {
    let longest = -1;
    sentence.split(' ').forEach((elem) => { if (elem.length > longest) longest = elem.length; });
    return longest;
}

console.log(longestWordInSentence("I like going out to parties with friends or watching TV."));;

/*
Write a function that takes three parameters: a, b, c. Return the boolean true if a^2 + b^2 = c^2, false if not.

3, 4, 5 => true
4, 5, 6 => false */
function hypotenuseCheck (a, b, c) {
    return (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2));
}

console.log(hypotenuseCheck(3, 4, 5));
console.log(hypotenuseCheck(4, 5, 6));

/*
Write a function that takes a string and returns a "title case" string
"The QUICK brown fox JuMpS ovER the LAZy dog"
The Quick Brown Fox Jumps Over The Lazy Dog"*/
function titleCase (input) {
    let words = input.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
}
console.log(titleCase("The QUICK brown fox JuMpS ovER the LAZy dog"));

/*
Write a function that returns an object with keys set to the argument passed in and
values equal to the types of the corresponding keys. Arguments will be type "number", "string", or "boolean".

// input
["hey", 1, "Jeffrey wants to goto the store", false]
// output
{
  hey: "string",
  1: "number",
  "Jeffrey wants to goto the store": "string",
  false: boolean
}
*/
function objectValuesAndKeys (input) {
    let output = {};
    for (let i = 0; i < input.length; i++) {
        output[input[i]] = typeof input[i];
    }
    return output;
}

console.log(objectValuesAndKeys(["hey", 1, "Jeffrey wants to goto the store", false]));

/*
Write a function that takes two strings as input and returns true or false depending on
whether they are anagrams(contain exactly the same letters). Only lowercase letters will be passed.

"overcast", "overacts" => true
"Jimbo", "Jason" => false
 */

function isAnagram (wordA, wordB) {
    let sortA = wordA.toLowerCase().split('').sort().join('');
    let sortB = wordB.toLowerCase().split('').sort().join('');
    return (sortA === sortB);
}

console.log(isAnagram("overcast", "overacts"));
console.log(isAnagram("Jimbo", "Jason"));