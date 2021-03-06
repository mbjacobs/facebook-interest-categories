// import {INTEREST_CATEGORIES} from './fb_interest_categories.js';
const interest_categories = [
    {
      "topic": "Kamala Harris",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Home Chef",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "AARP",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Edutopia",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Cat lady",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Sierra Club",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Meijer",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Joe Biden",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "ModCloth",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Hair products",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Beer",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Wine",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Fragrances",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Marriage",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Etsy",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Aldi",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Pregnancy",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Insurance",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Snoring",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Baking",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Veganism",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Dutch Bros. Coffee",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Fundraising",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "The Wall Street Journal",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Old Navy",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Republican Party (United States)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Michigan Wolverines",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "AFL-CIO",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Desserts",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Coffee",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "American football",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Gift",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "E-commerce",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Coffeehouses",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Engadget",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Street fashion",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Shopping",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Summer",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Adidas",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Seafood",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Chocolate",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Skin",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Nintendo",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "The New Yorker",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Pickup truck",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Money",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Voting",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Ben & Jerry's",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Sleep",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Smartphones",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Financial services",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Ice cream",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Medicine",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "PC Magazine",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Forever 21",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Fatherhood",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Cider",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Mobile phones",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Restaurants",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Tablet computers",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Tea",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Crafts",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Handwriting",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Educational technology",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Discounts and allowances",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Food",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Leadership",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Allergy",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Personalization",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "E!",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Laptop",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Herb",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Real Simple",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Black Friday (shopping)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Nate Silver",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "John Green (author)",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Autumn",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Sketchers",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Coffee bean",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Doughnut",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Labor Day",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Meat",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Breaking news",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "AdvoCare",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Simon's Cat",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Stationary",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "University of Michigan",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Greeting card",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Milwaukee Bucks",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Flower",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Cyber Monday",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Current events",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Musician",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "DirecTV",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Vegetable",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Dish Network",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Computers",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Technology",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Designer",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Wool",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Pediatrics",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Taco",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Made in USA",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Culture",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Detroit Lions",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "UNICEF",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Western United States",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Nvidia",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "World Health Organization",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Odor",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Delivery (commerce)",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Indie rock",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Tupac Shakur",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Romance film",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Beverages",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Sterilization",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Honey",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "United States Congress",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Electronic dance music",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Particulates",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Handheld game console",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Bench (Philippine clothing brand)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Systems engineering",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Metal",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Journalist",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Bookselling",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Brighton",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Snow",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Freight transport",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Thailand",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Glass",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Textile",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Lobbying",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Pre-order",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "California",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Computing",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Shellfish",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Petroleum",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Austrialian Labor Party",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Time (magazine)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Political campaign",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Ethiopia",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Buffy the Vampire Slayer",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Frog",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "NewYorker",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Fashion (film)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Michigan",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Clique",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Printing",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Election",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "United Church of Christ",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Legislation",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Funk",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "The Apprentice (U.S. TV Series)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Vibe (magazine)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Alexandria",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Affiliate",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Pew Research Center",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Grand Rapids, Michigan",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Hair (film)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Website",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Eucalyptus",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Mail",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "West Coast hip hop",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "President of the United States",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Classroom",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Paper",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Hank Green",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Iowa",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Wildflower",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Web page",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Ultra Music",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "WDIV Local 4 / ClickOnDetroit",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Price",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Opinion poll",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Political party",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Jason Gray (musician)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Georgia (U.S. state)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Ohio",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Cake (band)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Cult film",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "United States Department of Defense",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Extra (TV program)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Day school",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "MLive.com",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Multinational corporation",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Madagascar",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Nas",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Zoom (TV channel)",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Columnist",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Forward (association football)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Expert (company)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Supreme Court of the United States",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Rush (band)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Skill",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "History (European TV Channel)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Friday (1995 film)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Perfection",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Purr",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "ONTV (Egypt)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "ASAP (variety show)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Romantic music",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Oak",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Atlantic Ocean",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "WXYZ-TV",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Focus (German magazine)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Brand New (band)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "World",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Liberalism",
      "life_relevancy": true,
      "identity_relevancy": true
    },
    {
      "topic": "Coffea",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Chemical formula",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Gravy",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Image",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Nour (actress)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Power (social and political)",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "Jeans (film)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Details (magazine)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Domain Name System",
      "life_relevancy": true,
      "identity_relevancy": false
    },
    {
      "topic": "The Shield",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Rule of law",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Wanted (2008 film)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Joe (singer)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Heat (1995 film)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Love (John Lennon song)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Week",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Click (2006 film)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Rain (entertainer)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "WDIV-TV",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Top-level domain",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Buy More",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Touch (TV series)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Black (2005 film)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "History of video game consoles (seventh generation)",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "Petroleo",
      "life_relevancy": false,
      "identity_relevancy": false
    },
    {
      "topic": "KGW",
      "life_relevancy": true,
      "identity_relevancy": false
    }
   ];

const life_relevancy_btn = document.querySelector("#life_relevancy_btn");
const identity_relevancy_btn = document.querySelector("#identity_relevancy_btn");
const irrelevancy_btn = document.querySelector("#irrelevancy_btn");
const randomize_btn = document.querySelector("#randomize_btn");
const sort_btn = document.querySelector("#sort_btn");

window.addEventListener('load', populateInterests(interest_categories)); 
life_relevancy_btn.addEventListener('click', function () {filterByRelevancy('life_relevancy')});
identity_relevancy_btn.addEventListener('click', function () {filterByRelevancy('identity_relevancy')});
irrelevancy_btn.addEventListener('click', filterByIrrelevancy);
randomize_btn.addEventListener('click', randomize);
sort_btn.addEventListener('click', function () {(sort(interest_categories))});

function populateInterests (interests) {
    const s = Snap("#interest-container");
    const interestList =  document.querySelector("#interest-container");
    var x_offset = 15;
    var y_offset = 0;
    var count = 0;

    interests.forEach(function (interest) {
            const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            
            //Define SVG elements
            var square = s.rect(60 + x_offset, 20 + y_offset, 60, 60, 10).attr
            ({id: count, title: interest.topic, class: "square", fill: randomColor});
            var label = s.text(60 + x_offset, 90 + y_offset, interest.topic).attr({'font-size': 10, 'font-color': randomColor, 'display': "block"});

            //Add animation, drag ability, and click/hover interactions 
            square.animate({r: 25}, 1500);
            square.click(function(){
              toggleVisibility(label);
            })

            //Group the interest square and its label together
            group = s.g(square, label); 
            group.drag();
            interestList.append(group);

            //Perform math calculations to place next square.
            x_offset += 100;  
            count += 1;
            if (count % 11 == 0) { //Every 12 squares, start a new row.
                y_offset += 100;
                x_offset = 5;              
            }
        } 
    )
}

function toggleVisibility (element) {
  if (element.attr("display") === "none") {
    element.attr({display: "block"})
  } else {
    element.attr({display: "none"})
  }
}

function sort (interests) {
  var y_offset = 5;
  var s = Snap("#interest-container");
  s.attr({viewBox: "0 0 1200 5000"});

  interests.forEach(function (interest) {

    square = $('rect[title="' + interest.topic + '"]');
    square.attr({width: 30, height: 30})

    group = square.parent();
    $(group.children()[1]).remove();

    if (interest.life_relevancy === true && interest.identity_relevancy === false){
      square.animate({x: 525, y: y_offset}, 3000, mina.linear);
    }
    if (interest.identity_relevancy === true){
      square.animate({x: 200, y: y_offset}, 3000, mina.linear);
    }
    if (interest.life_relevancy === false && interest.identity_relevancy === false){
      square.animate({x: 790, y: y_offset}, 3000, mina.linear);
    }
    y_offset += 40;
  })
}

function filterByRelevancy (relevancy_type) {
    relevancy_subset  = _.filter(interest_categories, [relevancy_type, true]);

    _.forEach(relevancy_subset, function (relevant_interest) {
        relevancy_square = $('rect[title="' + relevant_interest.topic + '"]');

        if (relevancy_type === "life_relevancy") {
            $(relevancy_square).attr({fill: 'lightgreen'});
        } else {
            $(relevancy_square).attr({fill: 'green'});
        }
    })
}

function filterByIrrelevancy () {
    irrelevancy_subset  = _.filter(interest_categories, { 'life_relevancy': false, 'identity_relevancy': false });    

    _.forEach(irrelevancy_subset, function (irrelevant_interest) {
        irrelevancy_square = $('rect[title="' + irrelevant_interest.topic + '"]');
        $(irrelevancy_square).attr({fill: 'red'});
    })
}

function randomize () {
    const interestList =  document.querySelector("#interest-container");
    interestList.querySelectorAll('*').forEach(n => n.remove());    
    shuffled_set = _.shuffle(interest_categories);
    populateInterests(shuffled_set);
}


