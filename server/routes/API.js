import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    JSON.stringify({
      Data:
        "You have hit the Api endpoint of a MERN boilerplate which uses parcel",
    })
  );
});

export default router;
