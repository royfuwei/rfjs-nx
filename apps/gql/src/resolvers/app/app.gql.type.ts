import { AppInfo } from '@rfjs-nx/modules';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class App implements AppInfo {
  @Field(() => String)
  uuid: string;

  @Field(() => String)
  environment: string;
}
