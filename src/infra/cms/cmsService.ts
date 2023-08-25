const TOKEN = process.env.NEXT_DATOCMS_API_TOKEN;
const BASEURL = process.env.NEXT_DATOCMS_API_BASE_URL;

const query = `
  query{
    allProjectCards(orderBy: createdAt_DESC) {
      id
      title
      urlGithub
      urlDeploy
      description
      imageProject {
        id
        url
      }
      titleicon01
      icon01
      titleicon02
      icon02
      titleicon03
      icon03
      titleicon04
      icon04
      titleicon05
      icon05
    }
    allTestimonials(orderBy: _createdAt_ASC){
      id
      name
      occupation
      testimony
      githubUrl
      linkedinUrl
      avatarUrl{
        id
        url
      }
    }
    
    allSkils(orderBy: _createdAt_ASC) {
      id
      title
      icon
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
