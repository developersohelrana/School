const studentsData = [
  {
    name: "Eva",
    class: "10",
    roll: 25,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1234567890",
  },
  {
    name: "Jane Smith",
    class: "5",
    roll: 18,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1987654321",
  },
  {
    name: "Alice Johnson",
    class: "9",
    roll: 32,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1122334455",
  },
  {
    name: "Michael Brown",
    class: "9",
    roll: 10,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1555123456",
  },
  {
    name: "Emily Davis",
    class: "9",
    roll: 7,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1654987321",
  },
  {
    name: "William Wilson",
    class: "9",
    roll: 14,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1789456321",
  },
  {
    name: "Sophia Garcia",
    class: "9",
    roll: 29,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1876543210",
  },
  {
    name: "Daniel Martinez",
    class: "9",
    roll: 22,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1999888777",
  },
  {
    name: "Olivia Anderson",
    class: "9",
    roll: 5,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1444333222",
  },
  {
    name: "Liam Thompson",
    class: "9",
    roll: 19,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1777888999",
  },
  {
    name: "Ava White",
    class: "9",
    roll: 11,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1888999000",
  },
  {
    name: "Noah Miller",
    class: "9",
    roll: 16,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1999777666",
  },
  {
    name: "Isabella Brown",
    class: "9",
    roll: 27,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1888333444",
  },
  {
    name: "James Wilson",
    class: "9",
    roll: 8,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1888222333",
  },
  {
    name: "Charlotte Taylor",
    class: "9",
    roll: 21,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1777333444",
  },
  {
    name: "Benjamin Clark",
    class: "9",
    roll: 30,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1666222333",
  },
  {
    name: "Mia Lopez",
    class: "9",
    roll: 12,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1555444333",
  },
  {
    name: "Elijah Lee",
    class: "9",
    roll: 3,
    image:
      "https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg",
    guardianNumber: "+1444333222",
  },
];

// Get references to HTML elements
const searchInput = document.getElementById("searchInput");
const modalBody = document.querySelector(".modal-body");

// Function to find and display student data in the modal body
const displayStudentData = (student) => {
  modalBody.innerHTML = ""; // Clear previous content

  const cardDiv = document.createElement("div");
  cardDiv.innerHTML = `
  <div class="card" style="width: 100%;">
  <img class="card-img-top" style="height:400px" src=${student.image} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Name :${student?.name}</h5>
    <p class="card-text">Class : ${student?.class}</p>
    <p class="card-text">Roll : ${student?.roll}</p>

  </div>
</div>
  `;
  modalBody.appendChild(cardDiv);
  //   modalBody.appendChild(studentImage);
  //   modalBody.appendChild(studentName);
};

// Function to handle search button click
const searchButton = document.getElementById("searchBtn");
searchButton.addEventListener("click", () => {
  console.log("searchInput");
  const searchValue = searchInput.value.toLowerCase().trim();
  const foundStudent = studentsData.find(
    (student) => student.name.toLowerCase() === searchValue
  );

  if (foundStudent) {
    displayStudentData(foundStudent);
  } else {
    modalBody.innerHTML = "<p>Student not found</p>";
  }
});
