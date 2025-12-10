import { ApiResDataDTO, ApiResPaginatedDTO, TestData } from '@rfjs-nx/common';
import { AppInfoDTO } from '@rfjs-nx/modules';
import { IsString } from 'class-validator';
import { JSONSchema } from 'class-validator-jsonschema';

export interface IAppController {
  getAppPaginated(): Promise<ApiResPaginatedDTO<TestData>>;
  getAppData(): Promise<ApiResDataDTO<AppInfoDTO>>;
}

export class ReqAppBodyDTO {
  @IsString()
  @JSONSchema({
    description: 'app name',
    default: 'api'
  })
  app: string;
}
