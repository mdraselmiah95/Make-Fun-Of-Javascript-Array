/**
 * @title :Contact List By Group
 */

const Contacts = [
  {
    id: 1,
    name: "Avictor",
    email: "amoyce0@netlog.com",
    phone: "+355-189-668-4793",
  },
  {
    id: 2,
    name: "Nico",
    email: "npryor1@wikispaces.com",
    phone: "+48-799-176-3246",
  },
  {
    id: 3,
    name: "Ebony",
    email: "elunam2@people.com.cn",
    phone: "+63-105-144-8231",
  },
  {
    id: 4,
    name: "Urbanus",
    email: "upolamontayne3@bravesites.com",
    phone: "+84-653-296-0435",
  },
  {
    id: 5,
    name: "Sophey",
    email: "scawthra4@soup.io",
    phone: "+963-419-931-9085",
  },
  {
    id: 6,
    name: "Martie",
    email: "mlettice5@home.pl",
    phone: "+62-263-944-1205",
  },
  {
    id: 7,
    name: "Missy",
    email: "mburbank6@princeton.edu",
    phone: "+254-183-466-6851",
  },
  {
    id: 8,
    name: "Conway",
    email: "comulderrig7@mapy.cz",
    phone: "+94-191-103-0997",
  },
  {
    id: 9,
    name: "Everett",
    email: "ebaniard8@studiopress.com",
    phone: "+81-163-488-4314",
  },
  {
    id: 10,
    name: "Maddalena",
    email: "mpeever9@nature.com",
    phone: "+502-344-754-1517",
  },
  {
    id: 11,
    name: "Adda",
    email: "amarfella@salon.com",
    phone: "+86-423-255-1199",
  },
  {
    id: 12,
    name: "Olivie",
    email: "oalflatb@youku.com",
    phone: "+86-858-359-7675",
  },
  {
    id: 13,
    name: "Shandy",
    email: "sdanelsc@ucsd.edu",
    phone: "+7-290-878-9491",
  },
  {
    id: 14,
    name: "Morty",
    email: "mbonnerd@webnode.com",
    phone: "+7-876-754-6380",
  },
  {
    id: 15,
    name: "Max",
    email: "msexone@bloomberg.com",
    phone: "+351-287-628-7040",
  },
  {
    id: 16,
    name: "Karlyn",
    email: "knewlynf@timesonline.co.uk",
    phone: "+86-790-684-5323",
  },
  {
    id: 17,
    name: "Tabatha",
    email: "tmacgillacolmg@discovery.com",
    phone: "+599-503-211-6660",
  },
  {
    id: 18,
    name: "Kriste",
    email: "kcrichmereh@dyndns.org",
    phone: "+1-405-556-8766",
  },
  {
    id: 19,
    name: "Karalynn",
    email: "kpinshoni@vinaora.com",
    phone: "+48-743-911-9999",
  },
  {
    id: 20,
    name: "Hamilton",
    email: "hmchargj@army.mil",
    phone: "+976-723-918-0172",
  },
  {
    id: 21,
    name: "Jonah",
    email: "jwhitlockk@hostgator.com",
    phone: "+86-157-643-9266",
  },
  {
    id: 22,
    name: "Glyn",
    email: "gmackartanl@rambler.ru",
    phone: "+48-579-746-6150",
  },
  {
    id: 23,
    name: "Aime",
    email: "amctaggartm@indiegogo.com",
    phone: "+880-295-433-7943",
  },
  {
    id: 24,
    name: "Faydra",
    email: "fphalipn@time.com",
    phone: "+86-729-421-4653",
  },
  {
    id: 25,
    name: "Bette",
    email: "blebango@comsenz.com",
    phone: "+7-297-243-7242",
  },
  {
    id: 26,
    name: "Dacie",
    email: "dallicockp@sourceforge.net",
    phone: "+86-266-992-1634",
  },
  {
    id: 27,
    name: "Juan",
    email: "jberniniq@1688.com",
    phone: "+86-406-565-0491",
  },
  {
    id: 28,
    name: "Vaughan",
    email: "vbrazelr@ft.com",
    phone: "+52-120-465-8245",
  },
  {
    id: 29,
    name: "Neville",
    email: "nmccomes@smh.com.au",
    phone: "+63-647-866-0953",
  },
  {
    id: 30,
    name: "Aloysia",
    email: "avalentinet@virginia.edu",
    phone: "+420-588-914-6451",
  },
  {
    id: 31,
    name: "Truman",
    email: "tverrellu@taobao.com",
    phone: "+86-249-819-9379",
  },
  {
    id: 32,
    name: "Conny",
    email: "cdablev@earthlink.net",
    phone: "+46-167-332-9008",
  },
  {
    id: 33,
    name: "Odelia",
    email: "obreartonw@cornell.edu",
    phone: "+48-561-509-6564",
  },
  {
    id: 34,
    name: "Bonnie",
    email: "borrx@multiply.com",
    phone: "+226-474-623-6989",
  },
  {
    id: 35,
    name: "Rani",
    email: "rjanjicy@apple.com",
    phone: "+86-443-990-6036",
  },
  {
    id: 36,
    name: "Cilka",
    email: "cshortoz@macromedia.com",
    phone: "+86-750-861-8105",
  },
  {
    id: 37,
    name: "Eddie",
    email: "ehark10@stumbleupon.com",
    phone: "+62-124-170-5395",
  },
  {
    id: 38,
    name: "Kellby",
    email: "klewtey11@google.ca",
    phone: "+248-132-508-6573",
  },
  {
    id: 39,
    name: "Dyanna",
    email: "dsnailham12@techcrunch.com",
    phone: "+55-375-238-9764",
  },
  {
    id: 40,
    name: "Maren",
    email: "mstatersfield13@squidoo.com",
    phone: "+86-458-478-4061",
  },
  {
    id: 41,
    name: "Giorgia",
    email: "ghartfleet14@vinaora.com",
    phone: "+7-192-218-8621",
  },
  {
    id: 42,
    name: "Shae",
    email: "sfisbburne15@google.com.au",
    phone: "+86-895-786-9307",
  },
  {
    id: 43,
    name: "Danell",
    email: "dpolon16@simplemachines.org",
    phone: "+86-117-345-4878",
  },
  {
    id: 44,
    name: "Francklyn",
    email: "fbenedettini17@pinterest.com",
    phone: "+1-216-390-7438",
  },
  {
    id: 45,
    name: "Sella",
    email: "srevie18@xinhuanet.com",
    phone: "+55-211-988-8242",
  },
  {
    id: 46,
    name: "Wylma",
    email: "wwelling19@360.cn",
    phone: "+1-996-135-2130",
  },
  {
    id: 47,
    name: "Marie-jeanne",
    email: "mmcmanaman1a@dailymail.co.uk",
    phone: "+420-951-617-4242",
  },
  {
    id: 48,
    name: "Gizela",
    email: "ggudgen1b@salon.com",
    phone: "+81-373-953-5142",
  },
  {
    id: 49,
    name: "Amalea",
    email: "aspacy1c@ed.gov",
    phone: "+51-117-212-0780",
  },
  {
    id: 50,
    name: "Borden",
    email: "bhaxby1d@desdev.cn",
    phone: "+63-988-853-0658",
  },
  {
    id: 51,
    name: "Thain",
    email: "toshesnan1e@amazon.de",
    phone: "+52-642-958-1449",
  },
  {
    id: 52,
    name: "D'arcy",
    email: "dianilli1f@typepad.com",
    phone: "+27-136-717-2096",
  },
  {
    id: 53,
    name: "Mitchell",
    email: "mcrowch1g@webnode.com",
    phone: "+595-695-927-4341",
  },
  {
    id: 54,
    name: "Edin",
    email: "eimrie1h@booking.com",
    phone: "+86-414-285-8417",
  },
  {
    id: 55,
    name: "Jarad",
    email: "jdubois1i@nps.gov",
    phone: "+358-142-969-0727",
  },
  {
    id: 56,
    name: "Marj",
    email: "mashby1j@bluehost.com",
    phone: "+7-621-476-5103",
  },
  {
    id: 57,
    name: "Ruby",
    email: "rfawke1k@networksolutions.com",
    phone: "+351-963-914-6418",
  },
  {
    id: 58,
    name: "Fred",
    email: "fleuren1l@msu.edu",
    phone: "+855-217-760-6581",
  },
  {
    id: 59,
    name: "Holly",
    email: "hdyke1m@mapquest.com",
    phone: "+505-634-979-0452",
  },
  {
    id: 60,
    name: "Greggory",
    email: "gmacgraith1n@sphinn.com",
    phone: "+86-238-688-5433",
  },
  {
    id: 61,
    name: "Delmer",
    email: "dhugenin1o@yahoo.co.jp",
    phone: "+1-513-832-5197",
  },
  {
    id: 62,
    name: "Andi",
    email: "arosa1p@uiuc.edu",
    phone: "+7-674-672-5931",
  },
  {
    id: 63,
    name: "Candice",
    email: "cdzenisenka1q@livejournal.com",
    phone: "+86-466-168-0659",
  },
  {
    id: 64,
    name: "Nicolas",
    email: "nroyan1r@wunderground.com",
    phone: "+1-912-147-5411",
  },
  {
    id: 65,
    name: "Neysa",
    email: "nmonier1s@wunderground.com",
    phone: "+86-443-495-0536",
  },
  {
    id: 66,
    name: "Vaughn",
    email: "vcrain1t@vistaprint.com",
    phone: "+62-284-909-9884",
  },
  {
    id: 67,
    name: "Janelle",
    email: "jtomkinson1u@sohu.com",
    phone: "+66-650-124-7845",
  },
  {
    id: 68,
    name: "Artair",
    email: "athaine1v@google.com.br",
    phone: "+46-133-699-4057",
  },
  {
    id: 69,
    name: "Aubree",
    email: "achaunce1w@arstechnica.com",
    phone: "+86-556-486-8026",
  },
  {
    id: 70,
    name: "Stanfield",
    email: "sorhtmann1x@feedburner.com",
    phone: "+380-635-940-7000",
  },
  {
    id: 71,
    name: "Miles",
    email: "mseywood1y@omniture.com",
    phone: "+1-694-174-4829",
  },
  {
    id: 72,
    name: "Charis",
    email: "chatherley1z@cornell.edu",
    phone: "+86-484-782-6201",
  },
  {
    id: 73,
    name: "Orazio",
    email: "osnookes20@purevolume.com",
    phone: "+1-967-888-5423",
  },
  {
    id: 74,
    name: "Aryn",
    email: "ashipp21@godaddy.com",
    phone: "+7-919-272-9561",
  },
  {
    id: 75,
    name: "Cull",
    email: "chinkes22@psu.edu",
    phone: "+86-214-185-6085",
  },
  {
    id: 76,
    name: "Edith",
    email: "estackbridge23@adobe.com",
    phone: "+389-756-951-9225",
  },
  {
    id: 77,
    name: "Edan",
    email: "eeminson24@loc.gov",
    phone: "+7-658-686-4577",
  },
  {
    id: 78,
    name: "Gussy",
    email: "gbradbrook25@toplist.cz",
    phone: "+258-610-383-9968",
  },
  {
    id: 79,
    name: "Daisie",
    email: "dmalthouse26@dropbox.com",
    phone: "+93-870-999-8477",
  },
  {
    id: 80,
    name: "Bren",
    email: "blampens27@google.fr",
    phone: "+238-907-305-8455",
  },
  {
    id: 81,
    name: "Charmine",
    email: "csnowdon28@drupal.org",
    phone: "+86-506-566-6425",
  },
  {
    id: 82,
    name: "Natalee",
    email: "ngilligan29@businessinsider.com",
    phone: "+54-241-279-7629",
  },
  {
    id: 83,
    name: "Debee",
    email: "dredmire2a@shinystat.com",
    phone: "+355-909-178-2250",
  },
  {
    id: 84,
    name: "Roxi",
    email: "rhealy2b@virginia.edu",
    phone: "+387-204-184-9027",
  },
  {
    id: 85,
    name: "Georgette",
    email: "gmairs2c@symantec.com",
    phone: "+86-997-201-2011",
  },
  {
    id: 86,
    name: "Tripp",
    email: "tgresswood2d@wordpress.com",
    phone: "+1-770-576-2241",
  },
  {
    id: 87,
    name: "Sergent",
    email: "smckoy2e@smh.com.au",
    phone: "+593-556-550-5018",
  },
  {
    id: 88,
    name: "Kean",
    email: "kmoxsom2f@360.cn",
    phone: "+86-345-990-1832",
  },
  {
    id: 89,
    name: "Leesa",
    email: "ldennerley2g@dmoz.org",
    phone: "+33-792-187-7608",
  },
  {
    id: 90,
    name: "Peggy",
    email: "pmaskelyne2h@slideshare.net",
    phone: "+54-132-539-0975",
  },
  {
    id: 91,
    name: "King",
    email: "kdyott2i@t.co",
    phone: "+62-876-198-3638",
  },
  {
    id: 92,
    name: "Rosalia",
    email: "rkinsey2j@xinhuanet.com",
    phone: "+62-390-875-0056",
  },
  {
    id: 93,
    name: "Alethea",
    email: "akauble2k@topsy.com",
    phone: "+1-209-205-5249",
  },
  {
    id: 94,
    name: "Gaby",
    email: "gboldry2l@oaic.gov.au",
    phone: "+7-651-370-8939",
  },
  {
    id: 95,
    name: "Lotti",
    email: "lpozer2m@patch.com",
    phone: "+81-657-526-7242",
  },
  {
    id: 96,
    name: "Steffane",
    email: "sdowne2n@google.it",
    phone: "+86-633-204-9795",
  },
  {
    id: 97,
    name: "Wilmette",
    email: "wpaterno2o@usda.gov",
    phone: "+375-422-658-1364",
  },
  {
    id: 98,
    name: "Dalia",
    email: "dfishlock2p@wired.com",
    phone: "+62-815-130-6950",
  },
  {
    id: 99,
    name: "Matteo",
    email: "mmurrum2q@gravatar.com",
    phone: "+62-576-261-7939",
  },
  {
    id: 100,
    name: "Francois",
    email: "flongrigg2r@ibm.com",
    phone: "+62-557-959-5935",
  },
];

Contacts.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

const group = Contacts.reduce((acc, cur) => {
  let groupName = cur.name.charAt(0).toUpperCase();
  if (acc[groupName]) {
    acc[groupName].push(cur);
  } else {
    acc[groupName] = [cur];
  }
  return acc;
}, {});

const displayList = (group) => {
  console.log("Displaying Contact Information");
  console.log("============+++++===========");

  const keys = Object.keys(group);
  keys.forEach((key) => {
    console.log(`Group: ${key}`);
    console.log(group[key]);
  });
};

displayList(group);

// console.log(Contacts);
