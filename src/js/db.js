const db = [
  {type:'book', title:'From the Earth to the Moon', distance: '384400 km'},
  {type:'book', title:'The Fifth Elephant', number:5, ordinal:5},
  {type:'book', title:'The Two Sources of Morality and Religion', number:2},
  {type:'book', title:'The Two Towers', number:2},
  {type:'movie', title:'\'71', date:'1971', number:71},
  {type:'movie', title:'10 MPH', number:10, speed:'10 miles h'},
  {type:'movie', title:'10 Things I Hate About You', number:10},
  {type:'movie', title:'10, 000 BC', number:10000, date:'-10000'},
  {type:'movie', title:'12 Angry Men', number:12},
  {type:'movie', title:'12 Years a Slave', number:12, duration:'12y'},
  {type:'movie', title:'120 BPM', number:120},
  {type:'movie', title:'127 Hours', number:127, duration:'127h'},
  {type:'movie', title:'13 Hours: The Secret Soldiers of Benghazi', number:13, duration:'13h'},
  {type:'movie', title:'14 Days to Life', duration:'14d', number:14},
  {type:'movie', title:'1492: Conquest of Paradise', date:'1492', number:1492},
  {type:'movie', title:'15 Minutes', number:15, duration:'15m'},
  {type:'movie', title:'15th August', number:15, ordinal:15},
  {type:'movie', title:'17 Again', number:17},
  {type:'movie', title:'17th Precinct', number:17, ordinal:17},
  {type:'movie', title:'18 Again!', number:18},
  {type:'movie', title:'1917', number:1917, date:'1917'},
  {type:'movie', title:'1941', number:1941, date:'1941'},
  {type:'movie', title:'1984', number:1984, date:'1984'},
  {type:'movie', title:'20 Centimeters', distance:'20cm', number:20},
  {type:'movie', title:'20, 000 Leagues Under the Sea', number:20000, distance:'20000 leagues'},
  {type:'movie', title:'200 Cigarettes', number:200},
  {type:'movie', title:'2001: A Space Odyssey', date:'2001', number:2001},
  {type:'movie', title:'2010: The Year We Make Contact', date:'2010', number:2010},
  {type:'movie', title:'2012', number:2012, date:'2012'},
  {type:'movie', title:'2046', number:2046, date:'2046'},
  {type:'movie', title:'21 Grams', mass:'21g', number:21},
  {type:'movie', title:'21 Jump Street', number:21},
  {type:'movie', title:'21', number:21},
  {type:'movie', title:'24 Hour Party People', number:24, duration:'24h'},
  {type:'movie', title:'25th Hour', number:25, ordinal:25},
  {type:'movie', title:'25th Hour', number:25},
  {type:'movie', title:'26 Years', number:26, duration:'26y'},
  {type:'movie', title:'27 Dresses', number:27},
  {type:'movie', title:'28 Days Later', date:'d+28', number:28, duration:'28d'},
  {type:'movie', title:'28 Weeks Later', date:'w+28', number:28, duration:'28w'},
  {type:'movie', title:'29th Street', number:29, ordinal:29},
  {type:'movie', title:'30 Days of Night', number:30, duration:'30d'},
  {type:'movie', title:'30 Minutes or Less', duration:'30m'},
  {type:'movie', title:'300', number:300},
  {type:'movie', title:'31', number:31},
  {type:'movie', title:'36', number:36},
  {type:'movie', title:'37 Seconds', number:37, duration:'37s'},
  {type:'movie', title:'40 Days & 40 Nights', number:40, duration:'40d'},
  {type:'movie', title:'47 Ronin', number:47},
  {type:'movie', title:'48 Hrs.', duration:'48h', number:48},
  {type:'movie', title:'5 Centimeters per Second', distance:'5cm', number:5, speed:'5 cm s'},
  {type:'movie', title:'50 First Dates', number:50},
  {type:'movie', title:'50/50', number:50},
  {type:'movie', title:'500 Days of Summer', number:500, duration:'500d'},
  {type:'movie', title:'59 Seconds', number:59, duration:'59s'},
  {type:'movie', title:'8 and a Half', number:8.5},
  {type:'movie', title:'8 Mile', number:8, distance:"8 miles"},
  {type:'movie', title:'8 Seconds', duration:'8s', number:8},
  {type:'movie', title:'88 Minutes', duration:'88m', number:88},
  {type:'movie', title:'8mm', number:8, distance:'8mm'},
  {type:'movie', title:'9/11', number:911, date:'September 11, 2001'},
  {type:'movie', title:'9½ Weeks', number:9.5, duration:'9.5w'},
  {type:'movie', title:'99 Francs', number:99, price:'99 FRF'},
  {type:'movie', title:'A Clockwork Orange', color:'ffa500'},
  {type:'movie', title:'A Thousand Billion Dollars', number:1000000000000, price:"1000000000000 USD"},
  {type:'movie', title:'American History X', letter:'x'},
  {type:'movie', title:'Apollo 13', number:13},
  {type:'movie', title:'Aquaman', color:'00FFFF'},
  {type:'movie', title:'Around the World in 80 Days', number:80, duration:'80d', distance:'40075km', speed:'40075km 80d'},
  {type:'movie', title:'Arsenic and Old Lace', element:33},
  {type:'movie', title:'Avengers: Infinity War', number:Infinity},
  {type:'movie', title:'Black Swan', color:'000000'},
  {type:'movie', title:'Blade Runner 2049', number:2049, date:'2049'},
  {type:'movie', title:'Blue is the Warmest Color', color:'0000ff'},
  {type:'movie', title:'Blue Velvet', color: '0000ff'},
  {type:'movie', title:'Catch 22', number:22},
  {type:'movie', title:'Dial M for Murder', letter:'m'},
  {type:'movie', title:'District 9', number:9},
  {type:'movie', title:'Easy A', letter:'a'},
  {type:'movie', title:'Eighth Grade', number:8, ordinal:8},
  {type:'movie', title:'Fahrenheit 451', number:451},
  {type:'movie', title:'Fahrenheit 9/11', number:911, date:'September 11, 2001'},
  {type:'movie', title:'Fantasia 2000', number:2000},
  {type:'movie', title:'Fantastic Four', number:4},
  {type:'movie', title:'Five Feet Apart', number:5, distance:'5 feet'},
  {type:'movie', title:'Five Grand', number:5, price:'5000 USD'},
  {type:'movie', title:'Friday the 13th', number:13, ordinal:13},
  {type:'movie', title:'From Dusk till Dawn', duration:'12h'},
  {type:'movie', title:'G-Force', letter:'g'},
  {type:'movie', title:'Goldfinger', color:'FFD700', element:79},
  {type:'movie', title:'Gone in 60 Seconds', duration:'60s', number:60},
  {type:'movie', title:'Helium', element:2},
  {type:'movie', title:'House of D', letter:'d'},
  {type:'movie', title:'How to Lose a Guy in 10 Days', duration:'10d', number:10},
  {type:'movie', title:'I Am Number Four', number:4},
  {type:'movie', title:'I, Robot', letter:'i'},
  {type:'movie', title:'Independance Day', date:'July 4, 1776'},
  {type:'movie', title:'Iron Man', element:26},
  {type:'movie', title:'Jackie Brown', color:'964B00'},
  {type:'movie', title:'John Q', letter:'q'},
  {type:'movie', title:'K-19: The Widowmaker', number:19, letter:'k'},
  {type:'movie', title:'K-PAX', letter:'k'},
  {type:'movie', title:'Lilac Time', color:'C8A2C8'},
  {type:'movie', title:'Lithivm', element:3},
  {type:'movie', title:'M', imdb: 'tt0022100', letter:'m'},
  {type:'movie', title:'Mercury Rising', element:80},
  {type:'movie', title:'Million Dollar Baby', number:1000000, price:'1000000 USD'},
  {type:'movie', title:'Mood Indigo', color:'3F00FF'},
  {type:'movie', title:'Movie 43', number:43},
  {type:'movie', title:'Ocean\'s Eleven', number:11},
  {type:'movie', title:'Olive', color:'808000'},
  {type:'movie', title:'On the Nickel', element:28},
  {type:'movie', title:'One Day', number:1, duration:'1d'},
  {type:'movie', title:'One Hour Photo', duration:'1h'},
  {type:'movie', title:'One Hundred and One Dalmatians', number:101},
  {type:'movie', title:'OSS 117: Cairo, Nest of Spies', number:117},
  {type:'movie', title:'Oxygen', element:8},
  {type:'movie', title:'Pi', number:Math.PI},
  {type:'movie', title:'Planet 51', number:51},
  {type:'movie', title:'Pretty in Pink', color:'FFC0CB'},
  {type:'movie', title:'Purple Rain', color:'800080'},
  {type:'movie', title:'Salmon Fishing in the Yemen', color:'FA8072'},
  {type:'movie', title:'Sapphire', color:'0F52BA'},
  {type:'movie', title:'Se7en', number:7},
  {type:'movie', title:'Seven Days in May', duration:'7d', number:7},
  {type:'movie', title:'Seven Pounds', mass:'7lb', number:7, price:'7 GBP'},
  {type:'movie', title:'Seven Samurai', number:7},
  {type:'movie', title:'Seven Years in Tibet', number:7, duration:'7y'},
  {type:'movie', title:'Silver Linings Playbook', color:'C0C0C0', element:47},
  {type:'movie', title:'Sixteen Candles', number:16},
  {type:'movie', title:'Soylent Green', color:'00ff00'},
  {type:'movie', title:'Super 8', number:8},
  {type:'movie', title:'TAU', number:Math.PI*2},
  {type:'movie', title:'Ten Seconds to Hell', number:10, duration:'10s'},
  {type:'movie', title:'The 11th Hour', number:11, ordinal:11},
  {type:'movie', title:'The 12th Man', number:12, ordinal:12},
  {type:'movie', title:'The 39 Steps', number:39, distance:"39 steps"},
  {type:'movie', title:'The 40 Year-Old Virgin', number:40, duration:'40y'},
  {type:'movie', title:'The 400 Blows', number:400},
  {type:'movie', title:'The Blue Lagoon', color:'ACE5EE'},
  {type:'movie', title:'The Crimson Rivers', color:'DC143C'},
  {type:'movie', title:'The Day After Tomorrow', date:'d+2'},
  {type:'movie', title:'The Deadly Mantis', color:'74C365'},
  {type:'movie', title:'The Fifth Element', number:5, ordinal:5},
  {type:'movie', title:'The Fourth Protocol', number:4, ordinal:4},
  {type:'movie', title:'The Green Mile', distance:'1 miles', color:'00ff00'},
  {type:'movie', title:'The Grey', color:'808080'},
  {type:'movie', title:'The Knot', speed:'1 M h'},
  {type:'movie', title:'The Lord of the Rings: The Two Towers', number:2},
  {type:'movie', title:'The Name of the Rose', color:'FF007F'},
  {type:'movie', title:'The Next Three Days', duration:'3d', number:3},
  {type:'movie', title:'The Ninth Gate', number: 9, ordinal:9},
  {type:'movie', title:'The Number 23', number:23},
  {type:'movie', title:'The Scarlet Letter', color:'FF2400'},
  {type:'movie', title:'The Seventh Seal', number:7, ordinal:7},
  {type:'movie', title:'The Sixth Sense', number:6, ordinal:6},
  {type:'movie', title:'The Third Man', number:3, ordinal:3},
  {type:'movie', title:'Three Seconds', number:3, duration:'3s'},
  {type:'movie', title:'THX 1138', number:1138},
  {type:'movie', title:'Tin Men', element:50},
  {type:'movie', title:'Titanium', element:22},
  {type:'movie', title:'Tomorrowland', date:'d+1'},
  {type:'movie', title:'Two Seconds', number:2, duration:'2s'},
  {type:'movie', title:'Two Weeks Notice', number:2, duration:'2w'},
  {type:'movie', title:'Ultraviolet', color:'7F00FF'},
  {type:'movie', title:'V for Vendetta', letter:'v'},
  {type:'movie', title:'W.', letter:'w'},
  {type:'movie', title:'WALL-E', letter:'e'},
  {type:'movie', title:'Weightless', mass:'0g'},
  {type:'movie', title:'X: First Class', ordinal:1},
  {type:'movie', title:'Year One', date:'0001'},
  {type:'movie', title:'Yellow Submarine', color:'FFFF00'},
  {type:'movie', title:'Z', letter:'Z'},
  {type:'movie', title:'Zero Dark Thirty', number:[0, 30]},
  {type:'movie', title:'Zero for Conduct', number:0},
  {type:'music', title:'65daysofstatic - 65 Doesn\'t Understand You', number:65},
  {type:'music', title:'Africa HiTech - 93 Million Miles', distance:'93000000 miles'},
  {type:'music', title:'Blur - 1992', date:'1992'},
  {type:'music', title:'Blur - Song 2', number:2},
  {type:'music', title:'Coldplay - Yellow', color:'ffff00'},
  {type:'music', title:'Crystal Castles - 1991', number:1991, date:'1991'},
  {type:'music', title:'Dean Blunt - 100', number:100},
  {type:'music', title:'Deltron 3030 - 3030', date:'3030', number:3030},
  {type:'music', title:'Drake - 6 Man', number:6},
  {type:'music', title:'Eiffel 65 - Blue (Da Ba Dee)', color: '0000ff'},
  {type:'music', title:'Emicida - 9 CIRCULOS', number:9},
  {type:'music', title:'Emika - 3 Hours', duration: '3h'},
  {type:'music', title:'FKA Twigs - 2 Weeks', duration:'2w'},
  {type:'music', title:'Four Tet - 128 Harps', number:128},
  {type:'music', title:'General Midi - 4 Million Ways', number:4000000},
  {type:'music', title:'Iron Maiden - The Number of the Beast', number:666},
  {type:'music', title:'Jay-Z - 99 Problems', number:99},
  {type:'music', title:'Kindness - 8th Wonder', number:8},
  {type:'music', title:'Linkin Park - One Step Closer', distance:"1 step"},
  {type:'music', title:'Mellowhype - 67', number:67},
  {type:'music', title:'Moderat - 3 Minutes Of', duration:"3m"},
  {type:'music', title:'Mr. Carmack - 2084', date:'2084'},
  {type:'music', title:'Nickelback - Million Miles An Hour', number:1000000, speed:'1000000 miles hour'},
  {type:'music', title:'Nine Inch Nails - 1,000,000', number:1000000},
  {type:'music', title:'Noir Désir - 666.667 Club', number:666667},
  {type:'music', title:'Odezenne - 1 gramme', mass:'1g'},
  {type:'music', title:'Paul Simon - 50 Ways To Leave Your Lover', number:50},
  {type:'music', title:'Phantogram - 10,000 Claps', number:10000},
  {type:'music', title:'POND - 30000 Megatons', mass:'30000000000000kg', number:30000},
  {type:'music', title:'Propellerheads - 360°? (Oh Yeah?)', number:360},
  {type:'music', title:'Red Hot Chili Peppers - 21st Century', date:'2001', number:21},
  {type:'music', title:'Stupeflip - 1993', date:'1993'},
  {type:'music', title:'Stupeflip - 35 Animaux Morts', number:35},
  {type:'music', title:'The Proclaimers - I\'m Gonna Be (500 Miles)', number:500, distance:"500 miles"},
  {type:'music', title:'The Rolling Stones - Paint It, Black', color: '000000'},
  {type:'music', title:'The Wombats - 1996', date:'1996'},
  {type:'music', title:'Two Fingers - 101 South', number:101},
  {type:'music', title:'Vanessa Carlton - A Thousand Miles', number:1000, distance:"1000 miles"},
  {type:'show', title:'13 Reasons Why', number:13},
  {type:'show', title:'Altered Carbon', element:6},
  {type:'show', title:'Brooklyn 99', number:99},
  {type:'show', title:'Neon Genesis Evangelion', element:10},
  {type:'show', title:'Penny Dreadful', price:"0.01 GBP"},
  {type:'show', title:'Second Noah', ordinal:2},
  {type:'show', title:'Silicon Valley', element:14},
  {type:'show', title:'Six Feet Under', distance: '6 feet'},
  {type:'show', title:'The 10th Kingdom', number:10, ordinal:10},
  {type:'show', title:'The Six Million Dollar Man', number:6000000, price:'6000000 USD'},
  {type:'show', title:'Two and a Half Men', number:2.5},
  {type:'vgame', title:'50 Cent: Blood on the Sand', number: 50, price:'0.50 USD'},
  {type:'vgame', title:'Battlefield 1942', date: '1942', number:1942},
  {type:'vgame', title:'Battlefield 2142', date: '2142', number:2142},
  {type:'vgame', title:'Cyberpunk 2077', date: '2077', number:2077},
  {type:'vgame', title:'Indigo Prophecy', color:'3F00FF'},
  {type:'vgame', title:'Pokémon Black Version', color:'000000'},
  {type:'vgame', title:'Pokémon Blue Version', color:'0000FF'},
  {type:'vgame', title:'Pokémon Emerald Version', color:'50C878'},
  {type:'vgame', title:'Pokémon Gold Version', color:'FFD700', element:79},
  {type:'vgame', title:'Pokémon Green Version', color:'00FF00'},
  {type:'vgame', title:'Pokémon Pearl Version', color:'EAE0C8'},
  {type:'vgame', title:'Pokémon Platinum Version', color:'E5E4E2'},
  {type:'vgame', title:'Pokémon Red Version', color:'FF0000'},
  {type:'vgame', title:'Pokémon Ruby Version', color:'E0115F'},
  {type:'vgame', title:'Pokémon Sapphire Version', color:'0F52BA'},
  {type:'vgame', title:'Pokémon Silver Version', color:'C0C0C0', element:47},
  {type:'vgame', title:'Pokémon White Version', color:'FFFFFF'},
  {type:'vgame', title:'Pokémon Yellow Version', color:'FFFF00'},
];
