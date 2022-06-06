export const seedData = {
  users: {
    _model: "User",
    john: {
      firstName: "John",
      lastName: "Johnson",
      email: "j@j.com",
      password: "$2a$10$BwNKdghP.N9ik2k9n6cAbueQBWSLyJnF9789SkyQb5mxBG8Ra5Qte"
    },
    pat: {
      firstName: "Pat",
      lastName: "Patrickson",
      email: "pat@p.com",
      password: "$2a$10$BwNKdghP.N9ik2k9n6cAbueQBWSLyJnF9789SkyQb5mxBG8Ra5Qte"
    },
    mary: {
      firstName: "Mary",
      lastName: "Marrion",
      email: "mary@m.com",
      password: "$2a$10$BwNKdghP.N9ik2k9n6cAbueQBWSLyJnF9789SkyQb5mxBG8Ra5Qte"
    }
  },

  categories: {
    _model: "Category",
    pat: {
      title: "Lakes",
      img: "https://res.cloudinary.com/df03pv51z/image/upload/v1654537240/lneytqjlstadi82jylr9.jpg",
      userid: "->users.pat"
    },      
    john: {
      title: "Mountains",
      img: "https://res.cloudinary.com/df03pv51z/image/upload/v1654537218/ckrc2hq0hjno5jafmovf.jpg",
      userid: "->users.john"
    },
    mary: {
      title: "Rivers",
      img: "https://res.cloudinary.com/df03pv51z/image/upload/v1654537229/rrdxudcownmwl4inugao.jpg",
      userid: "->users.mary"
    },
  },

  reviews: {
    _model: "Review",
    one: {
      stars: 4,        
      donor: "->users.pat",
      category: "->categories.pat",
    },
    two: {
      stars: 5,        
      donor: "->users.pat",
      category: "->categories.john",
    },
    three: {
      stars: 3,        
      donor: "->users.pat",
      category: "->categories.mary",
    },
  },

  placenames: {
    _model : "Placename",
    placename_1 : {
      title: "Arunas favourite lake",
      location: "Wicklow Lake",
      description: "Very cold water!",
      categoryid: "->categories.arunas"
    },
  },
};