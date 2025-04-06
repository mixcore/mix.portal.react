export enum MixContentStatus {
  Deleted = -1,
  Draft = 0,
  Published = 1,
  Schedule = 2,
  Preview = 3
}

export interface BaseContent {
  id: number;
  createdDateTime: string;
  lastModified?: string;
  createdBy?: string;
  modifiedBy?: string;
  priority: number;
  status: MixContentStatus;
  isDeleted: boolean;
  tenantId: number;
  specificulture?: string;
  isPublic: boolean;
}
