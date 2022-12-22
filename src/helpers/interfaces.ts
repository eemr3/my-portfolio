export interface IDataProjectProps {
  id: number;
  title: string;
  urlImage: string;
  urlProject: string;
}

export interface IProjectProps {
  project: IDataProjectProps[];
}

export interface IDataProps {
  data: IDataProjectProps[];
}

export interface ImageProject {
  id: string;
  url: string;
}

export interface ProjectDataProps {
  id: string;
  imageProject: ImageProject;
  title: string;
  urlProject: string;
}

export interface PorpsProject {
  data: ProjectDataProps[];
}

export interface AllProjectCards {
  allProjectCards: ProjectDataProps;
}

export interface Data extends AllProjectCards {
  content: {
    allProjectCards: ProjectDataProps[];
  };
  projectData?: ProjectDataProps[];
}
