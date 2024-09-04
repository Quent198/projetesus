const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  account: {
    email: { type: String, required: true },
    password: { type: String, required: true },
    loginLocationSecurity: { type: Boolean, default: true },
    phoneNumber: { type: String, required: false },
    tokenEmail: { type: String, required: false },
    tokenPassword: { type: String, required: false },
    rgpd: { type: Boolean, default: true },
    newsletter: { type: Boolean, required: false },
    isBanned: { type: Boolean, required: false },
    privacy: { type: String, default: "semiPublic" },
    restrictedDirectMessages: { type: Boolean, default: false },
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notifications",
      },
    ],
    logs: [
      [
        { timestamp: { type: Date, required: false } },
        { ipAddress: { type: Date, required: false } },
        { actionType: { type: Date, required: false } },
      ],
    ],
  },
  preferences: {
    language: { type: String, default: "FR", required: false },
    notifications: {
      onNewFollow: { type: Boolean, default: true, required: false },
      onNewMessage: { type: Boolean, default: true, required: false },
      onCommentReply: { type: Boolean, default: true, required: false },
      onCommentLike: { type: Boolean, default: true, required: false },
    },
  },
  profile: {
    username: { type: String, required: true },
    avatar: {
      type: String,
      default:
        "https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-2.jpg",
      required: false,
    },
    banner: { type: String, default: null, required: false },
    bio: { type: String, default: null, required: false },
    socialNetworks: {
      twitter: { type: String, default: null, required: false },
      discord: { type: String, default: null, required: false },
      youtube: { type: String, default: null, required: false },
      spotify: { type: String, default: null, required: false },
    },
    profileColor: { type: String, default: "white", required: false },
    location: { type: String, default: null, required: false },
  },
  lists: {
    animes: [
      { type: mongoose.Schema.Types.ObjectId, required: false, ref: "Animes" },
    ],
    mangas: [
      { type: mongoose.Schema.Types.ObjectId, required: false, ref: "Mangas" },
    ],
  },
  animes: [
    {
      animeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Animes",
      },
    },
    { favorite: { type: Boolean, required: false } },
    { status: { type: String, required: false } },
    { score: { type: Number, required: false } },
    { progressEpisodes: { type: Number, required: false } },
    {
      comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "Comments",
        },
      ],
    },
  ],
  mangas: [
    {
      mangaId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Mangas",
      },
    },
    { favorite: { type: Boolean, required: false } },
    { status: { type: String, required: false } },
    { score: { type: Number, required: false } },
    { progressChapters: { type: Number, required: false } },
    { progressVolumes: { type: Number, required: false } },
    {
      comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "Comments",
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Users", userSchema);
