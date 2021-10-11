interface detail {
  image_url: string;
  heading: string;
  description: string;
}

const data: detail[] = [
  {
    image_url: "./assets/stars.png",
    heading: "Explore the hallways",
    description:
      "ExploreExplore the hallways Discover millions of rooms, filled with fascinating and unexpected conversations.",
  },
  {
    image_url: "./assets/hello.png",
    heading: "Listen in, or share your thoughts",
    description:
      "Drop into your favorite rooms while you’re commuting, walking your poodle or running in the park. Raise your hand if you’d like to chime in!",
  },
  {
    image_url: "./assets/celebration.png",
    heading: "Talk with amazing people",
    description:
      "Clubhouse is a thoughtful and generous place — where you bump into old friends and make new ones too",
  },
  {
    image_url: "./assets/chat.png",
    heading: "Host a room of your own",
    description:
      "Every day, people are telling jokes, reading the morning news, making music together, and sharing deep thoughts. What about you?",
  },
];

export { data };
