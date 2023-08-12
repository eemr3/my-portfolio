const TOKEN = process.env.NEXT_DATOCMS_API_TOKEN;
const BASEURL = process.env.NEXT_DATOCMS_API_BASE_URL;

const query = `
  query{
    allProjectCards{
      id
      title
      urlGithub
      urlDeploy
      description
      imageProject{
        id
        url
      }
    }
  }
`;

export async function cmsService() {
  try {
    const projectDataResponse = await fetch(BASEURL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }).then(async (response) => {
      const body = await response.json();

      if (body.error) throw new Error(JSON.stringify(body));

      return body;
    });

    return {
      data: {
        ...projectDataResponse.data,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
}
