export const seedData = {
    users: {
      _model: "User",
      john: {
        firstName: "John",
        lastName: "Johnson",
        email: "j@j.com",
        password: "$2a$10$awGGBhjo/.U3hAwyyvzPruG1RIrP8i1N7BXWr3A1QrlacVayD9eIe"
      },
      pat: {
        firstName: "Pat",
        lastName: "Patrickson",
        email: "pat@p.com",
        password: "$2a$10$bHBXvd0G1RicCd.h8otgdu7yGjwHrQIb5DvwHrL2qan3fuT4ED8PK"
      },
      mary: {
        firstName: "Mary",
        lastName: "Marrion",
        email: "mary@m.com",
        password: "$2a$10$U20R6To/5b8HF6KK0VBbIOnF5mPpTjqG7zwnN0zaZjOEAmBhT5fmO"
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