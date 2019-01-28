function MenuItem(foodCourse, itemName, itemDescription, price) {
    this.foodCourse = foodCourse;
    this.itemName = itemName;
    this.itemDescription = itemDescription;
    this.price = price;
}

function Price(priceType, priceAmount) {
    this.priceType = priceType;
    this.priceAmount = priceAmount;
}

let appetizers = [
    new MenuItem("Appetizers", "Steamed Spring Roll", "", new Price(3, 3.75)),
    new MenuItem("Appetizers", "Egg Roll", "", new Price(2, 2.75)),
    new MenuItem("Appetizers", "Vegetable Egg Roll", "", new Price(3, 6.95)),
    new MenuItem("Appetizers", "Crab Puff", "", new Price(8, 6.95)),
    new MenuItem("Appetizers", "Steamed or Pan Fried Pork Dumpling", "", new Price(8, 6.95)),
    new MenuItem("Appetizers", "Bar-B-Q Spare Rib", "", new Price(6, 6.95)),
    new MenuItem("Appetizers", "Grilled Chicken Sticks", "", new Price(4, 4.95)),
    new MenuItem("Appetizers", "Grilled Pork Sticks", "", new Price(4, 4.95)),
    new MenuItem("Appetizers", "Chicken Wings", "", new Price(6, 4.95)),
    new MenuItem("Appetizers", "Biscuits", "", new Price(5, 2.50)),
    new MenuItem("Appetizers", "French Fries", "", new Price(1, 3.95))
];

let soups = [
    new MenuItem("Soup", "Wonton Soup", "", [new Price("S", 2.25), new Price("L", 3.95)]),
    new MenuItem("Soup", "Hot & Sour Soup", "", [new Price("S", 2.25), new Price("L", 3.95)]),
    new MenuItem("Soup", "Egg Drop Soup", "", [new Price("S", 2.25), new Price("L", 3.95)]),
    new MenuItem("Soup", "Vegetable with Tofu Soup", "", new Price(2, 3.95)),
    new MenuItem("Soup", "Velvet Chicken Corn Soup", "", new Price(2, 4.95)),
    new MenuItem("Soup", "Seafood Delight Soup", "", new Price(2, 4.95)),
    new MenuItem("Soup", "House Special Wonton Soup", "", new Price(2, 4.95))
]

// (Served with Steamed Rice, Add $1.95 for Substitute Fried Rice) Brown Rice Upon Requested
let chefsSpecialities = [
    new MenuItem("Chef’s Specialties", "General Tso’s Chicken", "Chucks of crispy boneless chicken, blended in a tasty sweet & sour and spicy brown sauce.", new Price(1, 10.50)),
    new MenuItem("Chef’s Specialties", "Orange Flavored Chicken", "Chunks of chicken lightly breaded and glazed with a spicy orange peel sauce.", new Price(1, 10.50)),
    new MenuItem("Chef’s Specialties", "Sesame Chicken", "Marinated slices of chicken breast glazed with delightfully flavored sesame sauce.", new Price(1, 10.50)),
    new MenuItem("Chef’s Specialties", "Orange Flavored Beef", "Tender chunks of beef lightly breaded and glazed with chef’s spicy orange sauce.", new Price(1, 11.95)),
    new MenuItem("Chef’s Specialties", "Sesame Beef", "Marinated slices of beef glazed with delightfully flavored sesame sauce.", new Price(1, 11.95)),
    new MenuItem("Chef’s Specialties", "Orange Flavored Shrimp", "Jumbo shrimp lightly breaded and glazed with chef’s spicy orange sauce.", new Price(1, 12.95)),
    new MenuItem("Chef’s Specialties", "Sesame Shrimp", "Jumbo shrimp marinated and glazed with delightfully flavored sesame sauce.", new Price(1, 12.95)),
    new MenuItem("Chef’s Specialties", "Kung Pao Delight", "Chicken, beef, shrimp and scallop stir fried in hot & spicy sauce with crunchy peanuts.", new Price(1, 12.95)),
    new MenuItem("Chef’s Specialties", "Happy Family", "Chicken, beef, shrimp and scallop sautéed with water chestnut, mushroom, snow peas and broccoli in a flavored brown sauce.", new Price(1, 12.95)),
    new MenuItem("Chef’s Specialties", "Sizzling Scallop & Beef", "Sliced tenderloin of beef & fresh scallop sautéed with vegetable in a rich brown sauce, served on a sizzling plate.", new Price(1, 12.95))
]

// (Served with Steamed Rice, Add $1.95 for Substitute Fried Rice) Brown Rice Upon Requested
let healthFoodSelection = [
    new MenuItem("Health Food Selection", "Steamed Mixed Vegetables", "", new Price(1, 7.50)),
    new MenuItem("Health Food Selection", "Steamed Chicken with Vegetables", "", new Price(1, 8.50)),
    new MenuItem("Health Food Selection", "Steamed Chicken with Broccoli", "", new Price(1, 8.50)),
    new MenuItem("Health Food Selection", "Steamed Chicken with Snow Peas", "", new Price(1, 9.50)),
    new MenuItem("Health Food Selection", "Steamed Shrimp with Vegetables", "", new Price(1, 10.95)),
    new MenuItem("Health Food Selection", "Steamed Shrimp with Broccoli", "", new Price(1, 10.95)),
    new MenuItem("Health Food Selection", "Steamed Shrimp with Snow Peas & Water Chestnuts", "", new Price(1, 11.95))
]

// (Served with Steamed Rice, Add $1.95 for Substitute Fried Rice) Brown Rice Upon Requested
let vegetables = [
    new MenuItem("Vegetables", "Mixed Vegetables", "Chinese cabbage, mushroom, water chestnut, broccoli & snow peas in white sauce.", new Price(1, 7.50)),
    new MenuItem("Vegetables", "Broccoli with Garlic Sauce", "Broccoli and water chestnuts sautéed in spicy garlic sauce.", new Price(1, 7.50)),
    new MenuItem("Vegetables", "Mixed Vegetables with Garlic Sauce", "Sauteed mixed vegetables with garlic sauce.", new Price(1, 7.50)),
    new MenuItem("Vegetables", "House Style Tofu", "Deep fried bean curd with mix vegetables in brown sauce.", new Price(1, 7.50)),
    new MenuItem("Vegetables", "Moo Shu Vegetables", "Shredded vegetables with plum sauce. Served with 4 Pancakes.", new Price(1, 8.50)),
    new MenuItem("Vegetables", "Sautéed Snow Peas & Water Chestnut", "Sauteed snow peas & water chestnut stir fried with light sauce.", new Price(1, 8.50)),
    new MenuItem("Vegetables", "Hot Braised String Beans", "Spicy string beans with minced pork.", new Price(1, 8.50))
]

// (Served with Steamed Rice, Add $1.95 for Substitute Fried Rice) Brown Rice Upon Requested
let poultry = [
    new MenuItem("Poultry", "Sweet & Sour Chicken", "Batter deep fried chicken with sweet & sour sauce.", new Price(1, 7.95)),
    new MenuItem("Poultry", "Moo Goo Gai Pan", "Sliced chicken with vegetables in white sauce.", new Price(1, 7.95)),
    new MenuItem("Poultry", "Cashew Chicken", "Sliced chicken with vegetables and roasted cashew nut in brown sauce.", new Price(1, 8.50)),
    new MenuItem("Poultry", "Chicken with Black Bean Sauce", "Sliced chicken breast with bell pepper and onion in black bean sauce.", new Price(1, 8.50)),
    new MenuItem("Poultry", "Chicken with Broccoli", "Sliced chicken stir fried with broccoli in brown sauce.", new Price(1, 8.50)),
    new MenuItem("Poultry", "Chicken with Garlic Sauce", "Sliced chicken breast with vegetables in spicy garlic sauce.", new Price(1, 8.50)),
    new MenuItem("Poultry", "Curry Chicken", "Sliced chicken with onions in curry sauce.", new Price(1, 8.50)),
    new MenuItem("Poultry", "Chicken Egg Foo Young", "Chinese style egg omelette with chicken & vegetable in oyster flavored gravy.", new Price(1, 8.50)),
    new MenuItem("Poultry", "Chicken w/ Snow Peas & water Chestnut", "Sliced chicken stir fried with snow peas in white sauce.", new Price(1, 9.50)),
    new MenuItem("Poultry", "Kung Pao Chicken", "Dried chicken with roasted peanut in spicy brown sauce.", new Price(1, 9.50)),
    new MenuItem("Poultry", "Hunan Chicken", "Sliced chicken breast w/ carrot, snow peas, straw mushroom, and broccoli in chef’s spicy sauce.", new Price(1, 9.50)),
    new MenuItem("Poultry", "Moo Shu Chicken", "Shredded chicken & vegetables with plum sauce. Served with 4 Pancakes. Additional 4 pancakes $1.50.", new Price(1, 9.50))
];

// (Served with Steamed Rice, Add $1.95 for Substitute Fried Rice) Brown Rice Upon Requested
let beef = [
    new MenuItem("Beef", "Pepper Steak", "Tender beef sautéed with green pepper and onion in brown sauce.", new Price(1, 9.95)),
    new MenuItem("Beef", "Beef with Broccoli", "Sliced tender beef with broccoli in brown sauce.", new Price(1, 9.95)),
    new MenuItem("Beef", "Beef with Garlic Sauce", "Sliced tender beef with spicy garlic sauce.", new Price(1, 9.95)),
    new MenuItem("Beef", "Szechuan Beef", "Shredded beef stir fried with carrot and celery in spicy sauce.", new Price(1, 9.95)),
    new MenuItem("Beef", "Mongolian Beef", "Sliced tender beef with onions.", new Price(1, 9.95)),
    new MenuItem("Beef", "Kung Pao Beef", "Sliced tender beef sautéed with peanuts in spicy sauce.", new Price(1, 9.95)),
    new MenuItem("Beef", "Beef Egg Foo Young", "Chinese style egg omelette with beef & vegetables in oyster flavored gravy.", new Price(1, 9.95)),
    new MenuItem("Beef", "Beef with Snow Peas & Water Chestnut", "Sliced tender beef sautéed with snow peas & water chestnuts in brown sauce.", new Price(1, 10.95)),
    new MenuItem("Beef", "Hunan Beef", "Sliced beef with carrot, snow peas, straw mushrooms, broccoli in chef’s spicy sauce.", new Price(1, 10.95)),
    new MenuItem("Beef", "Moo Shu Beef", "Beef & vegetables plum sauce. Served with 4 Pancakes. Additional 4 pancakes $1.50.", new Price(1, 10.95))
];

// (Served with Steamed Rice, Add $1.95 for Substitute Fried Rice) Brown Rice Upon Requested
let seafood = [
    new MenuItem("Seafood", "Sweet & Sour Shrimp", "Battered fried shrimp with sweet and sour sauce.", new Price(1, 10.50)),
    new MenuItem("Seafood", "Kung Pao Shrimp", "Shrimp with diced vegetable and peanuts in spicy sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp with Cashew Nuts", "Fried jumbo shrimp with bamboo shoot, celery, water chestnut and roasted cashew nut.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp Garlic Sauce", "Fresh jumbo shrimp sautéed with shredded bamboo shoot in spicy garlic sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp with Lobster Sauce", "Shrimp with minced pork in white lobster sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp with Vegetables", "Shrimp with mix vegetables in white sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp with Broccoli", "Fresh jumbo shrimp with broccoli in brown sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp Egg Foo Young", "Chinese style egg omelette with shrimp & vegetables in oyster flavored gravy.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Curry Shrimp", "Fresh jumbo shrimp and onions sautéed with curry sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp with Snow Peas & Water Chestnut", "Fresh jumbo shrimp with snow peas & water chestnut in white sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Moo Shu Shrimp", "Fresh shrimp and vegetables with plum sauce. Served with 4 Pancakes.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Hunan Shrimp", "Fresh jumbo shrimp with snow peas, straw mushroom & broccoli in chef’s spicy sauce.", new Price(1, 11.95)),
    new MenuItem("Seafood", "Scallops with Garlic Sauce", "Scallops sautéed with spicy garlic sauce.", new Price(1, 12.95)),
    new MenuItem("Seafood", "Scallops with Vegetables", "Scallops sautéed with mix vegetables.", new Price(1, 12.95))
];

// (Served with Steamed Rice, Add $1.95 for Substitute Fried Rice) Brown Rice Upon Requested
let pork = [
    new MenuItem("Pork", "Sweet & Sour Pork", "Batter deep fried pork with sweet & sour sauce.", new Price(1, 7.95)),
    new MenuItem("Pork", "Pork with Garlic Sauce", "Shredded pork with shredded vegetables in spicy garlic sauce.", new Price(1, 8.50)),
    new MenuItem("Pork", "Twice cooked Pork", "Twice cooked sliced pork with vegetables in spicy brown sauce.", new Price(1, 8.50)),
    new MenuItem("Pork", "Pork Chow Mein", "Shredded pork and vegetables with crunchy noodles.", new Price(1, 8.50)),
    new MenuItem("Pork", "Roasted Pork with Vegetables", "Sliced BBQ pork with vegetables.", new Price(1, 8.50)),
    new MenuItem("Pork", "Roasted Pork with Broccoli", "Roasted BBQ pork with broccoli.", new Price(1, 8.50)),
    new MenuItem("Pork", "Roasted Pork Egg Foo Young", "Chinese style egg omelet with roasted pork and vegetables with oyster flavored gravy.", new Price(1, 8.50)),
    new MenuItem("Pork", "Roasted Pork with Snow Peas & Water Chestnut", "Sliced BBQ pork with snow peas and water chestnuts in brown sauce.", new Price(1, 9.50)),
    new MenuItem("Pork", "Hunan Pork", "Sliced pork with carrot, snow peas, baby corn, straw mushroom and broccoli in chef’s spicy sauce.", new Price(1, 9.50)),
    new MenuItem("Pork", "Moo Shu Pork", "Shredded pork with vegetables served with plum sauce. Served with 4 Pancakes. Additional 4 pancakes $1.50.", new Price(1, 9.50))
];

// (Served with Steamed Rice, Add $1.95 for Substitute Fried Rice) Brown Rice Upon Requested
let friedRiceAndNoodles = [
    new MenuItem("Fried Rice & Noodles", "Vegetables Fried Rice", "", new Price(1, 6.50)),
    new MenuItem("Fried Rice & Noodles", "Chicken & Pork Fried Rice", "", new Price(1, 6.50)),
    new MenuItem("Fried Rice & Noodles", "Beef or Shrimp Fried Rice", "", new Price(1, 7.50)),
    new MenuItem("Fried Rice & Noodles", "House Special Fried Rice", "", new Price(1, 8.50)),
    new MenuItem("Fried Rice & Noodles", "Vegetables Lo Mein", "Soft Noodles.", new Price(1, 6.95)),
    new MenuItem("Fried Rice & Noodles", "Chicken or Pork Lo Mein", "Soft Noodles.", new Price(1, 6.95)),
    new MenuItem("Fried Rice & Noodles", "Beef or Shrimp Lo Mein", "Soft Noodles.", new Price(1, 7.95)),
    new MenuItem("Fried Rice & Noodles", "House Special Lo Mein", "Soft Noodles.", new Price(1, 8.50)),
    new MenuItem("Fried Rice & Noodles", "House Special Pan Fried Noodles", "Soft Noodles.", new Price(1, 8.50)),
];

let Menu = [
    appetizers,
    soups,
    chefsSpecialities,
    healthFoodSelection,
    vegetables,
    poultry,
    beef,
    seafood,
    pork,
    friedRiceAndNoodles
];

function menuNav() {
    let menuNav = `
    <div class="col s12 m12 l12 xl12 center-align">
    <ul class="menu-section-nav">`;

    Menu.forEach(x => menuNav += `<li><button class="hello" data-menu-filter="${x[0].foodCourse}" type="button">${x[0].foodCourse.toUpperCase()}</button></li>`);

    menuNav += `</ul></div>`

    return menuNav;
}

// compare data with the database
function handleMenuFilter(course) {

    // let course = event.dataset.menuFilter;
    const menuSectionItems = document.getElementById("menuSectionItems");
    let menuItems = ``;

    Menu.filter(x => x[0].foodCourse === course)[0]
        .forEach(x => menuItems += createMenuItemDiv(x));

    menuSectionItems.innerHTML = menuItems;
}

function createMenuItemDiv(menuItem) {

    let menuItemDiv = `
    <div class="col s6 m6 l4 xl4">
    <div class="container-fluid">
        <div class="row">
            <div class="col s10 m10 l10 xl10">
            `

    // for(let )
    
    return `
    <div class="col s6 m6 l4 xl4">
        <div class="container-fluid menu-item">
            <div class="row">
                <div class="col s10 m10 l10 xl10">
                    <h6>${menuItem.itemName}</h6>
                    
                    <p>${menuItem.itemDescription}</p>
                </div>
                <div class="col s2 m2 l2 xl2">
                    <div class="row">
                        $${menuItem.price.priceAmount}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

document.addEventListener('DOMContentLoaded', function () {
    AOS.init();

    const menuSectionNav = document.getElementById('menuSectionNav');

    menuSectionNav.innerHTML = menuNav();

    const menuSectionItems = document.getElementById("menuSectionItems");
    let menuButtons = document.getElementsByClassName("hello");

    // default
    handleMenuFilter(Menu[0][0].foodCourse);

    Object.keys(menuButtons).forEach((key) => {
        // console.log(menuButtons[key].className)
        // console.log(menuButtons[key].dataset.menuFilter)
        menuButtons[key].addEventListener('click', () => {
            handleMenuFilter(menuButtons[key].dataset.menuFilter);
        });
    }
    )


    const vp = window.matchMedia("(min-width: 992px)");
    vp.addListener(handleMediaQuery);

    const sideNav = document.querySelectorAll('.sidenav');
    const sideNavInstances = M.Sidenav.init(sideNav, { "edge": "right" });

    const toolTipped = document.querySelectorAll('.tooltipped');
    const toolTippedinstances = M.Tooltip.init(toolTipped, {});

    let prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', function () {
        const navBar = document.getElementById('navbar')
        const intro = document.getElementById("section-welcome");
        let currScrollPos = this.window.scrollY;

        if (currScrollPos < intro.offsetTop) {
            navBar.style.top = "0px";
            navBar.style.backgroundColor = "transparent";
        } else if (prevScrollPos < currScrollPos) {
            navBar.style.top = "-70px";
        } else {
            navBar.style.top = "0px";
            navBar.style.backgroundColor = "black";
        }
        prevScrollPos = currScrollPos;

        // const aboutSection = document.getElementById('about-section')
        // const locationDetailsSection = document.getElementById('location-section')

        // if (currScrollPos > intro.offsetTop) {
        // // if(currScrollPos >= (aboutSection.offsetTop-navBar.offsetHeight) && currScrollPos < (aboutSection.offsetHeight + aboutSection.offsetTop) || currScrollPos >= (locationDetailsSection.offsetTop-navBar.offsetHeight) && currScrollPos < (locationDetailsSection.offsetHeight + locationDetailsSection.offsetTop))
        //     navBar.style.backgroundColor = "black";
        // } else {
        //     navBar.style.backgroundColor = "transparent";
        // }
    })

});

function handleMediaQuery(e) {
    //If vp width > 992
    if (e.matches) {
        //Close side nav 
        let sideNav = document.querySelectorAll('.sidenav');
        var sideNavInstances = M.Sidenav.getInstance(sideNav[0]);
        sideNavInstances.close();

        //Move position of tooltip to right side
        let toolTipped = document.querySelectorAll('.tooltipped');
        toolTipped.forEach(x => x.dataset.position = "right");
        // for (let i = 0; i < toolTipped.length; i++) {
        //     toolTipped[i].dataset.position = "right";
        // }
    } else {
        //On vp with width < 992px, move position of tooltip to left side
        let toolTipped = document.querySelectorAll('.tooltipped');
        toolTipped.forEach(x => x.dataset.position = "left");
        // for (let i = 0; i < toolTipped.length; i++) {
        //     toolTipped[i].dataset.position = "left";
        // }
    }
}


