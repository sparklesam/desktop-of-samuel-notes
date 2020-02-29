// @flow strict
import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                twitter
                rss
                medium
                linkedin
                instagram
                email
                github
                telegram
                vkontakte
                line
                gitlab
                weibo
                codepen
                youtube
                soundcloud
              }
            }
            menu {
              label
              path
            }
            category {
              label
              path
            }
            url
            title
            subtitle
            description
            copyright
            disqusShortname
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
