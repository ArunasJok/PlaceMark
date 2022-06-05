export const reviewsController = {
    index: {
      handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        return h.view("Review", { title: "Leave a review", user: loggedInUser });
      },
    },
    report: {
      handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        return h.view("Report", {
          title: "Reviews to Date",
          user: loggedInUser,
        });
      },
    },
    review: {
      handler: async function (request, h) {
        try {
          const loggedInUser = request.auth.credentials;
          return h.redirect("/report");
        } catch (err) {
          return h.view("main", { errors: [{ message: err.message }] });
        }
      },
    },
  };