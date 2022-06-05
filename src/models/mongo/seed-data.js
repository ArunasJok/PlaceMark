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
      arunas: {
        title: "Lakes",
        userid: "->users.pat"
      },      
      john: {
        title: "Mountains",
        userid: "->users.pat"
      }
    },
    reviews: {
      _model: "Review",
      one: {
        stars: 4,        
        donor: "->users.pat",
        category: "->categories.arunas",
      },
      two: {
        stars: 5,        
        donor: "->users.john",
        category: "->categories.arunas",
      },
      three: {
        stars: 3,        
        donor: "->users.pat",
        category: "->categories.john",
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
    }
  };