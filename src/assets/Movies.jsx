const Movies = [
    {
        "title": "The Shawshank Redemption",
        "img": "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_.jpg",
        "rank": "1",
        "id": "tt0111161",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        "title": "The Godfather",
        "img": "https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg",
        "rank": "2",
        "id": "tt0068646",
        "description": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son."
    },
    {
        "title": "The Godfather: Part II",
        "img": "https://m.media-amazon.com/images/M/MV5BMTQyMDc0ODY1OV5BMl5BanBnXkFtZTgwMDI4NjIwMjE@._V1_.jpg",
        "rank": "3",
        "id": "tt0071562",
        "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
    },
    {
        "title": "Pulp Fiction",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBhDCgp8Ydo13KZgihEMbQ6yxfVtYZ6gPHdqMBkz8Nw&s",
        "rank": "4",
        "id": "tt0110912",
        "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
        "title": "The Good, the Bad and the Ugly",
        "img": "https://m.media-amazon.com/images/M/MV5BN2ZmNWUzNTQtMDY2OS00YjBmLWI5NTQtMzg5MDk0MzM5OTc2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        "rank": "5",
        "id": "tt0060196",
        "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."
    },
    {
        "title": "The Dark Knight",
        "img": "https://www.digitaltrends.com/wp-content/uploads/2023/07/The-Drk-Knight-Jokr-nd-Batman.jpg?fit=1200%2C675&p=1",
        "rank": "6",
        "id": "tt0468569",
        "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
        "title": "12 Angry Men",
        "img": "https://assets.mubicdn.net/images/artworks/330183/images-original.png?1625164279",
        "rank": "7",
        "id": "tt0050083",
        "description": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence."
    },
    {
        "title": "Schindler's List",
        "img": "https://i.guim.co.uk/img/media/208d00c732eeed823ec55afe35faf252843e0c59/0_47_2520_1512/master/2520.jpg?width=1200&quality=85&auto=format&fit=max&s=ead61e9d36b0cb652bb0e71da28aadd2",
        "rank": "8",
        "id": "tt0108052",
        "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "img": "https://variety.com/wp-content/uploads/2017/01/lord-of-the-rings-return-of-the-king.jpg",
        "rank": "9",
        "id": "tt0167260",
        "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
    },
    {
        "title": "Fight Club",
        "img": "https://broadly-images.vice.com/images/2017/01/05/how-fight-club-became-the-bible-of-mens-rights-activists-and-puas-body-image-1483626608.jpg",
        "rank": "10",
        "id": "tt0137523",
        "description": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
    },
    {
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "img": "https://insidethemagic.net/wp-content/uploads/2021/04/darth-vader-holding-lightsaber-759x400.jpeg",
        "rank": "11",
        "id": "tt0080684",
        "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett."
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "img": "https://cdn.britannica.com/34/201734-050-2B1ECD3E/Dominic-Monaghan-Merry-scene-Elijah-Wood-Frodo.jpg",
        "rank": "12",
        "id": "tt0120737",
        "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
    },
    {
        "title": "One Flew Over the Cuckoo's Nest",
        "img": "https://m.media-amazon.com/images/M/MV5BMTMyMzc1OTI1MF5BMl5BanBnXkFtZTcwNjUzNTIwNA@@._V1_.jpg",
        "rank": "13",
        "id": "tt0073486",
        "description": "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients."
    },
    {
        "title": "Inception",
        "img": "https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg",
        "rank": "14",
        "id": "tt1375666",
        "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
        "title": "Goodfellas",
        "img": "https://classic.exame.com/wp-content/uploads/2020/09/Casual-cultura-GoodFellas-2020-09.jpg?quality=70&strip=info&w=1024",
        "rank": "15",
        "id": "tt0099685",
        "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate."
    },
    {
        "title": "Star Wars",
        "img": "https://cdn.britannica.com/19/187419-050-94D978BD/Mark-Hamill-Luke-Skywalker-Yoda-Irvin-Kershner.jpg",
        "rank": "16",
        "id": "tt0076759",
        "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
    },
    {
        "title": "Seven Samurai",
        "img": "https://ychef.files.bbci.co.uk/1280x720/p06pvdgg.jpg",
        "rank": "17",
        "id": "tt0047478",
        "description": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves."
    },
    {
        "title": "Forrest Gump",
        "img": "https://www.hollywoodreporter.com/wp-content/uploads/2019/06/forrest_gump-photofest_still_2-h_2019.jpg",
        "rank": "18",
        "id": "tt0109830",
        "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
    },
    {
        "title": "The Matrix",
        "img": "https://t.ctcdn.com.br/2fX3iJYwRuwyAXpHKID6_zXBB1o=/1200x675/smart/i4976.jpeg",
        "rank": "19",
        "id": "tt0133093",
        "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    {
        "title": "The Lord of the Rings: The Two Towers",
        "img": "https://www.hollywoodreporter.com/wp-content/uploads/2017/12/the_two_towers_-_h_-_2002.jpg",
        "rank": "20",
        "id": "tt0167261",
        "description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard."
    },
    {
        "title": "Cidade de Deus",
        "img": "https://assets.mubicdn.net/images/film/160/image-w1280.jpg?1571397897",
        "rank": "21",
        "id": "tt0317248",
        "description": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin."
    },
    {
        "title": "Se7en",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzSQyqx_K-jHZ1b1XjEVRuuNk3oL9r4pilbP4_MwcEg&s",
        "rank": "22",
        "id": "tt0114369",
        "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
    },
    {
        "title": "The Silence of the Lambs",
        "img": "https://ew.com/thmb/8J_HjFn87mm6_AEU05DCO6vhO3Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/silence20of20the20lambs_0-c9cff20e8d054953873bf9bf609d9def.jpg",
        "rank": "23",
        "id": "tt0102926",
        "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
    },
    {
        "title": "Once Upon a Time in the West",
        "img": "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/once-upon-a-time-in-the-west-1969/Once-Upon-Time-West-image.jpg",
        "rank": "24",
        "id": "tt0064116",
        "description": "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad."
    },
    {
        "title": "Casablanca",
        "img": "https://i.cbc.ca/1.4413516.1543602611!/httpImage/hi-casablanca-2676350.jpg",
        "rank": "25",
        "id": "tt0034583",
        "description": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco."
    },
    {
        "title": "The Usual Suspects",
        "img": "https://i.guim.co.uk/img/media/63c29c157dcefca7a6afc793160c760d0897d619/52_116_1940_1164/master/1940.jpg?width=1200&quality=85&auto=format&fit=max&s=c917dba52ebf79b7264c82a20064db39",
        "rank": "26",
        "id": "tt0114814",
        "description": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup."
    },
    {
        "title": "Raiders of the Lost Ark",
        "img": "https://www.denofgeek.com/wp-content/uploads/2021/06/Indiana-Jones-1.jpg?fit=1280%2C720",
        "rank": "27",
        "id": "tt0082971",
        "description": "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers."
    },
    {
        "title": "Rear Window",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzsb3nK3hqR8Fp-iaD1-WUh3sbhKWjsGIYdIQU5Q5oA&s",
        "rank": "28",
        "id": "tt0047396",
        "description": "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder."
    },
    {
        "title": "It's a Wonderful Life",
        "img": "https://m.media-amazon.com/images/S/pv-target-images/e871cc723cf7f73a2efebdaa76108337f9af720876c7c7648265f540ecd93ca9._SX1080_FMjpg_.jpg",
        "rank": "29",
        "id": "tt0038650",
        "description": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed."
    },
    {
        "title": "Psycho",
        "img": "https://www.justwatch.com/images/backdrop/253859137/s640/psycho/psycho",
        "rank": "30",
        "id": "tt0054215",
        "description": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother."
    },{
        "title": "Léon: The Professional",
        "img": "https://m.media-amazon.com/images/S/pv-target-images/a9aa383347b018b10041f80fe59d9d6b4b81043a8f882574075a4e7291841ac8.jpg",
        "rank": "31",
        "id": "tt0110413",
        "description": "A professional assassin takes in a young girl after her family is killed by corrupt police officers. As their bond grows, they become entangled in a dangerous game of revenge and survival."
    },
    {
        "title": "Sunset Blvd.",
        "img": "https://m.media-amazon.com/images/M/MV5BMTk5Mzg2MTk2N15BMl5BanBnXkFtZTYwMzIxODQ2._V1_.jpg",
        "rank": "32",
        "id": "tt0043014",
        "description": "A struggling screenwriter gets involved with a faded silent film star who dreams of making a comeback in Hollywood. Their relationship takes dark twists as the past and present collide."
    },
    {
        "title": "American History X",
        "img": "https://images.bauerhosting.com/legacy/empire-tmdb/films/73/images/i9A0UMFg1hI2kLyCCwnmSbpT2cd.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
        "rank": "33",
        "id": "tt0120586",
        "description": "A former neo-nazi skinhead tries to prevent his younger brother from following in his footsteps while dealing with the consequences of his own violent past."
    },
    {
        "title": "Apocalypse Now",
        "img": "https://cdn.ome.lt/f6mgA1vPMOFCvxREdsNoQflVXSU=/fit-in/837x500/smart/uploads/conteudo/fotos/apocalypse-now-1.jpg",
        "rank": "34",
        "id": "tt0078788",
        "description": "During the Vietnam War, a U.S. Army captain is sent on a dangerous mission to assassinate a renegade colonel who has gone insane and established his own kingdom in the jungle."
    },
    {
        "title": "Terminator 2: Judgment Day",
        "img": "https://static01.nyt.com/images/2020/08/10/arts/31comfort-terminator4/merlin_9892947_147d19ea-d1af-4bb7-b27f-5bfeab6cc7d4-superJumbo.jpg",
        "rank": "35",
        "id": "tt0103064",
        "description": "A cyborg from the future is sent back in time to protect a young boy from a more advanced cyborg assassin, leading to a battle for the future of humanity."
    },
    {
        "title": "Saving Private Ryan",
        "img": "https://images.bauerhosting.com/legacy/empire-tmdb/films/857/images/4y5TDUZlqUmWWtjTAznWb6CFpzt.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
        "rank": "36",
        "id": "tt0120815",
        "description": "During World War II, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action, showcasing the brutal realities of war."
    },
    {
        "title": "Memento",
        "img": "https://uploads.jovemnerd.com.br/wp-content/uploads/polaroiddddsfa1.jpg",
        "rank": "37",
        "id": "tt0209144",
        "description": "A man with short-term memory loss tries to solve the mystery of his wife's murder by relying on notes, tattoos, and Polaroid photos, leading to a mind-bending journey of truth and deception."
    },
    {
        "title": "City Lights",
        "img": "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/great-movie-city-lights-1931/city-lights-image-7.jpg",
        "rank": "38",
        "id": "tt0021749",
        "description": "A silent romantic comedy-drama about a tramp who falls in love with a blind flower girl and goes to great lengths to help her regain her sight, showcasing themes of love, sacrifice, and resilience."
    },
    {
        "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "img": "https://virginiafilmfestival.org/wp-content/uploads/2014/09/DrStrangeloveFINAL.jpg",
        "rank": "39",
        "id": "tt0057012",
        "description": "A satirical black comedy about the Cold War era, where a series of misunderstandings and absurdities lead to a nuclear crisis, highlighting the absurdity and danger of unchecked power."
    },
    {
        "title": "Alien",
        "img": "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/Alien-1979-Ellen-Ripley-Xenomorph-Fog-Ending.jpg",
        "rank": "40",
        "id": "tt0078748",
        "description": "A space crew on a distant planet encounters a deadly alien creature that begins hunting them down one by one, leading to a tense and terrifying battle for survival."
    },
    {
        "title": "Modern Times",
        "img": "https://cdn.britannica.com/61/59661-050-F8A3B082/Charlie-Chaplin-Modern-Times.jpg",
        "rank": "41",
        "id": "tt0027977",
        "description": "A silent comedy-drama about a factory worker who struggles to adapt to the modern industrialized world, highlighting themes of dehumanization, automation, and the pursuit of happiness."
    },
    {
        "title": "Spirited Away",
        "img": "https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2021/07/30/030310_1350926.png.1500x1005_q95_crop-smart_upscale.png",
        "rank": "42",
        "id": "tt0245429",
        "description": "A young girl becomes trapped in a mysterious and magical world populated by spirits, witches, and strange creatures, embarking on a quest to save her parents and find her way back home."
    },
    {
        "title": "North by Northwest",
        "img": "https://cdn.britannica.com/99/176699-050-797B541E/Cary-Grant-North-Northwest-Alfred-Hitchcock.jpg",
        "rank": "43",
        "id": "tt0053125",
        "description": "A case of mistaken identity leads to a thrilling cross-country chase as an innocent man is pursued by spies, showcasing Hitchcock's mastery of suspense and adventure."
    },
    {
        "title": "Back to the Future",
        "img": "https://ew.com/thmb/PegxGThMrH7YnbnFkkNrHYC7Rag=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/back-to-the-future_0-cd25692758ab4541a44f70cff6283c85.jpg",
        "rank": "44",
        "id": "tt0088763",
        "description": "A teenager accidentally travels back in time to the 1950s and must ensure his parents fall in love to preserve his own existence, leading to a series of comedic and adventurous misadventures."
    },
    {
        "title": "Life Is Beautiful",
        "img": "https://cdn.cnn.com/cnnnext/dam/assets/200320084342-life-is-beautiful-super-tease.jpg",
        "rank": "45",
        "id": "tt0118799",
        "description": "A touching and poignant tale set during World War II, where a father uses humor and imagination to shield his young son from the horrors of a concentration camp, showcasing the power of love and resilience."
    },
    {
        "title": "The Shining",
        "img": "https://m.media-amazon.com/images/M/MV5BMTg0MzkzODUwNV5BMl5BanBnXkFtZTgwODM1MjEwNDI@._V1_.jpg",
        "rank": "46",
        "id": "tt0081505",
        "description": "A family heads to an isolated hotel for the winter where an evil and supernatural presence influences the father into violence, while his psychic son sees horrific visions, leading to a descent into madness."
    },
    {
        "title": "The Pianist",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh5gGjdspfRID5YFGtxV0BJ5-OkdP5ARlpg38Lp_oVjg&s",
        "rank": "47",
        "id": "tt0253474",
        "description": "Based on a true story, a Jewish pianist in Warsaw survives the Holocaust by hiding in the ruins of the city, showcasing the triumph of the human spirit in the face of unimaginable adversity."
    },
    {
        "title": "Citizen Kane",
        "img": "https://cdn.britannica.com/50/59650-050-EEBB1C99/Orson-Welles-Citizen-Kane.jpg",
        "rank": "48",
        "id": "tt0033467",
        "description": "A groundbreaking and innovative film that explores the life of a wealthy newspaper tycoon through the eyes of those who knew him, unraveling the mystery of his final words, 'Rosebud'."
    },
    {
        "title": "The Departed",
        "img": "https://m.media-amazon.com/images/M/MV5BMTk3OTE2ODM1NF5BMl5BanBnXkFtZTcwMjc4MzMyNw@@._V1_.jpg",
        "rank": "49",
        "id": "tt0407887",
        "description": "A gripping crime drama about an undercover cop and a mole in the police force, both trying to uncover each other's identities while navigating a dangerous web of corruption and betrayal."
    },
    {
        "title": "M",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3kHcat4BThA6lqALVVJ6vpIHniyGF8f1dQP3Gq5X7w&s",
        "rank": "50",
        "id": "tt0022100",
        "description": "A psychological thriller about a city gripped by fear as a child murderer stalks the streets, leading to a desperate manhunt and a tense showdown between the police and the criminal underworld."
    },{
        "title": "Paths of Glory",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Qvg3NYVY792srInFRBiCAgbdAnbXEFcrPZo2Ks2CVw&s",
        "rank": "51",
        "id": "tt0050825",
        "description": "A powerful anti-war film about a group of soldiers who are court-martialed for cowardice during World War I, exposing the brutal and senseless nature of war and the sacrifices of ordinary soldiers."
    },
    {
        "title": "Vertigo",
        "img": "https://m.media-amazon.com/images/M/MV5BMjgyMzU4NTY3NV5BMl5BanBnXkFtZTcwOTYzMjAyNw@@._V1_.jpg",
        "rank": "52",
        "id": "tt0052357",
        "description": "A psychological thriller about a retired police detective who becomes obsessed with a mysterious woman, leading to a dizzying exploration of identity, deception, and obsession."
    },
    {
        "title": "Django Unchained",
        "img": "https://ew.com/thmb/ArXpGUSm5_e8jjDL5ip-s4R-K7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/django-unchained_510x3171-ce6caf24667e447ea8714c411b720d8b.jpg",
        "rank": "53",
        "id": "tt1853728",
        "description": "A bounty hunter and a freed slave team up to rescue the latter's wife from a cruel plantation owner in the pre-Civil War South, blending revenge, redemption, and explosive action."
    },
    {
        "title": "Double Indemnity",
        "img": "https://media.npr.org/assets/img/2019/07/30/gettyimages-1065246004_wide-db14613126abfe5ba6d08af6ff286a087a92e33f.jpg",
        "rank": "54",
        "id": "tt0036775",
        "description": "A film noir classic about an insurance salesman and a seductive woman who plot to kill her husband for insurance money, leading to a web of deceit, betrayal, and fatal consequences."
    },
    {
        "title": "The Dark Knight Rises",
        "img": "https://www.pluggedin.com/wp-content/uploads/2019/12/thedarkknightrises-scaled.jpg",
        "rank": "55",
        "id": "tt1345836",
        "description": "The epic conclusion to Christopher Nolan's Batman trilogy, where the Dark Knight faces a new terrorist threat led by the ruthless Bane, testing his limits and ideals in a battle for Gotham's soul."
    },
    {
        "title": "Aliens",
        "img": "https://statcdn.fandango.com/MPX/image/NBCU_Fandango/799/183/aliens_v2.jpg",
        "rank": "56",
        "id": "tt0090605",
        "description": "A sci-fi action masterpiece where Ripley returns to a planet infested with deadly aliens, teaming up with a group of marines to confront the terrifying creatures and uncover corporate conspiracies."
    },
    {
        "title": "Taxi Driver",
        "img": "https://assets.mubicdn.net/images/artworks/549350/images-original.png?1686641711",
        "rank": "57",
        "id": "tt0075314",
        "description": "A haunting and gritty portrayal of urban alienation, following a mentally unstable Vietnam War veteran who becomes a taxi driver, descending into a world of violence and obsession."
    },
    {
        "title": "American Beauty",
        "img": "https://i0.wp.com/cinegrandiose.com/wp-content/uploads/2015/03/amer-2.png?fit=960%2C540&ssl=1",
        "rank": "58",
        "id": "tt0169547",
        "description": "A darkly comedic drama about a suburban family's unraveling, as a disillusioned father becomes infatuated with his daughter's friend, leading to a series of tragic and ironic events."
    },
    {
        "title": "The Green Mile",
        "img": "https://m.media-amazon.com/images/M/MV5BYzA4ZWRhNjktMTA3ZS00NDNiLThmMDMtNzdlYzk0ZjY2ZGFmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "rank": "59",
        "id": "tt0120689",
        "description": "Set on death row in a Southern prison, the lives of guards and inmates intertwine when a gentle giant with supernatural abilities arrives, challenging perceptions of justice, redemption, and humanity."
    },
    {
        "title": "Gladiator",
        "img": "https://cdn.theasc.com/Gladiator-Featured-crop.jpg",
        "rank": "60",
        "id": "tt0172495",
        "description": "A Roman general seeks vengeance against the corrupt emperor who murdered his family and sent him into slavery, rising as a gladiator to challenge tyranny and reclaim his honor."
    },
    {
        "title": "The Intouchables",
        "img": "https://images.mubicdn.net/images/film/89573/cache-122457-1649194960/image-w1280.jpg?size=800x",
        "rank": "61",
        "id": "tt1675434",
        "description": "Based on a true story, a wealthy quadriplegic hires a caregiver from the Parisian suburbs, sparking an unlikely friendship and a journey of laughter, healing, and human connection."
    },
    {
        "title": "WALL·E",
        "img": "https://lumiere-a.akamaihd.net/v1/images/image_481fdf8e.jpeg?region=0,0,3840,2160",
        "rank": "62",
        "id": "tt0910970",
        "description": "In a post-apocalyptic world, a lonely robot named WALL·E discovers a new purpose in life when he meets a sleek robot named EVE, embarking on a space adventure that restores hope for humanity."
    },
    {
        "title": "The Lives of Others",
        "img": "https://images.mubicdn.net/images/film/122/cache-25814-1547228576/image-w1280.jpg",
        "rank": "63",
        "id": "tt0405094",
        "description": "Set in East Germany before the fall of the Berlin Wall, a Stasi agent begins to question his loyalty and humanity while surveilling a playwright and his actress girlfriend, revealing the power of art and empathy."
    },
    {
        "title": "Toy Story 3",
        "img": "https://media.gazetadopovo.com.br/2011/02/75c5be213bb4c339d6caf9649dfecea0-gpLarge.jpg",
        "rank": "64",
        "id": "tt0435761",
        "description": "The beloved toys face an uncertain future as their owner prepares for college, leading to a heartwarming and adventurous journey of friendship, loyalty, and embracing change."
    },
    {
        "title": "The Great Dictator",
        "img": "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2016/12/the-great-dictator_1280x720.jpg",
        "rank": "65",
        "id": "tt0032553",
        "description": "Charlie Chaplin's iconic satire of Adolf Hitler and fascism, where a Jewish barber is mistaken for a dictator, leading to hilarious and poignant commentary on politics, power, and humanity."
    },
    {
        "title": "The Prestige",
        "img": "https://m.media-amazon.com/images/M/MV5BODc0MzkxOTg5N15BMl5BanBnXkFtZTcwODkzNDMyMw@@._V1_.jpg",
        "rank": "66",
        "id": "tt0482571",
        "description": "A mind-bending thriller about rival magicians in Victorian London, whose obsession with outdoing each other leads to dark secrets, deception, and a breathtaking revelation."
    },
    {
        "title": "A Clockwork Orange",
        "img": "https://m.media-amazon.com/images/M/MV5BMjI2MTU0OTkyOF5BMl5BanBnXkFtZTcwOTA4NzMyNQ@@._V1_.jpg",
        "rank": "67",
        "id": "tt0066921",
        "description": "A dystopian tale of youth rebellion and societal control, following a delinquent who undergoes experimental behavior modification, questioning free will, morality, and the nature of evil."
    },
    {
        "title": "Lawrence of Arabia",
        "img": "https://lwlies.com/wp-content/uploads/2016/08/lawrence-of-arabia-4k-restoration.jpg",
        "rank": "68",
        "id": "tt0056172",
        "description": "An epic biographical film about T.E. Lawrence's experiences in the Arabian Peninsula during World War I, exploring themes of identity, heroism, and the clash of cultures."
    },
    {
        "title": "Amélie",
        "img": "https://ammepapier.com.br/cdn/shop/articles/5699b52a1c9aaf91afca6eb42d717216.jpg?v=1687550261",
        "rank": "69",
        "id": "tt0211915",
        "description": "A whimsical romantic comedy set in Paris, where a shy and imaginative young woman embarks on a quest to bring joy to others while navigating her own journey of self-discovery and love."
    },
    {
        "title": "To Kill a Mockingbird",
        "img": "https://www.hollywoodreporter.com/wp-content/uploads/2016/02/to_kill_mockingbird_1962_11_-_h_2016.jpg",
        "rank": "70",
        "id": "tt0056592",
        "description": "Based on Harper Lee's novel, a lawyer in the racially divided South defends a black man falsely accused of rape, teaching his children valuable lessons about justice, compassion, and integrity."
    },
    {
        "title": "Reservoir Dogs",
        "img": "https://www.hollywoodreporter.com/wp-content/uploads/2021/06/M8DREDO_EC001.jpg?w=1296",
        "rank": "71",
        "id": "tt0105236",
        "description": "Quentin Tarantino's stylish and violent debut, where a group of criminals unravel during a botched heist, leading to betrayal, suspicion, and a tense standoff."
    },{
        "title": "Das Boot",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpovrHUVszr2dhNiYvUaLh-18-c1X1r1VLALVI9WpDg&s",
        "rank": "72",
        "id": "tt0082096",
        "description": "A gripping war film set during World War II, following the crew of a German U-boat as they face the harsh realities of combat, camaraderie, and the psychological toll of life underwater."
    },
    {
        "title": "The Lion King",
        "img": "https://pyxis.nymag.com/v1/imgs/e0e/a46/c1e0bfb3daee043ce28aff632ad980ac96-15-the-lion-king-mufasa.rsocial.w1200.jpg",
        "rank": "73",
        "id": "tt0110357",
        "description": "An animated musical masterpiece about a lion cub's journey to reclaim his throne, blending themes of family, friendship, and destiny against the backdrop of the African savanna."
    },
    {
        "title": "Cinema Paradiso",
        "img": "https://sites.usp.br/cdccenglish/wp-content/uploads/sites/512/2020/03/CINEMA-1.jpg",
        "rank": "74",
        "id": "tt0095765",
        "description": "A nostalgic ode to the magic of cinema, following a young boy's friendship with a local projectionist in post-war Italy, capturing the transformative power of movies and memories."
    },
    {
        "title": "Star Wars: Episode VI - Return of the Jedi",
        "img": "https://images.static-bluray.com/reviews/20738_1.jpg",
        "rank": "75",
        "id": "tt0086190",
        "description": "The epic conclusion to the original Star Wars trilogy, where the Rebel Alliance faces the evil Empire in a battle for freedom, redemption, and the ultimate showdown between Jedi and Sith."
    },
    {
        "title": "The Treasure of the Sierra Madre",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKDNh_R3WQhVtjwu1t0VI8L5hvoE23RqrWs0_ceIqPw&s",
        "rank": "76",
        "id": "tt0040897",
        "description": "A classic adventure drama about a group of prospectors searching for gold in the Mexican mountains, exploring themes of greed, betrayal, and the human quest for wealth and power."
    },
    {
        "title": "The Third Man",
        "img": "https://m.media-amazon.com/images/M/MV5BMTY1NDMwNzU5Nl5BMl5BanBnXkFtZTgwMTQ2MDI2NTE@._V1_.jpg",
        "rank": "77",
        "id": "tt0041959",
        "description": "A suspenseful noir thriller set in post-war Vienna, where an American writer investigates the mysterious death of his friend, uncovering a web of deception, corruption, and moral ambiguity."
    },
    {
        "title": "Once Upon a Time in America",
        "img": "https://hips.hearstapps.com/hmg-prod/images/once-upon-a-time-in-america-1530579166.jpg",
        "rank": "78",
        "id": "tt0087843",
        "description": "An epic crime saga spanning decades in the lives of Jewish gangsters in America, exploring themes of friendship, betrayal, and the price of ambition in pursuit of the American Dream."
    },
    {
        "title": "Requiem for a Dream",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNEU9RGkZ4d92yoaDl6bsN2KGDyYb4ciMB5sneS8-7dg&s",
        "rank": "79",
        "id": "tt0180093",
        "description": "A harrowing and visually stunning portrayal of addiction's devastating impact on four interconnected lives, delving into the dark depths of human desire, desperation, and disillusionment."
    },
    {
        "title": "Eternal Sunshine of the Spotless Mind",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFh6NJUPn9a90uTLdIniWdGt4PUVWCvxBTi51UTgIAg&s",
        "rank": "80",
        "id": "tt0338013",
        "description": "A mind-bending romantic drama where a couple undergoes a procedure to erase memories of each other, exploring love, loss, and the complexities of relationships amidst the chaos of memory."
    },
    {
        "title": "Full Metal Jacket",
        "img": "https://cdn.theasc.com/Full-Metal-Jacket-Hartman.jpg",
        "rank": "81",
        "id": "tt0093058",
        "description": "Stanley Kubrick's intense portrayal of soldiers during the Vietnam War, dissecting the dehumanizing effects of military training, the brutality of combat, and the psychological scars of war."
    },
    {
        "title": "Oldboy",
        "img": "https://veja.abril.com.br/wp-content/uploads/2023/09/OldBoy_10.jpg?quality=90&strip=info&w=720&h=440&crop=1",
        "rank": "82",
        "id": "tt0364569",
        "description": "A visceral revenge thriller about a man seeking vengeance after being inexplicably imprisoned for years, delving into themes of violence, redemption, and the human capacity for cruelty."
    },
    {
        "title": "Braveheart",
        "img": "https://statcdn.fandango.com/MPX/image/NBCU_Fandango/255/915/thumb_4A6869E8-7D98-445D-9039-89E843464856.jpg",
        "rank": "83",
        "id": "tt0112573",
        "description": "Mel Gibson stars and directs this epic historical drama about Scottish freedom fighter William Wallace, leading a revolt against English tyranny in a tale of courage, sacrifice, and patriotism."
    },
    {
        "title": "L.A. Confidential",
        "img": "https://ew.com/thmb/mYiBHA9AYIVx5SWWnwKXLWP0Ri0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/msdlaco_ec067-2000-7de7d5317259483fb70f873ca6c732c9.jpg",
        "rank": "84",
        "id": "tt0119488",
        "description": "A neo-noir crime thriller set in 1950s Los Angeles, where three detectives uncover a conspiracy while navigating corruption, scandal, and the allure of fame in the City of Angels."
    },
    {
        "title": "Bicycle Thieves",
        "img": "https://assets.mubicdn.net/images/artworks/538226/images-original.png?1682590275",
        "rank": "85",
        "id": "tt0040522",
        "description": "A poignant Italian neorealist film about a man searching for his stolen bicycle, symbolizing the struggles of the working class and the harsh realities of post-war poverty in Rome."
    },
    {
        "title": "Chinatown",
        "img": "https://variety.com/wp-content/uploads/2021/05/Jack-Nicholson-Chinatown.jpg",
        "rank": "86",
        "id": "tt0071315",
        "description": "A classic noir mystery set in 1930s Los Angeles, where a private detective uncovers corruption, scandal, and dark secrets while navigating the treacherous waters of power and greed."
    },
    {
        "title": "Singin' in the Rain",
        "img": "https://i.guim.co.uk/img/media/e90f6bf9f555fba928a786d33585bf2c289e9b6c/0_427_1381_828/master/1381.jpg?width=1200&quality=85&auto=format&fit=max&s=2019cd5ea63ebc3399fee4eb71b6fda1",
        "rank": "87",
        "id": "tt0045152",
        "description": "A joyous musical comedy about Hollywood's transition to talkies, showcasing catchy songs, dazzling dance numbers, and a celebration of love, laughter, and the magic of the silver screen."
    },
    {
        "title": "Princess Mononoke",
        "img": "https://images.mubicdn.net/images/film/964/cache-47607-1570446815/image-w1280.jpg?size=800x",
        "rank": "88",
        "id": "tt0119698",
        "description": "A breathtaking animated epic where a young warrior fights to protect the forest and its spirits from human greed and industrialization, exploring themes of nature, humanity, and balance."
    },
    {
        "title": "Monty Python and the Holy Grail",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZrWt65X1yydPZTYm3OMtpGQ0l_8du9pl7USdw717LQ&s",
        "rank": "89",
        "id": "tt0071853",
        "description": "A hilarious and absurd take on the legend of King Arthur, featuring the Monty Python comedy troupe in a quest for the Holy Grail filled with satire, silliness, and iconic comedic moments."
    },
    {
        "title": "Metropolis",
        "img": "https://cdn.britannica.com/56/80056-050-1ED31880/Alfred-Abel-Brigitte-Helm-Rudolf-Klein-Rogge-Metropolis-1927.jpg",
        "rank": "90",
        "id": "tt0017136",
        "description": "Fritz Lang's groundbreaking silent film set in a futuristic city divided between the elite and the oppressed workers, exploring themes of technology, class struggle, and the human spirit."
    },{
        "title": "Rashomon",
        "img": "https://uploads.metropoles.com/wp-content/uploads/2020/09/24210725/rashomon-akira-kurosawa.jpg",
        "rank": "91",
        "id": "tt0042876",
        "description": "Akira Kurosawa's riveting exploration of truth and perception, where witnesses offer conflicting accounts of a samurai's murder, revealing the complexity of human nature and the elusive nature of objective truth."
    },
    {
        "title": "Some Like It Hot",
        "img": "https://i.glbimg.com/og/ig/infoglobo1/f/original/2018/07/16/some-like-it-hot-cover.jpg",
        "rank": "92",
        "id": "tt0053291",
        "description": "A classic comedy about two musicians who disguise themselves as women to escape the mob, leading to hilarious misunderstandings, romantic entanglements, and a celebration of the roaring '20s."
    },
    {
        "title": "Amadeus",
        "img": "https://www.planocritico.com/wp-content/uploads/2023/07/Amadeusfilmeplanocritico.jpg",
        "rank": "93",
        "id": "tt0086879",
        "description": "Milos Forman's captivating drama about the tumultuous relationship between composers Wolfgang Amadeus Mozart and Antonio Salieri, exploring envy, genius, and the price of artistic brilliance."
    },
    {
        "title": "2001: A Space Odyssey",
        "img": "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/dave_on_a_spaceship_in_2001_a_space_odyssey.jpg",
        "rank": "94",
        "id": "tt0062622",
        "description": "Stanley Kubrick's groundbreaking sci-fi masterpiece spanning humanity's evolution, artificial intelligence, and existential questions about our place in the universe, with stunning visuals and a haunting score."
    },
    {
        "title": "All About Eve",
        "img": "https://cdn.britannica.com/88/77088-050-78AFECD2/Anne-Baxter-Bette-Davis-Marilyn-Monroe-All.jpg",
        "rank": "95",
        "id": "tt0042192",
        "description": "A gripping drama about an aging actress and her ambitious young fan, exploring themes of fame, manipulation, and the ruthless competition in the world of theater, with brilliant performances and sharp dialogue."
    },
    {
        "title": "Witness for the Prosecution",
        "img": "https://filmforum.org/do-not-enter-or-modify-or-erase/client-uploads/WITNESS_FOR_THE_PROSECUTION_thumbnail.png",
        "rank": "96",
        "id": "tt0051201",
        "description": "Billy Wilder's courtroom thriller based on Agatha Christie's play, where a lawyer defends a man accused of murder, unraveling twists, turns, and a shocking finale that keeps audiences guessing until the end."
    },
    {
        "title": "The Sting",
        "img": "https://m.media-amazon.com/images/M/MV5BMTU1ODc3MjkyN15BMl5BanBnXkFtZTcwOTYwODQyNw@@._V1_.jpg",
        "rank": "97",
        "id": "tt0070735",
        "description": "A stylish and clever caper film about a con artist duo's elaborate scheme to outsmart a dangerous mob boss, filled with twists, humor, and a nostalgic homage to the golden age of Hollywood."
    },
    {
        "title": "The Apartment",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpx7k91mehpZWFfgFGxeUP8qqrZaz2lrF_x7R4wVKPKg&s",
        "rank": "98",
        "id": "tt0053604",
        "description": "Billy Wilder's bittersweet comedy-drama about an office worker who lends his apartment to executives for their affairs, leading to unexpected friendships, romantic complications, and poignant reflections on loneliness and love."
    },
    {
        "title": "Grave of the Fireflies",
        "img": "https://m.media-amazon.com/images/M/MV5BMjE3MzkwMTM4MV5BMl5BanBnXkFtZTcwMDg5MDI2NQ@@._V1_.jpg",
        "rank": "99",
        "id": "tt0095327",
        "description": "A heartbreaking anime film about two siblings struggling to survive during World War II in Japan, depicting the devastating impact of war on civilians, resilience, and the bonds of family amidst tragedy."
    },
    {
        "title": "Indiana Jones and the Last Crusade",
        "img": "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2023/12/indiana-jones-and-the-last-crusade.jpg",
        "rank": "100",
        "id": "tt0097576",
        "description": "Steven Spielberg's adventurous saga where Indiana Jones embarks on a quest to find the Holy Grail, facing Nazis, ancient traps, and personal revelations about his father, history, and the power of faith."
    }
]

export default Movies