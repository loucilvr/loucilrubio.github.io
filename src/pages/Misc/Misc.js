import React from "react";
import { createUseStyles } from "react-jss";
import PageHeading from "../../components/Typography/PageHeading";

const articles = [
  {
    title: "Human-Centered Design",
    link: "http://www.designkit.org/methods",
  },
  {
    title: "Design Better Data Tables",
    link: "https://uxdesign.cc/design-better-data-tables-4ecc99d23356",
  },
  {
    title: "Don't feel like an expert? Share anyway.",
    link:
      "https://medium.com/@sara_ann_marie/dont-feel-like-an-expert-share-anyway-661f2f8cd038",
  },
  { title: "Laws of UX", link: "https://lawsofux.com/" },
  { title: "UX Myths", link: "https://uxmyths.com/" },
  { title: "Blush - Design/Illustrations", link: "https://blush.design/" },
  {
    title: "OpenDoodles - Open-Source Illustrations",
    link: "https://www.opendoodles.com/",
  },
  {
    title: "Eloquent JS - Free E-Book",
    link: "https://eloquentjavascript.net/Eloquent_JavaScript.pdf",
  },
  {
    title: "Airbnb JS Style Guide",
    link: "https://github.com/airbnb/javascript",
  },
  {
    title: "Mobbin - Mobile Design Patterns Library",
    link: "https://mobbin.design/",
  },
];

const useStyles = createUseStyles({
  articleContainer: {
    padding: "8px 0px 8px 0px",
  },
  link: {
    color: "#000000",
    textDecoration: "underline",
    "&:hover": {
      fontWeight: "bold",
    },
  },
  source: {
    color: "#AAAAAA",
    paddingTop: "4px",
    margin: 0,
  },
  articlesSubheader: {
    fontWeight: "bold",
  },
  articles: {
    padding: "24px 32px",
  },
  miscContainer: {
    width: "100%",
  },
});

const ArticleCard = ({ link, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.articleContainer}>
      <a href={link} target="blank" className={classes.link}>
        {title}
      </a>
      <p className={classes.source}>[{link}]</p>
    </div>
  );
};

const Misc = () => {
  const classes = useStyles();
  const renderArticles = () =>
    articles.map((a, i) => (
      <ArticleCard key={`article_${i}`} title={a.title} link={a.link} />
    ));

  return (
    <div className={classes.miscContainer}>
      <PageHeading title="Resources" />
      <div className={classes.articles}>
        <p className={classes.articlesSubheader}>
          Some online resources worth sharing:
        </p>
        {renderArticles()}
      </div>
    </div>
  );
};

export default Misc;
