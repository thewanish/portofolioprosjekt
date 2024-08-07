export const navItems = [
  { name: "Om meg", link: "#about" },
  { name: "Prosjekter", link: "#projects1" },
  { name: "Utdanning", link: "#approach" },
  { name: "Kontakt meg", link: "#contact" },
];

export const gridItems = [
  {
    id: 2,
    title: "Shilwan Payan, 24 år gammel utvikler fra Oslo",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Min tech stack:",
    description: "(fullstack)",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Ekspert på å finne løsninger i Stack Overflow",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Fokuserer på å lære mer React, Java og .NET",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Kontakt meg via email:",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    link: "https://finnfrontend.onrender.com/",
    title: "Prosjekt: Rekrutter [Java, React, MongoDB, Spring]",
    des: "lese post, søke funksjon, sette inn post. (Tar 1 min å laste dataene)",
    img: "/app22.svg",
    iconLists: ["/re.svg", "/java.svg", "/mongodb.svg"],

  },
  {
    id: 2,
    link: "https://thewanish.github.io/tv2anmeldelser/",
    title: "Prosjekt: Film-anmeldelser [Java, React, MongoDB, Spring]",
    des: "Lagre reviews på filmer, se nyeste film liste",
    // png istednfor svg fikser farge problemet
    img: "/review11.svg",
    iconLists: ["/re.svg", "/java.svg", "/mongodb.svg"],
  },
];

export const testimonials = [
  {
    quote:
      "''Flink å ta initiativ i prosjekter!''",
    name: "Kristin",
    
    title: "Prosjektmedarbeider",
    
  },
  {
    quote:
      "''Du er sånn data flink du!''",
    name: "Unni",
    title: "Skeidar",
  },
];

export const companies = [
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
    color: "black",
    style: "black",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Java",
    desc: "Java har jeg brukt til ulike hobby prosjekter med Spring boot, og lært å koble den til MongoDb for å behandle dataene. Også objekt orientert programmering fra utdanningen.",
    className: "md:col-span-2",
    thumbnail: "/java.svg",
  },
  {
    id: 2,
    title: ".NET",
    desc: "Med .NET har jeg laget finans prosjekt hvor man kan legge til tidligere betalinger man har gjort. Også lært hvordan man kobler til databaser med C#",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/net.svg",
  },
  {
    id: 3,
    title: "React",
    desc: "Tatt javascript kurs i begynnelsen og endte opp med å brukte React til nesten alle applikasjonene mine gjennom de siste 2 årene. Har også koblet sammen frontend med backend med hjelp av React.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/re.svg",
  },
  {
    id: 4,
    title: "Mongodb",
    desc: "MongoDb via Mongocompass har jeg brukt til flere full stack prosjekter for å hente data, og legge til data. Har brukt deres search index sammen med java for å kunne søke i java applikasjoner.",
    className: "md:col-span-2",
    thumbnail: "/mongodb.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/thewanish?tab=repositories",
  },

  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shilwan-payan-49a070321/",
  },
];
