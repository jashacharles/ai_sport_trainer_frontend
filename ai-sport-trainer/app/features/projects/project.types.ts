export interface Project {
  id: string;
  clientId: string;
  projectId: string;
  projectName: string;
  sportType: string;
  goal: string;
}

export type CreateProjectInput = Omit<Project, 'id' | 'clientId' | 'projectId'>
