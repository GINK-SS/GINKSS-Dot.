export interface ProjectInfo {
  name: string;
  role: string;
  people: string[];
  github: string;
  contents: {
    type: string;
    content: string[] | string;
  }[];
}
