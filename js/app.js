// STAY INFO

const stays = [
    {
        id: 1,
        name: "Mountain View Retreat",
        location: "Manali, Himachal Pradesh",
        destination: "Manali",
        type: "Homestay",
        price: 1800,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=700"
    },
    {
        id: 2,
        name: "The Backpackers Hostel",
        location: "Manali, Himachal Pradesh",
        destination: "Manali",
        type: "Hostel",
        price: 650,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700"
    },
    {
        id: 3,
        name: "Pine Valley Cottage",
        location: "Shimla, Himachal Pradesh",
        destination: "Shimla",
        type: "Homestay",
        price: 2200,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=700"
    },
    {
        id: 4,
        name: "Traveller's Nest",
        location: "Jaipur, Rajasthan",
        destination: "Jaipur",
        type: "Hostel",
        price: 550,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700"
    },
    {
        id: 5,
        name: "Palm Breeze Stay",
        location: "Goa",
        destination: "Goa",
        type: "Homestay",
        price: 2500,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=700"
    },
    {
        id: 6,
        name: "Beachside Backpackers",
        location: "Goa",
        destination: "Goa",
        type: "Hostel",
        price: 750,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700"
    },
{
    id: 7,
    name: "Ganga View Homestay",
    location: "Rishikesh, Uttarakhand",
    destination: "Rishikesh",
    type: "Homestay",
    price: 1600,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=700"
},
{
    id: 8,
    name: "River Side Backpackers",
    location: "Rishikesh, Uttarakhand",
    destination: "Rishikesh",
    type: "Hostel",
    price: 550,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700"
},
{
    id: 9,
    name: "Kashi Heritage Stay",
    location: "Varanasi, Uttar Pradesh",
    destination: "Banaras",
    type: "Homestay",
    price: 1900,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=700"
},
{
    id: 10,
    name: "Old City Backpackers",
    location: "Varanasi, Uttar Pradesh",
    destination: "Banaras",
    type: "Hostel",
    price: 500,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700"
},
{
    id: 11,
    name: "Lake Palace Homestay",
    location: "Udaipur, Rajasthan",
    destination: "Udaipur",
    type: "Homestay",
    price: 2800,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=700"
},
{
    id: 12,
    name: "City Backpackers Hostel",
    location: "Udaipur, Rajasthan",
    destination: "Udaipur",
    type: "Hostel",
    price: 700,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700"
},
{
    id: 13,
    name: "Himalayan Mountain Retreat",
    location: "Leh, Ladakh",
    destination: "Ladakh",
    type: "Homestay",
    price: 2400,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700"
},
{
    id: 14,
    name: "Leh Explorer Hostel",
    location: "Leh, Ladakh",
    destination: "Ladakh",
    type: "Hostel",
    price: 800,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700"
},
];

// STAY ON THE PAGE

const stayGrid = document.getElementById("stayGrid");
const emptyMessage = document.getElementById("emptyMessage");

function displayStays(propertyList) {

    stayGrid.innerHTML = "";

    if (propertyList.length === 0) {
        emptyMessage.hidden = false;
        return;
    }

    emptyMessage.hidden = true;

    propertyList.forEach(stay => {

        const card = document.createElement("article");

        card.className = "stay-card";

        card.innerHTML = `
            <div class="stay-image">
                <img src="${stay.image}" alt="${stay.name}">
                <span class="stay-type">${stay.type}</span>
            </div>

            <div class="stay-info">

                <p class="stay-location">
                    📍 ${stay.location}
                </p>

                <h3>${stay.name}</h3>

                <div class="stay-rating">
                    ★ ${stay.rating} / 5
                </div>

                <div class="stay-bottom">
                    <div class="stay-price">
                        ₹${stay.price.toLocaleString("en-IN")}
                        <small>/ night</small>
                    </div>
                </div>

                <button class="view-btn"
                    onclick="viewProperty(${stay.id})">
                    View Details
                </button>

            </div>
        `;

        stayGrid.appendChild(card);
    });
}

// FILTER BY STAY TYPE

let activeFilter = "all";

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        activeFilter = button.dataset.filter;

        applyFilters();
    });
});

// SEARCH BY DESTINATION

const searchBtn = document.getElementById("searchBtn");
const destinationInput = document.getElementById("destination");
const stayType = document.getElementById("stayType");

function applyFilters() {

    const destination = destinationInput.value
        .trim()
        .toLowerCase();

    const selectedType = stayType.value;

    const filteredStays = stays.filter(stay => {

        const matchesDestination =
            !destination ||
            stay.destination.toLowerCase().includes(destination) ||
            stay.location.toLowerCase().includes(destination);

        const matchesType =
            selectedType === "all" ||
            stay.type === selectedType;

        const matchesCategory =
            activeFilter === "all" ||
            stay.type === activeFilter;

        return matchesDestination &&
            matchesType &&
            matchesCategory;
    });

    displayStays(filteredStays);

    document.getElementById("explore")
        .scrollIntoView({ behavior: "smooth" });
}

searchBtn.addEventListener("click", applyFilters);

// Search on Enter key
destinationInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        applyFilters();
    }
});

// SELECT A DESTINATION

document.querySelectorAll(".destination-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            destinationInput.value =
                card.dataset.destination;

            stayType.value = "all";
            activeFilter = "all";

            filterButtons.forEach(btn => {
                btn.classList.toggle(
                    "active",
                    btn.dataset.filter === "all"
                );
            });

            applyFilters();
        });
    });

// SHOW PROPERTY DETAILS 

function viewProperty(id) {

    const property = stays.find(stay => stay.id === id);

    if (!property) return;

    alert(
        "PROPERTY DETAILS\n\n" +
        "Name: " + property.name + "\n" +
        "Location: " + property.location + "\n" +
        "Type: " + property.type + "\n" +
        "Price: ₹" + property.price + " per night\n" +
        "Rating: " + property.rating + "/5\n\n" +
        "Full property details and booking will be available in the next development phase."
    );
}

// INITIAL PAGE LOAD

displayStays(stays);
