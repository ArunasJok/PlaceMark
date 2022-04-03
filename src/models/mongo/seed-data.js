export const seedData = {
    users: {
      _model: "User",
      john: {
        firstName: "John",
        lastName: "Johnson",
        email: "j@j.com",
        password: "secret"
      },
      pat: {
        firstName: "Pat",
        lastName: "Patrickson",
        email: "pat@p.com",
        password: "secret"
      },
      mary: {
        firstName: "Mary",
        lastName: "Marrion",
        email: "mary@m.com",
        password: "secret"
      }
    },
    categories: {
      _model: "Category",
      arunas: {
        title: "Lakes",
        userid: "->users.pat"
      }
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