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
