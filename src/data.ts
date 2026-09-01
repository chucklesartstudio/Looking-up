export const WHATSAPP_NUMBER = '917903622121'

export const IMAGES = {
  coverHero: 'https://images.pexels.com/photos/16005636/pexels-photo-16005636.jpeg?auto=compress&cs=tinysrgb&w=940',
  facadeUp: '/ballard-estate.png',
  facadeBw: 'https://images.pexels.com/photos/5544034/pexels-photo-5544034.jpeg?auto=compress&cs=tinysrgb&w=940',
  facadeDetail: 'https://images.pexels.com/photos/38241041/pexels-photo-38241041.jpeg?auto=compress&cs=tinysrgb&w=940',
  facadeCorner: 'https://images.pexels.com/photos/30673993/pexels-photo-30673993.jpeg?auto=compress&cs=tinysrgb&w=940',
  notebookStreet: 'https://images.pexels.com/photos/16308802/pexels-photo-16308802.jpeg?auto=compress&cs=tinysrgb&w=940',
  notebookVendor: 'https://images.pexels.com/photos/16308804/pexels-photo-16308804.jpeg?auto=compress&cs=tinysrgb&w=940',
  notebookMarket: 'https://images.pexels.com/photos/16005634/pexels-photo-16005634.jpeg?auto=compress&cs=tinysrgb&w=940',
  karfule1935: 'https://images.pexels.com/photos/8402401/pexels-photo-8402401.jpeg?auto=compress&cs=tinysrgb&w=940',
  karfule1960: 'https://images.pexels.com/photos/16005639/pexels-photo-16005639.jpeg?auto=compress&cs=tinysrgb&w=940',
  karfuleToday: 'https://images.pexels.com/photos/16376256/pexels-photo-16376256.jpeg?auto=compress&cs=tinysrgb&w=940',
  closingSky: 'https://images.pexels.com/photos/5802044/pexels-photo-5802044.jpeg?auto=compress&cs=tinysrgb&w=940',
  // 400001 portraits
  sewingMan: 'https://images.pexels.com/photos/36799021/pexels-photo-36799021.jpeg?auto=compress&cs=tinysrgb&w=940',
  sewingMachine: 'https://images.pexels.com/photos/29308434/pexels-photo-29308434.jpeg?auto=compress&cs=tinysrgb&w=940',
  truckPainter: 'https://images.pexels.com/photos/16215350/pexels-photo-16215350.jpeg?auto=compress&cs=tinysrgb&w=940',
  truckArt: 'https://images.pexels.com/photos/6317765/pexels-photo-6317765.jpeg?auto=compress&cs=tinysrgb&w=940',
  channawalla: 'https://images.pexels.com/photos/16005659/pexels-photo-16005659.jpeg?auto=compress&cs=tinysrgb&w=940',
  channawalla2: 'https://images.pexels.com/photos/16005649/pexels-photo-16005649.jpeg?auto=compress&cs=tinysrgb&w=940',
  typewriter: 'https://images.pexels.com/photos/14048474/pexels-photo-14048474.jpeg?auto=compress&cs=tinysrgb&w=940',
  typewriter2: 'https://images.pexels.com/photos/20107126/pexels-photo-20107126.jpeg?auto=compress&cs=tinysrgb&w=940',
  magnetwalla: 'https://images.pexels.com/photos/12436195/pexels-photo-12436195.jpeg?auto=compress&cs=tinysrgb&w=940',
  magnetwalla2: 'https://images.pexels.com/photos/16005658/pexels-photo-16005658.jpeg?auto=compress&cs=tinysrgb&w=940',
  chairWeaver: 'https://images.pexels.com/photos/15997613/pexels-photo-15997613.jpeg?auto=compress&cs=tinysrgb&w=940',
  chairWeaver2: 'https://images.pexels.com/photos/18115390/pexels-photo-18115390.jpeg?auto=compress&cs=tinysrgb&w=940',
  // Walk checkpoint photos
  ballardWalk1: 'https://images.pexels.com/photos/27264872/pexels-photo-27264872.jpeg?auto=compress&cs=tinysrgb&w=940',
  ballardWalk2: 'https://images.pexels.com/photos/8452150/pexels-photo-8452150.jpeg?auto=compress&cs=tinysrgb&w=940',
  colabaWalk1: '/colaba.png',
  colabaWalk2: 'https://images.pexels.com/photos/16005633/pexels-photo-16005633.jpeg?auto=compress&cs=tinysrgb&w=940',
  archive1: 'https://images.pexels.com/photos/706352/pexels-photo-706352.jpeg?auto=compress&cs=tinysrgb&w=940',
  archive2: 'https://images.pexels.com/photos/16005640/pexels-photo-16005640.jpeg?auto=compress&cs=tinysrgb&w=940',
  archive3: 'https://images.pexels.com/photos/16005631/pexels-photo-16005631.jpeg?auto=compress&cs=tinysrgb&w=940',
}

export interface FacadeMarker {
  id: number
  x: string
  y: string
  label: string
  note: string
}

export const FACADE_MARKERS: FacadeMarker[] = [
  {
    id: 1,
    x: '22%',
    y: '28%',
    label: 'ART DECO FIN',
    note: 'These fins weren\'t just decorative — they channeled sea breeze into the offices before electric fans arrived.',
  },
  {
    id: 2,
    x: '55%',
    y: '18%',
    label: 'CORBEL CARVER',
    note: 'The contractor who carved this corbel lived three lanes down from where I grew up. My grandfather knew him.',
  },
  {
    id: 3,
    x: '40%',
    y: '55%',
    label: 'KEYSTONE SHIP',
    note: 'The keystone has a tiny ship carved into it. A nod to the dock workers who built this city stone by stone.',
  },
  {
    id: 4,
    x: '72%',
    y: '42%',
    label: 'GLASGOW IRON',
    note: 'Imported from Glasgow in 1897. The same foundry made railings for Victoria Terminus.',
  },
]

export interface NotebookEntry {
  image: string
  text: string
}

export const NOTEBOOK_ENTRIES: NotebookEntry[] = [
  {
    image: IMAGES.notebookStreet,
    text: 'The chaiwalla at Sprott Road corner has been here since before the pump opened. He doesn\'t have a nameboard. He doesn\'t need one. His kettle is the official starting bell of every walk.',
  },
  {
    image: IMAGES.notebookVendor,
    text: 'A man leaned out of a first-floor window on Margret Street to tell us the building used to be a Iranian bakery. The smell of bread is gone but the oven door is still bricked up in the wall.',
  },
  {
    image: IMAGES.notebookMarket,
    text: 'Colaba Causeway at 7 AM is a different street. The shutters are half-open, the vendors are having chai, and the buildings — for once — are louder than the people.',
  },
]

export interface TimelineItem {
  year: string
  title: string
  image: string
  text: string
}

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: '1935',
    title: 'The Art Deco Pump is Born',
    image: IMAGES.karfule1935,
    text: 'Gabriel Sequeira, a young Goan entrepreneur, enlists architect G.B. Mhatre to design a fuel station on Sprott Road. The streamline moderne canopy echoes the ships at the nearby docks. Construction finishes in five months.',
  },
  {
    year: '1960s',
    title: 'Family & Neighbourhood',
    image: IMAGES.karfule1960,
    text: 'Grandfather runs the pump. The same men who filled their Ambassadors here walked down to the docks. The corner became Ballard Estate\'s unofficial meeting point — a place where the city\'s story was told in petrol, tea, and gossip.',
  },
  {
    year: 'Today',
    title: 'Where Every Walk Begins',
    image: IMAGES.karfuleToday,
    text: 'The pump still stands, maintained by Daniel and his father Kevin. Every "Looking Up" walk starts here because this is where Daniel\'s story and Bombay\'s story meet. The terrazzo floor still has its star. The clock tower still keeps time.',
  },
]

export interface PortraitEntry {
  name: string
  location: string
  image: string
  colorImage: string
  note: string
  extraNote?: string
}

export const PORTRAITS: PortraitEntry[] = [
  {
    name: 'The Sewing Machine Man',
    location: 'Opposite Modern Tailors, Colaba Causeway',
    image: IMAGES.sewingMan,
    colorImage: IMAGES.sewingMachine,
    note: 'A cupboard, a table, some drawers full of spares. That\'s the whole shop. I took my grandmother\'s old hand-operated Singer machine to him — he had it running in an hour. The man in the purple shirt works with his hands in a space that barely fits him. Glue bottles lined up on the shelf above. A newer white Multistitch machine sitting next to the old black ones. He never looked up from the work.',
    extraNote: 'My dad was quite excited to use the machine after decades.',
  },
  {
    name: 'Kamlesh, Truck Painter',
    location: 'Wherever the truck stops',
    image: IMAGES.truckPainter,
    colorImage: IMAGES.truckArt,
    note: 'Kamlesh makes it look effortless. In the photo he\'s bent over a German campervan\'s fuel tank, painting a sunset scene — mountains, water, a bird. The DIESEL lettering on the tank is my favourite bit. Peter had driven his ex-military truck overland from Germany and wanted it to look friendlier as he crossed borders. Kamlesh gave it a face. With vinyl stickering taking over, this is dying. I recommend him to anyone looking to get some cool art done on their vehicles — or maybe even for their homes.',
  },
  {
    name: 'The Channawalla',
    location: 'Colaba Causeway',
    image: IMAGES.channawalla,
    colorImage: IMAGES.channawalla2,
    note: 'Colaba\'s most stylish channawalla. White kurta, blue-checked lungi, standing over a flat pan of roasted peanuts with steam rising. Palm trees behind him. He sells traditionally roasted peanuts and gram in sustainable packaging. Unpeeled options are fibre-rich, he\'ll remind you. Don\'t miss the handmade upcycled heating apparatus — also provides pest control, somehow.',
  },
  {
    name: 'Mr. Patel, Typewriter Clinic',
    location: 'Picked up from / dropped at Karfule Petrol Pump',
    image: IMAGES.typewriter,
    colorImage: IMAGES.typewriter2,
    note: 'Mr. Patel sits at a desk with a black briefcase on the floor beside him, working on a typewriter with the Karfule heritage board visible behind him. I got in touch with him through Bejon Madon, whose family started \'General Office Typewriters\' and used to repair them back in the day. After replacing a few springs and the ribbon, the typewriter was clicking again. Don\'t miss his cool briefcase. If anyone has an old typewriter they need repaired or serviced, it can be dropped off at Karfule, and I can ask Mr. Patel to come and have a look at it.',
  },
  {
    name: 'Kishore, Magnetwalla',
    location: 'Near Gateway of India / Taj Hotel',
    image: IMAGES.magnetwalla,
    colorImage: IMAGES.magnetwalla2,
    note: 'Red cap, grey t-shirt, holding a box of Mumbai-themed magnets. Padmini taxis, autos, handcart pullers — he has the whole city for around 100 bucks each. Nice variety. Look out for him if you\'re in the area. He also has some displayed at a cobbler\'s stall in Colaba when he\'s not at Gateway. DM for his number if you want to get in touch with him.',
  },
  {
    name: 'Salim & Babloo, Chair Weavers',
    location: 'Mumbai',
    image: IMAGES.chairWeaver,
    colorImage: IMAGES.chairWeaver2,
    note: 'Salim and Babloo weaving the seats of our vintage Art Deco foldable deck chairs. Bare feet on the floor, sitting on newspaper, working the cords through the wooden frame. Each panel takes around two and a half hours to weave and needs some serious skill and patience. They wax the chords to make sure that the lines go smoothly into the grooves on the border. We\'re so lucky that Mumbai has these skilled craftsmen. If anyone in Mumbai needs to get their chairs re-woven, I\'d be happy to share their contact.',
  },
]

export interface WalkCheckpoint {
  image: string
  caption: string
}

export const WALK_CHECKPOINTS: Record<string, WalkCheckpoint[]> = {
  ballard: [
    { image: IMAGES.facadeBw, caption: 'Sprott Road — the pump, the starting point.' },
    { image: IMAGES.facadeUp, caption: 'The canopy that survived three owners and four wars.' },
    { image: IMAGES.facadeCorner, caption: 'Margaret Street corner — where Deco meets Edwardian.' },
    { image: IMAGES.facadeDetail, caption: 'A corbel carved by a man who lived three lanes away.' },
  ],
  colaba: [
    { image: IMAGES.colabaWalk1, caption: 'Causeway at dawn — before the shutters roll up.' },
    { image: IMAGES.colabaWalk2, caption: 'The sewing machine man, working since the \'60s.' },
    { image: IMAGES.notebookVendor, caption: 'A window that used to smell of Iranian bread.' },
    { image: IMAGES.facadeUp, caption: 'A keystone with a ship nobody notices.' },
  ],
}

export interface UpcomingWalk {
  name: string
  date: string
  time: string
  spots: number
  totalSpots: number
  teaser: string
  duration: string
  meetingPoint: string
  soldOut?: boolean
}

export const UPCOMING_WALKS: UpcomingWalk[] = [
  {
    name: 'Looking Up in Ballard Estate',
    date: 'Sat, 9 Aug 2026',
    time: '8:00 AM',
    spots: 12,
    totalSpots: 15,
    teaser: 'Trace the streamline moderne canopies and hidden corbels of Bombay\'s most disciplined precinct.',
    duration: '2.5 hours',
    meetingPoint: 'Karfule Petrol Pump, Sprott Road',
  },
  {
    name: 'Looking Up in Colaba',
    date: 'Sun, 17 Aug 2026',
    time: '7:30 AM',
    spots: 8,
    totalSpots: 12,
    teaser: 'From the Causeway to the Gateway — the people and facades that make pin code 400001 feel unchanged.',
    duration: '3 hours',
    meetingPoint: 'Karfule Petrol Pump, Sprott Road',
  },
  {
    name: 'Looking Out at Sea',
    date: 'Sat, 23 Aug 2026',
    time: '6:00 PM',
    spots: 15,
    totalSpots: 20,
    teaser: 'A sunset walk tracing Bombay\'s waterfront — from the docks to the sea wall, where the city meets the Arabian.',
    duration: '2 hours',
    meetingPoint: 'Karfule Petrol Pump, Sprott Road',
  },
]

export interface ArchiveWalk {
  name: string
  date: string
  image: string
  fieldNote: string
  category: 'Ballard Estate' | 'Colaba' | 'Looking Out at Sea' | 'Special Walks'
}

export const ARCHIVE_WALKS: ArchiveWalk[] = [
  {
    name: 'Looking Up in Colaba',
    date: '14 June 2026',
    image: IMAGES.archive1,
    fieldNote: 'Found a 1923 rainwater spout shaped like a gargoyle. No one believed me until I pointed it out.',
    category: 'Colaba',
  },
  {
    name: 'Looking Out at Sea',
    date: '21 May 2026',
    image: IMAGES.archive2,
    fieldNote: 'The group from Pune brought binoculars. We spotted three different ship eras docked at once.',
    category: 'Looking Out at Sea',
  },
  {
    name: 'Looking Up in Ballard Estate',
    date: '3 May 2026',
    image: IMAGES.facadeBw,
    fieldNote: 'A participant found her grandfather\'s name on a contractor\'s plaque. She cried. We all did.',
    category: 'Ballard Estate',
  },
  {
    name: 'Special Walk: Fort Heritage',
    date: '12 Apr 2026',
    image: IMAGES.archive3,
    fieldNote: 'The Asiatic Library let us into the reading room. The silence was older than the books.',
    category: 'Special Walks',
  },
  {
    name: 'Looking Up in Colaba',
    date: '28 Mar 2026',
    image: IMAGES.colabaWalk1,
    fieldNote: 'A cat followed us for six blocks. It knew the route better than I did.',
    category: 'Colaba',
  },
  {
    name: 'Looking Out at Sea',
    date: '15 Feb 2026',
    image: IMAGES.closingSky,
    fieldNote: 'Low tide. We walked out to the rocks and found a 19th-century mooring ring still bolted in.',
    category: 'Looking Out at Sea',
  },
]

export const ARCHIVE_FILTERS = ['All', 'Ballard Estate', 'Colaba', 'Looking Out at Sea', 'Special Walks'] as const
