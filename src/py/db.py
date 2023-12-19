from math import pi, inf
from entry import Book, Movie, Music, TVShow, VideoGame

entries = [
    #Book('Light in August', date="m=8"),
    Book('1919', number=1919, date='1919'),
    Book('2001: A Space Odyssey', number=2001, date='2001'),
    Book('2666', number=2666),
    Book('A Clockwork Orange', color='FF8000'),
    Book('A Tale of Two Cities', number=2),
    Book('A Thousand Acres', number=1000),
    Book('Catch-22', number=22),
    Book('Fahrenheit 451', number=451),
    Book('Fifth Business', ordinal=5),
    Book('Five Weeks in a Balloon', number=5, duration='5w'),
    Book('From the Earth to the Moon', distance='384400km'),
    Book('G.', letter='G'),
    Book('I, Claudius', letter='I'),
    Book('I, Robot', letter='I'),
    Book('In the First Circle', ordinal=1),
    Book('Life of Pi', number=pi),
    Book('My Name is Red', color='FF0000'),
    Book('Nine Stories', number=9),
    Book('Nineteen Eighty-Four', number=1984, date='1984'),
    Book('One Flew Over the Cuckoo\'s Nest', number=1),
    Book('One Hundred Years of Solitude', number=100, duration='100y'),
    Book('One Thousand and One Nights', number=1001),
    Book('Seven against Thebes', number=7),
    Book('Six Characters in Search of an Author', number=6),
    Book('The 42nd Parallel', number=42, ordinal=42),
    Book('The Blue Flower', color='0000FF'),
    Book('The Color Purple', color='800080'),
    Book('The Fifth Elephant', number=5, ordinal=5),
    Book('The Golden Notebook', color='FFD700'),
    Book('The House of the Seven Gables', number=7),
    Book('The Name of the Rose', color='FF0080'),
    Book('The Nine Tailors', number=9),
    Book('The Scarlet Letter', color='FF2400'),
    Book('The Third Policeman', ordinal=3),
    Book('The Third Wedding', ordinal=3),
    Book('The Thirty-Nine Steps', number=39),
    Book('The Three Musketeers', number=3),
    Book('The Two Sources of Morality and Religion', number=2),
    Book('The Two Towers', number=2),
    Book('Twelfth Night', ordinal=12),
    Book('Two Hundred Years Together', number=200, duration='200y'),
    Book('V.', letter='V'),
    Book('White Teeth', color='FFFFFF'),
    Book('Woman at Point Zero', number=0),
    Movie('\'71', date='1971', number=71),
    Movie('0.5mm', number=0.5, distance='0.5mm'),
    Movie('10 MPH', number=10, speed='10 miles h'),
    Movie('10 Things I Hate About You', number=10),
    Movie('10 Years Later', number=10, date='y+10'),
    Movie('10, 000 BC', number=10000, date='-10000'),
    Movie('100 Feet', number=100, distance='100ft'),
    Movie('10000 Years Later', number=10000, date='y+10000'),
    Movie('12 Angry Men', number=12),
    Movie('12 Years a Slave', number=12, duration='12y'),
    Movie('120 BPM', number=120),
    Movie('125 Years Memory', number=125, duration='125y'),
    Movie('127 Hours', number=127, duration='127h'),
    Movie('13 Hours: The Secret Soldiers of Benghazi', number=13, duration='13h'),
    Movie('14 Days to Life', duration='14d', number=14),
    Movie('1492: Conquest of Paradise', date='1492', number=1492),
    Movie('15 Minutes', number=15, duration='15m'),
    Movie('15th August', number=15, ordinal=15),
    Movie('17 Again', number=17),
    Movie('17th Precinct', number=17, ordinal=17),
    Movie('18 Again!', number=18),
    Movie('1917', number=1917, date='1917'),
    Movie('1941', number=1941, date='1941'),
    Movie('1984', number=1984, date='1984'),
    Movie('20 Centimeters', distance='20cm', number=20),
    Movie('20 Feet from Stardom', number=20, distance='20ft'),
    Movie('20 Million Miles to Earth', number=20000000, distance='20000000mi'),
    Movie('20, 000 Leagues Under the Sea', number=20000, distance='20000leagues'),
    Movie('200 Cigarettes', number=200),
    Movie('200 Pounds Beauty', number=200, mass='200lb', year_hint=2023),
    Movie('2001: A Space Odyssey', date='2001', number=2001),
    Movie('2010: The Year We Make Contact', date='2010', number=2010),
    Movie('2012', number=2012, date='2012'),
    Movie('2046', number=2046, date='2046'),
    Movie('21 Grams', mass='21g', number=21),
    Movie('21 Jump Street', number=21),
    Movie('21', number=21),
    Movie('24 Hour Party People', number=24, duration='24h'),
    Movie('25th Hour', number=25, ordinal=25),
    Movie('26 Years', number=26, duration='26y'),
    Movie('27 Dresses', number=27),
    Movie('28 Days Later', date='d+28', number=28, duration='28d'),
    Movie('28 Weeks Later', date='w+28', number=28, duration='28w'),
    Movie('29th Street', number=29, ordinal=29),
    Movie('3 Days to Kill', number=3, duration='3d'),
    Movie('30 Days of Night', number=30, duration='30d'),
    Movie('30 Minutes or Less', number=30, duration='30m'),
    Movie('300', number=300),
    Movie('31', number=31),
    Movie('35 Shots of Rum', number=35),
    Movie('365 Days', number=365, duration='365d'),
    Movie('36th Precinct', number=36, ordinal=36),
    Movie('37 Seconds', number=37, duration='37s'),
    Movie('40 Days & 40 Nights', number=40, duration='40d'),
    Movie('42nd Street', number=42, ordinal=42),
    Movie('47 Ronin', number=47),
    Movie('48 Hrs.', duration='48h', number=48),
    Movie('5 Centimeters per Second', distance='5cm', number=5, speed='5 cm s'),
    Movie('50 First Dates', number=50),
    Movie('50/50', number=50),
    Movie('500 Days of Summer', number=500, duration='500d'),
    Movie('57000 km entre nous', number=57000, distance='57000km'),
    Movie('59 Seconds', number=59, duration='59s'),
    Movie('8 Mile', number=8, distance="8mi"),
    Movie('8 Seconds', duration='8s', number=8),
    Movie('88 Minutes', duration='88m', number=88),
    Movie('8mm', number=8, distance='8mm'),
    Movie('9/11', number=911, date='September 11, 2001', year_hint=2002),
    Movie('9½ Weeks', number=9.5, duration='9.5w'),
    Movie('99 Francs', number=99, price='99 FRF'),
    Movie('A Clockwork Orange', color='ffa500'),
    Movie('A Thousand Billion Dollars', number=1000000000000, price="1000000000000 USD"),
    Movie('American History X', letter='x'),
    Movie('Apollo 13', number=13),
    Movie('Aquaman', color='00FFFF'),
    Movie('Around the World in 80 Days', number=80, duration='80d', distance='40075km', speed='40075km 80d'),
    Movie('Arsenic and Old Lace', element=33),
    Movie('Avengers: Infinity War', number=inf),
    Movie('Black Swan', color='000000'),
    Movie('Blade Runner 2049', number=2049, date='2049'),
    Movie('Blue is the Warmest Color', color='0000ff'),
    Movie('Blue Velvet', color='0000ff'),
    Movie('Catch-22', number=22),
    Movie('Dial M for Murder', letter='m'),
    Movie('District 9', number=9),
    Movie('Easy A', letter='a'),
    Movie('Eighth Grade', number=8, ordinal=8),
    Movie('Fahrenheit 451', number=451),
    Movie('Fahrenheit 9/11', number=911, date='September 11, 2001'),
    Movie('Fantasia 2000', number=2000),
    Movie('Fantastic Four', number=4, year_hint=2015),
    Movie('Federico Fellini\'s 8½', number=8.5),
    Movie('Five Feet Apart', number=5, distance='5ft'),
    Movie('Five Grand', number=5, price='5000 USD'),
    Movie('Five Minutes of Heaven', number=5, duration='5m'),
    Movie('Friday the 13th', number=13, ordinal=13),
    Movie('From Dusk till Dawn', duration='12h'),
    Movie('G-Force', letter='g'),
    Movie('Goldfinger', color='FFD700', element=79),
    Movie('Gone in 60 Seconds', duration='60s', number=60),
    Movie('Helium', element=2),
    Movie('House of D', letter='d', year_hint=2004),
    Movie('How to Lose a Guy in 10 Days', duration='10d', number=10),
    Movie('I Am Number Four', number=4),
    Movie('I, Robot', letter='i'),
    Movie('Independance Day', date='July 4, 1776'),
    Movie('Iron Man', element=26),
    Movie('Jackie Brown', color='964B00'),
    Movie('John Q', letter='q'),
    Movie('K-19: The Widowmaker', number=19, letter='k'),
    Movie('K-PAX', letter='k'),
    Movie('Lilac Time', color='C8A2C8'),
    Movie('Lithivm', element=3),
    Movie('M - Eine Stadt sucht einen Mörder', letter='m', year_hint=1931),
    Movie('Marathon Man', distance='42.195km'),
    Movie('Mercury Rising', element=80),
    Movie('Million Dollar Baby', number=1000000, price='1000000 USD'),
    Movie('Mood Indigo', color='3F00FF'),
    Movie('Movie 43', number=43),
    Movie('Ms .45', number=0.45),
    Movie('Nine Miles Down', number=9, distance='9mi'),
    Movie('Ocean\'s Eleven', number=11),
    Movie('Olive', color='808000'),
    Movie('On the Nickel', element=28),
    Movie('One Day', number=1, duration='1d'),
    Movie('One Hour Photo', duration='1h'),
    Movie('One Hundred and One Dalmatians', number=101),
    Movie('OSS 117: Cairo, Nest of Spies', number=117),
    Movie('Oxygen', element=8),
    Movie('Pi', number=pi),
    Movie('Planet 51', number=51),
    Movie('Pretty in Pink', color='FFC0CB'),
    Movie('Purple Rain', color='800080'),
    Movie('Salmon Fishing in the Yemen', color='FA8072'),
    Movie('Sapphire', color='0F52BA'),
    Movie('Se7en', number=7),
    Movie('Seven and a Half', number=7.5),
    Movie('Seven Days in May', duration='7d', number=7),
    Movie('Seven Pounds', mass='7lb', number=7, price='7 GBP'),
    Movie('Seven Samurai', number=7),
    Movie('Seven Seconds', duration='7s', number=7),
    Movie('Seven Years in Tibet', number=7, duration='7y'),
    Movie('Silver Linings Playbook', color='C0C0C0', element=47),
    Movie('Sixteen Candles', number=16),
    Movie('Soylent Green', color='00ff00'),
    Movie('Super 8', number=8),
    Movie('TAU', number=pi*2),
    Movie('Ten Seconds to Hell', number=10, duration='10s'),
    Movie('The 11th Hour', number=11, ordinal=11),
    Movie('The 12th Man', number=12, ordinal=12),
    Movie('The 39 Steps', number=39, distance="39steps", year_hint=1935),
    Movie('The 40 Year-Old Virgin', number=40, duration='40y'),
    Movie('The 400 Blows', number=400),
    Movie('The 51st State', number=51, ordinal=51),
    Movie('The 601st Phone Call', number=601, ordinal=601),
    Movie('The Blue Lagoon', color='ACE5EE'),
    Movie('The Crimson Rivers', color='DC143C'),
    Movie('The Day After Tomorrow', date='d+2'),
    Movie('The Deadly Mantis', color='74C365'),
    Movie('The Fifth Element', number=5, ordinal=5),
    Movie('The Fourth Protocol', number=4, ordinal=4),
    Movie('The Green Mile', distance='1mi', color='00ff00'),
    Movie('The Grey', color='808080'),
    Movie('The Knot', speed='1 M h'),
    Movie('The Lord of the Rings: The Two Towers', number=2),
    Movie('The Name of the Rose', color='FF007F'),
    Movie('The Next Three Days', duration='3d', number=3),
    Movie('The Ninth Gate', number=9, ordinal=9),
    Movie('The Number 23', number=23),
    Movie('The Scarlet Letter', color='FF2400'),
    Movie('The Seventh Seal', number=7, ordinal=7),
    Movie('The Sixth Sense', number=6, ordinal=6),
    Movie('The Third Man', number=3, ordinal=3),
    Movie('Thirteen Days', number=12, duration='13d'),
    Movie('Three Seconds', number=3, duration='3s'),
    Movie('THX 1138', number=1138),
    Movie('Tin Men', element=50),
    Movie('Titanium', element=22),
    Movie('Tomorrowland', date='d+1'),
    Movie('Two Seconds', number=2, duration='2s'),
    Movie('Two Weeks Notice', number=2, duration='2w'),
    Movie('Ultraviolet', color='7F00FF'),
    Movie('V for Vendetta', letter='v'),
    Movie('W.', letter='w', year_hint=2008),
    Movie('WALL·E', letter='e'),
    Movie('Weightless', mass='0g'),
    Movie('X: First Class', ordinal=1),
    Movie('Year One', date='0001'),
    Movie('Yellow Submarine', color='FFFF00'),
    Movie('Z', letter='Z', year_hint=1969),
    Movie('Zero for Conduct', number=0),
    Music('65daysofstatic', number=65, duration='65d'),
    Music('alt-J', letter='J'),
    Music('blink-182', number=182),
    Music('Blood Orange', color='C63927'),
    Music('Blood Red Shoes', color='660000'),
    Music('Blue Öyster Cult', color='0000FF'),
    Music('Deltron 3030', date='3030', number=3030),
    Music('Eiffel 65', number=65),
    Music('Four Tet', number=4),
    Music('Green Day', color='00FF00'),
    Music('Iron Maiden', element=26),
    Music('Jay-Z', letter='Z'),
    Music('KRS-One', number=1),
    Music('L7', number=7, letter='L'),
    Music('Nickelback', price='0.05 USD'),
    Music('Nine Inch Nails', distance='9in'),
    Music('Poésie Zéro', number=0),
    Music('Red Hot Chili Peppers', color='FF0000'),
    Music('Sum 41', number=41),
    Music('Thirty Seconds to Mars', number=30, duration='30s'),
    Music('Two Fingers', number=2),
    TVShow('100 Deeds for Eddie McDowd', number=100),
    TVShow('13 Reasons Why', number=13),
    TVShow('87th Precinct', number=87, ordinal=87),
    TVShow('Altered Carbon', element=6),
    TVShow('Brooklyn 99', number=99),
    TVShow('Neon Genesis Evangelion', element=10),
    TVShow('Penny Dreadful', price="0.01 GBP"),
    TVShow('Second Noah', ordinal=2),
    TVShow('Silicon Valley', element=14),
    TVShow('Six Feet Under', distance='6ft'),
    TVShow('The 10th Kingdom', number=10, ordinal=10),
    TVShow('The Six Million Dollar Man', number=6000000, price='6000000 USD'),
    TVShow('Two and a Half Men', number=2.5),
    VideoGame('50 Cent: Blood on the Sand', number=50, price='0.50 USD'),
    VideoGame('Battlefield 1942', date='1942', number=1942),
    VideoGame('Battlefield 2142', date='2142', number=2142),
    VideoGame('Cyberpunk 2077', date='2077', number=2077),
    VideoGame('Indigo Prophecy', color='3F00FF'),
    VideoGame('Pokémon Black Version', color='000000'),
    VideoGame('Pokémon Blue Version', color='0000FF'),
    VideoGame('Pokémon Emerald Version', color='50C878'),
    VideoGame('Pokémon Gold Version', color='FFD700', element=79),
    VideoGame('Pokémon Green Version', color='00FF00'),
    VideoGame('Pokémon Pearl Version', color='EAE0C8'),
    VideoGame('Pokémon Platinum Version', color='E5E4E2'),
    VideoGame('Pokémon Red Version', color='FF0000'),
    VideoGame('Pokémon Ruby Version', color='E0115F'),
    VideoGame('Pokémon Sapphire Version', color='0F52BA'),
    VideoGame('Pokémon Silver Version', color='C0C0C0', element=47),
    VideoGame('Pokémon White Version', color='FFFFFF'),
    VideoGame('Pokémon Yellow Version', color='FFFF00'),
]
