// import { gql } from '@apollo/client';
// import { useEffect, useState } from 'react';
// import client from '../Query/ClientConfig';

// function Posts() {
//   const [postsData, setPost] = useState([]);

//   useEffect(() => {
//     const PostsQuery = async () => {
//       const postData = await client.query({
//         query: gql`
//           query GetPosts {
//             posts {
//               nodes {
//                 slug
//                 title
//                 uri
//                 featuredImage {
//                   node {
//                     mediaDetails {
//                       file
//                       height
//                       sizes {
//                         sourceUrl
//                         name
//                         mimeType
//                         height
//                         fileSize
//                         file
//                         width
//                       }
//                     }
//                     seo {
//                       breadcrumbs {
//                         text
//                         url
//                       }
//                       metaDesc
//                       metaKeywords
//                       title
//                       twitterDescription
//                       twitterTitle
//                       twitterImage {
//                         mediaItemUrl
//                       }
//                     }
//                     slug
//                   }
//                 }
//                 status
//                 content
//               }
//             }
//           }
//         `,
//       });
//       setPost(postData);
//     };
//     PostsQuery();
//   }, []);
//   console.log(postsData?.data?.posts?.nodes);
//   return (
//     <div>
//       <h1>Post</h1>
//     </div>
//   );
// }

// export default Posts;

/* eslint-disable react/no-danger */
import { useQuery } from '@apollo/client';
import { PostsQuery } from '../Query/PostsQuery';

function Posts() {
  // const [postsData, setPost] = useState([]);
  const { data } = useQuery(PostsQuery);
  console.log(data);
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: data?.posts?.nodes[0]?.content }} />
      {/* <h1>dsf</h1> */}
    </div>
  );
}

export default Posts;
