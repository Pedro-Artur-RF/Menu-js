const menu = [
    {
        id: 1,
        title: "Buttermilk Pancackes",
        category: "Breakfast",
        price: 13.99,
        img: "./images/item-1.jpeg",
        description:
            " I'm baby woke milkshake wolf bitters live-edge blue bottle,hammock freegan copper mug whatever cold-pressed",
    },

    {
        id: 2,
        title: "Diner Double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        description:
            "Vaporware iphone mumnlecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.",
    },

    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        description:
            "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
    },

    {
        id: 4,
        title: "Country Delight",
        category: "Breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        description:
            "Shabby chic keffiyeh neutra snackwave pork belly shoreditch.Prism austin mlkshk truffaut.",
    },

    {
        id: 5,
        title: "Egg Attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        description:
            "Franzen vegan pabst bicycle rights kickstater pinterest meditation farm-to-table 90's pop-up",
    },

    {
        id: 6,
        title: "Oreo Dream",
        category: "Shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        description:
            "Portland chicharrones ethical edison, palo santo craft beer chia heirloom iphone everyday",
    },

    {
        id: 7,
        title: "Diner Double",
        category: "Breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        description:
            "Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },

    {
        id: 8,
        title: "American Classic",
        category: "Lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        description:
            "Vaporware iphone mumnlecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.",
    },

    {
        id: 9,
        title: "Diner Double",
        category: "Shakes",
        price: 13.99,
        img: "./images/item-9.jpeg",
        description:
            "On it tumblr kickstarter thundercast migas everyday carry squid palo santo leggings. Food truck truffaut.",
    },

    {
        id: 10,
        title: "Stack Dinner",
        category: "Dinner",
        price: 39.99,
        img: "./images/item-10.jpeg",
        description:
            "Skateboard fam synth authentic semiotics. Live-edge lyft af, edison buld yuccie crucifix microdosing",
    },
];

const menuItems = document.querySelector(".menu-items");
const buttonContainer = document.querySelector(".button-container");

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItem) {
    let showMenu = menuItem.map((item) => {
        return `
        
        `;
    });
}

function displayMenuButtons() {
    const categories = menu.reduce(
        (value, item) => {
            if (!value.includes(item.category)) {
                value.push(item.category);
            }

            return value;
        },
        ["all"]
    );

    const categoryBtns = categories
        .map((catergory) => {
            return `
                <buttons class="filter-button" data-id="${catergory}">${catergory}</buttons>
            `;
        })
        .join("");

    const filterButtons = document.querySelector(".filter-button");

    filterButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const category = event.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem) => {
                console.log(menuItem.id);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });

            if (category === "all") {
                displayMenuButtons(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}
