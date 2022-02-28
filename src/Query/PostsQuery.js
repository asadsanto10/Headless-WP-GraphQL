import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const PostsQuery = gql`
  query GetPosts {
    posts {
      nodes {
        slug
        title
        uri
        featuredImage {
          node {
            mediaDetails {
              file
              height
              sizes {
                sourceUrl
                name
                mimeType
                height
                fileSize
                file
                width
              }
            }
            seo {
              breadcrumbs {
                text
                url
              }
              metaDesc
              metaKeywords
              title
              twitterDescription
              twitterTitle
              twitterImage {
                mediaItemUrl
              }
            }
            slug
          }
        }
        status
        content
      }
    }
  }
`;
