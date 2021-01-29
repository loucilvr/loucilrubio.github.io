import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import commonStyles from '../../common/commonStyles';

const articles = [
    {
        title: 'Human-Centered Design',
        link: 'http://www.designkit.org/methods',
    },
    {
        title: 'Design Better Data Tables',
        link: 'https://uxdesign.cc/design-better-data-tables-4ecc99d23356',
    },
    {
        title: "Don't feel like an expert? Share anyway.",
        link:
            'https://medium.com/@sara_ann_marie/dont-feel-like-an-expert-share-anyway-661f2f8cd038',
    },
];

const useStyles = createUseStyles({
    articleContainer: {
        padding: '8px 0px 8px 0px',
    },
    link: {
        color: '#005891',
        textDecoration: 'underline',
    },
    source: {
        display: 'inline',
        marginLeft: '8px',
    },
    articlesSubheader: {
        color: '#8a8a8a',
        fontWeight: 'bold',
    },
    ...commonStyles,
    articles: {
        padding: '24px',
    },
});

const ArticleCard = ({ link, title }) => {
    const classes = useStyles();
    return (
        <div className={classes.articleContainer}>
            <Link to={link} className={classes.link}>
                {title}
            </Link>
            <p className={classes.source}>[{link}]</p>
        </div>
    );
};

const Misc = () => {
    const classes = useStyles();
    const renderArticles = () =>
        articles.map((a) => <ArticleCard title={a.title} link={a.link} />);

    return (
        <div>
            <h3 className={classes.heading}>Miscellaneous</h3>
            <div className={classes.articles}>
                <p className={classes.articlesSubheader}>
                    Some articles worth sharing:
                </p>
                {renderArticles()}
            </div>
        </div>
    );
};

export default Misc;
