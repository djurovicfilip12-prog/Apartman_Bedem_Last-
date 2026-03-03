// ── Bedem Apartments · app.js ───────────────────────

const apartments = {
    "bedem1": {
        title: "Bedem I",
        price: "from €50 / night",
        desc: "A spacious 70 m² apartment for up to 7 guests, completely renovated and furnished to a high standard. Located below the ancient Bedem Fortress, just 5 minutes from the city centre.",
        features: ["2 Private Terraces", "Air Conditioning", "Free WiFi · 368 Mbps", "Free Parking", "Fully Equipped Kitchen", "7 Beds"],
        img: "assets/bedem_1.jpg",
        link: "bedem-1.html"
    },
    "bedem2": {
        title: "Bedem II",
        price: "Coming Soon",
        desc: "A second carefully prepared residence currently being finished. Contact us to be notified when Bedem II becomes available.",
        features: ["Parking", "WiFi", "AC", "Family Friendly"],
        img: "assets/bedem_2.jpg",
        link: null
    },
    "bedem3": {
        title: "Bedem III",
        price: "Coming Soon",
        desc: "A minimalist sanctuary offering peace and quiet in the heart of the city. Contact us to be notified when Bedem III becomes available.",
        features: ["Parking", "WiFi", "AC", "Family Friendly"],
        img: "assets/bedem_3.jpg",
        link: null
    }
};

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();