export class Product {
  constructor(
    public id: number,
    public name: string,
    public vorname: string,
    public titel: string,
    public firma: string,
    public plz: string,
    public ort: string,
    public strasse: string,
    public hausnummer: string,
    public strZusatz: string,
    public stadtteil: string,
    public telefon: string,
    public mobil: string,
    public email: string,
    public website: string,
    public kontaktdaten: string,
    public fachgebiete: string[],
    public schwerpunkte: string[],
    public fachlichkeit: string[],
    public seit: string,
    public ausbMediat: string[],
    public praktAusb: string,
    public ausbQuellberufe: string,
    public quellberufe: string,
    public quellSchwerpunkte: string[],
    public sonstTaetig: string,
    public branchen: string[],
    public verbaende: string[],
    public medien: string[],
    public beratung: boolean,
    public gespraech: boolean,
    public rating: number,
    public description: string) {}
}

export class Review {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public comment: string) {}
}

export function getProducts(params = <any>{}): Product[] {
  let result = products;

  if (params.name && result.length > 0) {
    result = result.filter(
      p => p.name.toLowerCase().indexOf(params.name.toLowerCase()) !== -1);
  }
  if (params.ort && result.length > 0) {
    result = result.filter(
      p => p.ort.toLowerCase().indexOf(params.ort.toLowerCase()) !== -1);
  }
  if (params.plz && result.length > 0) {
    result = result.filter(
      p => p.plz.startsWith(params.plz));
  }

  return result;
}

export function getProductById(productId: number): Product {
  return products.find(p => p.id === productId);
}

export function getReviewsByProductId(productId: number): Review[] {
  return reviews.filter(r => r.productId === productId);
}

var products = [
  {
    "id": 0,
    "name": "Haag",
    "vorname": "Susanne",
    "titel": "Juristin",
    "firma": "",
    "plz": "50672",
    "ort": "Köln",
    "strasse": "Barbarossaplatz",
    "hausnummer": "1",
    "strZusatz": "c/o Kanzlei Theus",
    "stadtteil": "Innenstadt",
    "telefon": "0221-9615381",
    "mobil": "0221-9615381",
    "email": "susanne.haagatgooglemail.com",
    "website": "www.susanne-haag.de",
    "kontaktdaten": "",
    "fachgebiete": ["Familie","Wirtschaft"],
    "schwerpunkte": ["Scheidungsmediation","Erbschaftsmediation"],
    "fachlichkeit": ["juristisch"],
    "seit": "2014-05-20T02:17:00+00:00",
    "ausbMediat": ["Mediatiorin BM"],
    "praktAusb": "150-200",
    "ausbQuellberufe": "Rechtswissenschaft",
    "quellberufe": "selbständig",
    "quellSchwerpunkte": ["Familienrecht"],
    "sonstTaetig": "Klärungshelfer,Konfliktmanagement",
    "branchen": ["Banken","Industrie"],
    "verbaende": ["Bundesverband Mediation"],
    "veroeffentlichungen": [],
    "medien": ["Telefonmediation"],
    "beratung": false,
    "gespraech": true,
    "rating": 3.5,
    "description": ""
}];

var reviews = [
  {
    "id": 0,
    "productId": 0,
    "timestamp": "2014-05-20T02:17:00+00:00",
    "user": "User 1",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 1,
    "productId": 0,
    "timestamp": "2014-05-20T02:53:00+00:00",
    "user": "User 2",
    "rating": 3,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 2,
    "productId": 0,
    "timestamp": "2014-05-20T05:26:00+00:00",
    "user": "User 3",
    "rating": 4,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 3,
    "productId": 0,
    "timestamp": "2014-05-20T07:20:00+00:00",
    "user": "User 4",
    "rating": 4,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 4,
    "productId": 0,
    "timestamp": "2014-05-20T11:35:00+00:00",
    "user": "User 5",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 5,
    "productId": 0,
    "timestamp": "2014-05-20T11:42:00+00:00",
    "user": "User 6",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  }
];
