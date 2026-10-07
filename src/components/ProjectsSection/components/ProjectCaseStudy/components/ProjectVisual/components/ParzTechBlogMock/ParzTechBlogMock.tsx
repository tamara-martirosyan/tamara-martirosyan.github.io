import ProductWalkthrough, { type WalkthroughShot } from "../ProductWalkthrough";

const shots: readonly WalkthroughShot[] = [
  {
    title: "Home",
    description:
      "A gradient hero, a pill for the newest article, and quick stats on articles, topics, and language.",
    src: "/projects/parztech/home.jpg",
    alt: "Parz Tech home page hero reading “Technology and AI in simple language” in Armenian",
  },
  {
    title: "Browse & search",
    description:
      "Search every article or filter by topic — AI, security, and Armenian IT & events.",
    src: "/projects/parztech/blog.jpg",
    alt: "Parz Tech blog index with a search field, topic filters, and gradient article cards",
  },
  {
    title: "Read & react",
    description:
      "Every article ends with cited sources, anonymous emoji reactions, and tags.",
    src: "/projects/parztech/article-end.jpg",
    alt: "Parz Tech article footer with a sources list, five emoji reaction buttons, and topic tags",
  },
  {
    title: "Write & publish",
    description:
      "A private admin CMS: write in Markdown with a formatting toolbar, preview the result, then save a draft or publish.",
    src: "/projects/parztech/editor.jpg",
    alt: "Parz Tech admin editor for a new article with Markdown toolbar, settings panel, and Save draft and Publish buttons",
  },
];

const ParzTechBlogMock = () => {
  return (
    <ProductWalkthrough
      title="Technology and AI, in plain Armenian"
      intro="A pass through the blog — from the home page and topic browsing to reading, reacting, and the admin editor behind it all."
      shots={shots}
      imageWidth={2400}
      imageHeight={1336}
    />
  );
};

export default ParzTechBlogMock;
