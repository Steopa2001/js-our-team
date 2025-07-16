const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

//definizione della funzione che mi genera la struttura delle card
const generateCard = (member) => {
  //creo una variabile che conterrà l'html e le informazioni della card
  const memberCard = ` <div class="col-12 col-md-4 gy-4">
          <div class="card" mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img src= "assets/${member.img}" class="img-fluid rounded-start" alt="..." />

              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${member.name}</h5>
                  <p class="card-text">
                   ${member.role}
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary"
                      >${member.email}
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>`;

  return memberCard;
};

//recupero elementi dal dom
const cardsContainer = document.getElementById("cardsTeam");

//richiamo la funzione per creare la card con le info dell'elemento attualmente ciclato
for (let i = 0; i < teamMembers.length; i++) {
  let card = generateCard(teamMembers[i]);

  cardsContainer.innerHTML += card;
}
