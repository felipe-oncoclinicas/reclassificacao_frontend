export interface FileData {
  ID: number;
  LOG_ID: number;
  FILE_NAME: string;
  FILE_TYPE: number;
  FILE_TYPE_V2: number;
  DATE_IN: string;
  DATE_OUT: string;
  DATE_V2: string;
  STATUS: 'P' | 'R';
  FILE_PATH: string;
  FILE_NAME_V2: string;
}
